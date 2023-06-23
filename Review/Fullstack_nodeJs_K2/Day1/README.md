# Dương test bài Học Viên

## [Nguyễn Minh Việt - K2](https://github.com/nguyenminhviettt/f8_K2)

- [x] [Bài 1](https://github.com/nguyenminhviettt/f8_K2/blob/main/bai_01/index.html)

  - Bài làm tốt

  - Sử dụng thẻ link để import font icons từ `googleapis` tuy nhiên không thấy sử dụng ở đâu trong code.

    - Mà lại sử dụng một icon khác từ `flaticon`. Khiến cho việc import font icons từ googleapis trở nên vô nghĩa.

    ```html
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    ...
    <img
      src="https://cdn-icons-png.flaticon.com/512/2549/2549872.png"
      alt=""
      width="20px"
      height="20px"
    />
    ```

    - Có thể sử dụng icon từ googleapis bằng cách xem hướng dẫn tại [fonts.google.com/icons](https://fonts.google.com/icons).

      - VD:

        ```html
        <span class="material-symbols-outlined"> mail </span>
        ```

  - Phần title của trang web dùng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nó cũng được sử dụng để đặt tên cho tab trình duyệt.

    - Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

  - Phần input nhập email nên để `type="email"` để trình duyệt có thể kiểm tra dữ liệu nhập vào có đúng là email hay không

  - Thẻ `br` chỉ được sử dụng để xuống dòng trong các đoạn text.

    - Việc sử dụng `br` để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.

    ```html
    <br /><br />
    ```

    - Nên sử dụng một thẻ block để tạo khoảng cách giữa các phần tử như `div`.

  - Phần thẻ input có một type là email sử dụng cho việc nhập email.

    - Nên sử dụng thuộc tính `type="email"` để làm một input nhập email.

    ```html
    <input type="text" placeholder="Enter Email" />
    <!-- Sửa lại thành -->
    <input type="email" placeholder="Enter Email" />
    ```

- [x] [Bài 2](https://github.com/nguyenminhviettt/f8_K2/blob/main/bai_02/index.html)

  - Bài làm tốt

  - Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

    - Sử dụng thẻ link để import font icons từ `googleapis` tuy nhiên không thấy sử dụng ở đâu trong code.

    - Mà lại sử dụng một icon khác từ `flaticon`. Khiến cho việc import font icons từ googleapis trở nên vô nghĩa.

    ```html
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    ...
    <img
      src="https://cdn-icons-png.flaticon.com/512/2549/2549872.png"
      alt=""
      width="20px"
      height="20px"
    />
    ```

    - Có thể sử dụng icon từ googleapis bằng cách xem hướng dẫn tại [fonts.google.com/icons](https://fonts.google.com/icons).

      - VD:

        ```html
        <span class="material-symbols-outlined"> mail </span>
        ```

- [x] [Bài 3](https://github.com/nguyenminhviettt/f8_K2/blob/main/bai_03/index.html)

  - Bài làm tốt

  - Nên sử dụng các thẻ h1>h2>...h6 theo đúng thứ tự.

    - Phần title chính của trang web nên là thẻ h1 thay vì h2

    ```html
    <h2>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h2>
    ```

  - Thẻ br chỉ được sử dụng để xuống dòng trong các đoạn text.

    - Việc sử dụng br để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.

    ```html
    ... <br /><br />
    <nav style="font-weight: bold; font-size: 20px">SIDEBAR</nav>
    <br />
    ...
    ```

    - Nên sử dụng một thẻ block để tạo khoảng cách giữa các phần tử như `div`.

  - Các thẻ `<header>`, `<nav>`, và `<footer>` được sử dụng để hiển thị text mà không có nội dung bổ sung khác. Điều này có thể xem là không đúng theo quy ước semantic của HTML.

    - Nên sử dụng một thẻ text-element như `<p>` để hiển thị text. Được bao bọc vào trong các thẻ semantic như `<header>`, `<nav>`, và `<footer>`.

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, cần chú ý thêm vào các phần `title`, các thẻ sematic, ý nghĩa và quy định của các thẻ như `br`, `heading-tag` để bài làm tốt hơn.

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-1)

- [x] [Bài 1](https://github.com/DuyChinh/f8-fullstack-KS2/blob/main/Day-1/exe1.html)

  - Bài làm tốt

  - Nên sửa lại một chút ở phần input như sau:

  ```html
  <input
    style="color: grey; display: block; margin-bottom: 15px; "
    type="text"
    value="Enter Email"
  />
  ```

  - Không nên sử dụng value mặc định cho input. Điều đó theo UX là không hề tốt.

    - Nên sử dụng thuộc tính placeholder để hiển thị text mặc định cho input.

  - Không nên styled color cho input màu chìm quá so với màu của background. Điều đó sẽ làm cho người dùng khó nhìn và không thể hiểu được input đó là gì.

    - Nên sử dụng thuộc tính color cho input tương phản hơn so với màu của background.

  - Có thẻ tham khảo qua một vài trang để chọn màu tương phản và đưa ra một số màu gợi ý nhu sau:

    - [Color Hunt](https://colorhunt.co/)
    - [Color Hex](https://www.color-hex.com/)
    - [Color Hexa](https://www.colorhexa.com/)
    - [Color Picker](https://www.w3schools.com/colors/colors_picker.asp)
    - [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

  - Có một phần thẻ link tới stylesheet nhưng không có đường dẫn, có vẻ như là một dòng code thừa. nên xóa đi

  ```html
  <link rel="stylesheet" href="" />
  ```

- [x] [Bài 2](https://github.com/DuyChinh/f8-fullstack-KS2/blob/main/Day-1/exe2.html)

  - Bài làm tốt\*

  - Thông thường, chỉ nên sử dụng các tài nguyên icon có size `[16,32,96,192,512]` để tránh việc tải các icon có size lớn không cần thiết. khiến cho tăng kích thước của trang web và giảm tốc độ tải trang đi đáng kể.

- [x] [Bài 3](https://github.com/DuyChinh/f8-fullstack-KS2/blob/main/Day-1/exe3.html)

  - Bài làm tốt

  - Vì chưa học Css nên có thể chấp nhận việc sử dụng thẻ h để tăng kích thước của text.

    - Tuy nhiên, nên sử dụng một thẻ p và style thuộc tính `font-size` để tăng kích thước của text.

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, tuy nhiên nên chú ý thêm vào cách cấu trúc folder, nếu assets chỉ được sử cho bài 2 thì nên gom nhóm bài 2 và folder assets. Việc làm này sẽ giúp cho việc quản lý và tìm kiếm các file dễ dàng hơn.

## [Tiến Đạt - K2](https://github.com/phamtiendat18/phamtiendat18/tree/main/Day_01)

- [x] [Bài 1](https://github.com/phamtiendat18/phamtiendat18/blob/main/Day_01/ex01.html)

  - Bài làm tốt

  - Thẻ br chỉ được sử dụng để xuống dòng trong các đoạn text.

    - Việc sử dụng br để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.

    ```html
    <br /><br />
    ```

    - Nên sử dụng một thẻ block để tạo khoảng cách giữa các phần tử như `div`.

  - Việc sử dụng một ảnh với src là data/image và mã hóa base64 khá là khó trong việc quản lý và tìm kiếm ảnh. Nên sử dụng một ảnh với src là một đường dẫn tới ảnh.

    - VD:

    ```html
    <img src="https://cdn-icons-png.flaticon.com/512/2549/2549872.png" alt="" />
    ```

- [x] [Bài 2](https://github.com/phamtiendat18/phamtiendat18/blob/main/Day_01/ex02.html)

  - Bài làm tốt\*

  - Việc sử dụng một ảnh với src là data/image và mã hóa base64 khá là khó trong việc quản lý và tìm kiếm ảnh. Nên sử dụng một ảnh với src là một đường dẫn tới ảnh.

    - VD:

    ```html
    <img src="icon..." alt="" />
    ```

- [x] [Bài 3](https://github.com/phamtiendat18/phamtiendat18/blob/main/Day_01/ex03.html)

  - Bài làm tốt

  - Phần thẻ a có thuộc tính là href, thuộc tính này bắt buộc phải có value. Nếu không có đường dẫn thì thường được khuyến nghị sử dụng "#" làm value cho thuộc tính href

    - Việc sử dụng value "" cho thuộc tính href không được khuyến nghị, vì nó có thể gây nhầm lẫn hoặc tạo ra hiệu ứng không mong muốn cho user. Thay vào đó, nên sử dụng "#" để tạo ra một liên kết trống hợp lệ.

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, tuy nhiên phần title của một trang web là rất quan trọng, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

## [Bùi Quang Trưởng](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day%201)

- [x] [Bài 1](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day%201/exe01.html)

  - Bài làm tốt\*
  - Phần input có một type là email sử dụng cho việc nhập email.
    - Nên sử dụng thuộc tính `type="email"` để làm một input nhập email.
    ```html
    <input type="text" placeholder="Enter Email" />
    <!-- Sửa lại thành -->
    <input type="email" placeholder="Enter Email" />
    ```

- [x] [Bài 2](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day%201/exe02.html)

  - Bài làm tốt\*

- [x] [Bài 3](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day%201/exe03.html)

  - Bài làm tốt

  - Vì chưa học Css nên có thể chấp nhận việc sử dụng thẻ h để tăng kích thước của text.

    - Tuy nhiên, nên sử dụng một thẻ p và style thuộc tính `font-size` để tăng kích thước của text.

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, tuy nhiên nên chú ý về:
  - Tên folder không được viết sai chính tả `assest` => `assets`
  - Tên folder, tên dự án không nên chứa ký tụ đặc biệt và dấu cách, điều đó sẽ gây khó khăn trong việc quản lý và tìm kiếm các file.

## [Việt Hoàngg](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_1/index.html)

- [x] [Bài 1](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_1/index.html)

  - Bài làm tốt\*
  - Phần `input` có một type là `email` sử dụng cho việc nhập `email`.
    - Nên sử dụng thuộc tính `type="email"` để làm một `input` nhập `email`.
    ```html
    <input type="text" placeholder="Enter Email" />
    <!-- Sửa lại thành -->
    <input type="email" placeholder="Enter Email" />
    ```

- [x] [Bài 2](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_1/index.html)

  - Bài làm tốt\*

  - Việc sử dụng ảnh với `src` là `data/image` và mã hóa base64 khá là khó trong việc quản lý và tìm kiếm ảnh. Nên sử dụng một ảnh với src là một đường dẫn tới ảnh.

    - VD:

    ```html
    <img src="icon..." alt="" />
    ```

- [x] [Bài 3](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_1/index.html)

  - Bài làm không tốt

  - Sử dụng 2 thẻ `h1` ở dùng 1 trang

    ```html
    <h1>Header</h1>
    <h1>Footer</h1>
    ```

    - Chỉ nên sử dụng một thẻ `h1` trong một trang web để tránh việc trình duyệt không hiểu được nội dung của trang web.
    - Phần nội dung chính của trang web nên là thẻ `h1` thay vì chỉ là một thẻ `a`

      ```html
      <a
        href="https://www.bing.com/search?pglt=43&q=Vòng+Xoay+cao+tốc+34.500+tỷ+sụt+lún+quá+mức%2C+cần+300+ngày+khắc+phục&aqs=edge..69i57.370j0j1&FORM=ANCMS9&PC=U531"
      >
        Vòng Xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
      ```

  - Vì chưa học Css nên có thể chấp nhận việc sử dụng thẻ `h` để tăng kích thước của text.

    - Tuy nhiên, nên sử dụng một thẻ `p` và style thuộc tính `font-size` để tăng kích thước của text.

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, tuy nhiên nên chú ý về:
  - `src` của `img`
  - `type` của `input`
  - `semantic` của các thẻ
  - Không nên viết tất cả bài tập vào một file html, nên tách ra thành các file riêng biệt để dễ quản lý và tìm kiếm.

## [Duy Hiếu Nguyễn](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/lesson1/index.html)

- [x] [Bài 1](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/lesson1/index.html)

  - Bài làm tốt

  - Phần `input` có một `type` là `email` sử dụng cho việc nhập `email`.
    - Nên sử dụng thuộc tính `type="email"` để làm một `input` nhập `email`.
    ```html
    <input type="text" placeholder="Enter Email" />
    <!-- Sửa lại thành -->
    <input type="email" placeholder="Enter Email" />
    ```
  - Thẻ `br` chỉ được sử dụng để xuống dòng trong các đoạn text.

    - Việc sử dụng `br` để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.

    ```html
    <br /><br />
    ```

    - Nên sử dụng một thẻ `block` để tạo khoảng cách giữa các phần tử như `div`.

- [x] [Bài 2](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/lesson1/index.html)

  - Bài làm tốt\*

- [x] [Bài 3](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/lesson1/index.html)

  - Bài làm tốt

  - Sai chính tả `Havard` => `Harvard`.

  - Phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.

    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```

  - Phần title chính của trang web nên là thẻ h1 thay vì h2

    ```html
    <h2>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h2>
    ```

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, tuy nhiên nên chú ý
  - Chính tả của các phần text quyết định rất lớn đến trải nghiệm người dùng và độ chuyên nghiệp của trang web.
  - Các thuộc tính của các thẻ hay dùng như `type`, `placeholder`, `href`...
  - `Semantic` của các thẻ cũng rất quan trọng vì nó giúp cho dev, trình duyệt hiểu được nội dung của trang web.
  - Không nên viết tất cả bài tập vào một file html, nên tách ra thành các file riêng biệt để dễ quản lý và tìm kiếm.

## [10634](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/lesson1/index.html)

- Việc style như này là không thể chấp nhận được

  - Tất cả các `class`, `id` này đều chung một style. Nên gom nhóm chúng để trong một `class` chung

  ```html
  <style>
    #one {
      width: 25px;
      height: 25px;
    }
    .two {
      width: 25px;
      height: 25px;
    }
    .three {
      width: 25px;
      height: 25px;
    }
    .four {
      width: 25px;
      height: 25px;
    }
    .five {
      width: 25px;
      height: 25px;
    }
    .six {
      width: 25px;
      height: 25px;
    }
    .seven {
      width: 25px;
      height: 25px;
    }
  </style>
  ```

* [x] [Bài 1](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-1/index.html)

  - Bài làm tốt

  - Phần `input` có một `type` là `email` sử dụng cho việc nhập `email`.
    - Nên sử dụng thuộc tính `type="email"` để làm một input nhập `email`.
    ```html
    <input type="text" placeholder="Enter Email" />
    <!-- Sửa lại thành -->
    <input type="email" placeholder="Enter Email" />
    ```
  - Thẻ `br` chỉ được sử dụng để xuống dòng trong các đoạn text.

    - Việc sử dụng `br` để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.

    ```html
    <br />
    ```

    - Nên sử dụng một thẻ `block` để tạo khoảng cách giữa các phần tử như `div`.

* [x] [Bài 2](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-1/index.html)

  - Bài làm tốt\*

  - Thẻ br chỉ được sử dụng để xuống dòng trong các đoạn text.

    - Việc sử dụng `br` để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.

    ```html
    <br />
    <br />
    ```

    - Nên sử dụng một thẻ `block` để tạo khoảng cách giữa các phần tử như `div`.

  - Vì đây là title của từng item trong list, nên để là `h2` thay vì bọc một thẻ inline là `b`

    ```html
    ...
    <b>UI/UX Design</b>
    ...
    ```

  - Không nên sử dụng `img` với `src` là `data/image` và mã hóa base64 khá là khó trong việc quản lý và tìm kiếm ảnh. Nên sử dụng một ảnh với src là một đường dẫn tới ảnh.

    - VD:

    ```html
    <img src="icon..." alt="" />
    ```

* [x] [Bài 3](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-1/index.html)

  - Bài làm tốt

  - Phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.

    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```

  - Phần title chính của trang web nên là thẻ `h1` thay vì `b`

    ```html
    <h2>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h2>
    ```

* Đánh giá tổng quan bài tập về nhà: Bài làm tốt, tuy nhiên nên chú ý
  - Các thuộc tính của các thẻ hay dùng như `type`, `placeholder`, `href`...
  - Semantic của các thẻ cũng rất quan trọng vì nó giúp cho dev, trình duyệt hiểu được nội dung của trang web.
  - Không nên viết tất cả bài tập vào một file html, nên tách ra thành các file riêng biệt để dễ quản lý và tìm kiếm.

## [Hồng Hà Nguyễn Thị](https://github.com/ha752002/f8-fullstack-k2/tree/main/Exercise/Ex_10-6)

- [x] [Bài 1](https://github.com/ha752002/f8-fullstack-k2/blob/main/Exercise/Ex_10-6/ex1.html)

  - Bài làm tốt\*
  - Phần input có thuộc tính id hiện đang không có giá trị, vậy nó không cần thiết

    ```html
    <input
      class="main__input-email"
      type="email"
      name="email"
      placeholder="Enter Email"
      id=""
    />
    ```

- [x] [Bài 2](https://github.com/ha752002/f8-fullstack-k2/blob/main/Exercise/Ex_10-6/ex2.html)
  - Bài làm tốt
  - Theo semantic, các thẻ heading phải đi từ thẻ h1 đến h6 theo thứ tự. Tuy nhiên, trong bài làm này lại sử dụng thẻ h3 cho các tiêu đề của các list item mà chưa có h2. Điều này sẽ gây khó khăn cho việc trình bày và hiểu nội dung của trang web.
    - Nên sử dụng thẻ h2 cho các tiêu đề của các list item.
  - Việc import link css từ assets nhưng không sử dụng một lần nào cũng như file css không có định dạng chung khiến cho việc import css trở nên vô nghĩa.
    - Nên xóa link css và file css không cần thiết.
- [x] [Bài 3](https://github.com/ha752002/f8-fullstack-k2/blob/main/Exercise/Ex_10-6/ex3.html)

  - Việc import link css từ assets nhưng không sử dụng một lần nào cũng như file css không có định dạng chung khiến cho việc import css trở nên vô nghĩa.
    - Nên xóa link css và file css không cần thiết.
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```
  - Theo các nguyên tắc của W3C, semantic và SEO, thì thẻ `<h1>` nên được sử dụng để đánh dấu tiêu đề chính của một trang hoặc một phần tử trang. - Trong trường hợp này, tiêu đề "Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục" là một tiêu đề chính.

    - Vì vậy, theo các nguyên tắc trên, đúng hơn là sử dụng thẻ `<h1>` bọc bên ngoài thẻ `<a>`, như sau:

    ```html
    <h1>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

    - Việc này giúp đảm bảo tính ngữ nghĩa và đánh giá cao về SEO. Đồng thời, trình duyệt cũng sẽ hiển thị tiêu đề theo đúng cấu trúc thông qua việc sử dụng thẻ `<h1>` mà không bị ảnh hưởng bởi việc bọc ngoài bằng thẻ `<a>`.

  - Sử dụng quá nhiều h1 trong một trang web, điều đó là bất hợp lý vì nó sẽ làm cho trình duyệt không hiểu được nội dung chính của trang web.

    - Nên sử dụng một thẻ h1 trong một trang web để tránh việc trình duyệt không hiểu được nội dung của trang web.

- Đánh giá tổng quan bài tập về nhà: Bài làm rất tốt.
  - Cần chú ý thêm một chút về semantic của các thẻ để việc code trở nên tốt hơn, giúp cho việc hiểu nội dung của trang web dễ dàng hơn.
  - Việc sử dụng
    ```css
    .main__input-email {
    ...
    margin: 0 0 14px 0;
    }
    ```
    là không cần thiết, có thể sử dụng thuộc tính `margin-bottom` để thay thế cho `margin: 0 0 14px 0;`.

## [Võ Tuấn Duy](https://github.com/tuanduy102/f8-btvn/tree/0144a122a746e63068d1a34159cec42431cdce2b/BTVN-Day-1)

- [x] [Bài 1](https://github.com/tuanduy102/f8-btvn/blob/0144a122a746e63068d1a34159cec42431cdce2b/BTVN-Day-1/bt1.html)
  - Bài làm tốt
  - Thẻ br chỉ được sử dụng để xuống dòng trong các đoạn text.
    - Việc sử dụng br để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.
    ```html
    <br />
    ```
    - Nên sử dụng một thẻ block để tạo khoảng cách giữa các phần tử như `div`.
- [x] [Bài 2](https://github.com/tuanduy102/f8-btvn/blob/0144a122a746e63068d1a34159cec42431cdce2b/BTVN-Day-1/bt2.html)

  - Bài làm tốt
  - Với các hình ảnh, icon... không nên set style cả width và height. Điều đó khiến cho tỷ lệ ảnh có thể không còn giống với lúc đầu.

  ```css
  img {
    width: 15px;
    height: 15px;
  }
  ```

  - Nên để 1 thuộc tính là auto. Thông thường thuộc tính auto sẽ là width

- [x] [Bài 3](https://github.com/tuanduy102/f8-btvn/blob/0144a122a746e63068d1a34159cec42431cdce2b/BTVN-Day-1/bt3.html)
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```
  - Phần title đầu tiên của trang web nên là thẻ `h1` thay vì `h2`
    ```html
    <h1>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```
  - Sai chính tả ở:
    - `Havard` => `Harvard`
    - `...34.500 tủ sụt...` => `...34.500 tỷ sụt...`
- Đánh giá tổng quan bài tập về nhà: Bài làm tốt.
  - Cần chú ý thêm một chút về semantic của các thẻ để việc code trở nên tốt hơn, giúp cho việc hiểu nội dung của trang web dễ dàng hơn.
  - Việc sử dụng
    ```css
    .main__input-email {
    ...
    margin: 0 0 14px 0;
    }
    ```
    là không cần thiết, có thể sử dụng thuộc tính `margin-bottom` để thay thế cho `margin: 0 0 14px 0;`

## [Nguyễn Thị Tuyết](https://github.com/xanhrii/k2-f8-fullstack-course/tree/master/rii_day01_html)

- [x] [Bài 1](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day01_html/homework_01.html)
  - Bài làm rất tốt \*
- [x] [Bài 2](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day01_html/homework_02.html)
  - Bài làm rất tốt \*
- [x] [Bài 3](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day01_html/homework_03.html)

  - Bài làm tốt \*

  - Thẻ `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```

- Đánh giá tổng quan bài tập về nhà: Bài làm rất tốt.
  - Nếu style cho thẻ html với mục đích để tất cả các phần tử con của html đều có được style.
  - Nên sử dụng thẻ `*` để style cho tất cả các phần tử con của html.
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Cũng nên thêm reset css để giúp bỏ qua các style mặc định của các trình duyệt. Từ đó giúp cho việc style trở nên dễ dàng hơn. */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  ```

## [Pham Duong](https://github.com/phamduongw/f8-fullstack-k2)

- [x] [Bài 1](https://github.com/phamduongw/f8-fullstack-k2/blob/main/day-1/ex-1.html)
  - Bài làm rất tốt \*
- [x] [Bài 2](https://github.com/phamduongw/f8-fullstack-k2/blob/main/day-1/ex-2.html)
  - Bài làm rất tốt \*
- [x] [Bài 3](https://github.com/phamduongw/f8-fullstack-k2/blob/main/day-1/ex-3.html)

  - Bài làm tốt \*

  - Thẻ `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```
  - Phần title chính của bài nên là thẻ `h1` thay vì `h2`
    ```html
    <h1>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

- Đánh giá tổng quan bài tập về nhà: Bài làm rất tốt.

## [Nguyễn Văn Đức](https://github.com/Poyken/f8-fullstack-k2/tree/main/day1)

- [x] [Bài 1](https://github.com/Poyken/f8-fullstack-k2/tree/main/day1/cau1)
  - Bài làm tốt
  - Thẻ `br` chỉ được sử dụng để xuống dòng trong các đoạn text.
    - Việc sử dụng `br` để ngắt dòng và tạo khoảng cách giữa các phần tử là không đúng.
    ```html
    <br /><br />
    ```
    - Nên sử dụng một thẻ `block` để tạo khoảng cách giữa các phần tử như `div`.
  - Thẻ `input` có một `type` là `email` sử dụng cho việc nhập `email`.
    - Nên sử dụng thuộc tính `type="email"` để làm một `input` nhập `email`.
    ```html
    <input type="text" placeholder="Enter Email" />
    <!-- Sửa lại thành -->
    <input type="email" placeholder="Enter Email" />
    ```
  - Phần thẻ `title` của một trang web là rất quan trọng, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.
- [x] [Bài 2](https://github.com/Poyken/f8-fullstack-k2/tree/main/day1/cau2)
  - Bài làm tốt
  - Nên gom nhóm tất cả các image trong folder vào một folder assets/images để dễ quản lý và tìm kiếm.
  - Phần title của item trong list nên là thẻ `h2` thay vì `h3`
    ```html
    <h3>
      <a href="#">UI/UX Design</a>
    </h3>
    ```
  - Sai chính tả `Maketing` => `Marketing`
  - Phần thẻ `title` của một trang web là rất quan trọng, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.
- [x] [Bài 3](https://github.com/Poyken/f8-fullstack-k2/tree/main/day1/cau3)

  - Bài làm tốt
  - Sử dụng nhiều thẻ h1 trong một trang web là không tốt, nên sử dụng một thẻ h1 trong một trang web để tránh việc trình duyệt không hiểu được nội dung của trang web.
  - Thẻ `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```
  - Phần title của trang web nên là thẻ `h1` thay vì `h2`

    ```html
    <a href="#">
      <h2>
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </h2>
    </a>
    ```

    - Theo các nguyên tắc của W3C, semantic và SEO, thì thẻ `<h1>` nên được sử dụng để đánh dấu tiêu đề chính của một trang hoặc một phần tử trang. - Trong trường hợp này, tiêu đề "Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục" là một tiêu đề chính.

    - Vì vậy, theo các nguyên tắc trên, đúng hơn là sử dụng thẻ `<h1>` bọc bên ngoài thẻ `<a>`, như sau:

    ```html
    <h1>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

    - Việc này giúp đảm bảo tính ngữ nghĩa và đánh giá cao về SEO. Đồng thời, trình duyệt cũng sẽ hiển thị tiêu đề theo đúng cấu trúc thông qua việc sử dụng thẻ `<h1>` mà không bị ảnh hưởng bởi việc bọc ngoài bằng thẻ `<a>`.

  - Phần thẻ `title` của một trang web là rất quan trọng, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút tới semantic của các thẻ, phần title của trang web để việc code trở nên tốt hơn, giúp cho việc hiểu nội dung của trang web dễ dàng hơn.

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/Day_1/Homework)

- [x] [Bài 1](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/Day_1/Homework/ex01)

  - Thẻ p được sử dụng để đánh dấu một đoạn văn bản. Không nên sử dụng để bao bọc một thẻ khác. Điều đó là không đúng với semantic của thẻ p. (Đã nói trên lớp và nhắc lại rất nhiều lần).

    ```html
    <p><input type="email" value="" placeholder="Enter Email" /></p>
    <p><button type="submit">REQUEST INVITE</button></p>
    ```

    - Nên sử dụng thẻ `div` để bao bọc các thẻ khác.

    ```html
    <div><input type="email" value="" placeholder="Enter Email" /></div>
    <div><button type="submit">REQUEST INVITE</button></div>
    ```

    - Thuộc tính value nếu không sử dụng thì nên xóa đi

  - Thẻ `title` của một trang web là rất quan trọng, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

- [x] [Bài 2](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/Day_1/Homework/ex02)

  - Bài làm tốt

  - Nên import một file .min của thư viện, điều đó giúp giảm dung lượng của file css, để tăng tốc độ load trang web.

    ```html
    <link rel="stylesheet" href="./fontawesome-free-6.4.0-web/css/all.css" />
    ```

    - Nên sử dụng file .min

    ```html
    <link
      rel="stylesheet"
      href="./fontawesome-free-6.4.0-web/css/all.min.css"
    />
    ```

  - Phần title của các item trong list nên là thẻ `h2` thay vì `h3`

    ```html
    <div>
      <i class="fa-solid fa-leaf"></i>
      <h3>UI/UX Design</h3>
      ...
    </div>
    ...
    ```

    - Nên sử dụng thẻ `h2` cho các tiêu đề của các list item.

- [x] [Bài 3](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/Day_1/Homework/ex03)

  - Bài làm tốt

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.

    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```

  - Phần thẻ a có thuộc tính là href, thuộc tính này bắt buộc phải có value. Nếu không có đường dẫn thì thường được khuyến nghị sử dụng "#" làm value cho thuộc tính href

    - Việc sử dụng value "" cho thuộc tính href không được khuyến nghị, vì nó có thể gây nhầm lẫn hoặc tạo ra hiệu ứng không mong muốn cho user. Thay vào đó, nên sử dụng "#" để tạo ra một liên kết trống hợp lệ.

  - `article` Chỉ được sử dụng để biểu thị cho một bài viết cụ thể, đầy đủ. Trường hợp chỉ có mỗi tiêu đề thì không nên dùng. Nên sử dụng h1 để thay thế thì đúng hơn.

    - Sửa thành h1

    ```html
    <h1>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ...
    ```

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, nên chú ý hơn một chút vào các phần tử semantic, ý nghĩa chính xác của các thẻ, phần title của trang web để việc code trở nên tốt hơn, giúp cho việc hiểu nội dung của trang web dễ dàng hơn.

## [Đỗ Khắc Quân](https://github.com/QuanIce/f8-fullstack-k2/tree/main/Day01)

- [x] [Bài 1](https://github.com/QuanIce/f8-fullstack-k2/blob/main/Day01/ex01.html)

  - Bài làm tốt

  - Phần title chính của trang web không nên để là thẻ `h2` mà nên là thẻ `h1`

    ```html
    <div class="header">
      <h2>Get the invite</h2>
    </div>
    ```

  - Việc sử dụng padding-top theo % có thể sai với một vài màn hình khiến layout bị lệch quá nhiều so với bản gốc. Nên dùng số chính xác như px, rem, ...

    ![Đỗ Khắc Quân Ex1](images/do_khac_quan-ex1.png)

    ```html
    <div class="request-button" style="padding-top: 5%;">
      <button>REQUEST INVITE</button>
    </div>
    ```

    - Sửa lại thành

    ```html
    <div class="request-button" style="padding-top: 20px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

- [x] [Bài 2](https://github.com/QuanIce/f8-fullstack-k2/blob/main/Day01/ex02.html)

  - Bài làm tốt

  - Phần title của các item trong list nên là thẻ `h2` thay vì `h3`

    ```html
    <div class="content-01">
      <h3>UI/UX Design</h3>
      ...
    </div>
    ...
    ```

    - Nên sử dụng thẻ `h2` cho các tiêu đề của các list item.

  - Phần title của trang web rất cần thiết, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

  - Cách đặt tên class như này là không tối ưu tốt cho việc tái sử dụng code css

    ```html
    <div class="content-01"></div>
    ...
    <div class="content-05"></div>
    ```

    - Vì chúng cùng một tầng ý nghĩa và trong 1 list, chúng có thể sẽ chung một đoạn code css. Nên đặt tên class chúng giống nhau để tái sử dụng code css.

    ```html
    <div class="content"></div>
    ```

- [x] [Bài 3](https://github.com/QuanIce/f8-fullstack-k2/blob/main/Day01/ex03.html)

  - Phần title của trang web rất cần được quan tâm, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

  - Sử dụng nhiều thẻ h1 trong cùng một trang web là không tốt, nên sử dụng một thẻ h1 trong một trang web để tránh việc trình duyệt không hiểu được nội dung của trang web.

    - Cái này đã được nói rất kỹ trên lớp và nhắc lại rất nhiều lần.

  - Phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```
  - Phần title của trang web nên là thẻ `h1` thay vì `h2`
    ```html
    <h2>
      <a href="https://dantri.com.vn/"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ...
    ```

- Đánh giá tổng quan bài tập về nhà: Bài làm tốt, cần chú ý thêm nhiều về các quy tắc viết cấu trúc HTML, các quy tắc về Semantic, quy tắc về SEO, W3C, ... để việc code trở nên tốt hơn, giúp cho việc hiểu nội dung của trang web dễ dàng hơn.
  - Link tham khảo về các quy tắc
    - [HTML Standard](https://html.spec.whatwg.org/multipage/)
    - [HTML Living Standard](https://html.spec.whatwg.org/)
    - [HTML5](https://www.w3schools.com/html/html5_intro.asp)
    - [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
    - ...

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/Day%201)

- [x] [Bài 1](https://github.com/daithehh04/fullstack/blob/main/Day%201/exercise-1.html)

  - Bài làm rất tốt \*
  - Phần attribute id của input được khai báo nhưng không sử dụng `id=""` thì nên xóa đi.
  - Phần title của trang web rất cần thiết, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

- [x] [Bài 2](https://github.com/daithehh04/fullstack/blob/main/Day%201/exercise-2.html)

  - Bài làm rất tốt \*

  - Phần title của trang web rất cần thiết, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

  - Phần `alt` của icon `leaf` đang có alt là `left`, như vậy là sai chính tả. Nên sửa lại thành `leaf`.

- [x] [Bài 3](https://github.com/daithehh04/fullstack/blob/main/Day%201/exercise-3.html)

  - Bài làm tốt \*

  - Phần title của trang web rất cần thiết, nó được sử dụng để hiển thị tên của trang web cho người dùng và các công cụ tìm kiếm. Nên quan tâm nhiều hơn vào phần title thay vì chỉ để là `Document`.

  - Viết sai cấu trúc HTML. Có thể lý do là ẩu nên không check lại code.

    - Có 2 thẻ đóng `<main>` tuy nhiên chỉ có một thẻ mở `<main>`

      ```html
      </main>
        <footer>
            <h2>FOOTER</h2>
        </footer>
        </main>
      ```

  - Phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
    ```html
    ...
    <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
    ...
    ```

- Đánh giá tổng quan bài tập về nhà: Bài làm rất tốt, cần chú ý thêm về cấu trúc của HTML để không còn bị sai. Không nên đặt tên dự án, tên folder chứa các ký tự đặc biệt và dấu cách, điều đó sẽ gây khó khăn trong việc quản lý và sử dụng cũng như khiến url trở nên dài và khó nhớ.

## [Tùng đẹp trai nhất f8](https://github.com/Stung16/ex_f8-fullstack)

- Khi đặt tên của mình, nên đặt sao cho tường minh và chính xác nhất.

  - Không nên đặt là `Tùng đẹp trai nhất f8` vì điều đó là sai sự thật.

  - Đề xuất đổi thành `Tùng đẹp trai nhì f8 sau em Dương F8`

- [x] [Bài 1](https://github.com/Stung16/ex_f8-fullstack/blob/master/day1/ex1-day1.html)

  - Bài làm tốt
  - Không nên đặt đường dẫn có src ảnh là `/Day1/img/tải xuống.png` vì:
    - Đường dẫn có thể sai nếu tập html được mở từ một vị trí khác.
    - Nên sử dụng các đường dẫn tương đối `../`, `./` để tránh việc đường dẫn sai.
  - Không có folder nào là Day1/img khiến cho ảnh load bị sai.
  - Phần thẻ title của bài có một chút cần sửa:
    ```html
    <h2>Get the invate</h2>
    ```
    - Vì đây là title chính của trang web, nên sử dụng `h1` thay vì `h2`
    - Sai chính tả `invate` => `invite`
  - Phần input nhập email nên có thuộc tính `type="email"` để trình duyệt có thể kiểm tra được định dạng email.

    ```html
    <input type="text" class="information_email" placeholder="Enter Email" />

    <!-- Sửa lại thành -->
    <input type="email" class="information_email" placeholder="Enter Email" />
    ```

    - Ngoài ra việc đặt tên className cũng nên thẻ hiện đúng chức năng của phần tử. Input thì nên có className dạng `input-email` thay vì `information_email`
      - Việc đặt className `information_email` có thể gây hiểu lầm là phần tử đó là một phần tử chứa thông tin về email chứ không phải là một phần tử nhập email.

- [x] [Bài 2](https://github.com/Stung16/ex_f8-fullstack/blob/master/day1/ex2-day1.html)

  - Bài làm tốt
  - Không nên style cho img cả width và height, nên chỉ style cho một trong hai thuộc tính đó.
    ```css
    .wapper_ul-icon img {
      height: 20px;
      width: 20px;
    }
    ```
    - Nên sửa lại thành
    ```css
    .wapper_ul-icon img {
      height: 20px;
      width: auto;
    }
    ```
    - Ngoài ra thì className này cũng đang sai chính tả, nên sửa lại thành `wrapper_ul-icon`
  - Nên đặt className một cách tường minh hơn

    ```html
    <ul class="wapper_ul"></ul>

    <!-- Có thể sửa thành -->
    <ul class="wrapper_list"></ul>
    ```

    ```html
    <div class="wapper_ul-icon">...</div>

    <!-- Có thể sửa thành -->
    <div class="wrapper_icon">...</div>
    <!-- hoặc -->
    <div class="wrapper_list-icon">...</div>
    ```

- [x] [Bài 3](https://github.com/Stung16/ex_f8-fullstack/blob/master/day1/ex3-day1.html)

  - Sử dụng các tag một cách bừa bãi và khó hiểu

    - Phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `p` để hiển thị đoạn chữ đó.
      ```html
      ...
      <p style="font-weight: bold; font-size: 20px">SIDEBAR</p>
      ...
      ```
    - Phần title của trang web nên là thẻ `h1` thay vì `h3`
      ```html
      <h3>
        <a href="...">Thượng tướng ... Kuin.</a>
      </h3>
      ```
    - Sử dụng thẻ pre cho một đoạn text đơn thuần ?
      ```html
      <pre>
      TRUNG QUỐC - Con trai 8 tuổi ôm bộ quần áo ngủ ngồi đợi hàng giờ trước cửa để xin được ở lại cùng mẹ khiến ai nhìn cũng rơi nước mắt.</pre
      >
      ```

- Đánh giá tổng quan bài tập về nhà: Cần chú ý thêm nhiều vào chức năng chính xác của các thẻ, các thuộc tính, các quy tắc về semantic, SEO, W3C, đặt className để việc code trở nên chuyên nghiệp, dễ hiểu hơn.

\*\* Đánh giá tổng quan cả lớp:

- Bài làm tốt => Rất tốt.
- Cần chú ý thêm vào các quy tắc để việc code trở nên chặt chẽ, quy củ và dễ hiểu hơn.
- Cần nộp bài sớm hơn. Tránh gây ảnh hưởng cho các học viên khác và đội ngũ giảng viên trong việc đánh giá chi tiết bài tập của 1 người.
- Chủ động tìm hiểu, đọc kỹ yêu cầu đề bài cũng như đọc kỹ thông báo lỗi được trả về để tự research.
  - Không nên gặp lỗi là hỏi ngay, hãy tự research trước khi hỏi tránh việc hỏi những câu hỏi đã được trả lời rất nhiều lần hoặc những câu hỏi quá cơ bản mà không cần hỏi.
