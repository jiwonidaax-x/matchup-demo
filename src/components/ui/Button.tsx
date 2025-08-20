import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "default" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-[#0d9488] shadow-[0_2px_4px_-1px_rgba(20,184,166,0.3)] hover:shadow-[0_4px_8px_-1px_rgba(20,184,166,0.4)] hover:-translate-y-[1px] disabled:bg-text-disabled disabled:shadow-none disabled:transform-none",
    secondary:
      "bg-white text-primary border border-primary hover:bg-surface-secondary shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)]",
    ghost:
      "bg-transparent text-text-secondary hover:bg-surface-secondary",
  };

  const sizeStyles = {
    small: "px-3 py-2 text-sm rounded-md",
    default: "px-5 py-3 text-base rounded-lg",
    large: "px-6 py-4 text-lg rounded-xl",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
