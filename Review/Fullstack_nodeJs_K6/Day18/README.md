# Dương review bài tập về nhà buổi 17 - Lớp K6

## [Pham Xuan Yen]

- [x] Bài 1,2

  Bài làm tốt

  Việc liệt kê sẽ hơi thủ công. Nếu như có thêm nhiều khung giá thì phải sửa code rất nhiều.

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

- [x] Bài 3

  Nên kiểm tra trước n phải là số Dương

  ```js
  function calcSum(n) {
  	if (n <= 0 || n % 1 !== 0) return 'Không hợp lệ';
  	var sum = 0;
  	for (var i = 1; i <= n; i++) {
  		sum += i * (i + 1);
  	}
  	return sum;
  }
  console.log(calcSum(10));
  ```

- [x] Bài 4

  Có thể tối ưu lại một chút, giảm được càng nhiều vòng lặp càng tốt:

  ```js
  function isPrime(n) {
  	/* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
  	if (n <= 1) return false;
  	/* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
  	if (n <= 3) return true;
  	/* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
  	if (n % 2 === 0 || n % 3 === 0) return false;
  	/* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */
  	/*
  	 * Vì 4 dính điều kiện %2
  	 * Từ 3 trở xuống dính điều kiện <=3 && > 1
  	 * ------------------------------------------------------
  	 * 6k ± 1 là:
  	 * 5 = 6k - 1(k = 1)
  	 * 7 = 6k + 1(k = 1)
  	 * 11 = 6k - 1(k = 2)
  	 * 13 = 6k + 1(k = 2)
  	 * 17 = 6k - 1(k = 3)
  	 * 19 = 6k + 1(k = 3)
  	 * 23 = 6k - 1(k = 4)
  	 * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
  	 * 29 = 6k - 1(k = 5)
  	 * 31 = 6k + 1(k = 5)
  	 * 35 = 6k - 1(k = 6)
  	 * 37 = 6k + 1(k = 6)
  	 * ...
  	 */
  	for (let i = 5; i * i <= n; i += 6) {
  		/* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
  		if (n % i === 0 || n % (i + 2) === 0) return false;
  	}
  	/* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
  	return true;
  }
  console.log('isPrime(9007199254740881)', isPrime(9007199254740881));
  console.log(
  	'isPrime(Number.MAX_SAFE_INTEGER)',
  	isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

- [x] Bài 5,6,7,8

  Bài làm rất tốt

- [x] Lưu ý: Tất cả tên hàm nên sử dụng tiếng anh

  ## Mai Viet Hoang

- [x] Bài 1

  Bài làm rất tốt, nhưng có thể làm như bài 2.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Bài làm rất tốt

- [x] Bài 4

  Nên tách thành hàm để dễ dàng tái sử dụng hơn

  Có thể tối ưu lại một chút, giảm được càng nhiều vòng lặp càng tốt:

  ```js
  function isPrime(n) {
  	/* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
  	if (n <= 1) return false;
  	/* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
  	if (n <= 3) return true;
  	/* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
  	if (n % 2 === 0 || n % 3 === 0) return false;
  	/* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */
  	/*
  	 * Vì 4 dính điều kiện %2
  	 * Từ 3 trở xuống dính điều kiện <=3 && > 1
  	 * ------------------------------------------------------
  	 * 6k ± 1 là:
  	 * 5 = 6k - 1(k = 1)
  	 * 7 = 6k + 1(k = 1)
  	 * 11 = 6k - 1(k = 2)
  	 * 13 = 6k + 1(k = 2)
  	 * 17 = 6k - 1(k = 3)
  	 * 19 = 6k + 1(k = 3)
  	 * 23 = 6k - 1(k = 4)
  	 * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
  	 * 29 = 6k - 1(k = 5)
  	 * 31 = 6k + 1(k = 5)
  	 * 35 = 6k - 1(k = 6)
  	 * 37 = 6k + 1(k = 6)
  	 * ...
  	 */
  	for (let i = 5; i * i <= n; i += 6) {
  		/* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
  		if (n % i === 0 || n % (i + 2) === 0) return false;
  	}
  	/* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
  	return true;
  }
  console.log('isPrime(9007199254740881)', isPrime(9007199254740881));
  console.log(
  	'isPrime(Number.MAX_SAFE_INTEGER)',
  	isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

- [x] Bài 6

  Không nên đặt tên function viết hoa, sẽ dễ nhầm với hàm tạo(function constructor)

- [x] Bài 7

  Nên đặt class và style=css chứ không nên inline nhiều, khiến code khó đọc.

- [x] Bài 8

  Không nên đặt tên function viết hoa, sẽ dễ nhầm với hàm tạo(function constructor)
