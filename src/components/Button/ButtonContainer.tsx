import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonContainer: React.FC<ButtonPropsContainer> = ({
  variant = "text",
  label = "",
}: ButtonPropsContainer) => {
  return <ButtonComponent variant={variant} label={label} />;
};

export default ButtonContainer;
