import { useState } from "react";
import { SelectProps } from "@/types/general";
import styles from "@/styles/select.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Select = ({
  placeholder,
  options,
  value,
  onChange,
  direction,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <span>{value || placeholder}</span>

        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <ul
          className={`${styles.options} ${direction === "top" && styles.top}`}
        >
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
