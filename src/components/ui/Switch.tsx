import React from "react";
import clsx from "clsx";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: {
      container: "w-8 h-4",
      thumb: "w-3 h-3",
      translate: "translate-x-4",
    },
    md: {
      container: "w-11 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-5",
    },
    lg: {
      container: "w-14 h-7",
      thumb: "w-6 h-6",
      translate: "translate-x-7",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={clsx(
        "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-toss-primary-blue focus:ring-offset-2",
        checked ? "bg-toss-primary-blue" : "bg-toss-neutral-gray_300",
        disabled && "opacity-50 cursor-not-allowed",
        currentSize.container,
        className
      )}
    >
      <span
        className={clsx(
          "inline-block rounded-full bg-white shadow-toss-sm transition-transform",
          checked ? currentSize.translate : "translate-x-0.5",
          currentSize.thumb
        )}
      />
    </button>
  );
};
