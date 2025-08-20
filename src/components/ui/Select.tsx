import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  size = "md",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={selectRef} className={clsx("relative", className)}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={clsx(
          "w-full text-left border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent",
          sizeClasses[size],
          selectedOption
            ? "border-border text-text-primary"
            : "border-border text-text-tertiary",
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "hover:border-accent"
        )}
      >
        <div className="flex items-center justify-between">
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg
            className={clsx(
              "w-4 h-4 transition-transform",
              isOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value);
                  setIsOpen(false);
                }
              }}
              disabled={option.disabled}
              className={clsx(
                "w-full text-left px-4 py-2 hover:bg-surface-secondary transition-colors",
                option.value === value &&
                  "bg-accent text-white hover:bg-accent",
                option.disabled && "opacity-50 cursor-not-allowed",
                !option.disabled && "cursor-pointer"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
