# Quân review bài tập về nhà buổi 20 lớp K4

## [Mạnh Huy](ttps://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_19)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
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
      var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, []);
      var result = [];
      for (var index in array) result.push(array[index]);
      return result;
    } else return "không phải mảng.";
  })(arr);
  console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm rất tốt \*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần chú ý kiểm tra các trường hợp có thể xảy ra ở bài 1 và có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day20)

- [x] Bài 1

  Bài làm tốt \*

  Với giao giữa 2 mảng, không nên có các phần tử trùng nhau.

  Khi có cấu trúc array như này:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
  ```

  ***

- [x] Bài 2

  Bài làm rất tốt \*

  Cả 2 cách đều sử dụng phương thức `reduce` để giải quyết nên không có sự khác biệt về 2 cách đang sử dụng.

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

  Bài làm chỉ đang kiểm tra các trường hợp `number, string, boolean, null`. Như vậy nếu như cần phân biệt các kiểu dữ liệu khác thì sẽ không đạt kết quả như mong muốn.

  Có thể tham khảo một cách khác lấy thẳng type làm value:

  ```js
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
    ];
    const result = (function (arr) {
    if (Array.isArray(arr)) {
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm tốt \*

  **Chưa có link github pages**

  Chú ý về việc format code.

  Giao diện chưa xen kẽ như bản mẫu, cần xử lý tốt hơn.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và cần xử lý giao diện chỉn chu hơn ở bài 4.

---

## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-20)

- [x] Bài 1

  Bài làm rất tốt \*.

  ***

- [x] Bài 2

  Bài làm rất tốt \*.

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

## [Hà Long Việt](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_20)

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
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
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

  ***

- [x] Bài 4

  Thuộc tính alt của một bài viết cần có ý nghĩa, có thể sử dụng heading của bài viết.

  Giao diện nên chỉn chu hơn.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và chú ý các trường hợp có thể xảy ra ở bài 1 để hoàn thiện hơn.

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4/blob/main/Day_19/js/script.js)

- [x] Bài 1

  Bài làm rất tốt \*

  ***

- [x] Bài 2

  Bài làm rất tốt \*.

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm rất tốt \*.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_20)

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
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
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

  Bài làm rất tốt\*.

  ***

- [x] Bài 4

  Bài làm rất tốt\*.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_20)

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm rất tốt\*.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Nguyễn Hưng Tuân](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-20/js)

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm rất tốt\*

  Cần chú ý đặt lại tên className hợp lý hơn.

  Vì đây là một **bài viết**, thay vì sử dụng className là `item` thì có thể sử dụng `post_item`.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Nguyễn Ngọc Hùng](https://github.com/Oladayne/f8-fullstack-k98/tree/main/buoi_20)

- [x] Bài 1

  Bài làm tốt \*

  Chú ý đặt tên biến nên tường minh và dễ hiểu hơn.

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
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
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

  Bài làm chưa tốt.

  Chú ý đặt tên hàm cần tuân theo quy tắc camelCase.

  Xử lý logic vòng lặp chưa tốt trong hàm `groupnew`:

  - Việc cho i chạy từ 0 đến độ dài của phần tử thứ nhất của `array` là không hợp lý vì nếu các phần tử sau của `array` có độ dài lớn hơn độ dài của phần tử thứ nhất thì sẽ không được lặp và thực hiện logic.

  - Bài làm chỉ đúng nếu fix cứng dữ liệu trong các mảng con theo thứ tự `string - number - boolean`. Cần xử lý tốt hơn để giải quyết bất kì trường hợp nào có thể xảy ra.

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và cần chú ý xử lý tốt hơn các trường hợp có thể xảy ra ở bài 3.

---

## [Nguyen Chi Nam](https://github.com/chinam197/bai20)

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
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
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

  Bài làm chưa tốt.

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  **Chưa làm**

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý đến các trường hợp có thể xảy ra ở bài 3 và nếu khó khăn trong việc làm bài tập cần đặt câu hỏi để được trợ giúp, và hoàn thiện bài tập hơn.

---

## [Dong Nguyen](dongnguyen318.github.io/Quydong/)

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
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
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

  **Không thể truy cập được link đến bài 3**

  ***

- [x] Bài 4

  **Chưa hoàn thành**

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

  Cần chú ý lại link dẫn đến bài 3 và cần hoàn thiện bài 4, nếu khó khăn trong việc làm bài tập cần đặt câu hỏi để được trợ giúp, và hoàn thiện bài tập hơn.

---

## [Hoang Tuan Kiet](ttps://github.com/suspiciously36/bt-b20)

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

  Bài làm chưa tốt.

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  **Chưa làm**

  ***

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

  Cần lưu ý bài 3 và hoàn thiện bài 4, nếu khó khăn trong việc làm bài tập cần đặt câu hỏi để được trợ giúp, và hoàn thiện bài tập hơn.

---

## [Lê Đình Hùng](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/Day_20)

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

  Bài làm chưa tốt.

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
        var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
    })(arr);
    console.log("result", result);
  ```

  ***

- [x] Bài 4

  Bài làm rất tốt \*.

  ***

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn và cần lưu ý bài 3 để hoàn thiện hơn.

---
