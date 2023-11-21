# Dương review bài tập về nhà buổi 1 - Lớp K5

## [Lê Tùng Dương](view-source:https://duong1801.github.io/f8-fullstack-k5/Day-1/ex01.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

  Không nên sử dụng ảnh với mã hoá base64 vì chúng sẽ không được cache bởi trình duyệt và dung lượng ảnh sẽ tăng khoảng 20%.

  - Nên sử dụng một đường dẫn tuyệt đối như url ảnh online

  - Hoặc sử dụng đường dẫn ảnh tương đối khi tải ảnh đó về máy và đưa vào folder dự án.

- [x] Bài 2

  Không nên sử dụng ảnh với mã hoá base64 vì chúng sẽ không được cache bởi trình duyệt và dung lượng ảnh sẽ tăng khoảng 20%.

  - Nên sử dụng một đường dẫn tuyệt đối như url ảnh online

  - Hoặc sử dụng đường dẫn ảnh tương đối khi tải ảnh đó về máy và đưa vào folder dự án.

- [x] Bài 3

  Sai chính tả: **luậtThứ**

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần chú ý thêm vào cách sử dụng các thẻ HTML cho chuẩn semantics.

## [Trịnh Nam Trường](view-source:https://truongtn04.github.io/f8-fullstack-k5/day01-ex/)

- [x] Bài 1

  Bài làm chưa tốt

  Trong input không có type "Email", chỉ có type "email"

  Nếu coi bài 1 là một trang duy nhất, trang contact thì nên sử dụng h1 ở chỗ h3, nếu là một form nhỏ trong một trang mà không phải thành phần quan trọng thì ở đó không phải là heading mà đơn thuần là một dòng text cần sự chú ý hơn các text khác, nên sử dụng thẻ b thay vì h3.

  Vì đây là một form đăng ký email, nên sử dụng thẻ form để bao bọc .

- [x] Bài 2

  Bài làm tốt

- [x] Bài 3

  Các phần **Header**, **Sidebar**, **Footer** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

  Phần heading này không nên để h4, nên sử dụng thẻ h2 thì hợp lí hơn.

  ```html
  <h4>
    <a href="#"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
  </h4>
  ```

- [x] Đánh giá chung bài tập về nhà:

  - Nên xem lại thẻ title của trang web và đặt đúng title để trang web được trực quan hơn

  - Chưa có mở thẻ body, sai cấu trúc đóng mở của thẻ

  - Cần chú ý lại format code. Format rất xấu

  - Chú ý hơn nhiều vào semantics, các thẻ heading đang sử dụng rất bừa bãi.

  - Nên chia thành nhiều pages để việc đánh giá bài tập được rõ hơn, tốt hơn.

  - Các icon không được viết một cách đồng nhất, chỗ thì bọc span chỗ không sẽ khiến cho việc sử dụng dễ bị nhầm lẫn, có thể gây lỗi cho style.

## [Nguyễn Ngọc Minh](view-source:https://minhhnguyenn.github.io/F8_Fullstack_BTVN/Btvnbuoi1/Danhsachbaitap/Bai1.html)

- [x] Bài 1

  Phần input nhập email nên sử dụng input type email

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Nên sử dụng một loại đơn vị kích thước duy nhất để dễ kiểm soát, tránh phải tính toán nhiều.

  Thay vì phải viết `margin: 0 0 1em 0` cho khó khăn, khó hiểu, nên sử dụng `margin-bottom: 1em;`

  Input cần có placeholder để hướng dẫn cho người dùng và dễ hiểu hơn.

  Nên sử dụng một đơn vị kích thước thông dụng hơn, relative với các kích thước để việc responsive sẽ dễ dàng hơn.

- [x] Bài 2

  Nên sử dụng một đơn vị kích thước thông dụng hơn, relative với các kích thước để việc responsive sẽ dễ dàng hơn.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

  Thuộc tính href trong thẻ a cần giá trị để tạo liên kết và tránh yêu cầu web không cần thiết. Chi tiết xem tại [Đây](https://gtmetrix.com/avoid-empty-src-or-href.html)

## [Lê Đức Anh](view-source:https://ducanhprogram.github.io/f8-fullstack-k5/Day-1/bai1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

  Không nên sử dụng ảnh với mã hoá base64 vì chúng sẽ không được cache bởi trình duyệt và dung lượng ảnh sẽ tăng khoảng 20%.

  - Nên sử dụng một đường dẫn tuyệt đối như url ảnh online

  - Hoặc sử dụng đường dẫn ảnh tương đối khi tải ảnh đó về máy và đưa vào folder dự án.

- [x] Bài 2

  Không nên sử dụng ảnh với mã hoá base64 vì chúng sẽ không được cache bởi trình duyệt và dung lượng ảnh sẽ tăng khoảng 20%.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

## [Viên Đình Cường](view-source:https://vdcsk8.github.io/f8-fullstack-offline-FSK5/)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

- [x] Bài 2

  Bài làm tốt

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

- [x] Đánh giá chung bài tập về nhà: Nên tách file bào làm thành 3 để dễ dàng đọc, sửa lỗi hơn và đúng ý nghĩa hơn.

## [Nguyen Tien Dat](view-source:https://tiendat211294.github.io/f8_offline_k5/buoi-1/bai-1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

- [x] Bài 2

  Bài không tốt, sử dụng nhiều thẻ h1 trong bài, thay vì đó nên sử dụng h2.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

## [Ngo Hoang Kim](view-source:https://kzau1612.github.io/FSK5/Buoi%201/BT1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

- [x] Bài 2

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

  Các thẻ heading đã làm đậm text, không cần phải thêm thẻ b vào.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  Phần code HTML này nên sử dụng h2 thay vì h3 vì theo bài, ở đây sẽ là một bài báo nổi bật trong trang list các bài báo.

  ```html
  <h3>
    <a href="#!"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
  </h3>
  ```

## [HUNG DAO QUANG](view-source:https://hungsk5.github.io/F8-Offline-SK5/Day1/baitap1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

- [x] Bài 2

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

  Khi thể hiện một list có độ quan trọng và sự liên quan đến nhau, nên sử dụng một ul bọc nhiều li thay vì sử dụng nhiều ul>li, như vậy không thể hiện được là list, mà là nhiều list không liên quan đến nhau.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  Phần code HTML này nên sử dụng h2 thay vì h3 vì theo bài, ở đây sẽ là một bài báo nổi bật trong trang list các bài báo.

  ```html
  <h3>
    <a href="#!"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
  </h3>
  ```

## [Bùi Minh Chí](view-source:https://ronbanh549.github.io/f8-fullstack-k5/Day-1/bai1.html)

- [x] Bài 1

  Trong HTML không có thẻ `<BR></BR>`

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

- [x] Bài 2

  Bài làm tốt

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

  Thuộc tính href trong thẻ a cần giá trị để tạo liên kết và tránh yêu cầu web không cần thiết. Chi tiết xem tại [Đây](https://gtmetrix.com/avoid-empty-src-or-href.html)

  Phần code HTML này nên sử dụng h2 thay vì h3 vì theo bài, ở đây sẽ là một bài báo nổi bật trong trang list các bài báo.

  ```html
  <a href="">
    <h3>Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức,cần 300 ngày khắc phục</h3>
  </a>
  ```

## [Lưu Ngọc Dương](view-source:https://duongluu9898.github.io/duongluuf8-fullstackk5/Day1/bai1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Phần input nên sử dụng type=“email” thay vì type=“text”

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

  Thấy có link css nhưng không có đường dẫn

  ```html
  <link rel="stylesheet" href="" />
  ```

- [x] Bài 2

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

- [x] Bài 3

  Sidebar là một thành phần không liên quan đến nội dung chính, không nên để trong thẻ main và nên sử dụng thẻ aside để thể hiện.

  ```html
  <section class="sidebar">SIDEBAR</section>
  ```

- [x] Đánh giá chung bài tập về nhà:

  - Nên xem lại thẻ title của trang web và đặt đúng title để trang web được trực quan hơn

## [Nguyễn Tuấn Hùng](view-source:https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN%20no.1/BVN-01.html)

- [x] Bài 1

  Tên folder không nên viết hoa, có dấu cách, việc đó làm cho url rất xấu.

  ```html
  https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN%20no.1/BVN-01.html
  ```

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

- [x] Bài 2

  Bài không tốt, sử dụng nhiều thẻ h1 trong bài, thay vì đó nên sử dụng h2.

  Tên folder không nên viết hoa, có dấu cách, việc đó làm cho url rất xấu.

  ```html
  https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN%20no.1/BVN-02.html
  ```

- [x] Bài 3

  Tên folder không nên viết hoa, có dấu cách, việc đó làm cho url rất xấu.

  ```html
  https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN%20no.1/BVN-03.html
  ```

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

- [x] Đánh giá chung bài tập về nhà: cần cấu trúc lại toàn bộ tên folder.

## [Trần Quốc Việt](view-source:https://tranquocviet111122.github.io/f8-fullstack-fsk5/Day-1/html/bai1.html)

- [x] Bài 1

  Cần xem lại format code, format rất xấu

  Thẻ p sử dụng để thể hiện một văn bản, không được sử dụng để làm khoảng cách ngăn cách dòng.

  Nếu coi bài 1 là một trang duy nhất, trang contact thì nên sử dụng h1 ở chỗ h2, nếu là một form nhỏ trong một trang mà không phải thành phần quan trọng thì ở đó không phải là heading mà đơn thuần là một dòng text cần sự chú ý hơn các text khác, nên sử dụng thẻ b thay vì h2.

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

- [x] Bài 2

  Bài làm không tốt

  Trong thẻ ul, con của nó chỉ được là li. Không được để các thẻ khác làm con trực tiếp của thẻ ul.

  Khi thể hiện một list có độ quan trọng và sự liên quan đến nhau, nên sử dụng một ul bọc nhiều li thay vì sử dụng nhiều ul>li, như vậy không thể hiện được là list, mà là nhiều list không liên quan đến nhau.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

  Thuộc tính href trong thẻ a cần giá trị để tạo liên kết và tránh yêu cầu web không cần thiết. Chi tiết xem tại [Đây](https://gtmetrix.com/avoid-empty-src-or-href.html)

- [x] Đánh giá chung bài tập về nhà:

  - Nên xem lại thẻ title của trang web và đặt đúng title để trang web được trực quan hơn

## [Nguyễn Đức Nhật](view-source:https://nhat0712.github.io/f8-FS-OL/Day%201/bai1)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

  Code format hơi xấu. Nên format lại một chút.

- [x] Bài 2

  Không nên style cho ảnh cả width, height sẽ có thể khiến ảnh bị méo, không đúng định dạng kích thước ảnh.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

  Phần h3 này đúng là một text chứa đường dẫn, nên thêm thẻ a chứ không phải là class a và thẻ u

  - Nếu muốn một class để hiển thị màu xanh hoặc style cho link, nên sử dụng `class="link"` hơn vì nó dễ hiểu hơn.

  ```html
  <h3 class="a">
    <u>Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</u>
  </h3>
  ```

- [x] Đánh giá chung bài tập về nhà:

  - Nên xem lại thẻ title của trang web và đặt đúng title để trang web được trực quan hơn

## [Đinh Việt Hùng](view-source:https://hungskygaren.github.io/fullstack-k5/Day1/Bai1.html)

- [x] Bài 1

  Thừa 1 dấu "," tại đây:

  ```html
  <i class="fa fa-envelope-o" style="font-size: 16px" ,></i>
  ```

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Nên sử dụng thẻ button hơn là input type button nếu muốn viết các đoạn text, html tốt hơn vào trong thẻ

  Nếu coi bài 1 là một trang duy nhất, trang contact thì nên sử dụng h1 ở chỗ h2, nếu là một form nhỏ trong một trang mà không phải thành phần quan trọng thì ở đó không phải là heading mà đơn thuần là một dòng text cần sự chú ý hơn các text khác, nên sử dụng thẻ b thay vì h2.

- [x] Bài 2

  Bài làm không tốt

  Trong thẻ ul, con của nó chỉ được là li. Không được để các thẻ khác làm con trực tiếp của thẻ ul.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

- [x] Đánh giá chung bài tập về nhà:

  - Nên xem lại thẻ title của trang web và đặt đúng title để trang web được trực quan hơn

## [Nguyễn Văn Thắng](view-source:https://nvthang391.github.io/F8-FSK5/Day_1/day1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Thẻ p sử dụng để thể hiện một văn bản, không được sử dụng để làm khoảng cách ngăn cách dòng.

- [x] Bài 2

  Nếu như đây là các tiêu đề của một phần blog nào đó, có thể sẽ là heading thay vì:

  ```html
  <p><b>UI/UX Design</b></p>
  ```

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

  Thuộc tính href trong thẻ a cần giá trị để tạo liên kết và tránh yêu cầu web không cần thiết. Chi tiết xem tại [Đây](https://gtmetrix.com/avoid-empty-src-or-href.html)

- [x] Đánh giá chung bài tập về nhà: Nên tách file để dễ nhìn hơn, thẻ p sử dụng để thể hiện một văn bản, không được sử dụng để làm khoảng cách ngăn cách dòng.

## [Trần Thế Vĩ](view-source:https://tranthevink.github.io/f8_fullstack_k5/Homework/Day1/Unit1.html)

- [x] Bài 1

  Vì đây là một form gửi email, Đề xuất sử dụng thẻ form

  Đoạn sử dụng `br` là sai về semantics, thay vì sử dụng br, có thể bọc thẻ div(Một thẻ block) để xuống dòng.

- [x] Bài 2

  Nên sử dụng chung một font icon để tránh bị conflict cũng như gây nặng cho dự án.

- [x] Bài 3

  Các phần **Header**, **Sidebar** chỉ là một placeholder, không phải là tiêu đề, không nên sử dụng thẻ heading để thể hiện nó

  - Nên sử dụng các thẻ html5 để thể hiện nó.

- [x] Đánh giá chung bài tập về nhà:

  - Nên xem lại thẻ title của trang web và đặt đúng title để trang web được trực quan hơn
