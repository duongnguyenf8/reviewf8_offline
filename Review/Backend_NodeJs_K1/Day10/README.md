## [Trần Đức Anh](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi10)

**Sớm nhất**

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

---

- [x] Đánh giá: Bài làm tốt, cần lưu ý đọc kỹ yêu cầu đề bài để xử lý theo đúng yêu cầu bài toán.

---

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi10)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Khi sử dụng `promise` việc đặt `reject` ở sau câu lệnh `resolve` là không đúng vì `promise` chỉ trả về `resolve` hoặc `reject` khi gặp bất kỳ 1 trong 2 câu lệnh `resolve()` hoặc `reject()` sẽ không thực hiện các câu lệnh đằng sau nữa vì lúc đó nó đã có kết quả trả về rồi.

  Việc đặt sau mỗi `.then` là `.catch` cũng không cần thiết có thể đặt `.catch` ở sau 3 câu lệnh `.then` sẽ hợp lý hơn và đúng yêu cầu bài toán `Mở => Đọc => Đóng` hơn.

  Chưa làm theo cách sử dụng `Callback Function`.

---

- [x] Đánh giá: Bài làm tốt, cần ôn lại kiến thức về `Promise` để giải quyết bài toán chặt chẽ và tối ưu hơn. Ngoài ra cần đọc kỹ yêu cầu đề bài để tránh bỏ sót bất kỳ yêu cầu nào.

---

## [Phạm Văn Bảo](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVN/BTVNB10)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

  Chưa xử lý bài toán theo cách sử dụng `Callback Function`.

---

- [x] Đánh giá: Bài làm cần chú ý yêu cầu đề bài để hoàn thiện hơn.

---

## [Dương Trung Kiên](https://github.com/tuilahieu/nodejs/blob/main/exercise/day9/ex.js)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

  Chưa xử lý bài toán theo cách sử dụng `Callback Function`.

---

- [x] Đánh giá: Bài làm cần chú ý yêu cầu đề bài để hoàn thiện hơn.

---

## [Nguyễn Đức Dũng](https://github.com/dungng1321/f8-BackEnd-NodeJS-k1/tree/feature/day-10)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Góp ý: Việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Khi sử dụng `promise` việc đặt `reject` ở sau câu lệnh `resolve` là không đúng vì `promise` chỉ trả về `resolve` hoặc `reject` khi gặp bất kỳ 1 trong 2 câu lệnh `resolve()` hoặc `reject()` sẽ không thực hiện các câu lệnh đằng sau nữa vì lúc đó nó đã có kết quả trả về rồi.

---

- [x] Đánh giá: Bài làm tốt, cần chú ý đến yêu cầu bài toán (bài 1) để hoàn thiện hơn.

---

## [Phạm Hoàng](https://github.com/palkma-byte/f8-backend-k1/blob/main/HW/HW10/hw10.js)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Góp ý: việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt.

  Tuy nhiên trong cách sử dụng `promise` thì ở bước `.then()` thì sau mỗi `.then()` có thể return về hàm sau đó rồi hàm sau chỉ cần `.then` tiếp là được vì quy tắc là `.then` lúc sau sẽ lấy kết quả trả về của `.then` đằng trước nó làm đối số truyền vào.

  Điều này làm cho code sẽ dễ đọc hơn và đẹp hơn.

  ```js
  openFile()
    .then((message) => {
      console.log(message);
      return readFile();
    })
    .then((message) => {
      console.log(message);
      return closeFile();
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  ```

  Ngoài ra cần xử lý thêm trường hợp nếu xảy ra lỗi sẽ thông báo lỗi thì sử dụng `.catch` như ở trên thì bài làm sẽ chặt chẽ hơn.

---

- [x] Đánh giá: Bài làm cần chú ý hơn đến yêu cầu bài toán để thực hiện theo đúng yêu cầu.

---

## [Trần Văn Hiểu](https://github.com/tuilahieu/nodejs/blob/main/exercise/day10/ex.js)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

  Chưa xử lý bài toán theo cách sử dụng `Callback Function`.

---

- [x] Đánh giá: Bài làm tốt, cần thực hiện đầy đủ yêu cầu bài toán đưa ra (bài 2).

---

## [Nguyễn Minh Hiếu](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab10)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1/tree/main/Baitapbuoi10)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm tốt.

  Khi sử dụng `promise` việc đặt `reject` ở sau câu lệnh `resolve` là không đúng vì `promise` chỉ trả về `resolve` hoặc `reject` khi gặp bất kỳ 1 trong 2 câu lệnh `resolve()` hoặc `reject()` sẽ không thực hiện các câu lệnh đằng sau nữa vì lúc đó nó đã có kết quả trả về rồi.

  Chưa xử lý bài toán theo cách sử dụng `Callback Function`.

---

- [x] Đánh giá: Bài làm khá tốt cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/tree/main/day-10/js)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Góp ý: việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

---

- [x] Đánh giá: Bài làm cần lưu ý thực hiện đúng yêu cầu bài toán (bài 1) và lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nguyễn Thanh](https://github.com/nguyenducthanh04/f8-backend-k1.git)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Góp ý: việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

---

- [x] Đánh giá: Bài làm cần lưu ý thực hiện đúng yêu cầu bài toán (bài 1) và lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nguyễn Quang Minh](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi10)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Góp ý: việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

  Lưu ý về cách đặt tên biến, nên đặt có ý nghĩa tên biến và tuân thủ quy tắc CamelCase khi đặt tên biến, không sử dụng ký tự `_` khi đặt tên.

---

- [x] Đánh giá: Bài làm cần lưu ý thực hiện đúng yêu cầu bài toán (bài 1) và lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nam Nguyễn](https://github.com/namdctry/f8-backend-k1/tree/main/btvn/btvn-b10)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

---

- [x] Đánh giá: Bài làm rất tốt chỉ cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/blob/main/F8_BE/f8_nodejs/homeword/day10/js/ex01.js)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm đang chưa hiểu đúng ý của đề bài, hiện tại bài làm chỉ đang check kiểu dữ liệu là `number` thì mới cộng vào nhưng ý của đề bài là cần ưu tiên chuyển đổi về number trước rồi nếu không chuyển đổi được thì mới báo lỗi.

  Góp ý: việc tính tổng có thể sử dụng `reduce` cho ngắn gọn.

  ```js
  return args.reduce((sum, arg) => sum + arg, 0);
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Tuy nhiên trong cách sử dụng `promise` nên thêm bước xử lý lỗi nếu có bằng `catch` sẽ chặt chẽ hơn.

  ```js
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  ```

---

- [x] Đánh giá: Bài làm cần lưu ý thực hiện đúng yêu cầu bài toán (bài 1) và lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---
