# Dương review bài tập về nhà buổi 6 - Lớp K5

## [Nguyễn Văn Thắng](https://nvthang391.github.io/F8-FSK5/Day_6/bai1.html)

- [x] Bài 1

  Bài làm chưa tốt

  Thiếu case hover vào thì hiển thị menu con

  Sai semantics:

  - Thẻ button là một thẻ inline, không được bọc thẻ div.

  ```html
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");↩
  </style>
  ```

  Không cần thiết phải viết 1 thẻ style chỉ để import font, có thể viết vào file css bên dưới hoặc dùng thẻ link import của google

  ```html
  <script↩
      src="https://kit.fontawesome.com/e954a9031e.js"↩
      crossorigin="anonymous"
  ></script>
  ```

  Với các bài nhỏ, không nên import bộ kit, nó sẽ gây nặng dự án. Thay vào đó ở bài chỉ cần icon font nên import 1 file font css là đủ.

  Các đoạn CSS này không cần thiết phải viết, có thể gộp chung vào solid:

  ```css
  .fa-house-chimney,
  .fa-star,
  .fa-newspaper,
  .fa-briefcase,
  .fa-pen-to-square,
  .fa-phone {
    font-size: 16px;
  }
  .fa-house-chimney,
  .fa-star,
  .fa-newspaper,
  .fa-briefcase,
  .fa-phone {
    left: 12px;
  }
  ```

  Không nên fix cứng width các nav như trong bài, nếu như có thay đổi text sẽ bị xuống dòng.

  Phần trống không cần thiết phải là một empty btn, thay vào đó có thể chia 2 khổ và flex justify-between hoặc position 1 item bên phải

- [x] Bài 2

  Bài làm tốt

  Vì sử dụng border nên sẽ bị đẩy vào trong.

  - Có thể sử dụng outline thì sẽ không bị.

  Thiếu bóng màu ở dưới các icon như bản mẫu.

  Phần chữ `Learn More` không chỉ là text, ở đó thể hiện một đường dẫn, nên sử dụng thẻ a để thể hiện nó.

  ```html
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");↩
  </style>
  ```

  Không cần thiết phải viết 1 thẻ style chỉ để import font, có thể viết vào file css bên dưới hoặc dùng thẻ link import của google

  Không nên chia first row, second row, vì sẽ khó quản lý và khó responsive cho nhiều thiết bị, thay vào đó nên dùng flex kết hợp với flex-wrap thì hợp lý hơn.

- [x] Bài 3

  Bài làm tốt

  Vì đây là một site login hoàn chỉnh, **`Login to your account`** nên là thẻ H1.

  Các thẻ a khi hover vào đang bị font-weight đậm làm bị nhảy chữ, có thể tìm hiểu tip-trick sử dụng text-shadow làm đậm.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, có chỉn chu, tuy nhiên các phần CSS nên được tối giản hơn nữa.

## [Nguyễn Tuấn Hùng](https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN%20no.6/)

- [x] Bài 1

  Bài làm chưa tốt

  Sai font: Sử dụng đường dẫn absolute nên khi deploy đang bị sai đường dẫn.

- [x] Bài 2

  Bài làm chưa tốt

  Sai font: Sử dụng đường dẫn absolute nên khi deploy đang bị sai đường dẫn.

  Phần chữ `Learn More` không phải là tiêu đề, ở đó thể hiện một đường dẫn, nên sử dụng thẻ a để thể hiện nó.

- [x] Bài 3

  Bài làm chưa tốt

  Sai font: Sử dụng đường dẫn absolute nên khi deploy đang bị sai đường dẫn.

  Font-size của tiêu đề **`Login to your account`** quá to so với bản mẫu.

  Vì đây là một site login hoàn chỉnh, **`Login to your account`** nên là thẻ H1.

  Checkbox chưa có kích thước to như bản mẫu.

  Form chỉ nên bọc ở nơi cần thiết, không cần thiết phải bọc vào cả tiêu đề chính

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt, vẫn còn chưa chỉn chu khi deploy xong chưa test lại. Folder vẫn chưa cấu trúc lại, chưa đổi tên.

## [Nguyễn Đức Nhật](https://nhat0712.github.io/f8-FS-OL/Day%206/bai3)

- [x] Bài 1

  Bài làm chưa tốt

  Thiếu case hover vào thì hiển thị menu con

  Khi bật sang một nav khác thì cần tắt child-nav cũ đi.

  - Có thể làm điều này bằng sự kiện focus.

  Với các bài nhỏ, không nên import bộ kit, nó sẽ gây nặng dự án. Thay vào đó ở bài chỉ cần icon font nên import 1 file font css là đủ.

  Không nên đặt tên font khác đi, gây sự nhầm lẫn và khó dùng, nên dùng đúng tên của nó.

  Nên định nghĩa font ở trước khi sử dụng, như trong bài, html sử dụng nhưng ở dưới mới định nghĩa.

  ```css
  html {
    font-family: san;
  }
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: san;
    src: url(./fonts/static/OpenSans-Light.ttf);
  }
  ```

  Mũi tên tam giác của bài đang bị lệch so với bản mẫu.

- [x] Bài 2

  Bài làm tốt

  Với các bài nhỏ, không nên import bộ kit, nó sẽ gây nặng dự án. Thay vào đó ở bài chỉ cần icon font nên import 1 file font css là đủ.

  Phần chữ `Learn More` không chỉ là text, ở đó thể hiện một đường dẫn, nên sử dụng thẻ a để thể hiện nó.

  Với bài này không cần chia table nhiều quá sẽ rất rối, mỗi box là một cột và 3 cột một hàng là được, nếu có thể, tìm hiểu flex-box thì bài này sẽ đơn giản hơn

- [x] Bài 3

  Bài làm tốt

  Tiêu đề chưa đủ đậm như bản mẫu.

  Box hiển thị đang quá bé so với tỷ lệ nhìn.

  Chưa có border-radius các cạnh

  Vì đây là một site login hoàn chỉnh, **`Login to your account`** nên là thẻ H1.

  Checkbox chưa có kích thước to như bản mẫu.

  Form chỉ nên bọc ở nơi cần thiết, không cần thiết phải bọc vào cả tiêu đề chính

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa chỉn chu các chi tiết nhỏ khiến bài làm chưa được hoàn thiện.

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/day_6/BT1.html)

- [x] Bài 1

  Bài làm chưa tốt

  Thiếu mũi tên tam giác của bài.

  Phần style chính của bài phải để dưới cùng để độ ưu tiên cao hơn, dễ dàng để tinh chỉnh hơn.

  Thay vì phải có 1 div để cách top 50px có thể cách bằng nav luôn

  - Không nên sử dụng bộ chọn tag-selector với trường hợp này vì chỉ dùng 1 lần, và cách này dễ bị conflict với các thẻ khác.

- [x] Bài 2

  Bài làm tốt

  Thiếu bóng màu ở dưới các icon như bản mẫu.

  Không nên chia 2 row, vì sẽ khó quản lý và khó responsive cho nhiều thiết bị, thay vào đó nên dùng flex kết hợp với flex-wrap thì hợp lý hơn.

- [x] Bài 3

  Bài làm tốt

  Tiêu đề chưa đủ đậm như bản mẫu.

  Vì đây là một site login hoàn chỉnh, **`Login to your account`** nên là thẻ H1.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa chỉn chu các chi tiết nhỏ khiến bài làm chưa được hoàn thiện.

## [Trịnh Nam Trường](https://truongtn04.github.io/f8-fullstack-k5/day06/ex01.html)

- [x] Bài 1

  Bài làm tốt

  Import rất nhiều font mặc dù không dùng gây nặng cho bài.

  Nên reset box-sizing: border-box để các element có thể dễ dàng sử dụng, tính toán styling hơn.

  Sai background so với bản mẫu, bản mẫu khi hover sử dụng background màu xanh không phải đỏ.

  Mũi tên tam giác của bài đang bị lệch so với bản mẫu.

  Phần style chính của bài phải để dưới cùng để độ ưu tiên cao hơn, dễ dàng để tinh chỉnh hơn.

- [x] Bài 2

  Bài làm tốt

  Vì sử dụng border nên sẽ bị đẩy vào trong.

  - Có thể sử dụng outline thì sẽ không bị.

  class item dùng chung nên để tên là `.box` hoặc `.item` để `.item1` sẽ gây khó hiểu khi đọc và tái sử dụng code.

  Phần style chính của bài phải để dưới cùng để độ ưu tiên cao hơn, dễ dàng để tinh chỉnh hơn.

- [x] Bài 3

  Bài làm tốt

  Thiếu box-shadow ở icon giữa box.

  Tiêu đề chưa đủ đậm như bản mẫu.

  Vì đây là một site login hoàn chỉnh, **`Login to your account`** nên là thẻ H1.

  Thiếu background ở ngoài.

  Checkbox chưa có kích thước to như bản mẫu.

  Icon logo chưa đúng tỷ lệ, ở bản mẫu là một hình **vuông**

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa chỉn chu các chi tiết nhỏ khiến bài làm chưa được hoàn thiện.

## [Lê Tùng Dương](https://duong1801.github.io/f8-fullstack-k5/Day-6/ex01.html)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa thể hover được vào các element trong menu con.

  Mũi tên tam giác của bài đang bị lệch so với bản mẫu.

  Phần style chính của bài phải để dưới cùng để độ ưu tiên cao hơn, dễ dàng để tinh chỉnh hơn.

- [x] Bài 2

  Bài làm tốt

  class item dùng chung nên để tên là `.box` hoặc `.item` để `.item1` sẽ gây khó hiểu khi đọc và tái sử dụng code.

  Phần style chính của bài phải để dưới cùng để độ ưu tiên cao hơn, dễ dàng để tinh chỉnh hơn.

- [x] Bài 3

  Bài làm chưa tốt

  Thiếu icon giữa box.

  Tiêu đề chưa đủ đậm, to như bản mẫu.

  Vì đây là một site login hoàn chỉnh, **`Login to your account`** nên là thẻ H1.

  Thiếu background ở ngoài(Có link ảnh, tuy nhiên bị lỗi)

  Checkbox chưa có kích thước to như bản mẫu.

  Box chưa đúng tỷ lệ so với bản mẫu.

  Icon logo social ở phía dưới chưa đúng tỷ lệ, ở bản mẫu là một hình **vuông**

  Thiếu box-shadow so với bản mẫu khiến cho form bị chìm.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa chỉn chu các chi tiết nhỏ khiến bài làm chưa được hoàn thiện.
