# Duong review btvn buổi 16 - Lớp K6

- [x] Bài 1

  Bài làm tốt.

  Ở section Hero, phần image ở màn hình desktop tràn ra ngoài thay vì fixed ở trong:

  ![image.png](https://files.fullstack.edu.vn/f8-prod/public-images/65dfc09d0bd8e.png)

  Nút xem thêm ở section news sai màu của chevron icon

  `.blog-title` nên có thêm padding-bottom để giống bản mẫu hơn.

  Button thêm vào giỏ hàng không được căn giữa các phần tử.

  `.news-item__time-date` chưa có text-shadow như bản thiết kế.

  Font weight ở header chưa đậm như bản mẫu.

  Ở màn hình **1440px**, giao diện đang bị vỡ do có thành phần đẩy bên phải.

  Thay vì thay đổi giao diện chính ở 1400, hiện nay vẫn có rất ít màn hình trong khoảng width này. Chỉ cần thu nhỏ kích thước hình ảnh, chữ, ở khoảng màn hình >1200 thì đổi sau.

  Ở màn **1210**, header mất icon search

  Ở màn hình **320**, hình ảnh và chữ GreenChop rotate đang dính vào nhau.

  - Tốt nhất từ khoảng 720, xoay ngược lại về ban đầu và thu nhỏ font-size.

  Ở các màn hình nhỏ, `.service-item` hơi xấu giao diện, nên sắp xếp lại 2 phần nhỏ thành 1 cột, phần item to sẽ order xuống dưới và full width.

  Các phần sản phẩm, có thể tham khảo shopee, laz, tiktok shop,... Luôn để 2 cột sản phẩm, nó sẽ dễ nhìn và không bị ngợp hơn.

  Nút gửi ở màn hình nhỏ, có thể full width ra, vì người dùng có thể cầm tay trái hoặc phải, nếu như để lệch bên so với tay thì sẽ khó bấm.

  Phần navbar toggle ở mobile cũng nên dịch xuống 1 chút cho dễ bấm, có thể dịch bằng khoảng logo và cho logo z-index cao lên để cả trong aside hay trên header đều có hiển thị.
