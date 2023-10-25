# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi34)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng rất tốt.

  **Format Code**

  `PermissionMiddleware` đang viết giống theo kiểu 1 hàm lấy tất cả các quyền. Nên viết theo kiểu middleware check người dùng có quyền truy cập hay không ở trong `PermissionMiddleware` luôn. Ví dụ như sau:

  ```javascript
  //Route user.js
  router.get('/', PermissionMiddleware('users.read'));

  //Middleware PermissionMiddleware.js
  const PermissionMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        req.flash('err', 'Không có quyền');
        res.redirect('/');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên nên sửa lại middleware `PermissionMiddleware` cho đúng kiểu.

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi34)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng rất tốt.

  **Format Code**

  Đoạn kiểm tra quyền để ẩn hiện module quản lý người dùng, role trong file layout.ejs nên check typeof của biến !== "undefined" thì mới sử dụng. Có thể sửa thành như sau:

  ```html
  <ul class="nav flex-column">
    <li><a href="/">Trang chủ</a></li>

    <% if(typeof roleNames !== "undefined" && roleNames.includes("super admin"))
    { %>
    <li><a href="/users">Quản lý người dùng</a></li>
    <li><a href="/role">Quản lý Role</a></li>
    <% } else if(typeof permissionList !== "undefined" &&
    permissionList.includes("read")) {%>
    <li><a href="/users">Danh sách người dùng</a></li>
    <% } %>
    <a href="/auth/logout">Đăng xuất</a>
  </ul>
  ```

  Middleware `PermissionMiddleware` mới chỉ dùng để check quyền đọc được, các quyền khác chưa check được cho nên khi người dùng không có quyền, chỉ cần sửa url là vào được các routes sửa, xóa users, roles,...

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần check thêm các quyền add, update, delete.

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi34)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt.

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng rất tốt.

  **Format Code**

  `PermissionMiddleware` đang viết giống theo kiểu 1 hàm lấy tất cả các quyền. Nên viết theo kiểu middleware check người dùng có quyền truy cập hay không ở trong `PermissionMiddleware` luôn. Ví dụ như sau:

  ```javascript
  //Route user.js
  router.get('/', PermissionMiddleware('users.read'));

  //Middleware PermissionMiddleware.js
  const PermissionMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        req.flash('err', 'Không có quyền');
        res.redirect('/');
        return;
      } else {
        next();
      }
    };
  };
  ```

  Phần phân quyền người dùng thì phải check quyền update chứ không phải quyền read. Phần edit và delete role thì chỉ cần kiểm tra quyền update và delete, không nhất thiết phải kiểm tra quyền read(bị thừa).

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại middleware `PermissionMiddleware` cho đúng kiểu và check các quyền đúng.

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW34)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt

  Chưa xử lý ấn hiện module, action khi vào trang chủ. Nên xử lý ẩn các module quản lý người dùng, role đối với người dùng không có quyền.

  **Format Code**

  Nên gộp các middleware check create, delete, update, read lại với nhau thành 1 file. Có thể tham khảo đoạn sau:

  ```javascript
  //Route user.js
  router.get('/', PermissionMiddleware('users.read'));

  //Middleware PermissionMiddleware.js
  const PermissionMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        req.flash('err', 'Không có quyền');
        res.redirect('/');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xử lý ẩn hiện module, action khi vào trang chủ và nên gộp các file middleware lại với nhau.

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-34)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng rất tốt.

  Chưa xử lý kiểm tra quyền ở route roles.

  **Format Code**

  Nên gộp các middleware check add, delete, edit, read lại với nhau thành 1 function. Có thể tham khảo đoạn sau:

  ```javascript
  //Route user.js
  router.get('/', PermissionMiddleware('users.read'));

  //Middleware PermissionMiddleware.js
  const PermissionMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        res.redirect('/users');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xử lý thêm kiểm tra quyền ở route role.

## [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab34)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng rất tốt.

  Chưa xử lý kiểm tra quyền ở route roles.

  **Format Code**

  Nên gộp các middleware check haveAdd, haveDelete, haveEdit, haveRead lại với nhau thành 1 function. Có thể tham khảo đoạn sau:

  ```javascript
  //Route user.js
  router.get('/', PermissionMiddleware('users.read'));

  //Middleware PermissionMiddleware.js
  const PermissionMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        res.redirect('/users');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xử lý thêm kiểm tra quyền ở route role.

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi34)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chưa xử lý chức năng kiểm tra quyền người dùng.

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng rất tốt.

  **Format Code**

  `RoleMiddleware` đang viết giống theo kiểu 1 hàm lấy tất cả các quyền. Nên viết theo kiểu middleware check người dùng có quyền truy cập hay không ở trong `RoleMiddleware` luôn. Ví dụ như sau:

  ```javascript
  //Route user.js
  router.get('/', RoleMiddleware('users.read'));

  //Middleware RoleMiddleware.js
  const RoleMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        req.flash('err', 'Không có quyền');
        res.redirect('/');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý kiểm tra quyền người dùng ở các route role, user.

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVNB34)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng mới xử lý quyền thêm, đọc. Còn thiếu quyền sửa, xóa.

  Chưa xử lý ẩn hiện module, action tương ứng với vai trò người dùng.

  **Format Code**

  `CheckPermissionMiddleware` cần xử lý thêm quyền delete, update. Quyền read đang xử lý sai. Có thể sửa thành sau:

  ```javascript
  module.exports = {
    read: async function (req, res, next) {
      const permissions = await roleuser(req);
      if (!permissions.includes('users.read')) {
        res.redirect('/users');
        return;
      }
      next();
    },
  };
  ```

  Đoạn logic trong `if(req.user)` không để làm gì cả(đang bị thừa).

  Route role chưa xử lý kiểm tra quyền người dùng.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý thêm kiểm tra quyền người dùng và xử lý ẩn hiện module, action và xử lý lại quyền read.

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b34)

- [x] Bài 1:

  Bài làm tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý rất tốt ở route role. Tuy nhiên chưa xử lý kiểm tra quyền người dùng ở route user.

  Chưa xử lý ẩn hiện module, action tương ứng với vai trò người dùng.

  **Format Code**

  Format code rất tốt.

  Route user chưa xử lý kiểm tra quyền người dùng. Nếu không kiểm tra quyền thì khi người dùng thay đổi url là có thể truy cập được vào trang edit và thay đổi thông tin.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xử lý thêm ẩn hiện module, action và xử lý thêm kiểm tra quyền trong route user.

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_javascript/homeword/day34)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chức năng kiểm tra quyền người dùng xử lý tốt ở route role. Tuy nhiên chưa xử lý kiểm tra quyền người dùng ở route user.

  Chưa xử lý ẩn hiện module, action tương ứng với vai trò người dùng.

  **Format Code**

  `PermissionMiddleware` đang viết giống theo kiểu 1 hàm lấy tất cả các quyền. Nên viết theo kiểu middleware check người dùng có quyền truy cập hay không ở trong `PermissionMiddleware` luôn. Ví dụ như sau:

  ```javascript
  //Route user.js
  router.get('/', PermissionMiddleware('users.read'));

  //Middleware PermissionMiddleware.js
  const PermissionMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        req.flash('err', 'Không có quyền');
        res.redirect('/');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý thêm kiểm tra quyền người dùng ở route user, xử lý ẩn hiện module, action và viết lại middleware cho đúng.

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1/tree/main/BTVN_Day34)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Chức năng phân quyền sử dụng rất tốt.

  Chưa xử lý chức năng kiểm tra quyền người dùng.

  Xử lý ẩn hiện module, action tương ứng với vai trò người dùng tốt.

  **Format Code**

  `PerMiddleware` đang viết giống theo kiểu 1 hàm lấy tất cả các quyền. Nên viết theo kiểu middleware check người dùng có quyền truy cập hay không ở trong `PerMiddleware` luôn. Ví dụ như sau:

  ```javascript
  //Route user.js
  router.get('/', PerMiddleware('users.read'));

  //Middleware PerMiddleware.js
  const PerMiddleware = (permissions) => {
    return (req, res, next) => {
      //Xử lý lấy quyền của user
      if (!userPermissions?.includes(permissions)) {
        req.flash('err', 'Không có quyền');
        res.redirect('/');
        return;
      } else {
        next();
      }
    };
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý chức năng kiểm tra quyền người dùng và viết lại middleware cho đúng.
