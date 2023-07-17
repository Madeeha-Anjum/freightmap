import classnames from "classnames";
import React from "react";

interface ButtonInterface {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  title?: string;
  children?: React.ReactNode;
  kind?: "primary" | "secondary";
  size?: "default" | "compact";
}

const Button: React.FC<ButtonInterface> = ({
  className,
  children,
  onClick,
  title = "Button",
  type = "button",
  kind = "primary",
  size = "default",
}) => {
  const buttonClassName = classnames(
    "self-center py-2 mb-2 font-semibold border-b-white border-b-2 hover:bg-opacity-80 rounded-2xl space-x-2",
    className,
    {
      "bg-green-400": kind === "primary",
      "bg-blue-500": kind === "secondary",
    },
    {
      "w-48": size === "default",
      "w-32": size === "compact",
    }
  );

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      type={type}
      title={title}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
