# Dương review bài tập về nhà buổi 3 - Lớp K6

## [Mai Viet Hoang](view-source:https://viethoang-mai.github.io/Ex-Fullstack-K6/Day_03/Ex05.html#!)

- [x] Bài 1

  Bài làm chưa tốt

  Sai font chữ, font chữ trong bản mẫu sử dụng là font chữ không chân

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không nên sử dụng 2 section lồng nhau như này, có thể sử dụng thẻ header thay thế

  ```html
  <section class="contact">
  	<section class="header">
  		<h1>CONTACT US</h1>
  		<div
  			style="width: 70px;height: 3px;background: #ffbb42;margin-top: -15px;"
  		></div>
  	</section>
  </section>

  <!-- Ở dưới còn 2 section nữa -->
  ```

  Trong input HTML, không có type mail

  ```html
  <input type="mail" name="email" placeholder="Your email" />
  ```

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <div class="item">
  	<i class="fa-regular fa-envelope"></i>
  	<p>info@companyname.com</p>
  </div>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <div class="item">
  	<i class="fa-solid fa-phone"></i>
  	<p>+84 977 662 113</p>
  </div>
  ```

- [x] Bài 2

  Bài làm chưa tốt

  Trong bản mẫu sử dụng font chữ không chân.

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không nên sử dụng 2 section lồng nhau như này, có thể sử dụng thẻ header thay thế

  ```html
  <section class="header">
  	<h1>WHAT OUR CLIENTS SAY</h1>
  </section>

  <!-- Ở dưới còn nhiều section lồng nhau nữa -->
  ```

  Phần username không phải là một đoạn văn hay mang ý nghĩa đoạn văn, nên sử dụng span thay vì o

  ```html
  <p class="name">John Doe</p>
  ```

  Trong blockquote có thể sử dụng thẻ `q` cho mỗi quote để có sẵn 2 dấu quote và mang ý nghĩa là 1 quote

  ```html
  <blockquote>
  	&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
  	fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
  	cupiditate?&quot;
  </blockquote>
  ```

- [x] Bài 3

  Bài làm tốt

  Không nên đặt className là `btn` khi làm div gom nhóm các button, tránh gây nhầm lẫn với 1 button

  ```html
  <div class="btn">
  	<button>Login</button>
  	<button type="reset">Reset</button>
  </div>
  ```

  Không nên sử dụng name của field viết hoa

  ```html
  <label><input type="checkbox" name="Sign-on" />Payroll</label>
  ```

- [x] Bài 4

  Bài làm chưa tốt

  Với layout của bài, 1 tab chỉ hiển thị 1 content duy nhất, các content có cùng tầng ý nghĩa. Vì vậy heading không thể là `h1`

  ```html
  <h1 class="heading">ADS SECURITIES L.L.C.</h1>
  ```

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không nên sử dụng 2 section lồng nhau như này, có thể sử dụng thẻ header thay thế

  Phần địa chỉ là cùng 1 đoạn. Không phải là nhiều thẻ `p`, nếu muốn xuống dòng, nên sử dụng thẻ `br`

  ```html
  <div class="address">
  	<p>8th floor. C1 Tower</p>
  	<p>Corniche Road. PO Box 93894</p>
  	<p>Abu Dhabi. United Arab Emirates</p>
  </div>
  ```

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <div>Email: <a href="#!">vhm@gmail.com</a></div>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <div>Tell: +971 2 654 2300</div>
  <div>Fax: +971 2 654 2323</div>
  ```

- [x] Bài 5

  Phần box trên cùng giống với một placeholder để hình ảnh logo hơn là button, nên sử dụng div thay vì thẻ `<button>`

  ```html
  <button class="btn">
  	<a href="#!">190 x 50</a>
  </button>
  ```

  Nên bọc thẻ a ra ngoài, nếu sử dụng thẻ a ở trong thì phải bấm vào text mới có thể chuyển hướng

  ```html
  <button class="btn">
  	<a href="#!">View Plans</a>
  </button>
  ```

## [Phan Van Hai](https://phanvanahai1995.github.io/Execite3/Bai%201/index.html!)

- [x] Bài 1

  Bài làm tốt

  Font chữ quá nhỏ, thông thường với máy tính nên sử dụng font từ 14px, với điện thoai là từ 12-13px.

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <span> info@companyname.com</span>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <span>+1 800 123 1234</span>
  ```

  Không cần thiết phải bọc form vào toàn bộ phần content bên trái, chỉ nên bọc vào các phần tử cần bọc như input, button, bỏ qua heading.

- [x] Bài 2

  Bài làm chưa tốt

  Phần username không phải là một đoạn văn hay mang ý nghĩa đoạn văn, nên sử dụng span thay vì o

  ```html
  <p class="name">John Doe</p>
  ```

  Trong đoạn content có thể sử dụng thẻ `q` cho mỗi quote để có sẵn 2 dấu quote và mang ý nghĩa là 1 quote

  ```html
  <p class="content">
  	Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste quis
  	molestias, odit alias est ut. Voluptatibus nostrum labore necessitatibus
  	neque? Ullam, nam.
  </p>
  ```

- [x] Bài 3

  Bài làm tốt

  Các thuộc tính không sử dụng như: `id=""` nên xóa đi, thuộc tính id bắt buộc phải có giá trị

  Button để reset nên sử dụng type reset. Mặc định là submit

  Có thể styled cho border của input, select cho giống bản mẫu hơn

- [x] Bài 4

  Bài làm chưa tốt

  Trong bản mẫu sử dụng font chữ không chân.

  Các nội dung trong tab thông tin không phải là 1 list, chúng không có cùng 1 ý nghĩa mà đều bổ nghĩa cho tiêu đề

  ```html
  <ul></ul>
  	<li><h3 class="heading">ADS SECURITIES L.L.C</h3></li>
  	<li><div class="address">8th floor.CI Tower</div></li>
  	<li><div class="address">Comiche fload.PO Box 93894</div></li>
  	<li><div class="address">Abu Dhabi. United Arab Emirates</div></li>
  	<li><div class="address">Tel:+971 2 657 2300</div></li>
  	<li><div class="address">Fax:+971 2 657 2323</div></li>
  	<li>
  		<div class="address">
  			Email:
     <a href="#!" class="email">fullstack.edu@gmail.com</a>
  		</div>
  	</li>
  </ul>
  ```

  Phần địa chỉ là cùng 1 đoạn. Không phải là nhiều thẻ `li>div`, nếu muốn xuống dòng, nên sử dụng thẻ `br`

  ```html
  <li><div class="address">8th floor.CI Tower</div></li>
  <li><div class="address">Comiche fload.PO Box 93894</div></li>
  <li><div class="address">Abu Dhabi. United Arab Emirates</div></li>
  ```

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <li>
  	<div class="address">
  		Email:
  		<a href="#!" class="email">fullstack.edu@gmail.com</a>
  	</div>
  </li>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <li><div class="address">Tel:+971 2 657 2300</div></li>
  <li><div class="address">Fax:+971 2 657 2323</div></li>
  ```

- [x] Bài 5

  Bài làm rất tốt.

## [Tran Quang Vinh](https://vinhtran202.github.io/hoccode/Day-3/bai-tap-form-lien-he/)

- [x] Bài 1

  Bài làm chưa tốt

  Sai font chữ, font chữ trong bản mẫu sử dụng là font chữ không chân

  Chiều dài của textarea không đồng nhất với các input khác

  Các input, textarea,... (field nhập liệu) nên có một chút padding để chữ không bị dính vào viền

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <p><i class="bi bi-envelope"> </i> &nbsp; Info@companyname.com</p>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  </i> &nbsp; +1 800 123 1234</p>
  ```

  Phần field bên phải được thể hiện là một form nhập liệu, nên bọc thẻ form vào.

- [x] Bài 2

  Bài làm chưa tốt

  Trong bản mẫu sử dụng font chữ không chân.

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không nên sử dụng 2 section lồng nhau như này, có thể sử dụng thẻ header thay thế

  ```html
  <section class="title">
  	<h1>WHAT OUR CLIENTS SAY</h1>
  	<hr />
  </section>

  <!-- Ở dưới còn nhiều section lồng nhau nữa -->
  ```

  Phần username không phải là một đoạn văn hay mang ý nghĩa đoạn văn, nên sử dụng span thay vì o

  ```html
  <p class="name">John Doe</p>
  ```

  Trong blockquote có thể sử dụng thẻ `q` cho mỗi quote để có sẵn 2 dấu quote và mang ý nghĩa là 1 quote

  ```html
  <blockquote>
  	&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
  	fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
  	cupiditate?&quot;
  </blockquote>
  ```

  _Nên bật toggle word wrap trong vscode lên để code dễ hơn (ALT + Z)_

- [x] Bài 3

  Bài làm tốt

  Không cần phải dùng div để ngắt các dòng, có thể sử dụng style cho label là display block

  ```html
  <div></div>
  ```

  Khi login cần submit form, button nên sử dụng type submit thay vì type button

- [x] Bài 4

  Bài làm chưa tốt

  Trong bản mẫu sử dụng font chữ không chân.

  Các nội dung trong tab thông tin không phải là 1 list, chúng không có cùng 1 ý nghĩa mà đều bổ nghĩa cho tiêu đề

  ```html
  <ul></ul>
  	<li><h3 class="heading">ADS SECURITIES L.L.C</h3></li>
  	<li><div class="address">8th floor.CI Tower</div></li>
  	<li><div class="address">Comiche fload.PO Box 93894</div></li>
  	<li><div class="address">Abu Dhabi. United Arab Emirates</div></li>
  	<li><div class="address">Tel:+971 2 657 2300</div></li>
  	<li><div class="address">Fax:+971 2 657 2323</div></li>
  	<li>
  		<div class="address">
  			Email:
     <a href="#!" class="email">contact@fullstack.edu.vn</a>
  		</div>
  	</li>
  </ul>
  ```

  Phần địa chỉ là cùng 1 đoạn. Không phải là nhiều thẻ `li>div`, nếu muốn xuống dòng, nên sử dụng thẻ `br`

  ```html
  <li><div class="address">8th floor.CI Tower</div></li>
  <li><div class="address">Comiche fload.PO Box 93894</div></li>
  <li><div class="address">Abu Dhabi. United Arab Emirates</div></li>
  ```

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <li>
  	<div class="address">
  		Email:
  		<a href="#!" class="email">fullstack.edu@gmail.com</a>
  	</div>
  </li>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <li><div class="address">Tel:+971 2 657 2300</div></li>
  <li><div class="address">Fax:+971 2 657 2323</div></li>
  ```

  Style chưa tốt

  Chưa có active tab

  Bài làm rất giống của [phan van hai](view-source:https://phanvanahai1995.github.io/Execite3/Bai%204/)

- [x] Bài 5

  Phần heading chưa đúng font chữ so với bản mẫu, bản mẫu heading có fontweight nhỏ, chỉ ở chữ màu xanh mới có fontweight đậm.

## [Pham Xuan Yen](view-source:https://yenpham103.github.io/f8_fullstack_k6_btvn/Day3/ex01/ex01.html)

- [x] Bài 1

  Bài làm chưa tốt

  Sai font chữ, font chữ trong bản mẫu sử dụng là font chữ không chân

  Chiều dài của textarea không đồng nhất với các input khác

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <div class="email_info">info@gmail.com</div>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <
  <div class="tel_info">+1 800 123 1234</div>
  ```

  Các tiêu đề nên sử dụng thẻ heading, không phải thẻ p

- [x] Bài 2

  Bài làm chưa tốt

  Trong bản mẫu sử dụng font chữ không chân.

  Hình ảnh hơi to so với bản mẫu

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không phải để thể hiện 1 cột trong 1 phần trang web.

  Phần username không phải là một đoạn văn hay mang ý nghĩa đoạn văn, nên sử dụng span thay vì o

  ```html
  <p class="name">John Doe</p>
  ```

  Trong blockquote có thể sử dụng thẻ `q` cho mỗi quote để có sẵn 2 dấu quote và mang ý nghĩa là 1 quote

  ```html
  <blockquote>
  	&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
  	fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
  	cupiditate?&quot;
  </blockquote>
  ```

  _Nên format lại code_

- [x] Bài 3

  Bài làm rất tốt

- [x] Bài 4

  Bài làm chưa tốt

  Thay vì sử dụng div class là "nav", nên sử dụng thẻ nav để đúng semantics hơn.

  Trong bản mẫu sử dụng font chữ không chân.

  Phần địa chỉ là cùng 1 đoạn. Không phải là nhiều thẻ `p`, nếu muốn xuống dòng, nên sử dụng thẻ `br`

  ```html
  <p>8th floor. C1 Tower</p>
  <p>Corniche Road. PO Box 93894</p>
  <p>Abu Dhabi. United Arab Emirates</p>
  ```

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <p><a href="#">vhm@gmail.com</a></p>
  <!-- Thiếu chữ Email -->
  ```

  Giao diện phần email chưa giống bản mẫu

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <li><div class="address">Tel:+971 2 657 2300</div></li>
  <li><div class="address">Fax:+971 2 657 2323</div></li>
  ```

  Chưa có active tab

  Bài làm rất giống của [Mai Viet Hoang](https://viethoang-mai.github.io/Ex-Fullstack-K6/Day_03/Ex04.html)

- [x] Bài 5

  Tiêu đề nên sử dụng heading chứ không phải thẻ p class title

  Phần box trên cùng giống với một placeholder để hình ảnh logo hơn là button, nên sử dụng div thay vì thẻ `<button>`

  ```html
  <button class="btn">
  	<a href="#!">190 x 50</a>
  </button>
  ```

## [Nguyễn Văn Đạt](https://vandar1011.github.io/F8_FullStack_k6/Day-3/ex01.html)

- [x] Bài 1

  Bài làm không tốt

  Sai hoàn toàn giao diện bản mẫu

  Các font chữ quá nhỏ gây khó nhìn

  - Với điện thoại, các font chữ có thể từ 12-13px trở lên.

  - Với máy tính, laptop, tablet nên từ 14 trở lên.

  Các input nên có thêm một chút padding để dễ viết hơn, tránh bị chữ sát với viền trái

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <span>infor@companyname.com</span>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <span>+1 800 123 1234</span>
  ```

  Phần link file css nên để dưới sau khi link các thư viện CSS để đảm bảo việc ghi đè và tránh bị conflict giữa các file css

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không nên sử dụng 2 section lồng nhau như này, có thể sử dụng thẻ header thay thế

  ```html
  <section class="containet">
  	...
  	<section class="contact-inf">
  		<h2>Contact Info</h2>
  		...
  	</section>
  	...
  	<section class="book-appointment">...</section>
  </section>

  <!-- Ở dưới còn 2 section nữa -->
  ```

  Form trong bài không cần thiết bọc tất cả các phần tử, chỉ nên bọc ở các field cần thiết, có thể bỏ qua thẻ h2 trong bài.

- [x] Bài 2

  Bài làm chưa tốt

  Thanh `.heading1-center::before` hơi lệch

  Do chưa reset margin của body, `section.reviewer` đang bị thừa ra ngoài khiến hiện cuộn ngang

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không phải để thể hiện 1 cột trong 1 phần trang web.

  Phần username không phải là một đoạn văn hay mang ý nghĩa đoạn văn, nên sử dụng span thay vì o

  ```html
  <p class="name">John Doe</p>
  ```

  Trong blockquote có thể sử dụng thẻ `q` cho mỗi quote để có sẵn 2 dấu quote và mang ý nghĩa là 1 quote

  ```html
  <blockquote>
  	&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
  	fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
  	cupiditate?&quot;
  </blockquote>
  ```

  Thẻ img trong bài thể hiện avatar của một user, nên sử dụng thuộc tính alt một cách hợp lý hơn, đưa tên user vào làm alt của img

  ```html
  <div class="box-image">
  	<img src="assets/images/avt.jpg" alt="" class="image" />
  </div>
  ```

  Nên đặt class một cách hợp lý hơn nữa, `items`, `item` không mang ý nghĩa cụ thể, nếu như có nhiều section thì class sẽ rất khó hiểu.

- [x] Bài 3

  Bài làm chưa tốt

  Background của bài sai hoàn toàn so với bản mẫu

  Màu chữ bị chìm so với background, hơi khó nhìn

  Các button styled khác với bản mẫu

  Nên style border màu xanh cho các input để giống hơn với bản mẫu

  Thuộc tính name trong form nên có giá trị để khi submit form có thể dễ dàng lấy được.

  Button để submit form nên sử dụng type là submit thay vì button

  ```html
  <button type="button" class="btn" id="btn-login">Login</button>
  ```

- [x] Bài 4

  Bài làm chưa tốt

  Thay vì sử dụng div class là "nav-wrap", nên sử dụng thẻ nav để đúng semantics hơn.

  Trong bản mẫu sử dụng font chữ không chân.

  Thẻ `<section>` được sử dụng để định rõ một phần nội dung riêng biệt trên trang web. Không nên sử dụng 2 section lồng nhau.

  Các nội dung trong tab thông tin không phải là 1 list, chúng không có cùng 1 ý nghĩa mà đều bổ nghĩa cho tiêu đề

  ```html
  <ul>
  	<li class="content-map">8th floor.CI Tower</li>
  	<li class="content-map">Comiche fload.PO Box 93894</li>
  	<li class="content-map">Abu Dhabi. United Arab Emirates</li>
  	<li class="content-map">Tel:+971 2 657 2300</li>
  	<li class="content-map">Fax:+971 2 657 2323</li>
  	<li class="content-map">
  		Email:
  		<a href="#!" class="email">fullstack.edu@gmail.com</a>
  	</li>
  </ul>
  ```

  Phần địa chỉ là cùng 1 đoạn. Không phải là nhiều thẻ `p`, nếu muốn xuống dòng, nên sử dụng thẻ `br`

  ```html
  <li class="content-map">8th floor.CI Tower</li>
  <li class="content-map">Comiche fload.PO Box 93894</li>
  <li class="content-map">Abu Dhabi. United Arab Emirates</li>
  ```

  Các phần mail có thể sử dụng thẻ a với href="mailto:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <a href="#!" class="email">fullstack.edu@gmail.com</a>
  ```

  Các phần số điện thoại có thể sử dụng thẻ a với href="tel:" để dễ dàng trong việc sử dụng hơn.

  ```html
  <li class="content-map">Tel:+971 2 657 2300</li>
  <li class="content-map">Fax:+971 2 657 2323</li>
  ```

  Chưa có active tab

  Khi hover, active màu background của nav chưa giống bản mẫu.

  Màu link gmail chưa giống bản mẫu.

- [x] Bài 5

  Bài làm chưa tốt

  Style của heading không giống với bản mẫu, phần text ngoài có fontweight nhạt, chỉ có phần trong span là đậm

  ```html
  <h2 class="heading2">Best <span>Shared Hosting</span> Company</h2>
  ```

  Màu của các button, placeholder image không giống bản mẫu
