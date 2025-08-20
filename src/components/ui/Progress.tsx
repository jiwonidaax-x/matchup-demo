import React from "react";
import clsx from "clsx";

interface ProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "error";
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const variantClasses = {
    default: "bg-toss-primary-blue",
    success: "bg-toss-semantic-success",
    warning: "bg-toss-semantic-warning",
    error: "bg-toss-semantic-error",
  };

  return (
    <div className={clsx("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-text-secondary mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}

      <div
        className={clsx(
          "w-full bg-surface-secondary rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <div
          className={clsx(
            "h-full transition-all duration-300 ease-out rounded-full",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
