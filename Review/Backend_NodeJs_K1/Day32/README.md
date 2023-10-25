# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi32)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng thêm mới role sử dụng tốt.

  Chức năng sửa role sử dụng tốt.

  **Hidden Feature**

  Khi thiết lập role, trường hợp người dùng chưa chọn quyền đã thông báo lỗi nhưng vẫn thêm vào cơ sở dữ liệu. Có thể chuyển đoạn tạo mới dữ liệu role vào trong if sẽ tránh được lỗi:

  ```javascript
  if (typeof permission === 'string') {
    const newRole = await Role.create({ name: role });
    await newRole.addPermission(
      await Permission.findOne({
        where: {
          value: permission,
        },
      })
    );
    req.flash('success', 'Thêm thành công');
    res.redirect('/role');
  } else if (permission?.length) {
    const newRole = await Role.create({ name: role });
    for (let i = 0; i < permission.length; i++) {
      await newRole.addPermission(
        await Permission.findOne({
          where: {
            value: permission[i],
          },
        })
      );
    }
    req.flash('success', 'Thêm thành công');
    res.redirect('/role');
  } else {
    req.flash('error', 'Vui lòng chọn quyền');
    res.redirect('/role/add');
  }
  ```

  **Special Feature**

  Khi thêm mới, sửa role xử lý thêm mới, cập nhật dữ liệu ở bảng trung gian role_permission rất tốt.

  **Format Code**

  Format code rất tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-32)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng thêm mới role sử dụng tốt.

  Chức năng sửa role sử dụng tốt.

  **Hidden Feature**

  Khi người dùng sửa role xong thì nên redirect về trang danh sách các role. Đoạn redirect có thể chuyển sang redirect trang list:

  ```javascript
  //Xử lý update permission của role
  res.redirect('/role');
  ```

  Module là `Quản lý user`, không phải là tên role. Đang bị nhầm 2 khái niệm này.

  **Special Feature**

  Khi thêm mới, sửa role xử lý thêm mới, cập nhật dữ liệu ở bảng trung gian role_permission rất tốt.

  **Format Code**

  Format code rất tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi32)

- [x] Bài 1:

  Bài làm tốt\*

  **Usage Feature**

  Chức năng thêm mới role sử dụng tốt.

  Chức năng sửa role sử dụng tốt.

  **Hidden Feature**

  Khi thêm mới 1 role, trường hợp người dùng chỉ nhập tên role, không chọn quyền và ấn lưu thì bị lỗi. Do giá trị `permission` bị `undefined` nên khi tìm các bản ghi trong bảng `permission` sẽ bị lỗi. Nên check `permission` hợp lệ trước rồi mới thao tác với database:

  ```javascript
  if (permission) {
    const Permissions = await model.Permission.findAll({
      where: { value: permission },
    });
    console.log(Permissions);
    if (Permissions?.length) {
      for (let i = 0; i < Permissions.length; i++) {
        await Role.addPermission(Permissions[i]);
      }
    }
    req.flash('msg', 'Thêm thành công');
    res.redirect('/users');
  }
  ```

  Trước khi thao tác database cần validate dữ liệu hợp lệ thì mới xử lý, tránh trường hợp người dùng nhập dữ liệu lỗi thì chường trình sẽ bị lỗi.

  **Special Feature**

  Khi thêm mới, sửa role xử lý thêm mới, cập nhật dữ liệu ở bảng trung gian role_permission rất tốt.

  **Format Code**

  Format code tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xử lý validate dữ liệu trước khi thao tác với database để tránh bị lỗi.
