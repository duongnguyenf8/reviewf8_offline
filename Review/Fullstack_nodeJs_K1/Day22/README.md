# Dương review bài tập về nhà buổi 22 Lớp K1

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day22)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Mặc dù chỉ cần kiểm tra tất cả phần tử, nếu có 1 phần tử không thể chuyển re số.

  - Có thể sử dụng `NaN` như một falsy

  - Có thể sử dụng phương thức `every()`

  - Có thể sử dụng toán tử 3 ngôi kết hợp với `arrow function`(Học sau)

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm tốt\*

  Chưa kiểm tra đầu vào không thể chuyển thành số

  ```javascript
  var price = "fsdfdsfds";
  Object.prototype.getCurrency = function (unit) {
    if (!+this) return "Không phải là số";
    var arr = this.toString().split("");
    for (var i = arr.length - 1; i >= 0; i -= 3) {
      if (i === arr.length - 1) continue;
      arr[i] += ",";
    }
    return arr.join("") + " " + unit;
  };

  console.log(price.getCurrency("đ"));
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Chưa rõ ý đồ của dòng code này:

  ```javascript
  var categoriesCopy = [...categories];
  ```

  Chưa kiểm tra đầu vào không phải array:

  ```javascript
  var categories = "dayKhongPhaiArray";
  function getNestedArr(categories, parentId = 0) {
    if (!Array.isArray(categories) || categories.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  console.log(getNestedArr(categories));
  ```

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Do Ha Chi](https://github.com/SerenaHa12/fullstack_nodeJS/blob/main/hoc_javascript/btvn_22/ex04/main.js)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Chưa thể cộng các số thực(Float) vì đang sử dụng `parseInt`

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm tốt\*

  Chưa kiểm tra đầu vào không thể chuyển thành số hoặc không phải kiểu dữ liệu số

  Nên đưa prototype vào Object thay vì String.

  Nên kiểm tra đầu vào có thể parse về số không

  ```javascript
  Object.prototype.getCurrency = function (unit) {
    if (!+this) return "Not a Number";
    var numString = this.toString().replace(/\D/g, "");
    var formattedNumber = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber + " " + unit;
  };
  var price = 12345;
  console.log(price.getCurrency("đ"));
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Chưa kiểm tra đầu vào không phải array:

  ```javascript
  var data = "dayKhongPhaiArray";
  function buildNestedStructure(array, parent = 0) {
    if (!Array.isArray(array) || array.length === 0)
      return "Đầu vào không hợp lệ";
    // code...
  }
  var nestedStructure = buildNestedStructure(data);
  console.log(JSON.stringify(nestedStructure, null, 2));
  ```

  ***

- [x] [Bài 4]

  Bài làm tốt

  Chưa xử lý trường hợp không có initialValue

  ```js
  Array.prototype.reduce2 = function (callback, initialValue) {
    let result = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++)
      result = callback(result, this[i], i, this);
    return result;
  };
  var numbers = [1, 2, 3, 4, 5];
  var total = numbers.reduce2((a, b) => a + b);
  console.log(total);
  ```

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Phan Trung Hiếu](https://github.com/pth2003/FullStack_Nodejs_K1/blob/main/BTVN/btvn_buoi_22/script.js)

- [x] [Bài 1]

  Bài làm tốt\*

  Các số được truyền dưới dạng String cần được parse thử về số, nếu không phải NaN vẫn cần được tính.

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm chưa tốt\*

  Output đầu ra phải phân cách là dấu **","** để giống với yêu cầu đề bài

  Thay vì viết 2 phương thức, có thể sử dụng chung ở Object và check trường hợp string, number

  Chưa kiểm tra trường hợp NaN ở String

  Có thể tham khảo bài của [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day22) sau khi đã chỉnh sửa.

  ```javascript
  var price = "fsdfdsfds";
  Object.prototype.getCurrency = function (unit) {
    if (!+this) return "Không phải là số";
    var arr = this.toString().split("");
    for (var i = arr.length - 1; i >= 0; i -= 3) {
      if (i === arr.length - 1) continue;
      arr[i] += ",";
    }
    return arr.join("") + " " + unit;
  };

  console.log(price.getCurrency("đ"));
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

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

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day22/main.js)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  Nếu đã truyền số Infinity thì có vẻ là cố tình, nên cũng không cần check mà để hàm tính toán tự tính.

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] [Bài 3]

  Bài làm tốt\*

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

  Các cây không có child không cần phải thêm mảng children để giống yêu cầu đề bài.

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/js_fullstack_k1/blob/main/day22/main.js)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  Nếu đã truyền số Infinity thì có vẻ là cố tình, nên cũng không cần check mà để hàm tính toán tự tính.

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm không tốt

  Với yêu cầu đề bài, các số phải phân cách bằng dấu **","**

  Yêu cầu đề bài là truyền currency vào để làm phần đuôi chứ không phải lấy theo quốc gia.

  ***

- [x] [Bài 3]

  Bài làm chưa tốt

  Chưa xóa các key parent giống yêu cầu đề bài.

  Với parentId mặc định là 0, có thể gán trực tiếp vào tham số của hàm `nestedArray`

  Chưa kiểm tra đầu vào là mảng rỗng.

  Nên đưa phần kiểm tra Array vào trong hàm, vì không phải hàm này sẽ gọi luôn hoặc trên thực tế có thể sẽ không gọi trên cùng 1 file...

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, hơi ẩu, cần đọc và hiểu kỹ yêu cầu đề bài, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi22)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  Nếu đã truyền số Infinity thì có vẻ là cố tình, nên cũng không cần check mà để hàm tính toán tự tính.

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm chưa tốt\*

  Với yêu cầu đề bài, các số phải phân cách bằng dấu **","**

  Có thể tham khảo bài của [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day22) sau khi đã chỉnh sửa.

  ```javascript
  var price = "fsdfdsfds";
  Object.prototype.getCurrency = function (unit) {
    if (!+this) return "Không phải là số";
    var arr = this.toString().split("");
    for (var i = arr.length - 1; i >= 0; i -= 3) {
      if (i === arr.length - 1) continue;
      arr[i] += ",";
    }
    return arr.join("") + " " + unit;
  };

  console.log(price.getCurrency("đ"));
  ```

  ***

- [x] [Bài 3]

  Bài làm tốt

  Chưa xóa các key parent giống yêu cầu đề bài.

  Chưa kiểm tra đầu vào không phải mảng hoặc là mảng rỗng.

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Hoài Nam Đỗ](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi22)

- [x] [Bài 1]

  Bài làm chưa tốt

  Các chuỗi có thể parse về số mà không phải NaN vẫn cần được tính toán.

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  Nếu đã truyền số Infinity thì có vẻ là cố tình, nên cũng không cần check mà để hàm tính toán tự tính.

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm KHÔNG tốt\*

  Với yêu cầu đề bài, các số phải phân cách bằng dấu **","**

  Yêu cầu đề bài là truyền currency vào để làm phần đuôi chứ không phải lấy theo quốc gia.

  Với bài làm này, không thể truyền bất cứ một đuôi nào khác ngoài `"đ"`

  Có thể tham khảo bài của [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day22) sau khi đã chỉnh sửa.

  ```javascript
  var price = "fsdfdsfds";
  Object.prototype.getCurrency = function (unit) {
    if (!+this) return "Không phải là số";
    var arr = this.toString().split("");
    for (var i = arr.length - 1; i >= 0; i -= 3) {
      if (i === arr.length - 1) continue;
      arr[i] += ",";
    }
    return arr.join("") + " " + unit;
  };

  console.log(price.getCurrency("đ"));
  ```

  ***

- [x] [Bài 3]

  **Chưa làm**

  ***

- [x] [Bài 4]

  Bài làm không tốt

  Chưa đưa vào phương thức của Array, sai yêu cầu đề bài.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt, cần chú ý thêm vào yêu cầu đề bài, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

- [x] [Bài 1]

  Bài làm chưa tốt

  Các chuỗi có thể parse về số mà không phải NaN vẫn cần được tính toán.

  Khi gặp lỗi, không phải là console ra mà là trả về một lỗi để có thể kiểm tra được.

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  Nếu đã truyền số Infinity thì có vẻ là cố tình, nên cũng không cần check mà để hàm tính toán tự tính.

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm chưa tốt\*

  Với yêu cầu đề bài, các số phải phân cách bằng dấu **","** (Cần truyền tham số vào `toLocalString`)

  ***

- [x] [Bài 3]

  Bài làm chưa tốt

  Chưa kiểm tra đầu vào không phải mảng hoặc là mảng rỗng.

  Chưa xóa các key parent giống yêu cầu đề bài.

  Với các phần tử không có children, không nên thêm để giống với yêu cầu đề bài.

  ***

- [x] [Bài 4]

  Bài làm không tốt

  Bài làm sai kết quả với trường hợp không có initialValue

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý thêm vào yêu cầu đề bài, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [nguyen hung anh](https://github.com/realguy010895/hunganh-f8-k1-off/blob/main/f8-project/buoi21-22/btvn-b22.js)

- [x] [Bài 1]

  Bài làm chưa tốt

  Các chuỗi có thể parse về số mà không phải NaN vẫn cần được tính toán.

  Chưa kiểm tra trường hợp NaN vì NaN vẫn là số và có thể pass qua trường hợp `typeof`

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm **không** tốt\*

  Với yêu cầu đề bài, các số phải phân cách bằng dấu **","**

  Chưa đúng yêu cầu đề bài, khi truyền **"đ"** như đề bài thì bài làm đang lỗi.

  Với bài tập này cần làm xử lý chuỗi.

  ***

- [x] [Bài 3]

  Bài làm tốt

  Chưa kiểm tra đầu vào không phải mảng hoặc là mảng rỗng.

  Chưa xóa các key parent giống yêu cầu đề bài.

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm vào yêu cầu đề bài, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Trung Le](https://github.com/Trungdeptraii/16-08-2023-Le-Van_Trung-Day22/blob/main/js/index.js)

**Chú ý format code**

- [x] [Bài 1]

  Bài làm chưa tốt

  Các chuỗi có thể parse về số mà không phải NaN vẫn cần được tính toán.

  Chưa kiểm tra trường hợp NaN vì NaN vẫn là số và không thể kiểm tra bằng cách so sánh.

  Có thể tham khảo cách làm ngắn gọn hơn, sử dụng `Arrow Function`(Học sau)

  ```js
  var total = (args) =>
    args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
  console.log(total([9, "2", "1", "a"]));
  console.log(total([9, "2", "1"]));
  ```

  ***

- [x] [Bài 2]

  Bài làm chưa tốt\*

  Với yêu cầu đề bài, các số phải phân cách bằng dấu **","**

  Nên đưa vào Object và kiểm tra kiểu dữ liệu string, number.

  Có thể tham khảo bài của [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day22) sau khi đã chỉnh sửa.

  ```javascript
  var price = "fsdfdsfds";
  Object.prototype.getCurrency = function (unit) {
    if (!+this) return "Không phải là số";
    var arr = this.toString().split("");
    for (var i = arr.length - 1; i >= 0; i -= 3) {
      if (i === arr.length - 1) continue;
      arr[i] += ",";
    }
    return arr.join("") + " " + unit;
  };

  console.log(price.getCurrency("đ"));
  ```

  ***

- [x] [Bài 3]

  Bài làm tốt\*

  Chưa kiểm tra đầu vào không phải mảng hoặc là mảng rỗng.

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý thêm vào yêu cầu đề bài, cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.
