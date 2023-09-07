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

## [Hồng Hà Nguyễn Thị](https://ha752002.github.io/f8-fullstack-k2/Ex_Javascript/day26)

- [x] [Bài 1]

  Bài làm rất tốt

  Sau khi dừng nhạc, thanh timeline đang bị chạy thêm 1 đoạn. Phần hình ảnh đang bị giật về đầu.

  Nên xử lý thanh timeline bằng `div` sẽ dễ custom, dễ xử lý hơn.

  Khi bấm giữ, chưa update được time như cách bấm mà đang bị trở về lúc trước đã chạy.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên chưa xử lý một số lỗi nhỏ khiến trải nghiệm của user không được tốt.

---

## [Duy Hiếu Nguyễn](https://hieuboss.github.io/F8-fullstack-k2/javascript/lesson11/ex1/ex1.html)

- [x] [Bài 1]

  Bài làm tốt\*

  Khi kéo tua, bấm tua thanh timeline đang bị nhảy loạn sau đó mới về đúng vị trí.

  Khi bấm giữ, chưa update được time như cách bấm mà đang bị trở về lúc trước đã chạy.

  Thời gian trên tooltip lệch một vài giây so với thời gian trên timeline.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên chưa xử lý một số lỗi nhỏ khiến trải nghiệm của user không được tốt.

---

## [Dương Quốc Anh](https://quocanh-bit.github.io/F8_fullstack_006/buoi_26/index.html)

- [x] [Bài 1]

  Bài làm tốt

  Khi bấm ở ngoài, vẫn bị tác động lên thanh nhạc.

  Khi bấm chuột trái vẫn tua được nhạc.

  Khi kéo tua ra ngoài, bôi đen vào chữ, thì lần sau kéo ra ngoài sẽ không bắt được sự kiện `mouse up`

  Lần đầu vào trang, chưa load được tổng thời gian của bài hát.

  Các số hiện thị thời gian chưa đồng nhất, cái có dấu cách, cái không có.

  Chưa xóa các `console.log` khi đưa lên production.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên chưa xử lý một số lỗi nhỏ khiến trải nghiệm của user không được tốt.

---

## [Tuấn Phạm](https://phamtuan162.github.io/phamtuan-nodejs-01/Buoi26/)

- [x] [Bài 1]

  Bài làm tốt\*

  Khi bấm vào bài hát vẫn đang bị dừng nhạc

  Style bài nhạc đang phát chưa được tốt.

  Style tooltip chưa được tốt

  Khi bấm vào góc chấm tròn, đang bị load lại bài hát từ đầu.

  Khi dừng nhạc, next bài nên reset time và progressBar luôn để tránh user bị hiểu nhầm ý rằng sẽ phát tiếp bài nhạc mới ở giây đó.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\* Tuy nhiên chưa xử lý một số lỗi nhỏ khiến trải nghiệm của user không được tốt.

---

## [Phan Trung Hiếu](https://pth2003.github.io/FullStack_Nodejs_K1/JavaScript/buoi_26/bai_tap/)

- [x] [Bài 1]

  Bài làm tốt

  Style tooltip chưa tốt.

  Chức năng bấm tua chưa tốt.

  Chưa xử lý hiện số 0 ở phút. Chưa xử lý tốt style khiến cho thanh timeline bị giật.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt Tuy nhiên chưa xử lý đủ và tốt case bấm để tua.

---

## [Tạ Minh Quang](https://taminhquang13.github.io/F8_Fullstack/BT26/index.html)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Chưa xử lý tốt phần tooltip khi đang bị nổi bọt với chấm tròn.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* Cần chú ý fix case tooltip để bài làm hoàn thiện.

---

## [Bi11-043 Đỗ Hà Chi](https://serenaha12.github.io/fullstack_nodeJS/hoc_javascript/btvn_26/ex04/index.html)

- [x] [Bài 1]

  Bài làm rất tốt

  Style phần kéo hơi khó dùng.

  Khi kéo, nhạc đang update theo quá nhanh khiến cho nhạc phát không được tốt.

  Khi kéo, phần thời gian bên trái bị delay chưa cập nhật tốt. Có thể là so phần `setInterval`

  Sau khi phát hết bài, đã tua lại từ đầu và pause tuy nhiên phần hình ảnh vẫn quay. Vì vậy sau khi bật lại nhạc thì hình ảnh bị dừng.

  Phần time trên tooltip và thời gian bên trái bị lệch nhau.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* Tuy nhiên chưa xử lý một số lỗi nhỏ khiến trải nghiệm của user không được tốt.

---

## [Hoài Nam Đỗ](https://oaihman25.github.io/btvn)

- [x] [Bài 1]

  Bài làm chưa tốt

  Xử lý phần bấm tua chưa tốt.

  Xử lý phần kéo tua chưa tốt, thanh timeline vẫn đang chạy theo nhạc cũ.

  Khi bấm vào chấm tròn đang bị phát lại từ đầu.

  Sau khi hết nhạc dựa theo thời gian hết, nhạc vẫn chạy thêm 5 giây.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, các case xử lý chưa trọn vẹn. Cần cố gắng xử lý tốt hơn.

---

## [Nam Nguyễn](https://namnguyen2603.github.io/nguyentrungnam_bai26)

- [x] [Bài 1]

  Bài làm chưa tốt

  Xử lý phần kéo tua chưa tốt, khi click vào chấm tròn để kéo thì bị về đầu.

  Khi bấm vào chấm tròn đang bị phát lại từ đầu.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, các case xử lý chưa trọn vẹn. Cần cố gắng xử lý tốt hơn.

---
