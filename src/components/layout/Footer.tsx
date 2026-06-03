import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-borderSoft bg-white py-12">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <img
            alt={siteContent.global.brand.companyName}
            className="h-10 w-auto max-w-[180px] object-contain brightness-0"
            src={siteContent.global.brand.logoPath}
          />
          <p className="mt-4 text-sm leading-7 text-muted">
            Indeed広告の運用、求人原稿、解析、改善提案まで一気通貫で支援する採用パートナーサイトです。
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-black text-ink">Pages</h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              {siteContent.pages.slice(0, 5).map((page) => (
                <li key={page.path}><Link className="hover:text-brandBlue" to={page.path}>{page.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black text-ink">Company</h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              <li><Link className="hover:text-brandBlue" to="/company/">会社情報</Link></li>
              <li><Link className="hover:text-brandBlue" to="/platinum-partner/">プラチナパートナーについて</Link></li>
              <li><Link className="hover:text-brandBlue" to="/contact/">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black text-ink">Contact</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              {siteContent.global.company.address}<br />
              {siteContent.global.company.tel}<br />
              {siteContent.global.company.email}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
