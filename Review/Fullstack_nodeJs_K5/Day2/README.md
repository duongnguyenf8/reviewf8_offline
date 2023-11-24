# Dương review bài tập về nhà buổi 2 - Lớp K5

## [Đào quang hùng](view-source:https://hungsk5.github.io/F8-Offline-SK5/Day2/baitap1.html)

- [x] Bài 1

  Bài lầm chưa tốt

  Các thuộc tính của table viết sai:

  ```html
  <table spaepading="0" sellpading="0"></table>
  ```

  Nếu id là trống thì không cần phải thêm id:

  ```html
  <select name="United Kinhdom" id=""></select>
  ```

  Mỗi hàng có 2 cột, tuy nhiên hàng cuối cùng chỉ có 1 cột

  Vì cả một bảng là một biểu mẫu, thẻ form cần được bọc thẻ table để đúng hơn, khi submit lấy được tất cả các trường.

  Các name của input trong trường hợp này không được giống nhau vì mỗi trường thể hiện một mục đích nhất định

  Input nhập email nên sử dụng type email thay vì text

  Thẻ th vốn đã có style mặc định là đậm lên rồi, không cần thêm thẻ b, hơi thừa

- [x] Bài 2

  Bài làm tốt

  Nếu đã có css rồi, nên sử dụng external css thay vì inline css.

  ```html
  <table width="80%" border="1">
    <td style="border: none; text-align: right;" colspan="4"></td>
  </table>
  ```

- [x] Bài 3

  Bài làm chưa tốt

  Các thuộc tính sau không hề có ở table

  ```html
  <table spacing="0" sellpading="0"></table>
  ```

  Không có type nào của input là name

  ```html
  <input type="name" placeholder="*Enter your full name" />
  ```

  Tổng có 3 col, tuy nhiên row thứ 2 chỉ có 1.

- [x] Bài 4

  Bài làm không tốt

  Bài không cần thiết phải làm bằng table.

  Các list có liên quan đến nhau nên đưa vào một ul, như ở bài làm là sai.

  Không có thẻ html nào là `<P>`

  Đây có vẻ là một tiêu đề. Nên sử dụng heading cho nó.

  ```html
  <p><b>CLIMATE CHANGE</b></p>
  ```

- [x] Bài 5

  Bài làm chưa tốt.

  Bài làm không cần thiết phải sử dụng table.

  "About Us" là một tiêu đề của trang, cần phải dùng heading ở đây.

  Sử dụng table khiến cho bài làm quá rối, không cần thiết và sai rất nhiều.

- [x] Đánh giá chung bài tập về nhà: Bài làm quá máy móc, không nên cứng nhắc phải làm bằng table. Nên chú ý thêm vào các thuộc tính, tên thẻ...

## [Ngo Hoang Kim](view-source:https://kzau1612.github.io/FSK5/Bu%E1%BB%95i%202/BT1.html)

- [x] Bài 1

  Bài làm tốt

  Vì đây là một form biểu mẫu, nên cần được bọc một thẻ form vào table.

  Các input nên có thuộc tính placeholder để hướng dẫn người dùng và để khi đọc code sẽ dễ hiểu hơn.

  Các input nên đẻ type đúng mục đích, input nhập email nên sử dụng type là email để chính xác hơn.

  Nếu đã sử dụng css, nên đưa thuộc tính width của table và height của td vào css.

  Các cột của table nên đồng nhất với nhau, tổng các cột trong 1 hàng là 2 tuy nhiên có 1 cột là 1.

- [x] Bài 2

  Các class nên được để có ý nghĩa để dễ sử dụng, đọc hiểu hơn. Class 'test' không rõ ý nghĩa gì cả.

  Nếu đã sử dụng css, nên đưa thuộc tính width của table vào css.

- [x] Bài 3

  Vì đây là một form biểu mẫu, nên cần được bọc một thẻ form thay vì div.

  Input nhập email nên sử dụng type là email

  Thẻ label được sử dụng cho việc gắn mác, hướng dẫn cho một trường nhập liệu, nếu sử dụng label để bổ nghĩa cho trường hợp này là sai, nên sử dụng thẻ span.

- [x] Bài 4

  Không nên sử dụng ảnh được mã hoá base64 vì nó không được cache bởi trình duyệt, và hình ảnh sẽ nặng hơn khoảng 2-30% gây hiệu năng cho trang web rất tệ, nên sử dụng một hình ảnh có đường dẫn rõ ràng để hiệu năng tốt hơn và dễ hiểu hơn.

- [x] Bài 5

  Không nên sử dụng thẻ a có href là "#!" trong trường hợp này vì đây là quick link, được sử dụng để điều hướng. Và nên sử dụng thẻ nav để bao bọc giúp định nghĩa điều hướng rõ ràng hơn.

- [x] Đánh giá chung bài tập về nhà:

  - Các folder không nên sử dụng các ký tự đặc biệt: Tiếng Việt, khoảng trắng, Viết hoa... Vì khi lên url sẽ rất xấu và có thể sẽ sai đường dẫn không mong muốn.

## [Lê Đức Anh](https://ducanhprogram.github.io/f8-fullstack-k5/Day-2/)

- [x] Bài 1

  Các phần tiêu đề nên sử dụng thẻ th để biểu thị

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Vì các tiêu đề là biểu thị cho các input tương ứng, nên sử dụng thẻ label để trực quan hơn, sử dụng thể thuộc tính for để có thể liên kết tới input tương ứng.

  Theo `validator.w3.org`, sử dụng thuộc tính width ở thẻ p là không được phép.

- [x] Bài 2

  Nên viết đủ số cột trong một table mỗi dòng, các hàng đều có chứa 2 cột, tuy nhiên ở hàng cuối chỉ có 1.

- [x] Bài 3

  Vì đây là một form biểu mẫu, nên cần được bọc một thẻ form thay vì div.

  Input nhập email nên sử dụng type là email

  Thẻ label được sử dụng cho việc gắn mác, hướng dẫn cho một trường nhập liệu, nếu sử dụng label để bổ nghĩa cho trường hợp này là sai, nên sử dụng thẻ span.

  Các cột của table nên đồng nhất với nhau, tổng các cột trong 1 hàng là 2 tuy nhiên có 1 cột là 1.

- [x] Bài 4

  Trong ul, chỉ có li được là con trực tiếp. ngoài ra không được chứa các thẻ khác là con trực tiếp. Trong bài đang có h2 và p là con trực tiếp của ul

- [x] Bài 5

  Không nên sử dụng thẻ a có href là "#!" trong trường hợp này vì đây là quick link, được sử dụng để điều hướng. Và nên sử dụng thẻ nav để bao bọc giúp định nghĩa điều hướng rõ ràng hơn.

  Trong ul, chỉ có li được là con trực tiếp. ngoài ra không được chứa các thẻ khác là con trực tiếp. Trong bài đang có footer là con trực tiếp của ul

- [x] Đánh giá chung bài tập về nhà:

  Tiêu đề đặt không rõ ràng, thứ tự tiêu đề bị đảo rất nhiều.

## [Nguyễn Ngọc Minh](view-source:https://minhhnguyenn.github.io/F8_Fullstack_BTVN/Btvnbuoi2/Dsbaitap2/Bai1.html)

- [x] Bài 1

  Bài làm **không tốt**

  Sai semantics thẻ br

  Thẻ br chỉ được sử dụng để ngắt dòng text, như trong bài đang sử dụng để ngắt 2 thẻ với nhau.

  Các tiêu đề của từng field nên tách ra thành các th riêng, thay vì sử dụng thẻ b và đặt ở cùng input.

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Cần chú ý thêm nhiều vào semantics.

  Format code rất xấu.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Vì đây là một form biểu mẫu, nên cần được bọc một thẻ form thay vì div.

  Input nhập email nên sử dụng type là email

  Các cột của table nên đồng nhất với nhau, tổng các cột trong 1 hàng là 2 tuy nhiên có một vài cột đầu là 1.

- [x] Bài 4

  Không nên sử dụng ảnh được mã hoá base64 vì nó không được cache bởi trình duyệt, và hình ảnh sẽ nặng hơn khoảng 2-30% gây hiệu năng cho trang web rất tệ, nên sử dụng một hình ảnh có đường dẫn rõ ràng để hiệu năng tốt hơn và dễ hiểu hơn.

  Không nên đặt cả width, height cho hình ảnh, có thể sẽ gây méo ảnh, tỷ lệ ảnh không đúng. Chỉ nên đặt một và chiều còn lại là auto.

- [x] Bài 5

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>Copyright Hoc Web Chuan All Right Reserved</p>
  ```

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/tree/main/buoi-2)

**Sử dụng đường dẫn tuyệt đối khiến cho ở trang home, các đường link không đúng**

- [x] Bài 1

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Vì các tiêu đề là biểu thị cho các input tương ứng, nên sử dụng thẻ label để trực quan hơn, sử dụng thể thuộc tính for để có thể liên kết tới input tương ứng.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Vì đây là một form biểu mẫu, nên cần được bọc một thẻ form thay vì div.

  Thẻ label được sử dụng cho việc gắn mác, hướng dẫn cho một trường nhập liệu, nếu sử dụng label để bổ nghĩa cho trường hợp này là sai, nên sử dụng thẻ span.

  Thuộc tính for của label là để liên kết tới một id của một trường nhập liệu, không phải để liên kết tới tên thẻ như trong bài.

- [x] Bài 4

  Không nên đặt cả width, height cho hình ảnh, có thể sẽ gây méo ảnh, tỷ lệ ảnh không đúng. Chỉ nên đặt một và chiều còn lại là auto.

- [x] Bài 5

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, rất chỉn chu, tuy nhiên cần chú ý test lại bản production khi đã deploy để tránh lỗi không mong muốn như ở trang home

## [Nguyễn Tuấn Hùng](view-source:https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN%20no.2/BVN-01.html)

- [x] Bài 1

  Không cần phải có một td ở giữa để làm khoảng trống, mỗi row chỉ cần 2 col là đủ

  Các phần nhập liệu nên sử dụng thẻ input, select để có thể nhập liệu và chọn lựa được

  Các phần tiêu đề tương ứng nên sử dụng thẻ th để thay thế thẻ td

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Vì các tiêu đề là biểu thị cho các input tương ứng, nên sử dụng thẻ label để trực quan hơn, sử dụng thể thuộc tính for để có thể liên kết tới input tương ứng.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Các phần nhập liệu nên sử dụng thẻ input để có thể nhập liệu được

  Không cần phải có một td ở cuối để làm khoảng trống, mỗi row chỉ cần 2 col là đủ

  Phần text hiển thị cùng hàng button không phải là một đoạn văn, không nên sử dụng thẻ p. Chỉ cần 1 thẻ button và một thẻ span là được

- [x] Bài 4

  Thuộc tính alt trong img được sử dụng thể hiện nội dung cho hình ảnh, vì vậy ở đây nên đưa nội dung tiêu đề của h2 vào trong alt để mang ý nghĩa tốt hơn cho ảnh.

- [x] Bài 5

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>Copyright Hoc Web Chuan All Right Reserved</p>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Các folder không nên sử dụng các ký tự đặc biệt: Tiếng Việt, khoảng trắng, Viết hoa... Vì khi lên url sẽ rất xấu và có thể sẽ sai đường dẫn không mong muốn.

## [Nguyễn Đức Nhật](view-source:https://nhat0712.github.io/f8-FS-OL/Day%202/bai1)

- [x] Bài 1

  Format code hơi xấu

  Nếu đã sử dụng style, nên đưa width của table vào style

  Tên các field name nên viết bằng tiếng anh để nhìn chuyên nghiệp hơn và ngắn gọn hơn.

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Vì các tiêu đề là biểu thị cho các input tương ứng, nên sử dụng thẻ label để trực quan hơn, sử dụng thể thuộc tính for để có thể liên kết tới input tương ứng.

  Thuộc tính action của form sử dụng để nhận biết đường dẫn cho method, không phải để tự đặt như trong bài.

- [x] Bài 2

  Sai semantics

  Tất cả không có cái nào là tiêu đề, không nên sử dụng thẻ th ở đây tránh gây nhầm lẫn.

  Cần format lại code.

- [x] Bài 3

  Vì toàn bộ trừ tiêu đề ra đều thuộc biểu mẫu. Thẻ form nên bọc tất cả lại.

  Thuộc tính action của form sử dụng để nhận biết đường dẫn cho method, không phải để tự đặt như trong bài.

  Thẻ [caption](https://www.w3schools.com/TAGs/tag_caption.asp) được sử dụng để tạo tiêu đề cho bảng, không được sử dụng như trong bài. ở đó chỉ cần sử dụng thẻ span là được

- [x] Bài 4

  Sai semantics, sai rules

  Trong ul, chỉ có li được là con trực tiếp. ngoài ra không được chứa các thẻ khác là con trực tiếp. Trong bài đang có h2 và p là con trực tiếp của ul

- [x] Bài 5

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>Copyright Hoc Web Chuan All Right Reserved</p>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Các folder không nên sử dụng các ký tự đặc biệt: Tiếng Việt, khoảng trắng, Viết hoa... Vì khi lên url sẽ rất xấu và có thể sẽ sai đường dẫn không mong muốn.

## [Lưu Ngọc Dương](view-source:https://duongluu9898.github.io/f8-fullstack/bai1.html)

- [x] Bài 1

  Bài làm tốt

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Đã sử dụng style, nên đưa các inline style vào css để dễ dàng kiểm soát hơn và đỡ rối hơn.

- [x] Bài 2

  Bài làm tốt

  Đã sử dụng style, nên đưa các inline style vào css để dễ dàng kiểm soát hơn và đỡ rối hơn.

  Phần td thể hiện kết quả nên tách style ra, đưa vào class để dễ dàng xử lý hơn

- [x] Bài 3

  Đây là một biểu mẫu nên cần bọc một thẻ form thay vì div.

  Vì toàn bộ trừ tiêu đề ra đều thuộc biểu mẫu. Thẻ form nên bọc tất cả lại.

  Đã sử dụng style, nên đưa các inline style vào css để dễ dàng kiểm soát hơn và đỡ rối hơn.

  Để tránh bị sai định dạng trong textarea, phần text trong bài nên đưa vào placeholder để user khi nhập không phải xoá text đi mà chỉ việc viết.

  Thẻ label được sử dụng cho việc gắn mác, hướng dẫn cho một trường nhập liệu, nếu sử dụng label để bổ nghĩa cho trường hợp này là sai, nên sử dụng thẻ span.

- [x] Bài 4

  Thuộc tính alt trong img được sử dụng thể hiện nội dung cho hình ảnh, vì vậy ở đây nên đưa nội dung tiêu đề của h2 vào trong alt để mang ý nghĩa tốt hơn cho ảnh.

- [x] Bài 5

  Nếu đã là footer, ở trường hợp này không thể có h2 được. Mà đơn giản chỉ là một đầu mục được in đậm bằng thẻ `b`

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>Copyright Hoc Web Chuan All Right Reserved</p>
  ```

## [Trịnh Nam Trường](view-source:https://truongtn04.github.io/f8-fullstack-k5/day02)

- [x] Bài 1

  Các thuộc tính không sử dụng, có giá trị trống nên được bỏ đi để tránh gây nhầm lẫn và rối code

  Các thẻ label có thuộc tính for để chỉ định tới một id của một field nhập liệu, nên đưa một id unique vaò input và thêm id đó vào for của label.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Input nhập email nên sử dụng type là email cho chính xác hơn.

- [x] Bài 4

  Các tiêu đề của list có thể là các đầu mục. Nên sử dụng `h2` nếu nó là một trang hoàn chỉnh, nếu là một phần nhỏ của trang web có thể là h3.

  Thuộc tính alt trong img được sử dụng thể hiện nội dung cho hình ảnh, vì vậy ở đây nên đưa nội dung tiêu đề của h2 vào trong alt để mang ý nghĩa tốt hơn cho ảnh.

- [x] Bài 5

  Nếu đã là footer, ở trường hợp này không thể có h2 được. Mà đơn giản chỉ là một đầu mục được in đậm bằng thẻ `b`

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
    laudantium!
  </p>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm có sáng tạo

  Thiếu thẻ mở body

  Nếu như coi tất cả là một trang web, trong bài 1 không thể nào là h1 vì nó cùng cấp ý nghĩa với bài 2, 3, 4, 5... Thay vì đó tất cả là h2.

  - Thẻ h1 trong bài có thể là :

    ```html
    <h1>Bài tập về nhà buổi 2</h1>
    ```

  Phần navbar menu click nên được bọc một thẻ nav vào để thể hiện rõ là một menu điều hướng.

## [Đinh Việt Hùng](https://hungskygaren.github.io/fullstack-k5/Day2/Bai1.html)

- [x] Bài 1

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Input nhập email nên sử dụng type là email để chính xác hơn.

  Vì các tiêu đề là biểu thị cho các input tương ứng, nên sử dụng thẻ label để trực quan hơn, sử dụng thể thuộc tính for để có thể liên kết tới input tương ứng.

- [x] Bài 2

  Đã sử dụng style, nên đưa các inline style vào css để dễ dàng kiểm soát hơn và đỡ rối hơn.

  Phần td thể hiện kết quả nên tách style ra, đưa vào class để dễ dàng xử lý hơn

- [x] Bài 3

  Đây là một biểu mẫu nên cần bọc một thẻ form thay vì div.

  Vì toàn bộ trừ tiêu đề ra đều thuộc biểu mẫu. Thẻ form nên bọc tất cả lại.

  Đã sử dụng style, nên đưa các inline style vào css để dễ dàng kiểm soát hơn và đỡ rối hơn.

  Để tránh bị sai định dạng trong textarea, phần text trong bài nên đưa vào placeholder để user khi nhập không phải xoá text đi mà chỉ việc viết.

  Thẻ label được sử dụng cho việc gắn mác, hướng dẫn cho một trường nhập liệu, nếu sử dụng label để bổ nghĩa cho trường hợp này là sai, nên sử dụng thẻ span.

- [x] Bài 4

  Đã sử dụng style, nên đưa các inline style vào css để dễ dàng kiểm soát hơn và đỡ rối hơn.

  Thuộc tính alt trong img được sử dụng thể hiện nội dung cho hình ảnh, vì vậy ở đây nên đưa nội dung tiêu đề của h2 vào trong alt để mang ý nghĩa tốt hơn cho ảnh.

- [x] Bài 5

  Nếu đã là footer, ở trường hợp này không thể có h2 được. Mà đơn giản chỉ là một đầu mục được in đậm bằng thẻ `b`

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
    laudantium!
  </p>
  ```

- [x] Đánh gía chung bài tập về nhà:

  Các tiêu đề của trang web nên được chỉn chu hơn, không nên chỉ để là Document.

## [Viên Đình Cường](view-source:https://vdcsk8.github.io/f8-fullstack-FSK5/ex01.html)

- [x] Bài 1

  Đây là một biểu mẫu nên cần bọc một thẻ form ra ngoài table.

  Input nhập email nên sử dụng type là email để chính xác hơn.

  Vì các tiêu đề là biểu thị cho các input tương ứng, nên sử dụng thẻ label để trực quan hơn, sử dụng thể thuộc tính for để có thể liên kết tới input tương ứng.

  Các phần tiêu đề nên sử dụng thẻ th để biểu thị thay vì td và thẻ b để in đậm

  Thừa một phần full cấu trúc HTML ở dưới đáy, sai hoàn toàn định dạng một trang html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body></body>
  </html>
  ```

- [x] Bài 2

  Sai semantics

  Ở trong bài không hề có một tiêu đề bảng nào cũng không có tiêu đề nào

  Không được sử dụng th, thay vào đó có thể sử dụng

  ```html
  <td align="left">
    <b>1</b>
  </td>
  <td>
    <b>1</b>
  </td>
  ```

- [x] Bài 3

  Cần format lại code.

  Không được bọc thẻ inline vào thẻ block, trong bài đang bọc label vào h2

  Sai hoàn toàn semantics khi bọc div vào br và không có ý nghĩa gì cả.

  Input nhập email nên sử dụng type là email

  Đây là một biểu mẫu nên cần bọc một thẻ form thay vì div.

  Vì toàn bộ trừ tiêu đề ra đều thuộc biểu mẫu. Thẻ form nên bọc tất cả lại.

  Thẻ label được sử dụng cho việc gắn mác, hướng dẫn cho một trường nhập liệu, nếu sử dụng label để bổ nghĩa cho trường hợp này là sai, nên sử dụng thẻ span.

- [x] Bài 4

  Không nên sử dụng ảnh được mã hoá base64 vì nó không được cache bởi trình duyệt, và hình ảnh sẽ nặng hơn khoảng 2-30% gây hiệu năng cho trang web rất tệ, nên sử dụng một hình ảnh có đường dẫn rõ ràng để hiệu năng tốt hơn và dễ hiểu hơn.

  Các list có cùng một ý nghĩa nên được đưa vào một ul, không phải mỗi list là một ul.

- [x] Bài 5

  Thẻ h2 vốn đã có style in đậm, không cần phải bọc thêm thẻ b vào làm gì.

  Phần quick link là một thành phần điều hướng, nên sử dụng thẻ nav để bọc ul.

  Thành phần này không thể hiện là một **đoạn văn** chỉ là một dòng text đơn thuần, nên sử dụng span thay cho p

  ```html
  <p>Copyright Hoc web Chuan All Right Reserved</p>
  ```
