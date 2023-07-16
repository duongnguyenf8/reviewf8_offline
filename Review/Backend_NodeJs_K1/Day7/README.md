# Dương - Quân review bài học viên K1-Backend - Buổi 7

## **Note**

**Bài 1**

Lấy kết quả giao giữa 2 mảng

```js
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
```

Kết quả

```js
[1, 2];
```

**Bài 2**

Làm phẳng array sau (Chuyển về mảng 1 chiều)

```js
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
```

Kết quả

```js
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
```

**Bài 3**

Tách phần tử trong mảng theo đúng kiểu dữ liệu

```js
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
```

Kết quả

```js
[
  ["a", "b"],
  [1, 2],
  [true, false],
];
```

## [Nguyễn Đức Dũng](https://github.com/dungng1321/f8-BackEnd-NodeJS-k1/tree/feature/day-7)

**Sớm nhất**

- [x] Bài 1:

  Bài làm tốt \*

  Cần kiểm tra tất cả các trường hợp có thể xảy ra khi làm việc với mảng:

  - Kiểm tra đầu vào có phải là một mảng hay không? Nếu không phải là mảng cần thông báo cho hợp lý trong trường hợp này.

  - Kiểm tra trong 2 mảng đầu vào có mảng nào trống hay không? Tương tự nếu có mảng trống sẽ thông báo như nào cho hợp lý.

  - Nên tính đến trường hợp 2 mảng không có phần tử nào giống nhau thì thông báo cho người dùng biết sẽ hợp lý hơn.

  Hiện tại, chưa kiểm tra nếu trong `same` đã có phần tử giống nhau lần 1 rồi thì các vòng lặp sau nếu có phần tử đó sẽ không lưu kết quả vào `same` nữa. Cần sửa lại, nếu để như hiện tại thì trong `same` sẽ có những trường hợp 1 phần tử xuất hiện nhiều hơn 1 lần. Không đúng với yêu cầu bài toán.

  ```js
  var arr1 = [1, 5, 11, 2, 6, 6, 6, 11];
  var arr2 = [6, 4, 20, 11];
  //Output: Kết quả giao giữa 2 mảng là 11,6,6,6,11
  ```

  Đề xuất:

  ```js
  if (arr2.includes(current) && !prev.includes(current)) {
    prev.push(current);
  }
  ```

---

- [x] Bài 2:

  Bài làm tốt \*

  Cần kiểm tra điều kiện đầu vào như nhận xét ở bài 1.

---

- [x] Bài 3:

  Bài làm tốt \*

  Cần kiểm tra điều kiện đầu vào như nhận xét ở bài 1.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm khá tốt, tuy nhiên cần lưu ý một số điều kiện cần kiểm tra khi làm việc với mảng để hoàn thiện bài làm hơn.

---

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi7)

- [x] Bài 1:

  Bài làm tốt. \*

  Bài làm sử dụng phương thức `reduce` để giải quyết bài toán tuy nhiên trong điều kiện if ở trong vòng lặp reduce đang có một số vấn đề:

  - Chưa kiểm tra là nếu phần tử `current` hiện tại đã có trong result rồi thì không push vào nữa.

    ```js
    var arr1 = [1, 5, 11, 2, 6, 6, 6, 11];
    var arr2 = [6, 4, 20, 11];
    //Output: Kết quả giao giữa 2 mảng là 11,6,6,6,11
    ```

    Đề xuất:

    ```js
    if (arr2.includes(current) && !prev.includes(current)) {
      prev.push(current);
    }
    ```

  - Chưa tính đến trường hợp giữa 2 mảng không có phần tử nào giống nhau thì Output sẽ như thế nào cho hợp lý.

    Đề xuất:

    ```js
    if (result.length === 0) {
      console.log("Không có phần tử giao giữa hai mảng");
    } else {
      console.log("Kết quả giao giữa hai mảng là", result);
    }
    ```

---

- [x] Bài 2:

  Bài làm tốt

  Vì sử dụng phương thức Number đối với mảng nên khi mảng rỗng nó sẽ chuyển về số 0, điều này làm cho kết quả không đúng nếu như trong mảng đầu vào có mảng rỗng.

  Sử dụng phương thức `split` ngăn cách các phần tử bởi dấu `,` điều này nếu như trong mảng phần tử như `"7,8"` thì kết quả sẽ không đúng.

---

- [x] Bài 3:

  Bài làm tốt \*

  Bài làm chỉ đúng với trường hợp input ở ví dụ nhưng nếu trường hợp nào mà kiểu dữ liệu không phải là `string`, `number`, `boolean` thì chưa xử lý trong bài những trường hợp ngoại lệ đó.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt nhưng cần chú ý hơn để giải quyết các trường hợp đặc biệt khi giải quyết một vấn đề nào đó.

---

## [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/tree/main/day-7)

- [x] Bài 1:

  Bài làm tốt. \*

  Bài làm sử dụng phương thức `reduce` để giải quyết bài toán tuy nhiên trong điều kiện if ở trong vòng lặp reduce đang có một số vấn đề:

  - Chưa kiểm tra là nếu phần tử `current` hiện tại đã có trong result rồi thì không push vào nữa.

    ```js
    var arr1 = [1, 5, 11, 2, 6, 6, 6, 11];
    var arr2 = [6, 4, 20, 11];
    //Output: Kết quả giao giữa 2 mảng là 11,6,6,6,11
    ```

    Đề xuất:

    ```js
    if (arr2.includes(current) && !prev.includes(current)) {
      prev.push(current);
    }
    ```

  - Chưa tính đến trường hợp giữa 2 mảng không có phần tử nào giống nhau thì Output sẽ như thế nào cho hợp lý.

    Đề xuất:

    ```js
    if (result.length === 0) {
      console.log("Không có phần tử giao giữa hai mảng");
    } else {
      console.log("Kết quả giao giữa hai mảng là", result);
    }
    ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Hiện tại đang sử dụng phương thức `flat` để làm phẳng mảng với độ sâu là 3. Tuy nhiên nếu fix cứng độ sâu như vậy thì chỉ đúng trong trường hợp này. Nên giải quyết bài toán tổng quan nhất có thể.

---

- [x] Bài 3:

  Bài làm rất tốt \*

  Chưa kiểm tra nếu đầu vào có một mảng rỗng thì sẽ xử lý như thế nào?

---

- [x] Đánh giá chung bài tập về nhà: Bài làm khá tốt, chỉ cần lưu ý kiểm tra một số trường hợp đặc biệt để hoàn thiện hơn.

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1/tree/main/Baitapbuoi7)

- [x] Bài 1:

  Bài làm tốt. \*

  Bài làm sử dụng phương thức `reduce` để giải quyết bài toán tuy nhiên trong điều kiện if ở trong vòng lặp reduce đang có một số vấn đề:

  - Chưa kiểm tra là nếu phần tử `current` hiện tại đã có trong result rồi thì không push vào nữa.

    ```js
    var arr1 = [1, 5, 11, 2, 6, 6, 6, 11];
    var arr2 = [6, 4, 20, 11];
    //Output: Kết quả giao giữa 2 mảng là 11,6,6,6,11
    ```

    Đề xuất:

    ```js
    if (arr2.includes(current) && !prev.includes(current)) {
      prev.push(current);
    }
    ```

  - Chưa tính đến trường hợp giữa 2 mảng không có phần tử nào giống nhau thì Output sẽ như thế nào cho hợp lý.

    Đề xuất:

    ```js
    if (result.length === 0) {
      console.log("Không có phần tử giao giữa hai mảng");
    } else {
      console.log("Kết quả giao giữa hai mảng là", result);
    }
    ```

---

- [x] Bài 2:

  Bài làm tốt \*

  Nếu như trong mảng có phần tử không phải là số thì khi đó sẽ có phần tử NaN khi cố gắng chuyển đổi sang số. Cần tối ưu hơn.

  Sử dụng phương thức `split` ngăn cách các phần tử bởi dấu `,` điều này nếu như trong mảng phần tử như `"7,8"` thì kết quả sẽ không đúng.

---

- [x] Bài 3:

  Bài làm tốt

  Bài làm chưa kiểm tra điều kiện của mảng đầu vào.

  Bài làm chỉ đúng với Input như ở ví dụ nhưng cần kiểm tra hết tất cả các trường hợp có thể xảy ra như 2 mảng có thể có 1 mảng là mảng rỗng hoặc có nhiều kiểu dữ liệu khác chứ không chỉ là 3 kiểu dữ liệu `string`, `number`, `boolean`.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm khá tốt, chỉ cần lưu ý kiểm tra các trường hợp đặc biệt có thể xảy ra để hoàn thiện hơn.

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/blob/main/F8_BE/f8_nodejs/homeword/day07/js/ex01.js)

- [x] Bài 1:

  Bài làm tốt. \*

  Cần kiểm tra tất cả các trường hợp có thể xảy ra khi làm việc với mảng:

  - Kiểm tra đầu vào có phải là một mảng hay không? Nếu không phải là mảng cần thông báo cho hợp lý trong trường hợp này.

  - Kiểm tra trong 2 mảng đầu vào có mảng nào trống hay không? Tương tự nếu có mảng trống sẽ phải thông báo ra màn hình.

  - Nên tính đến trường hợp 2 mảng không có phần tử nào giống nhau thì thông báo cho người dùng biết sẽ hợp lý hơn.

  Hiện tại, chưa kiểm tra nếu trong `same` đã có phần tử giống nhau lần 1 rồi thì các vòng lặp sau nếu có phần tử đó sẽ không lưu kết quả vào `same` nữa. Cần sửa lại, nếu để như hiện tại thì trong `same` sẽ có những trường hợp 1 phần tử xuất hiện nhiều hơn 1 lần. Không đúng với yêu cầu bài toán.

---

- [x] Bài 2:

  Bài làm tốt \*

  Cần kiểm tra các điều kiện của đầu vào như nhận xét ở bài 1.

---

- [x] Bài 3:

  Bài làm chưa tốt.

  Bài làm chỉ đúng khi độ dài 2 mảng bằng nhau, nhưng khi độ dài 2 mảng khác nhau thì Output sẽ không đúng nữa:

  ```js
  var arr = [
    ["a", 1, true, 3],
    ["b", 2, false],
  ];
  //Output: [['a', 'b'], [1, 2], [true, false], [3]].
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm cần lưu ý hơn các trường hợp đặc biệt khi làm việc với mảng và cần tính đến các trường hợp có thể xảy ra để hoàn thiện hơn.

---

## [Nam Nguyen](https://github.com/namdctry/f8-backend-k1/tree/main/btvn/btvn-b7)

- [x] Bài 1:

  Bài làm tốt \*

  Cần kiểm tra tất cả các trường hợp có thể xảy ra khi làm việc với mảng:

  - Kiểm tra đầu vào có phải là một mảng hay không? Nếu không phải là mảng cần thông báo cho hợp lý trong trường hợp này.

  - Kiểm tra trong 2 mảng đầu vào có mảng nào trống hay không? Tương tự nếu có mảng trống sẽ thông báo như nào cho hợp lý.

  - Nên tính đến trường hợp 2 mảng không có phần tử nào giống nhau thì thông báo cho người dùng biết sẽ hợp lý hơn.

  Hiện tại, chưa kiểm tra nếu trong `same` đã có phần tử giống nhau lần 1 rồi thì các vòng lặp sau nếu có phần tử đó sẽ không lưu kết quả vào `same` nữa. Cần sửa lại, nếu để như hiện tại thì trong `same` sẽ có những trường hợp 1 phần tử xuất hiện nhiều hơn 1 lần. Không đúng với yêu cầu bài toán.

  ```js
  var arr1 = [1, 5, 11, 2, 6, 6, 6, 11];
  var arr2 = [6, 4, 20, 11];
  //Output: Kết quả giao giữa 2 mảng là 11,6,6,6,11
  ```

  Đề xuất:

  ```js
  if (arr2.includes(current) && !prev.includes(current)) {
    prev.push(current);
  }
  ```

---

- [x] Bài 2:

  Bài làm tốt \*

  Cần kiểm tra điều kiện đầu vào như nhận xét ở bài 1.

---

- [x] Bài 3:

  Bài làm tốt \*

  Cần kiểm tra điều kiện đầu vào như nhận xét ở bài 1.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm khá tốt, tuy nhiên cần lưu ý một số điều kiện cần kiểm tra khi làm việc với mảng để hoàn thiện bài làm hơn.

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/blob/main/HW/HW7/hw7.js)

- [x] Bài 1:

  Bài làm tốt \*

  Cần kiểm tra tất cả các trường hợp có thể xảy ra khi làm việc với mảng:

  - Kiểm tra đầu vào có phải là một mảng hay không? Nếu không phải là mảng cần thông báo cho hợp lý trong trường hợp này.

  - Kiểm tra trong 2 mảng đầu vào có mảng nào trống hay không? Tương tự nếu có mảng trống sẽ thông báo như nào cho hợp lý.

  - Nên tính đến trường hợp 2 mảng không có phần tử nào giống nhau thì thông báo cho người dùng biết sẽ hợp lý hơn.

  Hiện tại, chưa kiểm tra nếu trong `same` đã có phần tử giống nhau lần 1 rồi thì các vòng lặp sau nếu có phần tử đó sẽ không lưu kết quả vào `same` nữa. Cần sửa lại, nếu để như hiện tại thì trong `same` sẽ có những trường hợp 1 phần tử xuất hiện nhiều hơn 1 lần. Không đúng với yêu cầu bài toán.

  ```js
  var arr1 = [1, 5, 11, 2, 6, 6, 6, 11];
  var arr2 = [6, 4, 20, 11];
  //Output: Kết quả giao giữa 2 mảng là 11,6,6,6,11
  ```

  Đề xuất:

  ```js
  if (arr2.includes(current) && !prev.includes(current)) {
    prev.push(current);
  }
  ```

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm chưa tốt.

  Bài làm có sử dụng hàm `arrReduct` nhưng chưa khai báo ở trong bài 3 nên khi chạy sẽ nhận được lỗi là `arrReduct is not defined`.

  Nếu áp dụng hàm `arrReduct` ở bài 2 thì có kết quả trả về nhưng hiện tại kết quả chỉ lọc được các kiểu dữ liệu `number`, `string`, `boolean` để cho vào 3 mảng riêng nhưng nếu khác 3 kiểu dữ liệu trên thì chưa xử lý trường hợp này.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.

---

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB7)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Có một số trường hợp khiến hàm `getFlatten` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm tốt

  Có một số trường hợp khiến hàm `getElement` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các kiểu dữ liệu không hợp lệ: Nếu mảng đầu vào chứa các kiểu dữ liệu khác như Obj, hàm, giá trị undefined,... hàm có thể không hoạt động đúng.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---

## [Trần Văn Hiểu](https://github.com/tuilahieu/nodejs/blob/main/exercise/day7/ex.js)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Có một số trường hợp khiến hàm `flatArray` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm tốt

  Có một số trường hợp khiến hàm `getArrayOfType` chạy không tốt hoặc không đúng như:

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về 3 mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các kiểu dữ liệu không hợp lệ: Nếu mảng đầu vào chứa các kiểu dữ liệu khác như Obj, hàm, giá trị undefined,... hàm có thể không hoạt động đúng.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVN/BTVNB7)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Tên hàm nên đặt bằng một động từ, cũng nên đặt sao cho tường minh và sát nghĩa hơn, không nên đặt nó là `item` không liên quan gì đến hoạt động làm phẳng mảng.

  Tên biến nên đặt rõ ràng hơn, `customer` không liên quan gì ở đây cả.

  Có một số trường hợp khiến hàm `item` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm tốt

  Tên biến nên đặt rõ ràng hơn, `customer` không liên quan gì ở đây cả.

  Có một số trường hợp khiến hàm `getArrayOfType` chạy không tốt hoặc không đúng như:

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về 3 mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Nếu mảng arr rỗng hoặc không tồn tại, hàm map sẽ không thể thực hiện và sẽ báo lỗi.

  - Nếu các phần tử trong mảng arr không phải là mảng con hoặc các mảng con có độ dài khác nhau, hàm map sẽ không thể hoạt động chính xác và có thể báo lỗi.

  - Nếu các phần tử trong các mảng con của arr không thuộc cùng một kiểu dữ liệu, kết quả trả về của hàm map có thể không chính xác.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi7)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Có một số trường hợp khiến hàm `flatArray` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm tốt

  Có một số trường hợp khiến hàm `groupArray` chạy không tốt hoặc không đúng như:

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Nếu mảng arr rỗng hoặc không tồn tại sẽ không thể thực hiện và sẽ báo lỗi.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

  Có một cách khá thủ công để loại bỏ key của array đi bằng cách lấy các phần tử ở bên trong, push ngoài một mảng mới. Cách này không tối ưu lắm. Tuy nhiên vì chưa học Object, nên cách này cũng được chấp nhận.

  ```js
  const arrDeleteKey = [];
  for (var key in result) {
    arrDeleteKey.push(result[key]);
  }
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1.git)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Có một số trường hợp khiến hàm `mergeArray` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm chưa tốt

  Các hàm chỉ đơn giản là sắ xếp đúng thử tự, nếu thay đổi thứ tự là lỗi ngay.

  Có một số trường hợp khiến hàm `forEach và reduce` chạy không tốt hoặc không đúng như:

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về 3 mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các kiểu dữ liệu không hợp lệ: Nếu mảng đầu vào chứa các kiểu dữ liệu khác như Obj, hàm, giá trị undefined,... hàm có thể không hoạt động đúng.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi7)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Có một số trường hợp khiến hàm `flatten` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm chưa tốt

  Các hàm chỉ đơn giản là sắ xếp đúng thử tự, nếu thay đổi thứ tự là lỗi ngay.

  Có một số trường hợp khiến hàm `forEach và reduce` chạy không tốt hoặc không đúng như:

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về 3 mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các kiểu dữ liệu không hợp lệ: Nếu mảng đầu vào chứa các kiểu dữ liệu khác như Obj, hàm, giá trị undefined,... hàm có thể không hoạt động đúng.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---

## [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab07)

- [x] Bài 1: Bài làm tốt

  Cần kiểm tra chúng có phải mảng hay không? Nếu không phải mảng thì thông báo ra sao?

  Cần kiểm tra nếu không phần tử nào trùng nhau thì hiển thị thông báo ra sao?

  Cần kiểm tra 2 mảng hoặc 1 trong 2 mảng đầu vào là rỗng thì thông báo ra sao?

---

- [x] Bài 2: Bài làm tốt

  Có một số trường hợp khiến hàm `flattenedArray` chạy không tốt hoặc không đúng như:

  - Đầu vào không phải là một mảng: Nếu đầu vào không phải là một mảng, hàm sẽ không thể lăp qua các phần tử và sẽ báo lỗi.

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về một mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các giá trị null hoặc undefined: Nếu mảng đầu vào chứa các giá trị null hoặc undefined, chúng sẽ được thêm vào mảng kết quả. Điều này là không nên.

  - Mảng đầu vào chứa các mảng lồng nhau quá sâu: Nếu mảng đầu vào chứa các mảng lồng nhau quá sâu, hàm có thể gặp phải lỗi tràn ngăn xếp do quá nhiều lần gọi đệ quy.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Bài 3: Bài làm chưa tốt

  Các hàm chỉ đơn giản là sắ xếp đúng thử tự, nếu thay đổi thứ tự là lỗi ngay.

  Có một số trường hợp khiến hàm `forEach và reduce` chạy không tốt hoặc không đúng như:

  - Đầu vào là một mảng rỗng: Nếu đầu vào là một mảng rỗng, hàm sẽ trả về 3 mảng rỗng. Lúc này, cần thông bào cho người dùng biết là mảng đầu vào là một mảng rỗng.

  - Mảng đầu vào chứa các kiểu dữ liệu không hợp lệ: Nếu mảng đầu vào chứa các kiểu dữ liệu khác như Obj, hàm, giá trị undefined,... hàm có thể không hoạt động đúng.

  - Mảng đầu vào chứa các giá trị null: Nếu mảng đầu vào chứa các giá trị null, hàm sẽ xử lý chúng như là kiểu dữ liệu object và gom chúng vào cùng một mảng với các đối tượng khác.

  Cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt. Làm backend thì không nên bỏ qua các trường hợp đặc biệt.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần kiểm tra thêm nhiều trường hợp để chắc chắn hàm hoạt động tốt.

---
