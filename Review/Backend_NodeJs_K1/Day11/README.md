## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/blob/main/HW/HW11/hw11.js)

- [x] Bài 1:

  Bài làm tốt \*

  Với các giá trị không thay đổi, nên sử dụng biến const thay vì let

  ```js
  let link = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
  let api = `https://api.shrtco.de/v2/shorten?url=`;
  let res = await fetch(`${api}${url}`);
  let data = await res.json();
  ```

  Có rất nhiều đường dẫn trả về, nên in ra tất cả thay vì chỉ in ra 1 đường dẫn

  ```js
  console.log(data.result.short_link);
  ```

  Nên đưa link api vào trong hàm vì chỉ sử dụng ở trong hàm đó, cũng như đưa link vào trong hàm để dễ dàng sửa đổi

  ```js
  const link = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
  const linkShorten = async function (url) {
    try {
      const api = `https://api.shrtco.de/v2/shorten?url=${url && url.trim()}}`;
      const res = await fetch(api);
      const { ok, error, result } = await res.json();
      if (ok) {
        return {
          short_link: result.short_link,
          short_link2: result.short_link2,
          short_link3: result.short_link3,
        };
      }
      throw new Error(error || "Oops, Something error.");
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  (async function () {
    const data = await linkShorten(link);
    if (data) {
      console.log(data);
    } else {
      console.log("No data found");
    }
  })();
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần khai báo với từ khóa hợp lý, đưa link api vào trong hàm để dễ dàng sửa đổi, nâng cấp hơn.

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/blob/main/F8_BE/f8_nodejs/homeword/day11/js/ex01.js)

- [x] Bài 1:

  Bài làm tốt \*

  Có rất nhiều đường dẫn trả về, nên in ra tất cả thay vì chỉ in ra 1 đường dẫn

  ```js
  console.log(data.result.full_short_link);
  ```

  Nên hiển thị cả lỗi từ API để dễ dàng debugs hơn.

  Nên sử dụng async/await thay vì promise. Nó giúp code dễ đọc hơn, dễ debug hơn.

  ```js
  const link = `https://www.youtube.com/watch?v=GQ-toR8F7rc&t=483s`;
  const linkShorten = async function (url) {
    try {
      const api = `https://api.shrtco.de/v2/shorten?url=${url && url.trim()}}`;
      const res = await fetch(api);
      const { ok, error, result } = await res.json();
      if (ok) {
        return {
          short_link: result.short_link,
          short_link2: result.short_link2,
          short_link3: result.short_link3,
        };
      }
      throw new Error(error || "Oops, Something error.");
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  (async function () {
    const data = await linkShorten(link);
    if (data) {
      console.log(data);
    } else {
      console.log("No data found");
    }
  })();
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên có thể không cần `.then().catch()` vì mọi thứ sẽ được viết và chạy tuần tự từ trên xuống dưới.

---

## [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/tree/main/day-11)

- [x] Bài 1:

  Bài làm tốt \*

  Có rất nhiều đường dẫn trả về, nên in ra tất cả thay vì chỉ in ra 1 đường dẫn

  ```js
  const shortLink = data.result.short_link;
  ```

  Nên hiển thị cả lỗi từ API để dễ dàng debugs hơn.

  ```js
  throw new Error(response.status);
  ```

  Thay vì khai báo ra 2 biến thừa mà chắc chắn sẽ nối vào nhau, nên gộp chung vào 1

  ```js
  const api = "https://api.shrtco.de/v2/";
  const shorten = "shorten?url=";
  ```

  Nên đưa link api vào trong hàm vì chỉ sử dụng ở trong hàm đó, cũng như đưa link vào trong hàm để dễ dàng sửa đổi

  ```js
  const api = "https://api.shrtco.de/v2/";
  const shorten = "shorten?url=";

  const url = "https://www.youtube.com/";

  const getShortenedLink = async () => {
    try {
      const response = await fetch(`${api}${shorten}${url}`);
      //...
    }}
  ```

  Nên sử dụng IIFE thay vì khai báo hàm rồi gọi hàm

  ```js
  const link = `https://www.youtube.com`;
  const linkShorten = async function (url) {
    try {
      const api = `https://api.shrtco.de/v2/shorten?url=${url && url.trim()}}`;
      const res = await fetch(api);
      const { ok, error, result } = await res.json();
      if (ok) {
        return {
          short_link: result.short_link,
          short_link2: result.short_link2,
          short_link3: result.short_link3,
        };
      }
      throw new Error(error || "Oops, Something error.");
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  (async function () {
    const data = await linkShorten(link);
    if (data) {
      console.log(data);
    } else {
      console.log("No data found");
    }
  })();
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên, nên đưa các biến cần thiết của hàm đó vào trong hàm để dễ dàng sửa đổi, nâng cấp hơn.

---

## [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab11)

**Lưu ý format code**
**Nên tách phần xử lý JS thành một file riêng**

- [x] Bài 1:

  Bài làm tốt \*

  Có rất nhiều đường dẫn trả về, nên in ra tất cả thay vì chỉ in ra 1 đường dẫn

  ```js
  return posts.result.short_link;
  ```

  Nên xử lý bằng try/catch để bắt một số trường hợp lỗi có thể xảy ra mà không thể xác định trước như lỗi mạng, lỗi server, lỗi API,...

  ```js
  const link = `https://www.youtube.com`;
  const linkShorten = async function (url) {
    try {
      const api = `https://api.shrtco.de/v2/shorten?url=${url && url.trim()}}`;
      const res = await fetch(api);
      const { ok, error, result } = await res.json();
      if (ok) {
        return {
          short_link: result.short_link,
          short_link2: result.short_link2,
          short_link3: result.short_link3,
        };
      }
      throw new Error(error || "Oops, Something error.");
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  (async function () {
    const data = await linkShorten(link);
    if (data) {
      console.log(data);
    } else {
      console.log("No data found");
    }
  })();
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên để dễ dàng bắt các trường hợp lỗi có thể xảy ra, nên xử lý bằng try/catch.

---

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVNB11)

- [x] Bài 1:

  Bài làm tốt \*

  Các biến không thay đổi, nên sử dụng const thay vì let để an toàn hơn

  ```js
  let serverUrl = "https://api.shrtco.de/v2/";
  let response = await fetch(serverUrl + "shorten?url=" + url);
  let data = await response.json();
  ```

  Đường dẫn của API chỉ được sử dụng trong hàm đó, nên đưa vào trong hàm để dễ dàng sửa đổi

  Đường dẫn API luôn nối với tiền tố `shorten?url=`, nên nên gộp chung vào 1 biến để dễ dàng sửa đổi

  Có rất nhiều đường dẫn trả về, nên in ra tất cả thay vì chỉ in ra 1 đường dẫn

  ```js
  console.log("Đường dẫn sau khi rút gọn: " + data.result.short_link);
  ```

  Nên xử lý bằng try/catch để bắt một số trường hợp lỗi có thể xảy ra mà không thể xác định trước như lỗi mạng, lỗi server, lỗi API,...

  ```js
  const link = `https://fullstack.edu.vn`;
  const linkShorten = async function (url) {
    try {
      const api = `https://api.shrtco.de/v2/shorten?url=${url && url.trim()}}`;
      const res = await fetch(api);
      const { ok, error, result } = await res.json();
      if (ok) {
        return {
          short_link: result.short_link,
          short_link2: result.short_link2,
          short_link3: result.short_link3,
        };
      }
      throw new Error(error || "Oops, Something error.");
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  (async function () {
    const data = await linkShorten(link);
    if (data) {
      console.log(data);
    } else {
      console.log("No data found");
    }
  })();
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên để dễ dàng bắt các trường hợp lỗi có thể xảy ra, nên xử lý bằng try/catch.

---
