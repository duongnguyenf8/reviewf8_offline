# Dương review bài học viên FE K3.

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-2)

    Sớm nhất *

- [x] [Bài 1](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-2)

  Bài làm rất tốt \*

  Vì chưa học CSS nên có thể sử dụng `th` để gộp hàng tạo khoảng cách giữa các cột

  Nếu đã biết CSS, có thể sửa như sau:

  ```html
  <style>
    input {
      width: 80%; /*Sửa từ 100 về 80% để tạo khoảng trống ở giữa */
    }
    #_country {
      width: 80%;
    }
  </style>

  <th>First name</th>
  <!-- <th width="10%" rowspan="8"></th> -->
  <!-- Ẩn cột th thừa -->
  <th>Last name</th>
  ```

  Nếu có thể, sửa lại màu text bên trong `button` để giống bản mẫu hơn, sửa lại kích thước của `select`, hiện tại chiều cao và chiều rộng của `select` đều đang lệch so với các `input`.

---

- [x] [Bài 2](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-2)

  Bài làm tốt
  Sử dụng thẻ `th` bừa bãi, sai semantic.

  ```html
  <th class="first-row" colspan="4">9+9</th>
  <th>1</th>
  <th>2</th>
  <th>3</th>
  <th>+</th>
  ...
  <th>C</th>
  <th>0</th>
  <th>=</th>
  <th>/</th>
  ```

  Tất cả các cột trên đều không phải là một tiêu đề, vì vậy. Nên sử dụng `td` thay cho `th`
  Đề xuất sửa thành:

  ```html
  <td class="first-row" colspan="4">9+9</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>+</td>
  ...
  <td>C</td>
  <td>0</td>
  <td>=</td>
  <td>/</td>
  ```

---

- [x] [Bài 3](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-2)

  Bài làm tốt \*

  Các cột không có thì có thể bỏ qua, không cần thêm `td` vào

  ```html
  <td><input type="text" placeholder="* Enter your subject" /></td>
  <td></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="text" placeholder="* Enter your subject" /></td>
  ```

  Phần `textarea` không nên đưa giá trị mặc định vào, nên để trống để người dùng tự nhập và chỉ đưa vào placeholder để cho người dùng biết cần nhập gì.

  ```html
  <textarea name="message">* Your message here </textarea>
  ```

  Đề xuất sửa thành:

  ```html
  <textarea name="message" placeholder="* Your message here"></textarea>
  ```

---

- [x] [Bài 4](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-2)

  Bài làm rất tốt \*

---

- [x] [Bài 5](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-2)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài tập làm rất tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-2)

- [x] [Bài 1](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-2)

  Bài làm rất tốt \*

  Nên chú ý thêm về phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

---

- [x] [Bài 2](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-2)

  Bài làm rất tốt \*

  Nên chú ý thêm về phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

---

- [x] [Bài 3](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-2)

  Bài làm rất tốt \*

  Nên chú ý thêm về phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

---

- [x] [Bài 4](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-2)

  Vì đây là một list bài viết, chú ý dấu chấm của list ở đầu mỗi list.

  ![Ảnh Bài 2](assets/bai2.png)

  Nên sử dụng thẻ `ul>li` để làm list, thay vì không có như hiện tại.

---

- [x] [Bài 5](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-2)

  Bài làm tốt

  Vì các phần này là các tiêu đề trong section `footer`, nên sử dụng thẻ `heading` thay vì thẻ `span` như hiện tại

  ```html
  <span>About Us</span>
  <span>Quick Links</span>
  <span>Follow Us</span>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About Us</h2>
  <h2>Quick Links</h2>
  <h2>Follow Us</h2>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Nguyễn Khắc Tú](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_2)

- [x] [Bài 1](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_2)

  Bài làm tốt

  Các phần title của các cột || hàng tương ứng nên sử dụng thẻ `th` thay vì `td`

  ```html
  <td><b>First Name</b></td>
  <td><b>Last Name</b></td>
  <td><b>Email address</b></td>
  <td><b>Address</b></td>
  <td><b>City</b></td>
  <td><b>State</b><span> (optional)</span></td>
  <td><b>Zip code</b></td>
  <td><b>Country</b></td>
  ```

  Đề xuất sửa thành:

  ```html
  <th align="left">First Name</th>
  <th align="left">Last Name</th>
  <th align="left">Email address</th>
  <th align="left">Address</th>
  <th align="left">City</th>
  <th align="left">State<span> (optional)</span></th>
  <th align="left">Zip code</th>
  <th align="left">Country</th>
  ```

  Phần chọn state trong bản mẫu là một `select`, nên sử dụng thẻ `select` thay vì `input`

  ```html
  <td><input type="text" placeholder="" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td>
    <select name="state" id="state">
      <option value="state">State</option>
      <option value="state">State</option>
      <option value="state">State</option>
      <option value="state">State</option>
    </select>
  </td>
  ```

---

- [x] [Bài 2](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_2)

  Bài làm tốt \*

  Trong bản mẫu, phần hiển thị kết quả && phép tính không có in đậm. Vì vậy, không nên thêm thẻ `<b>` vào

  ```html
  <td colspan="4" style="text-align: right"><b>9 x 9</b></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td colspan="4" style="text-align: right">9 x 9</td>
  ```

---

- [x] [Bài 3](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_2)

  Bài làm không tốt \*

  Thẻ `<br>` chỉ được sử dụng để ngắt dòng trong một đoạn văn, không được sử dụng để tạo khoảng trống giữa các phần tử.

  ```html
  <input type="text" placeholder="* Enter your email address" />
  <br />
  <input ... />
  <br />
  <textarea ...></textarea>
  <br />
  <button>send message</button>
  ```

  Phần input để nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

---

- [x] [Bài 4](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_2)

  Bài làm rất tốt \*

---

- [x] [Bài 5](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_2)

  Bài làm tốt

  Thuộc tính `href` trong thẻ `a` bắt buộc có value. Nếu không có value thì có thể sử dụng `#` || `#!`

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Đỗ Ngọc Tiến](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-2)

- [x] [Bài 1](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-2)

  Thuộc tính `for` thẻ `label` sử dụng để liên kết với `id` của `input` || `select` || `textarea` để khi click vào `label` thì sẽ focus vào `input` || `select` || `textarea` tương ứng.

  ```html
  <label for="">Email address</label>
  <input type="text" placeholder="john@example.com" />
  ```

  Đề xuất sửa thành:

  ```html
  <label for="email">Email address</label>
  <input type="text" id="email" placeholder="john@example.com" />
  ```

  Input sử dụng để nhập email nên có `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  Sai chính tả `qptional` => `optional`

  Phần chọn country là một `select`, nên sử dụng thẻ `select` thay vì `input`

  ```html
  <label for="">Country</label>
  <input type="text" placeholder="United Kingdom" />
  ```

  Đề xuất sửa thành:

  ```html
  <label for="country">Country</label>
  <select name="country" id="country">
    <option value="country">United Kingdom</option>
    <option value="country">United Kingdom</option>
    <option value="country">United Kingdom</option>
    <option value="country">United Kingdom</option>
  </select>
  ```

  Layout chưa giống với bản mẫu, có phần hơi xấu. Nên xem lại phần layout.

---

- [x] [Bài 2](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-2)

  Bài làm tốt \*

  Nên chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng

---

- [x] [Bài 3](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-2)

  Bài làm tốt

  Nên chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Code không format rất khó nhìn.

---

- [x] [Bài 4](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-2)

  Bài làm tốt

  Nên chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Chưa rõ ý đồ của thẻ `div` đang bao bọc thẻ `img`

  ```html
  <div>
    <img src="https://..." width="80px" height="100px" alt="CLIMATE CHANGE" />
  </div>
  ```

  Không nên set cả chiều rộng và chiều cao cho img vì có thể làm ảnh bị méo, sai tỷ lệ, khi muốn thay đổi kích thước ảnh thì phải tính toán và thay đổi cả 2.

  Các phần title trong list các bài viết là các title quan trọng chỉ sau title chính. Nên sử dụng thẻ `h2` thay vì `h3`

  ```html
  <h3>...</h3>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>>...</h2>
  ```

  Code không format rất khó nhìn.

---

- [x] [Bài 5](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-2)

  Nên chú ý tới thẻ meta title vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Các phần title chính trong từng phần của `footer` nên sử dụng các thẻ `heading` thay vì thẻ `span`

  ```html
  <span>About us</span>
  <span>Quick Links</span>
  <span>Follow Us</span>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  <h2>Quick Links</h2>
  <h2>Follow Us</h2>
  ```

  Các icon trong bài là một đường dẫn, nên sử dụng thẻ `a` để bao bọc các icon

  ```html
  <li><i class="fa-brands fa-facebook"></i></li>
  ```

  Đề xuất sửa thành:

  ```html
  <li>
    <a href="#"><i class="fa-brands fa-facebook"></i></a>
  </li>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm chưa tốt, có nhiều lỗi về semantic, cách sử dụng thẻ, cách sử dụng thuộc tính. Nên xem lại phần layout và cách sử dụng thẻ.

## [Nguyen Tuan Anh](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day2)

- [x] [Bài 1](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day2)

  Các phần title của các cột || hàng tương ứng nên sử dụng thẻ `th` thay vì `td`

  ```html
  <td>First name</td>
  <td>Last name</td>
  <td>Email address</td>
  <td>Address</td>
  <td>City</td>
  <td>State (optional)</td>
  <td>ZIP code</td>
  <td>Country</td>
  ```

  Đề xuất sửa thành:

  ```html
  <th>First name</th>
  <th>Last name</th>
  <th>Email address</th>
  <th>Address</th>
  <th>City</th>
  <th>State (optional)</th>
  <th>ZIP code</th>
  <th>Country</th>
  ```

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  Phần chọn Country là một `select`, nên sử dụng thẻ `select` thay vì `input`

  ```html
  <td>
    <input type="text" />
  </td>
  ```

  Cần chú ý thêm về phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Cần format lại code, quá xấu, quá khó đọc.

---

- [x] [Bài 2](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day2)

  Thẻ `th` chỉ được sử dụng khi đó là một tiêu đề của cột || hàng tương ứng. Không được sử dụng để thể hiện data của các cột. Việc thể hiện đó đã được thẻ `td`(table data) thể hiện

  ```html
  <th colspan="4" align="right">9+9</th>
  ...
  <th>x</th>
  <th>x</th>
  <th>x</th>
  <th>x</th>
  ```

  Đề xuất sửa thành:

  ```html
  <td colspan="4" align="right">9+9</td>
  ...
  <td>x</td>
  <td>x</td>
  <td>x</td>
  <td>x</td>
  ```

  Không có file `main.css` ở cùng cấp với file `index.html`, nên không thể sử dụng được file `main.css`

  ```html
  <link rel="stylesheet" href="./main.css" />
  ```

  Cần chú ý hơn vào phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Format lại code, quá xấu, quá khó đọc.

---

- [x] [Bài 3](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day2)

  Phần title chính của trang nên sử dụng `h1` thay vì `h2`

  ```html
  <h2>Get in touch with us by filling contact form below</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>Get in touch with us by filling contact form below</h1>
  ```

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <input type="text" name="" id="" placeholder="* Enter your email address" />
  ```

  Các attribute `name` && `id` nên có giá trị, không nên để trống hoặc nếu không có thì nên xóa đi.

  Đặt tên className không hợp lý:

  ```html
  <div class="info1">...</div>
  <div class="info1">...</div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="info">...</div>
  <div class="info">...</div>
  ```

  Cần chú ý hơn vào phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Format lại code, quá xấu, quá khó đọc.

---

- [x] [Bài 4](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day2)

  Thẻ `h1` được dùng để thể hiện tiêu đề **QUAN TRỌNG NHẤT!** của trang web, không được sử dụng cho nhiều tiêu đề trên một trang web.

  ```html
  <h1>CLIMATE CHANGE</h1>
  <h1>CLIMATE CHANGE</h1>
  <h1>CLIMATE CHANGE</h1>
  <h1>CLIMATE CHANGE</h1>
  ```

  Trong HTML, không có thẻ nào là thẻ `<P>` cả, chỉ có thẻ `<p>` thôi.

  Cần chú ý thêm về phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Ở các danh sách bài viết, hình ảnh thường để biểu thị cho bài viết đó. Vì vậy, thuộc tính `alt` của `img` nên có giá trị, không nên để trống.

  ```html
  <img src="/Day2/ex4/img/images.jpg" alt="" />
  ```

  Không nên sử dụng đường dẫn `/` vì có thể gây lỗi khi deploy lên server.

  Đề xuất sửa thành:

  ```html
  <img src="./img/images.jpg" alt="CLIMATE CHANGE" />
  ```

  Không có file `main.css` ở cùng cấp với file `index.html`, nên không thể sử dụng được file `main.css`

  ```html
  <link rel="stylesheet" href="./main.css" />
  ```

  Cần chú ý hơn vào phần meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng.

  Format lại code, quá xấu, quá khó đọc.

---

- [x] [Bài 5](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day2)

  Thẻ `h1` được dùng để thể hiện tiêu đề **QUAN TRỌNG NHẤT!** của trang web, không được sử dụng cho nhiều tiêu đề trên một trang web.

  ```html
  <h1>About us</h1>
  <h1>Quick links</h1>
  <h1>Follow Us</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  <h2>Quick links</h2>
  <h2>Follow Us</h2>
  ```

  Thuộc tính `href` trong thẻ `a` bắt buộc có value. Nếu không có value thì có thể sử dụng `#` || `#!`

  ```html
  <li><a href="">...</a></li>
  ```

  Đề xuất sửa thành:

  ```html
  <li><a href="#">...</a></li>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm **KHÔNG TỐT**,
  có nhiều lỗi về semantic, cách sử dụng thẻ, cách sử dụng thuộc tính.
  Nên xem lại phần layout và cách sử dụng thẻ.

  \* Lưu ý: CODE LẠI TOÀN BỘ. KHÔNG SỬA LẠI CODE CŨ.

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day2)

- [x] [Bài 1](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day2)

  Bài làm tốt \*

  Phần button submit không phải là một tiêu đề trong bảng. Không nên bọc bằng thẻ `th`

  ```html
  <th><button type="submit">SEND ME FREE COFEE</button></th>
  ```

  Sai chính tả `COFEE` => `COFFEE`

  Đề xuất sửa thành:

  ```html
  <td>
    <button type="submit">SEND ME FREE COFFEE</button>
  </td>
  ```

  Nếu muốn `submit` được `form` thì `.form-input` cần là thẻ form và các field cần có thuộc tính `name`

  ```html
  <div class="form-input">...</div>
  ```

  Đề xuất sửa thành:

  ```html
  <form class="form-input">...</form>
  ```

---

- [x] [Bài 2](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day2)

  Bài làm tốt \*

  Phần hiển thị kết quả && phép tính không phải là một tiêu đề của bảng. Không nên bọc bằng thẻ `th`

  ```html
  <th colspan="4">9 + 9</th>
  ```

  Đề xuất sửa thành:

  ```html
  <td colspan="4">9 + 9</td>
  ```

---

- [x] [Bài 3](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day2)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day2)

  Vì đây là một list bài viết, các title trong list là các title quan trọng chỉ sau title chính. Nên sử dụng thẻ `h2` thay vì `h4`

  ```html
  <h4>...</h4>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>...</h2>
  ```

---

- [x] [Bài 5](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day2)

  Bài làm tốt \*
  Các title trong section `footer` là ngang hàng với title chính trong các section. Nên sử dụng thẻ `h2-h3` thay vì `h4`

  ```html
  <h4>Quick Links</h4>
  <h4>About us</h4>
  <h4>Follow Us</h4>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main/Day-2)

- [x] [Bài 1](https://github.com/saiduii/F8-FE-K3/tree/main/Day-2)

  Bài làm tốt \*

  Các tiêu đề của bảng nên sử dụng thẻ `th` để bọc sau đó sử dụng thuộc tính `align="left"` để căn trái thay vì `td`

  ```html
  <tr>
    <td><b>...</b></td>
    <td><b>...</b></td>
  </tr>
  ```

  Đề xuất sửa thành:

  ```html
  <tr>
    <th align="left">...</th>
    <th align="left">...</th>
  </tr>
  ```

---

- [x] [Bài 2](https://github.com/saiduii/F8-FE-K3/tree/main/Day-2)

  Bài làm tốt \*

  Phần hiển thị kết quả && phép tính không có in đậm, không nên sử dụng thẻ `<b>` để bao bọc

---

- [x] [Bài 3](https://github.com/saiduii/F8-FE-K3/tree/main/Day-2)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/saiduii/F8-FE-K3/tree/main/Day-2)

  Vì đây là một list bài viết, các title trong list là các title quan trọng chỉ sau title chính. Nên sử dụng thẻ `h2` thay vì `h3`

  ```html
  <h3>...</h3>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>...</h2>
  ```

  Thuộc tính `alt` của `img` trong trường hợp này là một title của bài viết, nên có giá trị, không nên để trống.

  ```html
  <img src="..." alt="" />
  ```

---

- [x] [Bài 5](https://github.com/saiduii/F8-FE-K3/tree/main/Day-2)

  Bài làm tốt \*

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, giao diện nhưng vẫn có thể sửa lại được.

  \* Lưu ý: Không nên đặt tên các bài tập theo dạng như thế, nên để theo số. Làm như vậy rất khó kiểm soát và review

## [Nguyễn Đình Khánh](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day2)

- [x] [Bài 1](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day2)

  Bài làm tốt

  Các phần `First Name`, `Email Address` chỉ là các nhãn của input tương ứng, không phải là một title. Không được sử dụng thẻ `heading` ở đây. Nên sử dụng thẻ span

  ```html
  <h2 style="font-size: 16px; padding-top: 16px;">First name</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <span style="font-size: 16px; padding-top: 16px;"><b>First name</b></span>
  ```

  Phần chọn `Country` là một `select`, nên sử dụng thẻ `select` thay vì `input`

  ```html
  <input type="text" style="padding: 8px; width: 100%;" />
  ```

  Đề xuất sửa thành:

  ```html
  <select name="country" id="country" style="padding: 8px; width: 100%;">
    <option value="country">Country</option>
    <option value="country">Country</option>
    <option value="country">Country</option>
    <option value="country">Country</option>
  </select>
  ```

---

- [x] [Bài 2](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day2)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day2)

  Bài làm tốt

  Phần nhập `message` là một trường nhập to, nhập được nhiều dòng. Nên sử dụng `textarea` thay vì `input`

  ```html
  <input
    style="padding: 0px 4px 64px; width: 100%;"
    class="col"
    type="text"
    placeholder="* Your message here"
  />
  ```

  Đề xuất sửa thành:

  ```html
  <textarea
    style="padding: 0px 4px 64px; width: 100%;"
    class="col"
    placeholder="* Your message here"
  ></textarea>
  ```

---

- [x] [Bài 4](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day2)

  Không có file `style.css` ở cùng cấp với `index.html` nên không thể sử dụng được file `style.css`

  Sử dụng quá nhiều `h1` trong bài. Thẻ `h1` được dùng để thể hiện tiêu đề **QUAN TRỌNG NHẤT!** của trang web, không được sử dụng cho nhiều tiêu đề trên một trang web.

  ```html
  <h1 style="font-size: 30px;">...</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h2 style="font-size: 30px;">...</h2>
  ```

  Phần `alt` của thẻ `img` trong trường hợp này là để thể hiện mô tả về hình ảnh tiêu đề bài viết. Nên có giá trị, không nên để trống.

  ```html
  <img
    style="width: 40px; height: 40px; margin-top: 16px;"
    src="./img/android.png"
    alt=""
  />
  ```

  Đề xuất sửa thành:

  ```html
  <img
    style="width: 40px; height: 40px; margin-top: 16px;"
    src="./img/android.png"
    alt="Tieu De Bai Viet"
  />
  ```

---

- [x] [Bài 5](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day2)

  Sử dụng quá nhiều thẻ `h1` trong bài. Thẻ `h1` được dùng để thể hiện tiêu đề **QUAN TRỌNG NHẤT!** của trang web, không được sử dụng cho nhiều tiêu đề trên một trang web.

  ```html
  <h1 style="font-size: 30px;">...</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h2 style="font-size: 30px;">...</h2>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm không tốt, có nhiều lỗi về semantic, cách sử dụng thẻ, cách sử dụng thuộc tính. Nên xem lại phần layout và cách sử dụng thẻ.

  \* Lưu ý: Code lại bài 4, 5. Không sửa code cũ.

## [Nguyen Van Hai](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day2)

- [x] [Bài 1](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day2)

  Bài làm tốt

  Phần title chính của trang nên sử dụng `h1` thay vì `h2`

  ```html
  <h2>...</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>...</h1>
  ```

  Nên sử dụng `tr>td || tr>th` để giúp luyện tập tốt hơn về cách chia layout của table.

---

- [x] [Bài 2](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day2)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day2)

  Bài làm tốt

  Phần title chính của trang nên sử dụng `h1` thay vì `h2`

  ```html
  <h2>...</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>...</h1>
  ```

---

- [x] [Bài 4](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day2)

  Bài làm tốt \*

  Phần `alt` của `img` để mô tả bài viết cho các bộ máy tìm kiếm. Không nên để là `"logo"`

  ```html
  <img src="imgs/..." alt="logo" />
  ```

  Đề xuất sửa thành:

  ```html
  <img src="imgs/..." alt="CLIMATE CHANGE" />
  ```

---

- [x] [Bài 5](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day2)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Nguyen Le Quyen (FPL HN)](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

- [x] [Bài 1](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  Bài làm rất tốt \*

  Cần chú ý hơn vào các thẻ meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

---

- [x] [Bài 2](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  Bài làm tốt \*

  Thẻ `th` chỉ được sử dụng khi đó là một tiêu đề của cột || hàng tương ứng. Không được sử dụng để thể hiện data của các cột. Việc thể hiện đó đã được thẻ `td`(table data) thể hiện

  ```html
  <th class="first" colspan="4">9+9</th>
  ...
  <tr>
    <th>x</th>
    <th>x</th>
    <th>x</th>
    <th>x</th>
  </tr>
  ```

  Đề xuất sửa thành:

  ```html
  <td class="first" colspan="4">9+9</td>
  ...
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
  ```

---

- [x] [Bài 3](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  Bài làm tốt \*

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <input type="text" placeholder="* Enter your email address" />
  ```

  Đề xuất sửa thành:

  ```html
  <input type="email" placeholder="* Enter your email address" />
  ```

---

- [x] [Bài 4](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  Sử dụng quá nhiều thẻ `h1` trong bài. Thẻ `h1` được dùng để thể hiện tiêu đề **QUAN TRỌNG NHẤT!** của trang web, không được sử dụng cho nhiều tiêu đề trên một trang web.

  ```html
  <h1>CLIMATE CHANGE</h1>
  <h1>...</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>CLIMATE CHANGE</h2>
  <h2>...</h2>
  ```

  Thuộc tính `alt` của `img` trong trường hợp này là để thể hiện mô tả về hình ảnh tiêu đề bài viết. Nên có giá trị, không nên để trống.

  ```html
  <img src="images/anh1.jpg" alt="" />
  ```

  Đề xuất sửa thành:

  ```html
  <img src="images/anh1.jpg" alt="CLIMATE CHANGE" />
  ```

---

- [x] [Bài 5](https://github.com/NguyenLeQuyen2004/f8-frontend-k3)

  Bài làm tốt

  Các tiêu đề trong từng phần của `footer` là các title có chung tầng ý nghĩa, không nên sử dụng bừa bãi các thẻ `h1`, `h2`, `h3`

  ```html
  <h1>About us</h1>
  <h2>Quick links</h2>
  <h3>Follow Us</h3>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  <h2>Quick links</h2>
  <h2>Follow Us</h2>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3)

- [x] [Bài 1](https://github.com/truongmanhhung58/F8-FrontEnd-k3)

  Thẻ `<p>` được sử dụng để thể hiện đó là 1 đoạn văn bản, không phải là để bao bọc các thẻ khác.

  ```html
  <p></p>
  <pre>
  Sign up to get a coupon you can redeem at your nearest Dancing
  Goat cafe for a sample of the Comlombia Carlos Imbarchi coffe. We'll
  also make sure you don't miss out on news introducing the new 
  coffees that we add to our store regularly.
              </pre
  >
  ```

  Đề xuất sửa thành:

  ```html
  <p>
    Sign up to get a coupon you can redeem at your nearest Dancing <br />
    Goat cafe for a sample of the Comlombia Carlos Imbarchi coffe. We'll <br />
    also make sure you don't miss out on news introducing the new <br />
    coffees that we add to our store regularly.
  </p>
  ```

  Các phần tiêu đề của bảng nên sử dụng thẻ `th` để bọc sau đó sử dụng thuộc tính `align="left"` để căn trái thay vì `td`

  ```html
  <tr>
    <td><label for="#">Firstname</label></td>
    <td><label for="#">Lastname</label></td>
  </tr>
  ...
  <tr>
    <td><label for="#">Firstname</label></td>
    <td><label for="#">Lastname</label></td>
  </tr>
  ```

  Đề xuất sửa thành:

  ```html
  <tr>
    <th align="left"><label for="#">Firstname</label></th>
    <th align="left"><label for="#">Lastname</label></th>
  </tr>
  ...
  <tr>
    <th align="left"><label for="#">Firstname</label></th>
    <th align="left"><label for="#">Lastname</label></th>
  </tr>
  ```

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <td><input type="text" placeholder="john@example.com" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="email" placeholder="john@example.com" /></td>
  ```

---

- [x] [Bài 2](https://github.com/truongmanhhung58/F8-FrontEnd-k3)

  Bài làm tốt \*

  Thẻ `th` chỉ được sử dụng khi đó là một tiêu đề của cột || hàng tương ứng. Không được sử dụng để thể hiện data của các cột. Việc thể hiện đó đã được thẻ `td`(table data) thể hiện

  ```html
  ...
  <tr>
    <th>x</th>
    <th>x</th>
    <th>x</th>
    <th>x</th>
  </tr>
  ```

  Đề xuất sửa thành:

  ```html
  ...
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
  ```

---

- [x] [Bài 3](https://github.com/truongmanhhung58/F8-FrontEnd-k3)

  Bài làm tốt \*

  Phần input nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <td><input type="text" placeholder="*Enter your email address" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="email" placeholder="*Enter your email address" /></td>
  ```

  Phần input nhập message là một trường nhập to, nhập được nhiều dòng. Nên sử dụng `textarea` thay vì `input`

  ```html
  <td><input type="text" id="id1" placeholder="*Your message here" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><textarea id="id1" placeholder="*Your message here"></textarea></td>
  ```

---

- [x] [Bài 4](https://github.com/truongmanhhung58/F8-FrontEnd-k3)

  Thuộc tính `alt` như đã nói trên lớp, là một thuộc tính **BẮT BUỘC** của thẻ `img`.

  ```html
  <img src="./images/yasuo1.jpg" />
  ```

  Đề xuất sửa thành:

  ```html
  <img src="./images/yasuo1.jpg" alt="Yasuo" />
  ```

  Trong HTML không có thẻ nào là thẻ `<P>` cả, chỉ có thẻ `<p>` thôi.

  ```html
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  ```

---

- [x] [Bài 5](https://github.com/truongmanhhung58/F8-FrontEnd-k3)

  Bài làm tốt

  Các tiêu đề trong từng phần của `footer` là các title có chung tầng ý nghĩa, không nên sử dụng bừa bãi các thẻ `h1`, `h2`

  ```html
  <h1>About us</h1>
  <h2>Quick links</h2>
  <h2>Follow Us</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  <h2>Quick links</h2>
  <h2>Follow Us</h2>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập không tốt, có nhiều lỗi về semantic, cách sử dụng thẻ, cách sử dụng thuộc tính. Nên xem lại phần layout và cách sử dụng thẻ.

  \* Lưu ý: Code lại bài 1, 4. Không sửa code cũ.

## [thuy nguyen](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

- [x] [Bài 1](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

  Bài làm tốt \*

  Phần title chính của trang nên sử dụng `h1` thay vì `h2`

  ```html
  <h2>Try a free sample</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>Try a free sample</h1>
  ```

---

- [x] [Bài 2](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

  Bài làm tốt \*

  Phần title chính của trang nên sử dụng `h1` thay vì `h2`

  ```html
  <h2>Get in touch with us by filling contact form below</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>Get in touch with us by filling contact form below</h1>
  ```

---

- [x] [Bài 4](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

  Phần `alt` của thẻ `img` để khai báo mô tả cho hình ảnh cho các bộ máy tìm kiếm. Không nên để chung chung là `"logo"`.

  ```html
  <img src="./images/logo.png" alt="logo" width="80px" />
  ```

  Đề xuất sửa thành:

  ```html
  <img src="./images/logo.png" alt="Tieu De Bai Viet" width="80px" />
  ```

---

- [x] [Bài 5](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài tập làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Sơn Trần](https://github.com/2003son/F8-FE-K3/tree/main/day2)

- [x] [Bài 1](https://github.com/2003son/F8-FE-K3/tree/main/day2)

  Cần chú ý đến meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Phần tiêu đề của cột || hàng nên sử dụng thẻ `th` để bọc sau đó sử dụng thuộc tính `align="left"` để căn trái thay vì `td`

  ```html
  <td>First name</td>
  <td>Last Name</td>
  ...
  ```

  Đề xuất sửa thành:

  ```html
  <th align="left">First name</th>
  <th align="left">Last Name</th>
  ...
  ```

  Các input nên có thuộc tính `placeholder` để hướng dẫn người dùng nhập vào

  ```html
  <td><input type="text" /></td>
  <td><input type="text" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="text" placeholder="First name" /></td>
  <td><input type="text" placeholder="Last name" /></td>
  ```

  Phần input để nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <td><input type="text" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="email" placeholder="example@email.com" /></td>
  ```

---

- [x] [Bài 2](https://github.com/2003son/F8-FE-K3/tree/main/day2)

  Cần chú ý đến meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Phần text **9 + 9** không phải là một tiêu đề của bảng. Nên không được sử dụng thẻ `h1`

  ```html
  <h1>9 + 9</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <td colspan="4">9 + 9</td>
  ```

  Các nút của bản mẫu có `font-weight` day hơn, nên sử dụng thẻ `<b>` bọc vào để in đậm

  ```html
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
  ```

  Đề xuất sửa thành:

  ```html
  <tr>
    <td><b>x</b></td>
    <td><b>x</b></td>
    <td><b>x</b></td>
    <td><b>x</b></td>
  </tr>
  ```

---

- [x] [Bài 3](https://github.com/2003son/F8-FE-K3/tree/main/day2)

  - Bài làm **KHÔNG TỐT**

  Cần chú ý đến meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  ```html
  <title>...</title>
  ```

  Phần input để nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <td><input type="text" placeholder="*Enter your email address" /></td>
  ```

  Đề xuất sửa thành:

  ```html
  <td><input type="email" placeholder="*Enter your email address" /></td>
  ```

  HỌC bao nhiêu buổi rồi mà bọc `<p>` vào `<button>` như thế này...

  ```html
  <p>
    <button>Send message</button>*Please fill all require form field, thanks
  </p>
  ```

  Đề xuất sửa thành:

  ```html
  <button>Send message</button>
  <span>*Please fill all require form field, thanks</span>
  ```

---

- [x] [Bài 4](https://github.com/2003son/F8-FE-K3/tree/main/day2)

  Bài làm **KHÔNG TỐT**

  Cần chú ý đến meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

  Sai toàn bộ cấu trúc thẻ `ul>li` và cách sử dụng thuộc tính `alt` của thẻ `img`

  - Trong thẻ `ul` chỉ được sử dụng thẻ `li` để bọc các phần tử con. Không được sử dụng thẻ `...` để bọc các phần tử con.
  - Thuộc tính `alt` của thẻ `img` trong trường hợp này là để thể hiện mô tả về hình ảnh tiêu đề bài viết. Nên có giá trị, không nên để trống.
  - Các tiêu đề của bài viết là các title quan trọng, nên sử dụng thẻ `h2` thay vì `strong`

  ```html
  <li><img src="anh-h.jpg" alt="" style="width: 100px;" /></li>
  <strong>CILMATE CHANGE</strong>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
    aspernatur quisquam est provident nostrum hic vel laborum. Sequi consectetur
    id, itaque maiores optio voluptatibus quod exercitationem provident sint ab
    rerum?
  </p>
  ```

---

- [x] [Bài 5](https://github.com/2003son/F8-FE-K3/tree/main/day2)

  Bài làm **KHÔNG TỐT**

  Thiếu thẻ `heading` trong bài, nên sử dụng thẻ `h2` thay vì `strong`

  ```html
  <strong>...</strong>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>...</h2>
  ```

---

- Đánh giá chung bài tập về nhà: Bài tập quá ẩu, không chỉn chu, thiếu format code, thiếu semantic, thiếu thẻ, thiếu thuộc tính. Nên xem lại phần layout và cách sử dụng thẻ.

  \* Lưu ý: Code lại bài 3, 4, 5. Không sửa code cũ.

## [Khôi Lê Hoàng](https://github.com/F8study/BaiTapDay2)

    * Học viên muộn 1 buổi.

- [x] [Bài 1](https://github.com/F8study/BaiTapDay2)

  Các phần title của cột || hàng nên sử dụng thẻ `th` để bọc sau đó sử dụng thuộc tính `align="left"` để căn trái thay vì `td`

  ```html
  <td>first name</td>
  <td>last name</td>
  ```

  Đề xuất sửa thành:

  ```html
  <th align="left">first name</th>
  <th align="left">last name</th>
  ```

  Các phần field nhập nên thể hiện bằng `input` thay vì text thuần

  ```html
  <tr>
    <td>John</td>
    <td>smith</td>
  </tr>
  ```

  Đề xuất sửa thành:

  ```html
  <tr>
    <td><input type="text" placeholder="John" /></td>
    <td><input type="text" placeholder="smith" /></td>
  </tr>
  ```

---

- [x] [Bài 2](https://github.com/F8study/BaiTapDay2)

  Phần text **9 + 9** không phải là một tiêu đề của bảng. Nên không được sử dụng thẻ `th`

  ```html
  <th colspan="4">9+9</th>
  ```

  Đề xuất sửa thành:

  ```html
  <td colspan="4">9+9</td>
  ```

---

- [x] [Bài 3](https://github.com/F8study/BaiTapDay2)

  Phần heading của trang nên sử dụng `h1` thay vì `h2`

  ```html
  <h2>Get the invite</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>Get the invite</h1>
  ```

  Không nên sử dụng thẻ `p` để ngắt dòng và tạo khoảng cách

  ```html
  <p></p>
  ```

  Đề xuất sửa thành:

  ```html
  <button style="margin-top: 16px">REQUEST INVITE</button>
  ```

---

- [x] [Bài 4](https://github.com/F8study/BaiTapDay2)

  Sai yêu cầu đề bài

---

- [x] [Bài 5](https://github.com/F8study/BaiTapDay2)

  Chưa làm

---

- Đánh giá chung bài tập về nhà: Cần chú ý cố gắng nhiều hơn.

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day2)

- [x] [Bài 1](https://github.com/countduck4819/f8-frontend/tree/main/Day2)

  Bài làm rất tốt \*

  Cần chú ý đến meta title, vì nó rất quan trọng trong SEO và trải nghiệm người dùng

---

- [x] [Bài 2](https://github.com/countduck4819/f8-frontend/tree/main/Day2)

  Bài làm tốt \*

  Phần hiển thị phép tính không phải là một tiêu đề của bảng. Không nên sử dụng `th`

  ```html
  <th colspan="4">9 + 9</th>
  ```

---

- [x] [Bài 3](https://github.com/countduck4819/f8-frontend/tree/main/Day2)

  Bài làm rất tốt \*

  Phần input để nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không.

  ```html
  <td>
    <input
      type="text"
      style="margin-left: 0px;"
      placeholder="* Enter your email address"
    />
  </td>
  ```

  Đề xuất sửa thành:

  ```html
  <td>
    <input
      type="email"
      style="margin-left: 0px;"
      placeholder="* Enter your email address"
    />
  </td>
  ```

---

- [x] [Bài 4](https://github.com/countduck4819/f8-frontend/tree/main/Day2)

  Bài làm tốt \*
  Phần thuộc tính `alt` ở đây để mô tả hình ảnh cho các bộ máy tìm kiếm. Nên có giá trị, không nên để trống.
  Nên đặt tên cho hình ảnh theo nội dung của hình ảnh đó.

  ```html
  <img src="./img/img.jpg" alt="" />
  ```

  Đề xuất sửa thành:

  ```html
  <img src="./img/hinh_anh_gi_do.jpg" alt="Tieu De Bai Viet" />
  ```

---

- [x] [Bài 5](https://github.com/countduck4819/f8-frontend/tree/main/Day2)

  Bài làm tốt \*

  Các tiêu đề trong từng phần của `footer` là các title có chung tầng ý nghĩa. Nên sử dụng thẻ `h2` thay vì `span`

  ```html
  <span><b>About us</b></span>
  <span><b>Quick links</b></span>
  <span><b>Follow Us</b></span>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  <h2>Quick links</h2>
  <h2>Follow Us</h2>
  ```

  Việc viết svg vào html làm cho code trở nên khó đọc, khó hiểu. Nên viết svg vào file riêng và sử dụng thẻ `img` để gọi đến file svg đó.

  ```html
  <a href="#!"><svg>...</svg></a>
  ```

  Đề xuất sửa thành:

  ```html
  <a href="#!"><img src="./img/svg.svg" alt="svg" /></a>
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.

## [Anh Kien Dang](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-2)

- [x] [Bài 1](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-2)

  Bài làm tốt

  Các tiêu đề tương ứng của các cột || hàng nên sử dụng thẻ `th` để bọc sau đó sử dụng thuộc tính `align="left"` để căn trái thay vì `td`

  ```html
  <td><b>First name</b></td>
  ```

  Đề xuất sửa thành:

  ```html
  <th align="left">First name</th>
  ```

---

- [x] [Bài 2](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-2)

  Phần text **9 + 9** không phải là một tiêu đề của bảng. Nên không được sử dụng thẻ `th`

  ```html
  <th class="first_row" colspan="4">9 + 9</th>
  ```

  Đề xuất sửa thành:

  ```html
  <td class="first_row" colspan="4">9 + 9</td>
  ```

---

- [x] [Bài 3](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-2)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-2)

  Sử dụng quá nhiều thẻ `h1` trong bài. Thẻ `h1` được dùng để thể hiện tiêu đề **QUAN TRỌNG NHẤT!** của trang web, không được sử dụng cho nhiều tiêu đề trên một trang web.

  ```html
  <h1 class="de_muc">...</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h2 class="de_muc">...</h2>
  ```

---

- [x] [Bài 5](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-2)

  Bài làm tốt

  Các tiêu đề trong từng phần của `footer` là các title có chung tầng ý nghĩa. Nên sử dụng thẻ `h2` thay vì `strong`

  ```html
  <strong>About us</strong>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>About us</h2>
  ```

  Thuộc tính `href` trong thẻ `a` là để định nghĩa đường dẫn. Nên có giá trị, không nên để trống.

  ```html
  <a href="">...</a>
  ```

  Đề xuất sửa thành:

  ```html
  <a href="#!">...</a>
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, chỉ có một số lỗi nhỏ về semantic, nhưng vẫn có thể sửa lại được.
