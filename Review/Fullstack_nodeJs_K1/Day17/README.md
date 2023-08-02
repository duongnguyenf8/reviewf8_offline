# Dương review bài học viên K1 - Fullstack - Day 17

## [Luu Anh Quan](//github.com/anhquan2211/F8-OFFLINE.git)

- [x] [Bài 1](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

  Quãng đường đi là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

---

- [x] [Bài 2](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm tốt \*

  Số điện đi là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào là số điện

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); // 50kWh đầu tiên
    calculate(50, 1734); // Từ kWh 51 - 100
    calculate(100, 2014); // Từ kWh 101 - 200
    calculate(100, 2536); // Từ kWh 201 - 300
    calculate(100, 2834); // Từ kWh 301 - 400
    calculate(Infinity, 2927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(`Tổng số tiền điện phải đóng tháng này là: ${TotalBill(300)}đ`);
  ```

---

- [x] [Bài 3](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

  Biến `add` không được sử dụng.

  Biến `n` là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

---

- [x] [Bài 4](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

  Trừ số 2, tất cả các số chẵn khác đều không phải là số nguyên tố vì vậy, có thể check luôn nếu là số chẵn khác 2 thì không phải. Điều này sẽ giảm số lần lặp đi rất nhiều.

  ```js
  function isPrime(number) {
    if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
      return false;
    for (let i = 5; i <= Math.sqrt(number); i += 2)
      if (number % i === 0) return false;
    return true;
  }
  console.log(
    `${!isPrime(3) ? "Không t" : "T"}hỏa mãn điều kiện là số nguyên tố`
  );
  ```

---

- [x] [Bài 5](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

---

- [x] [Bài 6](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

---

- [x] [Bài 7](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

---

- [x] [Bài 8](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \* Nếu có thể, cần tối ưu các phép toán lặp lại, tối ưu các trường hợp có thể để giảm số lần lặp.

## [Nguyen Xuan Tuan Anh](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

- [x] [Bài 1](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

  Có thể bỏ qua cả Km = 0 vì nếu không đi thì không cần tính tiền **`:))`**

  ```js
  if (!isNaN(numberKm) && numberKm >= 0)
  ```

- [x] [Bài 2](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm tốt \*

  Số điện đi là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào là số điện

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1.678); // 50kWh đầu tiên
    calculate(50, 1.734); // Từ kWh 51 - 100
    calculate(100, 2.014); // Từ kWh 101 - 200
    calculate(100, 2.536); // Từ kWh 201 - 300
    calculate(100, 2.834); // Từ kWh 301 - 400
    calculate(Infinity, 2.927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(401)} vnd`);
  ```

---

- [x] [Bài 3](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

---

- [x] [Bài 4](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

  `element` là một số, nên đặt tên biến là `number` sẽ dễ hiểu hơn, nên sử dụng const để khai báo biến vì đây là một giá trị không thay đổi

  Trừ số 2, tất cả các số chẵn khác đều không phải là số nguyên tố vì vậy, có thể check luôn nếu là số chẵn khác 2 thì không phải. Điều này sẽ giảm số lần lặp đi rất nhiều.

  ```js
  function isPrime(number) {
    if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
      return false;
    for (let i = 5; i <= Math.sqrt(number); i += 2)
      if (number % i === 0) return false;
    return true;
  }
  const number = 2;
  console.log(
    `số ${number} ${!isPrime(number) ? "không phải" : "là"} số  nguyên tố`
  );
  ```

---

- [x] [Bài 5](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

- [x] [Bài 6](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

- [x] [Bài 7](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

- [x] [Bài 8](//github.com/xuananh2212/js_fullstack_k1/tree/main/day17)

  Bài làm rất tốt \*

---

## [Minh Quang](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

- [x] [Bài 1](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm chưa tốt \*

  Khi tính tiền taxi, nếu số km nhập vào là số âm thì sẽ bị sai kết quả. Nên kiểm tra điều kiện số km nhập vào phải lớn hơn 0.

  Khi tính tiền taxi cần cộng dồn các giá trị tiền taxi lại với nhau, nên khai báo biến `total` ở ngoài vòng lặp để cộng dồn các giá trị lại với nhau.

---

- [x] [Bài 2](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm tốt \*

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào là số điện

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1.678); // 50kWh đầu tiên
    calculate(50, 1.734); // Từ kWh 51 - 100
    calculate(100, 2.014); // Từ kWh 101 - 200
    calculate(100, 2.536); // Từ kWh 201 - 300
    calculate(100, 2.834); // Từ kWh 301 - 400
    calculate(Infinity, 2.927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(TotalBill(401));
  ```

---

- [x] [Bài 3](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm rất tốt \*

---

- [x] [Bài 4](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm tốt \*

  Nên tách thành hàm để đảm bảo được sử dụng lại ở nhiều chỗ.

  Trừ số 2, tất cả các số chẵn khác đều không phải là số nguyên tố vì vậy, có thể check luôn nếu là số chẵn khác 2 thì không phải. Điều này sẽ giảm số lần lặp đi rất nhiều.

  ```js
  function isPrime(number) {
    if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
      return false;
    for (let i = 5; i <= Math.sqrt(number); i += 2)
      if (number % i === 0) return false;
    return true;
  }
  const number = 4;
  console.log(`${number} ${!isPrime(number) ? "không" : ""} là số  nguyên tố`);
  ```

---

- [x] [Bài 5](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm chưa tốt \*

  Khi vẽ tầng sau của tam giác, các số cần được tiếp tục tăng lên 1 đơn vị so với tầng trước đó.

  ```js
  function count(n) {
    var weight = "";
    var count = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        weight += count + " ";
        count++;
      }
      weight += "\n";
    }
    return weight;
  }

  console.log(count(5));
  ```

- [x] [Bài 6](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm tốt

  Có khoảng cách ở giữa bàn cờ:

  ![taminhquang13-Bai6](images/taminhquang13-Bai6.png)

---

- [x] [Bài 7](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm rất tốt \*

  Nên có khoảng cách và xuống dòng sau khi đã hết phép tính của 1 số.

---

- [x] [Bài 8](//github.com/taminhquang13/F8_Fullstack/blob/main/BT17/js/script.js)

  Bài làm rất tốt \*

---

## [Phan Trung Hiếu](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

- [x] [Bài 1](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm tốt

  Số km là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

  Chưa tính tới trường hợp đi một chút (0=> dưới 1Km) là 15000, nếu không thì đang bị lỗi.

  ```
  Tong tien = undefined
  ```

---

- [x] [Bài 2](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm tốt

  Số điện là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào là số điện

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1.678); // 50kWh đầu tiên
    calculate(50, 1.734); // Từ kWh 51 - 100
    calculate(100, 2.014); // Từ kWh 101 - 200
    calculate(100, 2.536); // Từ kWh 201 - 300
    calculate(100, 2.834); // Từ kWh 301 - 400
    calculate(Infinity, 2.927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(TotalBill(401));
  ```

---

- [x] [Bài 3](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm rất tốt \*

---

- [x] [Bài 4](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm tốt

  Nên tách thành hàm để đảm bảo được sử dụng lại ở nhiều chỗ.

  Trừ số 2, tất cả các số chẵn khác đều không phải là số nguyên tố vì vậy, có thể check luôn nếu là số chẵn khác 2 thì không phải. Điều này sẽ giảm số lần lặp đi rất nhiều.

  ```js
  function isPrime(number) {
    if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
      return false;
    for (let i = 5; i <= Math.sqrt(number); i += 2)
      if (number % i === 0) return false;
    return true;
  }
  const number = 4;
  console.log(`${number} ${!isPrime(number) ? "khong" : ""} la so nguyen to`);
  ```

---

- [x] [Bài 5](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm rất tốt \*

---

- [x] [Bài 6](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm tốt \*

  Một bàn cờ có 8 hàng và 8 cột.

  Nên sử dụng `document.write` để in ra màn hình.

---

- [x] [Bài 7](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm tốt \*

  Biến `sizes` là một hàng số không đổi, nên sử dụng `const` để khai báo biến.

  Nên sử dụng `document.write` để in ra màn hình.

---

- [x] [Bài 8](//github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_17/script.js)

  Bài làm KHÔNG tốt \*

  Không được sử dụng vòng lặp.

  Chưa xét điều kiện `N=0`

---

## [Duong Hiep](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

- [x] [Bài 1](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm rất tốt \*

- [x] [Bài 2](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm rất tốt \*

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào là số điện

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1.678); // 50kWh đầu tiên
    calculate(50, 1.734); // Từ kWh 51 - 100
    calculate(100, 2.014); // Từ kWh 101 - 200
    calculate(100, 2.536); // Từ kWh 201 - 300
    calculate(100, 2.834); // Từ kWh 301 - 400
    calculate(Infinity, 2.927); // Từ kWh 401 trở đi
    return totalBill;
  }.
  ```

- [x] [Bài 3](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm tốt \*.

  Nên kiểm tra khi **parse** về số.

- [x] [Bài 4](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm tốt \*

  Hiệu năng bài chưa tốt.

  Nên lặp đến căn bậc 2 của `n` vì các số sau của căn bậc 2 có phép chia tương tự.

  Nên check trước các trường hợp có thể để bài làm tốt hơn, chạy nhanh hơn.

  ```js
  function isPrime(number) {
    if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
      return false;
    for (let i = 5; i <= Math.sqrt(number); i += 2)
      if (number % i === 0) return false;
    return true;
  }
  const n = 4;
  console.log(`${n} ${!isPrime(n) ? "không phải" : ""} là số nguyên tố.`);
  ```

---

- [x] [Bài 5](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm chưa tốt \*

  Khi vẽ tầng sau của tam giác, các số cần được tiếp tục tăng lên 1 đơn vị so với tầng trước đó.

  ```js
  function drawTriangle(n) {
    var weight = "";
    var count = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        weight += count + " ";
        count++;
      }
      weight += "\n";
    }
    return weight;
  }

  console.log(drawTriangle(5));
  ```

---

- [x] [Bài 6](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm rất tốt \*

---

- [x] [Bài 7](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm tốt \*

  Chưa đủ phép tính của bảng cửu chương.

- [x] [Bài 8](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day17/main.js)

  Bài làm tốt.

  Sai trường hợp khi `n = 1`
