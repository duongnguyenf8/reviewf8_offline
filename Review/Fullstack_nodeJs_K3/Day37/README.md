# Dương review bài tập về nhà buổi 37 - Lớp K3

## [Cường](https://cuonggold2408.github.io/Fullxinach_K3/Day_37/)

- [x] Bài 1

  Bài làm chưa tốt

  **Các case còn sai**

  - Khi vào trang, check profile, nếu không được thì gọi refresh, nếu refresh không được thì phải xóa localStorage đi
    tuy nhiên trong bài chưa xử lý xóa LocalStorage đi.

  - Trước khi check profile, phải xem có accessToken không, nếu không có thì xử lý out ra đăng nhập lại.
    Tuy nhiên trong bài vẫn đang giữ lại token ở localStorage

  - Khi cấp lại accessToken đồng thời cso cấp lại refreshToken tuy nhiên không lưu refreshToken mới mà chỉ lưu lại accessToken mới, khiến cho khi refreshToken cũ hết hạn thì đăng xuất luôn, không giữ được phiên.

  - Khi post bài, đang lấy accessToken cũ, sau khi post, nếu 401 thì xử lý lấy accessToken và refreshToken mới rồi post lại

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, không hiển thị login hay register.

  **Các case còn thiếu**

  - Chưa xử lý lấy các bài viết
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.

## [Vương Trí Đông](https://dongvuong.github.io/f8-fullstack-k3/DAY37/index.html)

- [x] Bài 1

  Bài làm tốt

  **Các case còn thiếu**

  - Chưa xử lý lấy các bài viết
    Áp dụng infinity scroll trong bài cũ.

  - Chưa validate bài viết lỗi, khi bài viết lỗi mặc định là gọi lại refresh chứ không kiểm tra mã lỗi có phải 401 không khiến cho khi post bài viết lỗi thì liên tục bị gọi lại

## [Phí văn đức](https://phivanduc.github.io/Offline-F8-K3/Day-37-JS)

- [x] Bài 1

  Bài làm chưa tốt

  **Các case còn sai**

  - Khi vào trang, check profile, nếu không được thì gọi refresh, nếu refresh không được thì phải xóa localStorage đi
    tuy nhiên trong bài chưa xử lý xóa LocalStorage đi.

  - Trước khi check profile, phải xem có accessToken không, nếu không có thì xử lý out ra đăng nhập lại.
    Tuy nhiên trong bài vẫn đang giữ lại token ở localStorage

  - Khi cấp lại accessToken đồng thời có cấp lại refreshToken tuy nhiên không lưu refreshToken mới mà chỉ lưu lại accessToken mới, khiến cho khi refreshToken cũ hết hạn thì đăng xuất luôn, không giữ được phiên.

  - Khi post bài, đang lấy accessToken cũ, sau khi post, nếu 401 thì xử lý lấy accessToken và refreshToken mới rồi post lại

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, không hiển thị login hay register.

  **Các case còn thiếu**

  - Chưa xử lý lấy các bài viết
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.

## [Nguyễn Hữu Hưng](https://huuhungg.github.io/js-2/Day22/)

- [x] Bài 1

  Bài làm chưa tốt

  **Các case còn sai**

  Chưa hoàn thiện các case liên quan đến authen

  **Các case còn thiếu**

  - Chưa có validate ở phía client. Không nhập form hoặc sai định dạng đều post được và không có thông báo lỗi cho user

  - Chưa xử lý lấy các bài viết
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.
