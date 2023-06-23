# Dương review bài học ziên

## [Bi11-043 Đỗ Hà Chi](https://github.com/SerenaHa12/fullstack_nodeJS/tree/main/btvn_02)

    Sớm nhất *

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/btvn_02/ex01.html)

  - Bài làm tốt

  - Sai chính tả ở Frist name

    - Đúng: First name

  - Phần input nên có padding vào trong để đẹp hơn

    - Đề xuất chỉnh sửa: Thêm padding cho phần input

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/btvn_02/ex02.html)

  - Làm Đúng như đề bài :)

  - Sai chính tả ở `Frist row`

    - Đúng: `First row`

  - Sử dụng thẻ h1 cho `Frist row` nhưng các row khác tuy chung tầng ý nghĩa lại để h2

    - Đề xuất chỉnh sửa: Sử dụng h2 cho tất cả các row

  - Có nhiều phần tử chung id là `id="row-1"`

    - Đề xuất chỉnh sửa: Sử dụng class thay cho id để style

    - Không nên sử dụng id cho nhiều phần tử

  - Việc sử dụng thẻ span bao bọc thẻ i trong trường hợp này là không cần thiết

    - Vì thẻ i là thẻ inline nên không cần phải bao bọc thẻ span

      - Thẻ span chỉ nên sử dụng khi cần style cho nhiều thẻ con bên trong

        ```html
        <div class="example_01">
          <h1>Frist row</h1>
          <span><i class="search-icon ti-arrow-right"></i></span>
          <p>9 + 9</p>
        </div>
        ```

        - Đề xuất chỉnh sửa: Xóa thẻ span

- Đã có file Css thì không nên sử dụng inline style trừ khi không thể tránh được

  - Đề xuất chỉnh sửa: Xóa inline style

- Vì đây là một UI máy tính bỏ túi, đăt tên class nên có ý nghĩa hơn

  - Đề xuất chỉnh sửa: Đổi tên class
    - Phần số có thể là : `class="number"`
    - Phần dấu `+` có thể là : `class="plus"`
    - Phần dấu `=` có thể là : `class="equal"`
    - Phần kết quả có thể là : `class="result"`
      - Sau đó thêm một class chung cho các nút là `class="button"`
      - Việc đó sẽ giúp dễ dàng style hơn, trình bày code dễ nhìn hơn

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/btvn_02/ex03.html)

  - Các phần form-input có thể gom làm 1 class chung

  - Vì đây là một form liên hệ, có thể sử dụng thẻ form để bao bọc thay cho div

  - Phần message là một bảng tin nhắn lớn, không nên dùng input, nên dùng textarea

  - Vì phần thông báo ở form-submit là cùng một hàng với Button

    - Đề xuất sử dụng thẻ span thay cho thẻ p để giảm thiểu Css

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/btvn_02/ex04.html)

  - Bài làm tốt

  - Vì các img là một ảnh có ý nghĩa chứ không phải icon

    - Đề xuất nên thêm value cho thuộc tính alt của img

    - Điều đó giúp cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/btvn_02/ex05.html)

  - Bài làm tốt \*

* Nhận xét : Bài làm tốt, chỉ cần chỉnh sửa một số chỗ nhỏ là được

- Cần chú ý đến việc đặt tên class và id

- Cần chú ý đến các thẻ title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

- Cần phân chia từng assets cho từng bài tập để dễ quản lý

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/bt_02)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/xuananh2212/bt_02/blob/main/ex01.html)

  - Phần input thiếu placeholder

    - Đề xuất chỉnh sửa: Thêm placeholder cho phần input

  - Các input đều có inline style giống nhau

    - Đề xuất chỉnh sửa: Thêm class cho các input và style trong file css

  - Thẻ label nên đi với một thẻ input có chung id-for

    - Đề xuất chỉnh sửa: Thêm id cho các input và thẻ label

  - Việc sử dụng thẻ label ở trong thẻ table là không nhất quán về cấu trúc và không tối ưu

    - Đề xuất chỉnh sửa: Sử dụng một thẻ khác thay cho label sau đó làm font-weight: bold để in đậm

  - Phần button có background màu tối những chữ màu đen nên bị chìm

    - Đề xuất chỉnh sửa: Thay đổi màu chữ thành màu trắng (#fff || #fefefe)

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/xuananh2212/bt_02/blob/main/ex02.html)

  - Bài làm tốt

  - Làm đúng layout tuy nhiên như đề bài, các nút trong bảng có chiều cao lớn hơn và chiều rộng nhỏ hơn một chút

    - Đề xuất chỉnh sửa: Thêm padding cho các nút

  - Các nút có text font weight là bold cho giống với bản mẫu

    - Đề xuất chỉnh sửa: Thêm font-weight: bold cho các nút có text

  - Phần result có font-size lớn hơn phần các nút

    - Đề xuất chỉnh sửa: Thêm font-size lớn hơn cho phần result

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/xuananh2212/bt_02/blob/main/ex03.html)

  - Bài làm tốt

    - Sai chính tả ở thanhs

      - Sửa thành thanks

    - Dấu , lẻ loi

      - Không nên để dấu , có 2 dấu cách 2 bên

        - Xóa dấu Space bên trái

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/xuananh2212/bt_02/blob/main/ex04.html)

  - Bài làm tốt

    - Phần ảnh hơi to so với bản mẫu

      - Đề xuất chỉnh sửa: Thay đổi kích thước ảnh thành 80px

    - Nên thêm alt cho ảnh để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/xuananh2212/bt_02/blob/main/ex05.html)

  - Bài làm tốt

    - Phần list Icon là một link contact

      - Đề xuất chỉnh sửa: Thêm thẻ a bao bọc cho phần icon

* Nhận xét : Bài làm tốt, chỉ cần chỉnh sửa một số chỗ nhỏ là được

- Cần chú ý đến các thẻ title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

- Cần format code cho dễ đọc hơn. Code trên github khi check là chưa format

## [Mai Việt Hoàng](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/tree/main/Bai%20tap%20buoi%202)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/tree/main/Bai%20tap%20buoi%202/BT1)

  - Có file reset trong css tuy nhiên không được sử dụng

    - Đề xuất chỉnh sửa: Sử dụng file reset.css

  - Việc sử dụng

    ```css
    html {
      font-size: 62.5%;
    }
    ```

    khá khó trong việc style

    - Đề xuất chỉnh sửa: Không nên sử dụng

  - Không nên cho thẻ br ngắt dòng với label và input. Thẻ br chỉ sử dụng để ngắt dòng trong một đoạn văn bản

    - Đề xuất chỉnh sửa: Xóa thẻ br

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/tree/main/Bai%20tap%20buoi%202/BT2)

  - Sai chính tả ở Exersice_2

    - Đúng: Exercise_2

  - Phần table không thể sử dung thuộc tính border như này : border="1 #80bca2"

    - Đề xuất chỉnh sửa: Sử dụng border-color: #80bca2

  - Thuộc tính không nhất quán về một giá trị

    ```html
    <table
      width="300px"
      height="300"
      border="1 #80bca2"
      cellpadding="0"
      cellspacing="0"
    ></table>
    ```

    - Đề xuất chỉnh sửa: Sử dụng width="300" height="300"

  - Sử dụng rất nhiều thẻ th nhưng không có thẻ td

    ```html
    <tr>
      <th width="25%">1</th>
      <th width="25%">2</th>
      <th width="25%">3</th>
      <th width="25%">+</th>
    </tr>
    ...
    <tr>
      <th>C</th>
      <th>0</th>
      <th>=</th>
      <th>/</th>
    </tr>
    ```

    - Đề xuất chỉnh sửa: Sử dụng thẻ td thay cho thẻ th

      - Sau đó thêm style text-align: center để căn giữa, style font-weight: bold để in đậm

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/tree/main/Bai%20tap%20buoi%202/BT3)

  - Bài làm tốt

  - Vì đây là một trang submit form, Thẻ h1 nên để biểu thị cho cả trang

    - Đề xuất chỉnh sửa: Cho thẻ h1 ra ngoài thẻ form

  - Phần textarea nên có thuộc tính placeholder để hướng dẫn người dùng
    ```html
    <textarea name="message" id="message" cols="48" rows="10">
        *Your message here
      </textarea
    >
    ```
    - Đề xuất chỉnh sửa: Thêm placeholder="Your message here" cho phần textarea thay cho value

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/tree/main/Bai%20tap%20buoi%202/BT4)

  - Bài làm tốt

    - Nên thêm alt cho ảnh để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/tree/main/Bai%20tap%20buoi%202/BT5)

  - Bài làm tốt\*

* Nhận xét : Bài làm tốt, chỉ cần chỉnh sửa một số chỗ nhỏ là được

  - Cần format code cho dễ đọc hơn. Code trên github khi check là chưa format

  - Cần sửa lại tên folder, tránh các dấu, ký tự đặc biệt như dấu Space... để tránh lỗi khi deploy, import

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day2)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day2/ex1)

  - Bài làm tốt

  - Phần information-form Không cần thiết và thừa thãi

    - Đề xuất chỉnh sửa: Xóa phần information-form

  - Phần input email nên sửa thành type email để kiểm tra email

    - Đề xuất chỉnh sửa: sửa type="email" cho phần input email

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day2/ex2)

  - Bài làm tốt \*
  - Không nên style cho body là `height: 100vh;`

    - Điều đó có nghĩa là body sẽ có chiều cao bằng với chiều cao của màn hình

    - Đề xuất sửa thành `min-height: 100vh;`

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day2/ex3)

  - Bài làm tốt

  - Phần input email

    ```html
    <input
      class="form-input"
      type="text"
      placeholder="* Enter your email address"
    />
    ```

    - Đề xuất chỉnh sửa: Sửa type="text" thành type="email"

  - Không nên style cho body là `height: 100vh;`

    - Điều đó có nghĩa là body sẽ có chiều cao bằng với chiều cao của màn hình

    - Đề xuất sửa thành `min-height: 100vh;`

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day2/ex4)

  - Bài làm tốt

  - Nên thêm giá trị cho thuộc tính alt của ảnh để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất chỉnh sửa: Thêm alt="Mô tả..." cho ảnh thay cho alt=""

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day2/ex5)

  - Bài làm tốt\*

* Nhận xét : Bài làm tốt, chỉ cần chỉnh sửa một số chỗ nhỏ là được

  - Cần format code cho dễ đọc hơn. Code trên github khi check là chưa format

## [Sơn Ngô Mạnh](https://github.com/NgoManhson/f8-fullstack-exercises/tree/main/buoi-02)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/NgoManhson/f8-fullstack-exercises/blob/main/buoi-02/bai1.html)

  - Bài làm tốt

  - Phần h2 của bài là title chính

    - Nên sử dụng thẻ h1 thay cho thẻ h2

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/NgoManhson/f8-fullstack-exercises/blob/main/buoi-02/bai2.html)

  - Phần các nút có chiều cao lớn hơn và chiều rộng nhỏ hơn một chút

    - Đề xuất chỉnh sửa: Thêm padding cho các nút

  - Sử dụng quá nhiều th trong table

    - Đề xuất chỉnh sửa: Sử dụng thẻ td thay cho thẻ th

    - Sau đó thêm style text-align: center để căn giữa, style font-weight: bold để in đậm

    - Phần result có font-size lớn hơn phần các nút

      - Đề xuất chỉnh sửa: Thêm font-size lớn hơn cho phần result

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/NgoManhson/f8-fullstack-exercises/blob/main/buoi-02/bai3.html)

  - Bài làm tốt

  - Phần h2 của bài là title chính

    - Nên sử dụng thẻ h1 thay cho thẻ h2

  - Có một số trường thuộc tính đang không có giá trị

    ```html
    <input
      type="text"
      name=""
      id=""
      placeholder="* Enter your full name"
      required
    />
    ...
    <div>
      <textarea
        name=""
        id=""
        cols="44"
        rows="10"
        placeholder="* Your message here"
        required
      ></textarea>
    </div>
    ```

    - Đề xuất chỉnh sửa: Thêm giá trị hoặc xóa thuộc tính không cần thiết

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/NgoManhson/f8-fullstack-exercises/blob/main/buoi-02/bai4.html)

  - Bài làm tốt

  - Thuộc tính "alt" trong thẻ `<img>` nên cung cấp một mô tả hợp lý về `nội dung` của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính "alt" nên thông báo rõ ràng về sự cố xảy ra, thay vì chỉ ghi "Ảnh lỗi".

    - Đề xuất chỉnh sửa: Thêm alt="Mô tả..." cho ảnh thay cho alt="Ảnh lỗi"

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/NgoManhson/f8-fullstack-exercises/blob/main/buoi-02/bai5.html)

  - Bài làm tốt\*

* Nhận xét : Bài làm tốt, chỉ cần chỉnh sửa một số chỗ nhỏ là được

  - Cần format code cho dễ đọc hơn. Code trên github khi check là chưa format

  - Cần gom nhóm các assets cần thiết cho mỗi folder bài tập, không nên để chung trong một folder assets

## [Luu Anh Quan](https://github.com/anhquan2211/ExerciseF8-Offline-Day2)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/anhquan2211/ExerciseF8-Offline-Day2/tree/main/exercise1)

  - Do style chưa tốt nên phần table bị lệch

    -Các phần content không xuống dòng ở đúng chữ so với bản gốc

    - Đề xuất: Chỉnh phần with của `form-container` thành

      ```css
      width: 48%;
      ```

    - Hoặc sử dụng br để ngắt hàng trong text

  - Mỗi hàng `<tr><td></td></tr>` là một form, Điều đó là không đúng

    ```html
    <td>
      <form action="">
        <label for="lname">Last name</label><br />
        <input type="text" id="lname" name="lname" value="Smith" />
      </form>
    </td>
    ```

    - Đề xuất: Đưa thẻ form ra ngoài table để tránh việc lặp lại thẻ form

      - Và lấy được tất cả các giá trị của form

  - Các phần input nên có placeholder để hướng dẫn người dùng

    - Đề xuất: Thêm placeholder cho các phần input

    - Việc để value mặc định cho input khiến UX không tốt

      - Đề xuất: Xóa value mặc định thay vào đó là placeholder

  - Không nên sử dụng các tag selector cho css

    - Đề xuất: Sử dụng class thay cho tag selector

  - Sử dụng thuộc tính `padding: 60px` cho body sau khi đã căn giữa bằng flex là không cần thiết

    - Đề xuất: Xóa padding: 60px

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/anhquan2211/ExerciseF8-Offline-Day2/blob/main/exercise2)

  - Bài làm tốt

    - Phần body không nên để height là `height: 100vh;`

      - Đề xuất: Sửa thành `min-height: 100vh;`

      - Vì nếu `height: 100vh;` thì body sẽ có chiều cao bằng với chiều cao của màn hình

      * Lỗi này nặng vì buổi trước đã comment rồi

  - Có 2 thuộc tính background và background-image được sử dụng đồng thời

    - Đề xuất: Xóa background-image

  - Sử dụng thuộc tính `padding: 60px` cho body sau khi đã că giữa bằng flex là không cần thiết

    - Đề xuất: Xóa padding: 60px

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/anhquan2211/ExerciseF8-Offline-Day2/blob/main/exercise3)

  - Sử dụng nhiều thẻ form cho mỗi `<tr><td></td></tr>`

    - Đề xuất: Đưa thẻ form ra ngoài table để tránh việc lặp lại thẻ form

      - Và lấy được tất cả các giá trị của form

  - Các phần input nên có placeholder để hướng dẫn người dùng

    - Đề xuất: Thêm placeholder cho các phần input

    - Việc để value mặc định cho input khiến UX không tốt

      - Đề xuất: Xóa value mặc định thay vào đó là placeholder

    - Việc style cho color input khiến chúng bị chìm màu với nền của input

      - Đề xuất: Thay đổi màu chữ thành màu đen (#333)

  - Sử dụng br để ngắt dòng ở những đoạn không phải là đoạn văn bản

    - Đề xuất: Xóa thẻ br

    - Có thể sử dụng một thẻ block khác thay cho thẻ br

      - Ví dụ: `<div></div>`

    - Hoặc đã sử dụng css thì thêm margin-bottom || display: block

  - Sử dụng thuộc tính `padding: 60px` cho body sau khi đã că giữa bằng flex là không cần thiết

    - Đề xuất: Xóa padding: 60px

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/anhquan2211/ExerciseF8-Offline-Day2/blob/main/exercise4)

  - Bài làm rất tốt \*

    - Sử dụng thuộc tính `padding: 60px` cho body sau khi đã căn giữa bằng flex là không cần thiết

    - Đề xuất: Xóa padding: 60px

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/anhquan2211/ExerciseF8-Offline-Day2/blob/main/exercise5)

  - Bài làm tốt

  - Thẻ body có thuộc tính css là display: flex

    - Nhưng không căn theo column, chỉ căn theo row

      - Đề xuất: Thêm flex-direction: column

    - Hoặc vì body là thẻ block nên không cần thiết phải sử dụng flex

      - Đề xuất: Xóa display: flex

  - Sử dụng thuộc tính `padding: 60px` cho body sau khi đã că giữa bằng flex là không cần thiết

    - Đề xuất: Xóa padding: 60px

* Nhận xét : Bài làm tốt, chỉ cần điều chỉnh một số chỗ nhỏ, Đa phần là CSS nhưng vì chưa học tới nên cũng dễ chấp nhận. Chú ý một số phần sắp xếp và lựa chọn các thẻ cho đúng mục đích của nó

  - VD: 1 Form có nhiều trường nhập chứ không đơn thuần 1 trường nhập, ít nhất là 1 trường nhập và 1 nút submit, Vậy nên không nên bao bọc mỗi trường nhập bằng 1 form.

  - Các phần nhận xét của GV trên phần nộp bài tập của mình và các bạn đều phải chú ý. Một số lỗi tuy buổi trước gặp phải, GV đã sửa, nhận xét nhưng đến buổi sau vẫn còn lỗi đó

    -VD: Thẻ br, height và min-height, ...

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi2)

- Có hiện tượng chép bài nhau thì phải

  ```css
  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6rem;
    background-color: #ccc;
  }
  ```

  - Ai chép ai thì không rõ nhưng bài ông anh này có vẻ ngon hơn

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/phamtuan162/phamtuan-nodejs-01/blob/main/Buoi2/Bai1.html)

  - Bài làm tốt

  - Không nên sử dụng css

    ```css
    html {
      font-size: 62.5%;
    }
    ```

    - Đề xuất: Xóa css trên vì khi để 62.5% thì 1rem = 10px, khi đó sẽ khó để tính toán

  - Phần pattern của input

    ```html
    <input
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      type="email"
      name="email-address"
      id="email-address"
      placeholder="join@example.com"
      class="form__input"
      required
    />
    ```

    Đã được tối ưu cho hầu hết các email cơ bản, tuy nhiên chưa thể bao gồm chữ Hoa và thường, không thẻ mở rộng tên miền phức tạp có nhiều hơn 4 ký tự

    - Đề xuất viết lại pattern:

      ```html
      <input
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        type="email"
        name="email-address"
        id="email-address"
        placeholder="join@example.com"
        class="form__input"
        required
      />
      ```

      - Điều đó sẽ giúp bao gồm cả chữ hoa và thường, cũng như mở rộng tên miền phức tạp hơn

  - Các input là một thẻ tự đóng, không nên viết `<input>`

    - Đề xuất: Sửa thành `<input />`

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/phamtuan162/phamtuan-nodejs-01/blob/main/Buoi2/Bai2.html)

  - Bài làm rất tốt \*

    - Nên thêm phần reset css để tránh các lỗi không mong muốn

      - Đề xuất: Thêm đoạn code:
        ```css
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        ```

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/phamtuan162/phamtuan-nodejs-01/blob/main/Buoi2/Bai3.html)

  - Bài làm tốt

  - Không nên sử dụng css

    ```css
    html {
      font-size: 62.5%;
    }
    ```

    - Đề xuất: Xóa css trên vì khi để 62.5% thì 1rem = 10px, khi đó sẽ khó để tính toán

  - Phần pattern của input không đúng với một email hợp lệ phổ thông

    - Đề xuất thay bằng pattern: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`

  - Không chia layout tốt cho các input

    - Đề xuất: Bọc các input và nhóm các input cần chia bằng thẻ div

  - Nên chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/phamtuan162/phamtuan-nodejs-01/blob/main/Buoi2/Bai4.html)

  - Bài làm rất tốt \*

    - Nên thêm phần reset css để tránh các lỗi không mong muốn

      - Đề xuất: Thêm đoạn code:

        ```css
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        ```

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/phamtuan162/phamtuan-nodejs-01/blob/main/Buoi2/Bai5.html)

  - Bài làm rất tốt \*

  - Nên chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

  - Nên thêm phần reset css để tránh các lỗi không mong muốn - Đề xuất: Thêm đoạn code:
    ```css
    - {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

* Nhận xét: Bài làm tốt, chỉ cần điều chỉnh một số chỗ nhỏ là được

## [Minh Quang](https://github.com/taminhquang13/Bai_Tap_F8.git)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/taminhquang13/Bai_Tap_F8/blob/main/Bai_Tap_F8/bai1.html)

  - Bài làm tốt

  - Sai chính tả ở phần

    ```html
    <p class="text">
      Sign up to get a coupon you can redeem at your nearest Dancing Goat cafe
      for a sample of the Olombia Carlos Imbachi coffe.We'll also make sure you
      don't miss out on news introducing the new coffees that we add to our
      store regularly
    </p>
    ```

    - Sửa `[Olombia,coffe]` thành `[Colombia,coffee]`

  - Cần chú ý về cách đặt tên class sao cho có ý nghĩa, tránh đặt bừa bãi khó hiểu

    ```html
    <div class="hi">
      <button>SEND ME FREE COFFEE</button>
    </div>
    ```

    - Đề xuất sửa thành

      ```html
      <div class="button">
        <button>SEND ME FREE COFFEE</button>
      </div>
      ```

  - Phần trường nhập email nên để input type là email

    ```html
    <td>
      <input type="text" placeholder="john@example.com" />
    </td>
    ```

    - Đề xuất sửa thành

      ```html
      <td>
        <input type="email" placeholder="john@example.com" />
      </td>
      ```

  - Nếu đã viết CSS, nên thêm phần reset css để tránh các lỗi không mong muốn

    - Đề xuất: Thêm đoạn code:

      ```css
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      ```

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/taminhquang13/Bai_Tap_F8/blob/main/Bai_Tap_F8/b2.html)

  - Bài làm tốt

  - Nếu đã viết CSS, nên thêm phần reset css để tránh các lỗi không mong muốn

    - Đề xuất: Thêm đoạn code:

      ```css
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      ```

  - Đặt tên class có phần không tốt

    ```html
    <div class="block_1">
      <p class="text_1">9+9</p>
      ...
    </div>
    ```

    - Nếu chỉ có một phần tử block và một text nên sửa thành

      ```html
      <div class="block">
        <p class="text">9+9</p>
        ...
      </div>
      ```

      - Phần class name tên block không đúng ngữ nghĩa cho một thẻ div bao bọc cả trang

        - Đề xuất sửa thành `container`

        - Tương tự với phần kết quả của phép tính

          - Đề xuất sửa thành `result`

  - Phần nút bấm số và phép tính có font đậm hơn phần kết quả

    - Đề xuất: Thêm thẻ b bao bọc các value nút bấm hoặc style cho .cell bằng font-weight: bold

      ```css
      .cell {
        ...
        font-weight: bold;
      }
      ```

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/taminhquang13/Bai_Tap_F8/blob/main/Bai_Tap_F8/b3.html)

  - Bài làm tốt

  - Sai chính tả ở 2 chỗ

    ```html
    <h1>Get in touch woth us by filling contact form below</h1>
    ...
    <td><input type="text" placeholder="* Enter your emailaddress" /></td>
    ```

    - Sửa `[woth,emailaddress]` thành `[with,email address]`

  - Sai font chữ so với bản mẫu

    - Bản mẫu sử dụng một font chữ có chân "Times New Roman" !== "System UI"

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/taminhquang13/Bai_Tap_F8/blob/main/Bai_Tap_F8/bai4.html)

  - Bài làm tốt

    - Tuy nhiên để cho đúng về semantic hơn thì phải đi từ h1>h2>h3>...

      - Đề xuất: Sử dụng h2 thay vì h3 cho các phần tiêu đề

  - Vì đã có thể sử dụng css

    - Có thể fix width cho các img chung thay vì viết width inline thủ công cho từng img

      - Đề xuất: Thêm đoạn code:

        ```css
        img {
          width: 50px;
        }
        ```

  - Vẫn sai chính tả `coffe` => `coffee`

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/taminhquang13/Bai_Tap_F8/blob/main/Bai_Tap_F8/b5.html)

  - ???

    ```html
    <h2>Follow Us</h3>
    ```

    - Từ chối hiểu đoạn code này :))

  - Việc sử dụng target là \_top khá là không thân thiện với người dùng vì

    - Nếu người dùng click vào link sẽ bị chuyển sang tab mới một cách bất ngờ

    - Đề xuất: Sửa thành target là \_blank hoặc \_self là một sự lựa chọn an toàn hơn

* Nhận xét: Bài làm tốt

  - Cần chú ý vào chính tả và UI của bản mẫu, các phần đóng, mở thẻ, cách đặt tên className đúng cách, dễ hiểu

  - Cần chú ý cách đặt tên file sao cho nhất quán, dễ hiểu, dễ tìm

    - (bai1, b2, b3, bai4, b5) :?
      => (bai1, bai2, bai3, bai4, bai5) || (b1, b2, b3, b4, b5) || (ex1, ex2, ex3, ex4, ex5)

  - Cần chú ý title trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

## [Dương Quốc Anh](https://github.com/taminhquang13/Bai_Tap_F8.git)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/Buoi_2/bai1.html)

  - Bài làm tốt

  - phần đoạn văn chính của bài không dàn ra ngoài nhiều đến vậy

    - Đề xuất: Thêm padding || width cho phần content hoặc sử dụng thẻ br để ngắt dòng

  - Phần Country như trong mẫu là một select tag vì có icon mũi tên bên phải

    - Đề xuất: Sử dụng thẻ select thay cho thẻ input

  - Phần input nên thêm `padding-left` để UX tốt hơn

    - Đề xuất: Thêm `padding-left: 10px` cho phần input

  - Cần chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/Buoi_2/bai2.html)

  - Bài làm tốt \*

  - Cần chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/Buoi_2/bai3.html)

  - Bài làm tốt \*

    - Nếu đã viết CSS, nên thêm phần reset css để tránh các lỗi không mong muốn

      - Đề xuất: Thêm đoạn code:

        ```css
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        ```

  - Cần chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/Buoi_2/bai4.html)

  - Phần path img

    - Để đảm bảo tính ổn định của đường dẫn tới src của img, không nên sử dụng

      ```html
      <img src="/imgs/img_3.jpg" alt="" />
      ```

      - Đề xuất: Sửa thành
        ```html
        <img src="./imgs/img_3.jpg" alt="" />
        ```
        - Nếu là một đường dẫn tuyệt đối thì không cần thêm dấu `.`
        ```html
        <img src="imgs/img_3.jpg" alt="" />
        ```

  - Phần alt của img

    - Thuộc tính "alt" trong thẻ `<img>` nên cung cấp một mô tả hợp lý về `nội dung` của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính "alt" nên thông báo rõ ràng về sự cố xảy ra, thay vì chỉ ghi "".

      - Đề xuất chỉnh sửa: Thêm alt="Mô tả..." cho ảnh thay cho alt=""

  - Vì để cho đúng về semantic hơn thì phải đi từ h1>h2>h3>...

    - Đề xuất: Sử dụng h2 thay vì h3 cho các phần tiêu đề

  - Cần chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/Buoi_2/bai5.html)

  - Vì để cho đúng về semantic hơn, nên sử dụng thẻ h2 thay vì h3 cho các phần tiêu đề

    - Đề xuất: Sử dụng h2 thay vì h3 cho các phần tiêu đề

  - Phần html này có chút sai chính tả

    ```html
    <li>
      <a href="#"><u>Servie</u></a>
    </li>
    <li>
      <a href="#"><u>Appointmment</u></a>
    </li>
    ```

    - Đề xuất: Xóa thẻ u vì không cần thiết, thẻ a đã có css mặc định là underline

      - Sửa chính tả đúng của `[Servie,Appointmment]` thành `[Service,Appointment]`

  - Cần chú ý về title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

* Nhận xét: Bài làm tốt, cần chú ý vào chính tả và UI của bản mẫu, phần title của trang web, cách sử dụng đường dẫn sao cho ổn định, hiệu quả.

## [Nguyễn Thành Dương](https://github.com/duongano/day2-f8off)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/duongano/day2-f8off/tree/master/ex1)

  - Bài làm tốt

  - Một số thẻ chưa được đóng đúng cách gây ra lỗi trong cấu trúc thẻ

    ```html
      <!-- Thẻ label này chưa được đóng -->
    <label for="email address">Email address<label>
      ...
      <!-- Thẻ span này chưa được đóng -->
    <label for="first-name">State <span>(optional)<span></label>
    ```

  - Phần placeholder của input là một phần rất quan trọng để hướng dẫn người dùng

    - Đề xuất: Thêm placeholder có ý nghĩa cho các phần input thay vì

      ```html
      <div class="form-group">
          <label for="first-name">State <span>(optional)<span></label>
          <input type="text" placeholder="">
      </div>
      ```

  - Thuộc tính for của thẻ label không được đặt trùng với id của thẻ input

    - Đề xuất: thêm id cho thẻ input và sửa for của thẻ label

      ```html
      <!-- Còn nhiều tag input khác -->
      ...
      <div class="form-group">
          <label for="first-name">State <span>(optional)<span></label>
          <input type="text" placeholder="" id="first-name">
      </div>
      ...
      <!-- Còn nhiều tag input khác -->
      ```

  - 2 phần css có styled y hệt nhau

    ```css
    input {
      display: block;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 7px;
      width: 350px;
    }

    select {
      display: block;
      padding: 7px;
      width: 350px;
    }
    ```

    - Đề xuất sửa thành
      ```css
      input,
      select {
        display: block;
        padding: 7px;
        width: 350px;
      }
      input {
        margin-right: 20px;
        margin-bottom: 20px;
        /* Phần right và bottom, có thể rút gọn margin lại thành */
        margin: 0 20px 20px 0;
      }
      ```

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/duongano/day2-f8off/tree/master/ex2)

  - Bài làm tốt \*

  - Tuy không giống bản mẫu

    - Phần bảng chỉ có một border, phần nút có font đậm hơn phần result

  - Vì phần reset cho marin và padding là 0px, vậy px không cần thiết

    ```css
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    ```

    - Đề xuất: Xóa px trong margin và padding

    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/duongano/day2-f8off/tree/master/ex3)

  - Bài làm tốt

  - Vì phần reset cho marin và padding là 0px, vậy px không cần thiết

  ```css
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  ```

  - Đề xuất: Xóa px trong margin và padding

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  - Phần button có css như này

    ```css
    .btn {
      margin: 0px 0px 0px 3px;
    }
    ```

    - Thay vì viết vậy, có thể viết một cách ngắn gọn và dễ hiểu hơn là

    ```css
    .btn {
      margin-left: 3px;
    }
    ```

  - Thẻ span mặc định đã có inline, không cần thiết thêm dòng css này

    ```css
    span {
      display: inline;
    }
    ```

  - Sai chính tả

    ```html
    <input type="email" placeholder="*Enter your emaill address" />
    ```

    - Sửa `[emaill]` thành `[email]`

  - Việc chia layout như bài là chưa tối ưu, nên chia theo từng nhóm input, từng nhóm row-col, có thẻ sử dụng table...

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/duongano/day2-f8off/tree/master/ex4)

  - Bài làm tốt \*

  - Tuy nhiên, thuộc tính alt trong img nên cung cấp một mô tả hợp lý về nội dung của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính alt nên thông báo rõ ràng về sự cố xảy ra

    - Đề xuất: Thêm alt="Mô tả..." cho ảnh thay cho alt=""

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/duongano/day2-f8off/tree/master/ex5)

  - Bài làm tốt \*

  - Tuy nhiên icon trong bài mẫu là một link, nên sử dụng thẻ a bao bọc thẻ i

    - Đề xuất: Sửa thành
      ```html
      <a href="#">
        <i class="icon..."></i>
      </a>
      ```

* Nhận xét: Bài làm tốt, đa số là nhầm lẫn ở CSS, nhưng vì chưa được học nên cũng dễ chấp nhận. Cần chú ý vào chính tả, cách đóng, mở thẻ đúng quy định.

  - Để có một thống nhất chung, nên đổi tên nhánh master thành main
    Sử dụng lệnh `git branch -m master main`

  - File README.md là một file markdown, không nên viết file là readme.md.txt

    - Vì khi đó file sẽ không được hiển thị đúng trên github

## [Phan Trung Hiếu](https://github.com/pth2003/HOMEWORK/tree/main/BTVN_BUOI_2)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/pth2003/HOMEWORK/tree/main/BTVN_BUOI_2/BAI_1)

  - Bài làm tốt

  - Sai lỗi chính tả của một thuộc tính khiến cho thuộc tính đó không có tác dụng

    ```html
    <table cellpading="5" width="30% "></table>
    ```

    - Sửa `[cellpading]` thành `[cellpadding]`

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/pth2003/HOMEWORK/tree/main/BTVN_BUOI_2/BAI_2)

  - Bài làm tốt

  - Phần các nút không giống với bản mẫu.

    - Đề xuất: Sửa lại table

    ```html
    <table width="30%" border="1" style="border-spacing: 0px"></table>
    ```

    =>

    ```html
    <table
      cellpadding="..."
      width="30%"
      border="1"
      style="border-spacing: 0px"
    ></table>
    ```

  - Sử dụng quá nhiều thẻ th

    - Đề xuất sử dung thẻ td thay cho td th ở một số phần. Vì thẻ th là một thẻ đặc biệt, nên chỉ nên sử dụng khi cần thiết

  - Một thẻ tr thừa `<tr></tr>`

  - Font-weight của phần nút đang đúng, thêm font-weight normal vào làm sai UI

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/pth2003/HOMEWORK/tree/main/BTVN_BUOI_2/BAI_3)

  - Bài rất làm tốt \*

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/pth2003/HOMEWORK/tree/main/BTVN_BUOI_2/BAI_4)

  - Bài làm tốt \*

  - sửa lại chính tả ở
    ```html
    <h2>ECONNOMIC OPPORTUNITY</h2>
    ```
    - Sửa `[ECONNOMIC]` thành `[ECONOMIC]`

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/pth2003/HOMEWORK/tree/main/BTVN_BUOI_2/BAI_5)

  - Bài làm tốt

  - Tuy nhiên để cho đúng về semantic hơn thì phải đi từ h1>h2>h3>...

    - Đề xuất: Sử dụng h2 thay vì h3 cho các phần tiêu đề

* Nhận xét: Bài làm tốt

  - Không nên đặt tên folder toàn chữ viết hoa, điều đó sẽ gây khó khăn cho việc sử dụng và tìm kiếm, đặt tên folder nên viết thường, có thể viết hoa chữ cái đầu tiên của mỗi từ giúp chúng có ý nghĩa hơn

    - Đề xuất: Sửa tên folder `[BTVN_BUOI_2,BAI_1,BAI_2,BAI_3,BAI_4,BAI_5]` thành `[btvn_buoi_2,bai_1,bai_2,bai_3,bai_4,bai_5]`

  - Lưu ý về phần title trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

## [Hoài Nam Đỗ](https://github.com/oaiHmaN25/namdhhe171198/tree/main/btvn2)

- Phần link gửi trên f8 có vẻ không đúng, đã thay bằng link mới trong nhánh main(có lượt commit cuối cùng)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/oaiHmaN25/namdhhe171198/blob/main/btvn2/ex01.html)

  - Không chú ý tới bài giảng trên lớp hoặc không hiểu bài giảng trên lớp \*\*

  - Sử dụng sai chức năng, cấu trúc của thẻ `<table>`
    ```html
    <table width="50%" border="1" cellspacing="0" cellpadding="10">
      <td>John</td>
    </table>
    ...
    <table width="50%" border="1" cellspacing="0" cellpadding="10">
      <td>
        <option>United Kingdom</option>
      </td>
    </table>
    ```
    - Đề xuất: Sửa lại toàn bộ thẻ `<table></table>`, cho 1 thẻ `<table>` duy nhất bao bọc ở ngoài
      - Sử dụng thẻ tr để bao bọc mỗi `<td>` của một hàng
  - Sử dụng sai cấu trúc của thẻ `<select>/<option>`

    ```html
    <td>
      <option>United Kingdom</option>
    </td>
    ```

    - Đề xuất: Sửa lại thẻ `<select>/<option>`, cho thẻ `<select>` bao bọc ở ngoài các `<option>`

  - Phần chữ text để cho giống bản mẫu cần thêm các thẻ `<br/>` ở đúng chỗ để ngắt dòng

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/oaiHmaN25/namdhhe171198/blob/main/btvn2/ex02.html)

  - Không chú ý tới bài giảng trên lớp hoặc không hiểu bài giảng trên lớp \*\*

  - Chưa rõ ý đồ của thuộc tính `color` trong `<table></table>`

    ```html
    <table
      color="red"
      border="1"
      width="20%"
      cellpadding="20"
      cellspacing="0"
    ></table>
    ```

    - Đề xuất: Xóa thuộc tính `color`

  - Phần `colspan` là 5 mặc dù chỉ có 4 cột mỗi hàng ?

    ```html
    <tr>
      <td colspan="5">9 + 9</td>
      <!-- Không rõ nên để td ở đây không. -->
    </tr>
    <!-- Số cột -->
    <tr>
      <th><b>1</b></th>
      <th>2</th>
      <th>3</th>
      <th>+</th>
    </tr>
    ```

    - Đề xuất: Sửa lại `colspan="4"`

  - Tất cả các phần nút có `font-weight` đồng nhất `bold`

    - Nhưng trong bài chỉ để 1 thẻ `<b></b>` cho số 1 ?

    - Dù trên UI vẫn đúng với bản mẫu nhưng vì sử dụng toàn bộ thẻ cho cột là `<th>`

    ```html
    <th><b>1</b></th>
    ```

    - Đề xuất: Sửa lại thẻ th và thẻ b

    ```html
    <td>
      <b>1</b>
    </td>
    <td>
      <b>2</b>
    </td>
    <td><b>...</b></td>
    ...
    ```

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/oaiHmaN25/namdhhe171198/blob/main/btvn2/ex03.html)

  - Chưa hiểu lỗi này là loại gì nữa

    ```html
    <br lang="en" />
    <!-- Dòng 2 -->
    ```

  - Thiếu thẻ mở của tag body

    ```html
    </head>
    <h1>Get in touch with us by filling contact form below</h1>
    ```

  - Không hiểu rõ bản chất các thẻ `<br/>` là một ví dụ

    ```html
    <br><input type="text" placeholder="*Enter your subject" /></br>
    <!-- ??? -->
    ```

  - Phần input email nên để type là email

    ```html
    <input type="text" placeholder="*Enter your email address" />
    ```

    - Đề xuất: Sửa thành

      ```html
      <input type="email" placeholder="*Enter your email address" />
      ```

  - Thuộc tính name của một textarea sử dụng để gửi dữ liệu lên server, nên đặt tên cho phù hợp

    ```html
    <textarea
      name="44"
      rows="4"
      cols="20"
      style="width: 373px; height: 187px"
    ></textarea>
    ```

    - Đề xuất: Sửa `[name="44"]` thành `[name="message"]`

  - Phần text `*Please fill alll require form feild, thanks!` không được bao bọc vào bất cứ thẻ nào, nên sử dụng thẻ p hoặc thẻ span để bao bọc

    - Đề xuất: Sửa thành

      ```html
      <p>*Please fill alll require form feild, thanks!</p>
      ```

      - Sửa chính tả `feild` thành `field`, `alll` thành `all`

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/oaiHmaN25/namdhhe171198/blob/main/btvn2/ex04.html)

  - Thuộc tính alt của img nên cung cấp một mô tả hợp lý về nội dung của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính alt nên thông báo rõ ràng về sự cố xảy ra

    ```html
    <img src="image/chuh.jpg" alt="Loi anh" width="100px" height="100px" />
    ```

    - Đề xuất: Thêm alt="Mô tả..." cho ảnh thay cho alt="Loi anh"

  - Xét theo semantic, thẻ h1>h2>h3>...

    - Đề xuất: Sử dụng h2 thay vì h3 cho các phần tiêu đề

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/oaiHmaN25/namdhhe171198/blob/main/btvn2/ex05.html)

  - Xét theo semantic, thẻ h1>h2>h3>...

    - Đề xuất: Sử dụng h2 thay vì h3 cho các phần tiêu đề

  - Sử dụng quá nhiều ul cho phần list, điều đó là không hề đúng

    ```html
    <ul>
      <li>
        <img src="image/facebook-f.svg" alt="Lỗi ảnh" width="20" height="20" />
      </li>
    </ul>
    ...
    <ul>
      ...
    </ul>
    ```

    - Đề xuất: Sửa lại thành một ul duy nhất

      ```html
      <ul>
        <li>
          <img
            src="image/facebook-f.svg"
            alt="Lỗi ảnh"
            width="20"
            height="20"
          />
        </li>
        ...
      </ul>
      ```

    - Thuộc tính alt của img nên cung cấp một mô tả hợp lý về nội dung của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính alt nên thông báo rõ ràng về sự cố xảy ra

      ```html
      <img src="image/facebook-f.svg" alt="Lỗi ảnh" width="20" height="20" />
      ```

      - Đề xuất: Thêm alt="Mô tả..." cho ảnh thay cho alt="Lỗi ảnh"

* Nhận xét: Bài làm Không hề tốt! \*\*

  - Cần chú ý nhiều hơn vào bài giảng trên lớp, thực hành lý thuyết, định nghĩa lại các tag HTML một cách chính xác, cần chú ý vào chính tả, cách đóng, mở thẻ đúng quy định

  - Phần title của trang web cần cung cấp thông tin cho người dùng và các bộ máy tìm kiếm

    - Đề xuất: Thêm title cho trang web hợp lệ và có ý nghĩa !== "Document"

  - Nên sử dụng mỗi một folder `assets/image` cho một bài tập, điều đó giúp cho việc quản lý và tìm kiếm dễ dàng hơn

    - Đề xuất: Tạo folder `assets/image` cho từng bài tập

    - Xét theo ngữ nghĩa đặt tên folder, một folder chứa nhiều ảnh không nên đặt tên là `image`

      - Đề xuất: Đổi tên folder `image` thành `images`

## [Nguyễn Duy An](https://github.com/nguyenduyan9/fullstack.git)

Có thể nào viết tách ra thành từng bài tập không vậy

- Viết bài lộn xộn [ 2,3,4,5,1]

- Không có khoảng cách mỗi bài tập

- Viết thẻ style vào body

  ```html
  <body>
    <!-- bài 2 begin -->
    <style>
      table,
      td {
        border: 1px solid #33ffcc;
      }

      /* table,
    td,
    th {
      border: 1px solid #33ffcc; 
    }*/
    </style>
  </body>
  ```

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/nguyenduyan9/fullstack/blob/main/homework2/index.html)

  - Vì mỗi trường nhập là một ô `input` chứ không phải chỉ để nhìn thấy.

    - Không nên sử dụng các thẻ td để hiển thị chữ. thay vào đó phải là một ô input

  - Đoạn code `table` này thật sự khó hiểu, sử dụng quá nhiều thẻ `tbody`, `thead`, `thead` dưới cả thẻ `tbody`, ...

    ```html
    <table width="100%" cellpadding="0" cellspacing="5">
        <thead style="text-align: left">
         ...
        </thead>
        <tbody>
          <tr>
            <td>john</td>
            <td>smith</td>
          </tr>
          <tr>
            <!-- Mở cái gì vậy trời -->
        </tbody>
          <thead style="text-align: left">
          <!-- Tại sao lại có thêm 1 ông head ở đây -->
            <th width="50%">Email address</th>
            <th>address</th>
          </thead>
        </tr>
        <!-- Đóng ông nào thế trời -->
        <tr>
          <td>duyangtvt@gmail.com</td>
          <td>Đống đa</td>
        </tr>
        <tr>
          <thead style="text-align: left">
          <!-- Tại sao lại có thêm 1 ông head ở đây -->
            <th>City</th>
            <th>State</th>
          </thead>
        </tr>
        <tr>
          <td>Hà Nội</td>
          <td></td>
        </tr>
        <tr>
          <thead style="text-align: left">
          <!-- Tại sao lại có thêm 1 ông head ở đây -->
            <th>ZIP code</th>
            <th>country</th>
          </thead>
        </tr>
        <tr>
          <td>EC2Y 8DS</td>
          <td>VIET NAM</td>
        </tr>
      </table>
    ```

    - Đề xuất sửa lại TOÀN BỘ!

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/nguyenduyan9/fullstack/blob/main/homework2/index.html)

  - Sử dụng quá nhiều `th` trong đoạn code

  ```html
  <tbody>
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>+</th>
    </tr>
    ...
    <tr>
      <th>c</th>
      <th>0</th>
      <th>=</th>
      <th>/</th>
    </tr>
  </tbody>
  ```

  - Đề xuất sửa lại thẻ `th` thành `td`

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/nguyenduyan9/fullstack/blob/main/homework2/index.html)

  - Sử dụng quá nhiều thẻ form không cần thiết và không đúng

    ```html
    <div>
      <div>
        <form action="">
          <input type="text" placeholder="* Enter your full name" />

          <input type="text" placeholder="* Enter your email address" />
        </form>
      </div>
      ...
      <div>
        <form action="">
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="* your message here"
          ></textarea>
        </form>
      </div>
      <div>
        <button>send message</button>
        <strong>*please fill all require form field ,thanks !</strong>
      </div>
    </div>
    ```

    - Đề xuất sử dụng thẻ form bao bọc toàn bộ phần nhập liệu, sẽ giúp cho việc gửi dữ liệu lên server dễ dàng hơn

      - Các phần thuộc tính không có value thì không cần thiết phải khai báo

      - Phần input nhập email nên sử dụng type="email" để kiểm tra dữ liệu nhập vào

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/nguyenduyan9/fullstack/blob/main/homework2/index.html)
  - Theo semantic, thẻ h1>h2>h3>...
    - Đề xuất sử dụng h2 thay vì h3 cho các phần tiêu đề
  - Thuộc tính alt của img nên cung cấp một mô tả hợp lý về nội dung của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính alt nên thông báo rõ ràng về sự cố xảy ra
    ```html
    <img src="./img/..." alt="" />
    ```
    - Đề xuất: Thêm alt="Mô tả..." cho ảnh thay cho alt=""
    - Nếu phần src trỏ tới 1 folder cùng cấp thì không cần thiết phải thêm dấu `./` vào trước tên file
- [x] Bài 5: [Bài tập về nhà 5](https://github.com/nguyenduyan9/fullstack/blob/main/homework2/index.html)
  - Phần thuộc tính href của thẻ a nên sử dụng `"#"` thay vì `""`
    ```html
    <li>
      <a href="">
        <i class="fa-brands fa-google-plus-g"></i>
      </a>
    </li>
    ...
    <li>
      <a href="">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
    </li>
    ```
    - Đề xuất: Sửa thành
      ```html
      <li>
        <a href="#">
          <i class="fa-brands fa-google-plus-g"></i>
        </a>
      </li>
      ...
      <li>
        <a href="#">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </li>
      ```

* Nhận xét: Bài làm Không hề tốt!
  - Cần cải thiện thêm nhiều ở kỹ năng phân tích bai toán, triển khai code
  - Sử dụng sai hầu hết ở các phần đóng, mở thẻ html
  - Sử dụng Css style sai khi đặt ở trong body
  - Không nên làm tất cả bài tập vào một file index.html

## [Nam Nguyễn](https://github.com/namnguyen2603/nguyentrungnambai_2.git)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/namnguyen2603/nguyentrungnambai_2/blob/main/ex1.html)

  - Có chút nhầm lẫn về các thuộc tính ở các trường nhập liệu

    - Phần nhập tên không nên để thuộc tính type là email

    - Có thể do gõ nhầm nhưng không kiểm tra lại. Không có thuộc tính nào tên là Smith

    ```html
    <td>
      <input type="email" placeholder="John" />
    </td>
    <td>
      <input type="email" Smith />
    </td>
    ```

  - Việc sử dụng 1 thẻ `b` có thể tăng font-weight lên thành 700 nhưng dùng 2 thẻ b thì cũng không lên được 1400 đâu
    ```html
    <p>
      <b><b>Email address</b></b>
    </p>
    ```
  - Do bị nhầm lẫn hoặc copy nhưng không sửa lại, toàn bộ các input đều có type là email ???

    ```html
    ...
    <td>
      <input type="email" placeholder="skirrt st" />
    </td>
    ...
    ```

  - Phần chọn state là một select, có thể nhận thấy bằng dấu xổ ở phía bên phải của bản mẫu

    ```html
    <td>
      <input type="email" placeholder="Việt Nam" />
    </td>
    ```

    - Đề xuất: Sửa thành
      ```html
      <td>
        <select name="state" id="state">
          <option value="Viet Nam">Viet Nam</option>
          ...
        </select>
      </td>
      ```

  - Phần button style màu xong không xem kỹ lại màu chữ, màu chữ hiện đang chìm so với màu của backgrouund

    ```css
    button {
      background: rgba(0, 0, 255, 0.581);
      padding: 10px;
    }
    ```

    - Đề xuất thêm 1 dòng chỉnh màu chữ sáng hơn: `color: #fff;`

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/namnguyen2603/nguyentrungnambai_2/blob/main/ex2.html)

  - Viết toàn bộ html ra ngoài của thẻ body ?

    ```html
    <table width="20%" border="1">
      <tr>
        <td class="tinh" colspan="4">9 + 9</td>
      </tr>
      ...
    </table>
    <body></body>
    ```

    - Đề xuất đưa các phần code html cần thiết vào trong thẻ body

  - Nên thêm thuộc tính `cellpadding` vào thẻ table để các nút có một chút chiều cao, giống với bản mẫu hơn

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/namnguyen2603/nguyentrungnambai_2/blob/main/ex3.html)

  - Tương tự bài 1, tất cả các input đều cso thuộc tính type là email

    - Đề xuất sửa lại các thuộc tính type của các input sao cho phù hợp hơn

  - Có 2 lỗi chính tả `usby` => `us by`; `thanhs` => `thanks`

  - Dấu `","` không nên đặt lẻ loi giữa 2 dấu cách `" , "` => `", "`

  - Các thuộc tính có nhưng không để giá trị thì không nên thêm vào

    - Ví dụ như name, id của textarea

    ```html
    <textarea
      name=""
      id=""
      cols="40"
      rows="10"
      placeholder="* Your message here"
    ></textarea>
    ```

    - Phần textarea có width rộng như hàng 1 (2 input)

      - Nên sửa lại thuộc tính cols hoặc css cho phù hợp hơn

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/namnguyen2603/nguyentrungnambai_2/blob/main/ex4.html)

  - Bài làm tốt

  - Phần thẻ `style` có nhưng không hề viết gì ở trong. Nên xóa đi

  - Phần ảnh hơi to, thẻ ul, li đã được học từ buổi trước, đến bây giờ phải thành thục để chỉn chu layout hơn

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/namnguyen2603/nguyentrungnambai_2/blob/main/ex5.html)

  - Bài làm tốt

  - Thuộc tính `alt` của thẻ `img` nên cung cấp một mô tả hợp lý về nội dung của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính `alt` nên thông báo rõ ràng về sự cố xảy ra

    ```html
    <img src="./img/..." alt="" />
    ```

    - Đề xuất: Thêm `alt="Mô tả..."` cho ảnh thay cho `alt=""`

    - Nếu phần src trỏ tới 1 folder cùng cấp thì không cần thiết phải thêm dấu `./` vào trước tên file

* Nhận xét: Bài làm tốt, tuy nhiên thiếu rất nhiều sự chỉn chu ở cách code, cách phân tích, phát triển giao diện. Cần chú ý hơn một chút, chỉn chu hơn một chút, không nên cẩu thả trong code và cách phân tích bài toán

## [Bui Quang Binh](https://github.com/darkmage84/binh_fsk_01.git)

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/darkmage84/binh_fsk_01/blob/main/btvn_ngay2/bai1.html)

  - Sử dụng quá nhiều thẻ form không cần thiết

    ```html
    <td>
      <form action="#">
        <input type="text" name="first-name" placeholder="John" />
      </form>
    </td>
    ...
    ```

    - Đề xuất: Xóa thẻ form thừa và chỉ nên dùng 1 thẻ form cho một bảng nhập liệu có nhiều trường liên quan đến nhau

  - Phần `input` nhập `email` nên để `type` là `email`

    ```html
    <td>
      <form action="#">
        <input type="text" name="email" placeholder="john@example.com" />
      </form>
    </td>
    ```

    - Đề xuất: Sửa `type="text"` thành `type="email"`

  - Phần thẻ `button` là một thẻ nằm trong nhóm thẻ `inline`, nhưng hiện đang bao bọc một thẻ block ở trong `<p>`
    ```html
    <div>
      <button class="submit">
        <p>SEND ME FREE COFFEE</p>
      </button>
    </div>
    ```
    - Đề xuất: Xóa thẻ `<p>` thừa

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/darkmage84/binh_fsk_01/blob/main/btvn_ngay2/bai2.html)

  - Xây dựng layout `Đúng như đề bài` giống bạn [Bi11-043 Đỗ Hà Chi](https://github.com/SerenaHa12/fullstack_nodeJS/tree/main/btvn_02) :))

  - Nên đặt tên class sao cho tường minh vê ý nghĩa và dễ dàng sử dụng

    ```html
    <div class="myDiv">
      <!-- Không nên đặt như này, đâu mà chả là div của bạn :) -->
    </div>
    ```

    - Đề xuất: Đặt tên class sao cho tường minh về ý nghĩa và dễ dàng sử dụng như: class="container", class="wrapper", class="content", class="header", class="footer", ...

  - Sử dụng quá nhiều thẻ `th` không cân thiết và không đúng. Thẻ `th` chỉ nên sử dụng cho các phần tiêu đề của bảng

    ```html
    <tr>
      <th width="20%"></th>
      <th width="20%"></th>
      <th width="15%">First Row</th>
      <th width="15%">
        <i class="fas fa-long-arrow-alt-right" style="color: red"></i>
      </th>
      <th colspan="2">9+9</th>
    </tr>
    ...
    <tr>
      <th>Fifth Row</th>
      <th>
        <i class="fas fa-long-arrow-alt-right" style="color: red"></i>
      </th>
      <th>
        <button name="clear" id="C">C</button>
      </th>
      <th>
        <button name="zero" id="0">0</button>
      </th>
      <th>
        <button name="equal" id="=">=</button>
      </th>
      <th>
        <button name="divided by" id="/">/</button>
      </th>
    </tr>
    ```

    - Đề xuất: Sửa lại các thẻ `th` thành `td`

    - Cũng không nên để id là các ký tự đặc biệt như `+`, `-`, `*`, `/`, `=`, `C`, ... vì sẽ gây ra lỗi khi sử dụng các hàm trong javascript

    - Nếu cần sử dụng các ký tự đặt biệt, có thể thêm chúng vào thuộc tính khác như `data-id`, `data-name`, `data-value`, ...

  - Để cho hợp lý về mặt layout hơn và cũng không nên để một cặp thẻ nhưng không có value

    ```html
    <tr>
      <th width="20%"></th>
      <th width="20%"></th>
      <th width="15%">First Row</th>
      <th width="15%">
        <i class="fas fa-long-arrow-alt-right" style="color: red"></i>
      </th>
      <th colspan="2">9+9</th>
    </tr>
    ```

    - Sửa thành:

    ```html
    <tr>
      <th width="15%">First Row</th>
      <th width="15%">
        <i class="fas fa-long-arrow-alt-right" style="color: red"></i>
      </th>
      <th colspan="4">9+9</th>
    </tr>
    ```

  - Nên import icon từ bên ngoài `fontawesome` bằng file .min.css thay vì sử dụng một kit import nhiều file css không dùng tới. Điều đó khiến cho trang web load chậm hơn

    ```html
    <script
      src="https://kit.fontawesome.com/73802d1ce1.js"
      crossorigin="anonymous"
    ></script>
    ```

    - Đề xuất: Sửa thành:

    ```html
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/awesome/5.15.3/css/all.min.css"
    />
    ```

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/darkmage84/binh_fsk_01/blob/main/btvn_ngay2/bai3.html)

  - Việc sử dụng mỗi hàng là một thẻ form mặc dù chung là một bảng nhập liệu không đúng

    ```html
    <form action="">
      <input
        type="text"
        name="full-name"
        id="full-name"
        placeholder="*Enter your full name"
      />
      ...
    </form>
    ...
    <form action="">
      <input
        type="text"
        name="message"
        id="massage"
        placeholder="* Your message here"
      />
    </form>
    ```

    - Đề xuất: Xóa các thẻ form thừa và chỉ nên dùng 1 thẻ form cho một bảng nhập liệu có nhiều trường liên quan đến nhau

  - Vì phần message có là phần nhập liệu với vùng nhập to, không nên sử dụng thẻ input
    ```html
    <input
      type="text"
      name="message"
      id="massage"
      placeholder="* Your message here"
    />
    ```
    - Đề xuất: Sửa thành
    ```html
    <textarea
      name="message"
      id="massage"
      cols="50"
      rows="10"
      placeholder="* Your message here"
    ></textarea>
    ```
  - Phần text chưa được bao bọc chính xác, thẻ div không phải thẻ để chứa text mà là thẻ để chứa các phần tử khác

    ```html
    <div>... *Please fill all require form field, thanks!</div>
    ```

    - Đề xuất thêm thẻ p hoặc span (Như trong trường hợp inline thì nên dùng span)

    ```html
    <div>... <span>*Please fill all require form field, thanks!</span></div>
    ```

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/darkmage84/binh_fsk_01/blob/main/btvn_ngay2/bai4.html)

  - Bài làm tốt \*

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/darkmage84/binh_fsk_01/blob/main/btvn_ngay2/bai5.html)

  - Bài làm tốt \*
    - Tuy nhiên sai chính tả ở
      ```html
      <a href="#">Appoitment</a>
      ```
      - Sửa `Appoitment` thành `Appointment

* Nhận xét: Bài làm tốt, nên gom nhóm các assets thành các tài nguyên của từng bài tập, không nên để tất cả trong một folder. Chú ý đến title của trang web, cần cung cấp thông tin cho người dùng và các bộ máy tìm kiếm. Cần chú ý vào phần title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm. Cần chú ý vào UI của bản mẫu, cách sử dụng các thẻ, thuộc tính, class, id, ... sao cho hợp lý, dễ hiểu, dễ bảo trì, dễ mở rộng.

## [Trung Le](https://github.com/Trungdeptraii/Le_Van_Trung-07-06-2023-Day2)

- Không nên mỗi lần nộp bài tập là lại tạp một repo mới trên github. Giờ có hơn 400 bài thì làm thế toang toàn tập

  - Nên gom nhóm thành 2 repo chính là bài tập về nhà môt repo, bài học trên lớp một repo, hoặc gom chung thành một repo

- [x] Bài 1: [Bài tập về nhà 1](https://github.com/Trungdeptraii/Le_Van_Trung-07-06-2023-Day2/tree/main/Bai1)

  - Bài làm tốt

  - Lại là thẻ `br`

    ```html
    <td>
      <b>First name</b>
      <br />
      <input
        type="text"
        value="John"
        style="height: 41px; width: 314px; font-size: 15px"
      />
    </td>
    ```

    - Thẻ `br` chỉ có một ý nghĩa duy nhất, đó là ngắt dòng cho một văn bản. Nên không nên sử dụng nó để tạo khoảng cách giữa các phần tử

    - Đề xuất sử dụng một thẻ block để bao bọc các phần tử cần tạo khoảng cách
      - Ví dụ như `<div></div>`

  - Phần `input` nhập `email` nên để `type` là `email`

    ```html
    <input
      type="text"
      value="joih@example.com"
      style="height: 41px; width: 314px; font-size: 15px"
    />
    ```

    - Sửa `type="text"` thành `type="email"`

  - Sai chính tả ở `b>Adress</b>` => `b>Address</b>`

  - Style cho một thành phần mờ màu chữ đi thì cũng nên cho màu chữ vẫn còn một chút nổi bật, chỉ giảm nổi bật so với text chính.

    - Ví dụ text màu #333 thì màu chữ mờ có thể là #555 -> #999 (Quá mờ thì khó nhìn)

    ```html
    <b>State</b> <span style="color: #d6d1d1">(optional)</span>
    ```

- [x] Bài 2: [Bài tập về nhà 2](https://github.com/Trungdeptraii/Le_Van_Trung-07-06-2023-Day2/tree/main/Bai2)

  - Bài làm tốt
  - Không nên sử dụng quá nhiều thẻ th không đúng mục đích của nó

    ```html
    <tr>
      <th
        style="
              width: 110px;
              height: 85px;
              background: white;
              font-size: 40px;
            "
      >
        1
      </th>
      ...
      <th
        style="
              width: 110px;
              height: 85px;
              background: white;
              font-size: 40px;
            "
      >
        -
      </th>
    </tr>
    ```

    - Đề xuất sửa lại sử dụng thẻ `td` thay cho `th`

    - Nếu các style là chung, có thể đặt một class sau đó gán cho các thẻ `td` đó, style bằng css

      - Nên hạn chế tối đa sử dụng inline Css, trừ khi bất khả kháng

- [x] Bài 3: [Bài tập về nhà 3](https://github.com/Trungdeptraii/Le_Van_Trung-07-06-2023-Day2/tree/main/Bai3)

  - Bài làm tốt

  - Nên thay đổi type của phần nhập email thành `type="email"`

    ```html
    <input
      type="text"
      placeholder="*Enter your email name"
      style="width: 172px; height: 20px"
    />
    ```

    - Đề xuất sửa thành

    ```html
    <input
      type="email"
      placeholder="*Enter your email name"
      style="width: 172px; height: 20px"
    />
    ```

  - Thẻ br chỉ nên sử dụng để ngắt dòng cho một văn bản, không nên sử dụng để tạo khoảng cách giữa các phần tử

    ```html
    <input ... />
    <br />
    <input ... />
    <br />
    <textarea ...></textarea>
    <br />
    <button style="margin-top: 18px">Send message</button>
    ```

    - Đề xuất sử dụng một thẻ block để bao bọc các phần tử cần tạo khoảng cách

      - Ví dụ như `<div></div>`

- [x] Bài 4: [Bài tập về nhà 4](https://github.com/Trungdeptraii/Le_Van_Trung-07-06-2023-Day2/tree/main/Bai4)

  - Bài làm tốt

  - Theo semantic, thẻ h1>h2>h3>...

    - Đề xuất sử dụng h2 thay vì h3 cho các phần tiêu đề

  - Sai chính tả `REFFOM` => `REFORM`

  - Thuộc tính alt của img nên cung cấp một mô tả hợp lý về nội dung của hình ảnh. Nếu hình ảnh không tải được hoặc có lỗi, thì mô tả trong thuộc tính alt nên thông báo rõ ràng về sự cố xảy ra

    ```html
    <img src="img/..." alt="" />
    ```

    - Đề xuất: Thêm alt="Mô tả..." cho ảnh thay cho alt=""

- [x] Bài 5: [Bài tập về nhà 5](https://github.com/Trungdeptraii/Le_Van_Trung-07-06-2023-Day2/tree/main/Bai5)

  - Bài làm tốt

  - Nên sử dụng các thẻ html5 hợp lý hơn

    - Đề bài đa nói rõ là Footer, không nên dùng thẻ `<main></main>`

  - 2 từ sai chính tả `[adio, Bullam]` => `[odio, Nullam]`

* Nhận xét: Bài làm tốt.

  - Nên chú ý cấu trúc dự án sao cho dễ tìm, đơn giản
  - Các phần folder assets/img chứa nhiều ảnh, nên đổi lại tên thành `assets/images` hoặc `assets/imgs` để dễ hiểu hơn
  - Tìm hiểu kỹ hơn về các thẻ html5 và chức năng, cách sử dụng của thẻ `form, br, footer, main... `

\* Nhận xét chung: Bài làm tốt, cần chú ý vào chính tả, cách đặt tên folder, file, cách đóng, mở thẻ đúng quy định, cách sử dụng đường dẫn sao cho ổn định, hiệu quả. Cần chú ý vào phần title của trang web để cung cấp thông tin cho người dùng và các bộ máy tìm kiếm. Cần chú ý vào UI của bản mẫu, cách sử dụng các thẻ, thuộc tính, class, id, ... sao cho hợp lý, dễ hiểu, dễ bảo trì, dễ mở rộng.
