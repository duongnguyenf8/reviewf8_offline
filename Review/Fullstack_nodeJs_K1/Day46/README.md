# Dương review bài tập về nhà buổi 46 - Lớp K1

## [Nguyen Xuan Tuan Anh](https://github.dev/xuananh2212/js-fullstack/tree/main/day46/shop2)

- [x] Bài 1

  Chưa check trường hợp nhập page số âm

  Khi cố tình nhập đường dẫn đến page lớn hơn maxPage, không tự redirect về mà ở trang đó, không call được product

  Khi notFoundPage, nên xử lý để redirect về Home hoặc nên có nút cho user bấm về trang chủ.

  Không nên báo nhiều toast quá khiến cho UI bị rối, nếu product đã có trong cart rồi chỉ cần hiển thị một cách nhỏ nhỏ ở phía góc là được.

  Khi xoá nên có confirm.

  Trang detail nên có thêm phần slug để url thân thiện hơn(Friendly URL)

  **Code format**

  Các đoạn logic boolean có thể sử dụng truthy luôn:
  https://f8-offline-day46.vercel.app/detail/name~may-tinh-mitsubishi/6551a7297f15f9c0a42d1e70

  ```js
    {
        [styles.hidden]: carts.length === 0 ? true : false
    }
  ```

  Các phần store redux rất tốt.

## [Duong Hiep](https://github.dev/duonghiep416/duonghiep_f8_fullstack/tree/main/Day46-Shopping-Cart)

- [x] Bài 1

  Khi cố tình nhập đường dẫn đến page lớn hơn maxPage, không tự redirect về mà ở trang đó, không call được product

  Không vào được trang notFound do để route \* trên đầu, vì vậy tất cả đều đi vào trang "/:page"

  Khi không nhập đúng đường dẫn thì sẽ call NaN, ở trường hợp này data vẫn trả về nhưng nếu không thì bài bị lỗi.

  Không nên báo nhiều toast quá khiến cho UI bị rối, nếu product đã có trong cart rồi chỉ cần hiển thị một cách nhỏ nhỏ ở phía góc là được.

  Trang detail nên có thêm phần slug để url thân thiện hơn(Friendly URL)

  Khi xoá nên có confirm.

  **Code format**

  Khi sang trang, không nên scroll smooth sẽ gây rối mắt cho user:

  ```js
  document.documentElement.scroll({
    top: 0,
    behavior: 'smooth',
  });
  ```

  Nên tách store, reducer, actions ra thành các file riêng biệt để dễ quản lý hơn.

  Nếu productsCart không phải đúng dạng JSON thì bài làm sẽ bị lỗi:

  ```js
  const initState = {
    productsCart: localStorage.getItem('productsCart')
      ? JSON.parse(localStorage.getItem('productsCart'))
      : [],
    loading: false,
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa viết, phân tách tốt phần store của redux

## [Nguyen Thi Hong Ha](https://github.dev/ha752002/f8-fullstack-k1/tree/main/Ex_ReactJs/day46)

- [x] Bài 1

  Chưa check trường hợp nhập page số âm

  Khi bấm vào logo để về trang chủ, chưa chuyển lại số trang ở nav phân trang.

  Khi cố tình nhập đường dẫn đến page lớn hơn maxPage, không tự redirect về mà ở trang đó, không call được product

  Khi không nhập đúng đường dẫn ở /home/ không redirect về hoặc sang notFound, ở trường hợp này data vẫn trả về nhưng nếu không thì bài bị lỗi.

  Khi notFoundPage, nên xử lý để redirect về Home hoặc nên có nút cho user bấm về trang chủ.

  Không nên báo nhiều toast quá khiến cho UI bị rối, nếu product đã có trong cart rồi chỉ cần hiển thị một cách nhỏ nhỏ ở phía góc là được.

  Khi bấm quá sản phẩm vẫn có thể bấm cộng tiếp được mặc dù quantity <= 0

  Khi xoá sản phẩm chưa có confirm

  Khi ở cart chưa thể sang trang detail.

  Khi ở cart mà bấm go home thì bị load lại trang.

  **Code format**

  Khi loading product không hiển thị component Loading mà là chữ loading.

  Bản thân NavLink đã là thẻ a, không cần bọc thẻ a ở ngoài.

  Phần slug này nên tách thành một function để khi sử dụng ở nhiều nơi sẽ tiện lợi và đồng bộ hơn:

  ```js
  `/detail/${removeAccents(product.name).replaceAll(' ', '-')}/${product._id}`;
  ```

  Các thành phần của redux khởi tạo và sử dụng rất tốt.

## [Duong Quoc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006/tree/main/react/btnvn_46/shop_2)

- [x] Bài 1

  Chưa có rewrite URL khiến cho khi reload thì bị 404: **Đã fix**

  Chưa xử lý các trang 404

  Không nên báo nhiều toast quá khiến cho UI bị rối, nếu product đã có trong cart rồi chỉ cần hiển thị một cách nhỏ nhỏ ở phía góc là được.

  Khi bấm quá sản phẩm vẫn có thể bấm cộng tiếp được mặc dù quantity <= 0

  Chưa có phân trang

  Các case khác không test được vì chưa rewrite URL nên chỉ có thể nhìn code để đoán.

  **Code format**

  Chưa dùng action creator khiến nếu mỗi lần càn thay đổi thì sẽ rất mệt.

  Nên chia các phần page thành folder pages, thay vì để trong components.

  Các case liên quan đến phân trang chưa làm.

## [Luu Anh Quan](https://github.dev/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day46)

- [x] Bài 1

  Chưa check trường hợp nhập số âm. **Đã fix**

  Vì lưu detail vào localStorage để sử dụng ở trang detail thay vì fetching nên khi vào thẳng link sẽ bị lỗi.

  **Code format**

  Vì sử dụng JSON.parse khi sử dụng get từ localStorage ra luôn, nếu như không phải JSON thì sẽ trắng trang:

  ```js
  const INIT_STATE = {
    carts: JSON.parse(localStorage.getItem('cart')) || [],
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* Tuy nhiên có một số case đặc biệt thì xử lý chưa được tốt.
