## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_17)

- [x] Bài 1: Bài làm rất tốt \*

  Chưa kiểm tra đầu vào trong trườn hợp số âm, không phải là số

  Nên tách thành hàm có tham số là khoảng cách được truyền vào từ đối số để có thể tái sử dụng ở nhiều nơi

  ```js
  function calcTaxiCost(distance) {
    var result,
      level1 = 15000,
      level2 = 13500,
      level3 = 11000;

    if (distance <= 0 || typeof distance !== "number") return "Không hợp lệ";

    if (distance <= 1) {
      result = distance * level1;
    } else if (distance <= 5) {
      result = level1 + (distance - 1) * level2;
    } else {
      result = level1 + 4 * level2 + (distance - 5) * level3;
      if (distance > 120) result -= result * 0.1;
    }
    return result;
  }
  // TEST
  console.log(calcTaxiCost(150));
  ```

---

- [x] Bài 2: Bài làm tốt \*

  Chưa kiểm tra đầu vào trong trường hợp số âm, không phải là số

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
  ```

---

- [x] Bài 3: Bài làm tốt \*

  Chưa kiểm tra đầu vào trong trường hợp số âm, không phải là số

---

- [x] Bài 4: Bài làm rất tốt \*

  Chưa kiểm tra đầu vào trong trường hợp số âm, không phải là số

  Chưa **Gọi hàm trong câu điều kiện if else** (Đề bài)

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm tốt

  Vì đã học html, css nên sử dụng thẻ **div** hoặc **span** và thêm một chút style css vào cho giống bàn cờ vua hơn

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [NTiến Đạt](https://github.com/Ntiendat-2k3/F8-js-BTVN/blob/main/BTVN/Buoi2/app.js)

- [x] Bài 1: Bài làm chưa tốt

  Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

  Số km là đại lượng không đổi nên khai báo km bằng từ khóa const.

---

- [x] Bài 2: Bài làm chưa tốt

  Nên đặt tên biến, hàm bằng tiếng Anh

  Nhầm giá trị trong mảng `const giaDien = [1.678, 1.734, 2.014, 2.536, 2.834, 2.927];`. Đúng phải là: `const giaDien = [1678, 1734, 2014, 2536, 2834, 2927];`

  Số kWh là đại lượng không đổi nên khai báo bằng từ khóa const.

---

- [x] Bài 3: Bài làm tốt

  Chưa kiểm tra giá trị đầu vào là số âm hoặc không phải là số.

---

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra giá trị đầu vào trong trường hợp không phải số nguyên

---

- [x] Bài 5: Bài làm rất tốt

  Nên sử dụng `document.write` để hiển thị kết quả ra ngoài màn hình

---

- [x] Bài 6: Bài làm rất tốt

  Nên sử dụng `document.write` để hiển thị kết quả ra ngoài màn hình

---

- [x] Bài 7: Bài làm rất tốt

  Nên sử dụng `document.write` để hiển thị kết quả ra ngoài màn hình

- [x] Bài 8: Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần cẩn thận hơi khi làm bài, tuy nhiên cần tính đến các trường hợp đầu vào không phải số, chú ý kiểm tra kĩ tất cả các trường hợp có thể xảy ra.

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

**Lưu ý: Cần gửi cả link github và link github pages**

- [x] Bài 1: Bài làm chưa tốt

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

  Số km là đại lượng không đổi nên khai báo km bằng từ khóa const.

---

- [x] Bài 2: Bài làm chưa tốt

  Lỗi sai giống bài 1 (Đã giải thích ở bài 1)

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra trường hợp số người dùng nhập vào không phải số nguyên

  Nên đặt tên hàm, tên biến bằng tiếng Anh

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm rất tốt \*

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Hữu Hưng](https://github.com/HuuHungg/f8-javascript/tree/main/Day1)

- [x] Bài 1: Bài làm chưa tốt

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

  Số km là đại lượng không đổi nên khai báo km bằng từ khóa const.

---

- [x] Bài 2: Bài làm tốt

  Chú ý giá điện theo từng bậc ở đơn vị nghìn **(1678)** không phải **(1.678)**

---

- [x] Bài 3: Bài làm tốt

  Nên cho câu lệnh kiểm tra điều kiện số nguyên trước khi chạy vòng lặp trong hàm

  Chưa kiểm tra trường hợp **n** là số âm

  ```js
  function calcSum(n) {
    if (n <= 0 || n % 1 !== 0) return "Không hợp lệ";
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i * (i + 1);
    }
    return sum;
  }
  console.log(calcSum(10));
  ```

---

- [x] Bài 4: Bài làm chưa tốt

  Không nên đặt tên biến truyền vào là **result** vì nó không đúng ý nghĩa

  Sai điều kiện trong vòng lặp for. Sửa thành for (`let i = 2; i <= Math.sqrt(n); i++)`) (Có thể thử result = 4 để thấy lỗi sai)

  Tên hàm không có ý nghĩa. Sửa thành `isPrime()`

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm rất tốt

  Chưa reset css nên tạo ra khoảng cách giữa các dòng

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào đặc biệt, chú ý đặt tên có ý nghĩa.

## [Lê Quốc Khánh](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/JS-Day-17)

- [x] Bài 1: Bài làm chưa tốt

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

  Số km là đại lượng không đổi nên khai báo km bằng từ khóa const.

---

- [x] Bài 2: Bài làm rất tốt \*.

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
  ```

---

- [x] Bài 3: Bài làm tốt

  Nên cho câu lệnh kiểm tra điều kiện số nguyên trước khi chạy vòng lặp trong hàm

  Chưa kiểm tra trường hợp **n** là số âm

  ```js
  function calcSum(n) {
    if (n <= 0 || n % 1 !== 0) return "Không hợp lệ";
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i * (i + 1);
    }
    return sum;
  }
  console.log(calcSum(10));
  ```

---

- [x] Bài 4: Bài làm tốt .

  Chưa thỏa mãn yêu cầu **Gọi hàm trong câu điều kiện if else**

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm rất tốt

  Nên sử dụng `document.write` để hiển thị kết quả ra ngoài màn hình

---

- [x] Bài 7: Bài làm rất tốt

  Nên sử dụng `document.write` để hiển thị kết quả ra ngoài màn hình

---

- [x] Bài 8: Bài làm rất tốt

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào đặc biệt.

---

## [Trần Xuân Bách](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day17)

- [x] Bài 1: Bài làm chưa tốt.

  Bài làm sai do nhập sai giá trị của từng mức

  ```js
  function calcTaxiCost(distance) {
    var result,
      level1 = 15000,
      level2 = 13500,
      level3 = 11000;

    if (distance <= 0) return "Không hợp lệ";

    if (distance <= 1) {
      result = distance * level1;
    } else if (distance <= 5) {
      result = level1 + (distance - 1) * level2;
    } else {
      result = level1 + 4 * level2 + (distance - 5) * level3;
      if (distance > 120) result -= result * 0.1;
    }
    return result;
  }
  ```

---

- [x] Bài 2: Bài làm chưa tốt.

  Chú ý giá điện theo từng bậc ở đơn vị nghìn **(1678)** không phải **(1.678)**

---

- [x] Bài 3: Bài làm rất tốt \* .

---

- [x] Bài 4: Bài làm chưa tốt

  Sai trường hợp n = 2.

  Sử dụng nhiều câu lệnh `if else` lồng nhau khiến cho khó đọc code, khó bảo trì

  Có thể tham khảo cách làm sau:

  ```js
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;

    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var n = 10;
  if (isPrime(n)) {
    console.log(`${n} là số nguyên tố.`);
  } else {
    console.log(`${n} không phải là số nguyên tố.`);
  }
  ```

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm tốt \*

  Chưa reset css nên vẫn còn khoảng cách giữa các dòng

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm chưa tốt

  Đề bài yêu cầu không dùng vòng lặp **while cũng là vòng lặp**

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần cẩn thận hơn khi làm bài. tuy nhiên Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-17-JS)

- [x] Bài 1: Bài làm tốt \*.

  Chưa kiểm tra trường hợp là số âm, không phải là số

---

- [x] Bài 2: Bài làm chưa tốt.

  Sai kết quả

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
  ```

---

- [x] Bài 3: Bài làm rất tốt \*.

  Thay vì tạo 2 biết `save, result` có thể chỉ tạo 1 biến rồi gán lại giá trị

  ```js
  function calcSum(n) {
    if (n <= 0 || n % 1 !== 0) return "Không hợp lệ";
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i * (i + 1);
    }
    return sum;
  }
  console.log(calcSum(10));
  ```

---

- [x] Bài 4: Bài làm rất tốt \*.

  Nên đặt tên biến, tên hàm bằng tiếng Anh

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm rất tốt \*

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên vẫn còn 1 số lỗi nhỏ .

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY17)

- [x] Bài 1: Bài làm tốt

  Việc đặt biến ngoài hàm khiến cho khi gọi hàm nhiều lần bị sai kết quả

  Code còn dài và chưa tối ưu. Nên tạo một biến kết quả và gán lại và return kết quả ở cuối hàm.

  ```js
  function calcTaxiCost(distance) {
    var result,
      level1 = 15000,
      level2 = 13500,
      level3 = 11000;

    if (distance <= 0) return "Không hợp lệ";

    if (distance <= 1) {
      result = distance * level1;
    } else if (distance <= 5) {
      result = level1 + (distance - 1) * level2;
    } else {
      result = level1 + 4 * level2 + (distance - 5) * level3;
      if (distance > 120) result -= result * 0.1;
    }
    return result;
  }
  ```

---

- [x] Bài 2: Bài làm tốt

  Chú ý giá điện theo từng bậc ở đơn vị nghìn **(1678)** không phải **(1.678)**

---

- [x] Bài 3: Bài làm tốt.

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên hoặc nhỏ hơn 0

  Chú ý cách đặt tên hàm, biến có ý nghĩa (**mrX** không có ý nghĩa)

---

- [x] Bài 4: Bài làm chưa tốt.

  Sai trường hợp số 4 trả về kết quả là số nguyên tố (số 4 không là số nguyên tố)

  ```js
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  var n = 2;
  if (isPrime(n)) {
    console.log(`${n} là số nguyên tố.`);
  } else {
    console.log(`${n} không phải là số nguyên tố.`);
  }
  ```

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm rất tốt \*

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên vẫn còn 1 số lỗi, chú ý kiểm tra nhiều trường hợp đầu vào đặc biệt.

## [Nguyễn Đức](https://github.com/Nguyenduc2108/f8-fullstack-k3/tree/main/Homework_session_17)

- [x] Bài 1: Bài làm rất tốt \*

  Nên viết thành function để có thể tái sử dụng.

---

- [x] Bài 2: Bài làm rất tốt \*

  Chú ý giá điện theo từng bậc ở đơn vị nghìn **(1678)** không phải **(1.678)**

---

- [x] Bài 3: Bài làm rất tốt.

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên hoặc nhỏ hơn 0

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6: Bài làm rất tốt \*

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên vẫn còn 1 số lỗi, chú ý kiểm tra nhiều trường hợp đầu vào đặc biệt.

## [Đỗ Minh Đức](https://github.com/a37547-duc/F8/tree/main/BaiTapBuoi17)

- [x] Bài 1: Bài làm chưa tốt

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

  Số km là đại lượng không đổi nên khai báo km bằng từ khóa const.

---

- [x] Bài 2: Bài làm chưa tốt

  Chú ý giá điện theo từng bậc ở đơn vị nghìn **(1678)** không phải **(1.678)**

  Hiểu sai ý đề bài. (Đã giải thích ở bài 1)

---

- [x] Bài 3: Bài làm rất tốt.

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên hoặc nhỏ hơn 0

---

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên

---

- [x] Bài 5: Bài làm chưa tốt

  Sai yêu cầu đề bài (đề bài yêu cầu sau mỗi dòng thì số lượng số trên một dòng tăng lên một và số được tăng dần theo mỗi dòng)

---

- [x] Bài 6: Bài làm tốt \*

  Vì đã học HTML, CSS nên kết hợp sử dụng các thẻ `div` hoặc `span` và `style css` kết hợp với `document.write` để tạo ra giao diện ngoài màn hình

---

- [x] Bài 7: Bài làm rất tốt \*

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên vẫn còn 1 số lỗi, chú ý kiểm tra nhiều trường hợp đầu vào đặc biệt, chú ý để ý kĩ đề bài.

## [Minh Pham](https://github.com/Minh0314/F8-K3/tree/main/Day17)

- [x] Bài 1: Bài làm chưa tốt

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

  Số km là đại lượng không đổi nên khai báo km bằng từ khóa const.

---

- [x] Bài 2:

  **Chưa làm**

---

- [x] Bài 3: Bài làm rất tốt.

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên hoặc nhỏ hơn 0

---

- [x] Bài 4:

  **Chưa làm**

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Bài 6:

  **Chưa làm**

---

- [x] Bài 7:

  **Chưa làm**

---

- [x] Bài 8:

  **Chưa làm**

---

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, chưa làm đủ các bài tập, vẫn còn 1 số lỗi, chú ý kiểm tra nhiều trường hợp đầu vào đặc biệt, chú ý để ý kĩ đề bài.

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_17)

- [x] Bài 1: Bài làm rất tốt \*

---

- [x] Bài 2: Bài làm rất tốt \*

  Chưa kiểm tra trường hợp đầu vào là số âm hoặc không phải là số

---

- [x] Bài 3: Bài làm rất tốt.

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên hoặc nhỏ hơn 0

---

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra trường hợp đầu vào không phải số nguyên

---

- [x] Bài 5:

  **Chưa làm**

---

- [x] Bài 6:

  **Chưa làm**

---

- [x] Bài 7:

  **Chưa làm**

---

- [x] Bài 8: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa hoàn thành tất cả bài tập, vẫn còn 1 số lỗi, chú ý kiểm tra nhiều trường hợp đầu vào đặc biệt.
