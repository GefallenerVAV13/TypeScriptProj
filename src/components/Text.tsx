import React from "react";

type ColorType = "primary" | "secondary";
type SizeType = "small" | "medium" | "large";

export const Text = ({
    color,
    size,
    children,
}: {
    color: ColorType;
    size: SizeType;
    children: React.ReactNode;
}) => {
    const defaultClass = "font-sans";

    const classes = {
        colors: {
            primary: "text-purple-950",
            secondary: "text-purple-950",
        },
        sizes: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
        },
    };
    if (!classes.colors[color]) {
        throw new Error(`Unsupported color: ${color}`);
    }
    if (!classes.sizes[size]) {
        throw new Error(`Unsupported size: ${size}`);
    }

    return (
        <p className={`${defaultClass} ${classes.colors[color]} ${classes.sizes[size]}`}>
            {children}
        </p>
    );
};