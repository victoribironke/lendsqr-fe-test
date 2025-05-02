import React from "react";

export type InputProps = {
  label: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: string;
  borderRadius?: string;
  border?: string;
  error?: string;
  animatePlaceholder?: boolean;
};

export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  height?: string;
  borderRadius?: string;
  width?: string;
  onClick?: () => void;
};
