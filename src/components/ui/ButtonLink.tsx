import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Cta } from "../../data/siteContent";

type ButtonLinkProps = Cta & {
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function ButtonLink({ label, href, variant = "primary", className = "" }: ButtonLinkProps) {
  const variants = {
    primary: "bg-brandBlue text-white hover:bg-blueHover border-brandBlue",
    secondary: "bg-white text-ink hover:border-brandBlue border-borderSoft",
    dark: "bg-transparent text-white border-white/40 hover:border-white",
  };

  return (
    <Link
      className={`inline-flex min-h-[52px] items-center justify-center gap-3 border px-6 py-3 text-sm font-bold transition duration-200 ${variants[variant]} ${className}`}
      to={href}
    >
      {label}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
