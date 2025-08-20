import React from "react";
import clsx from "clsx";

interface RadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <label className={clsx("flex items-center cursor-pointer", className)}>
      <div className="relative">
        <input
          type="radio"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={clsx(
            "border-2 rounded-full transition-colors flex items-center justify-center",
            sizeClasses[size],
            checked ? "border-accent" : "border-border",
            disabled && "opacity-50 cursor-not-allowed",
            !disabled && "hover:border-accent"
          )}
        >
          {checked && (
            <div className={clsx("bg-accent rounded-full", dotSizes[size])} />
          )}
        </div>
      </div>
      {label && (
        <span
          className={clsx(
            "ml-2 text-text-primary",
            disabled && "text-text-disabled"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};
