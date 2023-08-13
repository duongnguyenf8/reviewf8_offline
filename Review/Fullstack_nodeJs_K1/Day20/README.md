# [Dương](https://duong.vercel.app) review bài 20 lớp K1 Fullstack

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day20)

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

  Có thể làm bằng filter sẽ dễ dàng kiểm soát và dễ hiểu hơn:

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

  Bài làm rất tốt \*

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  Vì đây là **một** bài viết, thay vì sử dụng className là `products_items` thì có thể sử dụng `post_item`.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day20)

- [x] Bài 1

  Bài làm rất tốt \*

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

  Việc khai báo như vậy quá thủ công.

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

  Bài làm rất tốt \*

  Dữ liệu tiếng anh là **Data**, nhiều dữ liệu thì là Lots of data. Vì vậy, Data**s** là sai chính tả.

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [nguyen hung anh](https://github.com/realguy010895/hunganh-f8-k1/blob/main/btvn-buoi20.js)

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
  var diff = arrA.reduce(function (prev, current) {
    return (
      arrB.includes(current) && !prev.includes(current) && prev.push(current),
      prev
    );
  }, []);

  console.log(diff);
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Trước khi flat, phải chắc chắc đàu vào là mảng để tránh bị lỗi.

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

  **Chưa làm**

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

  Cần chú ý cấu trúc lại folder, làm lại bài 4.

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day20)

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

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

## [Mai Việt Hoàng](https://github.com/Viethoang-Mai/MVH-fullstack-nodejs-F8-01/blob/main/Bai_tap/Bai_tap_buoi_20/js/script.js)

- [x] Bài 1

  Bài làm tốt \*

  **Bài tập không yêu cầu `sort()`**

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
  var diff = arrA.reduce(function (prev, current) {
    return (
      arrB.includes(current) && !prev.includes(current) && prev.push(current),
      prev
    );
  }, []);

  console.log(diff);
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

  Vì đây là một **bài viết**, thay vì sử dụng className là `item` thì có thể sử dụng `post_item`.

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01/blob/main/Buoi20/js/script.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Bài tập không yêu cầu tìm khác nhau**

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  ```

  Kết quả sẽ là:

  ```shell
  [ 4, 8 ]
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

  Bài làm rất tốt\*

  ***

- [x] Bài 4

  Vì đây là một **bài viết**, thay vì sử dụng className là `item` thì có thể sử dụng `post_item`.

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

## [Hoài Nam Đỗ](https://github.com/oaiHmaN25/btvn/blob/main/day20)

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

  **Chưa làm**

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

  Cần chú ý format code bài 1, làm lại bài 4.

---

## [Minh Quang](https://github.com/taminhquang13/F8_Fullstack/tree/main/BT20)

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

  Bài làm rất tốt\*

  Cần chú ý đặt lại tên className hợp lý hơn.

  Vì đây là một **bài viết**, thay vì sử dụng className là `container` thì có thể sử dụng `post_item`.

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

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

  Có thể làm bằng filter sẽ dễ dàng kiểm soát và dễ hiểu hơn:

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

  Bài làm rất tốt \*

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  Vì đây là **một** bài viết, thay vì sử dụng className là `item` thì có thể sử dụng `post_item`.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Trung Le](https://github.com/Trungdeptraii/09-08-2023-Le-Van_Trung-Day20.git)

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

  Có thể làm bằng filter sẽ dễ dàng kiểm soát và dễ hiểu hơn:

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

  Đặt tên biến quá ẩu, không nên đặt như vậy sẽ gây khó hiểu với tất cả người đọc khác.

  Đang hiểu sai ý đề bài, bài làm chỉ đúng khi thứ tự các phần tử đúng như bài tập.

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

  Bài làm tốt

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  Chưa thiết kế được array.

  Việc đổ dữ liệu với `${arr[index][2]}`, `"${arr[index][1]}`, `${arr[index][0] + (+index + 1)}` quá khó hiểu, chỉ đúng ở trường hợp này. Với cấu trúc mảng thay đổi, toàn bộ bài đều sẽ sai.

  Nên thiết kế một mảng lồng object với các key, value tường minh hơn, sử dụng map để lặp.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý các biến số, sai số khi dữ liệu thay đổi, bài tập hiện chỉ đúng với 1 trường hợp.

---

## [Phan Trung Hiếu](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_20)

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

  Có thể làm bằng filter sẽ dễ dàng kiểm soát và dễ hiểu hơn:

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

  Hoặc sử dùng reduce như này:

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

  Bài làm tốt\*

  Bài làm chỉ đúng ở duy nhất 1 trường hợp khi tất cả các type được sắp xếp giống nhau ở index.

  Nếu như đổi chỗ các giá trị, bài làm sai hoàn toàn.

  ```js
  var arr = [
    [1, "a", true],
    ["b", 2, false],
  ];
  ```

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

  **CHƯA LÀM**

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

  Cần chú ý làm bài 4, chú ý đến các trường hợp khác nhau, trường hợp đặc biệt, với bài 3, chỉ đúng ở duy nhất 1 trường hợp.

---
