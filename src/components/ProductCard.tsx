import React from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: string;
};

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-600 font-semibold">Цена: {product.price} ₽</p>
        </div>
    );
};