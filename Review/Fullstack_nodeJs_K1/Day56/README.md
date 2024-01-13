# Dương review bài tập về nhà lớp K1

## [Duong Quoc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006/tree/main/nodejs/AuthNodejs)

- [x] Bài 1

  Ở trong migrations sử dụng tên cột là createdAt, updatedAt, nhưng trong model gọi ra là created_at, updated_at, nên đang bị lỗi, không gọi được.

  ```js
  {
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }
  ```

  Không đăng ký được vì đang lỗi phần model

  Đặt tên cho bảng là Users, nhưng trong model đặt tên table là users, nên không query được

  Đường dẫn không hợp lý:

  ```
  http://localhost:3000/login/register
  ```

  Có thể đổi thành:

  ```
  http://localhost:3000/auth/login
  http://localhost:3000/auth/register
  ```

  Sau khi sửa file model user thì chạy bình thường:

  ```js
  {
    sequelize,
    modelName: 'User',
    // tableName: 'users',
    // createdAt: "created_at",
    // updatedAt: "updated_at",
  }
  ```

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/back_end/tree/main/day56)

- [x] Bài 1

  Ở trong migrations sử dụng tên cột là createdAt, updatedAt, nhưng trong model gọi ra là created_at, updated_at, nên đang bị lỗi, không gọi được.

  ```js
  {
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }
  ```

  Không đăng ký được vì đang lỗi phần model

  Đặt tên cho bảng là Users, nhưng trong model đặt tên table là users, nên không query được

  Nên có 1 file .env.example để dễ dàng viết file env hơn.

## [Duong Hiep](https://github.com/duonghiep416/duonghiep_f8_fullstack/tree/main/Day56)

- [x] Bài 1

  Đặt tên cho bảng là Users, nhưng trong model đặt tên table là users, nên không query được

  Chưa lưu được trạng thái đăng nhập, nên reload lại là mất. Khi đăng nhập rồi, vào lại trang đăng nhập thì vẫn vào được.

## [Nguyen Thi Hong Ha](https://github.com/ha752002/NodeJs_learning/tree/main/day_56)

- [x] Bài 1

  Không nên tách mỗi 1 route là 1 file, nếu như nhiều route lên thì rất rối

  Khi đăng nhập rồi, vào lại trang đăng nhập thì vẫn vào được.

## [Luu Anh Quan](https://github.dev/anhquan2211/backend-fullstack-K1-F8/tree/main/day56)

- [x] Bài 1

  Đặt tên cho bảng là Users, nhưng trong model đặt tên table là users, nên không query được
