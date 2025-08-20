import React, { useState } from "react";
import clsx from "clsx";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: "default" | "pills" | "underline";
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  variant = "default",
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const variantStyles = {
    default: {
      container: "border-b border-toss-neutral-gray_200",
      tab: "px-4 py-2 text-sm font-medium text-toss-neutral-gray_500 hover:text-toss-neutral-gray_700 border-b-2 border-transparent hover:border-toss-neutral-gray_300 transition-colors",
      active: "text-toss-primary-blue border-toss-primary-blue",
      disabled:
        "text-toss-neutral-gray_300 cursor-not-allowed hover:text-toss-neutral-gray_300 hover:border-transparent",
    },
    pills: {
      container: "flex space-x-1 bg-toss-neutral-gray_100 p-1 rounded-toss-lg",
      tab: "px-3 py-2 text-sm font-medium text-toss-neutral-gray_700 rounded-toss-md transition-colors",
      active: "bg-white text-toss-neutral-black shadow-toss-sm",
      disabled: "text-toss-neutral-gray_300 cursor-not-allowed",
    },
    underline: {
      container: "border-b border-toss-neutral-gray_200",
      tab: "px-4 py-2 text-sm font-medium text-toss-neutral-gray_500 hover:text-toss-neutral-gray_700 border-b-2 border-transparent hover:border-toss-neutral-gray_300 transition-colors",
      active: "text-toss-neutral-black border-toss-neutral-black",
      disabled:
        "text-toss-neutral-gray_300 cursor-not-allowed hover:text-toss-neutral-gray_300 hover:border-transparent",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <div className={className}>
      <div className={currentVariant.container}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={clsx(
              currentVariant.tab,
              activeTab === tab.id && currentVariant.active,
              tab.disabled && currentVariant.disabled
            )}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
