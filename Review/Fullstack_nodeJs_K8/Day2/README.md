# Dương review bài tập về nhà buổi 2 - Lớp K8

## [Cu tien thinh](https://thinh060903.github.io/F8-Fullstack-K8/Day-2/ex01.html)

- [x] Bài 1

  Bài làm tốt

  **Sai semantics**

  Nếu đã sử dụng CSS, nên sử dụng CSS internal, external, không nên sử dụng inline style. Sẽ rất khó để sử dụng và style, không kế thừa được.

  Input **không có type** là name, city, code,... Nên tham khảo trên [w3](https://www.w3schools.com/tags/tag_input.asp) để biết và sử dụng tốt hơn.

  Nếu không viết, type mặc định là text, và cũng không cần phải thêm. Nếu đã có type phải có giá trị, không phải như ở input address.

  Các input cần có name hợp lý để khi submit form có thể lấy được dễ dàng hơn.

  Đây là một form có nhiều trường, cần bọc thẻ form vào.

- [x] Bài 2

  Bài làm tốt

  **Sai semantics**

  Nếu đã sử dụng CSS, nên sử dụng CSS internal, external, không nên sử dụng inline style. Sẽ rất khó để sử dụng và style, không kế thừa được.

  Tiêu đề để thể hiện một nội dung chính tóm tắt cho 1 phần nào đó. Nhưng **9+9** thì không. Nó không phải tiêu đề, không nên sử dụng `<th>`

- [x] Bài 3

  Bài làm tốt

  **Sai semantics**

  Đây là một form có nhiều trường, cần bọc thẻ form vào.

  Input nhập email nên sử dụng `type="email"`

- [x] Bài 4

  Bài làm tốt

  **Sai semantics**

  Thuộc tính alt của ảnh được sử dụng để mô tả về hình ảnh, trong trường hợp lỗi hoặc để cho các bot có thể đọc được.

  Đây là một bài viết, tiêu đề của nó phải là heading. Có thể là h2 hoặc h3, và có ý nghĩa, không phải chỉ sử dụng thẻ non semantics.

- [x] Bài 5

  Bài làm tốt

  **Sai semantics**

  Đây là một footer, có nhiều đầu mục trong footer. Nên thể hiện các đầu mục bằng heading h2, thay vì chỉ sử dụng thẻ non semantics.

## [Le Nhung](https://nhunglt1801.github.io/f8-fullstack-k8-exercise/day-2/ex01.html)

- [x] Bài 1

  Bài làm tốt\*

  Trong các hàng của table nên có số cột bằng nhau, nhưng ở hàng button chỉ có một cột.

- [x] Bài 2

  Bài làm tốt

  **Sai semantics**

  Tiêu đề để thể hiện một nội dung chính tóm tắt cho 1 phần nào đó. Nhưng **9+9**, **+**, **-**,.. thì không. Nó không phải tiêu đề, không nên sử dụng `<th>`

- [x] Bài 3

  Bài làm tốt\*

  Trong các hàng của table nên có số cột bằng nhau, nhưng ở hàng button chỉ có một cột.

- [x] Bài 4

  Bài làm rất tốt

- [x] Bài 5

  Bài làm tốt

  Các thuộc tính đã ghi vào và yêu cầu một giá trị thì cần có giá trị. Thuộc tính target không có giá trị nào là trống.

## [Nguyễn Xuân Phong](https://xuanphong03.github.io/Fullstack-Offline-F8/day-2/bai01.html)

- [x] Bài 1

  Bài làm tốt

  Không nên sử dụng default value cho input, vì sẽ khó khăn và khi user nhập sẽ phải xóa đi ghi lại.

  Các input cần có name hợp lý để khi submit form có thể lấy được dễ dàng hơn.

  Đây là một form, chỉ cần bọc vào các trường cần thiết, không cần bọc cả tiêu đề, desc.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Bài làm tốt

  Đây là một form, chỉ cần bọc vào các trường cần thiết, không cần bọc cả tiêu đề, desc.

- [x] Bài 4

  Bài làm chưa tốt

  **Sai semantics**

  Thuộc tính alt của ảnh được sử dụng để mô tả về hình ảnh, trong trường hợp lỗi hoặc để cho các bot có thể đọc được.

  Các thẻ li phải là con trực tiếp của thẻ ul, ol, không phải là ở ngoài ul như trong bài

- [x] Bài 5

  Bài làm rất tốt

## [Nguyễn Quang Khải](https://khainq-k.github.io/f8-fullstack-k8/Day_2)

- [x] Bài 1

  Bài làm tốt

  Các input cần có name hợp lý để khi submit form có thể lấy được dễ dàng hơn.

  Các input thiếu placeholder như bản mẫu.

  Input nhập email nên có type là email.

- [x] Bài 2

  Bài làm tốt

  Thẻ style không phải là thẻ con trực tiếp của thẻ html. Nó phải nằm trong head hoặc body

- [x] Bài 3

  Bài làm tốt

  Trong các hàng của table nên có số cột bằng nhau, nhưng ở hàng button chỉ có một cột.

- [x] Bài 4

  Bài làm rất tốt

- [x] Bài 5

  Bài làm rất tốt

## [Phạm Trung Tuyển](https://ptt-fullstack.github.io/F8-FULLSTACK-K8/DAY-2/Ex01.html)

Tên folder, tên file nên đặt hợp lý, tránh đặt viết hoa hay ký tự đặc biệt sẽ sinh ra url rất xấu và đôi lúc sẽ bị lỗi đường dẫn.

- [x] Bài 1

  Bài làm **không** tốt

  **Sai semantics**

  Thẻ br chỉ được sử dụng để ngắt dòng văn bản, đoạn văn.

  Đây là một form điền thông tin, nên bọc thẻ form vào.

  className nên đặt tường minh và có ý nghĩa, class **d1** không mang ý nghĩa cụ thể nào cả.

  Phần input nhập email nên sử dung type là email.

  Đoạn văn bản sau tiêu đề nằm bổ nghĩa và xác định ý nghĩa cho form nhập liệu, nó là một **đoạn văn**, nên sử dụng thẻ p chứ không phải thẻ div

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Bài làm **không** tốt

  **Sai semantics**

  Thẻ br chỉ được sử dụng để ngắt dòng văn bản, đoạn văn.

  Đây là một form điền thông tin, nên bọc thẻ form vào.

  Phần input nhập email nên sử dung type là email.

- [x] Bài 4

  Bài làm chưa tốt

  **Sai semantics**

  Thuộc tính alt của ảnh được sử dụng để mô tả về hình ảnh, trong trường hợp lỗi hoặc để cho các bot có thể đọc được.

  Đây là một bài viết, tiêu đề của nó phải là heading. Có thể là h2 hoặc h3, và có ý nghĩa, không phải chỉ sử dụng thẻ p.

- [x] Bài 5

  Bài làm chưa tốt

  Các tiêu đề trong bài đều mang cùng một ý nghĩa, không nên phân biệt heading h1, h2, tất cả đều nên là h2

  Đây là một footer, có nhiều đầu mục trong footer. Nên thể hiện các đầu mục bằng heading h2.

  Nên format lại code, các thẻ có cùng cấp nên được xếp ngang hàng nhau.

  Trong bài tập, không cần thiết phải sử dung script để sử dụng font icon, nó sẽ rất nặng, có thể sử dụng link css min sẽ nhẹ hơn.

## [Vũ Trí Tùng](https://tungv62333.github.io/f8-offline-k8/lesson-2/ex01.html)

- [x] Bài 1

  Bài làm **chưa** tốt

  Đây là một form điền thông tin, nên bọc thẻ form vào.

  Phần input nhập email nên sử dung type là email.

  Đã sử dụng CSS, nên sử dụng internal hoặc external, tránh sử dụng inline style sẽ rất khó nhìn, sửa chữa và không thể kế thừa, gọi lại.

- [x] Bài 2

  Bài làm **chưa** tốt

  Tiêu đề để thể hiện một nội dung chính tóm tắt cho 1 phần nào đó. Nhưng **9+9** thì không. Nó không phải tiêu đề, không nên sử dụng `<th>`

  Đã sử dụng CSS, nên sử dụng internal hoặc external, tránh sử dụng inline style sẽ rất khó nhìn, sửa chữa và không thể kế thừa, gọi lại.

  Trong các hàng của table nên có số cột bằng nhau.

- [x] Bài 3

  Bài làm **chưa** tốt

  Đây là một form điền thông tin, nên bọc thẻ form vào.

  Phần input nhập email nên sử dung type là email.

  Đã sử dụng CSS, nên sử dụng internal hoặc external, tránh sử dụng inline style sẽ rất khó nhìn, sửa chữa và không thể kế thừa, gọi lại.

- [x] Bài 4

  Bài làm chưa tốt

  **Sai semantics**

  Thuộc tính alt của ảnh được sử dụng để mô tả về hình ảnh, trong trường hợp lỗi hoặc để cho các bot có thể đọc được.

  Các li trong ul được thể hiện là liệt kê **cùng tầng ý nghĩa**, không cần phải bọc ul trong li con rồi lại chia tiếp và sử dụng CSS để ẩn dot. Như thế chỉ đúng phần giao diện.

- [x] Bài 5

  Bài làm rất tốt

## [Bùi Đức Dương](https://buiduong2.github.io/F8-offline/day02/)

- [x] Bài 1

  Bài làm rất tốt

  Đây là một form, chỉ cần bọc vào các trường cần thiết, không cần bọc cả tiêu đề, desc.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Bài làm tốt\*

  Trong các hàng của table nên có số cột bằng nhau.

- [x] Bài 4

  Bài làm rất tốt

- [x] Bài 5

  Bài làm rất tốt

## [Vũ thị hoài thu](https://hoaithu222.github.io/f8_offline_k8/)

- [x] Bài 1

  Bài làm tốt

  Các name hoặc thuộc tính,.. nên sử dụng tiếng anh để trông chuyên nghiệp hơn.

  Phần button không phải là một tiêu đề, không nên sử dụng thẻ th.

  Trong các hàng của table nên có số cột bằng nhau.

- [x] Bài 2

  Bài làm **không** tốt

  Thiếu một hàng hiển thị kết quả.

- [x] Bài 3

  Bài làm tốt

  **Nên format lại code**

  Trong các hàng của table nên có số cột bằng nhau.

- [x] Bài 4

  Bài làm tốt

  Thuộc tính alt của ảnh được sử dụng để **mô tả về hình ảnh**, trong trường hợp lỗi hoặc để cho các bot có thể đọc được.

- [x] Bài 5

  Bài làm rất tốt

  **Nên format lại code**

## [Thuân Minh](https://minhthuan1809.github.io/f8-fullstack-k8/day-2/bai1.html/)

- [x] Bài 1

  Bài làm rất tốt

  Input nhập email nên sử dụng type là email.

- [x] Bài 2

  Bài làm tốt

  Tiêu đề để thể hiện một nội dung chính tóm tắt cho 1 phần nào đó. Nhưng **9+9** thì không. Nó không phải tiêu đề, không nên sử dụng `<th>`

- [x] Bài 3

  Bài làm **KHÔNG** tốt

  **Nên format lại code**, xem lại các thẻ mở đóng sai hầu hết.

  Các field trong form nên được nằm trong thẻ form.

- [x] Bài 4

  Bài làm rất tốt

- [x] Bài 5

  Bài làm **KHÔNG** tốt

  **Sai semantics**

  Trong một trang web chỉ có **duy nhất một** thẻ h1.

  Các svg có thể lưu thành dạng file svg và sử dụng như một img.

## [Lê Công Anh Tú](https://lcatintheclouds.github.io/F8_FullStack_Offline_K8/)

Nên chú ý hơn vào thẻ title, nó giúp người dùng và các bot hiểu được một bản **tóm tắt** của trang web.

- [x] Bài 1

  Bài làm rất tốt

- [x] Bài 2

  Bài làm tốt

  **Nên format lại code**

  Tiêu đề để thể hiện một nội dung chính tóm tắt cho 1 phần nào đó. Nhưng **9+9** thì không. Nó không phải tiêu đề, không nên sử dụng `<th>`

- [x] Bài 3

  Bài làm tốt

  Trong các hàng của table nên có số cột bằng nhau.

- [x] Bài 4

  Bài làm rất tốt

- [x] Bài 5

  Bài làm tốt

  **Nên format lại code**

## [Doãn Trung Thành](https://thanhdtka.github.io/f8_fullstack_thanhdt/day_2/bai1.html/)

- [x] Bài 1

  Bài làm **không** tốt

  **Sai semantics**

  Thẻ br chỉ được sử dụng để ngắt dòng văn bản, đoạn văn.

  Đây là một form điền thông tin, nên bọc thẻ form vào.

  Input **không có type** là inputname Nên tham khảo trên [w3](https://www.w3schools.com/tags/tag_input.asp) để biết và sử dụng tốt hơn.

  Đoạn văn bản sau tiêu đề nằm bổ nghĩa và xác định ý nghĩa cho form nhập liệu, nó là một **đoạn văn**, nên sử dụng thẻ p

  Thẻ tr không có thuộc tính height.

  Thuộc tính for trong label được sử dụng để trỏ tới một id của một field giúp nó accessibility tốt hơn. Không phải là trỏ bừa bãi.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Bài làm **không** tốt

  **Sai semantics**

  Thẻ br chỉ được sử dụng để ngắt dòng văn bản, đoạn văn.ch

  Đây là một form điền thông tin, nên bọc thẻ form vào.

- [x] Bài 4

  Bài làm tốt

  Nên xem lại và clean lại code, có một thuộc tính tên là **/** trong các thẻ img.

  Thuộc tính alt của ảnh được sử dụng để mô tả về hình ảnh, trong trường hợp lỗi hoặc để cho các bot có thể đọc được.

- [x] Bài 5

  Bài làm tốt
