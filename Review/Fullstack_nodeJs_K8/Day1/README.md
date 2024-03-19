# Duong review bai tap ve nha buoi 1 - Lop K8

## [Nguyễn Xuân Phong](https://xuanphong03.github.io/Fullstack-Offline-F8/day-1/bai01.html)

- [x] Bài 1

  Bài làm tốt

  Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`

  Input nhập email nên sử dụng type là email để dễ dàng validate hơn, đúng ý nghĩa hơn.

  Vì đây là một biểu mẫu, nên bọc thẻ form vào.

- [x] Bài 2

  Bài làm tốt \*

  Ở đây có 1 thẻ `<i>` đóng thừa:

  ```html
  <span><i class="fa-solid fa-camera-retro"></i></i></span>↩
  ```

- [x] Bài 3

  Bài làm rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, đa số đều sử dụng và phân tích HTML tốt. Chỉ cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể <3

## [Vũ Trí Tùng](https://tungv62333.github.io/f8-offline-k8/lesson-1/ex01.html)

- [x] Bài 1

  Bài làm tốt

  Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`

  Input nhập email nên sử dụng type là email để dễ dàng validate hơn, đúng ý nghĩa hơn.

  Vì đây là một biểu mẫu, nên bọc thẻ form vào.

- [x] Bài 2

  Bài làm tốt \*

  Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị alt hợp lý, có thể sử dụng tiêu đề của h2 để là giá trị.

  Ví dụ:

  ```html
  <li>
  	<img src="img/leaf.png" alt="UI/UX Design" width="16" />
  	<h2>UI/UX Design</h2>
  	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </li>
  ```

  Không nên sử dụng cả width/height cho hình ảnh, có thể sẽ khiến hình ảnh không đúng tỷ lệ, vỡ và giãn ảnh.

- [x] Bài 3

  Bài làm chưa tốt

  Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

  Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

  Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

  Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ `<footer>`.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Cù Tiến Thịnh](https://thinh060903.github.io/F8-Fullstack-K8/Day-1/ex01.html)

**Chưa gửi link github pages**

- [x] Bài 1

  Bài làm tốt

  Input nhập email nên sử dụng type là email để dễ dàng validate hơn, đúng ý nghĩa hơn.

  Vì đây là một biểu mẫu, nên bọc thẻ form vào.

- [x] Bài 2

  Bài làm chưa tốt

  Hình ảnh bị lỗi do sai đường dẫn:

  ```html
  <li>
  	<div>
  		<img src="/icons/leaf-solid.svg" alt="" width="20" height="20" />
  	</div>
  	<h2>UI/UX Design</h2>
  	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </li>
  <li>
  	<div>
  		<img src="/icons/display-solid.svg" alt="" width="20" height="20" />
  		<h2>Web Development</h2>
  		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  	</div>
  </li>
  ```

  - Đang sử dụng absolute path, khiến cho đường dẫn phải đúng trong trường hợp mở ở live server, tuy nhiên github page yêu cầu đi qua 1 sub folder, vì vậy đang không thể hiện đúng ảnh.

  Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị alt hợp lý, có thể sử dụng tiêu đề của h2 để là giá trị.

  Ví dụ:

  ```html
  <li>
  	<img src="./icons/leaf-solid.svg" alt="UI/UX Design" width="20" />
  	<h2>UI/UX Design</h2>
  	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </li>
  ```

  Không nên sử dụng cả width/height cho hình ảnh, có thể sẽ khiến hình ảnh không đúng tỷ lệ, vỡ và giãn ảnh.

- [x] Bài 3

  Bài làm chưa tốt

  Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

  Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

  Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

  Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ `<footer>`.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Thuận Minh](https://minhthuan1809.github.io/f8-fullstack-k8/day-1/)

- [x] Bài 1

  Bài làm tốt

  Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`

  Input nhập email nên sử dụng type là email để dễ dàng validate hơn, đúng ý nghĩa hơn.

  Vì đây là một biểu mẫu, nên bọc thẻ form vào.

  Meta viewport thiếu device-with:

  ```html
  <meta name="viewport" content="width= , initial-scale=1.0" />
  ```

- [x] Bài 2

  Bài làm chưa tốt

  Trong 1 trang chỉ có **1** thẻ `<h1>`, nhưng trong bài tập về nhà đang sử dụng quá nhiều, ở trường hợp này, các tiêu đề là cùng cấp, có thể là `<h2>`, `<h3>` đều được.

  Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị alt hợp lý, có thể sử dụng tiêu đề của h2 để là giá trị.

  Ví dụ:

  ```html
  <li>
  	<img src="./img/Leaf.16.png" alt="UI/UX Design" />
  	<h2>UI/UX Design</h2>
  	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </li>
  ```

- [x] Bài 3

  Bài làm chưa tốt

  Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

  Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

  Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

  Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ `<footer>`.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Bùi Đức Dương](https://buiduong2.github.io/F8-offline/buoi1/ex1.html)

- [x] Bài 1

  Bài làm tốt

  Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`

  Input nhập email nên sử dụng type là **email** để dễ dàng validate hơn, đúng ý nghĩa hơn. Không có type là **mail**.

  Vì đây là một biểu mẫu, nên bọc thẻ form vào.

- [x] Bài 2

  Bài làm tốt

  Nên chú ý thêm vào meta title của trang web, nó giúp người dùng dễ dàng biết được trang web của mình nói về gì, giúp các bot SEO dễ dàng hiểu và đánh giá cao trang web hơn. Chứ không chỉ để là **Document**

  Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị alt hợp lý, có thể sử dụng tiêu đề của h2 để là giá trị.

  Ví dụ:

  ```html
  <li>
  	<div>
  		<img width="20px" src="./icon/leaf-icon.png" alt="UI/UX Design" />
  	</div>
  	<h2>UI/UX Design</h2>
  	<p>
  		Lorem ipsum dolor, sit amet consectetur adipisicing elit mi quis,
  		vulputate magna.
  	</p>
  </li>
  ```

- [x] Bài 3

  Bài làm rất tốt

  Nên chú ý thêm vào meta title của trang web, nó giúp người dùng dễ dàng biết được trang web của mình nói về gì, giúp các bot SEO dễ dàng hiểu và đánh giá cao trang web hơn. Chứ không chỉ để là **Document**

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.
