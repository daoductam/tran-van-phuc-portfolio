export interface Project {
  id: string;
  number: number;
  topic: string;
  title: string;
  source: string;
  summary: string;
  highlights: string[];
  reflection: string;
  pdf: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "bai-1",
    number: 1,
    topic: "Bài tập 1 của mục 1.4",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    source: "Bài 1",
    summary:
      "Thực hành thiết lập cấu trúc thư mục cá nhân khoa học trên máy tính, thực hiện các thao tác quản lý tệp tin cơ bản bao gồm tạo, đặt tên, sao chép, di chuyển, xóa và khôi phục dữ liệu.",
    highlights: [
      "Tổ chức cấu trúc thư mục D:\\ThucHanh_TranVanPhuc ngăn nắp",
      "Thực hành các thao tác đổi tên tệp (GhiChu.txt thành GhiChuQuanTrong.txt), sao chép và di chuyển tệp tin (DiChuyen.txt)",
      "Minh họa quy trình xóa tệp vĩnh viễn (Shift + Delete) và khôi phục tệp từ Recycle Bin",
    ],
    reflection:
      "Tổ chức tệp tin ngăn nắp chính là bước khởi đầu của việc quản lý dữ liệu thông minh — giúp tiết kiệm thời gian và tối ưu hóa hiệu suất làm việc.",
    pdf: "/pdfs/1.pdf",
    accent: "oklch(0.72 0.13 75)",
  },
  {
    id: "bai-2",
    number: 2,
    topic: "Bài tập 2 của mục 2.4",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    source: "Bài 2",
    summary:
      "Xây dựng chiến lược tìm kiếm thông tin chuyên ngành trên các cơ sở dữ liệu học thuật uy tín như Google Scholar, IEEE Xplore, ScienceDirect. Thực hiện đánh giá chi tiết độ tin cậy của 10 tài liệu tham khảo theo 5 tiêu chí khoa học và lập danh mục chuẩn Harvard.",
    highlights: [
      "Thiết lập bộ từ khóa tìm kiếm tối ưu: 'Trí tuệ nhân tạo trong giáo dục', 'AI trong giáo dục đại học', 'Dạy học AI sáng tạo'",
      "Bảng phân tích, tóm tắt và đánh giá độ tin cậy của 10 tài liệu học thuật nguồn (bài báo khoa học, sách, báo cáo)",
      "Xây dựng danh mục tài liệu tham khảo chuẩn hóa theo tiêu chuẩn Harvard quốc tế",
    ],
    reflection:
      "Kỹ năng tìm kiếm tốt giúp thu thập thông tin nhanh chóng, nhưng năng lực đánh giá nguồn tin mới là chìa khóa để đảm bảo tính khoa học và chính xác trong nghiên cứu.",
    pdf: "/pdfs/2.pdf",
    accent: "oklch(0.55 0.13 200)",
  },
  {
    id: "bai-3",
    number: 3,
    topic: "Bài tập 2 của mục 3.4",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    source: "Bài 3",
    summary:
      "Thực nghiệm đối chiếu 3 cấp độ prompt (cơ bản, cải tiến, nâng cao) cho 3 tác vụ học tập phổ biến bao gồm: Tóm tắt bài đọc học thuật về biến đổi khí hậu, giải thích khái niệm phức tạp (Học sâu - Deep Learning) và thiết kế bộ câu hỏi ôn tập lịch sử.",
    highlights: [
      "Áp dụng kỹ thuật viết prompt nâng cao: phân vai (role-play), chuỗi suy nghĩ (chain-of-thought) và kèm ví dụ mẫu (few-shot)",
      "So sánh chi tiết chất lượng phản hồi từ ChatGPT qua từng cấp độ câu lệnh",
      "Đúc kết bộ nguyên tắc vàng và mẹo thực hành để viết prompt tối ưu hóa kết quả phản hồi của AI",
    ],
    reflection:
      "Prompting là nghệ thuật giao tiếp với trí tuệ nhân tạo. Đặt câu hỏi rõ ràng, có ngữ cảnh và ràng buộc cụ thể sẽ mang lại câu trả lời chất lượng vượt trội.",
    pdf: "/pdfs/3.pdf",
    accent: "oklch(0.55 0.18 290)",
  },
  {
    id: "bai-4",
    number: 4,
    topic: "Bài tập 3 của mục 4.4",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    source: "Bài 4",
    summary:
      "Vận dụng hệ sinh thái công cụ trực tuyến bao gồm Trello (quản lý Kanban), Google Meet, Google Drive và Google Docs để thiết lập quy trình làm việc nhóm trực tuyến hiệu quả cho dự án nhóm 'Phân tích dược sinh học - định lượng Paracetamol bằng HPLC'.",
    highlights: [
      "Quản lý tiến độ công việc và phân chia nhiệm vụ trực quan qua bảng Trello với hệ nhãn màu phân cấp",
      "Thiết lập hệ thống thư mục lưu trữ logic 2 cấp (0-5) chuyên nghiệp trên Google Drive giúp tránh thất lạc tài liệu",
      "Soạn thảo báo cáo cộng tác thời gian thực trên Google Docs và đề xuất giải pháp vượt qua các thách thức khi làm việc nhóm từ xa",
    ],
    reflection:
      "Sự thành công của làm việc nhóm trực tuyến không chỉ nằm ở công cụ hiện đại mà còn ở văn hóa giao tiếp cởi mở và quy trình phân vai rõ ràng giữa các thành viên.",
    pdf: "/pdfs/4.pdf",
    accent: "oklch(0.6 0.15 25)",
  },
  {
    id: "bai-5",
    number: 5,
    topic: "Bài tập 2 của mục 5.4",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    source: "Bài 5",
    summary:
      "Thiết kế và tối ưu hóa các prompt để giải quyết 3 tác vụ chuyên ngành Dược thực tế bao gồm: Tóm tắt công thức thuốc nhỏ mắt phối hợp (Neomycin và Dexamethason), giải thích cơ chế tác dụng dược lý (Beta-lactam, Steroid), và phân tích ca lâm sàng hiệu chỉnh liều kháng sinh trên bệnh nhân suy thận.",
    highlights: [
      "Xây dựng prompt chuyên sâu phục vụ nghiên cứu công thức bào chế thuốc và phân tích dược động học (PK/PD)",
      "So sánh chất lượng đầu ra giữa prompt cơ bản và nâng cao về độ chi tiết chuyên môn, tính an toàn & ổn định của thuốc",
      "Đúc kết phương pháp thiết kế prompt tối ưu hỗ trợ học tập và xử lý ca lâm sàng dành riêng cho sinh viên ngành Y Dược",
    ],
    reflection:
      "Trí tuệ nhân tạo đóng vai trò là một cộng sự đắc lực giúp hiện thực hóa ý tưởng nhanh chóng, nhưng tư duy thẩm mỹ và tính chính xác y khoa vẫn phải do con người kiểm soát.",
    pdf: "/pdfs/5.pdf",
    accent: "oklch(0.62 0.16 340)",
  },
  {
    id: "bai-6",
    number: 6,
    topic: "Bài tập 4 của mục 6.4",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    source: "Bài 6",
    summary:
      "Nghiên cứu chính sách AI học thuật của các đại học lớn trong và ngoài nước. Trình bày quy trình thực tế sử dụng AI để xây dựng bài luận về chủ đề liêm chính học thuật trong thời đại AI, từ đó thiết lập bộ 6 nguyên tắc cá nhân ứng xử có trách nhiệm.",
    highlights: [
      "Khảo sát và đối chiếu khung chính sách sử dụng AI học thuật (Bộ GD&ĐT, VNU, UEH, Fudan, Johns Hopkins, UNESCO)",
      "Nhật ký 3 bước sử dụng AI (lập dàn ý, tổng hợp tài liệu, viết đoạn văn) kết hợp tự kiểm chứng chéo và trích nguồn minh bạch",
      "Thiết lập bộ 6 nguyên tắc cá nhân và Infographic tuyên truyền trực quan: Sử dụng AI có trách nhiệm trong học thuật",
    ],
    reflection:
      "Trong học tập và nghiên cứu, liêm chính học thuật và đạo đức công nghệ liên quan mật thiết đến giá trị bản thân. Sử dụng AI có trách nhiệm là cam kết tôn trọng tri thức.",
    pdf: "/pdfs/6.pdf",
    accent: "oklch(0.45 0.11 160)",
  },
];
