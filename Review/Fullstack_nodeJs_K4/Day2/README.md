# Dương đánh giá bài học viên

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_2)

    Sớm nhất *

- [x] [Bài 1](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_2)

  Bài làm tốt

  Các title trong bảng `table` nên sử dụng thẻ `th` để thể hiện thay cho `h3`

  ```html
  <td>
    <h3>...</h3>
    <input type="..." placeholder="..." />
  </td>
  ```

---

- [x] [Bài 2](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_2)

  Bài làm tốt \*

  Phần hiển thị kết quả không phải là một tiêu đề. không nên cho vào thẻ `th`

  ```html
  <th colspan="4" style="text-align: right">
    <b style="font-size: 70px">9+9</b>
  </th>
  ```

  Thẻ `th` mặc định đã in đậm, không cần thêm `b` vào

  Đề xuất sửa thành:

  ```html
  <td colspan="4" style="text-align: right; font-size: 70px">9+9</td>
  ```

---

- [x] [Bài 3](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_2)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_2)

  Bài làm rất tốt \*

---

- [x] [Bài 5](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_2)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý thêm một chút về semantic trong `table` là được.

## [Nguyễn Hưng Tuân ✅](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-2)

- [x] [Bài 1](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-2)

  Bài làm tốt

  Phần import `style.css` nhưng không có file `style.css`

  ```html
  <link rel="stylesheet" href="./css/style.css" />
  ```

  Layout chưa đúng với bản mẫu.

  ![Nguyễn Hưng Tuân](assets/nguyen_hung_tuan.png)

---

- [x] [Bài 2](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-2)

  Bài làm tốt \*

  Phần import `style.css` nhưng không có file `style.css`

  ```html
  <link rel="stylesheet" href="./css/style.css" />
  ```

---

- [x] [Bài 3](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-2)

  Bài làm tốt \*

  Phần import `style.css` nhưng không có file `style.css`

  ```html
  <link rel="stylesheet" href="./css/style.css" />
  ```

  Phần input nhập email nên sử dụng `type-"email"` để kiểm tra định dạng email

  ```html
  <input type="text" placeholder="* Enter your email address" />
  ```

---

- [x] [Bài 4](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-2)

  Bài làm tốt \*

  Thuộc tính `alt` trong thẻ img là để mô tả hình ảnh cho người dùng khi hình ảnh không hiển thị được và mô tả cho các bộ máy tìm kiếm về ảnh. Nên sử dụng `title` để hiển thị tên của hình ảnh

  Ở trường hợp này, là một list các bài viết, nên sử dụng tiêu đề bài viết cho alt

  ```html
  <img src="./images/..." alt="Tiêu đề bài viết." />
  ```

  Không nên sử dụng ảnh có `src` mã hóa base64 vì sẽ làm tăng dung lượng của trang web,không tận dụng được cache của trình duyệt, làm giảm tốc độ tải trang, ảnh hưởng đến trải nghiệm người dùng, đặc biệt là người dùng truy cập bằng 3G, 4G.

  Với dev thì việc sử dụng ảnh base64 sẽ làm src code khó hiểu, khó bảo trì, khó sửa lỗi.

  Tuy nhiên trong một số trường hợp, như ảnh nhỏ, ít dùng, thì có thể sử dụng ảnh base64 để giảm lượt request tới server.

---

- [x] [Bài 5](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-2)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, chỉ cần chú ý chỉn chu, có thêm kỹ năng self-test là được.

## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_2)

- [x] [Bài 1](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_2)

  Bài làm tốt \*

  Cần format lại code cho tốt hơn, code quá xấu.

---

- [x] [Bài 2](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_2)

  Bài làm tốt \*

  Cần format lại code cho tốt hơn, code quá xấu.

---

- [x] [Bài 3](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_2)

  Thẻ `p` chỉ được sử dụng khi có nội dung văn bản, không được sử dụng để bao bọc các thành phần không phải là văn bản.

  ```html
  <p>
    <span>
      <button>Send message</button>
    </span>
    <b>* Please fill all require form field, thanks!</b>
  </p>
  ```

  Đề xuất sửa thành:

  ```html
  <div>
    <button>Send message</button>
    <span>* Please fill all require form field, thanks!</span>
  </div>
  ```

---

- [x] [Bài 4](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- [x] [Bài 5](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_2)

  Bài làm tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý về format code, semantic dể bài làm được tốt hơn.

## [Tuan Kiet Hoang](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-02)

- [x] [Bài 1](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-02)

  Bài làm tốt \*

  Các title trong bảng `table` nên sử dụng thẻ `th` để thể hiện thay cho `h3`

  ```html
  <td>
    <h3>...</h3>
    <input type="..." value="..." />
  </td>
  ```

  Không nên để value mặc định cho input vì sẽ làm cho người dùng khó nhập dữ liệu. Nên để `placeholder` thay cho `value`
  Đề xuất sửa thành:

  ```html
  <th>...</th>
  <td>
    <input type="..." placeholder="..." />
  </td>
  ```

  Đặt tên class rất khó hiểu.

  Thuộc tính `for` trong label dùng để liên kết với `id` của input, select, textarea. Nên đặt `id` cho các thành phần đó.

  ```html
  <label for="country"></label>
  <select class="slt" name="country" id="">
    <option value="united kingdom">United Kingdom</option>
  </select>
  ```

---

- [x] [Bài 2](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-02)

  Bài làm tốt \*

  Chưa tự test lại trước khi nộp bài, các phần tử chưa được đóng mở đúng cách.

  ```html
  <td>7</th>
  ```

---

- [x] [Bài 3](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-02)

  Bài làm rất tốt \*

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra định dạng email

  ```html
  <input type="text" placeholder="* Enter your email address" />
  ```

---

- [x] [Bài 4](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-02)

  Sử dụng đường dẫn tuyệt đối cho ảnh làm cho ở các môi trường khác nhau sẽ không hiển thị được ảnh.

  ```html
  <img src="/IMG/CLIMATE CHANGE.png" width="100px" alt="" />
  ```

  Thuộc tính `alt` trong thẻ img là để mô tả hình ảnh cho người dùng khi hình ảnh không hiển thị được và mô tả cho các bộ máy tìm kiếm về ảnh. Nên sử dụng `title` để hiển thị tên của hình ảnh

  Không nên sử dụng tên có ký tự đặc biệt đặt cho file, folder, ảnh, vì sẽ gây ra lỗi khi truy cập vào các môi trường khác nhau.

  Đề xuất sửa thành:

  ```html
  <img src="../../IMG/CLIMATE-CHANGE.png" width="100px" alt="CLIMATE CHANGE" />
  ```

---

- [x] [Bài 5](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-02)

  Bài làm tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý chỉn chu hơn, chú ý hơn đến bài giảng trên lớp. Cần chú ý self-test để bài làm được tốt hơn.

## [Lê Đình Hùng](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_2)

- [x] [Bài 1](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_2)

  Bài làm rất tốt \*

---

- [x] [Bài 2](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_2)

  Bài làm rất tốt \*

  Thẻ `th` mặc định đã có style `text-align: center`, không cần thêm style vào.

---

- [x] [Bài 3](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_2)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_2)

  Bài làm tốt \*

  Thuộc tính `alt` trong thẻ img là để mô tả hình ảnh cho người dùng khi hình ảnh không hiển thị được và mô tả cho các bộ máy tìm kiếm về ảnh. Nên sử dụng `title` để hiển thị tên của hình ảnh

  ```html
  <img src="./img/AVATAR.jpg" alt="" />
  ```

  Đề xuất sửa thành:

  ```html
  <img src="./img/AVATAR.jpg" title="AVATAR" />
  ```

---

- [x] [Bài 5](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_2)

  Bài làm tốt \*

  Phần tiêu đề trong `footer` nên sử dụng thẻ `heading` thay vì sử dụng `span`

  ```html
  <b><span>About us</span></b>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý một chút về semantic để bài làm được chuẩn hơn.

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day02)

- [x] [Bài 1](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day02)

  Bài làm tốt \*

  Cần chú ý hơn đến phần meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Các phần text tương ứng với các input không phải là môt tiêu đề, đơn giản chỉ là một nhãn label để người dùng biết được nội dung của input. Nên sử dụng thẻ `label` thay cho `h2`

  ```html
  <h2>...</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <label for="id_input"><b>...</b></label>
  ```

  Cần phân tích kỹ hơn về giao diện mẫu, phần button submit là một nút chứ không phải chỉ là một `div`

  ```html
  <div
    style="
          width: 20%;
          height: 40px;
          background-color: cornflowerblue;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-top: 20px;
        "
  >
    <p style="color: white">SEND ME FREE COFFEE</p>
  </div>
  ```

---

- [x] [Bài 2](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day02)

  Bài làm rất tốt \*

  Cần chú ý hơn đến phần meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Các phần nút có font-weight đậm hơn, có thể sử dụng thẻ `<b>` để bọc

---

- [x] [Bài 3](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day02)

  Bài làm tốt \*

  Chưa có kỹ năng self-test, chưa tự test lại trước khi nộp bài.

  ```html
  <input type="text" , placeholder="*Enter your full name" />
  ...
  <input type="email", placeholder="*Enter your email address">
  ...
  <input type="text", placeholder="*Enter your subject">
  ...
  <textarea name="" id="" cols="50" rows=10">*Your message here</textarea>
  ```

---

- [x] [Bài 4](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day02)

  Bài làm tốt \*

  Cần chú ý hơn đến phần meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Không nên sử dụng `img` có `src` mã hóa base64 vì sẽ làm tăng dung lượng của trang web,không tận dụng được cache của trình duyệt, làm giảm tốc độ tải trang, ảnh hưởng đến trải nghiệm người dùng, đặc biệt là người dùng truy cập bằng 3G, 4G.

  Với dev thì việc sử dụng ảnh base64 sẽ làm src code khó hiểu, khó bảo trì, khó sửa lỗi.

  Tuy nhiên trong một số trường hợp, như ảnh nhỏ, ít dùng, thì có thể sử dụng ảnh base64 để giảm lượt request tới server.

  Thuộc tính `alt` trong thẻ img là để mô tả hình ảnh cho người dùng khi hình ảnh không hiển thị được và mô tả cho các bộ máy tìm kiếm về ảnh. Nên sử dụng `title` để hiển thị tên của hình ảnh

  ```html
  <img class="image" src="data:image/png;base64,iV...=" alt="" />
  ```

  Đề xuất sửa thành:

  ```html
  <img class="image" src="./images/CLIMATE-CHANGE.png" title="CLIMATE CHANGE" />
  ```

---

- [x] [Bài 5](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day02)

  Bài làm tốt \*

  Cần chú ý hơn đến phần meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Phần icon trong list được thể hiện như một đường dẫn, nên sử dụng thẻ `a` để bao bọc icon

  ```html
  <li><img src="../imageANDicon/FB.png" alt="" /></li>
  ```

  Đề xuất sửa thành:

  ```html
  <li>
    <a href="#"><img src="../imageANDicon/FB.png" alt="" /></a>
  </li>
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý một chút về semantic để bài làm được chuẩn hơn.

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_2)

- [x] [Bài 1](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- [x] [Bài 2](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_2)

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra định dạng email

  ```html
  <input type="text" placeholder="*Enter your email address" />
  ```

  Đề xuất sửa thành:

  ```html
  <input type="email" placeholder="*Enter your email address" />
  ```

---

- [x] [Bài 4](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_2)

  Đặt tên folder cần có ý nghĩa và hợp lý hơn, tránh sai chính tả.

  Sai chính tả, chỉ lưu 1 ảnh thì chỉ là `image`

  - `inmages` => `image`

---

- [x] [Bài 5](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chỉn chu hơn trong bài, chú ý hơn vào các tiểu tiết để bài làm tốt hơn nữa.

## [Nguyễn Chi Nam](https://github.com/chinam197/baitapbuoi2.git)

- [x] [Bài 1](https://github.com/chinam197/baitapbuoi2.git)

  Bài làm không tốt \*

  Code quá xấu, không có format, rất khó đọc.

  Đặt tên class quá bừa bãi, không có ý nghĩa và khó hiểu.

  Sử dụng bừa bãi các `inline-style` và `internal-style`

  Các `style` chung nhau nên sử dụng 1 `class` chung, không nên tách ra thành nhiều `style` cho các `id`

  Các thẻ `tr`, `td` phải được đặt trong thẻ `table`

  ```html
  <tr width="20%">
    <div>
      <h2 style="height:10px;">...</h2>
      <td>
        <input type="text" placeholder="..." id="..." />
      </td>
    </div>
  </tr>
  ```

  Các text tương ứng với các input không phải là môt tiêu đề, đơn giản chỉ là một nhãn label để người dùng biết được nội dung của input. Nên sử dụng thẻ `label` thay cho `h2`

  ```html
  <h2>...</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <label for="id_input"><b>...</b></label>
  ```

---

- [x] [Bài 2](https://github.com/chinam197/baitapbuoi2.git)

  Nên gộp các cột với nhau và set thuộc tính `align` là right chứ không phải dùng thẻ `pre` để giữ định dạng.

  Các code cần được format lại. Rất khó nhìn.

  Nên chú ý nhiều hơn tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 3](https://github.com/chinam197/baitapbuoi2.git)

  Nên chú ý hơn vào thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Phần field không phải là một email, không được để `type="email"`

  ```html
  <td><input type="email" placeholder="* Enter your full name" /></td>
  ...
  <td><input type="email" placeholder="* Enter your check box" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="text" placeholder="* Enter your full name" /></td>
  ...
  <td><input type="text" placeholder="* Enter your check box" /></td>
  ```

  Phần giao diện mẫu, dòng text hướng dẫn không được để in đậm, vì vậy, không được sử dụng thẻ `b`

  ```html
  <span><b>*Please fill all require form field, thanks</b></span>
  ```

  Các class, id nên đặt chuẩn xác hơn, không nên sử dụng tiếng việt và không được viết sai chính tả.

  Vẫn cần phải format lại code, rất khó nhìn.

---

- [x] [Bài 4](https://github.com/chinam197/baitapbuoi2.git)

  Quá khó đọc. Cần format lại code.

  Không có thẻ HTML nào là thẻ `H2` và `P`. Thay thế bằng thẻ `h2` và `p`

  Đặt tên className cho chuẩn xác, không đặt quá khó hiểu.

  Trong thẻ `ul` chỉ có thẻ `li` được phép sử dụng, không được sử dụng thẻ `div`

---

- [x] [Bài 5](https://github.com/chinam197/baitapbuoi2.git)

  Các title trong footer là cùng một tầng độ quan trọng, nên sử dụng thẻ `h2` cho cả 3 title

  ```html
  <h1>About us</h1>
  <h2>Quick links</h2>
  <h2><b>Follow US</b></h2>
  ```

  Thuộc tính `href` trong thẻ `a` là để định nghĩa đường dẫn, không được để trống.

  ```html
  <a href="">...</a>
  ```

  Đề xuất sửa thành:

  ```html
  <a href="#">...</a>
  ```

  Phần icon trong list được thể hiện như một đường dẫn, nên sử dụng thẻ `a` để bao bọc icon

  Vẫn cần format lại code và chú ý đến meta title.

---

- Đánh giá chung bài tập về nhà: Bài làm rất ẩu. Không chú ý tới format code, semantic, meta title. Cần chú ý hơn vào bài làm để code được tốt hơn.

  \* Lưu ý: Buổi tiếp theo lên bàn đầu ngồi.

## [Vinh Nguyễn](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day02)

- [x] [Bài 1](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day02)

  Bài làm rất tốt \*

  Cần chú ý hơn vào trình bày code, chú ý các tiểu tiết trong code

  ```html
  <td><input type="text" id="first_name" placeholder="John " /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="text" id="first_name" placeholder="John" /></td>
  ```

---

- [x] [Bài 2](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day02)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day02)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day02)

  Bài làm rất tốt \*

---

- [x] [Bài 5](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day02)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Chỉ cần chú ý một chút về format code là được.

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_2)

- [x] [Bài 1](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_2)

  Bài làm rất tốt \*

  Có thể sử dụng thẻ `label` thay vì `span` thì sẽ tốt hơn.

---

- [x] [Bài 2](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_2)

  Bài làm rất tốt \*

  Có thể sử dụng thẻ `span` hoặc `ul>li` thì sẽ tốt hơn `div`(division) => (phân vùng)

---

- [x] [Bài 3](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- [x] [Bài 5](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_2)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt. Chỉ cần chú ý một chút về cách sử dụng thẻ HTML là được.

## [Trung Kiên](https://github.com/KIENTT99/F8-Fullstack-k4/blob/main/ngay_2)

- [x] [Bài 1](https://github.com/KIENTT99/F8-Fullstack-k4/blob/main/ngay_2)

  Bài làm tốt \*

  Không có thẻ nào là thẻ `<P>` trong HTMl. Thay vào đó, sử dụng thẻ `<p>` để thể hiện đoạn văn bản.

  Các tiêu đề tương ứng của cột || hàng nên sử dụng thẻ `<th>` thay vì `<h3>`

---

- [x] [Bài 2](https://github.com/KIENTT99/F8-Fullstack-k4/blob/main/ngay_2)

  Bài làm tốt

  Các nút và phần result không phải là tiêu đề của bảng, nên không được sử dụng thẻ `<th>`

  ```html
  <th colspan="4" align="right"><span style="font-size: 30px;">9-9</span></th>
  ...
  <th><span style="font-size: 40px;">x</span></th>
  <th><span style="font-size: 40px;">x</span></th>
  <th><span style="font-size: 40px;">x</span></th>
  <th><span style="font-size: 40px;">x</span></th>
  ```

  Đề xuất sửa thành:

  ```html
  <td colspan="4" align="right"><span style="font-size: 30px;">9-9</span></td>
  ...
  <td><span style="font-size: 40px;">x</span></td>
  <td><span style="font-size: 40px;">x</span></td>
  <td><span style="font-size: 40px;">x</span></td>
  <td><span style="font-size: 40px;">x</span></td>
  ```

---

- [x] [Bài 3](https://github.com/KIENTT99/F8-Fullstack-k4/blob/main/ngay_2)

  Các input không phải nhập email không được sử dụng `type="email"`

  Thẻ `<p>` chỉ được sử dụng để thể hiện một đoạn văn bản. Không sử dụng để bọc các thành phần không phải thể hiện chữ.

  ```html
  <p>
    <button>Send message</button
    ><span>*Please fill all require form field,thanks!</span>
  </p>
  ```

  Đề xuất sửa thành:

  ```html
  <div>
    <button>Send message</button>
    <span>*Please fill all require form field,thanks!</span>
  </div>
  ```

---

- [x] [Bài 4](https://github.com/KIENTT99/F8-Fullstack-k4/blob/main/ngay_2)

  Vì đây là tiêu đề của các bài viết trong list bài viết, độ quan trọng của nó chỉ sau tiêu đề chính. Nên sử dụng `h2` thay vì `h3`

  Không nên set cả `width` và `height` cho ảnh, việc đó co thể làm méo ảnh, khi muốn thay đổi kích thước ảnh thì phải thay đổi 2 cạnh.

  Sai chính tả `HEALTH CẢE` => `HEALTH CARE`

---

- [x] [Bài 5](https://github.com/KIENTT99/F8-Fullstack-k4/blob/main/ngay_2)

  Không có thẻ nào là thẻ `<P>` trong HTML. Thay vào đó, sử dụng thẻ `<p>` để thể hiện đoạn văn bản.

  Các phần text và icon được gạch chân dưới là thể hiện một đường dẫn, không nên sử dụng thẻ `u` mà nên sử dụng thẻ `a` để bao bọc.

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Chỉ cần chú ý một chút về cách sử dụng thẻ HTML là được.

## [Trần Quý](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_2)

- [x] [Bài 1](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_2)

  Bài làm tốt

  Nên chú ý nhiều hơn tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Vì đây là một trang web nói về form đặt hàng, phần title chính nên là `h1` thay vì `h2>b`

  ```html
  <h2><b>Try a free sample</b></h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>Try a free sample</h1>
  ```

  Phần thuộc tính `for` trong label nhận vào duy nhất 1 giá trị là `id` của input, select, textarea.

  ```html
  <label for="First name">First name</label>
  ```

  Đề xuất sửa thành:

  ```html
  <label for="first_name">First name</label>
  ```

  Các phần label đó là các tiêu đề của cột tương ứng. nên sử dụng thẻ `th` thay vì `td`

  ```html
  <td><label for="First name">First name</label></td>
  ...
  ```

  Đề xuất sửa thành:

  ```html
  <th><label for="First name">First name</label></th>
  ```

---

- [x] [Bài 2](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_2)

  Bài làm tốt

  Thiếu thuộc tính `style`

  ```html
  <table " width="50%" border="1" cellspacing="0" cellspading="10px">
  ```

  Nên chú ý nhiều hơn tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 3](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_2)

  Bài làm tốt \*

  Thuộc tính width="5" nếu để trong thẻ table có nghĩa là thẻ table có chiều rộng là 5px. Nên sử dụng thuộc tính `style` để set chiều rộng cho table. Như vậy là không đúng. Làm sao mà cả một bảng lại rộng có 5px được.

  Nên chú ý nhiều hơn tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 4](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_2)

  Bài làm tốt

  Làm gì có thẻ nào là thẻ `<P>` trong HTML?

  Cần chú ý nhiều hơn tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 5](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

  Cần format lại code một chút.

---

- Đánh giá chung bài tập về nhà: Bài làm tốt. Chỉ cần chú ý một chút về cách sử dụng thẻ HTML chuẩn semantic và đúng cấu trúc là được.

## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-2)

- [x] [Bài 1](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 2](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 3](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 4](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 5](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt!

## [Hà Long Việt](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_2)

- [x] [Bài 1](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 2](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 3](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 4](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_2)

  Bài làm rất tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Phần tiêu đề của list bài viết là quan trọng chỉ sau tiêu đề chính. Nên sử dụng `h2` thay vì `p`

  ```html
  <p><b>...</b></p>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>...</h2>
  ```

  Thuộc tính `alt` trong thẻ img là để mô tả hình ảnh cho người dùng khi hình ảnh không hiển thị được và mô tả cho các bộ máy tìm kiếm về ảnh. Nên sử dụng `title` để hiển thị tên của hình ảnh

---

- [x] [Bài 5](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_2)

  Bài làm không tốt \*

  Cần chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Sử dụng quá nhiều thẻ `h1` trong 1 trang web.

  Nên sử dụng `h2` thay vì `h1` ở các tiêu đề trong footer.

  Không nên viết `svg` vào trong file html sẽ khiến file html trở nên dài, khó đọc, khó bảo trì. Nên viết `svg` vào một file svg sau đó sử dụng thẻ `img` để gọi đến file svg đó.

  Các icon được thể hiện như một đường dẫn, nên sử dụng thẻ `a` để bao bọc icon

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên phần bài 5 cần chú ý, làm lại bài 5.
