import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/du-an/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Bài ${loaderData.project.number}: ${loaderData.project.title}` },
          { name: "description", content: loaderData.project.summary },
          {
            property: "og:title",
            content: `Bài ${loaderData.project.number}: ${loaderData.project.title}`,
          },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-prose py-24 text-center">
        <h1 className="font-display text-4xl">Không tìm thấy bài tập</h1>
        <Link to="/du-an" className="text-primary mt-4 inline-block">
          ← Quay lại danh sách
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <SiteLayout>
        <div className="container-prose py-24 text-center">
          <h1 className="font-display text-3xl">Có lỗi xảy ra</h1>
          <p className="text-muted-foreground mt-2">{error.message}</p>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mt-6 px-4 py-2 rounded-full bg-primary text-primary-foreground"
          >
            Thử lại
          </button>
        </div>
      </SiteLayout>
    );
  },
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <SiteLayout>
      <article className="container-prose pt-12 pb-24">
        <Link
          to="/du-an"
          className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2"
        >
          ← Tất cả dự án
        </Link>

        <header className="mt-8 grid md:grid-cols-[auto_1fr] gap-8 items-end pb-10 border-b border-border">
          <div
            className="font-display text-[8rem] leading-none italic"
            style={{ color: project.accent }}
          >
            0{project.number}
          </div>
          <div>
            <div className="chip" style={{ borderColor: project.accent, color: project.accent }}>
              {project.source}
            </div>
            <h1 className="font-display text-4xl md:text-5xl mt-4">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">{project.topic}</p>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-2xl mb-3">Mô tả</h2>
              <p className="text-foreground/85 leading-relaxed text-lg">
                {project.summary}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl mb-4">Điểm nổi bật</h2>
              <ul className="space-y-3">
                {project.highlights.map((h: string, i: number) => (
                  <li
                    key={i}
                    className="flex gap-4 p-4 rounded-xl bg-secondary/60"
                  >
                    <span
                      className="font-display text-xl"
                      style={{ color: project.accent }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl mb-3">Suy ngẫm</h2>
              <blockquote
                className="border-l-4 pl-6 py-2 italic font-display text-xl text-foreground/80"
                style={{ borderColor: project.accent }}
              >
                "{project.reflection}"
              </blockquote>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border p-6 bg-card sticky top-24">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Sản phẩm cuối
              </div>
              <div className="font-display text-xl mt-1">Báo cáo PDF</div>
              <p className="text-sm text-muted-foreground mt-2">
                Tài liệu đầy đủ quy trình thực hiện và minh chứng.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-center text-sm font-medium hover:opacity-90"
                >
                  Mở PDF →
                </a>
                <a
                  href={project.pdf}
                  download
                  className="px-4 py-2.5 rounded-full border border-border text-center text-sm hover:bg-secondary"
                >
                  Tải xuống
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl mb-4">Xem trước tài liệu</h2>
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <iframe
              src={project.pdf}
              title={project.title}
              className="w-full h-[70vh]"
            />
          </div>
        </div>

        <nav className="mt-16 grid md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to="/du-an/$id"
              params={{ id: prev.id }}
              className="p-5 rounded-xl border border-border hover:border-primary transition group"
            >
              <div className="text-xs text-muted-foreground">← Bài trước</div>
              <div className="font-display text-lg mt-1 group-hover:text-primary">
                {prev.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/du-an/$id"
              params={{ id: next.id }}
              className="p-5 rounded-xl border border-border hover:border-primary transition group text-right"
            >
              <div className="text-xs text-muted-foreground">Bài tiếp theo →</div>
              <div className="font-display text-lg mt-1 group-hover:text-primary">
                {next.title}
              </div>
            </Link>
          ) : (
            <Link
              to="/tong-ket"
              className="p-5 rounded-xl border border-border hover:border-primary transition group text-right"
            >
              <div className="text-xs text-muted-foreground">Kết thúc →</div>
              <div className="font-display text-lg mt-1 group-hover:text-primary">
                Trang Tổng kết
              </div>
            </Link>
          )}
        </nav>
      </article>
    </SiteLayout>
  );
}
