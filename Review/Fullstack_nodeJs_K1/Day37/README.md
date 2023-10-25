# Dương review bài tập về nhà buổi 37 - Lớp K1

## [Dương Hiệp](https://duonghiep416.github.io/duonghiep_f8_fullstack/Day37/)

- [x] Bài 1

  Bài làm tốt

  **Các case còn sai**

  - Khi vào trang, check profile, nếu không được thì gọi refresh, nếu refresh không được thì phải xóa localStorage đi
    tuy nhiên trong bài chưa xử lý xóa LocalStorage đi.

  - Trước khi check profile, phải xem có accessToken không, nếu không có thì xử lý out ra đăng nhập lại.
    Tuy nhiên trong bài vẫn đang giữ lại token ở localStorage

  - Khi cấp lại accessToken đồng thời cso cấp lại refreshToken tuy nhiên không lưu refreshToken mới mà chỉ lưu lại accessToken mới, khiến cho khi refreshToken cũ hết hạn thì đăng xuất luôn, không giữ được phiên.

  - Khi post bài, đang lấy accessToken cũ, trước khi post nên check xem còn auth không, nếu không thì cấp lại access mới sau đó lấy access mới để post bài

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, không hiển thị login hay register.

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Khi vào trang login, chưa rõ mục đích khi check authentication

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.

## [Nguyen Xuan Tuan Anh](https://xuananh2212.github.io/js-fullstack/day37)

- [x] Bài 1

  Bài làm rất tốt

  **Các case còn sai**

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, hiển thị tên user là undefined.
    Sau lần này, không xử lý logout nên lần tiếp theo dù bị văng đăng xuất rồi nhưng bị lưu token, phải thêm lần nữa mới xóa

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

  - Ở trang login chưa check đủ 8 ký tự mật khẩu như ở bên register

    **Các case chưa tốt**

    - Khi post bài, render lại cả trang nên đang bị trắng trang trong 1 lúc đến khi data trả về.

## [Nguyen Xuan Tuan Anh](https://xuananh2212.github.io/js-fullstack/day37)

- [x] Bài 1

  Bài làm rất tốt

  **Các case còn sai**

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, hiển thị tên user là undefined.
    Sau lần này, không xử lý logout nên lần tiếp theo dù bị văng đăng xuất rồi nhưng bị lưu token, phải thêm lần nữa mới xóa

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

  - Ở trang login chưa check đủ 8 ký tự mật khẩu như ở bên register

    **Các case chưa tốt**

    - Khi post bài, render lại cả trang nên đang bị trắng trang trong 1 lúc đến khi data trả về.

    - Chưa xử lý break-word khiến cho giao diện bị vỡ.

## [Nguyen Thi Hong Ha](https://ha752002.github.io/f8-fullstack-k2/Ex_Javascript/day37/)

- [x] Bài 1

  Bài làm tốt

  **Các case còn sai**

  - Khi vào trang, check profile, nếu không được thì gọi refresh, nếu refresh không được thì phải xóa localStorage đi
    tuy nhiên trong bài chưa xử lý xóa LocalStorage đi.

  - Trước khi check profile, phải xem có accessToken không, nếu không có thì xử lý out ra đăng nhập lại.
    Tuy nhiên trong bài vẫn đang giữ lại token ở localStorage

  - Khi cấp lại accessToken đồng thời cso cấp lại refreshToken tuy nhiên không lưu refreshToken mới mà chỉ lưu lại accessToken mới, khiến cho khi refreshToken cũ hết hạn thì đăng xuất luôn, không giữ được phiên.

  - Khi post bài, đang lấy accessToken cũ, trước khi post nên check xem còn auth không, nếu không thì cấp lại access mới sau đó lấy access mới để post bài

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, không hiển thị login hay register.

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.

## [Le Van Trung](https://trungdeptraii.github.io/Le_Van_Trung_Day37/)

- [x] Bài 1

  Bài làm chưa tốt

  **Các case còn sai**

  Chưa checkAuth khi mới vào trang hoặc mới post bài.

## [Pham Tuan](https://phamtuan162.github.io/phamtuan-nodejs-01/Buoi37)

- [x] Bài 1

  Bài làm chưa tốt

  **Các case còn sai**

  - Khi vào trang, check profile, nếu không được thì gọi refresh, nếu refresh không được thì phải xóa localStorage đi
    tuy nhiên trong bài chưa xử lý xóa LocalStorage đi.

  - Khi cấp lại accessToken đồng thời có cấp lại refreshToken tuy nhiên không lưu refreshToken mới mà chỉ lưu lại accessToken mới, khiến cho khi refreshToken cũ hết hạn thì đăng xuất luôn, không giữ được phiên.

  - Khi post bài, đang lấy accessToken cũ, trước khi post nên check xem còn auth không, nếu không thì cấp lại access mới sau đó lấy access mới để post bài

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, không hiển thị login hay register.
    Bị call lại rất rất rất nhiều lần.

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.

    - Nên xử lý để sau khi đăng ký, khi đăng nhập lưu lại được email và sử dụng email đó, user chỉ cần nhập lại mật khẩu để confirm

## [Do Hoai Nam](https://oaihman25.github.io/btvn/day37/index.html)

- [x] Bài 1

  Bài làm chưa tốt

  **Các case còn sai**

  - Chưa đính kèm header Authorization lên các req cần thiết

  - Chưa xử lý tốt khi bấm register xong quay lại login thì bấm register vẫn bị submit.

  - Có một request /blogId không rõ là gì.

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

  - Chưa xử lý width của input, khiến cho bị giật.

  - Chưa xử lý tốt style, các style input rất khó đọc.

  - Chưa thông báo lỗi cho user khi đăng nhập, đăng ký bị sai.

  - Chưa xử lý disabled khiến cho user bấm rất nhiều lần vào login

    **Các case chưa tốt**

    Thiếu Tất cả các case!

## [Luu Anh Quan](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day37/index.html)

- [x] Bài 1

  Bài làm rất tốt

  **Các case còn sai**

  - Khi vào trang, check profile, nếu không được thì gọi refresh, nếu refresh không được thì phải xóa localStorage đi
    tuy nhiên trong bài chưa xử lý xóa LocalStorage đi.

  - Trước khi check profile, phải xem có accessToken không, nếu không có thì xử lý out ra đăng nhập lại.
    Tuy nhiên trong bài vẫn đang giữ lại token ở localStorage

  - Khi cấp lại accessToken đồng thời cso cấp lại refreshToken tuy nhiên không lưu refreshToken mới mà chỉ lưu lại accessToken mới, khiến cho khi refreshToken cũ hết hạn thì đăng xuất luôn, không giữ được phiên.

  - Khi post bài, đang lấy accessToken cũ, trước khi post nên check xem còn auth không, nếu không thì cấp lại access mới sau đó lấy access mới để post bài

  - Khi post bài trong đúng lúc refresh hết, xử lý để đăng xuất ra và có thông báo đăng nhập lại
    Như trong bài sau khi post bài mà refresh hết hạn thì lỗi luôn, không hiển thị login hay register.

  **Các case còn thiếu**

  - Chưa xử lý lấy hết các bài viết, chỉ lấy được 10 bài đầu
    Áp dụng infinity scroll trong bài cũ.

    **Các case chưa tốt**

    - Khi vào trang login, chưa rõ mục đích khi check authentication

    - Xử lý chưa tốt ở đoạn cấp lại access và refresh mới.
