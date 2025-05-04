import React from "react";

export const Button = ({ children, onClick, className = "", variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none transition";
  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
