## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-20)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [1, 3, 2, 5, 3, 6, 1];
  ```

  Có thể tham khảo cách làm sau đây:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  /* Trả về 1 mảng, trong đó có các phần tử trong A và B */
  var result = (function () {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return [...new Set(arrA.filter((n) => arrB.includes(n)))];
    else return "arrA hoặc arrB không phải mảng";
  })();
  console.log(result);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Hoặc có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();

  console.log("result", result);
  ```

  ***

- [x] Bài 3

  Bài làm tốt\*

  Bài làm chỉ đang kiểm tra các trường hợp `number, string, boolean`. Như vậy nếu như cần phân biệt các kiểu dữ liệu khác thì sẽ không đạt kết quả như mong muốn.

  Có thể tham khảo một cách khác lấy thẳng type làm value:

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      return arr.flat(Infinity).reduce((acc, item) => {
        const type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, {});
    } else return "không phải mảng.";
  })(arr);

  console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm rất tốt \*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần chú ý kiểm tra các trường hợp có thể xảy ra ở bài 1 và có thể sử dụng một số phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Đỗ Ngọc Tiến](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-20)

- [x] Bài 1

  Bài làm tốt \*

  Cả 3 cách đều chưa check trường hợp trùng nhau.

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [1, 3, 2, 5, 3, 6, 1];
  ```

  Có thể tham khảo cách làm sau đây:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  /* Trả về 1 mảng, trong đó có các phần tử trong A và B */
  var result = (function () {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return [...new Set(arrA.filter((n) => arrB.includes(n)))];
    else return "arrA hoặc arrB không phải mảng";
  })();
  console.log(result);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Hoặc có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();

  console.log("result", result);
  ```

  ***

- [x] Bài 3

  Bài làm tốt\*

  Bài làm chỉ đang kiểm tra các trường hợp `number, string, boolean`. Như vậy nếu như cần phân biệt các kiểu dữ liệu khác thì sẽ không đạt kết quả như mong muốn.

  Có thể tham khảo một cách khác lấy thẳng type làm value:

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      return arr.flat(Infinity).reduce((acc, item) => {
        const type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, {});
    } else return "không phải mảng.";
  })(arr);

  console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm tốt rất \*

  Chú ý cần chỉnh chu hơn về giao diện ở bài này nên thêm css cho đẹp hơn.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và cần xử lý giao diện chỉn chu hơn.

---

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day20)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [1, 3, 2, 5, 3, 6, 1];
  ```

  Có thể tham khảo cách làm sau đây:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  /* Trả về 1 mảng, trong đó có các phần tử trong A và B */
  var result = (function () {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return [...new Set(arrA.filter((n) => arrB.includes(n)))];
    else return "arrA hoặc arrB không phải mảng";
  })();
  console.log(result);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*.

  Chú ý cách đặt tên funtion nên rõ ràng, tường minh thuận lợi cho việc đọc code và phát triển code một cách dễ dàng và dễ hiểu hơn.

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Hoặc có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();

  console.log("result", result);
  ```

  ***

- [x] Bài 3

  Bài làm rất tốt\*

  ***

- [x] Bài 4

  Bài làm rất tốt. \*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Đỗ Gia Bảo](https://github.com/Dogiaba/F8-Fe-K3/blob/main/Javascript/Day20/Lesson1/ex01.js)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [1, 3, 2, 5, 3, 6, 1];
  ```

  Có thể sửa lại như sau:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  /* Trả về 1 mảng, trong đó có các phần tử trong A và B */
  var result = (function () {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return [...new Set(arrA.filter((n) => arrB.includes(n)))];
    else return "arrA hoặc arrB không phải mảng";
  })();
  console.log(result);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();

  console.log("result", result);
  ```

  ***

- [x] Bài 3

  Bài làm rất tốt\*

  Tuy nhiên khi `log` ra các mảng sau khi lọc theo kiểu dữ liệu nên `log` tất cả các mảng thu được vì nếu muốn tách các kiểu dữ liệu khác `number, string, boolean` thì sẽ không thu được kết quả vì hiện chỉ `log` ra 3 phần tử đầu tiên của mảng `newArr`.

  ***

- [x] Bài 4

  Bài làm rất tốt. \*

  **Chưa có link github pages**.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và chú ý các trường hợp có thể xảy ra ở bài 1 để hoàn thiện hơn.

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3/tree/main/javascript/Day_6)

**Trong file `main.js` hiện chỉ đang có bài làm của bài 4**

- [x] Bài 1

  _Chưa có ở link github._

  ***

- [x] Bài 2

  _Chưa có ở link github._

  ***

- [x] Bài 3

  _Chưa có ở link github._

  ***

- [x] Bài 4

  Bài làm rất tốt \*.

  Tuy nhiên, hiện tại bài làm đang css cho phần tử `item` thứ 2 sẽ có thứ tự đảo ngược so với các phần tử khác. Nhưng nếu như phát triển thêm nhiều phần tử nữa thì việc fix cứng phần tử thứ 2 như vậy sẽ không đảm bảo yêu cầu xen kẽ như đề bài.

  Giải pháp: Có thể chọn các phần tử `item` ở vị trí lẻ sẽ đảo ngược thứ tự hoặc có thể xử lý việc này ở file `js` bằng cách kiểm tra `index` của các phần tử có `index % 2 !== 0` thì sẽ thực hiện logic nào đó để sắp xếp thứ tự đúng với yêu cầu đề bài.

  ***

- [x] Đánh giá chung bài tập về nhà: Cần xem lại bài làm đã đẩy lên github hiện chỉ có bài 4.

## [Nguyễn Khắc Tú](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/javascript/Day_20)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [1, 3, 2, 5, 3, 6, 1];
  ```

  Có thể sửa lại như sau:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  /* Trả về 1 mảng, trong đó có các phần tử trong A và B */
  var result = (function () {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return [...new Set(arrA.filter((n) => arrB.includes(n)))];
    else return "arrA hoặc arrB không phải mảng";
  })();
  console.log(result);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();

  console.log("result", result);
  ```

  ***

- [x] Bài 3

  Bài làm tốt\*

  Việc khai báo như vậy quá thủ công. Vì thế các trường hợp khác check đều không tốt.

  Có thể tham khảo một cách khác lấy thẳng type làm value

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      return arr.flat(Infinity).reduce((acc, item) => {
        const type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, {});
    } else return "không phải mảng.";
  })(arr);

  console.log("result", result);
  ```

  ***

- [x] Bài 4

  **Chưa có link github pages**.

  Bài làm rất tốt. \*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và cần có link github pages với các bài render ra giao diện để thuận tiện cho việc Review bài.

## [Duy](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_20)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [1, 3, 2, 5, 3, 6, 1];
  ```

  Có thể sửa lại như sau:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];

  var result = arrA.reduce(function (prev, current) {
    if (arrB.includes(current) && !prev.includes(current)) prev.push(current);
    return prev;
  }, []);

  console.log(result);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Hoặc có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();

  console.log("result", result);
  ```

  ***

- [x] Bài 3

  Bài làm rất tốt\*

  Tuy nhiên cần lưu ý khi đưa dữ liệu vào Template Literals thì sẽ được ép kiểu sang chuỗi. Như vậy hiện tại kết quả của bài làm đang hiện ra là: `Kết quả [a,b,1,2,true,false]`. Điều này làm cho nó không đúng với yêu cầu đề bài dù logic thực hiện khá tốt.

  ***

- [x] Bài 4

  Bài làm rất tốt\*.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---
