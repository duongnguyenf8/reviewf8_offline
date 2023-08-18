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
