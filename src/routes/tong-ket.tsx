import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/tong-ket")({
  head: () => ({
    meta: [
      { title: "Tổng kết — Portfolio của Trần Văn Phúc" },
      {
        name: "description",
        content:
          "Trải nghiệm cá nhân, bài học rút ra và những thách thức gặp phải khi xây dựng Portfolio kỹ thuật số.",
      },
    ],
  }),
  component: Summary,
});

function Summary() {
  return (
    <SiteLayout>
      <section className="container-prose pt-16 pb-12">
        <span className="chip">III · Trang Tổng kết</span>
        <h1 className="font-display text-5xl md:text-6xl mt-6">
          Nhìn lại hành trình
          <br />
          <span className="italic text-primary">và bước tiếp theo.</span>
        </h1>
      </section>

      <section className="container-prose pb-20 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="font-display text-3xl">Trải nghiệm cá nhân</h2>
          <p className="text-muted-foreground leading-relaxed">
            Chuỗi sáu bài tập đã giúp tôi hoàn thiện tư duy số toàn diện: đi từ bước cơ bản là <em>sắp xếp dữ liệu ngăn nắp</em> đến việc <em>thiết lập quy trình làm việc</em> tối ưu cùng AI. Từng bài thực hành là những viên gạch nền tảng, cùng nhau định hình nên phương pháp làm việc hiện đại.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Bài học lớn nhất của tôi là tư duy luôn đi trước công cụ: cùng sử dụng Google Drive, sự khác biệt nằm ở chỗ chỉ lưu trữ đơn thuần hay dùng để <strong className="text-foreground">làm việc nhóm thực chất</strong>. Nguyên lý này hoàn toàn tương thích khi chúng ta tương tác với trí tuệ nhân tạo.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-3xl">Kiến thức quan trọng nhất</h2>
          <ul className="space-y-3">
            {[
              "Tổ chức thông tin là kỹ năng nền cho mọi kỹ năng số khác",
              "Đánh giá nguồn tin quan trọng hơn tìm thấy nguồn tin",
              "Prompt là một cuộc hội thoại có chủ đích, không phải một câu lệnh",
              "Cộng tác trực tuyến cần văn hoá rõ ràng hơn là công cụ phức tạp",
              "AI tạo sinh là cộng sự, không phải người thay thế",
              "Liêm chính học thuật là cam kết cá nhân, không phải ràng buộc",
            ].map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-display text-primary">0{i + 1}</span>
                <span className="text-foreground/85">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-prose pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14">
          <span className="chip border-primary-foreground/30 text-primary-foreground/80 bg-transparent">
            Tâm đắc nhất
          </span>
          <p className="font-display text-2xl md:text-4xl mt-6 leading-tight italic">
            "Làm chủ công nghệ không nằm ở việc chạy đua theo xu hướng, mà là năng lực lựa chọn công cụ giải quyết đúng bài toán của mình."
          </p>
          <p className="mt-6 text-primary-foreground/80">
            Khó khăn lớn nhất trong quá trình hoàn thiện trang web này là khâu <strong>chắt lọc nội dung</strong> — xác định thông tin đắt giá cần giữ lại và lược bỏ chi tiết thừa. Nhờ vậy, tôi đã rèn luyện được cách truyền đạt súc tích nhưng vẫn trọn vẹn ý nghĩa.
          </p>
        </div>
      </section>

      <section className="container-prose pb-32">
        <h2 className="font-display text-3xl mb-6">Xem lại 6 bài</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <Link
              key={p.id}
              to="/du-an/$id"
              params={{ id: p.id }}
              className="p-5 rounded-xl border border-border hover:border-primary transition"
              style={{ borderTop: `3px solid ${p.accent}` }}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Bài {p.number}
              </div>
              <div className="font-display text-lg mt-1">{p.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
