## [Nguyễn Đức Dũng](https://github.com/dungng1321/f8-BackEnd-NodeJS-k1/tree/feature/day-7)

**Sớm nhất**

- [x] Bài 1:

  Bài làm tốt \*

  Cần kiểm tra tất cả các trường hợp có thể xảy ra khi làm việc với mảng:

  - Kiểm tra đầu vào có phải là một mảng hay không? Nếu không phải là mảng cần thông báo cho hợp lý trong trường hợp này.

  - Kiểm tra trong 2 mảng đầu vào có mảng nào trống hay không? Tương tự nếu có mảng trống sẽ thông báo như nào cho hợp lý.

  - Nên tính đến trường hợp 2 mảng không có phần tử nào giống nhau thì thông báo cho người dùng biết sẽ hợp lý hơn.

  Hiện tại, chưa kiểm tra nếu trong `same` đã có phần tử giống nhau lần 1 rồi thì các vòng lặp sau nếu có phần tử đó sẽ không lưu kết quả vào `same` nữa. Cần sửa lại, nếu để như hiện tại thì trong `same` sẽ có những trường hợp 1 phần tử xuất hiện nhiều hơn 1 lần. Không đúng với yêu cầu bài toán.

---

- [x] Bài 2:

  Bài làm tốt \*

  Cần kiểm tra điều kiện đầu vào như nhận xét ở bài 1.

---

- [x] Bài 3:

  Bài làm tốt \*

  Cần kiểm tra điều kiện đầu vào như nhận xét ở bài 1.

---

- [x] Đánh giá: Bài làm khá tốt, tuy nhiên cần lưu ý một số điều kiện cần kiểm tra khi làm việc với mảng để hoàn thiện bài làm hơn.

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

- [x] Đánh giá: Bài làm tốt nhưng cần chú ý hơn để giải quyết các trường hợp đặc biệt khi giải quyết một vấn đề nào đó.

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

- [x] Đánh giá: Bài làm khá tốt, chỉ cần lưu ý kiểm tra một số trường hợp đặc biệt để hoàn thiện hơn.

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

- [x] Đánh giá: Bài làm khá tốt, chỉ cần lưu ý kiểm tra các trường hợp đặc biệt có thể xảy ra để hoàn thiện hơn.

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

- [x] Đánh giá: Bài làm cần lưu ý hơn các trường hợp đặc biệt khi làm việc với mảng và cần tính đến các trường hợp có thể xảy ra để hoàn thiện hơn.

---
