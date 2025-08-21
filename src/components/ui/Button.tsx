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
    "font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-[#0d9488] active:brightness-90 shadow-[0_2px_4px_-1px_rgba(20,184,166,0.3)] hover:shadow-[0_4px_8px_-1px_rgba(20,184,166,0.4)] hover:-translate-y-[1px] active:translate-y-0 disabled:bg-text-disabled disabled:shadow-none disabled:transform-none",
    secondary:
      "bg-white text-primary border border-primary hover:bg-surface-secondary active:brightness-95 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)]",
    ghost:
      "bg-transparent text-text-secondary hover:bg-surface-secondary active:bg-surface-secondary",
  };

  const sizeStyles = {
    small: "px-2.5 py-1.5 text-sm rounded-md",
    default: "px-4 py-2 text-sm rounded-md",
    large: "px-5 py-2.5 text-base rounded-lg",
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
