## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/blob/main/F8_BE/f8_javascript/homeword/day18-mysql/Database01.sql)

- [x] [Bài 1]

  Bài làm tốt. \*

  Chưa làm yêu cầu cập nhật thông tin giảng viên.

  Khi `UPDATE` chưa _"Lưu lại thời gian sửa sau cùng"_.

  Đề xuất:

  ```sql

  -- Bảng courses
  UPDATE courses SET name = 'Khoa hoc A1', price = 300, updated_at = NOW() WHERE id = 1;

  -- Bảng teacher
  UPDATE teacher SET bio = 'Bio moi cho giang vien 1', updated_at = NOW() WHERE id = 1;

  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm cần thực hiện đầy đủ các yêu cầu của đề bài để hoàn thiện hơn.

---

## [Đức Dũng Nguyễn](https://github.com/dungng1321/NodeJS-Offline-Exercise/tree/feature/day-18/day18)

- [x] [Bài 1]

  Bài làm rất tốt. \*

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt.

---

## [Phạm Văn Bảo](https://github.com/baodepzai01/f8-back-end-k1/blob/main/BTVNB18/database01.sql)

- [x] [Bài 1]

  **Bài làm trên github không có nội dung, cần xem lại**

---

## [Nguyễn Quang Minh](https://github.com/wex-alacrity/F8_BE_QuangMinh/blob/main/buoi18/btvn_18.sql)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Ở bước thêm trường `description` có ràng buộc là NULL nhưng hiện tại bài làm khi thêm chưa có ràng buộc và đề bài yêu cầu thay đổi tên rồi thay đổi ràng buộc chứ không phải thay đổi ràng buộc xong thay đổi tên. Có thể tham khảo cách ngắn gọn sau đây:

  ```SQL
  -- Thêm trường 'description' vào bảng 'courses' sau trường 'price'
  ALTER TABLE courses ADD COLUMN description TEXT NULL AFTER price;

  -- Thay đổi  cột 'detail' thành 'content'
  ALTER TABLE courses CHANGE COLUMN detail content TEXT NOT NULL;
  ```

  Bài làm chưa làm yêu cầu cập nhật thông tin giảng viên và cập nhật thông tin khóa học.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm cần thực hiện đầy đủ các yêu cầu của đề bài để hoàn thiện hơn.

---

## [Nguyễn Minh Hiếu](https://github.com/hiusnguyen201/F8-Exercise/blob/main/Lab18/database_01_NguyenMinhHieu.sql)

- [x] [Bài 1]

  Bài làm rất tốt. \*

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt.

---

## [Phương](https://github.com/phuongnd168/back-end-f8/blob/main/Buoi18/baitapbuoi18.sql)

- [x] [Bài 1]

  Bài làm tốt. \*

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Ở bước thay đổi tên và ràng buộc của trường `detail` có thể sử dụng `CHANGE COLUMN` để ngắn gọn hơn:

  ```SQL
  ALTER TABLE courses CHANGE COLUMN detail content TEXT NOT NULL;
  ```

  Đề bài yêu cầu sửa tên và giá của từng khóa học nhưng hiện tại bài làm chỉ sửa tên và giá của 3 khóa học có id là 1, 2, 3. Còn thiếu 6 khóa học còn lại chưa được `UPDATE`.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt tuy nhiên cần đọc kỹ yêu cầu đề bài để hoàn thiện hơn.

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/blob/main/Baitapbuoi18/Baitapbuoi18.sql)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Đề bài yêu cầu sửa tên và giá của từng khóa học nhưng hiện tại bài làm chỉ sửa tên và giá của 3 khóa học có id là 1, 2, 3. Còn thiếu 6 khóa học còn lại chưa được `UPDATE`.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt tuy nhiên cần đọc kỹ yêu cầu đề bài để hoàn thiện hơn.

---

## [Đức Anh Trần](https://github.com/ducanhtranptit/F8_Homework/blob/main/Buoi18/buoi18.sql)

- [x] [Bài 1]

  Bài làm rất tốt. \*

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt.

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/blob/main/Day-18/exercise.sql)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Ở bước thay đổi tên và ràng buộc của trường `detail` có thể sử dụng `CHANGE COLUMN` để ngắn gọn hơn:

  ```SQL
  ALTER TABLE courses CHANGE COLUMN detail content TEXT NOT NULL;
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt.

---

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/blob/main/btvn-b18/CREATE%20DATABASE%20database_01_NguyenThanhN.sql)

- [x] [Bài 1]

  Bài làm tốt. \*

  Lưu ý cách đặt tên file.

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Ở bước thêm trường `description` thì đề bài yêu cầu trường này là kiểu text và có ràng buộc là NULL nhưng bài làm đang không có ràng buộc khi thêm cột `description`, cần xem lại.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, tuy nhiên cần lưu ý đọc kỹ yêu cầu đề bài và có thể trình bày ngắn gọn và dễ hiểu hơn.

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/blob/main/HW/HW18/DatabaseHW18.sql)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên cần format code và trình bày code ngắn gọn hơn.

---

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1/blob/main/btvnday18/database01.sql)

- [x] [Bài 1]

  Bài làm tốt. \*

  Ở bước thêm khóa học cho các giảng viên, mỗi giảng viên thêm 3 khóa học thì bài làm đang thêm khóa học vào các `techer_id` không đúng. Cần sửa lại và ngắn gọn hơn như sau:

  ```SQL
  INSERT INTO courses (id, name, price,  content, description, teachers_id, active, created_at, updated_at)
  VALUES
      (1, 'Lập trình HTML, CSS', 1000000, 'Học lập trình HTMl, CSS từ cơ bản đến nâng cao', 'Khóa học lập trình HTML,CSS', 1, 1, NOW(), NOW()),
      (2, 'Lập trình Java', 2000000, 'Học lập trình Java và phát triển ứng dụng Java.', 'Khóa học lập trình Java', 1, 1, NOW(), NOW()),
      (3, 'Lập trình C++', 3000000, 'Học lập trình C++ và xây dựng các ứng dụng hệ thống.', 'Khóa học lập trình C++', 1, 1, NOW(), NOW()),
      (4, 'Lập trình Python', 4000000, 'Học lập trình Python và xây dựng ứng dụng', 'Khóa học lập trình Python', 2, 1, NOW(), NOW()),
      (5, 'Lập trình Ruby', 5000000, 'Học lập trình Ruby và phát triển ứng dụng web động.', 'Khóa học lập trình Ruby', 2, 1, NOW(), NOW()),
      (6, 'Lập trình C#', 6000000, 'Học lập trình C# và phát triển ứng dụng Windows.', 'Khóa học lập trình C#', 2, 1, NOW(), NOW()),
      (7, 'Lập trình C', 7000000, 'Học lập trình C từ cơ bản đến nâng cao.', 'Khóa học lập trình C', 3, 1, NOW(), NOW()),
      (8, 'Lập trình Javascript', 8000000, 'Học lập trình Javascript và phát triển ứng dụng web.', 'Khóa học lập trình Javascript', 3, 1, NOW(), NOW()),
      (9, 'Lập trình PHP', 9000000, '.Học lập trình PHP từ cơ bản đến nâng cao.', 'Khóa học lập trình PHP', 3, 1, NOW(), NOW());
  ```

  Khi cập nhật thông tin khóa học và cập nhật thông tin giảng viên đề bài yêu cầu lưu lại thời gian sửa sau cùng nên khi cập nhật cần có `update_at`. Có thể sửa lại như sau:

  ```SQL
  --Cập nhật thông tin khóa học
  UPDATE courses SET name = 'Lập trình PHP nâng cao', price = 1500000, updated_at = NOW() WHERE id = 1;
  UPDATE courses SET name = 'Lập trình Java nâng cao', price = 2500000, updated_at = NOW() WHERE id = 2;
  UPDATE courses SET name = 'Lập trình C++ nâng cao', price = 3500000, updated_at = NOW() WHERE id = 3;
  UPDATE courses SET name = 'Lập trình Python nâng cao', price = 4500000, updated_at = NOW() WHERE id = 4;
  UPDATE courses SET name = 'Lập trình Ruby nâng cao', price = 5500000, updated_at = NOW() WHERE id = 5;
  UPDATE courses SET name = 'Lập trình C# nâng cao', price = 6500000, updated_at = NOW() WHERE id = 6;
  UPDATE courses SET name = 'Lập trình C nâng cao', price = 7500000, updated_at = NOW() WHERE id = 7;
  UPDATE courses SET name = 'Lập trình Javascript nâng cao', price = 8500000, updated_at = NOW() WHERE id = 8;
  UPDATE courses SET name = 'Lập trình HTML nâng cao', price = 9500000, updated_at = NOW() WHERE id = 9;

  --Cập nhật thông tin giảng viên
  UPDATE teachers SET bio = 'Giảng viên khoa CNTT HVKTMM', updated_at = NOW() WHERE id = 1;
  UPDATE teachers SET bio = 'Giảng viên khoa ATTT DHBKHN', updated_at = NOW() WHERE id = 2;
  UPDATE teachers SET bio = 'Giảng viên khoa CNTT HVKTQS', updated_at = NOW() WHERE id = 3;

  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm cần chú ý thực hiện đúng với các yêu cầu đề bài để hoàn thiện hơn và cần chú ý format code và trình bày code cần ngắn gọn hơn.

---

## [Trần Văn Hiểu](https://github.com/NguyenNhat04/f8-backend-k1/blob/main/day-18/exercise1.sql)

- [x] [Bài 1]

  Bài làm tốt. \*

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Ở bước thêm trường `description` thì đề bài yêu cầu trường này là kiểu text và có ràng buộc là NULL nhưng bài làm đang yêu cầu trường này có ràng buộc là NOT NULL ngay khi thêm, cần xem lại.

  Ở bước thêm mỗi giảng viên ba khóa học nhưng hiện tại bài làm đang thêm 9 khóa học đều thêm vào `teacher_id` bằng 1. Cần sửa lại:

  ```SQL
  INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES
  (1, 'course1', 100, 'desc1', 'content1', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'course2', 200, 'desc2', 'content2', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'course3', 300, 'desc3', 'content3', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'course4', 100, 'desc4', 'content4', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'course5', 500, 'desc5', 'content5', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 'course6', 1000, 'desc6', 'content6', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 'course7', 300, 'desc7', 'content7', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 'course8', 300, 'desc8', 'content8', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 'course9', 300, 'desc9', 'content9', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm cần chú ý thực hiện đúng với các yêu cầu đề bài để hoàn thiện hơn.

---

## [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/blob/main/day-18/exercise1.sql)

- [x] [Bài 1]

  Bài làm tốt. \*

  Bài làm cần có bước tạo database để Review có thể chạy một lần tất cả câu lệnh, hiện tại chưa có bước tạo database.

  Các từ khóa như `int, varchar(), float, text, timestamp` nên viết hoa thì sẽ chặt chẽ hơn.

  Ở bước thêm trường `description` thì đề bài yêu cầu trường này là kiểu text và có ràng buộc là NULL nhưng bài làm đang cho trường này có ràng buộc là NOT NULL ngay khi thêm, điều này là không đúng, cần xem lại.

  Sai chính tả. Thay đổi cột `detail` thành `content` chứ không phải `contain`.

  Ở bước thêm 3 giảng viên vào cột `teacher` thì bài làm đang thêm 3 giảng viên với 3 tên đều là `teacher1`. Cần xử lý lại.

  Bài làm chưa có bước sửa lại bio của từng giảng viên theo yêu cầu đề bài.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm cần chú ý thực hiện đúng với các yêu cầu đề bài để hoàn thiện hơn.

---
