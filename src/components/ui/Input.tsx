import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <input
        className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
          error ? "border-error" : "border-border"
        } ${className}`}
        {...props}
      />
      {helperText && !error && (
        <p className="text-xs text-text-tertiary">{helperText}</p>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
};
