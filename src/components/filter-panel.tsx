import styles from "@/styles/filter-panel.module.scss";
import { FilterPanelProps } from "@/types/general";
import { useUsers } from "@/context/user-context";
import Input from "@/ui/input";
import { ChangeEvent } from "react";
import Select from "@/ui/select";
import { USER_STATUS } from "@/constants/constants";

const FilterPanel = ({
  values,
  onChange,
  onFilter,
  onClose,
}: FilterPanelProps) => {
  const { uniqueOrganizations } = useUsers();

  const handleReset = () => {
    onChange({
      target: { name: "organization", value: "" },
    } as ChangeEvent<HTMLInputElement>);
    onChange({
      target: { name: "username", value: "" },
    } as ChangeEvent<HTMLInputElement>);
    onChange({
      target: { name: "email", value: "" },
    } as ChangeEvent<HTMLInputElement>);
    onChange({
      target: { name: "date", value: "" },
    } as ChangeEvent<HTMLInputElement>);
    onChange({
      target: { name: "phoneNumber", value: "" },
    } as ChangeEvent<HTMLInputElement>);
    onChange({
      target: { name: "status", value: "" },
    } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Organization
        <Select
          placeholder="Select"
          options={uniqueOrganizations}
          value={values.organization}
          onChange={(e) =>
            onChange({
              target: { name: "organization", value: e },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        />
      </label>
      <label className={styles.label}>
        Username
        <Input
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
          label="User"
          height="40px"
          borderRadius="8px"
          border="1px solid #213F7D20"
        />
      </label>
      <label className={styles.label}>
        Email
        <Input
          type="text"
          name="email"
          value={values.email}
          onChange={onChange}
          label="Email"
          height="40px"
          borderRadius="8px"
          border="1px solid #213F7D20"
        />
      </label>
      <label className={styles.label}>
        Date
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={onChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Phone Number
        <Input
          type="number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={onChange}
          label="Phone Number"
          height="40px"
          borderRadius="8px"
          border="1px solid #213F7D20"
        />
      </label>
      <label className={styles.label}>
        Status
        <Select
          placeholder="Select"
          options={USER_STATUS}
          value={values.status}
          onChange={(e) =>
            onChange({
              target: { name: "status", value: e },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        />
      </label>

      <div className={styles.buttons}>
        <button type="button" className={styles.reset} onClick={handleReset}>
          Reset
        </button>
        <button
          type="button"
          className={styles.filter}
          onClick={() => {
            onFilter();
            onClose();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
