import { useState } from "react";
import styles from "@/styles/input.module.scss";
import { InputProps } from "@/types/general";
import { cn } from "@/lib/utils";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  animatePlaceholder,
  height,
  borderRadius,
  border,
  name,
  error,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>
        <input
          className={cn(
            styles.input,
            error && styles.errorField,
            animatePlaceholder && styles.animateInputPlaceholder
          )}
          type={inputType}
          name={name}
          placeholder=" "
          value={value}
          onChange={onChange}
          style={{ height, borderRadius, border }}
        />

        <span
          className={cn(
            styles.placeholder,
            !animatePlaceholder && styles.defaultPlaceholder
          )}
        >
          {label}
        </span>

        {isPassword && (
          <span
            className={styles.toggle}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </span>
        )}
      </label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
