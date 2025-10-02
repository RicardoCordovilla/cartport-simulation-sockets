import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  value?: string | number;
  onClick?: (value: any) => void;
}

export const Button = ({
  variant = "primary",
  value,
  onClick,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md border-2";
  const variantStyles = {
    primary: "bg-blue-500 text-white border-blue-600 active:bg-blue-700",
    secondary: "bg-gray-500 text-white border-gray-600 active:bg-gray-700",
  };

  const handleClick = () => {
    if (onClick) onClick(value);
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      onClick={handleClick}
      {...props}
    >
      {children} {value !== undefined ? `$${value}` : ""}
    </button>
  );
};
