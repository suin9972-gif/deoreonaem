import type { ButtonHTMLAttributes } from "react";

// primary-action: 화면당 하나만 (DESIGN.md 사용 경계)
export default function PrimaryButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`h-12 w-full rounded-pill border-2 border-black bg-accent text-[16px] font-bold tracking-[-0.5px] text-black disabled:opacity-40 ${className}`}
    />
  );
}
