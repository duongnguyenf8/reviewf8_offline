# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi26)

- [x] Bài 1:

  Thiếu checkbox chọn tất cả khách hàng

  Khi chưa check khách hàng nào thì button `Xoá đã chọn` nên bị disabled hoặc bị ẩn đi(Không cho phép xóa khi chưa check khách hàng nào). Lúc nào check khách hàng thì lại hiện button

  Không nên để value của attribute `name` trong thẻ input checkbox là email. Thay vì đó nên để là id của khách hàng

  Đoạn xử nếu điều kiện if `value.toString().includes("Xóa")` đúng không hợp lý. Nên thay đoạn xử lý thành đoạn thông báo lỗi và nên xóa khách hàng theo id. Có thể thay như sau:

  ```Javascript
  if (!value.toString().includes("on")) {
      req.flash("msgDelete", "Có lỗi. Vui lòng thử lại");

      res.redirect("/customers");
    } else {
      const customer = db.Customer;
      const customerDelete = await customer.destroy({
        where: {
          email: data,
        },
      });
      req.flash("msgDelete", "Xóa thành công");

      res.redirect("/customers");
    }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần bổ sung check tất cả khách hàng và thay value attribute `name` trong thẻ input thành id, xử lý xóa theo id

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-26)

- [x] Bài 1:

  Khi tất cả khách hàng trong trang hiện tại được check thì checkbox tất cả cũng phải check

  Khi chưa check khách hàng nào thì button `Xoá đã chọn` nên bị disabled hoặc bị ẩn đi(Không cho phép xóa khi chưa check khách hàng nào). Lúc nào check khách hàng thì lại hiện button

  Khi ấn chọn tất cả và ấn xóa, mảng id gửi lên luôn luôn có phần tử `on` ở vị trí đầu tiên, nên xóa `on` rồi truyền mảng đã xóa `on` vào thì sẽ không cần dùng vòng lặp nữa. Có thể làm như sau:

  ```Javascript
    const { checkDelete } = req.body;
    let listId
    if(checkDelete[0] === 'on') {
        listId = checkDelete.slice(1)
    } else {
        listId = checkDelete
    }
    const customer = await Customer;
    if (checkDelete) {
        customer.destroy({
          where: {
            id: listId,
          },
          force: true,
        });
      req.flash("success", "Xóa thành công");
      res.redirect("/customers");
    } else {
      req.flash("msg", "Bạn hãy chọn tích vào ô muốn xóa");
      res.redirect("/customers");
    }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần sửa lại checkbox khi check tất cả khách hàng

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi26)

- [x] Bài 1:

  Khi click checkbox all tất cả checkbox của khách hàng chưa check

  Khi tất cả khách hàng trong trang hiện tại được check thì checkbox tất cả cũng phải check

  Khi check all rồi ấn xóa thì tất cả khách hàng chưa được xóa

  Khi chưa check khách hàng nào thì button `Xoá đã chọn` nên bị disabled hoặc bị ẩn đi(Không cho phép xóa khi chưa check khách hàng nào). Lúc nào check khách hàng thì lại hiện button

  Nếu dùng điều kiện `values[0] === 'on'` thì bên trong không cần phải check điều kiện `values.join("").includes("Xóa")` vì điều kiện này sẽ không bao giờ xảy ra. Trường hợp else nên xử lý thông báo lỗi, không nên xử lý xóa kể cả điều kiện `values[0] === 'on'` đúng hay sai. Có thể tham khảo đoạn xử lý dưới:

  ```Javascript
  if (values[0] === "on") {
      const customer = db.Customer;
      const customerDelete = await customer.destroy({
        where: {
          id: data,
        },
      });

      req.flash("msgD", "Xóa thành công");

      res.redirect("/customers");
    } else {
      req.flash("msgD", "Có lỗi. Vui lòng thử lại");

      res.redirect("/customers");
    }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý thêm checkbox all và xử lý trường hợp khi tất cả khách hàng trong trang hiện tại được check thì checkbox tất cả cũng phải check

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW26)

- [x] Bài 1:

  Khi click checkbox all tất cả checkbox của khách hàng chưa check nên trường hợp ấn check all rồi ấn xóa sẽ gửi lên giá trị `undefined` -> ấn xóa bị lỗi

  Khi tất cả khách hàng trong trang hiện tại được check thì checkbox tất cả cũng phải check

  Chưa check khách hàng nào, ấn xóa đã chọn bị lỗi

  Khi chưa check khách hàng nào thì button `Xoá đã chọn` nên bị disabled hoặc bị ẩn đi(Không cho phép xóa khi chưa check khách hàng nào). Lúc nào check khách hàng thì lại hiện button

  Thiếu confirm khi ấn xóa đã chọn

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại phần check all, thêm confirm khi ấn xóa

---

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVNB26)

- [x] Bài 1:

  Nên xóa bớt file model customer không dùng

  Khi vào url `/`, `/customers`,... bị lỗi view, không xem được trang

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại lỗi view khi vào trang

---

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b26)

- [x] Bài 1:

  Sửa lại `province_id` trong seeder customer, `province_id` hiện tại không khớp với province seeder nên khi run seed bị lỗi

  Khi click checkbox all tất cả checkbox của khách hàng chưa check

  Khi tất cả khách hàng trong trang hiện tại được check thì checkbox tất cả cũng phải check

  Khi chưa check khách hàng nào thì button `Xoá đã chọn` nên bị disabled hoặc bị ẩn đi(Không cho phép xóa khi chưa check khách hàng nào). Lúc nào check khách hàng thì lại hiện button

  Khi check nhiều khách hàng rồi ấn xóa nhưng chỉ xóa 1 khách hàng trong số khách hàng đã chọn. Do khi xóa dùng operator `[Op.in]`. Có thể thay thế như sau:

  ```Javascript
    const idsToDelete = req.body.selectedItems ?? null;

    if (idsToDelete) {
      await Customer.destroy({
        where: {
          id: idsToDelete,
        },
        force: false,
      });
      req.flash("msg", "Xóa thành công");
    } else {
      req.flash("msg", "Vui lòng chọn kahchs hàng");
    }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại phần check all, phần operator khi xóa

---
