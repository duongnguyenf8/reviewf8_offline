# Dương review bài tập về nhà buổi 26 Lớp K1

## [Luu Anh Quan](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day26/index.html)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Khi ở video ở các theme chưa load xong hoặc khi hover các icon chưa được nổi bật.

  - Có thể xử lý bằng cách: Thay lại màu của btn khi hover

  - Thay đổi màu `.dashboard` để khi đang load các video không bị khó nhìn. Hiện đang để màu trắng `#fff`

  Các nút bấm không cần thiết phải bôi đen, nên sử dụng:

  ```css
  .control .btn {
    user-select: none;
  }
  ```

  Để người dùng khi bấm các nút nhanh quá không bị bôi đen.

  Khi next nhanh, các bài cuối sẽ khiến scroll làm bôi đen nhiều phần, có thể xử lý bằng cách sau khi phát nhạc mới scroll đến.

  Trong khoảng 30s đầu khi phát 1 bài hát mới, nút bấm đang bị lệch so với thanh progress 1 khoảng bằng `translateX 50%`

  Khi dừng nhạc, next bài nên reset time và progressBar luôn để tránh user bị hiểu nhầm ý rằng sẽ phát tiếp bài nhạc mới ở giây đó.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Chỉ cần chú ý thêm các phần nhỏ để user cảm thấy dễ dùng hơn.

---

## [Nguyen Xuan Tuan Anh](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day26/index.html)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Khi chưa load xong thumb và ảnh các bài hát, có thể thêm 1 placeholder bằng CSS để không bị trống rỗng.

  Tính năng Random bài hát chưa được tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Chỉ cần chú ý thêm các phần nhỏ để user cảm thấy dễ dùng hơn.

  Có thể phát triển thêm chức năng Random.

---

## [Duong Hiep](https://duonghiep416.github.io/clone-zingmp3/)

- [x] [Bài 1]

  Bài làm tốt \*

  Khi bấm vào trong chấm tròn, đang bị load lại bài hát từ đầu.

  Khi dừng nhạc, next bài nên reset time và progressBar luôn để tránh user bị hiểu nhầm ý rằng sẽ phát tiếp bài nhạc mới ở giây đó.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên chưa xử lý một số lỗi nhỏ khiến trải nghiệm của user không được tốt.

---
