# Dương review bài tập về nhà buổi 55 - Lớp K1

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/db/tree/main/day55)

- [x] Bài 1

  Nên ignore .env đi để tránh bị lỗi biến môi trường ở các môi trường khác

  Không nên sử dụng link delete là GET, đúng ra nên sử dụng method **DELETE**

  - Chưa lấy next ra nhưng đã gọi

    ```js
    //users.controllers.js:87
    delete: async (req, res) => {
        const { id } = req.params;
        const user = await userModel.inforUser(id);
        if (!user.length) {
              return next(createError(404));
        }
        res.render('users/delete');
    },
    ```

  - Vì `id` đã để auto increment, có thể sử dụng sắp xếp cả theo id.

    ```js
    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC`;
    ```

  - Trong phần sửa, validate giống hệt phần thêm nên không sửa được:

    ```js
    .test(
      'unique',
      'email đã được sử dụng bởi user khác',
      async (value) => {
        return await userModel.checkEmailWhenEdit(id, value);
      }
    ),
    ```

  - Nên đưa id của user vào session không nên hiển thị ra đường link, tránh lỗi bảo mật không đáng có.

## [Luu Anh Quan](https://github.com/anhquan2211/backend-fullstack-K1-F8/tree/main/day55)

- [x] Bài 1

  - Vì `id` đã để auto increment, có thể sử dụng sắp xếp cả theo id.

    ```js
    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC`;
    ```

  - Nên đưa id của user vào session không nên hiển thị ra đường link, tránh lỗi bảo mật không đáng có.

## [Duong Quoc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006/tree/main/nodejs/nodejs02)

- [x] Bài 1

  Nên ignore .env đi để tránh bị lỗi biến môi trường ở các môi trường khác

  Chưa check unique khi sửa email của user, nhiều user có thể sử dụng một email.

  Chưa validate email khi sửa

  - Vì `id` đã để auto increment, có thể sử dụng sắp xếp cả theo id.

    ```js
    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC`;
    ```

  - Nên đưa id của user vào session không nên hiển thị ra đường link, tránh lỗi bảo mật không đáng có.

## [Le Van Trung](https://github.com/Trungdeptraii/Bai_55_Le_Van_Trung.git)

- [x] Bài 1

  Nên ignore .env đi để tránh bị lỗi biến môi trường ở các môi trường khác

  Không nên sử dụng link delete là GET, đúng ra nên sử dụng method **DELETE**

  - Trong phần sửa, validate giống hệt phần thêm nên không sửa được:

    ```js
    .test(
      'unique',
      'email đã được sử dụng bởi user khác',
      async (value) => {
        return await userModel.checkEmailWhenEdit(id, value);
      }
    ),
    ```

  - Vì `id` đã để auto increment, có thể sử dụng sắp xếp cả theo id.

    ```js
    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC`;
    ```

  - Nên đưa id của user vào session không nên hiển thị ra đường link, tránh lỗi bảo mật không đáng có.

## [Duong Hiep](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day55)

- [x] Bài 1

  Xóa chưa có confirm

  - Vì `id` đã để auto increment, có thể sử dụng sắp xếp cả theo id, updated_at.

    ```js
    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC`;
    ```

  - Nên đưa id của user vào session không nên hiển thị ra đường link, tránh lỗi bảo mật không đáng có.

## [Nguyen THi Hong Ha](https://github.com/ha752002/NodeJs_learning/tree/main/day_55)

- [x] Bài 1

  Xóa chưa có confirm

  Không nên sử dụng link delete là GET, đúng ra nên sử dụng method **DELETE**

  - Vì `id` đã để auto increment, có thể sử dụng sắp xếp cả theo id, updated_at.

    ```js
    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC`;
    ```

  - Nên đưa id của user vào session không nên hiển thị ra đường link, tránh lỗi bảo mật không đáng có.
