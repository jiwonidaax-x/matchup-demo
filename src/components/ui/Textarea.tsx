import React from "react";
import clsx from "clsx";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  error,
  size = "md",
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-4 text-lg",
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          "border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-vertical",
          sizeClasses[size],
          error ? "border-error" : "border-border",
          className
        )}
        {...props}
      />
      {helperText && !error && (
        <p className="text-xs text-text-tertiary">{helperText}</p>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
};
