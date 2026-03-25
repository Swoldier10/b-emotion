"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-all duration-300 rounded-full";

  const variants = {
    primary:
      "bg-primary text-dark hover:bg-primary/90 hover:scale-105",
    secondary:
      "border border-white text-white hover:border-primary hover:text-primary hover:scale-105",
    ghost: "text-primary hover:text-primary/80 underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
