# Dương review bài tập về nhà buổi 3 - Lớp K5

**Chưa nộp bài tập:**

- Lưu Ngọc Dương

**Nộp muộn:**

- Trần Thế Vĩ
- Nguyễn Văn Thắng
- Viên Đình Cường
- Đào Quang Hùng
- Bùi Minh Chí
- Nguyễn Ngọc Minh
- Nguyễn Tuấn Hùng
- Lê Tùng Dương

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-3/)

- [x] Bài 1

  Bài làm tốt

  Phần textarea đang nhỏ hơn so với bản mẫu

  Các khoảng cách, kích cỡ của icon chưa hợp lý, chưa giống bản mẫu

  Chưa có đường kẻ gạch chân ở dưới như bản mẫu.

  Các phần nhập liệu(Input, Textarea) thiếu phần padding như bản mẫu.

  Các phần nhập liệu(Input, Textarea) đều chưa đủ độ dài như bản mẫu.

  Phần text: **321 Awesome Street New York, NY 17022** chưa được xuống dòng như bản mẫu

  Màu background nút và text của nút chưa được tốt, phần text đang bị chìm so với nền, phần nền nút đang bị chói so với màu nền của html

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <p><i class="far fa-envelope"></i> info@companyname.com</p>
  <p><i class="fas fa-phone-alt"></i> +1 800 123 1234</p>
  ```

  Đề xuất đổi thành:

  ```html
  <p>
    <i class="far fa-envelope"></i>
    <a href="mailto:info@companyname.com">info@companyname.com</a>
  </p>
  <p>
    <i class="fas fa-phone-alt"></i>
    <a href="tel:+18001231234">+1 800 123 1234</a>
  </p>
  ```

- [x] Bài 2

  Bài làm tốt\*

  Phần hình ảnh avatar chưa nằm ở trên như trong bản mẫu.

  Phần màu chữ chưa được tốt. Màu cả phần content và phần username chưa đúng với yêu cầu đề bài

  Thay vì sử dụng thẻ p, ở đây là trích dẫn một câu nói, nên được thay bằng thẻ `q` để hợp lý hơn, nó sẽ tự động đưa thêm 2 dấu "

  ```html
  <q> Đây là một quote </q>
  ```

  Thiếu đường gạch chân của tiêu đề.

  Vì img là hình ảnh đại diện cho avatar của khách hàng, nên đưa alt là tên khách hàng thay vì avatar

- [x] Bài 3

  Bài làm tốt

  Có thể style cho border của input, select màu xanh để giống bản mẫu hơn.

  Các phần label ở phía bên trái cũng nên trỏ tới id của input phía bên phải

  Input type checkbox đang thể hiện là cùng một chức năng, nên cho name giống nhau để dễ dàng kiểm soát hơn.

  Phần name của các field nên được viết thường. Tốt nhất là 1 từ. Không nên viết hoa như trong bài.

- [x] Bài 4

  Tỷ lệ bài làm chưa đúng với bài mẫu. Bài mẫu có phần dài hơn

  Thiếu phần padding bên trái như trong bài mẫu.

  Font chữ tiêu đề của bài đang to hơn bài mẫu khiến nó bị xuống dòng.

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng hoặc thẻ a sai ý nghĩa.

  Phần nav ở trên thể hiện là một thanh điều hướng, nên sử dụng thẻ nav để bao bọc.

  Phần tiêu đề của bài mẫu không hề có xuống dòng, không rõ lý do sử dụng br trong tiêu đê.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Phần font chữ ở title chưa giống bản mẫu

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Phần trên của tiêu đề đang thể hiện là một placeholder, có thể sẽ tốt hơn là một hình ảnh, Logo, cũng chưa thể biết được, vì vậy nên sử dụng một thẻ non-semantics để thể hiện nó. Ví dụ như thẻ div.

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/day_3/)

- [x] Bài 1

  Bài làm tốt\*

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <div class="contact__item">
    <i class="fa-solid fa-phone contact__item-icon"></i>
    <p class="contact__item-desc">+1 800 123 1234</p>
  </div>
  ```

  Đề xuất đổi thành:

  ```html
  <div class="contact__item">
    <i class="fa-solid fa-phone contact__item-icon"></i>
    <a href="tel:+18001231234" class="contact__item-desc">+1 800 123 1234</a>
  </div>
  ```

- [x] Bài 2

  Bài làm tốt

  Các phần label ở phía bên trái cũng nên trỏ tới id của input phía bên phải

  Input type checkbox đang thể hiện là cùng một chức năng, nên cho name giống nhau để dễ dàng kiểm soát hơn.

  Các phần input khác cũng cần có name để thể hiện tốt hơn và sử dụng được dữ liệu khi gửi lên server

- [x] Bài 3

  Bài làm tốt\*

  Thay vì sử dụng thẻ p, ở đây là trích dẫn một câu nói, nên được thay bằng thẻ `q` để hợp lý hơn, nó sẽ tự động đưa thêm 2 dấu "

  ```html
  <q> Đây là một quote </q>
  ```

- [x] Bài 4

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng hoặc thẻ a sai ý nghĩa.

  Phần nav ở trên thể hiện là một thanh điều hướng, nên sử dụng thẻ nav để bao bọc.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Phần font chữ ở title chưa giống bản mẫu

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Nên sử dụng bộ chọn theo class thay vì style theo tên thẻ để tránh bị lỗi CSS ở các nơi khác.

## [Trinh Nam Truong](https://truongtn04.github.io/f8-fullstack-k5/day03/ex01.html)

- [x] Bài 1

  Bài làm tốt

  Không nên viết các thẻ heading không theo thứ tự như trong bài, với 2 tiêu đề đang bổ nghĩa cho H1 thì phải là H2 thay vì H3

  Phần textarea đang nhỏ hơn so với bản mẫu

  Chưa có đường kẻ gạch chân ở dưới như bản mẫu.

  Màu background nút và text của nút chưa được tốt, phần text đang bị chìm so với nền, phần nền nút đang bị chói so với màu nền của html

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <div class="contact-info__item">
    <i class="fa-regular fa-envelope"></i>
    <span>info@gmail.com</span>
  </div>
  ```

  Đề xuất đổi thành:

  ```html
  <div class="contact-info__item">
    <i class="fa-regular fa-envelope"></i>
    <a href="mailto:info@companyname.com">info@companyname.com</a>
  </div>
  ```

- [x] Bài 2

  Bài làm tốt\*

  Phần hình ảnh avatar cách quá xa phần content so với bản mẫu.

  Thiếu đường gạch chân của tiêu đề.

  Vì img là hình ảnh đại diện cho avatar của khách hàng, nên đưa alt là tên khách hàng thay vì để trống

- [x] Bài 3

  Bài làm tốt

  Các phần label ở phía bên trái cũng nên trỏ tới id của input phía bên phải

  Input type checkbox đang thể hiện là cùng một chức năng, nên cho name giống nhau để dễ dàng kiểm soát hơn.

  Các input radio nên được đặt tên giống nhau để có thể chọn một thay vì chọn tất cả như trong bài.

  Phần name của các field nên được viết thường. Tốt nhất là 1 từ. Như trong bài là không sử dụng name, điều đó khiến khó kiểm soát và khó lấy được giá trị khi form được gửi lên.

  Nếu div để thể hiện là bao bọc nhiều button, nên sử dụng `.btn-group` thay vì `.button` sẽ dễ gây hiểu nhầm là một button

- [x] Bài 4

  Vì ở đây có một nav, có thể là để thể hiện chuyển tab. Vì vậy không thể để H1 ở đây vì các Tab khác sẽ có tiêu đề khác cùng cấp. Nên sử dụng H2 hoặc H3.

  Tỷ lệ bài làm chưa đúng với bài mẫu. Bài mẫu có phần map dài hơn

  Vì thuộc tính width của thẻ p không được điều chỉnh tốt, nên có 1 chữ bị xuống dòng khiến giao diện rất xấu.

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng hoặc thẻ a sai ý nghĩa.

  Phần nav ở trên thể hiện là một thanh điều hướng, nên sử dụng thẻ nav để bao bọc.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Phần font chữ ở title chưa giống bản mẫu

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Phần trên của tiêu đề đang chưa có.

  Phần font chữ highlight trên tiêu đề đang quá sáng, quá chìm vào background của HTML. Nên sử dụng màu tối hơn.

  Nếu div để thể hiện là bao bọc nhiều button, nên sử dụng `.btn-group` thay vì `.button` sẽ dễ gây hiểu nhầm là một button

## [Tran Quoc Viet](https://tranquocviet111122.github.io/f8-fullstack-fsk5/Day-3/html/bai1.html)

- [x] Bài 1

  Cần chỉn chu hơn vào title của bài, không phải lúc nào cũng là Document.

  Bài làm không tốt

  Format code quá xấu.

  Input không có type="name", thay vào đó nên sử dụng input type text.

  Có đóng form nhưng không có mở form

  Có đoạn mở div nhưng chưa đóng div.

  2 phần tiêu đề nhỏ hơn bổ nghĩa cho h1, nên sử dụng H2 chứ không phải thẻ P

  Các icon chưa hợp lý, chưa giống bản mẫu. Ở bản mẫu không có các animate như trong bài. Dễ gây rối mắt với nhiều chuyển động ở nơi không cần đọc.

  Các phần nhập liệu(Input, Textarea) cần thêm một chút phần padding nữa để được như bản mẫu.

  Màu background nút và text của nút chưa được tốt, phần text đang bị chìm so với nền, phần nền nút đang bị chói so với màu nền của html

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <div>
    <p>
      <i class="fa-solid fa-phone fa-bounce"></i> &nbsp; &nbsp;+1 800 123 1234
    </p>
  </div>
  ```

  Đề xuất đổi thành:

  ```html
  <p>
    <i class="fa-solid fa-phone fa-bounce"></i>
    <a href="tel:+18001231234">+1 800 123 1234</a>
  </p>
  ```

- [x] Bài 2

  Bài làm tốt\*

  Cần chỉn chu hơn vào title của bài, không phải lúc nào cũng là Document.

  Phần hình ảnh avatar chưa nằm ở trên như trong bản mẫu.

  Thay vì sử dụng thẻ p, ở đây là trích dẫn một câu nói, nên được thay bằng thẻ `q` để hợp lý hơn, nó sẽ tự động đưa thêm 2 dấu "

  ```html
  <q> Đây là một quote </q>
  ```

  Thiếu đường gạch chân của tiêu đề.

  Vì img là hình ảnh đại diện cho avatar của khách hàng, nên đưa alt là tên khách hàng thay vì để trông

- [x] Bài 3

  Bài làm không tốt

  Cần chỉn chu hơn vào title của bài, không phải lúc nào cũng là Document.

  Khoảng cách side bên trái cách quá xa bên phải so với bản mẫu.

  Có thể style cho border của input, select màu xanh để giống bản mẫu hơn.

  Các phần label ở phía bên trái, bên phải đều nên trỏ tới id của input phía bên phải

  Sử dụng rất nhiều thuộc tính có giá trị rỗng không cần thiết, nên bỏ đi để đỡ rối code

  Input radio không có placeholder, thêm vào là sai.

  Không có id là message nhưng lại có label trỏ for tới message.

  Sử dụng thẻ br sai cách. Các phần này không thể hiện là đoạn văn, cũng không nên sử dụng thẻ p, thay vào đó nên sử dụng label:

  ```html
  <div style="width: 29%;float: left;">
    <p>Username :</p>
    <p>Password :</p>
    <p>City of <br />Employment :</p>
    <p>Web sever :</p>
    <br />
    <p>
      Please specify <br />
      your role :
    </p>
    <br />
    <p>
      Single Sign-on <br />
      the folloiwing :
    </p>
  </div>
  ```

  Nên tránh, hạn chế tối đa inline CSS vì không thể tái sử dụng và code rất dài.

- [x] Bài 4

  Bài làm không tốt

  Cần chỉn chu hơn vào title của bài, không phải lúc nào cũng là Document.

  Format code rất xấu.

  Sử dụng thẻ br sai cách **Rất nhiều**

  Vì phần tên là tiêu đề của mỗi phần, nên sử dụng h2 thay cho thẻ p:

  ```html
  <p>ADS Securities L.L.C</p>
  ```

  Thiếu phần padding bên trái như trong bài mẫu.

  Font chữ tiêu đề của bài chưa đủ to so với bản mẫu.

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng hoặc thẻ a sai ý nghĩa.

  Phần nav ở trên thể hiện là một thanh điều hướng, nên sử dụng thẻ nav để bao bọc.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Bài làm chưa tốt

  Format code rất xấu.

  Cần chỉn chu hơn vào title của bài, không phải lúc nào cũng là Document.

  Không nên đặt các className kiểu: `div-p` gây khó hiểu và không thể tái sử dụng vì ngữ nghĩa.

  Phần format code của tiêu đề heading rất xấu. Nhiều khoảng cách thừa. Các độ đậm, nhạt chưa giống bản mẫu.

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Phần trên của tiêu đề đang thể hiện là một placeholder, có thể sẽ tốt hơn là một hình ảnh, Logo, cũng chưa thể biết được, vì vậy nên sử dụng một thẻ non-semantics để thể hiện nó. Ví dụ như thẻ div thay vì sử dụng thẻ p để thể hiện text.

## [Tran Quoc Viet](https://nhat0712.github.io/f8-FS-OL/Day%203/bai1)

**Cần cấu trúc lại folder, không được để các ký tự đặc biệt, khoảng cách... sẽ khiến URL rất xấu và có thể sai khi import,...**

- [x] Bài 1

  Bài làm tốt

  2 phần tiêu đề nhỏ hơn bổ nghĩa cho h1, nên sử dụng H2 chứ không phải thẻ th không.

  Các icon chưa hợp lý, chưa giống bản mẫu. Ở bản mẫu không có các animate như trong bài. Dễ gây rối mắt với nhiều chuyển động ở nơi không cần đọc.

  Các phần nhập liệu(Input, Textarea) chưa đồng nhất kích thước được như bản mẫu.

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <div>
    <span>
      <i class="fa-solid fa-phone"> </i>
      +1 800 123 1234
    </span>
  </div>
  ```

  Đề xuất đổi thành:

  ```html
  <div>
    <span>
      <i class="fa-solid fa-phone"> </i>
      <a href="tel:+18001231234">+1 800 123 1234</a>
    </span>
  </div>
  ```

- [x] Bài 2

  Bài làm tốt\*

  Phần hình ảnh avatar chưa nằm ở trên như trong bản mẫu.

  Thay vì sử dụng thẻ p, ở đây là trích dẫn một câu nói, nên được thay bằng thẻ `q` để hợp lý hơn, nó sẽ tự động đưa thêm 2 dấu "

  ```html
  <q> Đây là một quote </q>
  ```

  Phần customer name không được thể hiện như đoạn văn, chỉ được in đậm. Nên sử dụng thẻ b thì tốt hơn.

- [x] Bài 3

  Bài làm rất tốt\*

  Nên format lại code tránh để các thẻ bị dính vào nhau, rất khó nhìn.

  Có thể style cho border của input, select màu xanh để giống bản mẫu hơn.

- [x] Bài 4

  Bài làm tốt\*

  London là một từ, tên riêng, nên được viết có quy tắc như: **London**, **LONDON**, thay vì viết: **LonDon**

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng.

  Phần nav ở trên thể hiện là một thanh điều hướng, nên sử dụng thẻ nav để bao bọc.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Bài làm tốt

  Phần tiêu đề heading có độ đậm, nhạt chưa giống bản mẫu.

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Ở phần dưới cùng là button thật sự không phải button giả, nên sử dụng button thay vì div.

## [Dinh Viet Hung](https://hungskygaren.github.io/fullstack-k5/Day3/html/Bai1.html)

- [x] Bài 1

  Bài làm chưa tốt

  Input nhập email nên sử dụng type là email thay vì text.

  Các đoạn code CSS quá chắp vá, không được chỉn chu. Khiến cho nếu muốn sửa hoặc đọc rất khó.

  Các đoạn text đang có độ rộng quá ít, khiến cho nó bị co lại xuống dòng toàn bộ, rất xấu

  Các thẻ không được sử dụng tốt, tất cả là chung một section, ở trong bài sử dụng nhiều section không đúng mục đích.

  Màu background nút và text của nút chưa được tốt, phần text đang bị chìm so với nền, phần nền nút đang bị chói so với màu nền của html

  Thay vì form bọc cả section nên được bọc đúng nơi, chỉ cần bọc ở phần form-body

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <div class="contact-item">
    <i class="fa-regular fa-envelope contact-item-icon"></i>
    <p>info@companyname.com</p>
  </div>
  ```

  Đề xuất đổi thành:

  ```html
  <div class="contact-item">
    <i class="fa-regular fa-envelope contact-item-icon"></i>
    <a href="mailto:info@companyname.com">info@companyname.com</a>
  </div>
  ```

- [x] Bài 2

  Bài làm tốt\*

  Phần width của mỗi article quá dài khiến cho các phần text không được thể hiện tốt. Nó đang chạm vào các article khác.

  Sử dụng font ngoài nhưng không import hoặc sử dụng font-face khiến cho không thể hiện được font chữ mong muốn.

  Thay vì sử dụng thẻ p, ở đây là trích dẫn một câu nói, nên được thay bằng thẻ `q` để hợp lý hơn, nó sẽ tự động đưa thêm 2 dấu "

  ```html
  <q> Đây là một quote </q>
  ```

- [x] Bài 3

  Bài làm chưa tốt

  Có thể style cho border của input, select màu xanh để giống bản mẫu hơn.

  Các phần label ở phía bên trái cũng nên trỏ tới id của input phía bên phải

  Input type checkbox đang thể hiện là cùng một chức năng, nên cho name giống nhau để dễ dàng kiểm soát hơn.

  Các input radio cần có name để tránh bị chọn trùng nhau. Như trong bài là không hề có name.

  Thuộc tính for của label trỏ vào các ID nhưng trong bài không hề có ID nào của field như vậy. Khiến nó bị lỗi.

- [x] Bài 4

  Bài làm tốt

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng như ở trong bài.

  Phần nav ở trên thể hiện là một thanh điều hướng, nên sử dụng thẻ nav để bao bọc.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Phần font chữ ở title chưa giống bản mẫu

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Nếu div để thể hiện là bao bọc nhiều button, nên sử dụng `.btn-group` thay vì `.btn` sẽ dễ gây hiểu nhầm là một button

## [Lê Đức Anh](https://ducanhprogram.github.io/f8-fullstack-k5/Day-3/bai1.html)

- [x] Bài 1

  Bài làm tốt

  Chưa có đường kẻ gạch chân ở dưới như bản mẫu.

  Các phần nhập liệu(Input, Textarea) đều chưa đủ độ dài như bản mẫu.
  Các phần nhập liệu(Input, Textarea) chưa đồng nhất về độ dài như bản mẫu.

  Phần text: **321 Awesome Street New York, NY 17022** chưa được xuống dòng như bản mẫu

  Phần email nên được thêm thẻ a với thuộc tính href="mailto:email" thì sẽ tốt hơn
  Phần số điện thoại nên được thêm thẻ a với thuộc tính href="tel:so_dien_thoai" thì sẽ tốt hơn:

  ```html
  <td>
    <i class="far fa-envelope"></i>
    info@companyname.com
  </td>
  ```

  Đề xuất đổi thành:

  ```html
  <td>
    <i class="far fa-envelope"></i>
    <a href="mailto:info@companyname.com">info@companyname.com</a>
  </td>
  ```

- [x] Bài 2

  Bài làm tốt\*

  Phần hình ảnh avatar và content nên được gom nhóm vào 1 div để tránh bị hiện tượng xuống dòng ở các màn hình khác nhau.

  Phần màu chữ chưa được tốt. Màu cả phần content và phần username chưa đúng với yêu cầu đề bài

  Thay vì sử dụng thẻ p, ở đây là trích dẫn một câu nói, nên được thay bằng thẻ `q` để hợp lý hơn, nó sẽ tự động đưa thêm 2 dấu "

  ```html
  <q> Đây là một quote </q>
  ```

  Thiếu đường gạch chân của tiêu đề.

  Vì img là hình ảnh đại diện cho avatar của khách hàng, nên đưa alt là tên khách hàng thay vì để trống

  Phần tên customers chưa được in đậm như bản mẫu

- [x] Bài 3

  Bài làm tốt

  Có thể style cho border của input, select màu xanh để giống bản mẫu hơn.

  Các phần label ở phía bên trái cũng nên trỏ tới id của input phía bên phải thay vì để `for=""`

  Phần format của các input checkbox chưa được tốt lắm, nên xem lại.

- [x] Bài 4

  Bài làm tốt \*

  Tỷ lệ bài làm chưa đúng với bài mẫu. Bài mẫu có phần map dài hơn

  Size button, side của thả cha nav của bài đang không hợp lý khiến nó bị xuống dòng.

  Các phần số điện thoại, email nên gắn thẻ a phù hợp thay vì không sử dụng hoặc thẻ a sai ý nghĩa.

  Phần thông tin liên hệ được thể hiện là một list, nên sử dụng ul, li thay cho thẻ p

- [x] Bài 5

  Bài làm tốt \*

  Phần font chữ ở title chưa giống bản mẫu

  - Ở bản mẫu, các từ khác có font bình thường, chỉ các từ được highlight màu khác mới có độ đậm khác.

  Không thể chắc chắn ở trường hợp này bấm vào button sẽ hiện ra modal hay thực hiện action nào, không nên bọc thẻ a ở ngoài như vậy.
