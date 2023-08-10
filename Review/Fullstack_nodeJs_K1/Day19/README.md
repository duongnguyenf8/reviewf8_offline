## [Hoài Nam Đỗ](https://github.com/oaiHmaN25/btvn.git)

- [x] Bài 1:

  Chưa kiểm trả xem mảng có phải mảng số nguyên hay không.

  Chưa trả về vị trị **index** của phần tử lớn nhất và nhỏ nhất.

  Đề xuất sửa thành:

  ```javascript
  function findMinMax(array) {
    if (!checkArray(array)) {
      return false;
    }

    var min = array[0];
    var max = array[0];
    var indexMin = 0;
    var indexMax = 0;
    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
        indexMin = i;
      }

      if (max < array[i]) {
        max = array[i];
        indexMax = i;
      }
    }

    console.log(`Max : ${max}`);
    console.log(`Min : ${min}`);
    console.log(`vị trí Max : ${indexMax}`);
    console.log(` vị trí Min : ${indexMin}`);
  }
  ```

---

- [x] Bài 2: Bài làm tốt.

  Nếu mảng không có số nguyên tố chưa có thông báo `“Không có số nguyên tố”`

  Có thể tối ưu lại hàm `isPrime()`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] Bài 3: Bài làm chưa tốt.

  Chỉ đúng với trường hợp các số trùng nhau liên tiếp.

  Ví dụ mảng `array =[1,2, 1,2,4,5]`, thuật toán sẽ sai do điều kiện `(array[i] !== array[i+1])`.

  Đề xuất Sửa Lại hàm `removeDuplicate()`.

  ```javascript
  function removeDuplicate(array) {
    if (!checkArray(array)) {
      return false;
    }

    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }

    return newArray;
  }
  ```

---

- [x] Bài 4: Bài làm chưa tốt .

  Sắp xếp trong rồi mới chèn, chứ không phải chèn vào cuối xong rồi sắp xếp.

  Đề xuất sửa thành:

  ```javascript
  function sortArray(arr, addElement) {
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > addElement) {
        break;
      }
    }

    arr.splice(i, 0, addElement);
    return arr;
  }

  sortArray([5, 1, 9, 8, 10], 4);
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. cần phải cẩn thận hơn khi làm bài.

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi19)

- [x] Bài 1: Bài làm tốt\*

  Chưa kiểm tra mảng có phải mảng số nguyên hay không.

---

- [x] Bài 2: Bài làm tốt\*

  Có thể tối ưu lại hàm `isPrime()`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] Bài 3: Bài làm rất tốt\*

---

- [x] Bài 4: Bài làm rất tốt\*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên vẫn còn 1 số lỗi nhỏ.

## [nguyen hung anh](https://github.com/realguy010895/hunganh-f8-k1/blob/main/script.js)

- [x] Bài 1: Bài làm tốt\*

  Chưa kiểm tra mảng có phải mảng số nguyên hay không.

---

- [x] Bài 2: Bài làm tốt\*

  Có thể tối ưu lại hàm `isPrime()`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] Bài 3: Bài làm tốt.

  Nên sử dụng kiến thức đang học.

---

- [x] Bài 4: Bài làm tốt .

  Dùng hàm `sort` trong array để sắp xếp, cho ngắn gọn.

  Đề xuất sửa thành:

  ```javascript
  array.sort((a, b) => a - b);

  Dòng `console.log(sortedArray)` thừa vì `console.log(result)` có kết quả giống .
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần phát huy.

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack.git)

- [x] Bài 1: Bài làm tốt\*

  Chưa kiểm tra mảng có phải mảng số nguyên hay không.

  gán `idnexMax = 0 và indexMin = 0` ở ngoài rồi bỏ trường hợp `=` trong rẽ nhánh **if** sẽ tối ưu hơn.

---

- [x] Bài 2: Bài làm tốt\*

  Có thể tối ưu lại hàm `isPrime()`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] Bài 3: Bài làm rất tốt\*

---

- [x] Bài 4: Bài làm tốt\* .

  Tối ưu lại hàm `sortArray(array, addElement)`.

  Đề xuất sửa thành:

  ```javascript
  function sortArray(arr, addElement) {
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > addElement) {
        break;
      }
    }

    arr.splice(i, 0, addElement);
    return arr;
  }
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chỉnh sửa 1 số lỗi nhỏ.

## [Trung Le](https://github.com/Trungdeptraii/06-08-2023-Le-Van_Trung-Day19.git)

- [x] Bài 1:

  Chưa kiểm tra mảng có phải mảng số nguyên hay không.

  Chưa có vị trí index lớn nhất và nhỏ nhất.

  không được gán giá trị `max = 0` vì nếu mảng toàn số âm giá trị **max** sẽ sai.

  Ví dụ `array = [-1, -2, -3]` giá trị **max** của mảng trên là **-1** chứ không phải giá trị **0**.

---

- [x] Bài 2: Bài làm tốt.

  không cần tạo ra 1 mảng đề lưu số nguyên tố, làm thế khác dài.

  Chỉ cần tạo ra 1 hàm kiểm tra số nguyên tố, nếu thoả mãn số nguyên tố thì cộng vào **sum**.

  Đề xuất sửa thành:

  ```javascript
  let sum = 0;
  let dem = 0;
  const arr2 = [1, 4, 6, 8, 3, 5, 5];
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (isPrime(arr2[i])) {
      sum += arr2[i];
      dem++;
    }
  }

  if (dem) {
    console.log(`trung bình các số nguyên tố trong mảng: ${sum / dem}`);
  } else {
    console.log("mảng không có số nguyên tố.");
  }
  ```

---

- [x] Bài 3:

  không cần phải tạo ra 2 vòng lặp for lòng nhau.

  Đề xuất tối ưu.

  ```javascript
  const arr3 = ["a", "b", "c", 1, 2, 1, "b", "c", "1", "2"];
  let newArr = [];
  for (const value of arr3) {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  }

  console.log("[Bài 3] mảng ban đầu: ", arr3);
  console.log("[Bài 3] mảng sau khi xử lý lặp: ", newArr);
  ```

---

- [x] Bài 4: Bài làm tốt .

  không phải cần phải tạo ra mảng **result** và **result2** làm thế khá phức tạp.

  Đề xuất sửa thành:

  ```javascript
  let arr4 = [5, 3, 9, 8, 10];
  let addElement = 6;
  console.log("[Bài 4] mảng ban đầu", arr4);
  arr4.sort((a, b) => a - b);
  for (var i = 0; i < arr4.length; i++) {
    if (arr4[i] > addElement) {
      break;
    }
  }

  arr4.splice(i, 0, addElement);
  console.log("[Bài 4] mảng sau cùng:", arr4);
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần cẩn thận hơn khi làm bài.

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006)

- [x] Bài 1: Bài làm tốt.

  Chưa kiểm tra mảng có phải mảng số nguyên hay không.

  không cần tạo ra 2 vòng lặp for đề tìm min, max có thề gộp lại thành 1 vòng lặp for.

  Đề xuất sửa thành:

  ```javascript
  function MaxAndMin(array) {
    var max;
    var min;
    var indexMax = 0;
    var indexMin = 0;
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
          indexMax = i;
        }

        if (min > array[i]) {
          min = array[i];
          indexMin = i;
        }
      }

      console.log(`giá trị max là : ${max} vị trí index ${indexMax}`);
      console.log(`giá trị min là : ${min} vị trí index ${indexMin}`);
    } else {
      console.log("danh sách rỗng");
    }
  }
  ```

---

- [x] Bài 2: Bài làm tốt.

  Tối ưu lại hàm `isPrime(number)`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] Bài 3:

  Bài làm tốt.

  Nên sử dụng kiến thức đang học để làm.

---

- [x] Bài 4: bài làm chưa tốt .

  Phải thực hiện sắp xếp xong mới chèn 1 phần tử vào mảng.

  Đề xuất sửa thành:

  ```javascript
  function sortArray(arr, addElement) {
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > addElement) {
        break;
      }
    }

    arr.splice(i, 0, addElement);
    return arr;
  }

  sortArray([5, 1, 9, 8, 10], 4);
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chỉn chu hơn khi làm bài.

---

## [Bi11-043 Đỗ Hà Chi](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/hoc_javascript/btvn_19/ex03/main.js)

- [x] [Bài 1](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/hoc_javascript/btvn_19/ex03/main.js)

  Bài làm rất tốt\*

  Tuy nhiên nên sử dụng vòng lặp chứ không phải một hàm để luyện tập tốt hơn.

  ```javascript
  function MaxAndMin(array) {
    var max;
    var min;
    var indexMax = 0;
    var indexMin = 0;
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
          indexMax = i;
        }

        if (min > array[i]) {
          min = array[i];
          indexMin = i;
        }
      }

      console.log(`giá trị max là : ${max} vị trí index ${indexMax}`);
      console.log(`giá trị min là : ${min} vị trí index ${indexMin}`);
    } else {
      console.log("danh sách rỗng");
    }
  }
  ```

---

- [x] [Bài 2](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/hoc_javascript/btvn_19/ex03/main.js)

  Bài làm rất tốt\*

  Tối ưu lại hàm `isPrime(number)`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] [Bài 3](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/hoc_javascript/btvn_19/ex03/main.js)

  Bài làm rất tốt\*

  Nên sử dụng kiến thức đã học để bài làm tốt hơn.

- [x] [Bài 4](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/hoc_javascript/btvn_19/ex03/main.js)

  Chưa hiểu ý đề bài.

  Phải thực hiện sắp xếp xong mới chèn 1 phần tử vào mảng.

  Đề xuất sửa thành:

  ```javascript
  function sortArray(arr, addElement) {
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > addElement) {
        break;
      }
    }

    arr.splice(i, 0, addElement);
    return arr;
  }

  sortArray([5, 1, 9, 8, 10], 4);
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần sử dụng các kiến thức đã học để luyện tập tốt hơn.

## [Mai Việt Hoàng](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

- [x] [Bài 1](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  Bài làm rất tốt\*

---

- [x] [Bài 2](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  Bài làm rất tốt\*

  Tối ưu lại hàm `isPrime(number)`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] [Bài 3](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  Bài làm rất tốt\*

- [x] [Bài 4](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01.git)

  Chưa hiểu ý đề bài.

  Phải thực hiện sắp xếp xong mới chèn 1 phần tử vào mảng.

  Đề xuất sửa thành:

  ```javascript
  function sortArray(arr, addElement) {
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > addElement) {
        break;
      }
    }

    arr.splice(i, 0, addElement);
    return arr;
  }

  sortArray([5, 1, 9, 8, 10], 4);
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý tối ưu tốt hơn.

## [Phan Trung Hiếu](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_19)

- [x] [Bài 1](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_19)

  Chưa kiểm tra mảng có phải mảng số nguyên hay không.

  không cần tạo ra 2 vòng lặp for đề tìm min, max có thề gộp lại thành 1 vòng lặp for.

  Đề xuất sửa thành:

  ```javascript
  function MaxAndMin(array) {
    var max;
    var min;
    var indexMax = 0;
    var indexMin = 0;
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
          indexMax = i;
        }

        if (min > array[i]) {
          min = array[i];
          indexMin = i;
        }
      }

      console.log(`giá trị max là : ${max} vị trí index ${indexMax}`);
      console.log(`giá trị min là : ${min} vị trí index ${indexMin}`);
    } else {
      console.log("danh sách rỗng");
    }
  }
  ```

---

- [x] [Bài 2](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_19)

  Bài làm rất tốt\*

  Tối ưu lại hàm `isPrime(number)`.

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

  Không cần thiết phải thêm một vòng lặp để push các số nguyên tố vào một mảng khác, chỉ cần check nếu là số nguyên tố thì mới cộng và tăng count.

---

- [x] [Bài 3](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_19)

  Bài làm rất tốt\*

  Chưa ghi chú rõ bài làm ở đâu.

- [x] [Bài 4](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_19)

  Chưa hiểu ý đề bài.

  Phải thực hiện sắp xếp xong mới chèn 1 phần tử vào mảng.

  Đề xuất sửa thành:

  ```javascript
  function sortArray(arr, addElement) {
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > addElement) {
        break;
      }
    }

    arr.splice(i, 0, addElement);
    return arr;
  }

  sortArray([5, 1, 9, 8, 10], 4);
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý tối ưu tốt hơn.

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day19/main.js)

- [x] [Bài 1](https://github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day19/main.js)

  Bài làm rất tốt\*

  Tuy nhiên nên sử dụng vòng lặp chứ không phải một hàm để luyện tập tốt hơn.

  ```javascript
  function MaxAndMin(array) {
    var max;
    var min;
    var indexMax = 0;
    var indexMin = 0;
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
          indexMax = i;
        }

        if (min > array[i]) {
          min = array[i];
          indexMin = i;
        }
      }

      console.log(`giá trị max là : ${max} vị trí index ${indexMax}`);
      console.log(`giá trị min là : ${min} vị trí index ${indexMin}`);
    } else {
      console.log("danh sách rỗng");
    }
  }
  ```

---

- [x] [Bài 2](https://github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day19/main.js)

  Bài làm rất tốt\*

  Tối ưu tốt hàm `isPrime(number)`. Tuy nhiên có thể làm tốt hơn với trường hợp `%3` và quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 *1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] [Bài 3](https://github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day19/main.js)

  Bài làm rất tốt\*

- [x] [Bài 4](https://github.com/anhquan2211/F8-OFFLINE/blob/main/f8-offline-day19/main.js)

  Bài làm rất tốt\*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Nên sử dụng các kiến thức đã học để luyện tập tốt hơn.

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day19)

- [x] [Bài 1](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day19)

  Bài làm rất tốt\*

---

- [x] [Bài 2](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day19)

  Bài làm rất tốt\*

  Lồng quá nhiều `if/else` khiến code bị rối, nên tách từng trường hợp một cách tốt hơn.

  Xem lại hàm `isPrime(n)` với giá trị `n = 9` đang sai kết quả.

  Tối ưu tốt hàm `isPrime(number)`. Tuy nhiên có thể làm tốt hơn với trường hợp `%3` và quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 *1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
  ```

---

- [x] [Bài 3](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day19)

  Bài làm rất tốt\*

- [x] [Bài 4](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day19)

  Bài làm rất tốt\*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Nên tối ưu lại cách viết code để đỡ rối hơn.
