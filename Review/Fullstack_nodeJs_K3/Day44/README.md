# Dương review bài tập về nhà buổi 43 - Lớp K3

## [Nguyễn Quang Cường](https://github.dev/cuonggold2408/Fullxinach_K3/tree/main/shop)

- [x] Bài 1

  Bài làm tốt

  Trước mỗi req post lên luôn có một req lấy profile trong khi order đã trả về 401.

  Khi post lên bị 401 thì xử lý cấp lại apikey mới để post lên thay vì không làm gì như trong bài.

  Chưa trừ số lượng trong productList, khi order xong số lượng vẫn như cũ.

  Phần lazy image chưa tốt lắm, chưa có width ban đầu khiến cho kích thước ảnh bị giật.

  **Code format**

  Các đoạn code format rất tốt.

## [Phí Văn Đức](https://github.dev/PhiVanDuc/Offline-F8-K3/tree/main/Day-40-React)

- [x] Bài làm rất tốt

  Khi vào trang bị giật một chút phần form đăng nhập.

  Khi post lên bị 401 thì xử lý cấp lại apikey mới để post lên thay vì gọi lại profile và product như ở bài.

  Chưa trừ số lượng trong productList, khi order xong số lượng vẫn như cũ.

  **Code format**

  Code rất tốt.

  Phần code displayNotify hơi dài dòng

  ```js
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const displayNotify = (condition, content) => {
    if (condition === 'success') {
      return toast.success(`${content}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (condition === 'warning') {
      return toast.warn(`${content}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (condition === 'error') {
      return toast.error(`${content}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  export default displayNotify;
  ```

  Thay vì thế có thể sử dụng: `toast[type](msg, options)`

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.
