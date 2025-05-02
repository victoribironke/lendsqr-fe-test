import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export type InputProps = {
  label: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  height?: string;
  borderRadius?: string;
  border?: string;
  error?: string;
  animatePlaceholder?: boolean;
};

export type ButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  height?: string;
  borderRadius?: string;
  width?: string;
  onClick?: () => void;
};

export type SidebarProps = {
  height?: string;
  boxShadow?: string;
  toggleMenu?: () => void;
};

export type UsersContextProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  activateUser: (userId: string) => void;
  blacklistUser: (userId: string) => void;
  deactivateUser: (userId: string) => void;
  loading: boolean;
  stats: {
    totalUsers: number;
    activeUsers: number;
    usersWithLoans: number;
    usersWithSavings: number;
  };
  uniqueOrganizations: {
    label: string;
    value: string;
  }[];
};

export type UserData = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
};

export type User = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residenceType: string;
  educationLevel: string;
  employmentStatus: string;
  sector: string;
  durationEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: number;
  savings: number;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantors: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
  tier: number;
  balance: number;
  bank: string;
  accountNumber: number;
  bankId: string;
  status: string;
  organization: string;
  username: string;
  dateJoined: string;
};

export type FilterValues = {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
};

export type FilterPanelProps = {
  values: FilterValues;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFilter: () => void;
  onClose: () => void;
};

export type UsersTableProps = {
  data: User[];
  filters: FilterValues;
  onFilterChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onFilterApply: () => void;
};

export type Option = { label: string; value: string };

export type SelectProps = {
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  direction?: "top" | "bottom";
};

export type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: (val: number) => void;
};
