import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4 text-text-primary">
        {title}
      </h3>
      <div className="text-text-secondary">{children}</div>
    </div>
  );
};
