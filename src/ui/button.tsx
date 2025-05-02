import { ButtonProps } from "@/types/general";
import styles from "@/styles/button.module.scss";

const Button = ({
  children,
  backgroundColor = "#00d8dc",
  textColor = "#fff",
  borderRadius = "0.5rem",
  height = "3rem",
  width = "100%",
  onClick,
}: ButtonProps) => {
  const styleOverrides = {
    backgroundColor,
    color: textColor,
    height,
    borderRadius,
    width,
  };

  return (
    <button className={styles.button} style={styleOverrides} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
