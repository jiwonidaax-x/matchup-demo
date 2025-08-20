import React, { useState } from "react";
import clsx from "clsx";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  return (
    <div className={clsx("space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-toss-neutral-gray_200 rounded-toss-lg overflow-hidden"
          >
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={clsx(
                "w-full px-4 py-3 text-left bg-white hover:bg-toss-neutral-gray_50 transition-colors flex items-center justify-between",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <span className="font-medium text-toss-neutral-black">
                {item.title}
              </span>
              <svg
                className={clsx(
                  "w-5 h-5 text-toss-neutral-gray_500 transition-transform",
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
            </button>

            {isOpen && (
              <div className="px-4 py-3 bg-toss-neutral-gray_50 border-t border-toss-neutral-gray_200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
