import React, { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

type Product = {
    id: number;
    title: string;
    description: string;
    price: string;
};

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: "",
    });

    // Загрузка товаров с сервера
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Обработчик изменения полей формы
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    // Обработчик добавления нового товара
    const handleAddProduct = async () => {
        if (!newProduct.title || !newProduct.description || !newProduct.price) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
            const data = await response.json();
            setProducts((prevProducts) => [...prevProducts, data]);
            setNewProduct({ title: "", description: "", price: "" });
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Кнопка для открытия модального окна */}
           

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Добавить товар</h2>
                        <div className="mb-4">
                            <label className="block mb-1">Название:</label>
                            <Input
                                type="text"
                                placeholder="Введите название"
                                color="primary"
                                size="medium"
                                name="title"
                                value={newProduct.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Описание:</label>
                            <Input
                                type="text"
                                placeholder="Введите описание"
                                color="primary"
                                size="medium"
                                name="description"
                                value={newProduct.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Цена:</label>
                            <Input
                                type="text"
                                placeholder="Введите цену"
                                color="primary"
                                size="medium"
                                name="price"
                                value={newProduct.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button
                                color="secondary"
                                size="medium"
                                title="Добавить"
                                onClick={handleAddProduct}
                            />
                            <Button
                                color="secondary"
                                size="medium"
                                title="Отмена"
                                onClick={() => setIsModalOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Отображение списка товаров */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Список товаров</h1>
                {products.length === 0 ? (
                    <p className="text-gray-500">Товары не добавлены</p>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>

            <Button
                color="primary"
                size="medium"
                title="Добавить товар"
                onClick={() => setIsModalOpen(true)}
            />
        </div>
    );
}