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

# Hiệp review bài Fullstack K1 Day17 (JS Day2)

## [Trung Le](https://github.com/Trungdeptraii/30-07-2023-Le-Van_Trung-Day17.git)

**Lưu ý: Nên đặt thẻ `script` trước thẻ đóng của thẻ `body`**

- Ở tất cả các bài:

  Khi nhập và tính lần đầu tiên sẽ không ra kết quả.

  Vẫn nhập được chữ `e` vào thẻ input có `type="number"` khiến chương trình bị lỗi

  Nên đặt tên biến bằng Tiếng Anh

- [x] [Bài 1]

  Bài làm rất tốt \*

  Nên đặt tên biến bằng Tiếng Anh, không đặt tên biến nửa Tiếng Anh nửa Tiếng Việt

  Lỗi khi ấn `kiểm tra` nhiều lần ở cùng một giá trị thì bị lặp bảng

---

- [x] [Bài 2]

  Bài làm tốt \*

  Sai giá tiền ở cấp 6

  Lỗi khi ấn `kiểm tra` nhiều lần ở cùng một giá trị thì bị lặp bảng

---

- [x] [Bài 3]

  Bài làm chưa tốt

  Placeholder của thẻ input vẫn là của bài 2

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên

---

- [x] [Bài 4]

  Bài làm tốt

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên

  Trừ số 2, tất cả các số chẵn khác đều không phải là số nguyên tố vì vậy, có thể check luôn nếu là số chẵn khác 2 thì không phải. Điều này sẽ giảm số lần lặp đi rất nhiều.

  Nên tách hàm kiểm tra số nguyên tố ra khỏi sự kiện click. Điều này giúp mã dễ đọc hơn và cho phép tái sử dụng hàm kiểm tra ở các nơi khác.

---

- [x] [Bài 5]

  Bài làm chưa tốt

  Chương trình chỉ hoạt động đúng ở lần chạy đầu tiên. Bị lỗi ở các lần chạy tiếp theo

---

- [x] [Bài 6]

  Bài làm tốt

  Vì đã học HTML, CSS nên có thể tạo thẻ `div` hoặc `span` và thêm `style` vào để giống bàn cờ vua.

---

- [x] [Bài 7]

  Bài làm rất tốt

---

- [x] [Bài 8]

  Bài làm chưa tốt

  Chương trình chỉ hoạt động đúng ở lần chạy đầu tiên. Bị lỗi ở các lần chạy tiếp theo

---

- [x] Đánh giá chung bài tập về nhà: bài làm tốt, tuy nhiên cần tính đến các trường hợp đặc biệt như đầu vào không phải là số, chú ý về các trường hợp chỉ chạy chương trình đúng ở lần đầu tiên.

## [Nguyễn Hùng Anh](https://github.com/realguy010895/hunganh-f8-k1-buoi17/blob/main/btvn-b17.js)

- [x] [Bài 1]

  Bài làm chưa tốt

  Sai yêu cầu đề bài

  Từ 0 km đến 1 km: Giá cước là 15000đ.

  Từ 1.1 km đến 5 km: Giá cước bao gồm phần 1 km đầu tiên với giá 15000đ và phần từ 1.1 km đến 5 km với giá 13500đ cho mỗi km.

  Trên 5 km: Giá cước bao gồm phần 1 km đầu tiên với giá 15000đ, phần từ 1.1 km đến 5 km với giá 13500đ cho mỗi km và phần vượt qua 5 km với giá 11000đ cho mỗi km.

  Trên 120 km: Sau khi tính toán các mức giá cước như ở trường hợp trên, sẽ giảm 10% tổng số tiền cước.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Sai yêu cầu đề bài

  Cách giải thích đề bài tương tự với bài 1

---

- [x] [Bài 3]

  Bài làm tốt

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên, nhỏ hơn 0. Chương trình sẽ bị lỗi nếu người dùng nhập vào không hợp lệ nên cần kiểm tra hết các trường hợp đầu vào.

---

- [x] [Bài 4]

  Bài làm tốt

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên. Chương trình sẽ bị lỗi nếu người dùng nhập vào không hợp lệ nên cần kiểm tra hết các trường hợp đầu vào.

---

- [x] [Bài 5]

  Bài làm tốt

  Lưu ý: Trong javascript có phân biệt chữ hoa và chữ thường. Trong bài đang truyền `n` vào hàm trong khi lại đặt tên biến là `N` khiến cho hàm không chạy

---

- [x] [Bài 6]

  Bài làm rất tốt \*

---

- [x] [Bài 7]

  Bài làm rất tốt \*

  Sai chính tả tên hàm `board` -> `boad`

---

- [x] [Bài 8]

  Bài làm chưa tốt

  Sai công thức

---

- [x] Đánh giá chung bài tập về nhà: bài làm tốt, tuy nhiên cần tính đến các trường hợp đặc biệt như đầu vào không phải là số, chú ý đọc rõ yêu cầu đề bài.

---

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm tốt. \*

  Bài làm có kiểm tra `n` phải là số nguyên lớn hơn 0 thì mới thực hiện tính toán tuy nhiên chưa có thông báo lỗi nếu như người dùng nhập `n` không thỏa mãn điều kiện đó. Nên bổ sung thông báo lỗi nếu người dùng nhập sai sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm rất tốt. \*

  Tuy nhiên ở trong vòng lặp `for`:

  ```js
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
      n = i;
    }
  }
  ```

  Việc gán `n = i` ở sau câu lệnh `return` là không cần thiết vì sau câu lệnh `return` sẽ nhảy ra khỏi hàm và không thực hiện các câu lệnh ở sau `return`.

---

- [x] Bài 5:

  Bài làm rất tốt. \*

---

- [x] Bài 6:

  Bài làm rất tốt. \*

---

- [x] Bài 7:

  Bài làm rất tốt. \*

---

- [x] Bài 8:

  Bài làm tốt. \*

  Tuy nhiên cần kiểm tra điều kiện của n nếu như n là số nhỏ hơn 1 thì vẫn thực hiện logic và không có điểm dừng làm cho treo trình duyệt.

  Và cũng cần kiểm tra n phải là số nguyên.

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số chi tiết nhỏ để hoàn thiện hơn.

---

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

- [x] Bài 1:

  Bài làm chưa tốt.

  Việc đặt tên biến là `numberKm_1`, `numberKm_2`, `numberKm_3`, `price_1`, `price_2`, `price_3` không tường minh và không có ý nghĩa cụ thể. Điều này làm cho người khác khi đọc code cảm thấy khó hiểu. Nên đặt tên biến tường minh và có ý nghĩa nhất có thể.

  Bài làm chưa kiểm tra nếu như số km đi được là số nhỏ hơn hoặc bằng 0 thì sẽ thông báo cho người dùng cần nhập lại cho hợp lý.

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Nhận xét tên biến như nhận xét ở Bài 1.

  Ở điều kiện số kWh nằm trong khoảng từ 50 - 100 đang viết sai tên biến `numberKwh_2`. Hiện tại đang viết là `numberKm_2`.

  ```js
  totalBill = 50 * numberKwh_1 + (n - 50) * numberKm_2;
  ```

  Ở điều kiện số kWh trong khoảng từ 100 - 200 đang sai logic, làm cho kết quả sai. Cụ thể hiện tại trong bài làm là:

  ```js
  if (n > 100 && n <= 200) {
    totalBill = 50 * numberKwh_1 + 100 * numberKwh_2 + (n - 150) * numberKwh_3;
  }
  ```

  Ở đây biến `numberKwh_2` đại diện cho 50 số kWh trong khoảng từ 51 - 100 vì vậy lấy `numberKwh_2 * 100` là không đúng.

  Và điều đó dẫn cho biểu thức phía sau `n - 150` cũng không đúng. Biểu thức đúng phải là:

  ```js
  if (n > 100 && n <= 200) {
    totalBill = 50 * numberKwh_1 + 50 * numberKwh_2 + (n - 100) * numberKwh_3;
  }
  ```

  Việc hiểu sai từ điều kiện ở trên làm cho logic tính toán ở các điều kiện phía dưới bị sai theo. Cần đọc kỹ yêu cầu bài toán và sửa lại cho đúng với yêu cầu.

---

- [x] Bài 3:

  Bài làm tốt. \*

  Tuy nhiên, việc gán giá trị khởi tạo cho `subTotal` là không cần thiết vì khi vào vòng lặp `subTotal` đã được tính và gán bằng giá trị mới là `i * (i + 1)`.

  Bài làm có kiểm tra `n` phải là số nguyên lớn hơn 0 thì mới thực hiện tính toán tuy nhiên chưa có thông báo lỗi nếu như người dùng nhập `n` không thỏa mãn điều kiện đó. Nên bổ sung thông báo lỗi nếu người dùng nhập sai sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm tốt. \*

  Bài làm chưa kiểm tra điều kiện của `n` phải là số nguyên rồi mới thực hiện logic. Hiện tại nếu nhập `n = 2.3` thì kết quả sẽ là `So 2.3 la so nguyen to`.

  Góp ý:

  Ở trong hàm `prime` có một tham số là `number` thì có thể lấy `number` kiểm tra luôn các điều kiện cần thiết chứ không cần gán tham số `number` cho biến `n` rồi kiểm tra điều kiện của `n`. Cần hạn chế tạo thêm các biến không cần thiết.

  Hàm `prime` trả về giá trị `boolean` vậy nên khi đưa vào điều kiện của `if` không cần phải so sánh `prime(n) === true` và `prime(n) === false`. Chỉ cần `if (prime(n))` là được.

---

- [x] Bài 5:

  Bài làm rất tốt. \*

---

- [x] Bài 6:

  Bài làm rất tốt. \*

---

- [x] Bài 7:

  Bài làm rất tốt. \*

---

- [x] Bài 8:

  Bài làm tốt. \*

  Tuy nhiên cần kiểm tra điều kiện của n nếu như n là số nhỏ hơn 1 thì vẫn thực hiện logic và không có điểm dừng làm cho treo trình duyệt.

  Và cũng cần kiểm tra n phải là số nguyên.

---

- [x] Đánh giá: Bài làm khá tốt, lưu ý về việc đặt tên biến, tối ưu code để hoàn thiện bài làm hơn.

---

## [Nam Nguyễn](https://github.com/namnguyen2603/nguyentrungnam_bai17.git)

- [x] Bài 1:

  Bài làm tốt. \*

  Bài làm có kiểm tra điều kiện `distance > 0` tuy nhiên chưa có thông báo lỗi nếu như `distance <= 0`, thiếu vế `else`khi kiểm tra điều kiện `distance > 0`.

  Phần còn lại của bài làm logic tốt tuy nhiên việc nhập cứng giá tiền một km của từng chặng như hiện tại thì khi muốn thay đổi giá tiền một km của chặng nào đó sẽ phải sửa khá nhiều chỗ. Do đó, nên gán giá của từng chặng vào một biến nào đó sẽ thuận tiện cho việc sửa đổi sau này.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm tốt. \*

  Tuy nhiên, việc gán giá trị khởi tạo cho `subS` là không cần thiết vì khi vào vòng lặp `subS` đã được tính và gán bằng giá trị mới là `i * (i + 1)`.

---

- [x] Bài 4:

  Bài làm rất tốt. \*

  Lưu ý về việc format code đang có những chỗ xuống dòng không cần thiết ví dụ như sử dụng `else` thì không cần thiết phải xuống dòng.

  Góp ý: Khi sử dụng vòng lặp, việc lặp lại nhiều lần không cần thiết cũng gây ảnh hưởng đến thời gian thực hiện của chương trình. Vì vậy, thường khi kiểm tra số nguyên tố, chỉ cần kiểm tra đến `Math.sqrt(n)` là được.

---

- [x] Bài 5:

  Bài làm chưa tốt.

  Bài làm có hoàn thành yêu cầu vẽ tam giác vuông nhưng các số trong các hàng đang không liên tiếp từ 1 - 15 như yêu cầu đề bài. Mà mỗi hàng đều đang bắt đầu từ '1'.

  Tham khảo đoạn code dưới đây:

  ```js
  function drawTriangle(n) {
    let currentNumber = 1,
      row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        row += currentNumber + " ";
        currentNumber++;
      }
      row += "\n";
    }
    return row;
  }
  console.log(drawTriangle(5));
  ```

---

- [x] Bài 6:

  Bài làm rất tốt. \*

  Tuy nhiên bài làm đang hiển thị ra bảng `console` kết quả thực hiện nên rất nhỏ và khó nhìn, nên hiển thị ra trình duyệt bằng câu lệnh `document.write` sẽ hợp lý hơn.

---

- [x] Bài 7:

  Bài làm rất tốt. \*

---

- [x] Bài 8:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm khá tốt chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Đỗ Hà Chi](https://github.com/SerenaHa12/fullstack_nodeJS/tree/main/hoc_javascript/btvn_17/ex03)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu của bài toán. Hiện tại bài làm đang làm theo hướng nếu như số km nhập vào thuộc khoảng nào đó thì sẽ tính toàn bộ số km từ đầu đến đó cùng một giá tiền. Điều này sẽ làm cho kết quả bị sai vì nên làm theo cách cộng dồn km sẽ chính xác hơn.

  Ví dụ như nếu người dùng nhập vào 4km thì nên tính 1km giá 15000đ và 3km còn lại giá 13500đ.

  Ngoài ra, cần kiểm tra điều kiện của `distance`, nếu như người dùng nhập vào số km nhỏ hơn hoặc bằng 0 sẽ cần thông báo cho người dùng nhập lại cho hợp lý hơn.

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Bài làm hiện tại đang hiểu sai yêu cầu đề bài như bài 1. Nhận xét tương tự như bài 1.

---

- [x] Bài 3:

  Bài làm tốt.

  Tuy nhiên chưa kiểm tra điều kiện của `n`, nếu như `n` không phải là số nguyên hoặc nhỏ hơn hoặc bằng 0 thì cần thông báo lỗi.

---

- [x] Bài 4:

  Bài làm tốt. \*

  Tuy nhiên bài làm chưa kiểm tra điều kiện của `n` phải là số nguyên rồi mới thực hiện logic. Hiện tại nếu nhập `n = 2.3` thì kết quả sẽ là `2.3 is a prime number`.

---

- [x] Bài 5:

  Bài làm rất tốt. \*

---

- [x] Bài 6:

  Chưa hoàn thành.

---

- [x] Bài 7:

  Chưa hoàn thành.

---

- [x] Bài 8:

  Chưa hoàn thành.

---

- [x] Đánh giá: Các bài đã làm cần đọc kỹ yêu cầu đề bài để hoàn thiện hơn và tránh bỏ xót trường hợp của đầu vào trong các bài toán.

---
