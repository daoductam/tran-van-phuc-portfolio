import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trần Văn Phúc — Digital Portfolio" },
      {
        name: "description",
        content:
          "Portfolio kỹ thuật số tổng hợp 6 bài thực hành môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.",
      },
      { property: "og:title", content: "Trần Văn Phúc — Digital Portfolio" },
      {
        property: "og:description",
        content:
          "Sáu bài thực hành về kỹ năng số, AI tạo sinh, cộng tác trực tuyến và liêm chính học thuật.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* ── Hero Section (2-Column Layout) ── */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1.5px 1.5px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-prose relative grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-10 md:gap-16 items-center">
          {/* Cột trái: Ảnh chân dung */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-gold/15 to-accent/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden ring-[3px] ring-primary/20 ring-offset-4 ring-offset-background shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/images/avatar.png"
                  alt="Trần Văn Phúc"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Cột phải: Thông tin & Giới thiệu */}
          <div className="flex flex-col text-center md:text-left">
            <span className="chip w-fit mx-auto md:mx-0">Digital Portfolio · 2026</span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">
              Trần Văn Phúc
            </h1>

            <p className="mt-2 text-md lg:text-lg text-primary font-display italic font-medium">
              Sinh viên ngành Dược · Đại học Y Dược, Đại học Quốc gia Hà Nội
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
              Chào mừng bạn đến với góc học tập trực tuyến của tôi. Trang web này là nơi lưu trữ sáu bài thực hành từ học phần
              <strong className="text-foreground"> Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</strong>,
              đánh dấu hành trình phát triển năng lực số, ứng dụng AI sáng tạo cùng tinh thần liêm chính học thuật.
            </p>

            {/* Thông tin thẻ sinh viên tối giản */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0">
              {[
                { label: "MSV", value: "22100289" },
                { label: "Lớp", value: "E252023" },
                { label: "Ngành", value: "Dược" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col p-3 rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm"
                >
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </span>
                  <span className="font-semibold text-foreground text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Nút hành động */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                to="/du-an"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition font-medium text-sm"
              >
                Xem 6 dự án →
              </Link>
              <Link
                to="/tong-ket"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/40 hover:bg-secondary transition font-medium text-sm"
              >
                Trang tổng kết
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats & Details ── */}
      <section className="container-prose pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { k: "06", v: "Sản phẩm thực hành hoàn chỉnh" },
            { k: "06", v: "Nhóm kỹ năng số cốt lõi" },
            { k: "100%", v: "Tôn trọng liêm chính học thuật" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="font-display text-5xl text-primary">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="chip">Mục tiêu</span>
            <h2 className="font-display text-4xl mt-4">
              Học để làm — và để chia sẻ.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Tôi thiết kế Portfolio này nhằm{" "}
              <strong className="text-foreground">
                hệ thống hóa các năng lực số đạt được
              </strong>
              , lưu trữ các bài tập cá nhân một cách khoa học, đồng thời chia sẻ phương
              pháp thực hành đến bạn bè, thầy cô và các bên quan tâm.
            </p>
            <p>
              Kế hoạch sắp tới: tiếp tục nghiên cứu sâu về phân tích dữ liệu, ứng dụng AI và xây dựng các sản phẩm công nghệ có trách nhiệm.
            </p>
          </div>
          <ul className="space-y-3">
            {projects.map((p) => (
              <li key={p.id}>
                <Link
                  to="/du-an/$id"
                  params={{ id: p.id }}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl border border-border hover:border-primary transition group"
                >
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">
                      Bài {p.number}
                    </div>
                    <div className="font-display text-lg">{p.title}</div>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
