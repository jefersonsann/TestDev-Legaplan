import * as React from "react";
import styles from "./input.module.scss";

interface InputCompProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputComp = ({ label, id, ...props }: InputCompProps) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input id={id} className={styles.input} {...props} />
    </div>
  );
};

export { InputComp as Input };
