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

# Review bài tập về nhà buổi 1 - Lớp FullStack K8

## [Nguyen Quang Khai](https://github.com/KhaiNQ-K/f8-fullstack-k8)

- [x] Bài 1:

**Bài làm tốt**

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- [x] Bài 2:

**Bài làm tốt**

- Các thẻ tiêu đề trong thẻ li nên sử dụng thẻ `h2` thay vì thẻ `h1` vì chúng chưa đủ ý nghĩa làm một tiêu đề chính và trong một trang chỉ nên có 1 thẻ `h1` để nhấn mạnh tiêu đề chính của trang đó.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm tốt**

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tốt**, đa số đều sử dụng và phân tích HTML tốt. Chỉ cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể <3.

## [Truong Thanh Tung](https://github.com/thanhtung1211/F8-fullstack-K8/tree/main/Day-1)

- [x] Bài 1:

**Bài làm chưa tốt**

- Thẻ `style` nên được đặt ở trong thẻ `head` thay vì thẻ `body`.

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- [x] Bài 2:

**Bài làm tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tạm ổn**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Le Nhung](https://github.com/nhunglt1801/f8-fullstack-k8-exercise/blob/main/day-1/exercise)

- [x] Bài 1:

**Bài làm tốt**

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- [x] Bài 2:

**Bài làm tốt**

- Tiêu đề của các bài viết nên dùng thẻ `h2` thay vì `h3` để tăng thêm độ nhấn mạnh cho tiêu đề của các bài viết.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tốt**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Le Cong Tu Anh](https://github.com/lcatintheclouds/F8_FullStack_Offline_K8/tree/main/baitapvenhabuoi1)

- [x] Bài 1:

**Bài làm tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Không nên để `type` của thẻ `button` là `reset` vì khi `submit` form toàn bộ giá trị trong các trường sẽ bị mất điều này có thể gấy ra trải nghiệm không tốt cho người dùng khi họ đang nhập các trường trong form và chưa nhập xong thì bấm nhầm `submit` thì toàn bộ dữ liệu trong các trường trước đó được nhập sẽ biến mất.

- [x] Bài 2:

**Bài làm chưa tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Trong thẻ `ul` thì chỉ có thẻ `li` là con trực tiếp vậy nên tất các thẻ `h2` và thẻ `p` trong bài làm cần được đặt vào trong thẻ `li` tương ứng.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` và giá trị `alt` phải hợp lý hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- Lưu ý cách format code.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tạm ổn**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Vu Thi Hoai Thu](https://github.com/hoaithu222/f8_offline_k8/blob/main/Ngay1)

- [x] Bài 1:

  **Bài làm chưa tốt**

  Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

  Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

  Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

  Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

  Thẻ `br` chỉ được sử dụng để ngắt dòng văn bản không được sử dụng để tạo khoảng cách giữa các thẻ `html`.

  Thẻ `button` không có `type = "request"`.

- [x] Bài 2:

**Bài làm chưa tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` và giá trị `alt` phải hợp lý hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- Các thẻ tiêu đề trong thẻ li nên sử dụng thẻ `h2` thay vì thẻ `h1` vì chúng chưa đủ ý nghĩa làm một tiêu đề chính và trong một trang chỉ nên có 1 thẻ `h1` để nhấn mạnh tiêu đề chính của trang đó.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm chưa tốt**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn, thẻ `title` trong mỗi bài cần được chỉnh sửa sao cho phù hợp với ý nghĩa của trang để tốt hơn cho `SEO`, đường dẫn ở các thẻ `a` ở trang danh sách bài làm đang là đường dẫn khi chạy trên LiveServer không phải đường dẫn khi đẩy lên github page, nên sử dụng các đường dẫn tương đối trong trường hợp này.
