import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseStyles = "font-semibold rounded-full transition-colors";
  const variantStyles = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
  };
  const sizeStyles = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
