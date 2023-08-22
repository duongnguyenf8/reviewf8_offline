## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day19)

**Sớm nhất**

- [x] Bài 1

  Bài làm tốt \*.

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi log ra kết quả.

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

  Bài làm tốt \*

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi `log` ra kết quả.

  Góp ý: Nên đặt tên hàm bằng Tiếng Anh.

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

  Bài làm tốt\*.

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi `log` ra kết quả.

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần lưu ý khi sử dụng nội suy để thông báo ra kết quả và có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.

---

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-19/js)

- [x] Bài 1

  Bài làm tốt \*

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi `log` ra kết quả.

  Và cần phải kiểm tra điều kiện đầu vào phải là 1 mảng thì mới thực hiện logic tìm phần tử giao nhau.

  Vì khi đưa vào biến nội suy thì sẽ được ép về chuỗi nên khi không có phần tử nào giao nhau thì hiện tại đang không hiển thị ra mảng trống. Cần xử lý tốt hơn các trường hợp này.

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

  Tuy nhiên cần kiểm tra điều kiện đầu vào phải là một mảng rồi mới thực hiện logic thì sẽ hợp lý hơn.

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi `log` ra kết quả.

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

  Việc khai báo như vậy hơi thủ công.

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

  Cách làm 2 không cho ra kết quả như yêu cầu đề bài.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chú ý định dạng khi đưa vào biến nội suy và cần xét các trường hợp đặc biệt có thể xảy ra ở đầu vào để bài làm hoàn chỉnh hơn.

---

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_5/js/main.js)

- [x] Bài 1

  Bài làm tốt \*

  Cần phải kiểm tra nếu như đầu vào không phải là mảng thì bài làm sẽ chặt chẽ hơn.

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

  Bài làm tốt\*.

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

  Việc khai báo như vậy hơi thủ công.

  Có thể tham khảo một cách khác lấy thẳng type làm value.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần xét các trường hợp đặc biệt có thể xảy ra để bài làm hoàn thiện hơn.

---

## [Sơn Trần](https://github.com/sontran2003/f8-fe-k3/tree/main/day19)

**Bài làm giống hệt bài của Nguyễn Đức Hải**

---

## [Nguyễn Văn Hải](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/javascript/day-19)

- [x] Bài 1

  Bài làm tốt \*

  Cần phải kiểm tra điều kiện đầu vào phải là 1 mảng thì mới thực hiện logic tìm phần tử giao nhau.

  Vì khi đưa vào biến nội suy thì sẽ được ép về chuỗi nên khi không có phần tử nào giao nhau thì hiện tại đang không hiển thị ra mảng trống. Cần xử lý tốt hơn các trường hợp này.

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

  Tuy nhiên cần kiểm tra điều kiện đầu vào phải là một mảng rồi mới thực hiện logic thì sẽ hợp lý hơn.

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

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

  Việc khai báo như vậy hơi thủ công.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần lưu ý một số trường hợp đặc biệt có thể xảy ra để hoàn thiện bài làm hơn.

---

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main/Day-19)

- [x] Bài 1

  Bài làm tốt \*

  Cần phải kiểm tra điều kiện đầu vào phải là 1 mảng thì mới thực hiện logic tìm phần tử giao nhau.

  Vì khi đưa vào biến nội suy thì sẽ được ép về chuỗi nên khi không có phần tử nào giao nhau thì hiện tại đang không hiển thị ra mảng trống. Cần xử lý tốt hơn các trường hợp này.

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

  Bài làm tốt \*

  Tuy nhiên cần kiểm tra điều kiện đầu vào phải là một mảng rồi mới thực hiện logic thì sẽ hợp lý hơn.

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Nếu sử dụng phương thức `flat` thì tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

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

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

  Việc khai báo như vậy hơi thủ công.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần lưu ý một số trường hợp đặc biệt có thể xảy ra để hoàn thiện bài làm hơn.

---

## [Nguyễn Khắc Tú](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/javascript/Day_19)

- [x] Bài 1

  Bài làm tốt \*

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi `log` ra kết quả.

  Cần phải kiểm tra điều kiện đầu vào phải là 1 mảng thì mới thực hiện logic tìm phần tử giao nhau.

  Vì khi đưa vào biến nội suy thì sẽ được ép về chuỗi nên khi không có phần tử nào giao nhau thì hiện tại đang không hiển thị ra mảng trống. Cần xử lý tốt hơn các trường hợp này.

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

  Tuy nhiên cần kiểm tra điều kiện đầu vào phải là một mảng rồi mới thực hiện logic thì sẽ hợp lý hơn.

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Có thể sử dụng phương thức `flat` thì tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

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

  Bài làm tốt\*.

  Lưu ý, nếu đưa vào biến nội suy thì sẽ được ép kiểu về chuỗi, vì vậy khi đó sẽ không đúng định dạng là mảng nữa. Cần xử lý về định dạng tốt hơn khi `log` ra kết quả.

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần lưu ý một số trường hợp đặc biệt có thể xảy ra để hoàn thiện bài làm hơn.

---

## [Thuy Nguyen](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3/Day19_JS)

- [x] Bài 1

  Bài làm chưa tốt.

  Bài làm đang hiểu sai yêu cầu đề bài, yêu cầu đề bài là lấy ra các phần tử đều có ở trong 2 mảng A và B chứ không phải lấy ra các phần tử khác nhau.

  Có thể tham khảo cách làm sau đây:

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

  Tuy nhiên cần kiểm tra điều kiện đầu vào phải là một mảng rồi mới thực hiện logic thì sẽ hợp lý hơn.

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Có thể sửa lại như sau:

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

  Bài làm tốt\*.

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần lưu ý một số trường hợp đặc biệt có thể xảy ra để hoàn thiện bài làm hơn.

---

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day19)

- [x] Bài 1

  Bài làm tốt \*

  Cần phải kiểm tra điều kiện đầu vào phải là 1 mảng thì mới thực hiện logic tìm phần tử giao nhau.

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

  Có thể làm bằng filter như sau để dễ dàng kiểm soát và dễ hiểu hơn:

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

  Tuy nhiên cần kiểm tra điều kiện đầu vào phải là một mảng rồi mới thực hiện logic thì sẽ hợp lý hơn.

  Có thể sử dụng vòng lặp `while` để chương trình chạy tốt hơn.

  Có thể sử dụng phương thức `flat` thì tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

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

  Bài làm tốt\*.

  Bài làm hiện chỉ đang check 3 trường hợp là `string`, `number`, `boolean` nhưng nếu đầu vào có `array` và `object` thì sẽ bị push chung vào 1 mảng. Điều này là không hợp lý so với yêu cầu đề bài và một số trường hợp khác như `undefined`, `function`,...

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần lưu ý một số trường hợp đặc biệt có thể xảy ra để hoàn thiện bài làm hơn.
