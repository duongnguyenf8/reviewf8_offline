# Dương review bài tập về nhà buổi 39 - Lớp K3

## [Vương Đông](https://dongvuong.github.io/f8-fullstack-k3/DAY39/index.html)

- [x] Bài 1

  Bài làm rất tốt

  Tất cả các case đều làm rất tốt

  Trừ link localhost

  **Code format**

  Không nên sử dụng tên function sử dụng camelCase thay vì viết hoa chữ đầu tiên, tránh bị nhầm lẫn với function constructor, class...

  Một số đoạn regex có thể gộp lại:

  ```javascript
  export const telephone = /^((?:0|\+84)\d{9})$/;
  export const telephoneNoPlus = /^((84)\d{9})$/;
  export const linkWebHttps =
    /^(((http|https):\/\/)+[a-zA-Z0-9-_\.]+\.[a-z]{2,}[a-zA-Z0-9-_\.\/\?\=&]*)$/;
  export const linkWebNonHttps =
    /^([a-zA-Z0-9-_\.]+\.[a-z]{2,}[a-zA-Z0-9-_\.\/\?\=&]*)$/;
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Các đoạn code phân tách rất tốt, cần chú ý về quy tắc đặt tên và tái sử dụng tốt các biến đã khởi tạo.

## [Cường](https://cuonggold2408.github.io/Fullxinach_K3/Day_39/)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa xử lý phần refresh Token tốt

  Các link chưa được xử lý hầu hết ở phần link youtube và các link không chứa giao thức

  Các đường link: `youtube.com/watch?vi=0nn_fOjcYM0` thì chỉ highlight được: `youtube.com/watch`

  Chưa có phần profile, chi tiết blog

  **Code format**

  Các đoạn code phân tách không rõ ràng, các phần code chức năng đang ghi chung file với các phần code render html khiến code rất rối.

  Hầu như chưa tách file mà viết toàn bộ vào 1 file

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Case refreshToken lúc ở nhà đã sửa nhưng có vẻ chưa deploy, case regex cắt chưa tốt lắm.

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/Day37/index.html)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa xử lý phần refresh Token tốt

  Chưa xử lý nhiều xuống dòng, nhiều khoảng trắng

  Case video: `www.youtu.be/0nn_fOjcYM0` chưa xử lý được

  Chưa xử lý link localhost

  Chưa có phần profile, chi tiết blog

  **Code format**

  Các đoạn code phân tách không rõ ràng, các phần code chức năng đang ghi chung file với các phần code render html khiến code rất rối.

  Hầu như chưa tách file mà viết toàn bộ vào 1 file

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Case refreshToken lúc ở nhà đã sửa nhưng có vẻ chưa deploy, case regex cắt chưa tốt lắm.
