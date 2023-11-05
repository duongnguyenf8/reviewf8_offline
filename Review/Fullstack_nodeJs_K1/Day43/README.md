# Dương review bài tập về nhà buổi 43 - Lớp K1

## [Nguyễn Thị Hồng Hà](https://github.dev/ha752002/f8-fullstack-k1/tree/main/Ex_ReactJs/day42)

- [x] Bài 1

  Bài làm rất tốt\*

  Chưa validate email trước khi gửi req lên server.

  Khi thêm vào giỏ hàng, chưa giảm số lượng còn lại đi

  Trước mối req order gửi đi đều có một req check profile. Điều đó khiến công việc order hoàn thành chậm hơn và tốn thêm nhiều lượt req hơn. Như vậy là không cần thiết, khi order gửi lên, nếu 401 thì mới xử lý email lại, sau đó phải tiếp tục gửi req order lên thay vì không làm gì tiếp theo như ở trong bài.

  **Code format**

  Nên bật StrictMode ở trong `main.jsx` lên để tránh các lỗi không đáng có.

  Cart chỉ là một component nhỏ trong page home, nên xử lý chia lại folder Home và đưa context của cart vào Home.

  Folder src/components chỉ được sử dụng cho các component dùng chung ở nhiều page, nhiều thành phần, vì vì vậy phần CartList nên đưa vào pages/Cart/CartList. và các ProductItem, ProductList nên cấu trúc lại đưa vào pages/Home

  ```
  src
  │
  ├── components
  │   └── Loading
  └── pages
      └── Home
          ├── components
          │   ├── Cart
          │   │   └── CartList
          │   ├── ProductItem
          │   └── ProductList
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý lại một số logic nhỏ như phần tăng, giảm số lượng còn lại, validate Email phía client...

## [Duong Hiep](https://github.dev/duonghiep416/duonghiep_f8_fullstack/tree/main/Day43-Shopping-Cart)

- [x] Bài 1

  Khi chưa lưu email, apiKey nhưng vào trang đã call profile là chưa đúng logic

  Chưa lưu lại cart ở phía client khiến mỗi lần reload là mất hết giỏ hàng.

  Chưa thay đổi số lượng trên UI khi tăng, giảm, thêm số lượng ở giỏ hàng

  **code format**

  Chưa rõ ý đồ khi sử dụng 2 CartList ở App

  Các đoạn code tách Context khá tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\*

## [Xuan Anh](https://github.dev/xuananh2212/js-fullstack/tree/main/day43)

- [x] Bài 1

  Chưa validate Email phía client.

  Khi nhập Email khác lần đầu(Đăng nhập tài khoản khác) vẫn đang lưu lại cart

  Chưa hiển thị số lượng còn lại trên UI

  **Code format**

  Code phân tách tốt. Tuy nhiên có phần hơi rời rạc.

  Phần xử lý context rất tốt.

## [Luu Anh Quân](https://github.dev/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day43)

- [x] Bài 1

  Đang bị re-render khi thông báo toast

  Chưa xử lý trang thái loading khi submit order, khiến cho nếu bấm nhanh thì sẽ bị post nhiều order cùng một lúc.

  Chưa xử lý giảm số lượng product khi thêm vào giỏ hàng.

  Khi submit xong, chưa trừ số lượng sản phẩm trên UI

  **Code format**

  Sử dụng redux rất tốt.
