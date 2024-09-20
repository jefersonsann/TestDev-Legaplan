import * as React from "react";

import styles from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, ref) => {
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
      <button ref={ref} className={`${styles.content} ${variants}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
