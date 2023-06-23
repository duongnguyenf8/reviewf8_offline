# Dương đánh giá bài học viên

## [Đỗ Khắc Quân](https://github.com/QuanIce/F8-FullStack-HomeWork/tree/main/Day02)

    Sớm nhất.

- [x] [Bài 1](https://github.com/QuanIce/F8-FullStack-HomeWork/blob/main/Day02/ex01.html)

  - Sai layout khi chia bằng table
    ```html
    <tr>
      <th>First Name</th>
      <td><input type="text" placeholder="First Name" /></td>
      <th>Last Name</th>
      <td><input type="text" placeholder="Last Name" /></td>
    </tr>
    ```
    - Việc code như này sẽ khiến `<th>` và `<td>` nằm chung một hàng. Điều đó là sai layout
    - Đề xuất sửa thành:
    ```html
    <tr>
      <td><b>First Name</b></th>
      <td><b>Last Name</b></th>
    </tr>
    <tr>
      <td><input type="text" placeholder="First Name" /></td>
      <td><input type="text" placeholder="Last Name" /></td>
    </tr>
    ```
  - Việc sử dụng style này cho button là thừa và không cần thiết

    - .button1 không cần thiết vì có thể dùng chung vào class .button

    ```css
    .button {
      text-decoration: none;
      display: inline-block;
    }
    ... .button1 {
      background-color: #008cba;
    }
    ```

    - Đề xuất sửa thành:

    ```css
    .button {
      text-decoration: none;
      display: inline-block;
      background-color: #008cba;
    }
    ```

- [x] [Bài 2](https://github.com/QuanIce/F8-FullStack-HomeWork/blob/main/Day02/ex02.html)
  - Bài làm tốt \*
  - Phần màu aqua là một màu rất sáng. Nếu đi với màu xám nhạt thì sẽ không tạo được sự tương phản, gây khó chịu cho mắt của người dùng. Đề xuất sửa thành màu xanh dương nhạt
    ```css
    input[type="button"] {
      background-color: #008cba;
    }
    ```
  - Nếu tất cả input đều border none thì không nên viết lại cho từng input mà nên viết chung cho tất cả input
    ```css
    input {
      border: none;
    }
    ```
- [x] [Bài 3](https://github.com/QuanIce/F8-FullStack-HomeWork/blob/main/Day02/ex03.html)
  - Sai chính tả `Forrm` -> `Form`
  - Phần message là một phần ghi lại lời nhắn và có vùng viết lớn. Không nên sử dụng input với các thuộc tính định dạng size, ... mà nên sử dụng textarea
    ```html
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      placeholder="Message"
    ></textarea>
    ```
- [x] [Bài 4](https://github.com/QuanIce/F8-FullStack-HomeWork/blob/main/Day02/ex04.html)
  - Bài làm tốt \*
  - Theo semantic HTML, nên có thẻ h1>h2>h3>... để phân cấp tiêu đề. Vậy nên nếu các tiêu đề cùng cấp đầu tiên thì nên dùng h2 cho tất cả các tiêu đề cùng cấp đó
    ```html
    <h3>CLIMATE CHANGE</h3>
    <!-- Sửa lại thành -->
    <h2>CLIMATE CHANGE</h2>
    ```
- [x] [Bài 5](https://github.com/QuanIce/F8-FullStack-HomeWork/blob/main/Day02/ex05.html)

  - Không được sử dụng nhiều thẻ h1 trong một trang web. Vì thẻ h1 là tiêu đề chính của trang web. Nếu có nhiều thẻ h1 thì sẽ không biết được tiêu đề chính của trang web là gì

    ```html
    <h1>About Us</h1>
    <!-- ... -->
    <h1>Quick Links</h1>
    <!-- ... -->
    <h1>Follow Us</h1>
    ```

* Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm về cách sử dụng, phân tích các thẻ HTML và các thuộc tính CSS. Cần chú ý thêm về semantic HTML.

## [Nguyễn Thị Tuyết](https://github.com/xanhrii/k2-f8-fullstack-course/tree/master/rii_day02_html)

- [x] [Bài 1](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day02_html/homework_01.html)
  - Bài làm rất tốt\*
  - Nếu có thể sử dụng CSS external thì tốt hơn. Cũng nên hạn chế hoặc cố gắng không dùng inline CSS.
  - Script cũng nên viết ra file riêng để dễ quản lý hơn.
  - Đáng ra tốt hơn nếu có thể chia file và không dùng inline CSS.
- [x] [Bài 2](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day02_html/homework_02.html)
  - Bài làm rất tốt\*
  - Sử dụng inline CSS nên hạn chế.
  - Nên chia file CSS ra riêng để dễ quản lý hơn.
  - Đáng ra tốt hơn nếu có thể chia file và không dùng inline CSS.
    - Có thể viết JS calculate thì tốt hơn.
- [x] [Bài 3](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day02_html/homework_03.html)
  - Bài làm rất tốt\*
  - Nên chia file CSS ra riêng để dễ quản lý hơn.
  - Đáng ra tốt hơn nếu có thể chia file và không dùng inline CSS.
- [x] [Bài 4](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day02_html/homework_04.html)
  - Bài làm rất tốt\*
  - Nên chia file CSS ra riêng để dễ quản lý hơn.
- [x] [Bài 5](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day02_html/homework_05.html)
  - Bài làm rất tốt\*
  - Nên chia file CSS ra riêng để dễ quản lý hơn.

* Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần coi mỗi bài tập là một dự án, nên đưa ra các file css riêng, các folder img riêng cho từng bài

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2)

- [x] [Bài 1](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe1)
  - Bài làm tốt
  - Phần input nhập email nên sử dụng `type="email"` để kiểm tra email nhập vào có đúng định dạng hay không
    ```html
    <input type="text" placeholder="john@example.com" />
    ```
    - Đề xuất sửa thành:
    ```html
    <input type="email" placeholder="john@example.com" />
    ```
  - việc sử dụng thẻ `<h2>` không hoàn toàn sai, nhưng nó không tối ưu trong ngữ cảnh này. Theo nguyên tắc semantic, thẻ `<h2>` nên được sử dụng để xác định tiêu đề cấp 2 cho một phần tử có ý nghĩa ngữ nghĩa cao hơn.
    - Trong form, các mục như "First name", "Last name", "Email address", "City", "Zip code", "Address", "State", và "Country" là nhãn cho các trường input. Để tăng tính semantic, tốt hơn là sử dụng thẻ `<label>` để định nghĩa các nhãn này. Các thẻ `<label>` sẽ gắn kết với các trường input bằng cách sử dụng thuộc tính for và id. Điều này giúp người dùng và các công cụ hỗ trợ hiểu rõ mục đích và quan hệ giữa các phần tử trong form.
    ```html
    <label for="first-name">First name</label>
    <input type="text" id="first-name" placeholder="John" />
    ...
    ```
- [x] [Bài 2](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe2)
  - Bài làm tốt
  - Cần chú ý thêm vào thẻ title của trang web vì chúng đóng vai trò rất quan trọng trong SEO, cũng như giúp người dùng biết được trang web đang hiển thị gì
    ```html
    <title>Document</title>
    ```
  - Sử dụng quá nhiều `th` một cách bất hợp lý trong bài
    ```html
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>+</th>
    </tr>
    ...
    <tr>
      <th>C</th>
      <th>0</th>
      <th>=</th>
      <th>/</th>
    </tr>
    ```
  - Đề xuất sử dụng `td` thay cho `th` trong trường hợp này, sau đó sử dụng thẻ `b` để làm đậm các nút
    ```html
    <tr>
      <td><b>1</b></td>
      <td><b>2</b></td>
      <td><b>3</b></td>
      <td><b>+</b></td>
    </tr>
    ...
    <tr>
      <td><b>C</b></td>
      <td><b>0</b></td>
      <td><b>=</b></td>
      <td><b>/</b></td>
    </tr>
    ```
- [x] [Bài 3](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe3)
  - Bài làm tốt \*
- [x] [Bài 4](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe4)
  - Bài làm tốt
  - Phần icon ở dưới là một icon có thể click vào như một đường dẫn, hay còn gọi là link. Nên sử dụng thẻ `<a>` để định nghĩa
    ```html
    <li>
      <a href="https://www.facebook.com/" target="_blank"
        ><i class="fa-brands fa-facebook-f"></i
      ></a>
    </li>
    ```
- [x] [Bài 5](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe5)

* Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý một chút nhỏ về ngữ nghĩa trong html để tăng tính semantic cho trang web, giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web

## [Tiến Đạt - K2](https://github.com/phamtiendat18/Fullstack-K2/tree/main/Day_02)

- [x] [Bài 1](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_02/ex01.html)

  - Bài làm tốt
  - Sắp xếp cấu trúc HTML quá không hợp lý

    ```html
    <td>
      <div>
        <label for="first_name">
          <b>First name</b> <br /><input type="text" />
        </label>
      </div>
      <div>
        <label for="email">
          <b>Email adress</b> <br /><input type="email" />
        </label>
      </div>
      <div>
        <label for="city"> <b>City</b> <br /><input type="text" /> </label>
      </div>
      <div>
        <label for="zip_code">
          <b>ZIP code</b> <br /><input type="text" />
        </label>
      </div>
    </td>
    ```

    - Nhóm tất cả vào làm một cột td khiến cho cấu trúc HTML không hợp lý, nên sử dụng thẻ `<tr>` để tạo ra một hàng mới, sau đó sử dụng thẻ `<td>` để tạo ra các cột trong hàng đó
    - Thẻ `br` chỉ được dùng để ngắt dòng giữa 2 câu, đoạn văn trong cùng một thẻ. Nên không nên sử dụng nó để ngắt dòng giữa các thẻ khác nhau
    - các phần input nên có thêm placeholder để người dùng biết được nên nhập gì vào

  - Phần `select/option` nên có thêm thuộc tính `value` hợp lý để khi người dùng chọn thì sẽ trả về giá trị của `value` đó
    ```html
    <label for="country">
      <b>Country</b> <br />
      <select name="country" id="country">
        <option value="1">Viet Nam</option>
        <option value="2">Russia</option>
        <option value="3">Laos</option>
        <option value="4">Cuba</option>
      </select>
    </label>
    ```
    - Đề xuất sửa thành:
    ```html
    <label for="country">
      <b>Country</b> <br />
      <select name="country" id="country">
        <option value="Viet Nam">Viet Nam</option>
        <option value="Russia">Russia</option>
        <option value="Laos">Laos</option>
        <option value="Cuba">Cuba</option>
      </select>
    </label>
    ```
  - Việc style cho tất cả các tag như thế này là bất hợp lý, sẽ dễ gây lỗi cho các phần tử khác trong trang
    ```css
    div {
      margin-bottom: 15px;
    }
    body {
      background-color: rgb(228, 230, 233);
    }
    input {
      width: 75%;
      height: 25px;
    }
    button {
      width: 15%;
      height: 35px;
      background-color: rgb(8, 185, 192);
      color: #ffff;
      border: rgb(4, 104, 117);
      font-size: 11px;
    }
    select {
      width: 78%;
      height: 30px;
    }
    ```
    - Đề xuất sử dụng các selector như class, id để style cho các phần tử cụ thể hơn

- [x] [Bài 2](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_02/ex02.html)

  - Bài làm tốt
  - Phần title trang web là rất quan trọng, nên đặt tên cho phù hợp với nội dung trang web vì nó sẽ giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Calculator</title>
    ```
  - Sử dụng quá nhiều thẻ `th` trong bài
    ```html
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>+</th>
    </tr>
    ...
    <tr>
      <th>C</th>
      <th>0</th>
      <th>=</th>
      <th>/</th>
    </tr>
    ```
    - Đề xuất sử dụng `td` thay cho `th` trong trường hợp này, sau đó sử dụng thẻ `b` để làm đậm các nút
    ```html
    <tr>
      <td><b>1</b></td>
      <td><b>2</b></td>
      <td><b>3</b></td>
      <td><b>+</b></td>
    </tr>
    ...
    <tr>
      <td><b>C</b></td>
      <td><b>0</b></td>
      <td><b>=</b></td>
      <td><b>/</b></td>
    </tr>
    ```

- [x] [Bài 3](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_02/ex03.html)

  - Bài làm tốt
  - Phần title trang web là rất quan trọng, nên đặt tên cho phù hợp với nội dung trang web vì nó sẽ giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Get in touch</title>
    ```
  - Sai chính tả ở

    ```html
    <input type="email" placeholder="* Emter your email adress" />
    ```

    - Đề xuất sửa thành:

    ```html
    <input type="email" placeholder="* Enter your email address" />
    ```

- [x] [Bài 4](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_02/ex04.html)

  - Bài làm tốt
  - Phần title trang web là rất quan trọng, nên đặt tên cho phù hợp với nội dung trang web vì nó sẽ giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Article List</title>
    ```
  - Sai chính tả ở
    ```html
    <h2>ECONOMIC OPORTUNITY</h2>
    ```
    - Đề xuất sửa thành:
    ```html
    <h2>ECONOMIC OPPORTUNITY</h2>
    ```

- [x] [Bài 5](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_02/ex05.html)

  - Bài làm tốt
  - Phần title trang web là rất quan trọng, nên đặt tên cho phù hợp với nội dung trang web vì nó sẽ giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>About us</title>
    ```

* Đánh giá chung bài tập về nhà: Bài làm tốt, nên chia các folder riêng cho từng bài để dễ quản lý hơn. Cần chú ý thêm một chút về semantic HTML, giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web

## [Võ Tuấn Duy](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2)

- [x] [Bài 1](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe1)

  - Sai cấu trúc thẻ p:

    ```html
    <p"><b>Email address</b></p>
    <p"><b>Address</b></p>
    ```

    - Sửa lại thành:

    ```html
    <p><b>Email address</b></p>
    <p><b>Address</b></p>
    ```

  - Thẻ input để nhập email nên có type là email để kiểm tra email nhập vào có đúng định dạng hay không

    ```html
    <input size="40" type="text" placeholder="john@example.com" />
    ```

    - Đề xuất sửa thành:

    ```html
    <input size="40" type="email" placeholder="john@example.com" />
    ```

  - Sửa input nhập Country thành một thẻ select cho giống với bản mẫu

    ```html
    <td>
      <p><b>Country</b></p>
      <input size="40" type="text" placeholder="United Kingdom" />
    </td>
    ```

    - Đề xuất sửa thành:

    ```html
    <td>
      <p><b>Country</b></p>
      <select name="country" id="country">
        <option value="Viet Nam">Viet Nam</option>
        <option value="Russia">Russia</option>
        <option value="Laos">Laos</option>
        <option value="Cuba">Cuba</option>
      </select>
    </td>
    ```

  - Không nên sử dụng style inline CSS vì nó sẽ gây khó khăn cho việc quản lý, nên sử dụng CSS external

    ```html
    <div style="width: 100%; background-color: #dddddd">
      ...
      <div style="width: 60%; margin-left: 15px">
        ...
        <div style="margin: 20px">
          ...
          <table style="margin-left: -5px" cellpadding="5"></table>
        </div>
      </div>
    </div>
    ```

    - Đề xuất sửa thành:

    ```html
    <link rel="stylesheet" href="style.css" />
    ```

- [x] [Bài 2](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe2)
  - Bài làm tốt.
  - Thuộc tính CSS `border: 1` là không có giá trị, nên sửa lại thành `border: 1px`
    ```css
    button {
      width: 100%;
      font-weight: bold;
      font-size: 40px;
      border: 1;
      border-color: green;
      cursor: pointer;
    }
    ```
    - Đề xuất sửa thành:
    ```css
    button {
      width: 100%;
      font-weight: bold;
      font-size: 40px;
      border: 1px solid green;
      cursor: pointer;
    }
    ```
  - Để tuân thủ đúng về HTML5, thuộc tính border trong thẻ table hay bất kỳ thẻ nào đều không được hỗ trợ nữa, nên sử dụng thuộc tính border trong CSS
    ```html
    <table border="2"></table>
    ```
    - Đề xuất sửa thành:
    ```css
    table {
      border: 2px solid green;
    }
    ```
- [x] [Bài 3](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe3)

  - Bài làm tốt.
  - Phần css này không rõ ý đồ
    ```css
    .main {
      width: 80%;
    }
    ```

- [x] [Bài 4](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe4)
  - Bài làm tốt\*
  - Phần img này ở trong ngữ nghĩa đề bài là một hình ảnh hiển thị một nội dung gì đó liên quan đến bài viết, vậy là hình ảnh này có nghĩa, không thể sử dụng nullAlt được.
    ```html
    <img
      src="https://fastly.picsum.photos/id/404/200/200.jpg?hmac=7TesL9jR4uM2T_rW-vLbBjqvfeR37MJKTYA4TV-giwo"
      alt=""
    />
    ```
    - Có thể sử dụng tiêu đề của bài viết làm alt cho hình ảnh.
- [x] [Bài 5](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-2/exe5)
  - Bài làm rất tốt\*

* Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút về cấu trúc code để bài tập tốt hơn

## [Bùi Quang Trưởng](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day2)

- [x] [Bài 1](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day2/exe01.html)
  - Bài làm rất tốt \*
  - Các phần title cho các input có thể sử dụng label để link tới các input, điều đó sẽ giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web
    ```html
    <label for="first-name">First name</label>
    <input type="text" id="first-name" placeholder="First name" />
    ```
- [x] [Bài 2](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day2/exe02.html)
  - Bài làm rất tốt \*
  - Hình như code na ná từ thằng chatGPT ??? Phong cách code khác hẳn so với bài trước
    - Các bài trước không hề gom nhóm code, bài này gom tận 2 thằng div main và calculator
- [x] [Bài 3](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day2/exe03.html)

  - Bài làm rất tốt \*

- [x] [Bài 4](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day2/exe04.html)

  - Bài làm rất tốt \*

- [x] [Bài 5](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day2/exe05.html)
  - Bài làm rất tốt \*

* Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Nguyễn Minh Việt - K2](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day2)

- Nên đặt tên theo số bài để thuận tiện trong việc đánh giá bài làm về nhà!

- [x] [Bài 1](https://github.com/nguyenminhviettt/f8_fullstack_K2/blob/main/day_02/form_dat_hang.html)

  - Bài làm tốt
  - Không nên sử dụng một div rỗng như này:
    ```html
    <div></div>
    <button>SEND ME FREE COFFEE</button>
    ```
    - Đề xuất sửa thành:
    ```html
    <div style="margin-top: 16px">
      <button>SEND ME FREE COFFEE</button>
    </div>
    ```
  - Phần `select/option` nên có một value để khi người dùng chọn thì sẽ trả về giá trị của `value` đó
    ```html
    <option value="">United Kingdom</option>
    ```
    - Đề xuất sửa thành:
    ```html
    <option value="United Kingdom">United Kingdom</option>
    ```

- [x] [Bài 2](https://github.com/nguyenminhviettt/f8_fullstack_K2/blob/main/day_02/may_tinh_bo_tui.html)

  - Bài làm tốt
  - Sử dụng quá nhiều thẻ `th` trong bài
    ```html
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>+</th>
    </tr>
    ...
    <tr>
      <th>C</th>
      <th>0</th>
      <th>=</th>
      <th>/</th>
    </tr>
    ```
    - Đề xuất sử dụng `td` thay cho `th` trong trường hợp này, sau đó sử dụng thẻ `b` để làm đậm các nút
    ```html
    <tr>
      <td><b>1</b></td>
      <td><b>2</b></td>
      <td><b>3</b></td>
      <td><b>+</b></td>
    </tr>
    ...
    <tr>
      <td><b>C</b></td>
      <td><b>0</b></td>
      <td><b>=</b></td>
      <td><b>/</b></td>
    </tr>
    ```

- [x] [Bài 3](https://github.com/nguyenminhviettt/f8_fullstack_K2/blob/main/day_02/form_lien_he.html)

  - Bài làm tốt
  - Phần textarea vẫn cùng chức năng với các phần input trên. Nếu có thể đưa lên một `tr` của table thì tốt hơn
  - Không nên để thẻ div rỗng như này:
    ```html
    <div></div>
    <button>Send message</button>
    <span>*Please fill all require form field, thanks!</span>
    ```
    - Đề xuất sửa thành:
    ```html
    <div style="margin-top: 16px">
      <button>Send message</button>
      <span>*Please fill all require form field, thanks!</span>
    </div>
    ```

- [x] [Bài 4](https://github.com/nguyenminhviettt/f8_fullstack_K2/blob/main/day_02/danh_sach_bai_viet.html)

  - Bài làm rất tốt \*
  - Vì đây là một hình ảnh hiển thị một nội dung gì đó liên quan đến bài viết, vậy là hình ảnh này có nghĩa, không thể sử dụng nullAlt được.
    ```html
    <img
      src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
      alt=""
    />
    ```
    - Đề xuất sửa thành:
    ```html
    <img
      src="https://fastly.picsum.photos/id/404/200/200.jpg?hmac=7TesL9jR4uM2T_rW-vLbBjqvfeR37MJKTYA4TV-giwo"
      alt="HEALTH CARE"
    />
    ```

- [x] [Bài 5](https://github.com/nguyenminhviettt/f8_fullstack_K2/blob/main/day_02/footer.html)
  - Bài làm tốt
  - Các icon không hoạt động đúng
  ```html
  <li>
    <a href="#!"><i class="fa-brands fa-facebook-f"></i></a>
  </li>
  <li>
    <a href="#!"><i class="fa-brands fa-google-plus-g"></i></a>
  </li>
  <li>
    <a href="#!"><i class="fa-brands fa-twitter"></i></a>
  </li>
  <li>
    <a href="#!"><i class="fa-brands fa-linkedin-in"></i></a>
  </li>
  ```
  - Sửa lại các icon!

* Đánh giá chung bài tập về nhà: Bài làm tốt, nên chú ý thêm về các cấu trúc thẻ, cách sử dụng các thẻ trên docs hướng dẫn (icon)...

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/tree/master/day2)

- [x] [Bài 1](https://github.com/Stung16/ex_f8-fullstack/blob/master/day2/ex01.html)

  - Bài làm tốt \*
  - Sai chính tả `Contry` => `Country`

- [x] [Bài 2](https://github.com/Stung16/ex_f8-fullstack/blob/master/day2/ex02.html)

  - Bài làm tốt \*

- [x] [Bài 3](https://github.com/Stung16/ex_f8-fullstack/blob/master/day2/ex03.html)

  - Phần `Please fill..., thanks!` phải cùng một hàng với button. Nên sử dụng thẻ `span` thay vì:
    ```html
    <p>*Please fill all require form field, thanks!</p>
    ```
  - Thẻ `br` chỉ được dùng để ngắt dòng giữa 2 câu, đoạn văn trong cùng một thẻ. Nên không nên sử dụng nó để ngắt dòng giữa các thẻ khác nhau
    ```html
    <textarea
      placeholder="*Your message here"
      name="message"
      id=""
      cols="50"
      rows="10"
    ></textarea>
    <br />
    <br />
    ```
    - Đề xuất sửa thành:
    ```html
    <textarea
      placeholder="*Your message here"
      name="message"
      id=""
      cols="50"
      rows="10"
    ></textarea>
    ```

- [x] [Bài 4](https://github.com/Stung16/ex_f8-fullstack/blob/master/day2/ex04.html)

  - Bài làm tốt
  - Không nên sử dụng ảnh với src là một dãy mã hóa base64, vì nó sẽ làm tăng kích thước file html, làm giảm tốc độ tải trang web, không tận dụng được cache của trình duyệt
    ```html
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgAB..." alt="" />
    ```

- [x] [Bài 5](https://github.com/Stung16/ex_f8-fullstack/blob/master/day2/ex05.html)
  - Viết sai cấu trúc làm cho các đường dẫn đáng ra được hiển thị nhưng lại không:
    ```html
    <ul>
      <li><a href="#"></a>Home</li>
      <li><a href="#"></a>Service</li>
      <li><a href="#"></a>Apppointment</li>
    </ul>
    ```
    - Đề xuất sửa thành:
    ```html
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Apppointment</a></li>
    </ul>
    ```
  - Các icon như bản mẫu phải là một đường dẫn:
  ```html
  <ul>
    <li><i class="fa-brands fa-facebook"></i></li>
    <li><i class="fa-brands fa-google-plus-g"></i></li>
    <li><i class="fa-brands fa-twitter"></i></li>
    <li><i class="fa-brands fa-square-instagram"></i></li>
  </ul>
  ```
  - Đề xuất sửa thành:
  ```html
  <ul>
    <li>
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
    </li>
    <li>
      <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
    </li>
    <li>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </li>
    <li>
      <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
    </li>
  </ul>
  ```

* Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm một chút về ngữ nghĩa trong html để tăng tính semantic cho trang web, giúp cho người dùng và các công cụ tìm kiếm hiểu rõ hơn về trang web, cần chú ý thêm về cấu trúc các thẻ để tránh một số lỗi không mong muốn.

## [Việt Hoàngg](https://github.com/BuiVietHoang2211/f8-fullstack-k2/tree/main/Day_2)

- [x] [Bài 1](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_2/index1.html)
  - Sai cấu trúc thẻ body. Thiếu thẻ đóng của body.
  - Không nên viết thẻ style vào body vì nó sẽ làm cho code không rõ ràng, khó quản lý.
  - Nên format lại code, sử dụng các thẻ đóng đúng cách.
- [x] [Bài 2](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_2/index2.html)
  - Sử dụng quá nhiều thẻ th trong bài
    ```html
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>+</th>
    </tr>
    ...
    <tr>
      <th>C</th>
      <th>0</th>
      <th>=</th>
      <th>/</th>
    </tr>
    ```
    - Đề xuất sử dụng `td` thay cho `th` trong trường hợp này, sau đó sử dụng thẻ `b` để làm đậm các nút
    ```html
    <tr>
      <td><b>1</b></td>
      <td><b>2</b></td>
      <td><b>3</b></td>
      <td><b>+</b></td>
    </tr>
    ...
    <tr>
      <td><b>C</b></td>
      <td><b>0</b></td>
      <td><b>=</b></td>
      <td><b>/</b></td>
    </tr>
    ```
    - Các đoạn code không có format. Nên format lại code để dễ quản lý.
- [x] [Bài 3](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_2/index3.html)
  - Các thẻ br không nên để ngắt dòng giữa các thẻ khác nhau
    ```html
    <input type="your_email address" placeholder="*Enter your email address" />
    <br />
    <br />
    <input type="your_subject" placeholder="*Enter your subject" /> <br />
    <br />
    ```
    - Các đoạn code không có format. Nên format lại code để dễ quản lý.
- [x] [Bài 4](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_2/index4.html)
  - Không nên đặt tên file, folder chứa các ký tự đặc biệt hay dấu cách, vì nó sẽ gây khó khăn cho việc quản lý, dễ gây lỗi cho các phần tử khác trong trang
    ```html
    <img src="./image/f8-icon.18cd71cfcfa33566a22b (1).png" alt="" />
    ```
    - Đề xuất sửa thành:
    ```html
    <img src="./image/f8-icon.png" alt="" />
    ```
  - Các thẻ inline `b` không được bao bọc thẻ `p` vì điều đó là sai semantic
    ```html
    <b><p>COMPREHESIVE IMMIGRATION REFORM</p></b>
    ```
    - Đề xuất sửa thành:
    ```html
    <p><b>COMPREHESIVE IMMIGRATION REFORM</b></p>
    ```
- [x] [Bài 5](https://github.com/BuiVietHoang2211/f8-fullstack-k2/blob/main/Day_2/index5.html)
  - 2 class này cùng chung một style. Nên gom nhóm lại:
    ```css
    .size-text2 {
      font-size: 25px;
    }
    .size-text3 {
      font-size: 25px;
    }
    ```
  - Sai chính tả tại:
  ```html
  <p>Coppy right Hoc Web Chuan All right Reserved</p>
  ```
  - Đề xuất sửa thành:
  ```html
  <p>Copy right Hoc Web Chuan All right Reserved</p>
  ```

* Đánh giá chung bài tập về nhà: Bài làm tốt, nên chú ý thêm về các cấu trúc thẻ, cách sử dụng các thẻ, chú ý nhiều hơn về semantic

## [Nguyễn Văn Đức](https://github.com/Poyken/f8-fullstack-k2/tree/main/day2)

- [x] [Bài 1](https://github.com/Poyken/f8-fullstack-k2/tree/main/day2/cau1)

  - Thẻ `br` chỉ được dùng để ngắt dòng giữa 2 câu, đoạn văn trong cùng một thẻ. Nên không nên sử dụng nó để ngắt dòng giữa các thẻ khác nhau
    ```html
    </p>
    <br />
    <table>
    ```
    - Đề xuất sử dùng thẻ `div` để gom nhóm các thẻ lại với nhau
  - Không nên để value mặc định cho các thẻ input, điều đó khiến UX không tốt, người dùng sẽ phải xóa đi các value mặc định đó
    ```html
    <td>
      <input
        type="text"
        value="London"
        style="height: 30px; width: 250px; margin-bottom: 20px"
      />
    </td>
    ```
    - Đề xuất sửa thành:
    ```html
    <td>
      <input
        type="text"
        placeholder="London"
        style="height: 30px; width: 250px; margin-bottom: 20px"
      />
    </td>
    ```

- [x] [Bài 2](https://github.com/Poyken/f8-fullstack-k2/tree/main/day2/cau2)
  - Bài làm tốt \*
  - Vì các phần cột đã có border, không cần thiết phải style border cho thẻ `table` nữa
    ```css
    table {
     ...
      border: 1px solid green;
    }
    ```
- [x] [Bài 3](https://github.com/Poyken/f8-fullstack-k2/tree/main/day2/cau3)
  - Tất cả phần sau đây đều sai về semantic.
    - Thẻ `br`, thẻ `p`.
    ```html
    <br />
    <br />
    <input type="text" name="" id="" placeholder="*Enter your subject" />
    <br />
    <br />
    <textarea
      name=""
      id=""
      cols="60"
      rows="10"
      placeholder="* Your message here"
    ></textarea>
    <br />
    <button type="button">Send message</button>* Please fill all require form
    field, thanks!
    <p></p>
    ```
    - Code lại.
- [x] [Bài 4](https://github.com/Poyken/f8-fullstack-k2/tree/main/day2/cau4)
  - Thẻ `br` chỉ được dùng để ngắt dòng giữa 2 câu, đoạn văn trong cùng một thẻ. Nên không nên sử dụng nó để ngắt dòng giữa các thẻ khác nhau
    ```html
    <li>
      <img src="..." alt="" width="..." height="..." />
      <br />
      ...
      <p>...</p>
    </li>
    ```
    - Đề xuất sử dùng thẻ `div` để gom nhóm các thẻ lại với nhau như một block.
- [x] [Bài 5](https://github.com/Poyken/f8-fullstack-k2/tree/main/day2/cau5)

  - Sai hoàn toàn những gì đã được học về semantic trong thẻ heading.

    - Có rất nhiều thẻ `h1` trong một trang web. Điều đó sẽ làm cho trang web không có semantic, không tốt cho SEO. Khiến cho người dùng và các công cụ tìm kiếm không hiểu được nội dung của trang web.

    ```html
    <h1>About us</h1>
    <h1>Quick Links</h1>
    <h1>Follow Us</h1>
    ```

  - Phần icons ở đây hoạt động như một link, nên sử dụng thẻ `a` để bao bọc các icon đó

    ```html
    <li><i class="fab fa-facebook"></i></li>
    <li><i class="fab fa-google-plus-g"></i></li>
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-linkedin-in"></i></li>
    ```

    - Đề xuất sửa thành:

    ```html
    <li>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </li>
    <li>
      <a href="#"><i class="fab fa-google-plus-g"></i></a>
    </li>
    <li>
      <a href="#"><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </li>
    ```

* Đánh giá chung bài tập về nhà: Bài làm không tốt, yêu cầu code lại, sửa lại các lỗi sai và nộp lại lần nữa trước buổi học sau. Cần chú ý rất nhiều vào semantic các thẻ. Cần chú ý thêm về giao diện mẫu để biết các chức năng chính xác cần phải làm.

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/Day%202)

- [x] [Bài 1](https://github.com/daithehh04/fullstack/blob/main/Day%202/exercise-1.html)
  - Bài làm tốt
  - Các phần width hơi to hơn so với bản mẫu
  - Thiếu phần button.
  - Cần quan tâm vào thẻ title của trang web chứ không nên để là Document vì nó sẽ làm cho người dùng và các công cụ tìm kiếm không hiểu được nội dung của trang web.
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Form</title>
    ```
- [x] [Bài 2](https://github.com/daithehh04/fullstack/blob/main/Day%202/exercise-2.html)
  - Bài làm tốt \*
  - Cần quan tâm vào thẻ title của trang web chứ không nên để là Document vì nó sẽ làm cho người dùng và các công cụ tìm kiếm không hiểu được nội dung của trang web.
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Calculator</title>
    ```
- [x] [Bài 3](https://github.com/daithehh04/fullstack/blob/main/Day%202/exercise-3.html)
  - Bài làm tốt \*
  - Cần quan tâm vào thẻ title của trang web chứ không nên để là Document vì nó sẽ làm cho người dùng và các công cụ tìm kiếm không hiểu được nội dung của trang web.
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Form</title>
    ```
  - Phần input nhập email nên sử dụng type là email để kiểm tra người dùng nhập đúng định dạng email hay không
    ```html
    <input type="text" placeholder="* Enter your email address" />
    ```
    - Đề xuất sửa thành:
    ```html
    <input type="email" placeholder="* Enter your email address" />
    ```
- [x] [Bài 4](https://github.com/daithehh04/fullstack/blob/main/Day%202/exercise-4.html)
  - Bài làm tốt \*
  - Cần quan tâm vào thẻ title của trang web chứ không nên để là Document vì nó sẽ làm cho người dùng và các công cụ tìm kiếm không hiểu được nội dung của trang web.
    ```html
    <title>Document</title>
    ```
    - Đề xuất sửa thành:
    ```html
    <title>Blog</title>
    ```
  - Vì đây là một danh sách bài viết, phần alt của hình ảnh nên có nghĩa, không nên để trống
    ```html
    <img
      src="https://fastly.picsum.photos/id/404/200/200.jpg?hmac=7TesL9jR4uM2T_rW-vLbBjqvfeR37MJKTYA4TV-giwo"
      alt=""
    />
    ```
    - Đề xuất sửa thành:
    ```html
    <img
      src="https://fastly.picsum.photos/id/404/200/200.jpg?hmac=7TesL9jR4uM2T_rW-vLbBjqvfeR37MJKTYA4TV-giwo"
      alt="HEALTH CARE"
    />
    ```
- [x] [Bài 5](https://github.com/daithehh04/fullstack/blob/main/Day%202/exercise-5.html)
  - Bài làm rất tốt \*

* Đánh giá chung bài tập về nhà: Không được để tên file, folder chứa ký tự đặc biệt, dấu cách. Vì nó sẽ gây khó khăn cho việc quản lý, dễ gây lỗi cho các phần tử khác trong trang. Cần chú ý thêm về thẻ title.

## [10634](https://github.com/nvhlam2211/f8-fullstack/tree/main/day-2)

- [x] [Bài 1](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-2/bai1.html)
  - Code mới được update, không đủ thời gian review. Xin phép xem lại bài em sau nhé!
- [x] [Bài 2](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-2/bai2.html)
  - Code mới được update, không đủ thời gian review. Xin phép xem lại bài em sau nhé!
- [x] [Bài 3](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-2/bai3.html)
  - Code mới được update, không đủ thời gian review. Xin phép xem lại bài em sau nhé!
- [x] [Bài 4](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-2/bai4.html)
  - Code mới được update, không đủ thời gian review. Xin phép xem lại bài em sau nhé!
- [x] [Bài 5](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-2/bai5.html)

* Đánh giá chung bài tập về nhà:

  1. Nếu không đổi tên, không review nữa.

     1.1 Tên cần thiết để đánh giá đúng trình độ và để có thể hướng dẫn, quan tâm phù hợp

     1.2 Tên cần thiết để điểm danh những người đã nộp bài

  2. Gửi link github/folder chứ không phải gửi link commit

     2.1 Link commit không thể xem được code

     2.2 Link commit không thể xem được thời gian nộp bài

     2.3 Link: https://github.com/nvhlam2211/f8-fullstack/commit/20fcdf971b999b866b1057a88c8a99196422393f rất dài, rất khó đọc.

## [Duy Hiếu Nguyễn](https://github.com/HieuBoss/F8-fullstack-k2/tree/main/html/lesson2)

- [x] [Bài 1](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex1.html)
  - Bài làm tốt \*
  - Nên thêm padding-left vào input để UX tốt hơn.
  - Thuộc tính for trong label nhận vào một input với id tương ứng. Không nên để for bừa bãi mà không có input nào sử dụng id đó. Điều đó sẽ gây ra lỗi khi click vào label.
    ```html
    <td><label class="label" for="email">Email address</label></td>
    <input
      class="table_input_left"
      type="email"
      placeholder="John@example.com"
    />
    ```
    - Đề xuất sửa thành:
    ```html
    <td><label class="label" for="email">Email address</label></td>
    <input
      class="table_input_left"
      type="email"
      placeholder="John@example.com"
      id="email"
    />
    ```
  - Phần value option nên có ý nghĩa để khi người dùng chọn thì sẽ trả về giá trị của value đó
    ```html
    <option value="1">United Kingdom</option>
    ```
    - Đề xuất sửa thành:
    ```html
    <option value="United Kingdom">United Kingdom</option>
    ```
- [x] [Bài 2](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex2.html)
  - Bài làm tốt \*
  - Phần button để trong form nếu không có chức năng gì ngoài bấm thì nên để là type="button". Nếu không, type mặc định sẽ là submit, tất cả các button không có type ở trong form đều submit là sai. Vì điều đó sẽ khiến mỗi lần click button là một lần submit.
- [x] [Bài 3](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex3.html)
  - Bài làm rất tốt \*
- [x] [Bài 4](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex4.html)

  - Bài làm rất tốt \*

- [x] [Bài 5](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex5.html)

  - 3 thẻ heading này chung tầng ý nghĩa, tuy nhiên lại đang để 2 thẻ heading khác nhau

    ```html
    <h3>About us</h3>
    <h2>Quick Link</h2>
    <h2>Follow us</h2>
    ```

* Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút nhỏ ở semantic, chức năng các thẻ thường dùng.

## [Hồng Hà Nguyễn Thị](https://github.com/HieuBoss/F8-fullstack-k2/tree/main/html/lesson2)

- [x] [Bài 1](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex1.html)

  - Bài làm tốt \*
  - Phần css có 2 style cho 1 class, nên viết chung vào 1 style

    ```css
    .form__order-option {
      width: 92%;
      height: 35px;
    }

    .form__order-option {
      padding-left: 5px;
    }
    ```

  - Phần thẻ select sử dụng 2 class nhưng ở các style, thuộc tính ghi đè lẫn nhau mà không có một style riêng nào

    ```html
    <style>
      .form__order-input {
        width: 89%;
        height: 29px;
      }

      .form__order-option {
        width: 92%;
        height: 35px;
      }
    </style>
    <select class="form__order-input form__order-option">
      <option value="1">VietNam</option>
      <option value="2">France</option>
      <option value="3">America</option>
    </select>
    ```

  - Code không có format lại, nhìn hơi cẩu thả.

    ```html
    <pre>
      <!-- Code begin -->
      <!-- Ln 90 -->
      <p class="form__wrap-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolorem  deserunt
                blanditiis animi,
                expedita incidunt aperiam, voluptates vitae quod nemo voluptatum molestiae, dolorenumquam.   Nesciunt
                quibusdam dolorum expedita cupiditate a.
            </p>
      
      <!-- Ln 140 -->
                    <td colspan="2"><button type="submit" class="form_btn-submit">SEND ME FREE COFFEE</button></td>
    
      <!-- Code end -->
    </pre>
    ```

- [x] [Bài 2](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex2.html)
  - Bài làm rất tốt \*
- [x] [Bài 3](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex3.html)

  - Bài làm rất tốt \*
  - Sai chính tả `tounch` => `touch`
  - Phần css này không cần thiết thêm !important
    ```css
    .site-btn:hover {
      background-color: #ffb100 !important;
    }
    ```
  - input có type mặc định là text. Vì vậy ở phần input nhập email cần sửa thành type là email để kiểm tra người dùng nhập đúng định dạng email hay không

    ```html
    <input class="site-input" placeholder="* Enter your full email" />
    ```

    - Đề xuất sửa thành:

    ```html
    <input
      class="site-input"
      type="email"
      placeholder="* Enter your full email"
    />
    ```

- [x] [Bài 4](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex4.html)

  - Bài làm tốt
  - Mặc dù bài làm rất tốt nhưng có tận 2 thẻ đóng body

  ```html
    </body>
    </body>
  ```

- [x] [Bài 5](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/html/lesson2/ex5.html)

  - Sử dụng đường dẫn `#!` || `#` thì được. Nhưng không được dùng `!#` vì nó sẽ làm cho trang web không hoạt động được
    ```html
    <a href="!#" class="link" target="_blank">
      <i class="fa-brands fa-twitter"></i>
    </a>
    ```
  - Không nên sử dụng hash là chữ in hoa, điều đó sẽ khiến url rất xấu.
    ```html
    <a href="#Appointment"></a>
    ```

* Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút nhỏ ở semantic, chức năng các thẻ thường dùng.
