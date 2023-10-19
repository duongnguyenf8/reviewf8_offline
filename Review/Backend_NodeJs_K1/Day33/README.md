# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi33)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng rút gọn link và truy cập vào link rút gọn dùng rất tốt.

  Chức năng sửa link rút gọn và link gốc dùng rất tốt.

  Chức năng xóa link rút gọn dùng tốt. Tuy nhiên nên thêm bước confirm trước khi xóa.

  Chức năng thống kê lượt xem link cập nhật tốt.

  **Action Feature**

  Trường hợp người dùng sửa link rút gọn và link gốc thì nên reset lượt view về 0.

  Khi rút gọn link mới, lúc lấy link rút gọn truy cập rồi vào quản lý link thì số view của link vừa mới rút gọn chưa update, phải reload lại mới update.

  **Format Code**

  Format code tốt.

  Nên tạo 1 hàm fetch chung, lúc nào dùng thì import và truyền các tham số cần dùng vào (Giúp clean code).

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW33)

- [x] Bài 1:

  Bài làm tốt\*

  **Usage Feature**

  Chức năng rút gọn link và truy cập vào link rút gọn dùng tốt. Tuy nhiên cần validate link người dùng nhập, nếu chưa nhập hoặc link không đúng định dạng thì không tạo link rút gọn và thông báo lỗi.

  Chức năng sửa link rút gọn và link gốc dùng rất tốt.

  Chức năng xóa link rút gọn dùng tốt. Tuy nhiên nên thêm bước confirm trước khi xóa.

  Chức năng thống kê lượt xem link cập nhật tốt.

  **Action Feature**

  Trường hợp người dùng sửa link rút gọn và link gốc thì nên reset lượt view về 0.

  Khi sửa link xong nên redirect về trang quản lý link hoặc thông báo sửa thành công để người dùng biết được kết quả sau khi thay đổi.

  Nên check dữ liệu trước khi sửa và xóa. Tránh trường hợp người dùng sửa url. Có thể tham khảo đoạn sau:

  ```javascript
  module.exports = {
    deleteLink: async (req, res) => {
      const { urlcode } = req.params;
      if (!urlcode) {
        return res.redirect('/');
      }
      await ShortenLink.destroy({
        where: {
          code: urlcode,
        },
      });

      res.redirect('/');
    },

    updateLink: async (req, res) => {
      const { urlcode } = req.params;
      if (!urlcode) {
        return res.redirect('/');
      }
      const link = await ShortenLink.findOne({
        where: { code: urlcode },
      });
      res.render('update', { link });
    },
  };
  ```

  **Format Code**

  Format code tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần validate link người dùng nhập và thêm confirm trước khi xóa.

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-33)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Usage Feature**

  Chức năng rút gọn link và truy cập vào link rút gọn dùng tốt. Tuy nhiên cần validate link người dùng nhập, nếu chưa nhập hoặc link không đúng định dạng thì không tạo link rút gọn và thông báo lỗi.

  Chức năng sửa link rút gọn và link gốc dùng tốt.

  Chức năng xóa link rút gọn dùng tốt. Tuy nhiên nên thêm bước confirm trước khi xóa.

  Chưa có chức năng thông kê lượt xem link.

  **Action Feature**

  Khi sửa link xong nên redirect về trang quản lý link hoặc thông báo sửa thành công để người dùng biết được kết quả sau khi thay đổi.

  **Format Code**

  Phần sửa, xóa link cần check id và dữ liệu thì mới xử lý tiếp. Tránh trường hợp người dùng sửa url. Có thể tham khảo đoạn sau:

  ```javascript
  module.exports = {
    edit: async (req, res) => {
      const { id } = req.params;
      if (!id) {
        return res.render('links');
      }
      const link = await Link.findOne({
        where: { id },
      });
      if (!link) {
        return res.render('links');
      }
      res.render('links/update', { link });
    },

    delete: async (req, res) => {
      const { id } = req.params;
      if (!id) {
        return res.render('links');
      }
      await Link.destroy({
        where: {
          id,
        },
      });
      res.redirect('/links/manager');
    },
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý thêm validate link người dùng nhập và chức năng thống kê lượt xem.
