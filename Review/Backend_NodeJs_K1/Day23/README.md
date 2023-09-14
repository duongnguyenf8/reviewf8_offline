# Nam review bài học viên lớp BE-k1

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi23)

- [x] Bài 1:

  Trường hợp đã nhập email nhưng chưa nhập mật khẩu thì chỉ cần thông báo `Vui lòng nhập mật khẩu`. Ngược lại trường hợp đã nhập mật khẩu nhưng chưa nhập email thì chỉ cần thông báo `Vui lòng nhập email`

  Lỗi khi đăng nhập 1 email không có trong database rồi sửa url về trang chủ vẫn vào được.

  Khi nhập sai tài khoản mật khẩu các giá trị đã nhập vẫn phải hiển thị(Không được biến mất).

  Trường email, password trong model `Customer` nên để not null. Trường email trong model `Customer` nên để unique.

  Khi tìm thông tin trong database thì chỉ cần dùng `findOne` tìm theo email(Email lúc này đặt là `unique` thì trong database sẽ không bị trùng email) rồi check thông tin người dùng nhập với thông tin trong database. Nếu dùng `findAll` khi database có nhiều user thì sẽ xử lý rất lâu. Có thể làm như sau:

  ```Javascript
    const customer = await customer.findOne({where: { email: 'tda.ducanh@gmail.com' }});

    //Nếu customer tồn tại thì check thông tin người dùng nhập với customer, ngược lại nếu không tồn tại thì trả về thông báo lỗi

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại các case bị lỗi.

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW23)

- [x] Bài 1:

  Lần đầu vào trang đăng nhập không được hiện lỗi ở ô input. Khi người dùng ấn `Login` có lỗi thì mới được phép hiện

  Cần validate email đã nhập, nếu không phải là email thì thông báo lỗi.

  Phải đăng nhập mới được phép vào trang chủ. Hiện tại không đăng nhập vẫn vào được trang chủ

  Khi nhập sai tài khoản mật khẩu các giá trị đã nhập vẫn phải hiển thị(Không được biến mất).

  Khi người dùng không nhập thông tin gì mà ấn `Login` thì cần thông báo thông báo lỗi `Vui lòng nhập đầy đủ thông tin`

  Trường email, password trong model `Customer` nên để not null. Trường email trong model `Customer` nên để unique.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại validate form và các case bị lỗi.

---

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi23)

- [x] Bài 1:

  Nên tách biệt model `Customer` ra 1 file riêng, không nên viết chung vào file controller(Mô hình MVC)

  Trường hợp đã nhập email nhưng chưa nhập mật khẩu thì cần thông báo `Vui lòng nhập mật khẩu`

  Cần validate email đã nhập, nếu không phải là email thì thông báo lỗi.

  Khi nhập sai tài khoản mật khẩu các giá trị đã nhập vẫn phải hiển thị(Không được biến mất).

  Trường email, password trong model `Customer` nên để not null. Trường email trong model `Customer` nên để unique.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần validate form và sửa lại các case bị lỗi.

---

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi23)

- [x] Bài 1:

  Thiếu case mật khẩu chưa mã hóa MD5.

  Ấn `Đăng nhập` bị lỗi.

  Khi tìm thông tin trong database thì chỉ cần dùng `findOne` tìm theo email(Email lúc này đặt `unique` thì trong database sẽ không bị trùng email) rồi check thông tin người dùng nhập với thông tin trong database. Nếu dùng `findAll` khi database có nhiều user thì sẽ xử lý rất lâu. Có thể làm như sau:

  ```Javascript
    const user = await User.findOne({where: { email: 'admin@gmail.com' }});

    //Nếu user tồn tại thì check thông tin người dùng nhập với user, ngược lại nếu không tồn tại thì trả về thông báo lỗi

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại lỗi khi ấn `Đăng nhập` và các case bị lỗi.

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-23)

- [x] Bài 1:

  Khi nhập sai tài khoản mật khẩu các giá trị đã nhập vẫn phải hiển thị(Không được biến mất).

  Trường hợp chưa nhập thông tin tài khoản mật khẩu khi ấn `Đăng nhập` phải xóa thông báo lỗi trước đó nếu có. Ví dụ: đăng nhập bằng tài khoản/mật khẩu không chính xác sau đó xóa hết tài khoản mật khẩu đã nhập rồi ấn `Đăng nhập` thì thông báo lỗi sai tài khoản/mật khẩu vẫn hiển thị.(Phải xóa thông báo lỗi hoặc thay bằng thông báo lỗi `Vui lòng nhập đầy đủ tài khoản mật khẩu` )

  Trường email, password trong model `User` nên để not null. Trường email trong model `User` nên để unique.

  Khi tìm thông tin trong database thì chỉ cần dùng `findOne` tìm theo email(Email lúc này đặt `unique` thì trong database sẽ không bị trùng email) rồi check thông tin người dùng nhập với thông tin trong database. Nếu dùng `findAll` khi database có nhiều user thì sẽ xử lý rất lâu. Có thể làm như sau:

  ```Javascript
    const user = await User.findOne({where: { email: 'admin@gmail.com' }});

    //Nếu user tồn tại thì check thông tin người dùng nhập với user, ngược lại nếu không tồn tại thì trả về thông báo lỗi

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần sửa lại case khi nhập sai tài khoản mật khẩu thì vẫn phải hiển thị tài khoản mật khẩu đã nhập.

---
