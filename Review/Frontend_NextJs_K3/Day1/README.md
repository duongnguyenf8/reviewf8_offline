# Dương review bài học viên FE K3.

## [Nguyễn Khắc Tú](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bài%20tập%20Day%201)

    - Không nên để tên folder hoặc repo có ký tự đặc biệt vì đường dấn nhìn sẽ rất xấu, và khó để bảo trì, import vào các file khác.

- [x] [Bài 1](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bài%20tập%20Day%201)

  - Bài làm rất tốt \*
  - Phần input để nhập email có thể sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

  - Phần css này không cần thiết vì không chứa bất cứ thuộc tính nào.

    ```css
    .button-request {
    }
    ```

---

- [x] [Bài 2](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bài%20tập%20Day%201)

  - Bài làm tốt
  - Vì đây là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`. Các title bài viết nên sử dụng `h2` thay vì `h3`.

  ```html
  <h3>UI/UX Design</h3>
  <h3>Web Development</h3>
  <h3>Branding</h3>
  <h3>Photography</h3>
  <h3>Apps Development</h3>
  <h3>Digital Marketing</h3>
  ```

---

- [x] [Bài 3](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bài%20tập%20Day%201)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<p>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <p>Header</p>
    </header>
    ...
    <section class="sidebar">
      <p>Sidebar</p>
    </section>
    ...
    <footer>
      <p>Header</p>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`
    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `a`
    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`
    ```html
    <a target="_blank" href=""
      >Vòng xoay cao tốc 34,500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
    </a>
    ```
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic HTML, và một số lỗi nhỏ về CSS. Cần chú ý đến các lỗi này để tránh gặp phải trong tương lai. \* Lưu ý: Cần chuyển đổi, thay tên toàn bộ folder.

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main)

- [x] [Bài 1](https://github.com/saiduii/F8-FE-K3/tree/main)

  - Thẻ `br` chỉ nên sử dụng khi xuống dòng ở một đoạn văn bản. Không nên sử dụng nó để tạo khoảng cách giữa các phần tử.

    ```html
    <br />
    <br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top:16px;">
      <button type="submit">REQUEST INVITE</button>
    </div>
    ```

  - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

---

- [x] [Bài 2](https://github.com/saiduii/F8-FE-K3/tree/main)

  - Bài làm tốt

  - Vì ở đây là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`. Các title bài viết nên sử dụng `h2` thay vì `h3`.

---

- [x] [Bài 3](https://github.com/saiduii/F8-FE-K3/tree/main)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<p>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <p>Header</p>
    </header>
    ...
    <section class="sidebar">
      <p>Sidebar</p>
    </section>
    ...
    <footer>
      <p>Header</p>
    </footer>
    ```

  - Tag `<font>` không hỗ trợ trong HTML5, nên không nên sử dụng nó.

    ```html
    <a target="_blank" href="https://vnexpress.net/">
      <font color="blue">
        <h1>
          Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
        </h1>
      </font>
    </a>
    ```

    - Phần thẻ a nên để trong thẻ h1 thay vì ngược lại

      - Vì theo ngữ nghĩa của semantic và SEO, thẻ h1 là tiêu đề chính của trang web, còn thẻ a là một phần của nội dung trong h1

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="https://vnexpress.net/">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic HTML, cần chú ý thêm về các bài giảng trên lớp và tìm hiểu thêm về các thẻ sử dụng ở HTML5 để làm bài tốt hơn.

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-1)

- [x] [Bài 1](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-1)

  - Vì đây là một trang web invite contact

    - Title `Get the invite` phải để trong thẻ `h1` thay vì `h2`

  - Không sủ dụng đường dẫ như này `src="/day-1/img/48.png"` vì nó sẽ bị lỗi khi deploy lên server

    - Đề xuất sửa thành:

    ```html
    <img src="./img/48.png" alt="48" />
    ```

  - Input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

  - Phần title trang web nên chú ý vì nó là một phần quan trọng trong SEO, trải nghiệm người dùng (UX)

    - Đề xuất sửa thành:

    ```html
    <title>Get the invite</title>
    ```

---

- [x] [Bài 2](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-1)

  - Các title trong list nên sử dụng `h2` thay vì `h3` vì nó là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`
  - Không sử dụng đường dẫn dạng như này: `src="/day-1/img/UI.png"`

    - Đề xuất sửa thành:

    ```html
    <img src="./img/UI.png" alt="UI" />
    ```

---

- [x] [Bài 3](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h3>HEADER</h3>
    <h4>SIDEBAR</h4>
    <h3>FOOTER</h3>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav class="sidebar">
      <span>Sidebar</span>
    </nav>

    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `h3` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <h3>
      <a target="_blank" href=""
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h3>
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý về các meta title, đường dẫn, semantic HTML, SEO, và tìm hiểu thêm về các thẻ sử dụng ở HTML5 để làm bài tốt hơn.

## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-1)

- [x] [Bài 1](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-1)

  - Sai layout đề bài khi button nằm cùng một hàng với input. Có thẻ bao bọc button vào một thẻ `div` để ngắt hàng và sử dụng thuộc tính `margin-top` để tạo khoảng cách giữa button và input.
  - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

---

- [x] [Bài 2](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-1)

  - Bài làm tốt \*

  - Các phần title nên sử dụng `h2` thay vì `h3` vì nó là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`

---

- [x] [Bài 3](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h2>HEADER</h2>
    <h3>SIDEBAR</h3>
    <h2>FOOTER</h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav class="sidebar">
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `h2` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <h2>
      <a target="_blank" href=""
        >Vòng xoay cao tốc 34.500 tỉ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, nên tách các bài tập ra thành từng file, coi mỗi bài là một trang web để làm bài tốt hơn. Cần chú ý đến meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

## [Đỗ Ngọc Tiến](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Buoi-1)

- [x] [Bài 1](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Buoi-1)
  - Bài làm rất tốt \*
  - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

---

- [x] [Bài 2](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Buoi-1)
  - Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Buoi-1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav class="sidebar">
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `a` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <a target="_blank" href=""
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

## [Nguyễn Đình Khánh](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day1)

- [x] [Bài 1](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day1)

  - Bài làm rất tốt \*

  - Không nên sử dụng ảnh có src là một đoạn mã hóa base64 vì nó sẽ làm tăng kích thước file html, làm giảm tốc độ tải trang web, không thể tận dụng được cache của trình duyệt.

  - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

---

- [x] [Bài 2](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day1)

  - Bài làm rất tốt \*

  - Không nên sử dụng ảnh có src là một đoạn mã hóa base64 vì nó sẽ làm tăng kích thước file html, làm giảm tốc độ tải trang web, không thể tận dụng được cache của trình duyệt.

---

- [x] [Bài 3](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h1 class="header">HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header class="header">
      <span>Header</span>
    </header>
    ...
    <nav class="sidebar">
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `a` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <a target="_blank" href="" class="description love-is-blue">
      <h2 class="">
        Vòng xoáy cao tốc 34.500 tỷ sụt lún quá mức, cần 300 tỷ để khắc phục
      </h2>
    </a>
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`
    - Không nên sử dụng thẻ `h2` trong thẻ `a` vì nó sẽ làm giảm độ ưu tiên của thẻ `h2` trong SEO
    - Các thuộc tính không sử dụng `class=""` nên xóa đi để làm cho code gọn hơn
    - ClassName nên đặt có ý nghĩa vầ ngắn gọn hơn để dễ dàng bảo trì và phát triển hơn
    - Phần màu mặc định của thẻ `a` là màu xanh, nên không cần phải khai báo lại màu xanh cho thẻ `a`

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!" class="title">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

## [Gia Bảo Đỗ](https://github.com/Dogiaba/f8-fe-k3-htmlDay1/tree/main/Day1)

- [x] [Bài 1](https://github.com/Dogiaba/f8-fe-k3-htmlDay1/tree/main/Day1)

  - Bài làm tốt
  - Thẻ `br` chỉ nên sử dụng khi xuống dòng ở một đoạn văn bản. Không nên sử dụng nó để tạo khoảng cách giữa các phần tử.

    ```html
    <input placeholder="Enter Email" /><br /><br />
    ```

    - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top:16px;">
      <button type="submit">REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/Dogiaba/f8-fe-k3-htmlDay1/tree/main/Day1)

  - Bài làm rất tốt \*
  - Sai chính tả `Devlepment` => `Development`

---

- [x] [Bài 3](https://github.com/Dogiaba/f8-fe-k3-htmlDay1/tree/main/Day1)

  - Bài làm tốt
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `a` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <a
      style="font-size: 30px;"
      href="https://zingnews.vn/vong-xoay-cao-toc-34500-ty-sut-lun-qua-muc-can-300-ngay-khac-phuc-post889222.html"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
    </a>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

  - Style màu mặc định của thẻ `a` đã là màu xanh `blue` không cần thiết phải style lại.

    ```css
    a {
      color: blue;
    }
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

  \* Lưu ý: Không nên gửi link commit, làm vậy rất khó để review

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)

- [x] [Bài 1](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)
  - Không nên set cả thuộc tính width, height cho ảnh, làm vậy sẽ khiến ảnh bị méo, nên chỉ set một trong hai thuộc tính đó.
  - Không nên sử dụng ảnh có src là một đoạn mã hóa base64 vì nó sẽ làm tăng kích thước file html, làm giảm tốc độ tải trang web, không thể tận dụng được cache của trình duyệt.

---

- [x] [Bài 2](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)
  - Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h2>HEADER</h2>
    <h3>SIDEBAR</h3>
    <h2>FOOTER</h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `a` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <a target="_blank" href=""
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`
    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

## [Anh Kien Dang](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-1)

- [x] [Bài 1](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)
  - Bài làm rất tốt \*
  - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

---

- [x] [Bài 2](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)

  - Làm sai hoàn toàn cấu trúc của thẻ `ul/li`

    ```html
    <ul>
      <li>
        <i class="fa-solid fa-leaf"></i>
        <h2>UX/UI DESIGN</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure
          sunt, tempore debitis eligendi sapiente.
        </p>
      </li>
    </ul>
    ...
    <ul>
      <li>
        <i class="fa-sharp fa-solid fa-chart-line"></i>
        <h2>Digital marketing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure
          sunt, tempore debitis eligendi sapiente.
        </p>
      </li>
    </ul>
    ```

    - Với các list cùng một loại thì nên đặt chúng trong cùng một thẻ `ul` và các phần tử con của `ul` là các thẻ `li`

    - Đề xuất sửa thành:

    ```html
    <ul>
      <li>
        <i class="fa-solid fa-leaf"></i>
        <h2>UX/UI DESIGN</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure
          sunt, tempore debitis eligendi sapiente.
        </p>
      </li>
      ...
      <li>
        <i class="fa-sharp fa-solid fa-chart-line"></i>
        <h2>Digital marketing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure
          sunt, tempore debitis eligendi sapiente.
        </p>
      </li>
    </ul>
    ```

---

- [x] [Bài 3](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/Day_1)

  - Phần meta title nên chú ý vì nó là một phần quan trọng trong SEO, trải nghiệm người dùng (UX)
    - Đề xuất sửa thành:
    ```html
    <title>News</title>
    ```
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính trang web không nên sử dụng `a` mà nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <a target="_blank" href=""
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`
    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

## [Sơn Trần](https://github.com/2003son/F8-FE-K3/tree/main/day1)

- [x] [Bài 1](https://github.com/2003son/F8-FE-K3/tree/main/day1)
  - Bài làm tốt \*
  - Phần title chính nên sử dụng thẻ `h1` thay vì `h3`
    ```html
    <h3>Get the invite</h3>
    ```

---

- [x] [Bài 2](https://github.com/2003son/F8-FE-K3/tree/main/day1)

  - Bài làm tốt \*

  - Các phần title của list nên sử dụng `h2` thay vì `h3`
    - Vì nó là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`
    ```html
    <h3>UX/UI DESIGN</h3>
    ```
    - Đề xuất sửa thành:
    ```html
    <h2>UX/UI DESIGN</h2>
    ```

---

- [x] [Bài 3](https://github.com/2003son/F8-FE-K3/tree/main/day1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h3>SIDEBAR</h3>
    <h2>FOOTER</h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính thay vì sử dụng thẻ `h2` thì nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <h2>
      <a target="_blank" href=""
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```

    - Thuộc tính href của thẻ `a` bắt buộc có một giá trị nếu không có giá trị thì nên để giá trị là `#` hoặc `#!`
    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

## [thuy nguyen](https://github.com/tnnhungoc/F8-FE-K3)

- [x] [Bài 1](https://github.com/tnnhungoc/F8-FE-K3)

  - Bài làm tốt \*
  - Không nên set cả thuộc tính width, height cho ảnh, làm vậy sẽ khiến ảnh bị méo, nên chỉ set một trong hai thuộc tính đó.
  - Phần input để nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay chưa.

---

- [x] [Bài 2](https://github.com/tnnhungoc/F8-FE-K3)

  - Bài làm tốt \*
  - Không nên set cả thuộc tính width, height cho ảnh, làm vậy sẽ khiến ảnh bị méo, nên chỉ set một trong hai thuộc tính đó.
  - Sử dụng quá nhiều thẻ `h1` trong bài, điều đó là sai semantic, làm giảm độ ưu tiên của thẻ `h1` trong SEO
    - Đề xuất sửa thành:
    ```html
    <h2>UX/UI DESIGN</h2>
    ```

---

- [x] [Bài 3](https://github.com/tnnhungoc/F8-FE-K3)

  - Bài làm tốt \*
  - Phần `sidebar` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <div class="sidebar">
      <h2>SIDEBAR</h2>
    </div>
    ```

    - Đề xuất sửa thành:

    ```html
    <nav>
      <span>Sidebar</span>
    </nav>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

  \* Lưu ý: Không nên đặt tên file, folder chứa ký tự đặc biệt (Dấu cách) vì sẽ rất khó để bảo trì, phát triển sau này, ngoài ra, sẽ khiến url rất khó nhìn và không tối ưu cho SEO.

## [Nguyen Le Quyen (FPL HN)](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

- [x] [Bài 1](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  - Bài làm rất tốt \*

---

- [x] [Bài 2](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  - Sử dụng sai hoàn toàn cấu trúc của thẻ `ul/li`

    ```html
    <div class="ui-ux">
      <ul>
        <li><img src="images/leaf.png" alt="" style="width: 30px" /></li>
        <p>Lorem ispum dolor sit amet, consectetur adipisicing elit</p>
      </ul>
    </div>
    ...
    <div class="digital">
      <ul>
        <li><img src="images/growth.jpg" alt="" style="width: 30px" /></li>
        <h1>Digital marketing</h1>
        <p>Lorem ispum dolor sit amet, consectetur adipisicing elit</p>
      </ul>
    </div>
    ```

    - Với các list cùng một loại thì nên đặt chúng trong cùng một thẻ `ul` và các phần tử con của `ul` là các thẻ `li`
    - Chỉ nên có một thẻ `h1` trong một trang web, nên sử dụng `h2` thay vì `h1`, vì nó là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`
    - Đề xuất sửa thành:

    ```html
    <ul>
      <li>
        <i class="fa-solid fa-leaf"></i>
        <h2>UX/UI DESIGN</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure
          sunt, tempore debitis eligendi sapiente.
        </p>
      </li>
      ...
      <li>
        <i class="fa-sharp fa-solid fa-chart-line"></i>
        <h2>Digital marketing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure
          sunt, tempore debitis eligendi sapiente.
        </p>
      </li>
    </ul>
    ```

---

- [x] [Bài 3](https://github.com/tnnhungoc/F8-FE-K3)

  - Bài làm tốt \*
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day%201)

- [x] [Bài 1](https://github.com/countduck4819/f8-frontend/tree/main/Day%201)

  - Bài làm tốt \*

  - Phần title chính nên sử dụng thẻ `h1` thay vì thẻ `h2`

    ```html
    <h2>Get the invite</h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>Get the invite</h1>
    ```

---

- [x] [Bài 2](https://github.com/countduck4819/f8-frontend/tree/main/Day%201)

  - Bài làm tốt \*

  - Các title của list nên sử dụng `h2` thay vì `h3` vì nó là một trang web viết về một list bài viết, các title của list chỉ đứng sau `h1`
    ```html
    <h3>UX/UI DESIGN</h3>
    ```
    - Đề xuất sửa thành:
    ```html
    <h2>UX/UI DESIGN</h2>
    ```
  - Nên sử dụng một thẻ img để liên kết tới một file svg ngoài, việc đó sẽ giúp cho code gọn hơn, dễ bảo trì hơn.
    ```html
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path
        d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
      />
    </svg>
    ```
    - Đề xuất sửa thành:
    ```html
    <img src="images/leaf.png" alt="some_alt" />
    ```

---

- [x] [Bài 3](https://github.com/countduck4819/f8-frontend/tree/main/Day%201)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<span>` để hiển thị đoạn chữ đó.

    ```html
    <h2>Header</h2>
    <h3>SideBar</h3>
    <h2 style="margin-top: 10px">Footer</h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>Sidebar</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính thay vì sử dụng thẻ `a` thì nên sử dụng `h1` để dúng chuẩn semantic và SEO

    ```html
    <div>
      <a target="_blank" href="#!"
        ><strong
          >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc
          phục</strong
        ></a
      >
    </div>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!">
        Vòng xoáy cao tốc 35.500 tỷ lún sụt quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, cần chú ý đến các thẻ semantic để làm bài tốt hơn.

  \* Lưu ý: Không nên đặt tên file, folder chứa ký tự đặc biệt (Dấu cách) vì sẽ rất khó để bảo trì, phát triển sau này, ngoài ra, sẽ khiến url rất khó nhìn và không tối ưu cho SEO.
