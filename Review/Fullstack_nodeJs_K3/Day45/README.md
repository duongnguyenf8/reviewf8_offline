# Dương review bài tập về nhà buổi 45 - Lớp K3

## [Đỗ Văn Khoa](https://github.dev/mrkhoadev/F8-Fullstack-K3/tree/main/Day44)

- [x] Bài 1

  Bài làm tốt

  Chưa deploy lên vercel nên khi đăng xuất chuyển hướng bị 404.

  Khi đăng nhập bằng facebook, git thì không lấy được email nhưng không xử lý mà bị trắng thông tin, nên đưa một placeholder vào để đỡ trống.

  **Code format**

  Các phần gọi handle có vẻ đang hơi rườm rà:

  ```js
  onClick={() => loginWithPopup()}
  <form onSubmit={(e) => handleSubmit(e, user.name)}>
  <!-- ... -->
  </form>
  ```

  Các phần token, Id nên đưa vào .env để bảo mật tốt hơn, tránh bị tấn công không đáng có:

  ```js
   domain="dev-zbpg0fkytxvd7t84.us.auth0.com"
   clientId="8NuA1nZPNifsqXcvifwjGa4ytxCdB1Qj"
  <!-- ... -->
  const serviceId = 'service_76c7sa7';
  const templateId = 'template_uevja1s';
  const userId = '36YVM9HzQD8FDBkBz';
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần chú ý hơn.

## [Nguyễn Quang Cường](https://github.dev/cuonggold2408/Fullxinach_K3/tree/main/auth_emailjs)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa gửi được email cho user.

  Chưa xử lý account facebook

  **Code format**

  Các phần gọi handle có vẻ đang hơi rườm rà:

  ```js
  onClick={() => loginWithPopup()}
  ```

  Các phần token, Id nên đưa vào .env để bảo mật tốt hơn, tránh bị tấn công không đáng có:

  ```js
  domain="dev-6gv5qqezjjoewmoq.us.auth0.com"
  clientId="1tNzDO3X3Nvxd5d4TOawtBatQwrM6tUe"
  <!-- ... -->
  const serviceId = "service_yp7xsuq";
  const templateId = "template_h8aanvs";
  const publicKey = "xy73vGYRwb07g7q6J";
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý hơn vào các case còn thiếu.

## [Phí Văn Đức](https://github.dev/PhiVanDuc/Offline-F8-K3/tree/main/Day-41-React)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa gửi được email cho user.

  Chưa deploy lên vercel

  Khi đăng nhập bằng facebook, git thì không lấy được email nhưng không xử lý mà bị trắng thông tin, nên đưa một placeholder vào để đỡ trống.

  **Code format**

  Các phần gọi handle có vẻ đang hơi rườm rà:

  ```js
  onClick={() => loginWithPopup()}
  ```

  Các phần token, Id nên đưa vào .env để bảo mật tốt hơn, tránh bị tấn công không đáng có:

  ```js
  domain="dev-jf8qdkhyv3d2q1ia.jp.auth0.com"
  clientId="NVigip6KXrTFjE9FYqmGjdk9cfxvpRiT"
  <!-- ... -->
  emailjs.send('service_ufasi8f', 'template_402vh2n', info, 'kpB-ZhiQNbQMAeBnw')
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý hơn.
