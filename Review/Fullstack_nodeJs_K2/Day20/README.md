## [Nguyễn Thị Hồng Hà](https://ha752002.github.io/f8-fullstack-k2/)

**Sớm nhất**

- [x] Bài 1:

  Bài làm tốt.

  Việc sử dụng cả 2 phương thức `map` và `filter` là không cần thiết, có thể sử dụng phương thức `filter` đã có thể giải quyết bài toàn này.

  ```js
  var newArr = arrA.filter(function (arrItem) {
    return arrB.includes(arrItem);
  });
  ```

  Tuy nhiên việc lọc phần tử `undefined` ở trong mảng kết quả `newArray` cũng không cần thiết vì đề bài không yêu cầu lọc giá trị `undefined`, nếu như cả 2 mảng đều có phần tử có giá trị là `undefined` thì vẫn có thể lấy được.

  Ngoài ra, bài làm chưa tính được trường hợp có nhiều phần tử giống nhau thì chỉ lấy 1 phần tử để cho vào mảng kết quả.

  Hiện tại, bài làm sẽ có kết quả nếu đầu vào như sau:

  ```js
  var arrA = [1, 4, 3, 2, 2, 2];
  var arrB = [5, 2, 6, 7, 1];
  //Output: [1, 2, 2, 2]
  ```

  Và cũng cần phải kiểm tra điều kiện đầu vào phải là mảng và nếu như không có phần tử nào giống nhau giữa 2 mảng thì nên thông báo cho người dùng biết một cách hợp lý.

  Có thể tham khảo cách làm sau đây để hoàn thiện hơn:

  ```js
  if (Array.isArray(arrA) && Array.isArray(arrB)) {
    var result = arrA.reduce((prev, current) => {
      if (arrB.includes(current) && !prev.includes(current)) {
        prev.push(current);
      }
      return prev;
    }, []);

    if (result.length === 0) {
      console.log(`Hai mảng đã cho không có phần tử nào giống nhau`);
    } else {
      console.log(`Các phần tử giống nhau của 2 mảng là:`, result);
    }
  } else {
    console.log(`Vui lòng nhập lại mảng.`);
  }
  ```

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while để chương trình chạy tốt hơn.

  Hoặc có thể tham khảo phương thức flat sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị Infinity.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Bài 4:

  Bài làm rất tốt. \*

  Tuy nhiên, ở giao diện, item ở giữa chưa được xử lý `margin-left: 20px` nên nhìn sẽ hơi lệch so với các item khác, do nó đang được css chung cho các item khi chưa đổi chỗ. Cần xử lý sau khi đổi chỗ sẽ hoàn thiện hơn.

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần lưu ý về bài 3 và chỉnh chu hơn trong việc xây dựng giao diện ở bài 4.

---

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/tree/master/Day20)

- [x] Bài 1:

  Bài làm tốt.

  Tuy nhiên bài làm chưa tính được trường hợp có nhiều phần tử giống nhau thì chỉ lấy 1 phần tử để cho vào mảng kết quả.

  Hiện tại, bài làm sẽ có kết quả nếu đầu vào như sau:

  ```js
  var arrA = [1, 4, 3, 2, 2, 2];
  var arrB = [5, 2, 6, 7, 1];
  //Output: [1, 2, 2, 2]
  ```

  Và cũng cần phải kiểm tra điều kiện đầu vào phải là mảng và nếu như không có phần tử nào giống nhau giữa 2 mảng thì nên thông báo cho người dùng biết một cách hợp lý.

  Có thể tham khảo cách làm sau đây để hoàn thiện hơn:

  ```js
  if (Array.isArray(arrA) && Array.isArray(arrB)) {
    var result = arrA.reduce((prev, current) => {
      if (arrB.includes(current) && !prev.includes(current)) {
        prev.push(current);
      }
      return prev;
    }, []);

    if (result.length === 0) {
      console.log(`Hai mảng đã cho không có phần tử nào giống nhau`);
    } else {
      console.log(`Các phần tử giống nhau của 2 mảng là:`, result);
    }
  } else {
    console.log(`Vui lòng nhập lại mảng.`);
  }
  ```

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while để chương trình chạy tốt hơn.

  Hoặc có thể tham khảo phương thức flat sẽ trả về một mảng mới đã được làm phẳng.

  Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị Infinity.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

---

- [x] Bài 3:

  Bài làm tốt. \*

  Tuy nhiên việc check từng kiểu dữ liệu rồi đẩy vào các mảng riêng như vậy hơi thủ công, và ở trong bài làm chỉ đang kiểm tra 3 kiểu dữ liệu `string`, `boolean`, `number`.

  Vậy nếu cần xử lý nhiều kiểu dữ liệu khác như `object`, `array`, `function`,... thì cần check từng trường hợp.

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

---

- [x] Bài 4:

  Bài làm rất tốt. \*

  Tuy nhiên ở phía giao diện, cần xem lại kích thước khối `container` vì hiện tại phần `content` đang bị tràn ra ngoài kích thước khối `container`.

---

- [x] Đánh giá: Bài làm tốt, cần lưu ý một số trường hợp đặc biệt có thể xảy ra trong mỗi bài toán và cần chỉnh chu hơn khi xây dựng giao diện.

---

## [Duy Hiếu Nguyễn](https://github.com/HieuBoss/F8-fullstack-k2/tree/main/javascript/lesson6)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Tuy nhiên, đề bài yêu cầu Output nhận được là một mảng chứa các phần tử giống nhau ví dụ như `[1, 2]` nhưng hiện tại bài làm có Output là `1, 2`.

  Cần xử lý tốt hơn để thu được Output giống với yêu cầu đề bài.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm chưa tốt.

  Bài làm chưa đạt đầu ra như yêu cầu đề bài đưa ra. Cần xem lại logic khi xử lý phân tách kiểu dữ liệu trong vòng lặp `for...in`.

  Nguyên nhân là do khi khởi tạo `result` đang gán `result = []` nên js sẽ không hiểu `result[type]`. Vì vậy cách khắc phục là nên gán `result = {}` sẽ được đầu ra như mong muốn.

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

---

- [x] Bài 4:

  Bài làm rất tốt. \*

  Tuy nhiên, ở giao diện, item ở giữa chưa được xử lý `margin: 20px` nên nhìn sẽ hơi lệch so với lề trái, do nó đang được css chung cho các item khi chưa đổi chỗ. Cần xử lý sau khi đổi chỗ sẽ hoàn thiện hơn.

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần lưu ý về bài 3 và chỉnh chu hơn trong việc xây dựng giao diện ở bài 4.

---

## [Bùi Quang Trưởng](https://okazakitruong.github.io/BQTruong-F8-K2-Offline/Day20)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Với các biến không có sự thay đổi, nên sử dụng const để code được chặt chẽ hơn.

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

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while để luyện tập tốt hơn.

  Tuy nhiên hàm `flat()` nhận 1 tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.

  Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị Infinity.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

---

- [x] Bài 3:

  Bài làm tốt.

  Bài làm chưa đúng đầu ra như yêu cầu đề bài đưa ra.

  Ở bài làm, đang hiện key trong array khác với key của đề bài mẫu.

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

---

- [x] Bài 4:

  Bài làm tốt.

  Tuy nhiên việc cộng chuỗi thủ công rất khó cho việc sửa, nâng cấp. với dấu backtick **\`\`** có thể viết với nhiều dòng.

  Thay vì `if/else` thủ công, có thể dựa vào index để đặt `classname` tên `reverse` và style bên css

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần chú ý đến bài toán nâng cấp, bảo trì về sau.

---

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_20)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while bài làm chạy tốt hơn.

  Ngoài ra, nếu muốn làm phẳng mảng, có thể sử dụng phương thức `flat`, nếu muốn đến cấp độ tối đa nên truyền vào giá trị Infinity.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

---

- [x] Bài 3:

  Bài làm rất tốt\*

  Tuy nhiên cần kiểm tra `arr` truyền vào có phải mảng hay không.

  Tên hàm nên đặt theo quy tắc camelCase để dễ hiểu hơn và phân biệt rõ với `function constructor`

---

- [x] Bài 4:

  Bài làm rất tốt.

  Tên biến nên đặt theo quy tắc camelCase để phân biệt rõ với `function constructor`

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần chú ý đến cách đặt tên biến để bài làm được tốt hơn, dễ phân biệt, sửa lỗi hơn.

---

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-20)

- [x] Bài 1:

  Bài làm tốt. \*

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

  Vì tìm giao giữa 2 mảng, không cần thiết phải push các phần tử đã có vào.

  Nên tách các đoạn code thành hàm để tiện cho việc tái sử dụng.

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

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while bài làm chạy tốt hơn.

  Ngoài ra, nếu muốn làm phẳng mảng, có thể sử dụng phương thức `flat`, nếu muốn đến cấp độ tối đa nên truyền vào giá trị Infinity.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

---

- [x] Bài 3:

  Bài làm rất tốt\*

  Cần kiểm tra `arr` truyền vào có phải mảng hay không.

  Việc rẽ nhánh như vậy quá thủ công.

  Thay vào đó có thể tham khảo cách làm sau đây:

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

---

- [x] Bài 4:

  Bài làm tốt

  Dù 2 phần HTML đều tựa giống nhau, việc tách ra như vậy quá thủ công và không cần thiết,

  Thay vào đó có thể sử dụng className và thay đổi giao diện bên CSS.

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần chú ý đến cách làm bài tối ưu, không cần thiết phải copy code để tránh việc bỏ qua các trường hợp đã biết.

## [Đỗ Tiến Khiêm](https://github.com/tienkhiemkahp/f8/tree/main/homework/Day-20)

- [x] Bài 1:

  Bài làm tốt. \*

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

  Vì tìm giao giữa 2 mảng, không cần thiết phải push các phần tử đã có vào.

  Nên tách các đoạn code thành hàm để tiện cho việc tái sử dụng.

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

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Chú ý format code.

  Có thể sử dụng vòng lặp while bài làm chạy tốt hơn.

  Ngoài ra, nếu muốn làm phẳng mảng, có thể sử dụng phương thức `flat`, nếu muốn đến cấp độ tối đa nên truyền vào giá trị Infinity.

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

---

- [x] Bài 3:

  Bài làm rất tốt\*

  Chú ý format code.

  Cần kiểm tra `arr` truyền vào có phải mảng hay không.

  Việc rẽ nhánh như vậy quá thủ công.

  Thay vào đó có thể tham khảo cách làm sau đây:

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

---

- [x] Bài 4:

  Bài làm tốt

  Chú ý format code.

  Dù 2 phần HTML đều tựa giống nhau, việc tách ra như vậy quá thủ công và không cần thiết,

  Thay vào đó có thể sử dụng className và thay đổi giao diện bên CSS.

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần chú ý đến cách làm bài tối ưu, không cần thiết phải copy code để tránh việc bỏ qua các trường hợp đã biết.

  **Chú ý format code.**

---

## [Tiến Đạt - K2](https://github.com/tienkhiemkahp/f8/tree/main/homework/Day-20)

- [x] Bài 1:

  Bài làm tốt. \*

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

  Vì tìm giao giữa 2 mảng, không cần thiết phải push các phần tử đã có vào.

  Nên tách các đoạn code thành hàm để tiện cho việc tái sử dụng.

  Với các biến là hằng số không đổi, không nên sử dụng let, nên sử dụng const để có sự ràng buộc và code chặt chẽ hơn.

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

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while bài làm chạy tốt hơn.

---

- [x] Bài 3:

  Bài làm rất tốt\*

  Cần kiểm tra `arr` truyền vào có phải mảng hay không.

  Với bài code này, các key không đúng yêu cầu với bản mẫu, các key không phải là tên type. Có thể thêm 1 vòng lặp để thay đổi tên key.

  Thay vào đó có thể tham khảo cách làm sau đây:

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

---

- [x] Bài 4:

  Bài làm tốt

  Dù 2 phần HTML đều tựa giống nhau, việc tách ra như vậy quá thủ công và không cần thiết,

  Thay vào đó có thể sử dụng className và thay đổi giao diện bên CSS.

  Có thể sử dụng map, join để code được tường minh, ngắn gọn hơn.

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán, cần chú ý đến cách làm bài tối ưu, không cần thiết phải copy code để tránh việc bỏ qua các trường hợp đã biết.

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day20)

- [x] Bài 1:

  Bài làm tốt. \*

  Vì bài tập yêu cầu 2 mảng, cần kiểm tra rõ xem có phải 2 biến `arrA`, `arrB` là mảng không.

  Vì tìm giao giữa 2 mảng, không cần thiết phải push các phần tử đã có vào.

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

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Có thể sử dụng vòng lặp while bài làm chạy tốt hơn.

---

- [x] Bài 3:

  Bài làm rất tốt\*

  Cần kiểm tra `arr` truyền vào có phải mảng hay không.

  Với bài code này, các key không đúng yêu cầu với bản mẫu, các key không phải là tên type. Có thể thêm 1 vòng lặp để thay đổi tên key.

  Thay vào đó có thể tham khảo cách làm sau đây:

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      var array = arr.flat(1).reduce((acc, item) => {
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

---

- [x] Bài 4:

  Bài làm rất tốt\*

---

- [x] Đánh giá: Bài làm tốt, cần chú ý các trường hợp đặc biệt có thể xảy ra trong mỗi bài toán.

---
