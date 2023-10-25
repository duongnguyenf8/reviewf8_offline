# Nam review bài học viên lớp BE-k1

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVNB31)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng được nhưng chưa lưu được thông tin người dùng khi đăng nhập

  Chức năng đăng nhập bằng github sử dụng được nhưng chưa lưu được thông tin người dùng khi đăng nhập

  **Hidden Feature**

  Chưa lưu được thông tin tài khoản đăng nhập vào database khi đăng nhập bằng facebook, github

  **Special Feature**

  Chưa lấy được thông tin email khi đăng nhập bằng facebook để lưu vào cơ sở dữ liệu. Cần cấu hình lại passport-facebook như sau:

  ```javascript
  const FacebookStrategy = require('passport-facebook');
  module.exports = new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      enableProof: true,
      profileFields: ['email'],
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log('Facebook Profile: ', profile);
      //Xử lý kiểm tra email với cơ sở dữ liệu. Nếu tồn tại thì cho đăng nhập, chưa tồn tại thì thêm mới
      return cb(null, profile);
    }
  );
  ```

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý lại lấy thông tin và lưu vào cơ sở dữ liệu khi đăng nhập bằng facebook, github

## [Đức Dũng Nguyễn](https://github.com/dungng1321/NodeJS-Offline-Exercise/tree/main/day31)

- [x] Bài 1:

  Bài làm tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng tốt

  Chức năng đăng nhập bằng github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu được thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github, facebook

  **Special Feature**

  Chưa xử lý lấy thông tin email khi đăng nhập bằng facebook. Có thể thay đoạn cấu hình thành đoạn sau để lấy được email:

  ```javascript
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ['email'], //Thay scope->profileFields
    },
    {
      //Xử lý dữ liệu với database
    }
  );
  ```

  Xử lý rất tốt thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần xử lý lại phần lấy email khi đăng nhập bằng facebook

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-31)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng rất tốt

  Chức năng đăng nhập bằng github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu được thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github, facebook

  **Special Feature**

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng facebook để lưu vào cơ sở dữ liệu

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_javascript/homeword/day31)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng rất tốt

  Chức năng đăng nhập bằng mạng xã hội github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu được thông tin tài khoản đăng nhập vào database khi đăng nhập bằng facebook

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github

  **Special Feature**

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng facebook để lưu vào cơ sở dữ liệu

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi31)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng rất tốt

  Chức năng đăng nhập bằng mạng xã hội github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng facebook

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github

  **Special Feature**

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng facebook để lưu vào cơ sở dữ liệu

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW31)

- [x] Bài 1:

  Bài làm tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng rất tốt

  Chức năng đăng nhập bằng mạng xã hội github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng facebook

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github

  **Special Feature**

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng facebook nhưng chưa xử lý lưu vào cơ sở dữ liệu

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần xử lý lưu email khi đăng nhập bằng facebook

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB31)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng rất tốt

  Chức năng đăng nhập bằng github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu được thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github, facebook

  **Special Feature**

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng facebook để lưu vào cơ sở dữ liệu

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github để lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-31)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Usage Feature**

  Chức năng đăng nhập bằng mạng xã hội facebook sử dụng rất tốt

  Chức năng đăng nhập bằng mạng xã hội github sử dụng rất tốt

  **Hidden Feature**

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng facebook

  Đã xử lý lưu thông tin tài khoản đăng nhập vào database khi đăng nhập bằng github

  **Special Feature**

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng facebook nhưng chưa xử lý lưu vào cơ sở dữ liệu

  Xử lý rất tốt lấy thông tin email khi đăng nhập bằng github nhưng chưa xử lý lưu vào cơ sở dữ liệu

  **Format Code**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý lưu email vào database khi đăng nhập github, facebook
