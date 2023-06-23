# Dương đánh giá bài học viên

## [17. Phí Văn Đức](https://github.com/PhiVanDuc/F8-Fullstack-K3/tree/main/Day-1)

    Sớm nhất.

- [x] [Bài 1](https://github.com/PhiVanDuc/F8-Fullstack-K3/tree/main/Day-1/Exercise-1)
  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.
    ```html
    <input type="email" placeholder="Enter Email" /> <br />
    <br />
    ```
    - Đề xuất sửa thành:
    ```html
    <div style="margin-top: 16px;">
      <input type="email" placeholder="Enter Email" />
    </div>
    ```

---

- [x] [Bài 2](https://github.com/PhiVanDuc/F8-Fullstack-K3/tree/main/Day-1/Exercise-2)
  - Các thẻ heading nên tuân theo quy luật semantic. Chỉ sử dụng 1 thẻ `h1`, các thẻ heading tiếp theo phải được sắp xếp theo thứ tự tăng dần.
    ```html
    <h3>UI/UX Design</h3>
    ```
    - Đề xuất sửa thành:
    ```html
    <h2>UI/UX Design</h2>
    ```

---

- [x] [Bài 3](https://github.com/PhiVanDuc/F8-Fullstack-K3/tree/main/Day-1/Exercise-3)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng. Nên sử dụng thẻ `<p>` để hiển thị đoạn chữ đó.

    ```html
    <header>
      <h2>Header</h2>
    </header>
    ...
    <section class="slider">
      <h3>Slider</h3>
    </section>
    ...
    <footer>
      <h2>Header</h2>
    </footer>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <p>Header</p>
    </header>
    ...
    <section class="slider">
      <p>Slider</p>
    </section>
    ...
    <footer>
      <p>Header</p>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`
    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h2`
    ```html
    <h2>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```
    - Sai chính tả `Havard` => `Harvard`

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý rất nhiều vào semantic, cách phân tích đề bài. Cần chú ý đến các lỗi chính tả, sai ngữ pháp.

  \*Lưu ý: Cần format lại toàn bộ code.

## [Trần Đình Trọng](https://github.com/trandinhtrongg/f8_fullstack_k3/tree/3d9fbdc52a817ad0d69e61654fb9060d5f55e6a4/F8-offline/Day1)

- [x] [Bài 1](https://github.com/trandinhtrongg/f8_fullstack_k3/tree/3d9fbdc52a817ad0d69e61654fb9060d5f55e6a4/F8-offline/Day1/Bai1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br /><br />
    <!-- xuống dòng -->
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <input type="button" value="RESQUEST INVITE" />
    </div>
    ```

---

- [x] [Bài 2](https://github.com/trandinhtrongg/f8_fullstack_k3/tree/3d9fbdc52a817ad0d69e61654fb9060d5f55e6a4/F8-offline/Day1/Bai2)

  - Sử dụng sai hoàn toàn cấu trúc ul, li
  - Đã nhắc về thẻ `br` tuy nhiên vẫn tái sử dụng

  ```html
  <ul>
    <li>
      <img src="./assets/images/leaf.png" width="50" alt="leaf" />
      <h2>UI/UX Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat
        libero perspiciatis illo accusamus ab!
      </p>
    </li>
  </ul>

  <br />

  ...

  <br />

  <ul>
    <li>
      <img src="./assets/images/lv.png" width="50" alt="lv" />
      <h2>Digital Marketing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat
        libero perspiciatis illo accusamus ab!
      </p>
    </li>
  </ul>
  ```

  - Đề xuất sửa thành:

  ```html
  <ul>
    <li>
      <img src="./assets/images/leaf.png" width="50" alt="leaf" />
      <h2>UI/UX Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat
        libero perspiciatis illo accusamus ab!
      </p>
    </li>
    ...
    <li>
      <img src="./assets/images/lv.png" width="50" alt="lv" />
      <h2>Digital Marketing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat
        libero perspiciatis illo accusamus ab!
      </p>
    </li>
  </ul>
  ```

---

- [x] [Bài 3](https://github.com/trandinhtrongg/f8_fullstack_k3/tree/3d9fbdc52a817ad0d69e61654fb9060d5f55e6a4/F8-offline/Day1/Bai3)

  - Sử dụng rất nhiều thẻ `h1` trong cùng một trang web

  ```html
  <h1>HEADER</h1>
  <h1>SIDEBAR</h1>
  <h1>FOOTER</h1>
  ```

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>HEADER</h1>
    <h1>SIDEBAR</h1>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Đoạn title đầu tiên là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`
    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `a`
    ```html
    <a href="#"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức,cần 300 ngày khắc phục</a
    >
    ```
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài làm không tốt. Sai hoàn toàn những gì đã được học trên lớp. Cần chú ý rất nhiều vào semantic, cách phân tích đề bài.
  \*Lưu ý: Cần xem lại và thực hành lại toàn bộ code.

## [NTiến Đạt](https://github.com/Ntiendat-2k3/BT_W1)

- [x] [Bài 1](https://github.com/Ntiendat-2k3/BT_W1/tree/main/Bai1)

  - Cần chú ý thêm vào meta title cho trang web vì nó là một phần quan trọng trong SEO và trải nghiệm người dùng.

  - Vì đây là một trang contact, phần title `Get the invite` nên là thẻ `h1` thay vì `h2`

  - Phần input nhập email, nên sử dụng type là `email` thay vì `text`

---

- [x] [Bài 2](https://github.com/Ntiendat-2k3/BT_W1/tree/main/Bai2)

  - Cần chú ý thêm vào meta title cho trang web vì nó là một phần quan trọng trong SEO và trải nghiệm người dùng.

  - Sử dụng sai hoàn toàn cấu trúc của `ul/li`

    ```html
    <div>
      <li><i class="fa-solid fa-leaf"></i></li>
      <h2>UI/UX Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Necessitatibus, praesentium?
      </p>
    </div>
    ...
    <div>
      <li><i class="fa-solid fa-chart-line"></i></li>
      <h2>Digital Marketing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Necessitatibus, praesentium?
      </p>
    </div>
    ```

---

- [x] [Bài 3](https://github.com/Ntiendat-2k3/BT_W1/tree/main/Bai3)

  - Cần chú ý thêm vào meta title cho trang web vì nó là một phần quan trọng trong SEO và trải nghiệm người dùng.
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

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
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`
    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h3`
    ```html
    <h3>
      <a href="#!"
        >Vòng xoay cao tốc 34,500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h3>
    ```
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xem lại về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Trần Xuân Bách](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day%201)

- [x] [Bài 1](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day%201/Ex1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br />
    <br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div class="send_repuest" style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day%201/Ex2)

  - Sử dụng rất nhiều thẻ `h1` trong cùng một trang web

  ```html
  <h1>UI/UX Design</h1>
  <h1>Web Development</h1>
  <h1>Branding</h1>
  <h1>Photography</h1>
  <h1>Apps Development</h1>
  <h1>Digital Marketing</h1>
  ```

  - Đề xuất sử dụng thẻ `h2` thay thế.

---

- [x] [Bài 3](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day%201/Ex3)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

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
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h2`

    ```html
    <span id="header_content_1">
      <h2>Vòng xoáy cuộc đời, bộ phim mới ra mắt của tác giả Kim Dung</h2>
    </span>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

  - Thẻ `a` có thuộc tính bắt buộc là `href` nếu không có đường dẫn chỉ định thì nên sử dụng `href="#!"`
    ```html
    <a>
      Là một bộ phim được nhiều tác giả mong chờ từ năm 2022,chúng ta đều quá
      quen thuộc với tác giả Kim Dung từ những năm đầu thập niên 21.
    </a>
    ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần chú ý thêm vào cách sử dụng các thẻ semantic trong HTML.

  \* Lưu ý, không nên đặt tên folder, dự án là tên có ký tự đặc biệt hay có dấu cách, vì sẽ rất khó để quản lý và sử dụng trong tương lai.

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/7805cccc6ad5cd807c1c90523bfb1e8e9fc4688f/day1)

- [x] [Bài 1](https://github.com/DongVuong/f8-fullstack-k3/tree/7805cccc6ad5cd807c1c90523bfb1e8e9fc4688f/day1/Baitap1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <input type="text" placeholder="Enter Email" /><br /><br />
    ```

    - Input sử dụng để nhập email nên sử dụng type là `email` thay vì `text`

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/DongVuong/f8-fullstack-k3/tree/7805cccc6ad5cd807c1c90523bfb1e8e9fc4688f/day1/Baitap2)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm92XM8Oi52AgYaByBceoFdT6Uyfg6f0PlVQ&usqp=CAU"
      alt="leaf"
    />
    <br />
    <h2>UI/UX Design</h2>
    ```

    - Đề xuất xóa thẻ `br` vì thẻ `h2` là thẻ block, nó sẽ tự động xuống dòng.

  - Không nên sử dụng thẻ img với src là một ảnh đã được mã hóa base64. Vì nó sẽ làm tăng kích thước file HTML, làm giảm tốc độ tải trang web, không tận dụng được cache của trình duyệt.

    ```html
    <img src="data:image/png;base64,iVBORw0K..." alt="monitor" />
    ```

    - Đề xuất sửa thành:

    ```html
    <img src="https://....webp" alt="monitor" />
    ```

---

- [x] [Bài 3](https://github.com/DongVuong/f8-fullstack-k3/tree/7805cccc6ad5cd807c1c90523bfb1e8e9fc4688f/day1/Baitap3)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <header>
      <h2>HEADER</h2>
    </header>
    <h3>SIDE BAR</h3>
    <footer>
      <h2>FOOTER</h2>
    </footer>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - THuộc tính `href` trong thẻ a bắt buộc phải có giá trị, nếu không có thì nên sử dụng `href="#!"`

    ```html
    <a href=""></a>
    ```

    - Đề xuất sửa thành:

    ```html
    <a href="#!"></a>
    ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chú ý thêm nhiều vào semantic của HTML để bài làm được tốt hơn.

## [Nguyễn Thành Tráng](https://github.com/thanhtrang16490/f8-offline/tree/main/day-1-15-06-2023/lesson1)

- [x] [Bài 1](https://github.com/thanhtrang16490/f8-offline/tree/main/day-1-15-06-2023/lesson1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br /><br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/thanhtrang16490/f8-offline/tree/main/day-1-15-06-2023/lesson1)

  - Bài làm rất tốt \*
  - Tuy nhiên nên coi mỗi bài tập là 1 dự án, nên tách các assets ra thành các folder riêng biệt.

---

- [x] [Bài 3](https://github.com/thanhtrang16490/f8-offline/tree/main/day-1-15-06-2023/lesson1)

  - Bài làm tốt \*

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <header class="header">
      <h2 style="font-size: 32px; font-weight: 700">HEADER</h2>
    </header>
    ...
    <aside class="sidebar">
      <h2 style="font-size: 24px; font-weight: 700">SIDEBAR</h2>
    </aside>
    ...
    <footer class="footer">
      <h2 style="font-size: 32px; font-weight: 700">FOOTER</h2>
    </footer>
    ```

    - Đề xuất sửa thành:

    ```html
    <header class="header">
      <span>Header</span>
    </header>
    ...
    <aside class="sidebar">
      <span>SIDEBAR</span>
    </aside>
    ...
    <footer class="footer">
      <span>Header</span>
    </footer>
    ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chú ý thêm nhiều vào semantic của HTML để bài làm được tốt hơn.

## [Đỗ Văn Khoa](https://github.com/mrkhoadev/F8-Fullstack-K3/tree/main/Day1)

- [x] [Bài 1](https://github.com/mrkhoadev/F8-Fullstack-K3/tree/main/Day1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <input type="email" placeholder="Enter Email" /> <br /><br />
    <input type="submit" value="REQUEST INVITE" />
    ```

    - Đề xuất sửa thành:

    ```html
    <input type="email" placeholder="Enter Email" />
    <div style="margin-top: 16px;">
      <input type="submit" value="REQUEST INVITE" />
    </div>
    ```

---

- [x] [Bài 2](https://github.com/mrkhoadev/F8-Fullstack-K3/tree/main/Day1)
  - Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/mrkhoadev/F8-Fullstack-K3/tree/main/Day1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>Header</h1>
    <h2>SIDEBAR</h2>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <section class="slider">
      <span>Slider</span>
    </section>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h2`

    ```html
    <h2>
      <a href="#">
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần có thêm kỹ năng phân tích để cho ra bài làm tốt hơn.

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/Fullstack03/btvn_buoi_01)

- [x] [Bài 1](hhttps://github.com/pencilbsp/f8_offline/tree/main/Fullstack03/btvn_buoi_01)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <input type="text" placeholder="Enter Email" /> <br />
    ```

    - Phần input nhập email, nên sử dụng type là `email` thay vì `text`

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/pencilbsp/f8_offline/tree/main/Fullstack03/btvn_buoi_01)

  - Bài làm tốt \*

---

- [x] [Bài 3](https://github.com/pencilbsp/f8_offline/tree/main/Fullstack03/btvn_buoi_01)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h2>HEADING</h2>
    <h3>SLIDEBAR</h3>
    <h2>FOOTER</h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <section class="slider">
      <span>Slider</span>
    </section>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `a`

    ```html
    <a href="#"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần có thêm kỹ năng phân tích, sử dụng các thẻ đúng với semantic để cho ra bài làm tốt hơn.

## [Lê Quốc Khánh](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/Day-1)

- [x] [Bài 1](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/Day-1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br />
    <h1>Get the invite</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <input type="text" placeholder="Enter Email" />
    <br />
    <br />
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>Get the invite</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <input type="text" placeholder="Enter Email" />
    <div style="margin-top: 16px;">
      <input type="button" value="RESQUEST INVITE" />
    </div>
    ```

---

- [x] [Bài 2](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/Day-1)

  - Sử dụng sai hoàn toàn ý nghĩa của ul, li

    ```html
    <ul>
      <li>
        <i class="fa fa-leaf"></i>
        <h2>UI/UX Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          assumenda!
        </p>
      </li>
    </ul>
    ...
    <ul>
      <li>
        <i class="fas fa-chart-line"></i>
        <h2>Digital Marketing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          assumenda!
        </p>
      </li>
    </ul>
    ```

    - Đề xuất sử dụng 1 thẻ `ul` duy nhất để bao bọc các thẻ `li` có cùng ý nghĩa

---

- [x] [Bài 3](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/Day-1)

  Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

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
    <span>SIDEBAR</span>
  </nav>
  ...
  <footer>
    <span>Header</span>
  </footer>
  ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `a`

    ```html
    <a href="#">Bàn Nhậu không đối thủ của đội ngũ F8</a>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#">Bàn Nhậu không đối thủ của đội ngũ F8</a>
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần tìm hiểu thêm về chức năng, ý nghĩa các thẻ để làm bài tốt hơn, cần thêm kỹ năng tìm hiểu trên mạng để có thể tự học tốt hơn.

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_1)

- [x] [Bài 1](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_1)

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br />
    <br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_1)

  - Cần gom nhóm các hình ảnh lại vào một folder assets/images để quản lý dễ dàng hơn.
  - Bài làm tốt \*

---

- [x] [Bài 3](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

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
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `a`

    ```html
    <a href="#"
      >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần tìm hiểu thêm về các thẻ semantic, cần chú ý các bài giảng của thầy trên lớp để làm bài tốt hơn. Cần có thêm kỹ năng chia folder để quản lý dễ dàng hơn.

## [Đỗ Minh Đức](https://github.com/a37547-duc/F8/tree/main/BaiTapBuoi1)

- [x] [Bài 1](https://github.com/a37547-duc/F8/tree/main/BaiTapBuoi1)
  - Bài làm rất tốt \*
  - Phần input nhập email có thể sử dụng type là `email` thay vì `text`

---

- [x] [Bài 2](https://github.com/a37547-duc/F8/tree/main/BaiTapBuoi1)

  - Bài làm tốt \*
  - Vì đây là một trang list bài viết, các title bài viết cùng cấp là quan trọng chỉ sau title chính, nên để là h2.

---

- [x] [Bài 3](https://github.com/a37547-duc/F8/tree/main/BaiTapBuoi1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <footer><p class="footer">FOOTER</p></footer>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h2`

    ```html
    <h2 class="news-1">
      <a
        class="vong-xoay-cao-toc"
        href="https://zingnews.vn/vong-xoay-cao-toc-34500-ty-sut-lun-qua-muc-can-300-ngay-khac-phuc-post889222.html"
        target="_blank"
        rel="noopener"
      >
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a
        class="vong-xoay-cao-toc"
        href="https://zingnews.vn/vong-xoay-cao-toc-34500-ty-sut-lun-qua-muc-can-300-ngay-khac-phuc-post889222.html"
        target="_blank"
        rel="noopener"
      >
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h1>
    ```

  - Các className nên đặt có ý nghĩa, dễ hiểu: `[ class="p1", class="list-a", class="news-1" ]` => `[ class="link", class="list", class="news_title" ]`

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần chú ý thêm về các tiểu tiết nhỏ để bài làm hoàn thiện tốt hơn.

## [Đỗ Tiến Khiêm](https://github.com/tienkhiemkahp/F8/tree/main/homework/Day-1)

- [x] [Bài 1](https://github.com/tienkhiemkahp/F8/tree/main/homework/Day-1)

  - Bài làm rất tốt \*

  - Phần input nhập email nên để type là `email` thay vì `text`

    ```html
    <input type="text" name="" id="" placeholder="Enter Email" />
    ```

    - Các phần thuộc tính không sử dụng tới nên xóa đi
    - Đề xuất sửa thành:

    ```html
    <input type="email" placeholder="Enter Email" />
    ```

---

- [x] [Bài 2](https://github.com/tienkhiemkahp/F8/tree/main/homework/Day-1)

  - Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/tienkhiemkahp/F8/tree/main/homework/Day-1)

  - Bài làm rất tốt \*

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Cần chú ý thêm về các tiểu tiết nhỏ để bài làm hoàn thiện tốt hơn.

## [Hữu Hưng](https://github.com/HuuHungg/f8-homework)

- [x] [Bài 1](https://github.com/HuuHungg/f8-homework)

  - Phần meta title rất quan trọng trong SEO, và trải nghiệm người dùng. Nên sử dụng một cách tốt nhất chứ không phải chỉ là `Document`

    ```html
    <title>Get the invite</title>
    ```

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/HuuHungg/f8-homework)

  - Sử dụng quá nhiều thẻ `h1` trong một trang web:

    ```html
    <h1>UX/UI Design</h1>
    <h1>Web Development</h1>
    <h1>Branding</h1>
    <h1>Photography</h1>
    <h1>Digital Marketing</h1>
    ```

    - Đề xuất sử dụng thẻ `h2` thay thế.

---

- [x] [Bài 3](https://github.com/HuuHungg/f8-homework)

  - Sử dụng nhiều thẻ `h1` trong bài, các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

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
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`

    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h2`

    ```html
    <h2>
      <a href="#"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm không tốt, cần chú ý thêm nhiều về cách sử dụng các thẻ heading, br nói riêng và tất cả về semantic trong HTML nói chung để bài làm được tốt hơn.

## [Minh Pham](https://github.com/Minh0314/F8-K3/tree/main/Day1)

- [x] [Bài 1](https://github.com/Minh0314/F8-K3/tree/main/Day1)

  - Bài làm rất tốt \*
  - Nên thêm thuộc tính type cho input nhập email là `email` thay vì không có gì thì sẽ lấy default là `text`
  - Nếu có thể, sử dụng các thuộc tính kích thước để làm nhỏ icon: `width`, `height`

---

- [x] [Bài 2](https://github.com/Minh0314/F8-K3/tree/main/Day1)

  - Viết sai hoàn toàn các cấu trúc `ul/li`
  - Nên chú ý vào phần báo lỗi cấu trúc của prettier để sửa lại.
  - Sửa lại bài tập và nộp lại.

---

- [x] [Bài 3](https://github.com/Minh0314/F8-K3/tree/main/Day1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>HEADER</h1>
    <h3>SIDEBAR</h3>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Sai chính tả `Harard` => `Harvard`

  - Phần title của trang web nên để trong thẻ `h1` thay vì `h2`

    - Phần thẻ a nên để trong thẻ h1 thay vì ngược lại

      - Vì theo ngữ nghĩa của semantic và SEO, thẻ `h1` là tiêu đề chính của trang web, còn thẻ `a` là một phần của nội dung trong `h1`

    - Ngoài ra, value trong thuộc tính href là bắt buộc. Nếu không có thì nên để là `#` thay vì không có gì.

    ```html
    <a href=""
      ><h2>
        Vòng xoay cao tốc 34.500tỷ sụt lún quá mức ,cần 300 ngày khắc phục
      </h2></a
    >
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#"
        >Vòng xoay cao tốc 34.500tỷ sụt lún quá mức ,cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm không tốt, cần chú ý thêm nhiều về cách sử dụng các thẻ heading, a nói riêng và tất cả về semantic trong HTML nói chung để bài làm được tốt hơn.

## [Hoàng Bảo Long](https://github.com/hoangbaolong279/F8/tree/main/Buoi-1)

- [x] [Bài 1](https://github.com/hoangbaolong279/F8/tree/main/Buoi-1)

  - Bài làm tốt

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <button>REQUEST INVITE</button>
    </div>
    ```

---

- [x] [Bài 2](https://github.com/hoangbaolong279/F8/tree/main/Buoi-1)

  - Bài làm tốt \*

  - Vì đây là một trang list bài viết, các title bài viết cùng cấp là quan trọng chỉ sau title chính, nên để là `h2`.

---

- [x] [Bài 3](https://github.com/hoangbaolong279/F8/tree/main/Buoi-1)

  - Bài làm rất tốt \*

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, có hiểu biết về semantic. Cần chú ý thêm về các tiểu tiết nhỏ để bài làm hoàn thiện tốt hơn.

## [Nguyễn Bá Đông](https://github.com/Dong205/F8-fullstack-K3/blob/main)

- [x] [Bài 1](https://github.com/Dong205/F8-fullstack-K3/blob/main)

  - Bài làm tốt

  - Thẻ `br` chỉ được sử dụng khi ngắt dòng một đoạn text. Không được sử dụng trong bất kỳ hoàn cảnh nào khác vì điều đó là sai semantic. Có thể sử dụng một lựa chọn thay thế khác bằng cách sử dụng một thẻ block khác như `div` để bao bọc nội dung cần ngắt dòng.

    ```html
    <br /><br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px;">
      <input type="button" value="RESQUEST INVITE" />
    </div>
    ```

    - Sai chính tả `RESQUEST` => `REQUEST`

---

- [x] [Bài 2](https://github.com/Dong205/F8-fullstack-K3/blob/main)

  - Bài làm tốt \*

  - Vì đây là một trang list bài viết, các title bài viết cùng cấp là quan trọng chỉ sau title chính, nên để là `h2`.

---

- [x] [Bài 3](https://github.com/Dong205/F8-fullstack-K3/blob/main)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>HEADER</h1>
    <h3>SIDEBAR</h3>
    <h1>FOOTER</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <header>
      <span>Header</span>
    </header>
    ...
    <nav>
      <span>SIDEBAR</span>
    </nav>
    ...
    <footer>
      <span>Header</span>
    </footer>
    ```

  - Phần title chính là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`, nên để trong thẻ `h1` thay vì `h2`

    - Phần thẻ a nên để trong thẻ h1 thay vì ngược lại

      - Vì theo ngữ nghĩa của semantic và SEO, thẻ `h1` là tiêu đề chính của trang web, còn thẻ `a` là một phần của nội dung trong `h1`

    - Ngoài ra, value trong thuộc tính href là bắt buộc. Nếu không có thì nên để là `#` thay vì không có gì.

    ```html
    <a href=""
      ><h2>
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </h2></a
    >
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a href="#"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm tốt. Cần chú ý thêm về các tiểu tiết nhỏ để bài làm hoàn thiện tốt hơn.
