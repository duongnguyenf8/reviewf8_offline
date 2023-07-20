# Dương đánh giá bài học viên

**Note:**

- Màn hình:

  - max-width: 1500px

  - max-width: 1399px

  - max-width: 1199px

  - max-width: 991px

  - max-width: 767px

  - max-width: 575px

  - max-width: 420px

  - max-width: 375px

- Đường dẫn:

  - Root: `https://reviewf8.vercel.app/Review`

  - HTML: `/Fullstack_nodeJs_K2/Day11/index.html`

  - Hình ảnh: `/Fullstack_nodeJs_K2/Day11/images`

## [Đoàn Duy Chinh](https://duychinh.github.io/f8-fullstack-KS2/project1/index.html)

    Sớm nhất \*

- [x] Bài 1: Màn hình: max-width: 1500px

  Bài làm rất tốt \*

  Đặt tên class không hợp lý:

  - Chỉ có một phần header, không nên đặt tên là `header-top`

  - Đã có class `.hero-left` thì nên có `.hero-right`. Nếu không thì không nên đặt tên là `hero-left`

  Phần `.header-top__navbar` được sử dụng để đặt navbar (Navigation bar) có ý nghĩa là thanh điều hướng, chỉ nên đặt thẻ `<nav>`. Phần search form không phải ở thanh điều hướng, nên tách ra. Hoặc thay đổi tên class từ `navbar` thành `action` để thể hiện nơi người dùng tương tác trên header.

  Phần `section.hero` là một section riêng biệt, mang nội dung riêng biệt chứ không phải một thành phần của `header`. Nên tách ra thành một section riêng biệt.

  Các thẻ img nên có thuộc tính `alt` để mô tả hình ảnh. Không nên để trống.

  Chưa có hiệu ứng transition.

  Màu chữ sai so với bản mẫu.

  Phần `heading lv1` bé hơn bản mẫu.

  Phần hiển thị của các phần tử còn bé.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh1500.png)**

---

- [x] Bài 2: Màn hình: max-width: 1399px

  Bài làm rất tốt \*

  Các lỗi sau giống ở màn hình 1500px.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh1399.png)**

---

- [x] Bài 3: Màn hình: max-width: 1199px

  Bài làm chưa tốt

  Chưa có responsive ở màn hình này.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh1199.png)**

---

- [x] Bài 4: Màn hình: max-width: 991px

  Bài làm chưa tốt

  Chưa có responsive ở màn hình này.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh991.png)**

---

- [x] Bài 5: Màn hình: max-width: 767px

  Bài làm tốt

  Chưa thay đổi font chữ.

  Nút `.hero .btn` quá nhỏ so với bản mẫu.

  Hình ảnh quá to so với bản mẫu.

  Thứ tự tại `.service-2` sai so với bản mẫu.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh767.png)**

---

- [x] Bài 6: Màn hình: max-width: 575px

  Bài làm không tốt \*

  Chưa có responsive cho màn hình mobile

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh575.png)**

---

- [x] Bài 7: Màn hình: max-width: 420px

  Bài làm tốt \*

  Chưa có responsive cho màn hình mobile

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh420.png)**

---

- [x] Bài 8: Màn hình: max-width: 375px

  Bài làm không tốt \*

  Chưa có responsive cho màn hình mobile

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh375.png)**

---

- [x] Đánh giá chung bài tập về nhà: Mới chỉ responsive ở các màn từ tablet đến desktop nhỏ. Chưa tính tới mobile, dosktop to. Bài làm chưa đủ tốt. Cần cố gắng hơn.

## [Kiều Duy Tùng](https://stung16.github.io/ex_f8-fullstack/day11)

    Sớm nhất \*

- [x] Bài 1: Màn hình: max-width: 1500px

  Bài làm rất tốt \*

  Các section đều có các style giống nhau, không nên sử dụng id để style, việc đó sẽ khiến lặp code không cần thiết. Nên sử dụng class để style.

  Phần header nên tách riêng ra, không nên đưa vào thẻ main, **nên sử dụng thẻ header**, main chỉ để chứa các thông tin, nội dung chính của trang web, không nên chứa các phần header, footer, sidebar, ...

  Sai chính tả `aseet` -> `assets`

  Phần `.content__left-top h3` không phải là một tiêu đề, chỉ là một dòng text được làm khác đi để nhấn mạnh một điều gì đó. Nên sử dụng thẻ `<strong>` thì hợp lý hơn.

  Phần `.header__content` không phải là của header, nó là một section riêng biệt, nên tách ra.

  Tên class là `.abc` không hợp lý và có ý nghĩa gì trong trường hợp bài này. Nên đặt tên class có ý nghĩa.

  Phần `.footer_content_bottom-left` không nằm trên cùng một hàng như bản mẫu.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/stung161500.png)**

---

# Tuyết đánh giá bài học viên Fullstack-K2-Day11

## [Thế Nguyễn Đại](https://daithehh04.github.io/fullstack/day11/exercise-1.html)

NHỮNG LƯU Ý CHUNG Ở TOÀN BÀI:

- Phần 2 button trong section `banner` nên dùng thẻ `<a>` vì đây là button link khi click vào sẽ chuyển đến trang khác.

- Ở những màn desktop: Chưa xử lý hover vào các `service-item` và tất cả `link` ở trong footer.

- Các button `"Explore Now"` chưa đúng `font-family` và `font-weight`.

- Section `delivery` thiếu khoảng cách phía dưới.

NHỮNG LƯU Ý Ở TỪNG MÀN HÌNH:

- [x] Bài: Màn hình: max-width: 575px.

  Bài làm rất tốt

  Xác định chưa đúng breakpoint. ở bài mẫu là **420px** <==> 575px, bài bạn đang làm là **400px** <==> 575px.

  Phần 2 button trong section `banner` chưa đúng `font-size`.

  Ở màn hình 400px <==> 412px, Section `download-app` 2 link đang bị dính sát lấy nhau.

- [x] Bài: Những màn còn lại:

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Hoàng Lâm](https://github.com/nvhlam2211/f8-fullstack/tree/main/day-11/exercise)

(**Lưu ý**: Từ bài tập sau bạn nhớ gửi thêm link github pages để team review có thể check bài dễ dàng hơn nhé. Xem hướng dẫn [tại đây](https://fullstack-nodejs.fullstack.edu.vn/?id=472c83a0-0e4a-4ad6-bacd-27759867b3cf).)

Bài làm không tốt

**Những lưu ý và lỗi chung trong toàn bài:**

- **Chưa làm responsive**

- Giao diện toàn trang đang căn trái, không căn giữa.

- Chữ toàn trang đang có `font-family` và mã màu chưa đúng. Chú ý thêm ở bài mẫu về font-weight, line-height, font-size cho từng phần nội dung để làm giống hơn.

- Nên dùng những thẻ HTML semantic vào bài thay vì dùng thẻ div cho các phần: `<header>`, `nav`, `<main>`, `<section>`.

- Nên xem bài mẫu trước và xác định những cái nào có style chung thì sẽ đặt tên class chung để viết css nhanh gọn, tránh phải viết css lặp. Và nên đặt tên class có ý nghĩa thể hiện cho phần nội dùng, hoặc thể hiện cho style của phần tử đó. Không nên đặt là `one, two, three, four, five first,...`, và không nên lấy phần chữ của phần tử đó như `faster`, `order-now`, `order`,... để đặt tên class vì chữ đó có thể thay đổi.

- Cần thêm css `cursor:hover` cho tất cả các nút trên trang (ở màn desktop) để trải nghiệm người dùng được tốt hơn. Và 2 hình nút tải app ở phần `knot` là link, nên dùng thẻ `<a>`.

- Phần `footer ".end"` đang có width auto là bằng với cả body, trong khi tất cả các phần nội dung trên trang set nằm trong `max-width: 1200px`.

- Tất cả hình ảnh: Cần thêm nội dung cho thuộc tính `alt` để tốt cho SEO.

- Các Khoảng cách nhiều phần chưa đúng. Không nên dùng thẻ `<br/>` để tạo khoảng cách, chỉ nên dùng với mục đích là xuống dòng.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt. Về HTML cần chú ý sử dụng thẻ HTML semantic, non-semantic tốt hơn, và đặt tên class phù hợp. Về CSS: cần quan sát kỹ bài mẫu, từ tổng thể là các vị trí, kích thước, khoảng cách,... đến những chi tiết như các màu, font-size, font weight,mã màu... để có thể làm bài hoàn thiện hơn. Bài chưa làm responsive, Cần làm thêm responsive đầy đủ cho bài này.

## [Nguyễn Văn Đức](https://poyken.github.io/f8-fullstack-k2/html-css-responsive/ex/day11/index.html)

Bài làm không tốt

**Những lưu ý và lỗi chung trong toàn bài:**

- **Chưa làm responsive**

- Phần reset css có lỗi chính tả `"margin: 0x;"` nên có phần khoảng cách` margin: 8px` toàn trang của `body`.

- Không nên set width:100vw vì sẽ không đảm bảo được width sẽ full màn hình khi xuất hiện thanh cuộn dọc, nên dùng px hoặc %. và không nên set height:100vh, vì những phần nội dung của header, và section là tùy thuộc vào nội dung ở trong chứ không có height luôn là 100vh, nên không cần set height.

- Phần header, footer và các section chưa nằm giữa khi ở màn hình lớn.

- Nên dùng thẻ `<main>` để bọc phần nội dung chính của tramg, thay cho thẻ `<article>`

- Tất cả ảnh, trừ ảnh logo ở header cần thêm nội dung cho thuộc tính `alt` để tốt cho SEO.

- Mã màu chữ chưa đúng, nên làm giống bài mẫu nhất có thể.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt. Về HTML cần chú ý sử dụng thẻ HTML semantic, non-semantic tốt hơn. Về CSS: cần quan sát kỹ bài mẫu, từ tổng thể là các vị trí, kích thước, khoảng cách,... đến những chi tiết như các màu, font-size, font weight,mã màu... để có thể làm bài hoàn thiện hơn. Bài chưa làm responsive, Cần làm thêm phần responsive đầy đủ cho bài này.

## [Tiến Đạt - K2](https://phamtiendat18.github.io/Fullstack-K2/Day_11/index.html)

**Những lưu ý và lỗi chung trong toàn bài**

- Nên viết breakpoint là số nguyên, vì viết 991.5px thì trình duyệt cũng sẽ hiểu là 991px.

- Tất cả phần chữ chưa được set line-height, nên khoảng cách dòng chưa đúng.

- Tất cả hình ảnh: Cần thêm nội dung cho thuộc tính `alt` để tốt cho SEO.

- Tất cả các `button` chưa đúng font-family, và font-weight. Phần `btn-process` cũng là một link nên dùng thẻ `<a>`

- Phần `download-app`: 2 nút trong `btn-box` là link, nên dùng thẻ `<a>`

- Footer: phần `describe` khoảng cách giữa ảnh logo và chữ chưa đúng

- [x] Bài 1: Màn hình: max-width: 1500px

  Bài làm rất tốt \*

  Width của `container` = 1296px nhỏ hơn bài mẫu là 1320px, nên cách khoảng cách chưa giống bài mẫu.

---

- [x] Bài 2: Màn hình: max-width: 1399px

  Bài làm rất tốt \*

  Chỉ có lưu ý là bạn đang xác định chưa đúng breakpoint, bài mẫu là **1200px <==> 1399px**, bạn đang làm là **1201px <==> 1400px**.

---

- [x] Bài 3: Màn hình: max-width: 1199px

  Bài làm rất tốt \*

---

- [x] Bài 4: Màn hình: max-width: 991px

  Bài làm tốt

  Tất cả phần nút trong màn hình này, đang lớn hơn bài mẫu (fpnt-size, padding)

  Section `favorite-product` ở phần WHY CHOOSE US chưa có khoảng cách giữa ảnh và phần nội dung chữ. Phần HOME DELEVERY có padding top 200px quá lớn so với bài mẫu.

---

- [x] Bài 5: Màn hình: max-width: 767px

  Bài làm tốt

  Khoảng cách padding của các section chưa đúng. Ở màn này có giảm xuống.

---

- [x] Bài 6: Màn hình: max-width: 575px, max-width: 420px, max-width: 375px

  Bài làm chưa tốt

  Chưa set lại kích thước container từ màn max-width:768px trở xuống, nên giao diện không co lại đúng khi ở những màn nhỏ.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm responsive ở những màn lớn tốt, những màn nhỏ ở mobile chưa responsive tốt và chưa đầy đủ. Cần chú ý kỹ bài mẫu, để xác định được đúng breakpoint, những chi tiết nhỏ của từng phần ở từng màn hình để làm responsive tốt hơn.
