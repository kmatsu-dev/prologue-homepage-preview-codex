import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderSoft bg-white/95 backdrop-blur">
      <div className="container-site flex min-h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3 text-ink" onClick={() => setOpen(false)} to="/">
          <img
            alt={siteContent.global.brand.companyName}
            className="h-9 w-auto max-w-[160px] object-contain brightness-0"
            src={siteContent.global.brand.logoPath}
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {siteContent.global.navigation.map((item) => (
            <Link
              className="text-sm font-bold text-ink transition hover:text-brandBlue"
              key={item.href}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="bg-brandBlue px-7 py-5 text-sm font-bold text-white transition hover:bg-blueHover" to="/contact/">
            {siteContent.global.ctas.primary.label}
          </Link>
        </nav>
        <button
          aria-expanded={open}
          aria-label="メニューを開閉"
          className="grid h-11 w-11 place-items-center border border-borderSoft lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-borderSoft bg-white lg:hidden">
          <div className="container-site grid py-4">
            {siteContent.global.navigation.map((item) => (
              <Link className="border-b border-line py-4 text-sm font-bold text-ink" key={item.href} onClick={() => setOpen(false)} to={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="mt-4 bg-brandBlue px-5 py-4 text-center text-sm font-bold text-white" onClick={() => setOpen(false)} to="/contact/">
              {siteContent.global.ctas.primary.label}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
