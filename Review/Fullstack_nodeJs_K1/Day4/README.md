# Dương test bài Học Viên

## [Bi11-043 Đỗ Hà Chi](https://github.com/SerenaHa12/fullstack_nodeJS)

    Sớm nhất *

- [x] [Bài 1](https://github.com/SerenaHa12/fullstack_nodeJS/tree/main/btvn_04/ex01)

  - Bài làm rất tốt \*
  - Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

- [x] [Bài 2](https://github.com/SerenaHa12/fullstack_nodeJS/tree/main/btvn_04/ex02)

  - Bài làm tốt

  - Kỹ năng phân tích cấu trúc semantic vẫn chưa tốt lắm:
    ```html
    <p>RESERVATION</p>
    <h1>Book your table</h1>
    ```
    - Ở phần trên, `RESERVATION` vẫn là một title, nên sử dụng thẻ `h3` thay vì `p`
    - Phần `Book your table` cũng là một title, nên sử dụng thẻ `h2` thay vì `h1`

- [x] [Bài 3](https://github.com/SerenaHa12/fullstack_nodeJS/tree/main/btvn_04/ex03)
  - Bài làm tốt \*
  - Nên thống nhất một đơn vị trong CSS, hoặc hạn chế sử dụng nhiều đơn vị khác nhau:
    ```css
    .row {
      ...
      margin: 7% 0;
    }
    .product img {
      ...
      margin: 20px 0 40px 0;
    }
    ```

* Đánh giá chung bài tập về nhà: Bài làm tốt, nhưng cần cải thiện kỹ năng phân tích cấu trúc semantic, và thống nhất đơn vị trong CSS.

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack.git)

- [x] [Bài 1](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day4/Ex1)

  - Bài làm rất tốt \*

- [x] [Bài 2](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day4/Ex2)

  - Bài làm tốt

- [x] [Bài 3](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day4/Ex3)
  - Bài làm Rất Tốt \*

* Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Sơn Ngô Mạnh](https://github.com/NgoManhson/f8-fullstack-exercises)

- [x] [Bài 1](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day4/Ex1)

  - Bài làm tốt \*
  - 2 đoạn text này có các style giống nhau, nên gom chung vào một thẻ `p` và sử dụng thẻ `br` để ngắt dòng
    ```html
    <p class="form-desc">
      Sign up and we'll send your the best freelance opportunities straight to
      your inbox.
    </p>
    <p class="form-desc">
      We're building the largest self-service freelancing marketplace for people
      like you.
    </p>
    ```
    - Đề xuất sửa thành:
    ```html
    <p class="form-desc">
      Sign up and we'll send your the best freelance opportunities straight to
      your inbox.<br />
      We're building the largest self-service freelancing marketplace for people
      like you.
    </p>
    ```

- [x] [Bài 2](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day4/Ex2)

  - Bài làm tốt

- [x] [Bài 3](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day4/Ex3)

  - Bài làm tốt \*

  - Nên tìm hiểu thêm về một số các luật, kỹ năng làm UX để khiến trải nghiệm người dùng tốt hơn

    - Theo `Ngưỡng Doherty`. Năng suất tăng vọt khi máy tính và người dùng tương tác với tốc độ (<400ms) đảm bảo rằng không phải chờ đợi bên kia.

    > Năm 1982, Walter J. Doherty và Ahrvind J. Thadani đã xuất bản, trên Tạp chí Hệ thống IBM, một bài báo nghiên cứu đặt ra yêu cầu về thời gian phản hồi của máy tính là 400 mili giây, chứ không phải 2.000 (2 giây) như tiêu chuẩn trước đó. Khi lệnh của con người được thực thi và trả về câu trả lời trong vòng chưa đầy 400 mili giây, nó được coi là vượt quá ngưỡng Doherty và việc sử dụng các ứng dụng đó được coi là "nghiện" người dùng.

    - Xem thêm tại [**lawsofux.com**](https://lawsofux.com/doherty-threshold/)

* Đánh giá chung bài tập về nhà: Bài làm tốt, chỉ cần cải thiện một chút về các luật, kỹ năng làm UX để khiến trải nghiệm người dùng tốt hơn.

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/bt_04.git)

- [x] [Bài 1](https://github.com/xuananh2212/bt_04/tree/main/ex01)

  - Việc sử dụng

  ```css
  html {
    font-size: 62.5%;
  }
  ```

  Khiến cho các đơn vị khó tính toán hơn. Vì vậy, nếu sử dụng chúng mà không sửa lại font chữ thì các font chữ sẽ rất nhỏ, rất khó để nhìn. Điều đó làm giảm trải nghiệm người dùng rất lớn.

  - Tốt nhất là không nên sử dụng trừ khi có một lý do cụ thể.

- [x] [Bài 2](https://github.com/xuananh2212/bt_04/tree/main/ex02)

  - Bài làm rất tốt \*

- [x] [Bài 3](https://github.com/xuananh2212/bt_04/tree/main/ex03)

  - Bài làm tốt \*
  - Nên sử dụng các thẻ img với một src svg ngoài. Điều đó sẽ giúp cho việc tối ưu hóa hình ảnh tốt hơn, dễ hiểu hơn.

* Đánh giá chung bài tập về nhà: Bài làm tốt

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01)

- [x] [Bài 1](https://github.com/xuananh2212/bt_04/tree/main/ex01)

  - Bài làm rất tốt \*

- [x] [Bài 2](https://github.com/xuananh2212/bt_04/tree/main/ex02)

  - Bài làm tốt
  - Kỹ năng phân tích cấu trúc semantic vẫn chưa tốt lắm:
    ```html
    <p class="reservation__label">RESERVATION</p>
    <h1 class="reservation__heading">Book your table</h1>
    ```
    - Ở phần trên, `RESERVATION` vẫn là một title, nên sử dụng thẻ `h3` thay vì `p`
    - Phần `Book your table` cũng là một title, nên sử dụng thẻ `h2` thay vì `h1`

- [x] [Bài 3](https://github.com/xuananh2212/bt_04/tree/main/ex03)

  - Bài làm rất tốt \*

* Đánh giá chung bài tập về nhà: Bài làm tốt, nhưng cần cải thiện kỹ năng phân tích cấu trúc semantic.

## [Luu Anh Quan](https://github.com/anhquan2211/exercise-day4-offline-F8.git)

- [x] [Bài 1](https://github.com/anhquan2211/exercise-day4-offline-F8.git)

  - Bài làm tốt \*
  - Phần input và button có chiều cao bằng nhau, tuy nhiên lại để height trong style không đồng nhất

    ```css
    .email {
      height: 40px;
      ...;
    }

    button {
      height: 41px;
    }
    ```

    - Việc này sẽ gây ra hiện tượng lệch chiều cao giữa các phần tử, dẫn đến việc không đồng bộ giữa các phần tử. Ngoài ra còn thể hiện sự thiếu chuẩn mực, chuyên nghiệp trong việc code.

- [x] [Bài 2](https://github.com/anhquan2211/exercise-day4-offline-F8.git)

  - Bài làm rất tốt \*

  - Vì phần `RESERVATION` và `Book your table` đều là title, nên nên sử dụng thẻ `h3` thay vì `p`.

  - Phần xử lý DATE rất tốt, nếu có thể xử lý input nhập giờ bằng type `time` như thế thì sẽ tốt hơn.

- [x] [Bài 3](https://github.com/anhquan2211/exercise-day4-offline-F8.git)

  - Bài làm rất tốt \*

* Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Mai Việt Hoàng](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

- [x] [Bài 1](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  - Bài làm rất tốt \*
  - Cần thêm padding-left cho input để tránh việc text bị che khuất, tạo cảm giác không đồng bộ giữa các phần tử. Việc đó làm giảm trải nghiệm người dùng.

- [x] [Bài 2](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  - Bài làm rất tốt \*
  - Cần thêm padding-left cho tất cả các input để tránh việc text bị che khuất, tạo cảm giác không đồng bộ giữa các phần tử. Việc đó làm giảm trải nghiệm người dùng.
  - Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là `Document` mà nên thay bằng một title phù hợp.
    - Ở đây, nên thay bằng `Đặt bàn ăn - Nhà hàng ABC`
  - Nếu có thể, nên tham khảo câu hỏi và câu trả lời của bạn [Lưu Anh Quân](https://fullstack.edu.vn/fullstack-nodejs/discussions/xac-dinh-thuoc-tinh-type-cua-the-input-bai-2.html) để làm phần input cho date, time tốt hơn.

  - Phần `RESERVATION` vẫn là một title, không phải là `:before` của `Book your table`, nên sử dụng thẻ `h3` thay vì `:before`.

- [x] [Bài 3](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  - Bài làm rất tốt \*

* Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần cải thiện một chút về các luật, kỹ năng làm UX để khiến trải nghiệm người dùng tốt hơn.

## [Phan Trung Hiếu](https://github.com/pth2003/HOMEWORK/tree/main/btvn_buoi_4)

- [x] [Bài 1](https://github.com/pth2003/HOMEWORK/tree/main/btvn_buoi_4)

  - Bài làm tốt \*
  - Đáng ra có thể tốt hơn nếu chú ý hơn, chỉn chu hơn vào UI của trang web sao cho đẹp hơn.
  - Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là `Document` mà nên thay bằng một title phù hợp.

    - Ở đây, nên thay bằng `Form Subscribe`

- [x] [Bài 2](https://github.com/pth2003/HOMEWORK/tree/main/btvn_buoi_4)

  - Bài làm tốt \*

  - Các phần value của input không nên nhỏ hơn placeholder quá nhiều vì sẽ gây khó nhìn, khó phân biệt giữa các phần tử.

  - Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là `Document` mà nên thay bằng một title phù hợp.

    - Ở đây, nên thay bằng `Đặt bàn ăn - Nhà hàng ABC`

  - Phần title để như này là sao ?

    ```html
    <div class="sub-title">RESERVATION</div>
    <div class="title">Book your table</div>
    ```

    - Nên sử dụng thẻ `h3` cho phần `RESERVATION` thay vì `div` để đảm bảo semantic.
    - Phần `Book your table` cũng nên sử dụng thẻ `h2` thay vì `div` để đảm bảo semantic.

  - Vì đây là một form đặt hàng, nên nên sử dụng thẻ `form` để đảm bảo semantic.

  - Nếu có thể, nên tham khảo câu hỏi và câu trả lời của bạn [Lưu Anh Quân](https://fullstack.edu.vn/fullstack-nodejs/discussions/xac-dinh-thuoc-tinh-type-cua-the-input-bai-2.html) để làm phần input cho date, time tốt hơn.

- [x] [Bài 3](https://github.com/pth2003/HOMEWORK/tree/main/btvn_buoi_4)

  - Bài làm tốt \*
  - Nên hiển thị một danh sách khi người dùng vào trang web chứ không phải sau khi bấm nút

  - Nên tìm hiểu thêm về một số các luật, kỹ năng làm UX để khiến trải nghiệm người dùng tốt hơn

    - Theo `Ngưỡng Doherty`. Năng suất tăng vọt khi máy tính và người dùng tương tác với tốc độ (<400ms) đảm bảo rằng không phải chờ đợi bên kia.

    > Năm 1982, Walter J. Doherty và Ahrvind J. Thadani đã xuất bản, trên Tạp chí Hệ thống IBM, một bài báo nghiên cứu đặt ra yêu cầu về thời gian phản hồi của máy tính là 400 mili giây, chứ không phải 2.000 (2 giây) như tiêu chuẩn trước đó. Khi lệnh của con người được thực thi và trả về câu trả lời trong vòng chưa đầy 400 mili giây, nó được coi là vượt quá ngưỡng Doherty và việc sử dụng các ứng dụng đó được coi là "nghiện" người dùng.

    - Xem thêm tại [**lawsofux.com**](https://lawsofux.com/doherty-threshold/)

    - Theo đó, phần `transition: 0.5s ease-in;` là không thân thiện với người dùng. Nên thay bằng `transition: 0.3s ease-in;` để tăng trải nghiệm người dùng.

  - Các nút sau khi bấm chưa được active, chưa được đổi màu. Điều đó làm cho người dùng không biết mình đã bấm hay chưa, dẫn đến việc bấm nhiều lần, làm giảm trải nghiệm người dùng.

  - Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là `Document` mà nên thay bằng một title phù hợp.

    - Ở đây, nên thay bằng `Best Seller - Cửa hàng ABC`

* Đánh giá chung bài tập về nhà: Bài làm chưa được chỉn chu, chưa đảm bảo semantic, chưa đảm bảo UX, SEO. Cần cải thiện nhiều. Nếu có thời gian, nên code lại

## [Hoài Nam Đỗ](https://github.com/oaiHmaN25/btvn.git)

- [x] [Bài 1](https://github.com/oaiHmaN25/btvn.git)

  - Bài làm tốt

  - Nên sử dụng một font chữ không chân để giống với bản mẫu. VD: `font-family: 'Poppins', sans-serif;`

- [x] [Bài 2](https://github.com/oaiHmaN25/btvn.git)

  - Bài làm tốt \*
  - Các field nên có thuộc tính name để khi submit form có thể lấy được dữ liệu của các field đó.
  - Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện [**normalize.css**](https://necolas.github.io/normalize.css/)

    - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

  - Có thể tham khảo câu hỏi của bạn [Lưu Anh Quân](https://fullstack.edu.vn/fullstack-nodejs/discussions/xac-dinh-thuoc-tinh-type-cua-the-input-bai-2.html) để làm phần input cho date, time tốt hơn.

- [x] [Bài 3](https://github.com/oaiHmaN25/btvn.git)

  - Bài làm tốt \*
  - Các nút chức năng khi hover vào vẫn chưa đủ như ở layout mẫu.
  - Các phần navbar có đổi màu khi hover tuy nhiên màu chữ lại không đổi dẫn đến màu chữ không đủ tương phản với màu nền, khó nhìn.
  - Không chỉn chu khi dò lại lỗi, chính tả
    ```css
    ul.products li .product-top .button_icon img {
      display: inline-;
      ...;
    }
    ```

* Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa chỉn chu vào bản mẫu, dẫn đến UI không được đẹp. Cần cải thiện nhiều hơn, đồng thời nên xem lại các lỗi chính tả, lỗi chức năng trước khi nộp bài.

## [Nguyễn Duy An](https://github.com/nguyenduyan9/BTVN.git)

- [x] [Bài 1](https://github.com/nguyenduyan9/BTVN.git)

  - Bài làm tốt
  - Phần meta title của trang web nên thay bằng `Form Subscribe` để đảm bảo SEO, trải nghiệm người dùng tốt hơn.
  - Sai chính tả `[whith, straigh, Oppotunities]` => `[with, straight, Opportunities]`
  - Viết SCSS trong file CSS thì sẽ không chạy được

    ```scss
    .footer:hover {
      .form-info::placeholder {
        color: #ffa500;
      }

      .form-info {
        background-color: #ddd;
      }

      .btn {
        background-color: #ffa500;
        color: #fff;
      }
    }
    ```

  - Code không format gây ra khó đọc, khó hiểu, khó bảo trì
    ```html
    <pre>
      .form-info {
    padding: 10px 16px;
    border: none    ;
    border-radius: 2px;
    }
    </pre>
    ```

- [x] [Bài 2](https://github.com/nguyenduyan9/BTVN.git)

  - Bài làm tốt

  - Phần meta title của trang web nên thay bằng `Đặt bàn ăn - Nhà hàng ABC` để đảm bảo SEO, trải nghiệm người dùng tốt hơn.

  - Nếu đã sử dụng link liên kết tới một file fonts từ bên ngoài, không cần thiết phải tải file fonts về nữa.

    ```html
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
      rel="stylesheet"
    />
    ```

  - Phần input đang thiếu padding tất cả các phía, dẫn đến việc text bị che khuất, tạo cảm giác không đồng bộ giữa các phần tử. Việc đó làm giảm trải nghiệm người dùng.

  - Tăng chiều cao của input lên bằng button để giống với bản mẫu.

  - Cần đặt tên className sao cho hợp lý hơn:

    ```html
    <div class="table"></div>
    <input type="text" class="info" placeholder="NAME" />
    ```

    - Đề xuất đổi thành:

    ```html
    <div class="container"></div>
    <input type="text" class="input" placeholder="NAME" />
    ```

    - Vì trong code, không có đoạn nào thể hiện đây là một bảng. Nên đổi thành `container` để đảm bảo tránh nhầm lẫn. Các input cũng đổi thành `input` để đảm bảo tránh nhầm lẫn với các phần tử hiển thị thông tin khác.

- [x] [Bài 3](https://github.com/nguyenduyan9/BTVN.git)

  - Phần UI rất xấu. Không giống với bản mẫu.
    ```css
    .skincare,
    .csmetics-cases,
    .fragrance,
    .haircare,
    .makeup {
      ...
      opacity: 0.6;
    }
    ```
    - Đoạn code trên làm cho các phần tử trên trang web bị mờ đi, không thể nhìn rõ được. Điều đó làm giảm trải nghiệm người dùng.

* Đánh giá chung bài tập về nhà: Bài làm tốt, nhưng cần cải thiện kỹ năng làm UI để giao diện đẹp hơn, giống với bản mẫu hơn. Cần cải thiện kỹ năng đặt tên className sao cho hợp lý hơn.

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

- [x] [Bài 1](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

  - Bài làm tốt

  - Sử dụng màu không hợp lỹ, nhiều màu không tương phản với nhau hoặc quá tương phản với nhau, dẫn đến việc khó nhìn, khó phân biệt giữa các phần tử.

    - Có thể sử dụng trang web [**colorhunt.co**](https://colorhunt.co/) để tìm màu hợp lý hơn.

- [x] [Bài 2](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

  - Sử dụng một đường dẫn dễ gây lỗi.

  ```html
  <link rel="stylesheet" href="/Buoi_4/assets/style2.css" />
  ```

  - Code không hề có format. Dẫn đến khó đọc, khó hiểu, khó bảo trì.

  - Nên xem qua câu hỏi của bạn [Lưu Anh Quân](https://fullstack.edu.vn/fullstack-nodejs/discussions/xac-dinh-thuoc-tinh-type-cua-the-input-bai-2.html) để làm phần input cho date, time tốt hơn.

- [x] [Bài 3](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

  - Sử dụng một đường dẫn dễ gây lỗi.

    ```html
    <link rel="stylesheet" href="/Buoi_4/assets/style3.css" />
    ```

  - Code không hề có format. Dẫn đến khó đọc, khó hiểu, khó bảo trì.

  - Khi bấm vào các ô nav, không có active màu khiến cho người dùng không biết mình đang ở trang nào, dẫn đến việc bấm nhiều lần, làm giảm trải nghiệm người dùng.

* Đánh giá chung bài tập về nhà: Bài làm tốt, nhưng cần cải thiện kỹ năng làm UI để giao diện đẹp hơn, giống với bản mẫu hơn. Cần cải thiện kỹ năng format code để đảm bảo đủ các quy tắc về code convention, dẫn đến khó đọc, khó hiểu, khó bảo trì.

## [Nam Nguyễn](https://github.com/namnguyen2603/nguyentrungnam_bai4.git)

- [x] [Bài 1](https://github.com/namnguyen2603/nguyentrungnam_bai4.git)

  - Bài làm tốt \*
  - Phần button khi hover chưa có action đổi màu.
  - Phần label đã bao bọc input thì không cần thêm thuộc tính for.
  - Code không format, Dẫn đến khó đọc, khó hiểu, khó bảo trì.

- [x] [Bài 2](https://github.com/namnguyen2603/nguyentrungnam_bai4.git)

  - Phần code sử dụng font chữ này không chạy được:

    ```css
    .sub-title {
      font-family: Bebas Neue;
    }
    .title {
      font-family: Alfa Slab One;
    }
    ```

    - Vì nếu muốn sử dụng một font chữ có ký tự đặc biệt cần đưa vào dấu nháy `''`

- [x] [Bài 3](https://github.com/namnguyen2603/nguyentrungnam_bai4.git)

  - Làm bài hiện chưa đủ yêu cầu đề bài. Cần làm thêm cho đủ yêu cầu đề bài.

* Đánh giá chung bài tập về nhà: Bài làm tạm được. Cần làm lại bài 3. Cần cải thiện kỹ năng format code để đảm bảo đủ các quy tắc về code convention, dẫn đến khó đọc, khó hiểu, khó bảo trì.

## [Minh Quang](https://github.com/taminhquang13/Bai_Tap_F8.git)

- [x] [Bài 1](https://github.com/taminhquang13/Bai_Tap_F8.git)

  - Phần meta title của trang web nên thay bằng `Form Subscribe` để đảm bảo SEO, trải nghiệm người dùng tốt hơn.

  - Thiếu khoảng cách giữa các phần tử, dẫn đến việc không đồng bộ giữa các phần tử, làm giảm trải nghiệm người dùng.

  - Thẻ ul, li để sử dụng hiển thị các list nội dung liên quan đến nhau, không phải là để hiển thị input, button. Điều đó là sai về semantic.

    ```html
    <ul>
      <li>
        <input type="text" class="email" placeholder="Email address" />
      </li>
      <li>
        <button type="submit" class="submit">Send me opportunities</button>
      </li>
    </ul>
    ```

  - Code không format. Dẫn đến khó đọc, khó hiểu, khó bảo trì.

- [x] [Bài 2](https://github.com/taminhquang13/Bai_Tap_F8.git)

  - Bài làm rất tốt \*
  - Phần meta title của trang web nên thay bằng `Đặt bàn ăn - Nhà hàng ABC` để đảm bảo SEO, trải nghiệm người dùng tốt hơn.

- [x] [Bài 3](https://github.com/taminhquang13/Bai_Tap_F8.git)

  - Chưa có kiến thức tốt về các đường dẫn tương đối và tuyệt đối.

    - Phần github chỉ đẩy lên từ `Bai_Tap_F8` thì làm sao lấy được từ /1. HocHTML.

      - Nên sử dụng đường dẫn tương đối để đảm bảo đúng đường dẫn.

  - Thiếu phần button ở trong hình như bản mẫu.

  - Phần alt của ảnh nên đặt có ý nghĩa để đảm bảo SEO, trải nghiệm người dùng tốt hơn.

    ```html
    <img src="./img/ive/Gaeul01.jpg" alt="b" />
    ```

    - Đoạn code trên không có ý nghĩa gì cả. Nên đổi thành:

    ```html
    <img src="./img/ive/Gaeul01.jpg" alt="Gaeul01" />
    ```

  - Nên xử lý lại ảnh để đỡ bị sai tỷ lệ ảnh.

  - Phần meta title của trang web nên thay bằng `Best Seller - Cửa hàng ABC` để đảm bảo SEO, trải nghiệm người dùng tốt hơn.

* Đánh giá chung bài tập về nhà: Bài làm tốt, cần cải thiện kỹ năng về các đường dẫn tương đối và tuyệt đối. Cần cải thiện kỹ năng format code để đảm bảo đủ các quy tắc về code convention, dẫn đến khó đọc, khó hiểu, khó bảo trì.

## [Trung Le](https://github.com/Trungdeptraii/Le_Van_Trung_14-06-2023-Day4.git)

- [x] [Bài 1](https://github.com/Trungdeptraii/Le_Van_Trung_14-06-2023-Day4.git)

  - Bài làm tốt. Nhưng hơi ẩu.

  - Cần sử dụng font chữ không chân để giống với bản mẫu. VD: `font-family: 'Poppins', sans-serif;`

  - Cần thêm padding cho input để tránh việc text bị che khuất, tạo cảm giác không đồng bộ giữa các phần tử. Việc đó làm giảm trải nghiệm người dùng.

- [x] [Bài 2](https://github.com/Trungdeptraii/Le_Van_Trung_14-06-2023-Day4.git)

  - Phần text trong button nên thêm letter-spacing để tạo khoảng cách giữa các chữ cái, giúp cho người dùng dễ nhìn hơn.

  - Nên thêm padding cho input để tránh việc text bị che khuất, tạo cảm giác không đồng bộ giữa các phần tử. Việc đó làm giảm trải nghiệm người dùng.

  - Phần input cho số người thì nên để là số thay vì text để đảm bảo người dùng không nhập sai kiểu dữ liệu.
    ```html
    <input
      type="text"
      name="people"
      id="people"
      class="people"
      placeholder="     PEOPLE"
    />
    ```
    - Cũng không nên để các khoảng trống ở trong placeholder. Vì khi style padding cho input thì sẽ bị sai về vị trí.

- [x] [Bài 3](https://github.com/Trungdeptraii/Le_Van_Trung_14-06-2023-Day4.git)

  - Bài làm tốt
  - Tuy nhiên cần thêm tính năng click vào nav để đổi ảnh như đề bài.

* Đánh giá chung bài tập về nhà: Bài làm tốt, không nên ẩu, cần cải thiện sự chỉn chu, chuyên nghiệp trong việc code. Cần cải thiện kỹ năng format code để đảm bảo đủ các quy tắc về code convention, dẫn đến khó đọc, khó hiểu, khó bảo trì.
