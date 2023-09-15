# Dương review bài tập về nhà buổi 28 - Lớp K2

## [Vũ Đức Tài](https://apeiron2.github.io/F8-fullstack-K2/homework/day_28)

**Sớm nhất**

- [x] Bài 1

  Bài làm tốt\*

  Chức năng tua đang bị sai.

  Cả khi kéo, khi bấm tua đều đang sai tỷ lệ với progress-bar.

  Khi mouseup ở progress-bar, đang bị lỗi lặp lại câu hát.

  Khi load xong audio, chưa update lại thời gian hết của bài nhạc.

  Khi bôi đen text, sự kiện mouseup sẽ không hoạt động. Các dòng số hiển thị thời gian trong bài không cần thiết phải được bôi đen, nên sử dụng

  ```css
  span {
    user-select: none;
  }
  ```
