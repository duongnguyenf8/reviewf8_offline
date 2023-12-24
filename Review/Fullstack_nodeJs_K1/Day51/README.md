# Dương review bài tập về nhà buổi 51 - Lớp K1

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/db/blob/main/day_52/bai_tap_1.sql)

- [x] Bài 1

  Kết thúc mỗi lệnh cần có dấu `;`.

  ```sql
  CREATE DATABASE database_01_xuananh
  ```

  ```sql
  do $$
  begin
  for i in 1..(SELECT count(*) FROM courses) loop
  UPDATE courses
  SET
    name = CONCAT('Môn', i),
    price=100.000 + i , updated_at= NOW()
  WHERE id= i;
  end loop;
  end;
  $$
  ```

  Cần check bảng, db nếu chưa có thì mới tạo:

  ```sql
  CREATE TABLE IF NOT EXISTS courses
  ```

## [Luu Anh Quan](https://github.com/xuananh2212/db/blob/main/day_52/bai_tap_1.sql)

- [x] Bài 1

  Kết thúc mỗi lệnh cần có dấu `;`.

  ```sql
  CREATE DATABASE database_01_anhquan
  ```

  Để set auto increment cho primary key có thể dùng type `serial` thay vì `int`

  ```sql
  CREATE TABLE courses(
    id serial NOT NULL,
    name VARCHAR(50) NOT NULL,
    price FLOAT,
    detail TEXT,
    teacher_id INT NOT NULL,
    active INT,
    created_at  TIMESTAMP with TIME ZONE,
    updated_at  TIMESTAMP with TIME ZONE
  );
  ```

  Cần check bảng, db nếu chưa có thì mới tạo:

  ```sql
  CREATE TABLE IF NOT EXISTS courses
  ```

## [Nguyen Thi Hong Ha](https://github.com/ha752002/NodeJs_learning/blob/main/day_52/day52.sql)

- [x] Bài 1

  Cần check bảng, db nếu chưa có thì mới tạo:

  ```sql
  CREATE TABLE IF NOT EXISTS courses
  ```
