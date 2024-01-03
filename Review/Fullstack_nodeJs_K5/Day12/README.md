# Dương review bài tập về nhà buổi 12 - Lớp K5

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/day_12)

- [x] Bài 1

  Bài làm rất tốt

  Icon logo không đúng, có thể inspect lên lấy ở bản mẫu, hoặc sử dụng một extension là SVG export để lấy dễ hơn.

  Các icon hầu hết đều bé hơn bản mẫu.

  Nên thêm thuộc tính: `autofocus` vào thẻ input đầu tiên để thuận tiện cho việc gõ hơn.

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa:

  ```html
  <p class="landing__subtitle">Welcome to</p>
  <h1 class="landing__title">VIKINGER</h1>
  ```

## [Trinh Nam Truong](https://truongtn04.github.io/f8-fullstack-k5/project2)

- [x] Bài 1

  Bài làm tốt

  Icon logo không đúng, có thể inspect lên lấy ở bản mẫu, hoặc sử dụng một extension là SVG export để lấy dễ hơn.

  Các icon hầu hết đều bé hơn bản mẫu.

  Nên thêm thuộc tính: `autofocus` vào thẻ input đầu tiên để thuận tiện cho việc gõ hơn.

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2 class="lading-info__title">Welcome to</h2>
  <h1 class="lading-info__viking">Vikinger</h1>
  ```

  Sai chính tả: **contactus** => **contact us**

  Thiếu background hình tròn ở bên phải.

  Background đang sử dụng position center nhưng sẽ bị lệch với bản mẫu, bản mẫu sử dụng `left bottom`

  Phần thông tin thêm bên trái chưa nằm ở giữa màn hình mà đang sử dụng `top: 13%`, chỉ đúng ở 1 trường hợp

  - Nên sử dụng căn giữa một cách tự động, có thể căn bằng flex hoặc `position+translate`

  Nên sử dụng kiến thức **đã học** để làm thì sẽ tốt hơn

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-12/bai-tap-buoi-12.html)

- [x] Bài 1

  Bài làm **không** tốt

  Sử dụng position `top: -60%`, `right: -70%` khiến nó chỉ đúng trong 1 trường hợp, không self test lại, giao diện sai hoàn toàn

## [Lê Đức Anh](https://ducanhprogram.github.io/f8-fullstack-k5/Day-12/index.html)

- [x] Bài 1

  Bài làm **chưa** tốt

  Phần form login chưa nằm ở giữa màn hình mà đang sử dụng `margin-top: 60px`, chỉ đúng ở 1 trường hợp

  - Nên sử dụng căn giữa một cách tự động, có thể căn bằng flex hoặc `position+translate`

  Nên thêm thuộc tính: `autofocus` vào thẻ input đầu tiên để thuận tiện cho việc sử dụng hơn.

  Khi focus vào input, có sử dụng border để thay đổi màu viền, tuy nhiên chưa ẩn hoặc đổi màu outline khiến cho màu outline đè lên trên màu border và tạo nên màu đen.

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2 class="landing-info-pretitle">WELCOME TO</h2>
  <h1 class="landing-info-title">VIKINGER</h1>
  ```

  Nên tách phần font face ra một file CSS khác để đỡ rối hơn.

## [Nguyễn Đức Nhật](https://nhat0712.github.io/f8-FS-OL/Day%2012/main)

- [x] Bài 1

  Bài làm tốt

  Phần form login chưa nằm ở giữa màn hình mà đang sử dụng `top: -74px;`, chỉ đúng ở 1 trường hợp

  - Nên sử dụng căn giữa một cách tự động, có thể căn bằng flex hoặc `position+translate`

  Nên thêm thuộc tính: `autofocus` vào thẻ input đầu tiên để thuận tiện cho việc sử dụng hơn.

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2 class="pre-title">WELCOME TO</h2>
  <h1 class="title">VIKINGER</h1>
  ```

  Nên tách phần font face ra một file CSS khác để đỡ rối hơn.

  Các màu hay sử dụng, các giá trị hay sử dụng nên tách thành một variable, để trên :root để dễ sử dụng và dễ thay đổi hơn.

## [Nguyễn Ngọc Minh](https://minhhnguyenn.github.io/F8_Fullstack_BTVN/Btvnbuoi12/btvnbuoi12)

- [x] Bài 1

  Bài làm tốt

  Bài làm đang sử dụng giao diện tablet, cần xem lại xem có zoomed hay không.

  Giao diện, width, khoảng cách các box, icon... đang bé hơn bản mẫu

  Bottom của trang web chưa có khoảng cách với form login như bản mẫu.

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2>WELCOME TO</h2>
  <h1>VIKINGER</h1>
  ```

  Các màu hay sử dụng, các giá trị hay sử dụng nên tách thành một variable, để trên :root để dễ sử dụng và dễ thay đổi hơn.

## [Bùi Minh Chí](https://ronbanh549.github.io/f8-fullstack-k5/Day-12/index.html)

- [x] Bài 1

  Bài làm **không** tốt

  Thiếu chức năng đổi form

  Thiếu background màu trắng bên phải

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <!-- LANDING INFO PRETITLE -->
  <h2 class="landing-info-pretitle">Welcome to</h2>
  <!-- /LANDING INFO PRETITLE -->

  <!-- LANDING INFO TITLE -->
  <h1 class="landing-info-title">Vikinger</h1>
  ```

## [Nguyễn Văn Thắng](https://nvthang391.github.io/F8-FSK5/Day_12/bai1.html)

- [x] Bài 1

  Bài làm **không** tốt

  Giá trị height đang để là 90%/100% theo thẻ cha mà cha là 100% theo cha cha cha, sau cùng là 100vh nên các form đều sai giao diện

  ```css
  .login-form {
  	width: 100%;
  	height: 90%;
  	margin-top: 32px;
  	padding: 64px;
  	border-radius: 12px;
  }
  .register-form {
  	width: 100%;
  	height: 100%;
  	padding: 40px 64px;
  }
  ```

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2 class="landing-info-subtitle">WELCOME TO</h2>
  <h1 class="landing-info-title">VIKINGER</h1>
  ```

## [Nguyễn Tuấn Hùng](https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN-no12/d12-bvn.html)

- [x] Bài 1

  Bài làm tốt \* (note: khá tốt)

  Chưa có default checked cho input, chỉ sử dụng button focus để highlighting cho `.page-info-switch` nên khi bỏ focus thì sẽ **bug** giao diện.

  Icon logo không đúng, có thể inspect lên lấy ở bản mẫu, hoặc sử dụng một extension là SVG export để lấy dễ hơn.

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2>WELCOME TO</h2>
  <h1>VIKINGER</h1>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm khá tốt, tuy nhiên:

  Cần fix lại bug button-focus

  Format lại code CSS

  Các màu hay sử dụng, các giá trị hay sử dụng nên tách thành một variable, để trên :root để dễ sử dụng và dễ thay đổi hơn.

## [Đinh Việt Hùng](https://hungskygaren.github.io/fullstack-k5/Day12/html/Bai1.html)

- [x] Bài 1

  Bài làm tốt

  Phần form login chưa nằm ở giữa màn hình mà đang sử dụng `top: -74px;`, chỉ đúng ở 1 trường hợp

  - Nên sử dụng căn giữa một cách tự động, có thể căn bằng flex hoặc `position+translate`

  2 phần này là chung 1 title, khi tách ra chúng không mang đủ ý nghĩa, ngoài ra nếu sử dụng `<h2>` ở đây sẽ sai ý nghĩa vì **Welcome to** không mang ý nghĩa nào cho bài này.

  ```html
  <h2>WELCOME TO</h2>
  <h1>VIKINGER</h1>
  ```

  Nên sử dụng các reset CSS một cách tốt hơn tránh sử dụng một cách đơn giản như trong bài để đảm bảo hiệu năng hơn.

  Các màu hay sử dụng, các giá trị hay sử dụng nên tách thành một variable, để trên :root để dễ sử dụng và dễ thay đổi hơn.

## [Luu Ngoc Duong](https://duongluu9898.github.io/f8-duongluu-fullstack-k5/day12/html/baitap1.html)

- [x] Bài 1

  Bài làm **không** tốt

  Sử dụng position `top: 0` khiến nó chỉ đúng trong 1 trường hợp, không self test lại, giao diện sai hoàn toàn

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-12)

- [x] Bài 1

  Bài làm rất tốt

  Icon logo không đúng, có thể inspect lên lấy ở bản mẫu, hoặc sử dụng một extension là SVG export để lấy dễ hơn.

  Bài làm đang sử dụng giao diện tablet, cần xem lại xem có zoomed hay không.

  Các màu hay sử dụng, các giá trị hay sử dụng nên tách thành một variable, để trên :root để dễ sử dụng và dễ thay đổi hơn.

  - Ví dụ như:

  ```plaintext
  #3e3f5e
  #22d2e2
  ```
