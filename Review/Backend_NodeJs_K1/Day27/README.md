# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi27)

- [x] Bài 1:

  **Usage Feature**

  Khi dùng tài khoản admin xóa bớt 1 customer thì có 1 customer không hiện nội dung cột `Người Thêm`

  Danh sách khách hàng của admin, cột `Người thêm` phải lấy thông tin user tương ứng với customer. Nếu để là `userAdd[id-1]` khi thêm nhiều customer thì sẽ không lấy ra được thông tin user tương ứng (Có thể sử dụng `associate`)

  **Format Code**

  Role của user lưu vào session nên đặt tường minh hơn. Có thể đặt là `ADMIN/USER`

  Khi truy vấn tất cả khách hàng trong trang admin có thể sử dụng `associate` thay vì truy vấn lấy tất cả khách hàng rồi lấy tất cả user. Đoạn truy vấn lấy tất cả khách hàng có thể làm như sau:

  ```Javascript
    const customers = await customer.findAll({
      order: [["id", "DESC"]],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
      include: "user",  // Thông tin của user thêm customer nằm trong field user
    });
  ```

  Mọi trường hợp sửa, xóa khách hàng thì đều cần check role trước khi xử lý xóa. Kiếm tra user có quyền xóa thì mới cho phép xóa

  Controller của route `/edit/:id` cần thêm đoạn check `customerByUser` không trống mới xử lý tiếp, còn trường hợp trống thì có thể redirect về trang 404(Tránh trường hợp người dùng sửa url tới id không hợp lệ). Có thể tham khảo như sau:

  ```Javascript
    const user = await User.findOne({
      where: {
        email: req.session.user,
      },
    });
    const customerByUser = await user.getCustomer();
    if(!customerByUser || customerByUser.length === 0) {
      return next(createError(404));
    }
    const user_id = customerByUser[0].user_id;
    const customer = await Customer.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (customer) {
      if (customer.user_id !== user_id) {
        res.send("<h1>Không có quyền sửa</h1>");
      } else {
        next();
      }
    } else {
      next(createError(404));
    }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần xử lý lại việc truy vấn customer và user, xử lý lại phần hiển thị cột `Người thêm`, thêm logic check role khi vào route sửa, xóa
