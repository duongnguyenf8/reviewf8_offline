# Duong Review bài tập về nhà buổi 36 - Lớp K1

## [Nguyễn Xuân Tuấn Anh](https://xuananh2212.github.io/js-fullstack/day36/)

- [x] Bài 1

  Bài làm tốt \*

  **Action features**

  Bài làm tốt

  Thiếu một số case trong đều bài như:

  Không có random đổi chỗ thứ tự câu trả lời qua mỗi lượt

  Không có random đổi chỗ thứ tự đáp án của mỗi câu qua mỗi lượt

  **Code format**

  Render cả phần `data-correct` lên UI là không tốt, không khác gì việc nhắc bài cho user.

  Các function không phải hàm tạo không nên viết hoa tránh gây nhầm lẫn cho các function khác

  - `RenderHtml()` ở trong `renderUI.js`
  - `RenderCorrectBottom()` ở trong `renderUI.js`

  Phần endpoint fetching đang xấu và gây khó hiểu: `/questions/?`

  Phần check đáp án đúng 1 là nên xử lý ở phía server, nếu không ở đây mình sẽ xử lý trong vòng lặp để check xem id của đáp án chọn có trùng id đáp án đúng không hoặc check `answer.correct` có true không.

  Chưa rõ ý đồ gán biến ở các đoạn code dạng như này mặc dù chỉ gọi 1 lần:

  ```javascript
  const get = getQuestions();
  get.then(({ data, response }) => {
    //...
  });
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chạy tốt, tuy nhiên phần code vẫn nên cải thiện nhiều(Hơi ẩu)

## [Dương Hiệp](https://duonghiep416.github.io/duonghiep_f8_fullstack/Day36/)

- [x] Bài 1

  Bài làm tốt \*

  **Action features**

  Bài làm tốt

  Thiếu một số case trong đều bài như:

  Không có random đổi chỗ thứ tự câu trả lời qua mỗi lượt

  Không có random đổi chỗ thứ tự đáp án của mỗi câu qua mỗi lượt

  Chưa tính điểm theo timeline, trả lời khi gần hết giờ và khi còn nhiều thời gian là như nhau.

  Khi gần hết giờ đã chuyển câu.

  Khi gần hết giờ mà chọn đáp án thì bị chuyển 2 trang.

  **Code format**

  Nên thiết kế lại phần DB, thayy vì đáp án đúng phải viết content đầy đủ thì có thể chỉ cần viết index của đáp án đúng.

  Chưa rõ ý đồ gán func ở 2 func này mặc dù chỉ gọi 1 lần:

  ```javascript
  animate();
  renderQuestion();
  ```

  Các function dạng action có thể tách ra thành 1 file code khác rồi khi cần/cái nào cần thì gọi sang file main và sử dụng, như vậy sẽ dễ dàng đọc, sửa code hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm chạy tốt, tuy nhiên phần code vẫn nên cải thiện nhiều(Hơi **loằng ngoằng**)

## [Luu Anh Quan](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day36/index.html)

- [x] Bài 1

  Bài làm tốt

  **Action features**

  Bài làm tốt

  Thiếu một số case trong đều bài như:

  Chưa tính điểm theo timeline, trả lời khi gần hết giờ và khi còn nhiều thời gian là như nhau.

  Khi click nhiều lần, data gửi lên liên tục, không có loading hay disabled khiến cho bài làm bị sai.

  **Code format**

  Code formatrất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm code tốt, tuy nhiên cần chú ý làm thêm đủ các chức năng.
