import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  placement = "bottom",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const placementClasses = {
    top: "bottom-full left-0 mb-2",
    bottom: "top-full left-0 mt-2",
    left: "right-full top-0 mr-2",
    right: "left-full top-0 ml-2",
  };

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={clsx("relative inline-block", className)}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={clsx(
            "absolute z-50 min-w-48 bg-white rounded-toss-lg shadow-toss-lg border border-toss-neutral-gray_200 py-1",
            placementClasses[placement]
          )}
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={clsx(
                "w-full px-4 py-2 text-left text-sm text-toss-neutral-gray_700 hover:bg-toss-neutral-gray_50 hover:text-toss-neutral-black transition-colors flex items-center",
                item.disabled &&
                  "opacity-50 cursor-not-allowed hover:bg-transparent"
              )}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
