# Nam review bài học viên lớp k2-fullstack

## [Bùi Quang Trưởng](https://okazakitruong.github.io/BQTruong-F8-K2-Offline/Day32/index.html)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage feature**

  Chức năng tăng, giảm `count`, thay đổi `title` dùng rất tốt

  Xử lý cập nhật `title`, `count` rất tốt

  **Special feature**

  Bài làm rất tốt tính năng chính của bài

  **Code format**

  Format code, phong cách code rất tốt

  Có thể sử dụng `eval()` để xử lý tăng, giảm count, khi đó sẽ không cần xử lý thủ công và có thể xử dụng cho nhiều event khác. Có thể tham khảo cách sử dụng `eval()` sau:

  ```Javascript

    handleEvent(eventDoing) {

      if (eventDoing.match(/[\s]*(title)[\s]*=/)) {
        this.titleNode.textContent = eventDoing.match(
          /[\s]*(title)[\s]*=[\s]*'(?<title>.+?)'[\s]*/
        ).groups.title;
        return
      }

      if(eventDoing) {
        let count = this.counterNode.textContent;
        eval(new String(eventDoing))    //Thực thi tăng count nếu eventDoing = count++, ngược lại sẽ giảm count nếu eventDoing = count--
        this.counterNode.textContent = count;     //Cập nhật lại count
      }

    }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day32)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage feature**

  Chức năng tăng, giảm `count`, thay đổi `title` dùng rất tốt

  **Special feature**

  Bài làm rất tốt tính năng chính của bài

  **Code format**

  Format code, phong cách code rất tốt

  Có thể dùng `createTextNode()` để khởi tạo `count` sau đó khi xử lý sự kiện tăng, giảm cập nhật lại data trong textNode thì sẽ tối ưu việc render. Lúc này sẽ chỉ render lại data trong textNode, không phải render lại cả thẻ span. Có thể tham khảo đoạn sau:

  ```Javascript
    const countNumber = templateNode.querySelector(".count");
    let countNode = document.createTextNode(count)
    countNumber.append(countNode)

  ```

  Có thể sử dụng `eval()` để xử lý tăng, giảm count, khi đó sẽ không cần xử lý thủ công và có thể xử dụng cho nhiều event khác. Có thể tham khảo cách sử dụng `eval()` sau:

  ```Javascript

    btn.addEventListener(btnEvent, () => {
      if(btnAttribute) {
        if (btnAttribute.includes("title=")) {
          const contentTitle = btnAttribute.split("title=");
          h1.innerText = contentTitle[1];
        } else {
          let count = this.countNode.textContent;
          eval(new String(btnAttribute))    //Thực thi tăng count nếu btnAttribute = count++, ngược lại sẽ giảm count nếu btnAttribute = count--
          this.countNode.textContent = count;     //Cập nhật lại count
        }
      }
    });
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---
