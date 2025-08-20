import React from "react";
import clsx from "clsx";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  size = "md",
  className,
}) => {
  const variantClasses = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  const sizeClasses = {
    sm: "border-toss-neutral-gray_200",
    md: "border-toss-neutral-gray_300",
    lg: "border-toss-neutral-gray_400",
  };

  const orientationClasses = {
    horizontal: "w-full border-t",
    vertical: "h-full border-l",
  };

  return (
    <div
      className={clsx(
        variantClasses[variant],
        sizeClasses[size],
        orientationClasses[orientation],
        className
      )}
    />
  );
};
