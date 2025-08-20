import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-t-primary",
    bottom:
      "bottom-full left-1/2 transform -translate-x-1/2 border-b-primary",
    left: "left-full top-1/2 transform -translate-y-1/2 border-l-primary",
    right:
      "right-full top-1/2 transform -translate-y-1/2 border-r-primary",
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isVisible && (
        <div
          className={clsx(
            "absolute z-50 px-3 py-2 text-sm text-white bg-primary rounded-lg shadow-lg whitespace-nowrap",
            positionClasses[position],
            className
          )}
        >
          {content}
          <div
            className={clsx(
              "absolute w-0 h-0 border-4 border-transparent",
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  );
};
