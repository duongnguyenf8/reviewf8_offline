# Dương review bài tập về nhà buổ 20 - Lớp K3

## [NTiến Đạt](https://github.com/Ntiendat-2k3/F8-js-BTVN/tree/main/BTVN/Buoi20)

- [x] [Bài 1]

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm chưa tốt.

  Mới chỉ sử dụng vị trí của các phần tử để push vào mảng mới, nếu lệch vị trí thì bài làm sai.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/blob/main/Day_20)

- [x] [Bài 1]

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm rất tốt\*

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-20-JS)

- [x] [Bài 1]

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên với reduce. Có thể viết ngắn gọn hơn.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm tốt\*

  Thay vì render ra một HTML mới, các phần giao diện nên được xử lý bằng CSS, chỉ cần add một class cho phần tử cần thay đổi.

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên với reduce. Có thể viết ngắn gọn hơn.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm tốt\*

  Thay vì render ra một HTML mới, các phần giao diện nên được xử lý bằng CSS, chỉ cần add một class cho phần tử cần thay đổi.

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

  Bài làm code rất rối, có thể tách thành các hàm cần thiết, sử dụng khi cần. Không nên viết chung thành 1.

---

## [Lê Quốc Khánh](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/JS-Day-20)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm chưa tốt.

  Mới chỉ sử dụng vị trí của các phần tử để push vào mảng mới, nếu lệch vị trí thì bài làm sai.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_20)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm rất tốt\*

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Trần Xuân Bách](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day20)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

- [x] [Bài 3]

  Bài làm chưa tốt.

  Bài làm quá thủ công khi đang phải viết từng type, chỉ đúng với các type đã được khai báo.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm rất tốt\*

  Nên sử dụng className và css để style để đúng mục đích từng file và thuận tiện cho việc chỉnh xửa.

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY20)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm rất tốt\*

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý các trường hợp cần kiểm tra trước để bài làm chặt chẽ hơn

---

## [Hữu Hưng](https://github.com/HuuHungg/f8-javascript/blob/main/Day5/ex01.js)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Cần sử dụng các phương thức đã học để luyện tập tốt hơn.

- [x] [Bài 3]

  Bài làm chưa tốt.

  Bài làm quá thủ công khi đang phải viết từng type, chỉ đúng với các type đã được khai báo.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Nguyễn Đức](https://github.com/Nguyenduc2108/f8-fullstack-k3/tree/main/Homework_session_20)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng while để bài làm chạy tốt hơn.

- [x] [Bài 3]

  Bài làm chưa tốt.

  Mới chỉ sử dụng vị trí của các phần tử để push vào mảng mới, nếu lệch vị trí thì bài làm sai.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm rất tốt\*

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

---

## [Minh Pham](https://github.com/Minh0314/F8-K3/tree/main/Day21)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Có thể sử dụng các hàm đã học để luyện tập tốt hơn.

- [x] [Bài 3]

  Bài làm chưa tốt.

  Các key chưa đúng với yêu cầu đề bài.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  **Chưa làm**

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần tối ưu hơn và kiểm tra trước các case đặc biệt, có sự thay đổi.

## [Đỗ Minh Đức](https://github.com/a37547-duc/F8/tree/main/BaiTapBuoi20)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

- [x] [Bài 3]

  **Chưa làm**.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  **Chưa làm**

- Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần luyện tập nhiều hơn, cố gắng làm tốt nhất có thể.

## [Nguyễn Bá Đông](https://github.com/Dong205/F8-FullstackOffline-K3/blob/main/Day20)

- [x] [Bài 1]

  Bài làm tốt

  Nên tách thành hàm để thuận tiện cho việc sửa chữa, tái sử dụng nhiều nơi.

  Vì lọc lấy các phần tử giao nhau, cần lọc các phần tử trùng.

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

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

- [x] [Bài 2]

  Bài làm rất tốt\*

  Cần sử dụng các hàm đã học, phương thức đã học để luyện tập tốt hơn

- [x] [Bài 3]

  Bài làm không tốt

  Bài chỉ đúng ở trường hợp 2 mảng có type đối xứng. Nếu thay đổi thì bài làm sai.

  Có thể tham khảo cách làm sau đây:

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

- [x] [Bài 4]

  Bài làm rất tốt \*

- Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên chưa kiểm tra các trường hợp cần thiết, cần kiểm tra, handle các trường hợp có thể để bài làm chặt chẽ và tốt hơn.

---
