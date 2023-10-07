# Nam review bài học viên lớp k3-fullstack

## [Trần Xuân Bách](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day33)

- [x] Bài 1:

  Bài làm tốt\*.

  **Usage feature:**

  Các tính năng của bài trải nghiệm rất tốt

  **Hidden feature**

  Xử lý rất tốt khi sử dụng trình duyệt Edge

  **Special Feature**

  Tính năng của bài hoạt động tốt trên trình duyệt Edge

  **Format code**

  Các đoạn code xử lý lời nói quá thủ công. Có thể tham khảo đoạn sau:

  ```Javascript
    textVoice = textVoice.toLowerCase()
    if(textVoice.includes("chỉ đường") || textVoice.includes("tới") || textVoice.includes("đường tới")) {
      const newVoice = textVoice
        .replace("chỉ đường", "")     //Thay thế tất cả từ 'chỉ đường' trong chuỗi thành ""
        .replace("tới", "")           //Thay thế tất cả từ 'tới' trong chuỗi thành ""
        .replace("đường tới", "")     //Thay thế tất cả từ 'đường tới' trong chuỗi thành ""
        .trim();

      const url = `https://www.google.com/maps/search/${newVoice}`;
      window.open(url.trim());
    }

    //Các phần mở bài hát zingmp3 và xem video youtube xử lý tương tự như trên.
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần sửa lại logic xử lý phần chỉ đường, nghe nhạc, xem video.

---

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_33)

- [x] Bài 1:

  Bài làm rất tốt\*.

  **Usage feature:**

  Các tính năng của bài trải nghiệm rất tốt

  **Hidden feature**

  Xử lý rất tốt khi sử dụng trình duyệt Edge

  **Special Feature**

  Tính năng của bài hoạt động tốt trên trình duyệt Edge

  **Format code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

---

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_33)

- [x] Bài 1:

  Bài làm rất tốt\*.

  **Usage feature:**

  Các tính năng của bài trải nghiệm rất tốt

  Khi người dùng nói xong nên hiển thị nội dung mà người dùng nói lên trên màn hình rồi mới chuyển hướng đến link

  **Hidden feature**

  Xử lý rất tốt khi sử dụng trình duyệt Edge

  **Special Feature**

  Tính năng của bài hoạt động tốt trên trình duyệt Edge

  **Format code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

---

## [Hữu Hưng](https://github.com/HuuHungg/js-2/tree/main/Day17)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Usage feature:**

  Tính năng tìm đường, mở bài hát, mở video không hoạt động

  Khi người dùng nói xong nên hiển thị nội dung mà người dùng nói lên trên màn hình rồi mới chuyển hướng đến link

  **Hidden feature**

  Xử lý nhận diện giọng nói tốt khi sử dụng trình duyệt Edge

  **Special Feature**

  Tính năng tìm đường, mở bài hát, mở video của bài không hoạt động

  **Format code**

  Case `google maps` nên xét thêm case để người dùng sử dụng tốt hơn. Có thể tham khảo đoạn sau:

  ```Javascript

  const newVoice = command.toLowerCase()

  switch (newVoice) {
    case "google":
      showSuccessMessage();
      window.open("https://www.google.com", "_blank");
      break;
    case "facebook":
      showSuccessMessage();
      window.open("https://www.facebook.com", "_blank");
      break;
    case "youtube":
      showSuccessMessage();
      window.open("https://www.youtube.com", "_blank");
      break;
    case "google maps":
    case "bản đồ":
    case "maps":
      showSuccessMessage();
      window.open("https://maps.google.com", "_blank");
      break;
    case "google drive":
      showSuccessMessage();
      window.open("https://drive.google.com", "_blank");
      break;
    default:
      alert("Không thực hiện được yêu cầu");
    }

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần bổ sung các tính năng tìm đường, mở bài hát, mở video.

---

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY33)

- [x] Bài 1:

  Bài làm rất tốt\*.

  **Usage feature:**

  Chưa sử dụng được tính năng mở bài hát và mở video youtube

  **Hidden feature**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special Feature**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Format code**

  Phần gọi API bị sai nên khi sử dụng trình duyệt Edge, đoạn voice bị thêm dấu chấm cuối câu. Có thể chỉnh lại như sau:

  ```Javascript
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
  ```

  Case chỉ đường xử lý hơi thủ công. Nên check nội dung nói có chứa các từ `chỉ đường, tới, đường tới` rồi xử lý redirect. Có thể tham khảo đoạn sau:

  ```Javascript

    const newText = text.toLowerCase()
    if(newText.includes("chỉ đường") || newText.includes("tới") || newText.includes("đường tới")) {
      const newVoice = newText
        .replace("chỉ đường", "")     //Thay thế tất cả từ 'chỉ đường' trong chuỗi thành ""
        .replace("tới", "")           //Thay thế tất cả từ 'tới' trong chuỗi thành ""
        .replace("đường tới", "")     //Thay thế tất cả từ 'đường tới' trong chuỗi thành ""
        .trim();

      const url = `https://www.google.com/maps/search/${newVoice}`;
      window.open(url.trim());
    }

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý thêm các case mở bài hát, mở video youtube và xử lý khi sử dụng trình duyệt Edge.

---

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] Bài 1:

  Bài làm rất tốt\*.

  **Usage feature:**
so
  Các tính năng của bài trải nghiệm rất tốt

  **Hidden feature**

  Xử lý rất tốt khi sử dụng trình duyệt Edge

  **Special Feature**

  Tính năng của bài hoạt động tốt trên trình duyệt Edge

  **Format code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

---

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-33-JS)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Usage feature:**

  Các tính năng của bài trải nghiệm tốt

  **Hidden feature**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special Feature**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.
  
  **Format code**

  Lỗi trình duyệt Egde do đoạn sau bị thiếu:

  ```Javascript
    const recognition = new SpeechRecognition();

    //Chuyển thành như sau:
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

---


 