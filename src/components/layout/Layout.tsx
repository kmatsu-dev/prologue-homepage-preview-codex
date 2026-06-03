import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-warm text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
