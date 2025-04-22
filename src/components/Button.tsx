import React from "react";
import { SizeType } from "./model/model";
import { ColorType } from "./model/model";

export interface IButtonProps {
    size: SizeType;
    color: ColorType;
    title: string;
    onClick: () => void; 
    children?: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
    const { size, color, title, onClick, children } = props;
    const defaultClass =
        "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2 cursor-pointer"; 
    const classes = {
        colors: {
            primary: {
                button: "bg-purple-950",
                text: "text-white",
            },
            secondary: {
                button: "bg-purple-950",
                text: "text-white",
            },
        },
        sizes: {
            small: "rounded-[100px] font-sm",
            medium: "rounded-[14px] font-base",
            large: "rounded-[16px] font-base min-h-[56px]",
        },
    };
    return (
        <div
            className={
                defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button
            }
            onClick={onClick} // Вызов обработчика клика
        >
            <div className={classes.colors[color].text}>
                {title || children} {/* Отображаем текст кнопки */}
            </div>
        </div>
    );
};