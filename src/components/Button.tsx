import React from "react";

type buttonProps = {
  children?: React.ReactNode;
  isDisabled?: boolean;
  type: "submit" | "button" | undefined;
  version?: string;
};
const defaultProps: buttonProps = {
  isDisabled: false,
  type: "button",
  version: "primary",
};
const Button: React.FC<buttonProps> = ({
  children,
  version,
  type,
  isDisabled,
}) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
