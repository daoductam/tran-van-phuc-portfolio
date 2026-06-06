import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án — Portfolio của Trần Văn Phúc" },
      {
        name: "description",
        content:
          "Tập hợp 6 bài thực hành kỹ năng số: quản lý tệp, tìm kiếm học thuật, prompt AI, cộng tác, AI tạo sinh và liêm chính học thuật.",
      },
    ],
  }),
  component: ProjectsLayout,
});

function ProjectsLayout() {
  const matches = useMatches();
  const isDetail = matches.some((m) => m.routeId === "/du-an/$id");
  if (isDetail) return <Outlet />;

  return (
    <SiteLayout>
      <section className="container-prose pt-16 pb-12">
        <span className="chip">II · Trang Dự án</span>
        <h1 className="font-display text-5xl md:text-6xl mt-6">
          Sáu bài tập,
          <br />
          <span className="italic text-primary">một hành trình.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          Mỗi bài là một kỹ năng số khác nhau. Bấm vào từng bài để xem mô tả,
          điểm nổi bật, suy ngẫm cá nhân và sản phẩm cuối (PDF).
        </p>
      </section>

      <section className="container-prose pb-32">
        <ol className="grid gap-6">
          {projects.map((p) => (
            <li key={p.id}>
              <Link
                to="/du-an/$id"
                params={{ id: p.id }}
                className="block group"
              >
                <article
                  className="grid md:grid-cols-[120px_1fr_auto] gap-6 items-center p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-0.5"
                  style={{
                    borderLeft: `4px solid ${p.accent}`,
                  }}
                >
                  <div
                    className="font-display text-6xl md:text-7xl leading-none"
                    style={{ color: p.accent }}
                  >
                    0{p.number}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.source} · {p.topic}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl mt-2 group-hover:text-primary transition">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground line-clamp-2">
                      {p.summary}
                    </p>
                  </div>
                  <div className="text-primary text-2xl md:opacity-0 md:group-hover:opacity-100 transition">
                    →
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
