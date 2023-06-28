# Dương đánh giá bài học viên

## [Nguyễn Hưng Tuân ✅](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-1)

    Sớm nhất *

- [x] [Bài 1](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-1)
  - Bài làm rất tốt \*
- [x] [Bài 2](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-1)
  - Bài làm rất tốt \*
- [x] [Bài 3](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-1)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>HEADER</h1>
    <h3>SIDEBAR</h3>
    <footer>
      <p class="footer">FOOTER</p>
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

  - Đoạn title đầu tiên là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`
    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `h2`
    ```html
    <h2>
      <a target="_blank" href="#" target="_blank" rel="noopener noreferrer"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên cần chú ý về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_1)

- [x] [Bài 1](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_1)

  - Bài làm rất tốt \*
  - Vì đây là một trang contact, phần title `Get the invite` nên là thẻ `h1` thay vì `h2`.
  - Phần thuộc tính kích thước của img không nên sử dụng cả width và height, nên chỉ sử dụng một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img src="./img/envelope-regular.jpg" alt="Email" width="18" height="18" />
    ```

    - Đề xuất sửa thành:

    ```html
    <img src="./img/envelope-regular.jpg" alt="Email" width="18" />
    ```

- [x] [Bài 2](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_1)

  - Bài làm rất tốt \*
  - Phần thuộc tính kích thước của img không nên sử dụng cả width và height, nên chỉ sử dụng một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img src="./img/leaf-solid.jpg" alt="Ui/Ux" width="18" height="18" />
    ```

    - Đề xuất sửa thành:

    ```html
    <img src="./img/leaf-solid.jpg" alt="Ui/Ux" width="18" />
    ```

  - Vì đây là một trang web thể hiện 1 list. Nên các phần title chính trong các list item nên là thẻ `h2` thay vì `h3`

    ```html
    <h3>UI/UX</h3>
    ```

    - Đề xuất sửa thành:

    ```html
    <h2>UI/UX</h2>
    ```

- [x] [Bài 3](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_1)

  - Bài làm tốt
  - Đoạn title đầu tiên là `"Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục"`
    - Cần sử dụng thẻ `h1` cho đoạn title đó thay vì thẻ `a`
    ```html
    <a target="_blank" href="#" class="bold font26px"
      >Vòng xoáy cao ốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
    >
    ```
    - Đề xuất sửa thành:
    ```html
    <h1 class="bold font26px">
      <a target="_blank" href="#"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên cần chú ý về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Vinh Nguyễn](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day01)

- [x] [Bài 1](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day01)

  - Bài làm rất tốt \*

- [x] [Bài 2](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day01)

  - Bài làm rất tốt \*

- [x] [Bài 3](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day01)

  - Bài làm tốt \*

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

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên cần chú ý về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_1)

- [x] [Bài 1](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_1)

  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img
      src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
      alt="email"
      width="30"
      height="30"
    />
    ```

    - Đề xuất sửa thành:

    ```html
    <img
      src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
      alt="Email"
      width="30"
    />
    ```

  - Phần input nhập email nên sử dụng type là `email` thay vì `text`

    ```html
    <input type="text" placeholder="Enter Email" /> <br /><br />
    ```

    - Thẻ `br` chỉ sử dụng để ngắt dòng ở một đoạn văn bản hoặc tiêu đề. Không nên sử dụng nó để tạo khoảng cách giữa các phần tử.
    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px">
      <input type="email" placeholder="Enter Email" />
    </div>
    ```

- [x] [Bài 2](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_1)

  - Bài làm tốt \*
  - Vì đây là một trang web thể hiện 1 list. Nên các phần title chính trong các list item nên là thẻ `h2` thay vì `h3`

    ```html
    <h3>UI/UX</h3>
    ```

    - Đề xuất sửa thành:

    ```html
    <h2>UI/UX</h2>
    ```

  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img width="20" height="20" style="vertical-align: bottom" src="https..." />
    ```

    - Đề xuất sửa thành:

    ```html
    <img width="20" style="vertical-align: bottom" src="https..." />
    ```

- [x] [Bài 3](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_1)

  - Bài làm tốt \*

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

  - Phần title chính nên sử dụng thẻ `h1` thay vì `h2`
    ```html
    <h2>
      <a target="_blank" href="" target="_blank" rel="noopener noreferrer"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```
    - Thuộc tính href bắt buộc nhận vào một giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chú ý thêm nhiều về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8.git)

- [x] [Bài 1](https://github.com/thaiduytien1611cunbeo/NopbaitapF8.git)

  - Thẻ `br` chỉ sử dụng để ngắt dòng ở một đoạn văn bản hoặc tiêu đề. Không nên sử dụng nó để tạo khoảng cách giữa các phần tử.

    ```html
    <br /><br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px">
      <button>REQUEST INVITE</button>
    </div>
    ```

- [x] [Bài 2](https://github.com/thaiduytien1611cunbeo/NopbaitapF8.git)
  - Bài làm rất tốt \*
- [x] [Bài 3](https://github.com/thaiduytien1611cunbeo/NopbaitapF8.git)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1></h1>
    <h2>HEADER</h2>
    <p><b>SIDEBAR</b></p>
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

  - Phần title chính nên sử dụng thẻ `h1` thay vì `h3`

    ```html
    <h3 style="color:darkblue">
      <b>Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</b>
    </h3>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1 style="color:darkblue">
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

  - Một số phần ở bản mẫu là một đường dẫn, cần sửa lại thành thẻ `a`

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chú ý thêm nhiều về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Tuan Kiet Hoang](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-01)

- [x] [Bài 1](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-01)

  - Thẻ `br` chỉ sử dụng để ngắt dòng ở một đoạn văn bản hoặc tiêu đề. Không nên sử dụng nó để tạo khoảng cách giữa các phần tử.

    ```html
    <br /><br />
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px">
      <button type="submit">REQUEST INVITE</button>
    </div>
    ```

- [x] [Bài 2](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-01)
  - Các phần title của list nên sử dụng thẻ `h2` thay vì `p>strong` để đúng về semantic hơn.
    ```html
    <p><strong>UI/UX</strong></p>
    ```
    - Đề xuất sửa thành:
    ```html
    <h2>UI/UX</h2>
    ```
  - Các thẻ img không nên đặt cả 2 thuộc tính là width và height vì làm như vậy sẽ có thể khiến ảnh không đúng tỷ lệ gây ra việc ảnh bị méo, hoặc mỗi lần thay đổi kích thước ảnh thì phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu.
    ```html
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJorfX5m41IaS9lo5lDjFtyqg8bDPZzx9JRQ&usqp=CAU"
      height="25px"
      width="25px"
    />
    ```
    - Đề xuất sửa thành:
    ```html
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJorfX5m41IaS9lo5lDjFtyqg8bDPZzx9JRQ&usqp=CAU"
      height="25px"
    />
    ```
- [x] [Bài 3](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-01)

  - Thẻ `br` chỉ được sử dụng để ngắt dòng một đoạn văn. Không phải để ngắt dòng một phần tử trong HTMl.

  - Phần `SIDEBAR` chỉ là một placeholder, không phải là một tiêu đề nên không nên sử dụng thẻ `p` để đúng về semantic hơn. Vì thẻ `p` chỉ được sử dụng để đánh dấu một đoạn văn bản.

    ```html
    <p><b>SIDEBAR</b></p>
    ```

    - Đề xuất sửa thành:

    ```html
    <nav>
      <span>SIDEBAR</span>
    </nav>
    ```

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chú ý thêm nhiều về cấu trúc các thẻ, semantic trong HTML để bài làm tốt hơn

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/master)

- [x] [Bài 1](https://github.com/TranCong312002/F8-fullstack-k4/tree/master)
  - Bài làm rất tốt \*
  - Tuy nhiên cần chú ý về thẻ meta title trong trang web vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng
- [x] [Bài 2](https://github.com/TranCong312002/F8-fullstack-k4/tree/master)
  - Bài làm rất tốt \*
  - Tuy nhiên cần chú ý về thẻ meta title trong trang web vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng
- [x] [Bài 3](https://github.com/TranCong312002/F8-fullstack-k4/tree/master)

  - Bài làm rất tốt \*
  - Tuy nhiên cần chú ý về thẻ meta title trong trang web vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng

- Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chú ý thêm một chút tiểu tiết để bài làm tót hơn.

## [Hà Long Việt](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_1)

- [x] [Bài 1](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_1)
  - Bài làm rất tốt \*
  - Các thuộc tinh không sử dụng của thẻ img có thể => xóa đi
- [x] [Bài 2](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_1)

  - Bài làm rất tốt \*
  - Thẻ `br` chỉ được sử dụng để ngắt dòng một đoạn văn. Không phải để ngắt dòng một phần tử trong HTMl.
    ```html
    <br />
    <br />
    ```

- [x] [Bài 3](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_1)
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
  - Phần title chính nên sử dụng thẻ `h1` thay vì `a`
    ```html
    <a target="_blank" href="" class="first"
      ><b
        >Vòng xoáy cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</b
      ></a
    >
    ```
    - Thuộc tính href bắt buộc nhận vào một giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```
- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm nhiều hơn về các thẻ semantic để bài làm tốt hơn.

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day%201)

- [x] [Bài 1](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day%201)
  - Bài làm rất tốt \*
- [x] [Bài 2](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day%201)

  - Bài làm rất tốt \*
  - Không nên set cả width, height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img
      src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
      alt="email"
      width="30"
      height="30"
    />
    ```

    - Đề xuất sửa thành:

    ```html
    <img
      src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
      alt="Email"
      width="30"
    />
    ```

- [x] [Bài 3](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day%201)
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
  - Phần title chính nên sử dụng thẻ `h1` thay vì `a`
    ```html
    <a target="_blank" href="" class="first"
      ><b
        >Vòng xoáy cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</b
      ></a
    >
    ```
    - Thuộc tính href bắt buộc nhận vào một giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```
- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm nhiều hơn về các thẻ semantic để bài làm tốt hơn.

D \* Lưu ý: Không nên đặt tên file, folder, repo chứa các ký tự đặc biệt vì sẽ gây ra tình trạng khó quản lý, bảo trì, ngoài ra, sẽ khiến url rất khó nhìn và khó nhớ.

## [Nguyễn Ngọc Hùng](https://github.com/Oladayne/f8-fullstack-k98.git)

- [x] [Bài 1](https://github.com/Oladayne/f8-fullstack-k98.git)

  - Sử dụng sai hoàn toàn các thẻ semantic.
    ```html
    <p>
      <img
        src="https://i.pinimg.com/236x/90/55/09/905509e37d5fb75b1aaf4866a93c9d46.jpg"
      />
    </p>
    <b>Get the invite</b>
    ```
    - Thẻ `p` chỉ được sử dụng để đánh dấu một đoạn văn bản, không được sử dụng để bao bọc một phần tử HTML khác.
    - Thẻ `b` chỉ được dùng để đánh dấu một đoạn văn bản cần in đậm, không được dùng để biểu thị một tiêu đề.
    - Đề xuất sửa thành:
    ```html
    <div>
      <img
        src="https://i.pinimg.com/236x/90/55/09/905509e37d5fb75b1aaf4866a93c9d46.jpg"
      />
      <h1>Get the invite</h1>
    </div>
    ```
  - Phần input nhập email nên sử dụng type là `email` thay vì `text`.
  - Code lại.

- [x] [Bài 2](https://github.com/Oladayne/f8-fullstack-k98.git)

  - Code lại.
  - Thẻ `p` chỉ được sử dụng để đánh dấu một đoạn văn bản, không được sử dụng để bao bọc một phần tử HTML khác.

- [x] [Bài 3](https://github.com/Oladayne/f8-fullstack-k98.git)
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.
    ```html
    <h1><b>HEADER</b></h1>
    <h2><b>SIDEBAR</b></h2>
    <b style="font-size: 30px;">FOOTER</b>
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
  - Phần title chính nên sử dụng thẻ `h1` thay vì `h2`
    ```html
    <h2>
      <a target="_blank" href="" style="color: rgb(0, 0, 201);"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```
    - Thuộc tính href bắt buộc nhận vào một giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```
- Đánh giá chung bài tập về nhà: Bài làm không tốt, cần chú ý thêm rất nhiều về các bài giảng trên lớp và các thẻ semantic để bài làm tốt hơn.

## [Nguyễn Chi Nam](https://github.com/chinam197/baitapbuoi1.git)

- [x] [Bài 1](https://github.com/chinam197/baitapbuoi1.git)

  - Không nên sử dụng đường dẫn `/path` vì sẽ gây ra một số lỗi khi chạy ở môi trường khác.
  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.
    - Thuộc tính border không nên sử dụng cho thẻ img. Vì thuộc tính này đã được cảnh báo là sẽ bị loại bỏ trong tương lai.
    - Tất cả các img đều cần có thuộc tính bắt buộc là alt. Thuộc tính này sẽ được hiển thị khi ảnh không thể hiển thị.

    ```html
    <img
      src="/bai1/icon1/envelope-solid.svg"
      width="12"
      height="12"
      border="0.5"
    />
    ```

    - Đề xuất sửa thành:

    ```html
    <img
      src="/bai1/icon1/envelope-solid.svg"
      width="12"
      alt="email"
      style="border: 0.5px solid black"
    />
    ```

  - Không nên để value mặc định cho input, điều đó sẽ khiến trải nghiệm người dùng giảm

    - Không nên set màu chữ của input quá chìm so với màu sẽ khiến người dùng gặp khó khăn trong thao tác nhập, làm giảm trải nghiệm người dùng.

  - Input nhập email nên sử dụng type là `email` thay vì `text`

    ```html
    <style>
      input {
        color: silver;
      }
    </style>
    <div><input type="text" write="your email" value="enter email" /></div>
    ```

    - Đề xuất sửa thành:

    ```html
    <style>
      input {
        color: black;
      }
    </style>
    <div><input type="email" placeholder="Enter Email" /></div>
    ```

- [x] [Bài 2](https://github.com/chinam197/baitapbuoi1.git)

  - Các title trong cùng 1 list cùng cấp là cùng 1 tầng ý nghĩa.
    ```html
    <h1>UI/UX Design</h1>
    <h2>Web Development</h2>
    ...
    <h2>Digital marketing</h2>
    ```
    - Đề xuất sửa thành:
    ```html
    <h2>UI/UX Design</h2>
    <h2>UI/UX</h2>
    ...
    <h2>Digital marketing</h2>
    ```
  - Không nên sử dụng đường dẫn `/path` vì sẽ gây ra một số lỗi khi chạy ở môi trường khác.
  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.
    - Thuộc tính border không nên sử dụng cho thẻ img. Vì thuộc tính này đã được cảnh báo là sẽ bị loại bỏ trong tương lai.
    - Tất cả các img đều cần có thuộc tính bắt buộc là alt. Thuộc tính này sẽ được hiển thị khi ảnh không thể hiển thị.

    ```html
    <li><img src="/bai2/icon/display-solid.svg" width="16" height="16" /></li>
    ```

    - Đề xuất sửa thành:

    ```html
    <li><img src="/bai2/icon/display-solid.svg" width="16" alt="display" /></li>
    ```

  - Nên gom nhóm các box cùng 1 tầng ý nghĩa vào 1 thẻ `li` để đúng về semantic hơn.

- [x] [Bài 3](https://github.com/chinam197/baitapbuoi1.git)

  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.

    ```html
    <h1>HEADER</h1>
    <h2>SIDEBAR</h2>
    <h3 style="font-size: 30px  ;">FOOTER</h3>
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

    - Cần chú ý về format, cấu trúc và các thẻ html. Thẻ `H3` không tồn tại trong HTML.

  - Phần title chính nên sử dụng thẻ `h1` thay vì `h2`

    ```html
    <h2 style="font-size: 30px;">
      <a
        href="https://plo.vn/vong-xoay-cao-toc-34500-ti-sut-lun-qua-muc-post502947.html"
        >Vòng xoay cao tốc 34.500 tỉ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h2>
    ```

    - Đề xuất sửa thành:

    ```html
    <h1>
      <a
        href="https://plo.vn/vong-xoay-cao-toc-34500-ti-sut-lun-qua-muc-post502947.html"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Nên làm lại và sửa theo các đề xuất trên.

  \* Lưu ý: Code thiếu format, format lại toàn bộ code sao cho dễ đọc, dễ nhìn hơn.

## [Trung Kiên](https://github.com/KIENTT99/F8-Fullstack-k4)

- [x] [Bài 1](https://github.com/KIENTT99/F8-Fullstack-k4)
  - Bài làm tốt \*
  - Thuộc tính `type="Email"` không tồn tại trong HTML, nên sử dụng `type="email"` thay vì `type="Email"`
  - Thẻ script để import kit fontawesome nên để ở trong head hoặc body, không có thẻ script nào nên để ở ngoài thẻ head và body.
  - Sai layout khi mà button nằm cùng hàng so với input. Như vậy là sai layout với bản mẫu. Có thể cho button ở 1 hàng mới và cách input 1 khoảng cách:
    ```html
    <div style="margin-top: 16px">
      <button>REQUEST INVITE</button>
    </div>
    ```
- [x] [Bài 2](https://github.com/KIENTT99/F8-Fullstack-k4)

  - Bài làm rất tốt \*

- [x] [Bài 3](https://github.com/KIENTT99/F8-Fullstack-k4)
  - Các phần `header`, `sidebar`,`footer` không phải là một tiêu đề, chúng chỉ để hiển thị đoạn chữ thể hiện `placeholder` cho người dùng.
    ```html
    <h2>HEADER</h2>
    <h3>SIDERBA</h3>
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
  - Phần title chính nên sử dụng thẻ `h1` thay vì `h3`
    ```html
    <h3>
      <a
        href="https://zingnews.vn/vong-xoay-cao-toc-34500-ty-sut-lun-qua-muc-can-300-ngay-khac-phuc-post889222.html"
      >
        Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục
      </a>
    </h3>
    ```
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a
        href="https://zingnews.vn/vong-xoay-cao-toc-34500-ty-sut-lun-qua-muc-can-300-ngay-khac-phuc-post889222.html"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```
  - Trong HTML Semantic, heading h4 phải là một heading thuộc cấp con của heading h3. Vì vậy, không thể lấy heading h4 bao bọc tất cả content còn lại.
- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm rất nhiều vào HTML semantic để bài làm tốt hơn.

## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-1)

- [x] [Bài 1](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-1)

  - Bài làm rất tốt \*

- [x] [Bài 2](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-1)

  - Bài làm rất tốt \*

  - Tên folder `img` là chưa hợp lý với một folder chứa nhiều ảnh => đổi tên folder thành `images` hoặc `imgs`

- [x] [Bài 3](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-1)
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
- Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Trần Quý](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_1)

- [x] [Bài 1](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_1)

  - Bài làm rất tốt \*
  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img
      src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
      title="mail"
      alt="mail icon"
      width="20px"
      height="20px"
    />
    ```

    - Đề xuất sửa thành:

    ```html
    <img
      src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
      title="mail"
      alt="mail icon"
      width="20px"
    />
    ```

  - Thẻ `br` chỉ được sử dụng để ngắt dòng một đoạn văn. Không phải để ngắt dòng một phần tử trong HTMl.
    ```html
    <br />
    <br />
    ```
  - Nếu muốn các phần tử ở trên 1 dòng mới và thêm khoảng cách giữa các phần tử, nên sử dụng thuộc tính margin hoặc padding thay vì sử dụng thẻ `br`

    ```html
    <div style="margin-top: 16px">
      <button>REQUEST INVITE</button>
    </div>
    ```

  - Input nhập email nên sử dụng type là `email` thay vì `text`

    ```html
    <input type="text" name="" id="" placeholder="Enter Email" />
    ```

    - Đề xuất sửa thành:

    ```html
    <input type="email" name="" id="" placeholder="Enter Email" />
    ```

  - Nên chú ý thêm vào thẻ meta title vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng

- [x] [Bài 2](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_1)

  - Bài làm rất tốt \*
  - Nên chú ý thêm vào thẻ meta title vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng
  - Chỉ nên có 1 thẻ `h1` trong một trang web. Nên sử dụng thẻ `h2` thay vì `h1` cho các tiêu đề phụ.

    ```html
    <h1>UI/UX Design</h1>
    <h1>Web Development</h1>
    ...
    <h1>Digital marketing</h1>
    ```

    - Đề xuất sửa thành:

    ```html
    <h2>UI/UX Design</h2>
    <h2>UI/UX</h2>
    ...
    <h2>Digital marketing</h2>
    ```

  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

  - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

  ```html
  <img
    src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
    alt="camera"
    height="20px"
    width="20px"
  />
  ```

  - Đề xuất sửa thành:

  ```html
  <img
    src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
    alt="camera"
    width="20px"
  />
  ```

- [x] [Bài 3](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_1)

  - Bài làm tốt
  - Nên chú ý thêm vào thẻ meta title vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng

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

  - Phần title chính nên sử dụng thẻ `h1` thay vì `a>strong`

    ```html
    <a target="_blank" href=""
      ><strong
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc
        phục</strong
      ></a
    >
    ```

    - Thẻ a có thuộc tính href bắt buộc phải có giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Cần chú ý thêm một chút vào các thẻ semantic để bài làm tốt hơn.

## [chiến đặng](https://github.com/f8githubdemodilam/f8-fullstack/blob/main/day1)

- [x] [Bài 1](https://github.com/f8githubdemodilam/f8-fullstack/blob/main/day1)

  - Thẻ `p` chỉ sử dụng để thể hiện một đoạn text, đoạn văn. Không được sử dụng để bao bọc một thẻ khác.

    ```html
    <p><input type="button" value="REQUESTINVITE" /></p>
    ```

    - Đề xuất sửa thành:

    ```html
    <div style="margin-top: 16px">
      <input type="button" value="REQUESTINVITE" />
    </div>
    ```

  - Cần chú ý hơn vào meta title vì nó đóng vai trò quan trọng trong SEO và trải nghiệm người dùng

- [x] [Bài 2](https://github.com/f8githubdemodilam/f8-fullstack/blob/main/day1)
  - Bài làm rất khó hiểu.
  - Nên format lại code.
  - Nên xem lại các vị trí đóng, mở thẻ của thẻ `li` sao cho phù hợp
  - Code lại.
- [x] [Bài 3](https://github.com/f8githubdemodilam/f8-fullstack/blob/main/day1)

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

  - Phần title chính nên sử dụng thẻ `h1` thay vì `a`

    ```html
    <div class="tex-no">
      <a target="_blank" href=""
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </div>
    ```

    - Thẻ a có thuộc tính href bắt buộc phải có giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:

    ```html
    <h1>
      <a target="_blank" href="#!"
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</a
      >
    </h1>
    ```

- Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần chú ý thêm nhiều vào các thẻ semantic, quy tắc đóng, mở thẻ, cấu trúc thẻ trong trang HTML để bài làm tốt hơn.

  \* Lưu ý: Không nên gửi link commit, vì làm vậy rất khó xem và tốn thời gian review hơn.

## [Lê Đình Hùng](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/bai1)

- [x] [Bài 1](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/bai1)

  - Không nên set cả width và height cho ảnh, nên chỉ set một trong hai thuộc tính đó.

    - Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính width và height, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

    ```html
    <img
      src="https://w7.pngwing.com/pngs/807/26/png-transparent-envelope-mail-icon-envelope-miscellaneous-angle-text-thumbnail.png"
      alt=""
      width="20px"
      height="20px"
    />
    ```

    - Đề xuất sửa thành:

    ```html
    <img
      src="https://w7.pngwing.com/pngs/807/26/png-transparent-envelope-mail-icon-envelope-miscellaneous-angle-text-thumbnail.png"
      alt=""
      width="20px"
    />
    ```

  - Thẻ `br` chỉ được sử dụng để ngắt dòng một đoạn văn. Không phải để ngắt dòng một phần tử trong HTMl.
    ```html
    <br />
    <br />
    ```
  - Nếu muốn các phần tử ở trên 1 dòng mới và thêm khoảng cách giữa các phần tử, nên sử dụng thuộc tính margin hoặc padding thay vì sử dụng thẻ `br`

    ```html
    <div style="margin-top: 16px">
      <input type="submit" value="REQUEST INVITE" />
    </div>
    ```

  - Phần input nhập email nên sử dụng type là `email` thay vì `text`

    ```html
    <input type="text" name="" id="" placeholder="Enter Email" />
    ```

    - Đề xuất sửa thành:

    ```html
    <input type="email" name="" id="" placeholder="Enter Email" />
    ```

- [x] [Bài 2](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/bai1)
  - Nên xem lại cấu trúc của thẻ `ul>li`, xem lại cấu trúc đóng mở thẻ `li` hợp lý hơn.
  - Code lại phần item 2.
  - Ngoài ra thì hướng đi, cách làm, cách chọn thẻ semantic tốt.
- [x] [Bài 3](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/bai1)
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
  - Phần title chính nên sử dụng thẻ `h1` thay vì `a`
    ```html
    <a target="_blank" href=""
      ><b
        >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc phục</b
      ></a
    >
    ```
    - Thuộc tính href trong thẻ `a` bắt buộc phải có giá trị, nếu không có gì, nên để là `#` hoặc `#!`
    - Đề xuất sửa thành:
    ```html
    <h1>
      <a target="_blank" href="#!"
        ><b
          >Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khắc
          phục</b
        ></a
      >
    </h1>
    ```
- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý và luyện tập thêm về cấu trúc đóng, mở thẻ phù hợp.
