import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Giới thiệu" },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container-prose flex items-center justify-between h-16 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-sm md:text-lg italic shrink-0">
              P
            </span>
            <span className="font-display text-sm md:text-lg tracking-tight truncate leading-tight">
              Trần Văn Phúc
              <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground">
                Digital Portfolio
              </span>
            </span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-8 shrink-0">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="nav-link text-xs sm:text-sm md:text-[0.9rem]"
                  data-active={active}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border mt-24">
        <div className="container-prose py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © 2026 Trần Văn Phúc · Portfolio môn{" "}
            <span className="text-foreground">Nhập môn Công nghệ số</span>
          </p>
          <p className="font-display italic">
            "Tri thức bắt đầu từ sự tổ chức."
          </p>
        </div>
      </footer>
    </div>
  );
}
