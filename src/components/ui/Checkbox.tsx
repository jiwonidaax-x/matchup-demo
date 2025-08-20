import React from "react";
import clsx from "clsx";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
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

  const iconSizes = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <label className={clsx("flex items-center cursor-pointer", className)}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={clsx(
            "border-2 rounded transition-colors flex items-center justify-center",
            sizeClasses[size],
            checked ? "bg-accent border-accent" : "bg-white border-border",
            disabled && "opacity-50 cursor-not-allowed",
            !disabled && "hover:border-accent"
          )}
        >
          {checked && (
            <svg
              className={clsx("text-white", iconSizes[size])}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
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
