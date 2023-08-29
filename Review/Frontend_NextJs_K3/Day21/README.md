## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-21)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Cần đọc lại kiến thức về `function`. Hiện tại bài làm đang tạo một function có tên là `getError` với tham số là `field`. Tham số này sẽ nhận đối số được truyền vào vì thế nên khi gọi `getError("email")` thì giá trị của `field` chính là `email`. Vì vậy việc check theo kiểu so sánh `===` là không cần thiết. Ngoài ra nếu như trong object `errors` có nhiều đối tượng ở trong thì phải check field bằng tất cả các đối tượng đó như vậy sẽ rất thủ công và không hợp lý.

  Việc truy cập vào thuộc tính đầu tiên của từng đối tượng con trong errors bằng cách fix cứng tên để lấy ra cũng không hợp lý vì nếu muốn thay đổi tên thì phải vào function `getError` để sửa.

  Cần kiểm tra xem nếu như `errors[field]` tồn tại thì mới thực hiện logic sẽ chặt chẽ hơn.

  Có thể tham khảo đoạn code sau đây:

  ```javascript
  function getError(field) {
    if (errors[field]) {
      for (var key in errors[field]) {
        return errors[field][key];
      }
    } else {
      return "Not exists errors!";
    }
  }
  console.log(getError("password"));
  ```

---

- [x] [Bài 2]

  Bài làm tốt \*

  Chưa có validate cho các trường của customer.

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Có thể tham khảo cách validate sau đây:

  ```javascript
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

---

- [x] [Bài 3]

  Bài làm tốt \*

  Trong hàm `dataRegister` cần check trường hợp nếu như email đăng ký trùng với người khác thì sẽ thông báo lỗi.

  Khi sử dụng function constructor, thì có thể tạo ra một đối tượng bằng cách sử dụng từ khóa `new`. Có thể tham khảo cách làm sau đây:

  ```javascript
  function register(name, password, email) {
    if (!name || !password || !email) {
      console.log("Vui lòng cung cấp đầy đủ thông tin.");
      return;
    }

    const existingUser = registeredUsers.find((user) => user.email === email);
    if (existingUser) {
      console.log("Người dùng đã tồn tại.");
      return;
    }

    const newUser = new User(name, password, email);
    newUser.role = "user";
    registeredUsers.push(newUser);
    console.log("Đăng ký thành công.");
    return newUser;
  }
  ```

  Trong hàm `handleLogin` việc check điều kiện như vậy là hợp lý nhưng khi có user nào thỏa mãn thì có thể return về user đó luôn vì đang sử dụng phương thức map nên không cần phải tạo ra biến `loginData`.

  Có thể tham khảo các làm sau đây:

  ```javascript
  function login(email, password) {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("Đăng nhập thành công.");
      return user;
    } else {
      console.log("Email hoặc mật khẩu không đúng.");
      return null;
    }
  }
  ```

---

- [x] Đánh giá chung bài tập về nhà:

- Bài làm tốt. Tuy nhiên cần lưu ý việc tối ưu code, trình bày ngắn gọn và một số trường hợp đặc biệt để bài làm hoàn thiện hơn.

---

## [Thúy Nguyễn](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3/Day21_JS/js)

- [x] [Bài 1]

  Bài làm rất tốt \*.

  Tuy nhiên cần kiểm tra xem nếu như `errors[field]` tồn tại thì mới thực hiện logic sẽ chặt chẽ hơn.

---

- [x] [Bài 2]

  Bài làm tốt \*

  Bài làm chưa tạo function constructor.

  Chưa có validate cho các trường của customer.

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Có thể tham khảo cách vaildate sau đây:

  ```javascript
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

---

- [x] [Bài 3]

  Bài làm chưa tốt

  Bài làm chưa tạo function constructor.

  Trong hàm `handleRegister` cần check trường hợp nếu như email đăng ký trùng với người khác thì sẽ thông báo lỗi.

  Khi sử dụng function constructor, thì có thể tạo ra một đối tượng bằng cách sử dụng từ khóa `new`. Có thể tham khảo cách làm sau đây:

  ```javascript
  function register(name, password, email) {
    if (!name || !password || !email) {
      console.log("Vui lòng cung cấp đầy đủ thông tin.");
      return;
    }

    const existingUser = registeredUsers.find((user) => user.email === email);
    if (existingUser) {
      console.log("Người dùng đã tồn tại.");
      return;
    }

    const newUser = new User(name, password, email);
    newUser.role = "user";
    registeredUsers.push(newUser);
    console.log("Đăng ký thành công.");
    return newUser;
  }
  ```

  Trong function `handleLogin` có thể check ngắn gọn như sau:

  ```javascript
  function login(email, password) {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("Đăng nhập thành công.");
      return user;
    } else {
      console.log("Email hoặc mật khẩu không đúng.");
      return null;
    }
  }
  ```

---

- [x] Đánh giá chung bài tập về nhà:

- Bài làm tốt

- Cần chú ý các trường hợp validate dữ liệu đầu vào và một số lỗi ở bài 3 để hoàn thiện hơn.

---

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-21/js)

- [x] [Bài 1]

  Bài làm rất tốt \*

---

- [x] [Bài 2]

  Bài làm tốt \*

  Bài làm chưa tạo function constructor.

  ```javascript
  function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  ```

  Chưa có validate cho các trường của customer.

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Có thể tham khảo cách vaildate sau đây:

  ```javascript
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

---

- [x] [Bài 3]

  Bài làm tốt.\*

  Bài làm chưa tạo function constructor.

  Trong hàm `handleRegister` cần check trường hợp nếu như email đăng ký trùng với người khác thì sẽ thông báo lỗi.

---

- [x] Đánh giá chung bài tập về nhà:

- Bài làm tốt \*.

- Cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day21)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Tuy nhiên cần kiểm tra xem nếu như `errors[field]` tồn tại thì mới thực hiện logic sẽ chặt chẽ hơn.

---

- [x] [Bài 2]

  Bài làm tốt.

  Chưa có constructor tạo customer.

  ```javascript
  function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  ```

  Cần đặt tên biến có ý nghĩa và tường minh, hiện tại biến có tên `bd` và `bd1` gây khó hiểu.

  Không nên đặt tên biến trùng với các từ khóa trong javascript, ví dụ trong bài làm đang có biến tên `string`.

  Chưa có validate cho các trường của customer.

  Có thể tham khảo cách vaildate sau đây:

  ```javascript
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

  Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn.

  Đề bài yêu cầu sắp xếp tuổi theo thứ tự tăng dần nên việc làm thêm cách 2 sắp xếp từ lớn đến bé là không cần thiết.

---

- [x] [Bài 3]

  Chưa có contrustor User.

  ```javascript
  function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  ```

  Thay vì sử dụng 3 tham số `name, so, phone` thì có thể thay bằng `name, password, email` thì bài làm sẽ chặt chẽ và dễ hiểu hơn.

  Trong hàm handleRegister:

  - Việc check dữ liệu bằng với undefined là không hợp lý vì nếu người dùng nhập các kiểu dữ liệu falsy khác như `null`hoặc chuỗi rỗng,... thì sẽ không thể check được các trường hợp đó. Có thể tham khảo các check sau đây:

  ```javascript
  if (!name || !password || !email) {
    console.log("Vui lòng cung cấp đầy đủ thông tin.");
    return;
  }
  ```

  - Sai chính tả khi log, hiện đang ghi là `chuyền thiếu dữ liệu` đúng phải là `truyền thiếu dữ liệu`

  - Trong hàm này cần xử lý thêm trường hợp bị trùng email thì sẽ cần phải thông báo lỗi khi đăng ký.

  ```javascript
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

  - Vì không tạo constructor từ đầu nên việc khai báo các dữ liệu trong obj khá thủ công. Nếu như tạo constructor thì chỉ cần ngắn gọn như sau:

  ```javascript
  const newUser = new User(name, password, email);
  newUser.role = "user";
  registeredUsers.push(newUser);
  console.log("Đăng ký thành công.");
  return newUser;
  ```

  Việc check các trường hợp trả về -1, hoặc undefined nên xử lý luôn trong hàm `handleLogin` và `handleRegister` sẽ ngắn gọn và dễ hiểu hơn.

---

- [x] Đánh giá chung bài tập về nhà:

- Bài làm tốt

- Cần chú ý về việc trình bày code, đặt tên biến và một số trường hợp đặc biệt để bài làm hoàn thiện hơn.

---
