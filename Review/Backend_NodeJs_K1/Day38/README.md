# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi38)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user rất tốt.

  Áp dụng cache file xử lý get user rất tốt.

  **Format Code**

  Đoạn check cookies nên viết luôn trong controller:

  ```javascript
  const cookies = req.cookies.users;
  if (cookies) {
    //Xử lý lấy dữ liệu từ file cache và trả về người dùng
  } else {
    // Xử lý lấy dữ liệu từ database
  }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab38)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user rất tốt.

  Áp dụng cache file xử lý get user rất tốt.

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi38)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user rất tốt.

  Áp dụng cache file xử lý get user rất tốt. Tuy nhiên khi set cookies không nên để name là uuid, uuid nên để thành value. Name của cookies nên để tên tường minh để có thể lấy ra dễ dàng.

  **Format Code**

  Đoạn tạo file cache và lưu, lấy dữ liệu nên để try catch để có thể bắt lỗi trường hợp không mong muốn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên nên xử lý lại đoạn set cookies.

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi38)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Khi get user lần đầu không trả về danh sách users.

  Lần đầu get user không lưu được cookies -> Từ lần sau get users đều lỗi, không chạy vào đoạn đọc file.

  Đường dẫn lưu dữ liệu, lấy dữ liệu từ file không được để đường dẫn tuyệt đối.

  Nếu tồn tại cookies thì phải lấy dữ liệu có file là value của cookies đó, hiện tại mỗi lần lấy hay lưu đều là 1 uuid mới.

  **Format Code**

  Đoạn tạo file cache và lưu, lấy dữ liệu nên để try catch để có thể bắt lỗi trường hợp không mong muốn.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa đường dẫn lưu, lấy dữ liệu, xử lý lại lưu cookies và lấy cookies.

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/express_cache)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user rất tốt.

  Áp dụng cache file xử lý get user. Tuy nhiên khi get user lần đầu sau khi lưu vào redis thì trả về thông tin user cho client luôn, để như hiện tại thì sau khi lưu vào redis lại lấy dữ liệu users từ redis ra trả về.

  **Format Code**

  Nên để đoạn thao tác với database và redis vào trong try catch để có thể bắt lỗi trường hợp không mong muốn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần trả về thông tin users sau khi lưu vào redis ở lần get user đầu tiên.

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-38)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user rất tốt.

  Áp dụng cache file xử lý get user rất tốt.

  **Format Code**

  Nên thêm đoạn tạo folder cache trong controller nếu folder không tồn tại:

  ```javascript
  if (!fs.existsSync('./cache')) {
    fs.mkdirSync('./cache');
  }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_javascript/homeword/day38)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user tốt.

  Áp dụng cache xử lý get user tốt.

  **Format Code**

  Hàm getUsersFromDB có mỗi đoạn lấy tất cả user từ database thì không nhất thiết phải viết hàm riêng, có thể lấy tất cả user từ database trong getUsers luôn.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi38)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Sai yêu cầu đề bài.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần làm đúng yêu cầu bài làm.

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b38)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Xử lý hiển thị danh sách user tốt.

  Áp dụng cache file xử lý get user tốt.

  File lưu cache nên để đuôi .json.

  **Format Code**

  Nên thêm đoạn tạo folder cache trong controller nếu folder không tồn tại:

  ```javascript
  if (!fs.existsSync('./cache')) {
    fs.mkdirSync('./cache');
  }
  ```

  `fs.readFileSync()` không cần phải await.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần chỉnh lại đuôi file lưu dữ liệu.
