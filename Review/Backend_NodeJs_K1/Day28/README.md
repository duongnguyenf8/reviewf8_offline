# Nam review bài học viên lớp BE-k1

## [Đức Dũng Nguyễn](https://github.com/dungng1321/NodeJS-Offline-Exercise/tree/main/day28)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng gửi mail xác thực tài khoản dùng rất tốt

  **Send mail Feature**

  Tính năng gửi mail xác thực tài khoản dùng rất tốt

  **Format code**

  Nên chuyển phần tạo token và hàm verify token vào file common.js trong utils, khi cần dùng sẽ import(Giúp code clean hơn)

  Trong phần verify token, sau khi lấy ra cái id nên check id thỏa mãn thì mới tìm kiếm có user tồn tại trong database hay không. Có thể tham khảo đoạn sau:

  ```Javascript

    const { token } = req.params;
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    if(!id) {   //Nếu id không hợp lệ thì chuyển về trang login
      req.flash("msg", message.error.accountActivated);
      return res.redirect("/auth/login");
    }

    // find user by id
    const user = await userModel.findOne({ where: { id } });

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi28)

- [x] Bài 1:

  Bài làm tốt\*

  **Usage Feature**

  Tính năng gửi mail xác thực tài khoản dùng tốt

  **Send mail Feature**

  Link xác thực gửi về mail khi bấm vào xác thực thành công thì cần hiển thị thông báo xác thực thành công

  Mã token gửi về mail mỗi lần đăng ký phải tạo 1 mã token khác nhau. Có thể tạo bằng id của user. Không được để cùng 1 mã token rồi lưu email vào session. Có thể tham khảo thư viện jsonwebtoken theo cách làm sau:

  ```Javascript

    //Có thể tạo phần này trong folder utils, khi dùng thì import vào

    const jwt = require('jsonwebtoken');

    //Tạo mã token theo id
    const token = jwt.sign({ id: "user_id" }, 'secret',{ expiresIn: '1h' });
    //Phần { id: "user_id" } được gọi là payload, chứa thông tin mã hóa, thông tin dùng để kiểm tra
    //token khi xác thực tài khoản. 'secret' là mã bí mật khi tạo token, mã này là cố định, nên để vào
    //file .env(có thể đặt mã này tùy ý). expiresIn là thời hạn hết token, ở đây sau 1h token sẽ hết hạn

    //Xác thực token(dùng khi verify tài khoản)
    const decoded = jwt.verify(token, 'secret')
    //Mã token khi user gửi lên khi verify tài khoản

  ```

  Khi login nếu tài khoản chưa kích hoạt thì phải xử lý gửi link kích hoạt tài khoản luôn cho người dùng

  **Format code**

  Các mã như `clientId, CLIENT_SECRET, REDIRECT_URI,REFRESH_TOKEN` nên để trong file env, tránh bị lộ

  Mọi thông tin config trong phần gửi mail nên để trong file .env, để tránh bị lộ

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần thêm phần gửi link xác thực khi tài khoản đăng nhập chưa kích hoạt, chuyển tất cả thông tin xác thực gửi mail vào file .env

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-28)

- [x] Bài 1:

  Bài làm tốt\*

  **Usage Feature**

  Tính năng gửi mail xác thực tài khoản dùng tốt

  **Send mail Feature**

  Mã token gửi về mail nên để thời gian hết hạn token. Có thể tham khảo thư viện jsonwebtoken theo cách làm sau:

  ```Javascript

    //Có thể tạo phần này trong folder utils, khi dùng thì import vào

    const jwt = require('jsonwebtoken');

    //Tạo mã token theo id
    const token = jwt.sign(req.body, secret,{ expiresIn: '1h' });
    //expiresIn là thời hạn hết token, ở đây sau 1h token sẽ hết hạn

    //Xác thực token(dùng khi verify tài khoản)
    const decoded = jwt.verify(token, secret)
    //Mã token khi user gửi lên khi verify tài khoản

  ```

  Khi login nếu tài khoản chưa kích hoạt thì phải xử lý gửi link kích hoạt tài khoản luôn cho người dùng

  Phần active tài khoản nên check data lúc verify token hợp lệ thì mới tìm kiếm user trong database. Có thể tham khảo như sau:

  ```Javascript

    const { token } = req.params;
    if(!token) {
      req.flash("msg", "Token không hợp lệ");
      return res.redirect("/auth/login");
    }
    const data = jwt.verify(token, secret);
    if(!data) {
      req.flash("msg", "Token không hợp lệ");
      return res.redirect("/auth/login");
    }
    const user = await User.findOne({
      where: { email: data.email },
    });
    if(!user) {
      req.flash("msg", "User không tồn tại");
      return res.redirect("/auth/login");
    }
    User.update({ status: 1}, {
      where: {
        id: user.dataValues.id,
      },
    });
    req.session.login = true;
    req.session.userLogin = user.dataValues;
    res.redirect("/auth/login");

  ```

  **Format code**

  Mọi thông tin config trong phần gửi mail nên để trong file .env, để tránh bị lộ

  Phần tạo mã token có thể tạo trong folder utils, lúc nào dùng thì import.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên phần active tài khoản cần check trước khi verify token và lấy user từ database

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW27)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Tính năng gửi mail xác thực tài khoản dùng rất tốt

  **Send mail Feature**

  Khi login nếu tài khoản chưa kích hoạt thì phải xử lý gửi link kích hoạt tài khoản luôn cho người dùng

  Phần verify tài khoản nên check data lúc verify token hợp lệ thì mới cập nhật status user trong database. Có thể tham khảo như sau:

  ```Javascript

    try {
      const token = req.query.token;
      if(!token) {
        req.flash("msg", "invalid token");
        return res.redirect("/");
      }
      const decoded = jwt.verify(token, "afuzzycat");
      if(!decoded) {
        req.flash("msg", "invalid token");
        return res.redirect("/");
      }
      const customer = await User;
      await User.update(
        { status: 1 },
        {
          where: {
            email: decoded.email,
          },
        }
      );
      const customerInfo = await customer.findOne({
        where: { email: decoded.email },
      });
      res.cookie("auth", "logged");
      req.session.role = customerInfo.role;
      req.session.userId = customerInfo.id;
      req.flash("msg", "Tài khoản kích hoạt thành công");
      res.redirect("/customers");
    } catch (error) {
      req.flash("msg", "invalid token");
      res.redirect("/");
    }

  ```

  **Format code**

  Mã secret tạo token nên để trong file .env

  Mật khẩu chưa mã hóa

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt
