# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi37)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý tốt.

  Gửi mail hàng loạt xử lý rất tốt. Tuy nhiên có thể xử lý thêm trường hợp gửi mail lỗi thì chạy gửi lại 1-2 lần nữa.

  **Format Code**

  Phần xử lý decode token và kiểm tra user có tồn tại hay không trong controller logout có thể viết thành 1 middleware rồi ở bên controller logout chỉ cần lấy token từ header và thêm vào blackList. Viết thế này có thể dùng middleware để kiểm tra user đăng nhập hay chưa.

  Đoạn code dưới trong controller logout hơi bị thừa, đoạn này nằm trong middleware authen thì đúng hơn:

  ```javascript
  const black_list = await black_lists.findOne({
    where: {
      accessToken: token,
    },
  });
  if (black_list) {
    res.status(401).json({
      status: 'error',
      message: 'accessToken does not exits',
    });
    return;
  }
  ```

  Phần cronjob xóa blackList để như hiện tại thì bị thừa. Nếu muốn xử lý xóa blackList thì nên để lâu hơn(có thể để nửa ngày, 1 ngày hoặc có thể xóa theo thời gian expire của token). Tránh trường hợp cái accessToken trong blackList chưa hết hạn mà đã xóa accessToken trong blackList. Ví dụ: accessToken đặt 1h hết hạn, người dùng ấn logout khi accessToken còn 50 phút nữa mới hết hạn, nếu set thời gian xóa accessToken trong blackList quá nhanh thì khi bị đánh cắp accessToken, người đánh cắp sẽ truy cập được vào tài khoản.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-37)

- [x] Bài 1:

  Bài làm chưa tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý rất tốt. Tuy nhiên, cần update refreshToken của user (Có thế set = null) tránh trường hợp có người dùng refreshToken để lấy accessToken mới.

  Phần xử lý xóa accessToken trong blackList khi hết hạn xử lý tốt.

  Gửi mail hàng loạt đang không sử dụng hàng đợi. Nên xử lý theo cách sau: Sau 20s lấy ra 1 job đầu tiên trong bảng QueueJob chạy xong job đó sau 20s nữa thì lại lấy ra 1 job để chạy.

  **Format Code**

Phần controller logout nên check `authorization` hợp lệ thì mới xử lý tiếp:

```javascript
const authorization = req.headers['authorization'];
if (!authorization) {
  return res.status(401).json({
    status: 'error',
    message: e.message,
  });
}
const token = authorization.replace('Bearer', '').trim();
//....
```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sử dụng hàng đợi xử lý gửi mail hàng loạt.

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW37)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý tốt.

  Nên xử lý xóa accessToken đã hết hạn trong blackList khi hết hạn hoặc xóa sau 1 thời gian nào đấy(ví dụ: 1 ngày, nửa ngày).

  Gửi mail hàng loạt xử lý rất tốt.

  **Format Code**

  Format code rất tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab37)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý tốt.

  Nên xử lý cronjob xóa accessToken trong blackList 1 khoảng thời gian lâu hơn (1 ngày có thể chạy 1-2 lần).

  Gửi mail hàng loạt xử lý rất tốt. Tuy nhiên nên xử lý thêm trường hợp gửi mail lỗi thì sẽ chạy lại gửi mail vài lần.

  **Format Code**

  Phần xử lý decode token và kiểm tra user có tồn tại hay không trong controller logout có thể viết thành 1 middleware rồi ở bên controller logout chỉ cần lấy token từ header và thêm vào blackList. Viết thế này có thể dùng middleware để kiểm tra user đăng nhập hay chưa.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi37)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý tốt.

  Nên xử lý xóa accessToken đã hết hạn trong blackList khi hết hạn hoặc xóa sau 1 thời gian nào đấy(ví dụ: 1 ngày, nửa ngày).

  Gửi mail hàng loạt xử lý rất tốt.

  **Format Code**

  Phần xử lý decode token và kiểm tra user có tồn tại hay không trong controller logout có thể viết thành 1 middleware rồi ở bên controller logout chỉ cần lấy token từ header và thêm vào blackList. Viết thế này có thể dùng middleware để kiểm tra user đăng nhập hay chưa.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi37)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý tốt.

  Nên xử lý xóa accessToken đã hết hạn trong blackList khi hết hạn hoặc xóa sau 1 thời gian nào đấy(ví dụ: 1 ngày, nửa ngày).

  Gửi mail hàng loạt xử lý rất tốt. Tuy nhiên nên xử lý thêm trường hợp gửi mail lỗi sẽ chạy lại job gửi mail đó(lặp lại khoảng 3 lần).

  **Format Code**

  Phần xử lý logout nên check `authorization` và `decode` có hợp lệ hay không rồi mới xử lý tiếp:

  ```javascript
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({
      status: 'success',
      message: 'Signed out successfully',
    });
  }
  const token = authorization.replace('Bearer', '').trim();

  const decode = jwt.decode(token);
  if (!decode) {
    return res.json({
      status: 'success',
      message: 'Signed out successfully',
    });
  }

  //....
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b37)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Action Feature**

  Phần logout và lưu accessToken vào blackList xử lý tốt.

  Nên xử lý xóa accessToken đã hết hạn trong blackList khi hết hạn hoặc xóa sau 1 thời gian nào đấy(ví dụ: 1 ngày, nửa ngày).

  Gửi mail hàng loạt xử lý rất tốt. Tuy nhiên nên xử lý thêm trường hợp gửi mail lỗi sẽ chạy lại job gửi mail đó(lặp lại khoảng 3 lần).

  **Format Code**

  Phần xử lý decode token và kiểm tra user có tồn tại hay không trong controller logout có thể viết thành 1 middleware rồi ở bên controller logout chỉ cần lấy token từ header và thêm vào blackList. Viết thế này có thể dùng middleware để kiểm tra user đăng nhập hay chưa.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.
