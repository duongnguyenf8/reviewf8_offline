# Dương review bài tập về nhà buổi 43 - Lớp K2

## [Nguyên JS](https://github.dev/NguyenJs6868/f8k2FullkBtvn/blob/main/Day_43_Cart_React/shop-react/src/App.jsx)

- [x] Bài 1

  Bài làm không tốt

  Bài tập chưa hoàn thiện

  Chưa call api để render ra giao diện, chưa làm một chức năng nào.

## [Nguyễn Đại Thế](https://github.dev/daithehh04/fullstack/tree/main/day43/shop)

- [x] Bài 1

  Bài làm tốt

  Khi nhập sai định dạng email, có thông báo nhưng không remove loading khiến trang web xoay mãi.

  Sau khi thanh toán, chưa trừ số lượng trên mảng products.

  Khi unauthorize không trở về trang login mà vẫn cho vào trong, phải reload lại mới thoát.

  Khi bị logout, chưa xoá cart, khi vào bằng account khác vẫn có cart cũ.

  Khi render ra form nhập email, thực chất chỉ là một lớp phủ, các thành phần product và giao diện cart vẫn hiển thị ở dưới.

  **Code format**

  Do phần hiển thị ở Home, các element thực ra chỉ ẩn chứ không phải không được render

  ```jsx
  return (
    <div className='app'>
      {!apiKey && <Login setLoading={setLoading} setApiKey={setApiKey} />}
      <div className='container'>
        <h1 className='title'>Welcome to shop!</h1>
        <div className='list-product'>
          {products.map((product, index) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
        <TableCart setLoading={setLoading} />
      </div>
      {loading && <Loading />}
      <ToastContainer autoClose={3000} />
    </div>
  );
  ```

  Các đoạn code format, cấu trúc rất tốt.
