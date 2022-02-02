import Button from "@mui/material/Button";
import React from "react";

const ButtonComponent: React.FC<ButtonPropsComponent> = ({
  variant = "text",
  label = "",
}: ButtonPropsComponent) => {
  return <Button variant={variant}>{label}</Button>;
};

export default ButtonComponent;
