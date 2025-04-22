import React from "react";
import { ColorType } from "./model/model";
import { SizeType } from "./model/model";

export const Input = ({
    type,
    placeholder,
    color,
    size,
    name, // Добавляем новое свойство
    value,
    onChange,
}: {
    type: string;
    placeholder: string;
    color: ColorType;
    size: SizeType;
    name: string; // Определяем тип для name
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    const defaultClass = "border rounded-2 px-3 py-2";
    const classes = {
        colors: {
            primary: "border-purple-950 focus:border-purple-950",
            secondary: "purple-950 focus:border-purple-950",
        },
        sizes: {
            small: "text-sm h-[32px]",
            medium: "text-base h-[40px]",
            large: "text-lg h-[48px]",
        },
    };
    if (!classes.colors[color]) {
        throw new Error(`Unsupported color: ${color}`);
    }
    if (!classes.sizes[size]) {
        throw new Error(`Unsupported size: ${size}`);
    }
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${defaultClass} ${classes.colors[color]} ${classes.sizes[size]}`}
            name={name} // Используем свойство name
            value={value}
            onChange={onChange}
        />
    );
};