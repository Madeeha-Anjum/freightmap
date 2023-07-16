import React from "react";
import classnames from "classnames";

interface IconButtonInterface {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton: React.FC<IconButtonInterface> = ({
  title,
  className,
  children,
  onClick,
}) => {
  const iconButtonClassName = classnames(
    className,
    "w-16 h-16 p-2 rounded-full shadow-2xl border-transparent border-2 border-b-4 hover:text-white",
    "active:scale-95 transition duration-200 ease-in-out"
  );

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={iconButtonClassName}
    >
      {children}
    </button>
  );
};

export default IconButton;
