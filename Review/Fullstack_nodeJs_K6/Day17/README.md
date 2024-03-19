# Dương review bài tập về nhà buổi 18 - Lớp K6

## [Phan Van Hai]

- [x] Bài 1

  Đề bài yêu cầu **hoán vị 2 số**, vì vậy cần chắc chắn nó là 2 số trước khi thực hiện đổi chỗ.

- [x] Bài 2: Bài làm rất tốt

- [x] Bài 3

  Nên tách message ra một biến khác, để có thể dễ đổi hơn

  Nên sử dụng 1 biến `max` để gán là số lớn nhất, sẽ đỡ rối code hơn.

  ```js
  var a = 10,
  	b = 20000,
  	c = '10',
  	max = a,
  	checkTypes = true;

  if (!+a || !+b || !+c) {
  	checkTypes = false;
  }

  if (checkTypes) {
  	if (b > max) {
  		max = b;
  	}
  	if (c > max) {
  		max = c;
  	}
  } else {
  	max = 'Dữ liệu 0 hợp lệ.';
  }
  console.log(max);
  ```

- [x] Bài 4

  Vẫn nên kiểm tra nó là số trước.

  Số 0 trái dấu với cả âm lẫn dương, nên tách trường hợp riêng.

  Vế đầu kiểm tra không cần thiết.

- [x] Bài 5

  Đây không phải sắp xếp, đây chỉ là console.log theo thứ tự.

## [Pham Xuan Yen]

- [x] Bài 1

  Đề bài yêu cầu **hoán vị 2 số**, vì vậy cần chắc chắn nó là 2 số trước khi thực hiện đổi chỗ.

  Vì nếu là chuỗi, sử dụng cộng trước thì sẽ thành số khác.

- [x] Bài 2: Bài làm rất tốt

- [x] Bài 3

  Nên tách message ra một biến khác, để có thể dễ đổi hơn

  Nên sử dụng 1 biến `max` để gán là số lớn nhất, sẽ đỡ rối code hơn.

  ```js
  var a = 10,
  	b = 20000,
  	c = '10',
  	max = a,
  	checkTypes = true;

  if (!+a || !+b || !+c) {
  	checkTypes = false;
  }

  if (checkTypes) {
  	if (b > max) {
  		max = b;
  	}
  	if (c > max) {
  		max = c;
  	}
  	document.write(`<h2>${max} là số lớn nhất</h2>`);
  } else {
  	document.write(`<h2>Dữ liệu 0 hợp lệ</h2>`);
  }
  ```

- [x] Bài 4

  Vẫn nên kiểm tra nó là số trước.

  Số 0 trái dấu với cả âm lẫn dương, nên tách trường hợp riêng.

  Nếu như trong bài. 2 số âm là ngược dấu. Nên kiểm tra bằng cách nhân 2 số với nhau, nếu là âm thì là ngược dấu (Trừ trường hợp chỉ có 1 trong 2 là 0 cũng là trái dấu)

- [x] Bài 5

  Bài làm rất tốt

## [Le Duc Anh]

- [x] Bài 1

  Đề bài yêu cầu **hoán vị 2 số**, vì vậy cần chắc chắn nó là 2 số trước khi thực hiện đổi chỗ.

  Vì nếu là chuỗi, sử dụng cộng trước thì sẽ thành số khác.

- [x] Bài 2: Bài làm rất tốt

- [x] Bài 3

  **Lưu ý:** Không làm cách thứ 2, quá khó hiểu cho 1 đoạn code thực tế.

  Nên tách message ra một biến khác, để có thể dễ đổi hơn

  Nên sử dụng 1 biến `max` để gán là số lớn nhất, sẽ đỡ rối code hơn.

  ```js
  var a = 10,
  	b = 20000,
  	c = '10',
  	max = a,
  	checkTypes = true;

  if (!+a || !+b || !+c) {
  	checkTypes = false;
  }

  if (checkTypes) {
  	if (b > max) {
  		max = b;
  	}
  	if (c > max) {
  		max = c;
  	}
  	document.write(`<h2>${max} là số lớn nhất</h2>`);
  } else {
  	document.write(`<h2>Dữ liệu 0 hợp lệ</h2>`);
  }
  ```

- [x] Bài 4

  Vẫn nên kiểm tra nó là số trước.

  Số 0 trái dấu với cả âm lẫn dương, nên tách trường hợp riêng.

  Nên kiểm tra bằng cách nhân 2 số với nhau, nếu là âm thì là ngược dấu (Trừ trường hợp chỉ có 1 trong 2 là 0 cũng là trái dấu)

  Đoạn logic rẽ nhánh quá ngoằn nghoèo.

- [x] Bài 5

  Đây không phải sắp xếp, đây chỉ là console.log theo thứ tự.

## [Mai Viet Hoang]

- [x] Bài 1: Bài làm rất tốt

- [x] Bài 2: Bài làm sai :(( Nhân chia trước, cộng trừ sau, nhóm ngoặc làm sai kết quả.

- [x] Bài 3

  Bài làm rất tốt

  Nhưng vẫn nên kiểm tra nó là số trước.

- [x] Bài 4

  Bài làm rất tốt

  Vẫn nên kiểm tra nó là số trước.

- [x] Bài 5: Bài làm rất tốt

## [Nguyen Manh Dung]

- [x] Bài 1

  Đề bài yêu cầu **hoán vị 2 số**, vì vậy cần chắc chắn nó là 2 số trước khi thực hiện đổi chỗ.

  Vì nếu là chuỗi, sử dụng cộng trước thì sẽ thành số khác.

- [x] Bài 2

  Nên kiểm tra nó là số trước, nếu không, khi cộng sẽ bị sai.

- [x] Bài 3

  Bài làm rất tốt

- [x] Bài 4

  Vẫn nên kiểm tra nó là số trước.

  Số 0 trái dấu với cả âm lẫn dương, nên tách trường hợp riêng.

  Nên kiểm tra bằng cách nhân 2 số với nhau, nếu là âm thì là ngược dấu (Trừ trường hợp chỉ có 1 trong 2 là 0 cũng là trái dấu)

  Đoạn logic rẽ nhánh quá ngoằn nghoèo.

- [x] Bài 5

  Bài làm rất tốt. Nhưng nên kiểm tra nó là số trước.

## [Nguyen The Tuan]

- [x] Bài 1

  Đề bài yêu cầu **hoán vị 2 số**, vì vậy cần chắc chắn nó là 2 số trước khi thực hiện đổi chỗ.

  Vì nếu là chuỗi, sử dụng cộng trước thì sẽ thành số khác.

- [x] Bài 2

  Bài làm rất tốt

- [x] Bài 3

  Bài làm rất tốt

  Bài làm hơi giống bài của **Nguyen Manh Dung**

- [x] Bài 4

  Số 0 trái dấu với cả âm lẫn dương, nên tách trường hợp riêng.

  Nên kiểm tra bằng cách nhân 2 số với nhau, nếu là âm thì là ngược dấu (Trừ trường hợp chỉ có 1 trong 2 là 0 cũng là trái dấu)

- [x] Bài 5: Đây không phải sắp xếp, đây chỉ là console.log theo thứ tự.
