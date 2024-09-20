import * as React from "react";

import styles from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  let variants: string;
  switch (variant) {
    case "secondary":
      variants = styles.secondary;
      break;
    case "danger":
      variants = styles.danger;
      break;
    default:
      variants = styles.primary;
      break;
  }
  return (
    <button className={`${styles.content} ${variants}`} {...props}>
      {children}
    </button>
  );
};

export { Button };
