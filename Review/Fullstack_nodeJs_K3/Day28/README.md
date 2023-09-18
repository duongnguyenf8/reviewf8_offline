# Dương review bài tập về nhà buổi 28 - Lớp K3

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] Bài 1

  Bài làm rất tốt \*

  Nên hiển thị lời trước khoảng vài giây trước khi hát, để user có thể dễ bắt nhịp

  Khi tua, nhạc không được ngừng mà vẫn chạy đúng, khi mouseup thì mới cập nhật currentTime

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

---

## [Nguyễn Quang Cường](https://cuonggold2408.github.io/Fullxinach_K3/Day_28/)

- [x] Bài 1

  Bài làm rất tốt \*

  Nên hiển thị lời trước khoảng vài giây trước khi hát, để user có thể dễ bắt nhịp

  Phần hasLyricsToDisplay luôn hiển thị true có thể vì dòng logic `i < startIndex + 2 && i < lyricData.data.sentences.length;`

  Vòng for phải lặp đến cuối mới thấy được trường hợp `i < lyricData.data.sentences.length;` còn lúc nào i cũng nhỏ hơn `lyricData.data.sentences.length`. Thay vì check bằng vòng for, có thể check thời gian endTime của từ cuối cùng câu trước, với startTime của từ đầu tiên câu sau cách xa nhau khoảng 10 giây thì hiển thị đang chờ nhạc, hoặc thông tin bài hát.

  Phần cập nhật lời bài hát khi tua, có thể viết một hàm getLyric truyền vào currentTime, vậy lúc tua sẽ cần gọi hàm đó vào và truyền đúng currentTime là được.

  Khi tua đi thì có thể cập nhật lời, tuy nhiên tua ngược lại thì không.

  Khi chờ nhạc, không hiển thị thông tin bài hát mà đang hiển thị câu trước đó.

  Bài làm có highlight tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

---

## [Vũ Thống](https://pencilbsp.github.io/f8_offline/BTVN/btvn_buoi_28/)

- [x] Bài 1

  Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

---

## [Phí Văn Đức](https://phivanduc.github.io/Offline-F8-K3/Day-28-JS/)

- [x] Bài 1

  Bài làm rất tốt \*

  Nên hiển thị lời trước khoảng vài giây trước khi hát, để user có thể dễ bắt nhịp

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

---
