# Dương review bài học viên K1 - Fullstack

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE.git)

- [x] [Bài 1](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

  Quãng đường đi là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

---

- [x] [Bài 2](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm tốt \*

  Số điện đi là một giá trị không thay đổi, nên sử dụng từ khóa const để khai báo biến

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng à truyền vào là số điện

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

- [x] [Bài 4](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

  Trừ số 2, tất cả các số chẵn khác đều không phải là số nguyên tố vì vậy, có thể check luôn nếu là số chẵn khác 2 thì không phải. Điều này sẽ giảm số lần lặp đi rất nhiều.

  ```js
  function isPrime(number) {
    if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
      return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2)
      if (number % i === 0) return false;
    return true;
  }
  console.log(
    `${!isPrime(1234566) ? "Không " : ""}Thỏa mãn điều kiện là số nguyên tố`
  );
  ```

- [x] [Bài 5](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

- [x] [Bài 6](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

- [x] [Bài 7](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

- [x] [Bài 8](//github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day17/main.js)

  Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \* Nếu có thể, cần tối ưu các phép toán lặp lại, tối ưu các trường hợp có thể để giảm số lần lặp.
