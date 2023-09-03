# Quân review bài tập về nhà buổi 22 Lớp FE-K3

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-22/js)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Chú ý tên của mảng đề bài cho là `categories` chứ không phải là `Arr`.

  Chưa kiểm tra đầu vào không phải array:

  ```javascript
  var categories = "dayKhongPhaiArray";
  function findChildren(categories, parentId = 0) {
    if (!Array.isArray(categories) || categories.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  console.log(findChildren(Arr));
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Tuy nhiên chỉ cần khởi tạo phương thức `reduce2()` một lần là có thể dùng được phương thức này ở bất cứ đâu trong file đã khởi tạo, nên không cần khởi tạo lần thứ 2 để dùng.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

---

## [Nguyễn Đình Khánh](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day22)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Output hiện tại của bài làm chưa đáp ứng với yêu cầu đề bài, cụ thể:

  - Khi xác định được đối tượng con thì khi push vào đối tương cha cần phải xóa đối tượng con ở ngoài. Hiện tại bài làm vẫn để các đối tượng con ở ngoài.

  - Với các đối tượng không có đối tượng con cần xóa `children` vì lúc này `children` là một mảng rỗng.

  Chưa kiểm tra đầu vào không phải array:

  ```javascript
  var inputArray = "dayKhongPhaiArray";
  function buildNestedStructure(array, parent = 0) {
    if (!Array.isArray(array) || array.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  var nestedStructure = buildNestedStructure(inputArray);
  console.log(JSON.stringify(nestedStructure, null, 2));
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt. \*

  Chú ý cách đặt tên, đề bài yêu cầu đặt tên phương thức mới là `reduce2`.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần đọc kỹ output ở bài 1 để tuân thủ theo yêu cầu đề bài từ đó hoàn thiện bài làm hơn.

---

## [thuy nguyen](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3/Day22_JS)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên có một số góp ý cho bài làm như sau:

  - Với các đối tượng không có đối tượng con cần xóa `children` vì lúc này `children` là một mảng rỗng để giống với output của đề bài đưa ra.

  - Chú ý cách đặt tên biến, nên đặt tên biến tường minh, có ý nghĩa, giúp cho việc đọc code dễ hiểu hơn. Hiện tại, bài làm có 3 biến có tên là `e`, `g`, `o`. Việc đặt tên như vậy gây khó khăn cho việc đọc hiểu code.

  Chưa kiểm tra đầu vào không phải array:

  ```javascript
  var data = "dayKhongPhaiArray";
  function convertToNestedArray(array, parent = 0) {
    if (!Array.isArray(array) || array.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  var nestedArr = convertToNestedArray(data);
  console.log(JSON.stringify(nestedArr, null, 2));
  ```

  ***

- [x] [Bài 2]

  Bài làm chưa tốt.

  Bài làm có vẻ chưa hiểu yêu cầu của đề bài. Hiện tại bài làm đang xây dựng một phương thức có tên là `reduce2` nhưng chỉ phục vụ cho việc tính tổng các phần tử trong mảng đã cho.

  Yêu cầu của đề bài là xây dựng một phương thức có tên là `reduce2` với các chức năng giống với phương thức `reduce()` trong mảng để áp dụng cho tất cả các trường hợp chứ không phải chỉ áp dụng cho một trường hợp riêng lẻ nào đó.

  Để làm được, cần hiểu rõ phương thức `reduce()` có các tham số nào và luồng hoạt động của phương thức này như thế nào. Từ đó, vận dụng các kiến thức được học để xây dựng phương thức `reduce2()` theo yêu cầu đề bài.

  Có thể tham khảo cách làm sau đây:

  ```javascript
  Array.prototype.reduce2 = function (callback, initialValue) {
    if (!this.length) {
      return `Invalid Input!`;
    }

    var result = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i]);
    }
    return result;
  };

  var arr = [1, 2, 3, 4];
  var result = arr.reduce2((pre, current) => {
    return pre + current;
  }, 0);

  console.log(result); //Output: 10
  ```

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần đọc kỹ output đề bài đưa ra để hoàn thiện bài 1 hơn, lưu ý về yêu cầu bài 2 tránh hiểu sai yêu cầu đề bài và cần hoàn thiện lại bài 2.

## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/blob/main/Day-22/main.js)

- [x] [Bài 1]

  Bài làm rất tốt\*.

  Tuy nhiên, Output của bài làm hiện tại chưa bỏ thuộc tính `parent` của các đối tượng như Output của đề bài. Cần sửa lại để hoàn thiện hơn.

  Chưa kiểm tra đầu vào không phải array:

  ```javascript
  var arr = "dayKhongPhaiArray";
  function handleNested(array, parent = 0) {
    if (!Array.isArray(array) || array.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  var nestedArr = handleNested(arr);
  console.log(JSON.stringify(nestedArr, null, 2));
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

---

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day22)

- [x] [Bài 1]

  Bài làm rất tốt\*.

  Cần chú ý về việc đặt tên function cần tuân theo quy tắc cameCase và cần tường minh và có ý nghĩa, hiện tại bài làm có tên function là `th` gây khó hiểu cho việc đọc code.

  Chưa kiểm tra đầu vào không phải array. Có thể tham khảo cách kiểm tra sau đây:

  ```javascript
  var arr = "dayKhongPhaiArray";
  function handleNested(array, parent = 0) {
    if (!Array.isArray(array) || array.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  var nestedArr = handleNested(arr);
  console.log(JSON.stringify(nestedArr, null, 2));
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần lưu ý việc đặt tên để hoàn thiện hơn.

---

## [Nguyễn Lệ Quyên](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day22-baitap)

- [x] [Bài 1]

  Bài làm chưa tốt

  Sai chính tả `length`.

  Hiện tại bài làm đang có output không đúng với yêu cầu đề bài.

  ```javascript
  for (let i = 0; i < arr_lenght; i++) {
    // 1 mang co' do dai` la` 3 vi` o tren co 3
    // 1. id: 11,
    // 2. name: "Chuyên mục 2.2.2",
    // 3. parent: 5,
    newArray[i] = [];
  }
  ```

  Ở đoạn code trên, nếu như theo comment đang ghi là mảng này có độ dài là 3 thì không chính xác vì `arr_length` ở trên khai báo là độ dài của array thì đang có độ dài là 11.

  Nếu như chưa hiểu yêu cầu bài làm, có thể **đặt câu hỏi hoặc liên hệ trợ giảng** để được trợ giúp hoàn thiện bài tập về nhà hơn.

  Có thể tham khảo các bài làm được nhận xét là `Bài làm rất tốt` để hiểu cách làm hơn.

  ***

- [x] [Bài 2]

  Bài làm chưa tốt.

  Vì bài làm đang gán mặc định `bienDem` có giá trị là 0 nên khi truyền vào giá trị khởi tạo là một số khác 0 thì nếu như theo đúng phương thức `reduce()` đã được học, lúc đó `bienDem` cần lấy giá trị khởi tạo đó. Nhưng bài làm chưa xử lý trường hợp này.

  Nên đặt tên biến bằng Tiếng Anh.

  Có thể tham khảo cách làm sau đây để hoàn thiện hơn:

  ```javascript
  Array.prototype.reduce2 = function (callback, initialValue) {
    if (!this.length) {
      return `Invalid Input!`;
    }

    var result = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i]);
    }
    return result;
  };

  var arr = [1, 2, 3, 4];
  var result = arr.reduce2((pre, current) => {
    return pre + current;
  }, 10);

  console.log(result); //Output: 20
  ```

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần đọc kỹ yêu cầu đề bài và chú ý output của đề bài đưa ra ở bài 1, ngoài ra cần chú ý hơn khi xây dựng phương thức `reduce2()` ở bài 2 để hoàn thiện hơn.

---

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_8/js/main.js)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Output của bài làm hiện tại không đúng với Output của đề bài đưa ra.

  Lý do là vì đặt trùng tên biến `children` nên khi thực hiện việc push vào mảng `children` thì lúc đó sẽ làm cho đầu ra không như mong muốn.

  Sửa lại:

  ```javascript
  function findChildren(parentId) {
    var children = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].parent === parentId) {
        var child = {
          id: arr[i].id,
          name: arr[i].name,
        };
        child.children = findChildren(arr[i].id);
        children.push(child);
      }
    }
    return children.length > 0 ? children : undefined;
  }
  ```

  Chưa kiểm tra đầu vào không phải array. Có thể tham khảo cách kiểm tra sau đây:

  ```javascript
  var arr = "dayKhongPhaiArray";
  function handleNested(array, parent = 0) {
    if (!Array.isArray(array) || array.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  var nestedArr = handleNested(arr);
  console.log(JSON.stringify(nestedArr, null, 2));
  ```

  ***

- [x] [Bài 2]

  Bài làm chưa tốt.

  Ở trong phương thức `reduce2()` trong bài làm đang có vấn đề trong việc khai báo 2 lần một biến `i` vì thế nên các biến i ở ngoài vòng lặp sẽ không được sử dụng. Làm cho logic không đúng và i luôn bắt đầu từ 1. Điều này làm cho khi có giá trị khởi tạo nó sẽ luôn bỏ qua phần tử đầu tiên của mảng, làm cho kết quả không đúng.

  Có thể tham khảo cách làm sau đây:

  ```javascript
  Array.prototype.reduce2 = function (callback, initialValue) {
    if (!this.length) {
      return `Invalid Input!`;
    }

    var result = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i]);
    }
    return result;
  };

  var arr = [1, 2, 3, 4];
  var result = arr.reduce2((pre, current) => {
    return pre + current;
  }, 10);

  console.log(result); //Output: 20
  ```

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý thêm vào yêu cầu đề bài, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

---

## [Đỗ Gia Bảo](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day22)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Nên kiểm tra `categories` là một mảng để chắc chắn sử dụng được phương thức `forEach()`

  ***

- [x] [Bài 2]

  Bài làm chưa tốt.

  Ở trong phương thức `reduce2()` trong bài làm đang có vấn đề trong việc khai báo 2 lần một biến `i` vì thế nên các biến i ở ngoài vòng lặp sẽ không được sử dụng. Làm cho logic không đúng và i luôn bắt đầu từ 1. Điều này làm cho khi có giá trị khởi tạo nó sẽ luôn bỏ qua phần tử đầu tiên của mảng, dẫn đến kết quả không đúng.

  Sửa lại: Không khai báo và gán giá trị cho biến i trong vòng lặp

  Có thể tham khảo cách làm sau đây:

  ```javascript
  Array.prototype.reduce2 = function (callback, initialValue) {
    if (!this.length) {
      return `Invalid Input!`;
    }

    var result = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i]);
    }
    return result;
  };

  var arr = [1, 2, 3, 4];
  var result = arr.reduce2((pre, current) => {
    return pre + current;
  }, 10);

  console.log(result); //Output: 20
  ```

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý cách xây dựng một phương thức giống với phương thức `reduce()` trong mảng ở bài 2 để hoàn thiện hơn.

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main/Day-22)

- [x] [Bài 1]

  **Chưa hoàn thành**

  Nếu gặp khó khăn nên **đặt câu hỏi hoặc liên hệ trợ giảng** để được trợ giúp hoàn thiện bài tập về nhà.

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần hoàn thiện bài 1.

---

## [Nguyen Van Hai](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/javascript/day-22)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Nên kiểm tra `categories` là một mảng để chắc chắn sử dụng được phương thức `forEach()`

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý kiểm tra điều kiện của đầu vào để tránh lỗi trong các trường hợp đặc biệt.

---

## [Nguyễn Khắc Tú](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/javascript/Day_22)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Nên kiểm tra `array` là một mảng để chắc chắn sử dụng được phương thức `forEach()`

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý kiểm tra điều kiện của đầu vào để tránh lỗi trong các trường hợp đặc biệt.

---

## [Nguyen Tuan Anh](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/day22)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Nên kiểm tra `array` là một mảng để chắc chắn sử dụng được phương thức `forEach()`

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý kiểm tra điều kiện của đầu vào để tránh lỗi trong các trường hợp đặc biệt.
