import React from "react";
import clsx from "clsx";

interface BadgeProps {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "destructive"
    | "success"
    | "warning"
    | "error"
    | "info";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
}) => {
  const styles = {
    default: "bg-accent text-white",
    secondary: "bg-surface-secondary text-text-secondary",
    outline:
      "bg-transparent text-text-secondary border border-border",
    destructive: "bg-error text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    error: "bg-error text-white",
    info: "bg-info text-white",
  };

  return (
    <span
      className={clsx(
        "px-2 py-1 rounded-md text-xs font-medium",
        styles[variant]
      )}
    >
      {children}
    </span>
  );
};
