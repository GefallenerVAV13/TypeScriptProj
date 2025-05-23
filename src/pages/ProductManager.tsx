import React, { useState, useEffect } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import { Helmet } from "react-helmet";


type Product = {
    id: number;
    title: string;
    description: string;
    price: string;
};

export default function ProductManager() {
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
        if(typeof(newProduct.price) != 'number')
        {
            alert("Пожалуйста, заполните поля корректно");
            return;
        }
    
        try {
            console.log("Отправка данных на сервер:", newProduct); // Логирование данных
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Данные успешно добавлены:", data); // Логирование ответа
            setProducts((prevProducts) => [...prevProducts, data]);
            setNewProduct({ title: "", description: "", price: "" });
            setIsModalOpen(false);
        } catch (error) {
            console.error("Ошибка при добавлении товара:", error);
            alert("Не удалось добавить товар. Попробуйте еще раз.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Товары</title>
                <meta
                    name="description" content = "Просмотрите список товаров"
                />
                <meta name="keywords" content="товары, список, список товаров" />
            </Helmet>
            <div className="p-8">
                {/* Кнопка для открытия модального окна */}
                <Button
                    color="primary"
                    size="medium"
                    title="Добавить товар"
                    onClick={() => setIsModalOpen(true)}
                />

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
                    <h1 className="text-3xl font-bold mb-4 flex-grow pb-16">Список товаров</h1>
                    {products.length === 0 ? (
                        <p className="text-gray-500">Товары не добавлены</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>       
                    )}
                </div>
            </div>
        </>
    );
}