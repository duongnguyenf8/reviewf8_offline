# Dương review bài tập về nhà buổi 8 - lớp K5

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/day_8/ex01.html)

- [x] Bài 1

  Bài làm chưa tốt

  Không hover vào được các menu con

  Thẻ nav để thể hiện các thanh điều hướng, logo không phải một thanh điều hướng mà do khi sử dụng, người dùng có xu hướng bấm vào logo để về trang chủ, nhưng nó không phải là một nav, chỉ bọc nav ở list navigation bên trái.

  Vì mỗi nav khi hover lại ra một mega menu khác nhau, không nên dùng chung menu ở ngoài mà nên xử lý các menu con để trong nav cha. Điều này dễ dàng kiểm soát và fix luôn được lỗi không hover được menu con.

  Sai semantics: Trong bài các list không phải các tiêu đề nên không nên sử dụng heading ở đây. Chỉ cần sử dụng các ul, li và các text in đậm là được.

  Các phần CSS tuy còn hơi thủ công nhưng cơ bản là rất tốt.

- [x] Bài 2

  Bài làm rất tốt.

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Bài làm rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, rất chỉn chu(Trừ bài 1), cần phân tích các nghiệp vụ thực tế vào bài để làm tốt hơn.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-8/bai-1.html)

- [x] Bài 1

  Bài làm tốt

  Icon logo chưa giống bản mẫu. Có thể tìm kiếm trên mạng một hình gần giống, như vậy sẽ giúp bài tập có chút chỉn chu hơn.

  Với các menu, user chuộng việc hover hiển thị menu con hơn, vì trong mắt user, nếu bấm vào một menu thì sẽ chuyển hướng.

  Với từng khung menu con, có thể thấy nó chung ý nghĩa là 1 list chỉ là xếp 2 hoặc nhiều cột hơn, nên xử lý 1 ul và khi quá chiều dài thì sẽ ngắt cột, xử dụng thuộc tính `flex-wrap`.

- [x] Bài 2

  Bài làm rất tốt.

  Không nên sử dụng các ảnh base64 vì nó sẽ làm xấu và khó kiểm xoát HTML, hơn nữa nó sẽ làm ảnh nặng hơn một chút khoảng 30-33%, không tái sử dụng được cache của trình duyệt nên nó sẽ load lâu hơn.

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Khi hover, các nút bị giảm opacity quá mức, nó không mang lại hiệu ứng sáng mà giống hơn với hiệu ứng disabled, như vậy khiến user khó lựa chọn bấm hơn. Chỉ nên giảm một chút xuống .85 hoặc .8 là quá đủ.

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Bài làm tốt

  Sai font chữ của các heading, các heading sử dụng một font chữ có chân.

  Việc fix cứng height của thẻ p chỉ đúng ở trường hợp này, nếu mô tả dài hơn thì chưa chắc. Nên xử lý cắt các đoạn text dài, phần height của `.option` mới cần fix cứng sau đó căng các element trong ra đầu cuối, như vậy button lúc nào cũng ở cuối.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, rất chỉn chu(Trừ bài 1), cần phân tích các nghiệp vụ thực tế vào bài để làm tốt hơn.

## [Nguyễn Tuấn Hùng](https://tiendat211294.github.io/f8_offline_k5/buoi-8/bai-1.html)

- [x] Bài 1

  Bài làm chưa tốt

  Thẻ nav để thể hiện các thanh điều hướng, logo không phải một thanh điều hướng mà do khi sử dụng, người dùng có xu hướng bấm vào logo để về trang chủ, nhưng nó không phải là một nav, chỉ bọc nav ở list navigation bên trái.

  Với các menu to như mega menu, nên xử lý ẩn, khi nào hover mới hiển thị vì nó quá to và chiếm diện tích, ngoài ra nếu muốn điều hướng user không phải cuộn lên đầu để điều hướng.

  Sai semantics: Trong bài các list không phải các tiêu đề nên không nên sử dụng heading ở đây. Chỉ cần sử dụng các ul, li và các text in đậm là được.

  - Bài làm tốt, có chỉn chu tuy nhiên cần phân tích nghiệp vụ tốt nữa.

- [x] Bài 2

  Bài làm chưa tốt:
  **Method của form không có cái nào là dialog!**

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Khi hover, cần thay đổi button một chút để user nhận ra sự thay đổi, không phải ai cũng hiểu được nó.

  Các nút tăng, giảm, số bé hơn bản mẫu.

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Bài làm tốt

  Sai font chữ của các heading, các heading sử dụng một font chữ có chân.

  Các hình ảnh không hợp với services. Nên sử dụng ảnh khác.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, nhưng quá tập chung vào phần nổi css, nên tập chung làm người dùng để hiểu hơn về bài tập

## [Nguyễn Ngọc Minh](https://minhhnguyenn.github.io/F8_Fullstack_BTVN/Btvnbuoi8/megamenu.html)

- [x] Bài 1

  Bài làm rất tốt

  Chưa có border-radius phần mega menu như bản mẫu

  Phần navigation nên sử dụng thẻ nav để thể hiện thay vì div.

  Sai semantics: Trong bài các list không phải các tiêu đề nên không nên sử dụng heading ở đây. Chỉ cần sử dụng các ul, li và các text in đậm là được.

- [x] Bài 2

  Bài làm rất tốt

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Trong bài có 2 button, nên phân tích xem đâu là button cần người dùng bấm vào hơn, đưa nó thành màu primary từ đầu(màu xanh)

- [x] Bài 3

  Bài làm tốt

  Font chữ quá bé so với bản mẫu.

  - Với máy tính nên để font chữ khoảng 13-14px là nhỏ nhất
  - Với điện thoại khoảng 11-12px là nhỏ nhất

  Không nên để bản máy tính là 12px, rất khó nhìn.

  Sai font chữ của các heading, các heading sử dụng một font chữ có chân.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Chỉ cần chú ý thêm một chút là hoàn thiện.

## [Nguyễn Đức Nhật](https://nhat0712.github.io/f8-FS-OL/Day%208/bai1)

- [x] Bài 1

  Bài làm tốt

  **Các tên folder không nên sử dụng có dấu cách, ký tự đặc biệt, viết hoa viết thường không có quy tắc, nó khiến đường dẫn xấu và có thể sai sót khi import, sử dụng...**

  Với các menu to như mega menu, nên xử lý ẩn, khi nào hover mới hiển thị vì nó quá to và chiếm diện tích, ngoài ra nếu muốn điều hướng user không phải cuộn lên đầu để điều hướng.

  - Bài làm tốt, có chỉn chu tuy nhiên cần phân tích nghiệp vụ tốt nữa.

  Với các label để input bên trong, không cần dùng for nữa, nên xóa đi.

  Không nên fix cứng số cột sẽ rất khó thay đổi, thay vì thế nên xử lý bằng ul-li để đúng hơn, fix chiều cao và sử dụng `flex-wrap` để ngắt cột khi cần.

- [x] Bài 2

  Bài làm tốt

  **Các tên folder không nên sử dụng có dấu cách, ký tự đặc biệt, viết hoa viết thường không có quy tắc, nó khiến đường dẫn xấu và có thể sai sót khi import, sử dụng...**

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  CSS báo lỗi: `padding: o;` Invalid value => `padding: 0px;`

  Khi hover, cần thay đổi button một chút để user nhận ra sự thay đổi, không phải ai cũng hiểu được nó.

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3: Sai đường dẫn, tìm chính xác thì 404

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, chưa chỉn chu từ tên folder, bài 3 không có. Xem github chưa có

## [Nguyen Van Thang](https://nvthang391.github.io/F8-FSK5/Day_8/bai1.html)

- [x] Bài 1

  Cần chỉn chu hơn vào tiêu đề, không phải lúc nào cũng là Document

  Bài làm tốt

  Với các menu, user chuộng việc hover hiển thị menu con hơn, vì trong mắt user, nếu bấm vào một menu thì sẽ chuyển hướng.

  Với từng khung menu con, có thể thấy nó chung ý nghĩa là 1 list chỉ là xếp 2 hoặc nhiều cột hơn, nên xử lý 1 ul và khi quá chiều dài thì sẽ ngắt cột, xử dụng thuộc tính `flex-wrap`.

- [x] Bài 2

  Cần chỉn chu hơn vào tiêu đề, không phải lúc nào cũng là Document

  Bài làm tốt.

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Khi hover, cần thay đổi button một chút để user nhận ra sự thay đổi, không phải ai cũng hiểu được nó.

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Cần chỉn chu hơn vào tiêu đề, không phải lúc nào cũng là Document

  Bài làm tốt

  Sai font chữ của các heading, các heading sử dụng một font chữ có chân.

  Chưa rõ về chức năng của odd, even trong bài. Nếu chỉ position relative thì đưa hết vào `.item` còn các button sau khi absolute cũng chưa có chức năng gì mới.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có sự đầu tư vào bài tập. Cần phát huy và **chú ý vào thẻ title** để hiểu hơn về bài tập.

## [Tran Quoc Viet](https://tranquocviet111122.github.io/f8-fullstack-fsk5/Day-8/html/Bai1/bai1.html)

- [x] Bài 1

  Bài làm chưa tốt

  Không nên đưa h1 vào trong header trừ trường hợp bất khả kháng, header như này sẽ được tái sử dụng ở rất nhiều page khác nhau, nếu như sử dụng h1 ở header thì tiêu đề chính của trang sẽ là gì.

  Với các menu to như mega menu, nên xử lý ẩn, khi nào hover mới hiển thị vì nó quá to và chiếm diện tích, ngoài ra nếu muốn điều hướng user không phải cuộn lên đầu để điều hướng.

  - Bài làm tốt, có chỉn chu tuy nhiên cần phân tích nghiệp vụ tốt nữa.

  Với từng khung menu con, có thể thấy nó chung ý nghĩa là 1 list chỉ là xếp 2 hoặc nhiều cột hơn, nên xử lý 1 ul và khi quá chiều dài thì sẽ ngắt cột, xử dụng thuộc tính `flex-wrap`.

  Đang xử lý quá thủ công với các khoảng trống, bài làm chưa được tốt về cách phân tích giao diện, nếu như sửa một chút, bài này chắc chắn phải xây lại từ đầu.

- [x] Bài 2

  Bài làm tốt.

  Không cần phải sử dụng tới 1 class `.body`, và với phần cart hoặc cả trang web thì nên rộng 100vw, chứ không co lại 80%.

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Khi hover, cần thay đổi button một chút để user nhận ra sự thay đổi, không phải ai cũng hiểu được nó.

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  **Bài làm không tốt**

  Sai hầu hết semantics, thay vì sử dụng thẻ p, ở bài sử dụng `.item-p`, thay vì button, trong bài sử dụng `.item-btn`.

  Sai font chữ của các heading, các heading sử dụng một font chữ có chân.

  Với các hình ảnh nên có alt hợp lý, với trường hợp này, có thể sẽ là tiêu đề của service đó.

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt, đa số chưa đúng về semantics, làm có phần hơi chắp vá, cần làm cố gắng hơn ở các bài tới.

## [Lê Đức Anh](https://ducanhprogram.github.io/f8-fullstack-k5/Day-8/Bai1.html)

- [x] Bài 1

  Bài làm chưa tốt

  Thiếu borer-radius menu con giống bản mẫu.

  Không hover vào được các menu con

  Với header của trang web nên sử dụng thẻ header để bao bọc ở ngoài vì không phải header chỉ có nav, có thể còn tìm kiếm, còn cart, còn logo, đăng nhập, đăng ký,... Có thể tham khảo header của shopee để hiểu hơn.

  Thẻ nav để thể hiện các thanh điều hướng, logo không phải một thanh điều hướng mà do khi sử dụng, người dùng có xu hướng bấm vào logo để về trang chủ, nhưng nó không phải là một nav, chỉ bọc nav ở list navigation bên trái.

  Sai semantics: Trong bài, logo đang là h2, vậy nó đang bổ nghĩa cho gì của tiêu đề chính, header chỉ nhằm mục đích tiện lợi hơn cho user trong việc sử dụng, mang tính thương hiệu. Không có ý nghĩa nhiều trong semantics, cố gắng không sử dụng tới heading trong header

  Không sử dụng table để chia layout. Table giúp thể hiện một bảng liệt kê, không phải sử dụng để chia layout.

  Các font có thể sử dụng google font hoặc tốt nhất là tải font về, tuy nhiên nên đưa sang 1 file css khác, tách ra thì sẽ tốt hơn, dễ nhìn và kiểm soát, sửa lỗi hơn.

- [x] Bài 2

  Bài làm tốt.

  Số 4 trong heading bị lệch.

  Tiêu đề của cart có thể là h2 trong trường hợp là trang shop, tuy nhiên h3 thì chưa bổ nghĩa cho h2 nào trong bài.

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Trong bài có 2 button, nên phân tích xem đâu là button cần người dùng bấm vào hơn, đưa nó thành màu primary từ đầu(màu xanh)

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: space-between;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: space-between;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-between` như sau:

  ```css
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Bài làm tốt

  Phần alt của một hình ảnh service nên sử dụng tên của service làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi, để bot đọc,...

  Bài làm đang sử dụng padding fix cứng để căn giữa thẻ p và text bên trong, như vậy là không được tốt. Thay vì thế nên flex thẻ cha để căn giữa thẻ p và `text-align: center` để căn text bên trong.

  Class cho 1 item không nên sử dụng số nhiều: `.services-items` => `.services-item`

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy hơi chắp vá nếu có thể nên sửa lại để học cách viết tốt hơn.

## [Lê Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-8/ex01.html)

- [x] Bài 1

  Bài làm tốt

  Sai semantics: Trong bài, cách tiêu đề của menu đang là h3, nó đang không bổ nghĩa cho gì của tiêu đề chính, header chỉ nhằm mục đích tiện lợi hơn cho user trong việc sử dụng, mang tính thương hiệu. Không có ý nghĩa nhiều trong semantics, cố gắng không sử dụng tới heading trong header

  Với từng khung menu con, có thể thấy nó chung ý nghĩa là 1 list chỉ là xếp 2 hoặc nhiều cột hơn, nên xử lý 1 ul và khi quá chiều dài thì sẽ ngắt cột, xử dụng thuộc tính `flex-wrap`.

  Nên đưa css của bài xuống dưới cùng để đảm bảo được ghi đè tất cả các thư viện trên, dễ custom hơn chỉnh sửa hơn.

- [x] Bài 2

  Bài làm tốt.

  Số 4 trong heading bị lệch.

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Trong bài có 2 button, nên phân tích xem đâu là button cần người dùng bấm vào hơn, đưa nó thành màu primary từ đầu(màu xanh)

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-center` như sau:

  ```css
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Bài làm tốt

  Phần alt của một hình ảnh service nên sử dụng tên của service làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi, để bot đọc,...

  Font chữ hơi bé so với một khung nhìn chính, các phần text nhỏ có thể đặt ở footer như @copy,... nhưng ở đây là một đoạn text cần người dùng đọc, có thể tăng lên 16px sẽ tốt hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần chú ý và chỉn chu hơn một chút thì bài làm hoàn thiện.

## [Bùi Minh Chí](https://ronbanh549.github.io/f8-fullstack-k5/Day-8/bai2.html)

- [x] Bài 1 => Chưa làm

- [x] Bài 2

  Bài làm tốt.

  Số 4 trong heading bị lệch.

  Phần alt của một hình ảnh sản phẩm nên sử dụng tên của sản phẩm làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi,...

  Trong phần CSS có một số màu giống nhau hoặc gần tương tự, nên đặt biến để có thể dễ dàng tái sử dụng và sửa chữa.

  Cần chú ý hơn vào cách viết tắt, không phải ai cũng sẽ hiểu được nó ví dụ:

  ```css
  .products__qty
  ```

  Rõ ràng nó chưa thể hiện là quantity mà ở trong có một span mới thể hiện quantity.

  Với các item có nhiều thuộc tính giống nhau ví dụ như:

  ```css
  .class {
    display: flex;
    justify-content: space-between;
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    display: flex;
    justify-content: space-between;
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

  Nên tách nó thành 1 class chung như: `.flex-between` như sau:

  ```css
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
  .class {
    /*thuoc tinh 1: abc*/
    /*thuoc tinh 2: def*/
  }
  .class2 {
    /*thuoc tinh 1: ghi*/
    /*thuoc tinh 2: qka*/
  }
  ```

- [x] Bài 3

  Bài làm tốt

  Phần alt của một hình ảnh service nên sử dụng tên của service làm alt để dễ dàng đọc hiểu hơn, ví dụ như lúc ảnh lỗi, để bot đọc,...

  Font chữ hơi bé so với một khung nhìn chính, các phần text nhỏ có thể đặt ở footer như @copy,... nhưng ở đây là một đoạn text cần người dùng đọc, có thể tăng lên 16px sẽ tốt hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần chú ý và chỉn chu hơn một chút thì bài làm hoàn thiện.
