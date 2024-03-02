# Dương review bài tập về nhà buổi 13 - Lớp K6

## [Phan Văn Hải](https://phanvanahai1995.github.io/exercise12/)

- [x] Bài 1

  Lần đầu chuyển tab đang bị giật do sử dụng JS chưa hợp lý.

  Nên sử dụng CSS để làm để luyện tư duy Layout tốt hơn.

  Thay vì dùng inline CSS, nên có class đặt thì tốt hơn.

  CSS Form Register chưa tốt, chiều cao đang sai so với bản mẫu. Do ở `.landing-form__register` có chiều cao 100%

  Cả 2 là cùng một tiêu đề, không phải là 2 ý nghĩa riêng, nên đặt vào trong một thẻ H1

  ```html
  <h3 class="landing__sub-heading">Welcome to</h3>
  <h1 class="landing__heading">Vikinger</h1>
  ```

  2 button nên dùng thẻ button thay vì thẻ p

  ```html
  <div class="landing__btn">
  	<p class="landing__switch-tab landing__switch-tab-login">Login</p>
  	<p class="landing__switch-tab landing__switch-tab-register">Register</p>
  </div>
  ```

  Form login hay register thì đều nên bọc thẻ form thay vì div

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý chưa tốt lắm, và sử dụng sai hầu hết thẻ HTML

## [Mai Viet Hoang](https://viethoang-mai.github.io/Ex-Fullstack-K6/Day_13/BTB_13)

- [x] Bài 1

  Cả 2 là cùng một tiêu đề, không phải là 2 ý nghĩa riêng, nên đặt vào trong một thẻ H1

  ```html
  <h2 class="sub-title">WELCOME TO</h2>
  <h1 class="landing-title">VIKINGER</h1>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý tốt, nhưng sử dụng sai semantics :(

## [Le Duc Anh](https://ducanhprogram.github.io/f8-fullstack-k6/Day-12)

- [x] Bài 1

  Khi ở màn hình nhỏ cho mobile, đang bị vỡ giao diện

  Ở các màn hình mobile, thay đổi không có hiệu ứng

  Cẩn thận với transition property là `all`, nó không tốt với một trang web lớn, sẽ khiến hiệu năng bị giảm.

  Label của các input khi focus đang bị thu quá nhỏ.

  Các form đang ở vị trí hơi cao so với bản mẫu.

  Ô checkbox bên register không bỏ check được.

  Cả 2 là cùng một tiêu đề, không phải là 2 ý nghĩa riêng, nên đặt vào trong một thẻ H1

  ```html
  <h2 class="landing-info-title2">Welcome to</h2>
  <h1 class="landing-info-title1">Vikinger</h1>
  ```

  Nếu tất cả đều là tabindex 1 thì không cần phải ghi nữa.

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý gần tốt, nhưng sử dụng sai semantics :(

## [Pham Xuan Yen](https://yenpham103.github.io/f8_fullstack_k6_btvn/Day12/index.html)

- [x] Bài 1

  Ở các màn hình mobile, thay đổi không có hiệu ứng

  Cẩn thận với transition property là `all`, nó không tốt với một trang web lớn, sẽ khiến hiệu năng bị giảm.

  Label của các input khi focus đang bị thu quá nhỏ.

  Style của label input khi focus không giống bản mẫu.

  Các checkbox chưa custom lại cho giống bản mẫu.

  Cả 2 là cùng một tiêu đề, không phải là 2 ý nghĩa riêng, nên đặt vào trong một thẻ H1

  ```html
  <h2 class="landing-info-welcome">WELCOME TO</h2>
  <h1 class="landing-info-title">VIKINGER</h1>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý gần tốt, nhưng sử dụng sai semantics :(

## [Phạm Hiếu](https://roniejisa.github.io/f8-fullstack-k6/ex/day12/)

- [x] Bài 1

  Hiệu ứng translate của form không đúng so với bản mẫu, hơi nhanh và input chưa đi theo

  Khi hover vào các icon social, chưa có hiệu ứng translateY như trong bản mẫu

  Các form đang ở vị trí hơi cao so với bản mẫu.

  Ô checkbox bên register không bỏ check được.

  Chưa có thẻ H2 nhưng trong bài đã có thẻ H3.

  Các icon SVG nên lưu vào 1 file khác, sử dụng img và đường dẫn tới file svg thì sẽ tốt hơn, ngắn gọn hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý gần tốt, nhưng sử dụng sai semantics, HTML hơi khó nhìn do SVG :(

## [Trần Quang Vinh](https://ducanhprogram.github.io/f8-fullstack-k6/Day-12)

- [x] Bài 1

  Giao diện PC đang bị vỡ, thiếu overflow.

  Ở các màn hình mobile, chưa thay đổi form được :D

  Ở các màn hình tablet, desktop, chưa thay đổi form được :D

  Khi hover vào các icon social, chưa có hiệu ứng translateY như trong bản mẫu

  Các input khi focus không giống bản mẫu. Và thiếu padding.

  Các form đang ở vị trí hơi cao so với bản mẫu.

  Chưa custom lại checkbox cho giống bản mẫu.

  Cả 2 là cùng một tiêu đề, không phải là 2 ý nghĩa riêng, nên đặt vào trong một thẻ H1

  ```html
  <h2>WELCOME TO</h2>
  <h1>VIKINGER</h1>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý không tốt, nhưng sử dụng sai semantics :(

## [Nguyễn Mạnh Dũng](https://jxnov.github.io/f8_fullstack_k6)

- [x] Bài 1

  Cả 2 là cùng một tiêu đề, không phải là 2 ý nghĩa riêng, nên đặt vào trong một thẻ H1

  ```html
  <h2 class="landing-info__pretitle">Welcome to</h2>

  <h1 class="landing-info__title">Vikinger</h1>
  ```

  Các icon SVG nên lưu vào 1 file khác, sử dụng img và đường dẫn tới file svg thì sẽ tốt hơn, ngắn gọn hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm xử lý tốt, nhưng sử dụng sai semantics :(
