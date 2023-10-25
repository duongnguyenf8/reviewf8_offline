# Dương review bài tập về nhà buổi 38 - Lớp K2

## [Nguyễn Đại Thế](https://daithehh04.github.io/fullstack/day37/exercise-1.html)

- [x] Bài 1

  Bài làm tốt \*

  Case refreshToken xử lý rất tốt \*

  Khi không nhập thời gian, không post được bài lên.

  **Code format**

  Nên sử dụng code thuần để tạo ra một datePicker sẽ giúp luyện tập code tốt hơn

  Phần code này nên tách ra thành một đoạn function truyền vào date, như thế sẽ giúp tái sử dụng tốt hơn

  ```javascript
  // time create blog
  const createTime = blog.createdAt;
  const currentTime = new Date();
  const createdAt = new Date(createTime);
  const timeDifference = currentTime - createdAt;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  function formatTimeDifference(days, hours, minutes) {
    let result = '';
    if (days > 0) {
      result += days + ' day' + (days > 1 ? 's' : '') + ' ';
    }
    if (hours > 0) {
      result += hours + ' hour' + (hours > 1 ? 's' : '') + ' ';
    }
    if (minutes > 0) {
      result += minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ';
    }
    if (result === '') {
      return 'just now';
    }
    return result + 'ago';
  }
  const timeBlog = formatTimeDifference(
    daysDifference,
    hoursDifference,
    minutesDifference
  );
  const dateOfBlog = `${createdAt.getDate()} / ${
    createdAt.getMonth() + 1
  } / ${createdAt.getFullYear()} | 
  ${createdAt.getHours()}:${
    createdAt.getMinutes() < 10
      ? '0' + createdAt.getMinutes()
      : createdAt.getMinutes()
  }`;
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tối ưu code tốt hơn.

## [Vũ Đức Tài](https://apeiron.id.vn/homework/day_38/)

- [x] Bài 1

  Bài làm tốt \*

  Case refreshToken xử lý chưa tốt \*

  Khi mới vào trang, mặc dù đã đăng nhập nhưng không có một request check authentication

  Khi nhập thời gian quá khứ đều bị post lên

  **Code format**

  Code có sự phân tách và tái sử dụng tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần thêm một lượt check profile khi vào trang để dễ dàng kiểm soát hơn.
