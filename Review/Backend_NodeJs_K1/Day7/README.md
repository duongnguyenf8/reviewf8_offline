# Dương review bài học viên lớp K1- Backend

**Note:**


---

## [Trần Văn Hiểu](https://github.com/tuilahieu/nodejs/blob/main/exercise/day6/index.html)

- [x] Bài 1:

  Bài làm rất tốt \*

  Tuy nhiên cần kiểm tra điều kiện nếu mảng này là mảng rỗng thì sẽ đưa ra thông báo thích hợp.

  Hiện tại nếu kiểm tra đầu vào là mảng rỗng thì sẽ có thông báo như sau: `Số nhỏ nhất trong mảng là undefined và vị trí 0` như vậy là vì khởi tạo biến `index = 0` nên trường hợp này nó luôn trả về index là 0 thì không hợp lý cho lắm.

  Và nếu như mảng có 1 phần tử thì kết quả nhận được cũng không hợp lý. Cần chỉnh sửa và bổ sung.

---

- [x] Bài 2:

  Bài làm rất tốt \*

  Cần kiểm tra số đó có là số nguyên hay không?

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Cần kiểm tra đầu vào đã là mảng hay chưa và đầu vào có phải là mảng rỗng hay không để chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm rất tốt \*

  Cần kiểm tra đầu vào có phải là mảng rỗng hay không để chặt chẽ hơn.

---

- [x] Đánh giá: Bài làm khá tốt, tuy nhiên cần đặc biệt chú ý kiểm tra các trường hợp có thể xảy ra thì bài làm sẽ chặt chẽ hơn

---

## [Phạm Hoàng](https://github.com/palkma-byte/f8-backend-k1/blob/main/HW/HW6/hw06.js)

- [x] Bài 1:

  Bài làm chưa đạt yêu cầu là ngoài việc tìm ra số lớn nhất và nhỏ nhất trong mảng còn phải tìm ra vị trí của chúng nữa.

  Ngoài ra bài làm chưa check một số điều kiện như có là mảng hay không? Mảng có phải là mảng rỗng hay không? Cần bổ sung.

---

- [x] Bài 2:

  Bài làm tốt \*

  Cần kiểm tra mảng đầu vào có là mảng hay không?

  Trong hàm kiểm tra số nguyên tố, vòng lặp biến i thì điều kiện đúng phải là `i <= Math.sqrt(n)`. Vì nếu n là 9 thì cần phải xét đến 3 mới đúng.

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm tốt

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

  Nếu phần tử cần chèn vào lớn hơn tất cả các phần tử của mảng thì chưa có xử lý cho trường hợp này.

---

- [x] Đánh giá: Bài làm cần chú ý vào yêu cầu đề bài để thực hiện đúng theo yêu cầu, cần chú ý để xét hết tất cả các trường hợp có thể xảy ra thì bài làm sẽ chặt chẽ hơn.

---

## [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/tree/main/day-6)

- [x] Bài 1:

  Bài làm tốt \*

  Tuy nhiên hiện `console.log` đang là 2 dòng đều ghi `số lớn nhất` cần sửa lại.

  Nên thêm bước kiểm tra điều kiện đầu vào là một mảng hoặc là mảng rỗng. Hiện tại nếu là mảng rỗng thì nó sẽ hiển thị vị trí index = 0 nên không hợp lý.

  Nếu như mảng có 1 phần tử thì kết quả nhận được cũng không hợp lý. Cần chỉnh sửa và bổ sung.

---

- [x] Bài 2:

  Bài làm tốt \*

  Cần kiểm tra mảng đầu vào có là mảng hay không?

  Trong hàm kiểm tra số nguyên tố, vòng lặp biến i thì điều kiện đúng phải là `i <= Math.sqrt(n)`. Vì nếu n là 9 thì cần phải xét đến 3 mới đúng.

  Khi kiểm tra đầu vào là mảng trống thì hiển thị dòng sau đây `Trung bình các số nguyên tố trong mảng là: Không có số nguyên tố`. Cần chỉnh sửa lại.

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Đánh giá: Bài làm khá tốt, chỉ cần chú ý về các trường hợp có thể xảy ra để bài làm thêm chặt chẽ hơn.

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/blob/main/F8_BE/f8_nodejs/homeword/day06/js/ex01.js)

- [x] Bài 1:

  Bài làm rất tốt \*

  Tuy nhiên cần kiểm tra xem đầu vào có phải là một mảng hay không? Nếu như mảng có 1 phần tử thì kết quả nhận được không hợp lý. Cần chỉnh sửa và bổ sung.

---

- [x] Bài 2:

  Bài làm tốt

  Phần hàm kiểm tra số nguyên tố cần kiểm tra điều kiện của n < 2 thì sẽ trả về false chứ không phải n < 0.

  Cần kiểm tra đầu vào có phải là mảng hay không?

  Khi kiểm tra đầu vào là mảng trống thì hiển thị dòng sau đây `Trung bình các số nguyên tố trong mảng là: Không có số nguyên tố`. Cần chỉnh sửa lại.

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Đánh giá: Bài làm khá tốt chỉ cần lưu ý một số trường hợp có thể xảy ra để bài làm có thể chặt chẽ hơn.

---

## [Nguyễn Minh Hiếu](https://github.com/hiusnguyen201/F8-Exercise/blob/main/Lab06/lab06.js)

- [x] Bài 1:

  Bài làm tốt \*

  Chưa kiểm tra trường hợp mảng đầu vào là mảng trống hoặc không phải là mảng.

  Nếu như mảng có 1 phần tử thì kết quả nhận được cũng không hợp lý. Cần chỉnh sửa và bổ sung.

  Nên khai báo biến `index` ở phạm vi global để không cần phải khai báo lại mỗi khi khởi tạo 1 function.

---

- [x] Bài 2:

  Bài làm rất tốt \*

  Cần kiểm tra đầu vào có phải là mảng hay không?

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Đánh giá: Bài làm khá tốt chỉ cần lưu ý một số trường hợp có thể xảy ra để bài làm có thể chặt chẽ hơn.

---

## [Phạm Văn Bảo](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVN/BTVNB6)

- [x] Bài 1:

  Bài làm tốt \*

  Chưa kiểm tra trường hợp mảng đầu vào là mảng trống và không phải là mảng.

  Nếu như mảng có 1 phần tử thì kết quả nhận được cũng không hợp lý. Cần chỉnh sửa và bổ sung.

---

- [x] Bài 2:

  Bài làm rất tốt \*

  Không nên đặt tên function là integer.

  Cần kiểm tra đầu vào có phải là mảng hay không?

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

---

- [x] Bài 4:

  Bài làm chưa tốt

  Nên kiểm tra thêm điều kiện đầu vào có là mảng hoặc là mảng trống hay không thì sẽ chặt chẽ hơn.

  Chưa xét đến trường hợp số cần thêm vào lớn hơn tất cả các phần tử trong mảng.

---

- [x] Đánh giá: Bài làm tốt cần lưu ý đến điều kiện kiểm tra tất cả các trường hợp có thể xảy ra.

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi6)

- [x] Bài 1

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`Math.max()`** và **`Math.min()`** để tìm giá trị lớn nhất và nhỏ nhất trong mảng.

  - Ví dụ:

    ```js
    let max = Math.max(...arrInt);
    let min = Math.min(...arrInt);
    ```

  - Để tìm vị trí của giá trị lớn nhất và nhỏ nhất, có thể sử dụng hàm **`indexOf()`**:

    ```js
    let positionMax = arrInt.indexOf(max);
    let positionMin = arrInt.indexOf(min);
    ```

---

- [x] Bài 2

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Chưa thực hiện tính trung bình các số nguyên tố trong mảng số nguyên.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`filter()`** để lọc ra các số nguyên tố trong mảng.

  - Ví dụ:

    ```js
    let arrPrime = numbers.filter((num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    });
    ```

  - Có thể sử dụng hàm **`reduce()`** để tính tổng các số nguyên tố trong mảng:

    ```js
    let sum = arrPrime.reduce((acc, curr) => acc + curr, 0);
    ```

  - Tính trung bình các số nguyên tố trong mảng:

  ```js
  let avg = sum / arrPrime.length;
  ```

---

- [x] Bài 3

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`filter()`** để lọc các phần tử trùng nhau trong mảng.

  - Ví dụ:

    ```js
    let newNumbers = numbers.filter(
      (item, index) => numbers.indexOf(item) === index
    );
    ```

---

- [x] Bài 4

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Thực tế chỉ cần sau khi chèn phần tử mới vào mảng, sắp xếp lại mảng là được.

  Chưa trả về vị trí của phần tử mới được chèn vào mảng.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*. Tuy nhiên cần chú ý đến các trường hợp có thể xảy ra để bài làm có thể chặt chẽ hơn.

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1/tree/main/Baitapbuoi6)

- [x] Bài 1

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`Math.max()`** và **`Math.min()`** để tìm giá trị lớn nhất và nhỏ nhất trong mảng.

  - Ví dụ:

    ```js
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    ```

  - Để tìm vị trí của giá trị lớn nhất và nhỏ nhất, có thể sử dụng hàm **`indexOf()`**:

    ```js
    let positionMax = numbers.indexOf(max);
    let positionMin = numbers.indexOf(min);
    ```

---

- [x] Bài 2

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`filter()`** để lọc ra các số nguyên tố trong mảng.

  - Ví dụ:

    ```js
    let arrPrime = arrInt.filter((num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    });
    ```

  - Có thể sử dụng hàm **`reduce()`** để tính tổng các số nguyên tố trong mảng:

    ```js
    let sum = arrPrime.reduce((acc, curr) => acc + curr, 0);
    ```

  - Tính trung bình các số nguyên tố trong mảng:

  ```js
  let avg = sum / arrPrime.length;
  ```

---

- [x] Bài 3

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`filter()`** để lọc các phần tử trùng nhau trong mảng.

  - Ví dụ:

    ```js
    let arrNew = arr.filter((item, index) => arr.indexOf(item) === index);
    ```

---

- [x] Bài 4

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  ```js
  newNumbers = numbers.sort(function (a, b) {
    {
      return a - b;
    }
  });
  ```

  Có thể xóa dấu ngoặc ngọn thừa ở trước và sau `return` để code gọn hơn.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*. Tuy nhiên cần chú ý đến các trường hợp có thể xảy ra để bài làm có thể chặt chẽ hơn.

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi6)

- [x] Bài 1

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Chưa thực hiện tìm vị trí của số lớn nhất và nhỏ nhất trong mảng. Nếu mảng rỗng, đoạn code sẽ gặp lỗi.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`Math.max()`** và **`Math.min()`** để tìm giá trị lớn nhất và nhỏ nhất trong mảng.

  - Ví dụ:

    - Để tìm vị trí của giá trị lớn nhất và nhỏ nhất, có thể sử dụng hàm **`indexOf()`**:

      ```js
      let positionMax = array.indexOf(array[array.length - 1]);
      let positionMin = array.indexOf(array[0]);
      ```

---

- [x] Bài 2

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Chưa kiểm tra xem mảng có chứa số nguyên tố hay không. Nếu mảng không chứa số nguyên tố, đoạn code sẽ gặp lỗi.

  Trường hợp số 4 vẫn đang bị nhận là số nguyên tố.

  - Có vẻ do trường hợp này:

    ```js
    for (let index = 2; index < Math.sqrt(x); index++) {
      /*...*/
    }
    ```

    - Nên sửa lại thành:

    ```js
    for (let index = 2; index <= Math.sqrt(x); index++) {
      /*...*/
    }
    ```

  Có thể tối ưu hơn bằng cách sử dụng hàm **`filter()`** để lọc ra các số nguyên tố trong mảng.

  - Ví dụ:

    ```js
    let arrPrime = arr.filter((num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    });
    ```

  - Có thể sử dụng hàm **`reduce()`** để tính tổng các số nguyên tố trong mảng:

    ```js
    let sum = arrPrime.reduce((acc, curr) => acc + curr, 0);
    ```

  - Tính trung bình các số nguyên tố trong mảng:

  ```js
  let avg = sum / arrPrime.length;
  ```

---

- [x] Bài 3

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Có thể tối ưu hơn bằng cách sử dụng hàm **`filter()`** để lọc các phần tử trùng nhau trong mảng.

  - Ví dụ:

    ```js
    let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
    ```

---

- [x] Bài 4

  Bài làm tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

  Đang fix cứng với vị trí cần chèn. Gây ra rất nhiều lỗi.

  ```js
  for (var i in number) {
    if (number[i] >= 8) break;
  }
  ```

  - Nếu số cần chèn là 2, kết quả sẽ là: `[1,  4,  7,  2, 7, 10, 16, 20]`

  Thực tế chỉ cần sau khi chèn phần tử mới vào mảng, sắp xếp lại mảng là được.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*. Tuy nhiên cần chú ý đến các trường hợp có thể xảy ra để bài làm có thể chặt chẽ hơn.

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi6)

- [x] Bài 1

  Bài làm rất tốt \*

  Chưa kiểm tra xem mảng có rỗng hay không.

---

- [x] Bài 2

  Bài làm rất tốt \*

---

- [x] Bài 3

  Bài làm rất tốt \*

---

- [x] Bài 4

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \* Tốt nhất lớp \*

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1.git)

- [x] Bài 1

  Bài làm rất tốt \*

---

- [x] Bài 2

  Bài làm rất tốt \*

  Hàm **`isNum()`** chưa đúng hoàn toàn. Vòng lặp **for** nên bắt đầu từ **i = 2** và điều kiện lặp nên là **`i <= Math.sqrt(n)`**.

---

- [x] Bài 3

  Bài làm rất tốt \*

---

- [x] Bài 4

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB6)

- [x] Bài 1

  Bài làm rất tốt \*

  Có thể tối ưu bằng cách sử dụng một vòng lặp duy nhất:

  ```js
  var Num = [6, 9, -10, 12, 0, 14, 20, -100];
  var findMaxMin = function (arr) {
    var max = arr[0];
    var min = arr[0];
    var maxIndex;
    var minIndex;
    for (var i = 0; i <= arr.length - 1; i++) {
      if (arr[i] >= max) {
        max = arr[i];
        maxIndex = i;
      }
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    return `Số lớn nhất là ${max} tại vị trí thứ ${maxIndex}\nSố nhỏ nhất là ${min} tại vị trí thứ ${minIndex}`;
  };
  console.log(findMaxMin(Num));
  ```

---

- [x] Bài 2

  Bài làm rất tốt \*

  Có thể sử dụng hàm **`reduce()`** để tính tổng các số nguyên tố trong mảng:

  ```js
  let sum = Num1.reduce((acc, curr) => acc + curr, 0);
  ```

  - Tính trung bình các số nguyên tố trong mảng:

  ```js
  let avg = sum / Num1.length;
  ```

  Lưu ý: Nên đặt tên biến có ý nghĩa hơn.

---

- [x] Bài 3

  Bài làm rất tốt \*

---

- [x] Bài 4

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*
