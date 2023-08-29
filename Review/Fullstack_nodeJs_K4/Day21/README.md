## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_20)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Góp ý:

  - Chức năng của hàm `checkkey` là để thực hiện kiểm tra xem trong object `errors` có tồn tại `key` được truyền vào hay không. Có thể kiểm tra ngắn gọn như sau:

  ```js
  function checkKey(field) {
    return errors.hasOwnProperty(field);
  }
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  ***

- [x] [Bài 3]

  Bài làm tốt \*

  Trong hàm handleRegister chưa kiểm tra trường hợp người dùng nhập email trùng với email đã có trong `data`. Có thể tham khảo cách kiểm tra như sau:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  Sau khi thực hiện thành công một chức năng nào đó lên `log` ra thông báo rõ ràng ví dụ như `Đăng ký thành công` hoặc `Đăng nhập thành công` để có thể dễ dàng nhận biết các chức năng đã thực hiện thành công hay chưa.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt. Tuy nhiên cần lưu ý validate các dữ liệu ở bài 3 để hoàn thiện hơn.

---

## [Nguyễn Hưng Tuân](https://github.com/hungtuan/f8-fullstack-k4/blob/main/Day-21/js/main.js)

- [x] [Bài 1]

  Bài làm rất tốt \*.

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*.

  ***

- [x] [Bài 3]

  Bài làm tốt \*

  Đề bài yêu cầu viết hàm tạo để khởi tạo một đối tượng có 3 thuộc tính: `name`, `age` và `address`nhưng hiện bài làm khi khởi tạo một đối tượng lại có thêm thuộc tính `role`. Điều này là không đúng với yêu cầu bài toán. Thuộc tính này sẽ được thêm sau khi định nghĩa ra một đối tượng nhờ hàm tạo.

  Trong hàm handleRegister chưa kiểm tra trường hợp người dùng nhập email trùng với email đã có trong `data`. Có thể tham khảo cách kiểm tra như sau:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  Sau khi thực hiện thành công một chức năng nào đó lên `log` ra thông báo rõ ràng ví dụ như `Đăng ký thành công` hoặc `Đăng nhập thành công` để có thể dễ dàng nhận biết các chức năng đã thực hiện thành công hay chưa.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Chỉ cần chú ý đến một số lỗi nhỏ ở bài 3 để hoàn thiện hơn.

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_21)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên cần kiểm tra xem nếu như `errors[key]` tồn tại thì mới thực hiện logic sẽ chặt chẽ hơn.

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Tuy nhiên, khi kiểm tra điều kiện đã đăng ký hay chưa thì chỉ nên kiểm tra mỗi email chứ không cần kiểm tra cả 3 giá trị `name` và `pasword` và `email`.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*.

  - Cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/blob/main/Day-21/js/main.js)

- [x] [Bài 1]

  Bài làm rất tốt \*

  ***

- [x] [Bài 2]

  Bài làm rất tốt. \*

  Nên tách các trường hợp validate các dữ liệu trong `Customer` ra một hàm sẽ dễ hiểu và khoa học hơn:

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt. \*

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Tuy nhiên cần lưu ý việc tối ưu code hơn ở bài 2 để code dễ hiểu và khoa học hơn.

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day21)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên cần kiểm tra xem nếu như `errors[field]` tồn tại thì mới thực hiện logic sẽ chặt chẽ hơn.

  ***

- [x] [Bài 2]

  Bài làm tốt \*.

  Nên kiểm tra `customers` là một mảng rồi mới thực hiện logic thì sẽ chặt chẽ hơn.

  Chưa có validate cho các trường của customer.

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Phần kiểm tra xem người dùng nhập đầy đủ thông tin hay không thì không cần dùng đến typeof để kiểm tra, chỉ cần:

  ```js
  if (!name || !password || !email) {
    console.log("Vui lòng cung cấp đầy đủ thông tin.");
    return;
  }
  ```

  Trong hàm `handleRegister` cần kiểm tra trường hợp bị trùng email:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Cần chú ý đến validate các trường hợp đầu vào để bài làm chặt chẽ hơn.

---

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4/blob/main/Day_20/js/object.js)

- [x] [Bài 1]

  Bài làm rất tốt \*

  ***

- [x] [Bài 2]

  Bài làm tốt \*.

  Nên kiểm tra `customers` là một mảng rồi mới thực hiện logic thì sẽ chặt chẽ hơn.

  Chưa có validate cho các trường của customer.

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Trong hàm `handleRegister` cần kiểm tra trường hợp bị trùng email:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Cần chú ý đến validate các trường hợp đầu vào để bài làm chặt chẽ hơn.

---

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_21/javascript)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên cần kiểm tra xem nếu như `errors[field]` tồn tại thì mới thực hiện logic sẽ chặt chẽ hơn.

  ***

- [x] [Bài 2]

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Trong hàm `handleRegister` cần kiểm tra trường hợp bị trùng email:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  Trong hàm `handleLogin` khi đăng nhập thành công nên có dòng thông báo giúp người dùng nắm được thông tin và code sẽ chặt chẽ hơn tương tự như chức năng Register.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Cần chú ý đến validate các trường hợp đầu vào để bài làm chặt chẽ hơn.

---

## [Lê Đình Hùng](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/Day_21)

- [x] [Bài 1]

  Bài làm rất tốt \*

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  ***

- [x] [Bài 3]

  Bài làm tốt \*

  Đề bài yêu cầu viết hàm tạo để khởi tạo một đối tượng có 3 thuộc tính: `name`, `age` và `address`nhưng hiện bài làm khi khởi tạo một đối tượng lại có thêm thuộc tính `role`. Điều này là không đúng với yêu cầu bài toán. Thuộc tính này sẽ được thêm sau khi định nghĩa ra một đối tượng nhờ hàm tạo.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt.

  - Tuy nhiên cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Hà Long Việt](https://github.com/Vietha22/f8_fullstack_k4/blob/main/Day_21/js/ex01.js)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên khi kiểm tra nếu `errors[field]` không có trong mảng `errors` thì nên thông báo tường minh, rõ ràng hơn.

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Trong hàm `handleRegister` cần kiểm tra trường hợp bị trùng email:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  Khi xử lý đăng ký hoặc đăng nhập thành công nên thông báo cho người dùng nắm được để code chặt chẽ hơn.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nguyễn Ngọc Hùng](https://github.com/Oladayne/f8-fullstack-k98/blob/main/buoi_21/ex.js)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên khi kiểm tra nếu `errors[field]` không có trong mảng `errors` thì nên thông báo tường minh, rõ ràng thì bài làm sẽ chặt chẽ hơn.

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Trong hàm `handleRegister` cần kiểm tra trường hợp bị trùng email:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  Khi xử lý đăng ký hoặc đăng nhập thành công nên thông báo cho người dùng nắm được để code chặt chẽ hơn.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Hoàng Tuấn Kiệt](https://github.com/suspiciously36/bai-tap-js/blob/main/day-21/script/script.js)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên khi kiểm tra nếu `errors[field]` không có trong mảng `errors` thì nên thông báo tường minh, rõ ràng hơn.

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt \*

  Tuy nhiên chưa thêm `role` là `user` cho mỗi đối tượng.

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Trung Kiên](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_20)

- [x] [Bài 1]

  Bài làm rất tốt \*

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  function createCustomers(inputArray) {
    const validData = inputArray.every(
      (customer) =>
        typeof customer.name === "string" &&
        customer.name &&
        typeof customer.age === "number" &&
        customer.age > 0 &&
        customer.age % 1 === 0 &&
        typeof customer.address === "string" &&
        customer.address
    );
  }
  ```

  ***

- [x] [Bài 3]

  **Chưa làm**

  ***

- [x] Đánh giá chung bài tập về nhà:

  - Bài làm rất tốt \*

  - Tuy nhiên cần lưu ý xét đến các trường hợp đặc biệt ở bài 2.

  - Cần hoàn thiện bài 3, nếu có khó khăn gì trong quá trình làm BTVN cần đặt câu hỏi để được trợ giúp trong việc hoàn thành BTVN.
