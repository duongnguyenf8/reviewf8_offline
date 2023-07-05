# Dương đánh giá bài học viên

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_5)

- [x] [Bài 1]: Bài làm tốt

Khi focus vị trí tooltip hơn gần.

Thẻ `<span>` `class ="xmark fa-solid fa-xmark"` trong thẻ `label for= "user-phone"` thừa (trong thiết kế không có icon star)

Thẻ `<button>` không đúng font chữ Lato, font đang nhận giá trị là `font-family: Arial`

---

- [x] [Bài 2]: Bài làm rất tốt \*

Khoảng cách giữa các dòng của thẻ p hơi gần lên tăng `line-height`

---

- [x] [Bài 3]: Bài làm tốt \*

Thiếu khoảng cách sử thẻ h2 với p.

- Đề xuất sử dụng một đoạn css

```css
.services p {
  margin-top: 18px;
  font-size: 1.2rem;
  opacity: 0.8;
}
```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm hầu hết đều rất tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_05)

- [x] [Bài 1]:

Thẻ `<textarea>`: chữ gần với đường viền nên thêm padding-top và thuộc tính reset: none.

```css
textarea {
  padding-top: 10px;
  reset: none;
}
```

Thẻ `<button>` không giống với thiết kết width ngắn, chữ 'SEND' không được căn giữa.

Thẻ `<input>`, `<button>` không phải `font-family: Lato`.

```css
body {
  font-family: "Lato", sans-serif;
}
```

Thẻ `<button>`, `<input>` không bị kế thừa từ `font-family` của thẻ body

Đề xuất sửa thành:

```css
body,
button,
input {
  font-family: "Lato", sans-serif;
}
```

---

- [x] [Bài 2]: Bài làm rất tốt \*

Khoảng cách giữa các dòng của thẻ p hơi gần lên tăng `line-height`.

---

- [x] [Bài 3]: Bài làm rất tốt \*

Thẻ `<p>` `class="services-desc"` font chữ hơi nhỏ lên tăng font-size.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm hầu hết đều rất tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Tuan Kiet Hoang](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-05)

- [x] [Bài 1]: Bài làm tốt

Vị trí tooltip xa so với thiết kế.

Thẻ `<button>`: khoảng cách giữa chữ và đường viền hơi gần

Thẻ `<input>`, `<button>` không phải `font-family: Lato`.

```css
body {
  font-family: "Lato", sans-serif;
}
```

Thẻ `<button>`, `<input>` không bị kế thừa từ `font-family` của thẻ body

Đề xuất sửa thành:

```css
body,
button,
input {
  font-family: "Lato", sans-serif;
}
```

---

- [x] [Bài 2]: Bài làm tốt \*

Thẻ `<p>`: `font-size` hơn nhỏ

---

- [x] [Bài 3]:

3 thẻ div trong thẻ div có `class=container` không nằm trên 1 hàng

Đề xuất sửa thành:

```css
.container {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.photography,
.videography,
.web {
  display: inline-flex;
  height: 500px;
  width: 400px;
  box-shadow: 0 0 12px #ccc;
  align-items: center;
  flex-direction: column;
  gap: 25px;
}
```

Và bỏ selector.

```css
.photography {
  margin-left: 18%;
}
```

- [x] Đánh giá chung bài tập về nhà: Bài làm hầu hết đều tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Tuan Kiet Hoang](https://github.com/Vietha22/f8_fullstack_k4/tree/main/Day_5)

- [x] [Bài 1]: Bài làm tốt \*

Thẻ `<textarea>`: thêm thuộc tính reset: none.
Thẻ `<input>`, `<button>` không phải `font-family: Lato`.
mà dù

```css
body {
  font-family: "Lato", sans-serif;
}
```

Thẻ `<button>`, `<input>` không bị kế thừa từ `font-family` của thẻ body

Đề xuất sửa thành:

```css
body,
button,
input {
  font-family: "Lato", sans-serif;
}
```

---

- [x] [Bài 2]: Bài làm rất tốt \*

---

- [x] [Bài 3]: Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm hầu hết đều rất tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Trung Kiên](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_5)

- [x] [Bài 1]:

Tooltip không không với thiết kế.

Khi focus vào thẻ `<select>`, `<textarea>` không hiện thị tooltip.

Thẻ `<textarea>`: thêm thuộc tính reset: none.

Không có icon star.

Thì focus: không hiện thị icon times ( dấu `X`).

Thẻ `<input>`: khoảng chữ trong placeholder gần với đường viền thêm padding-left vào thẻ `<input>`.

Sai font thẻ tiêu đề.

```css
h1 {
  font-family: Florence, cursive;
  font-size: 50px;
}
```

Thẻ `<span>` có `class=text` cũng sai `font-family` .

Thẻ `<button>`, `<input>` sai `font-family`

Nút checkbox không giống với thiết kế.

---

- [x] [Bài 2]: Bài làm tốt

```html
<span>How to set random colors ?</span>
<span>How to use theme colors and new theme color ?</span>
<span>How to change icon?</span>
```

Vì đây là các tiêu đề của nên đặt các thẻ trên bằng thẻ `heading`, có thể là `<h3>`

---

- [x] [Bài 3]: Bài làm tốt \*

Thiếu thuộc tính `box-shaw` cho các thẻ div có `class="box"`, `class ="item"`, `class ="contact"`

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý nhiều hơn vào giao diện mẫu để bài làm chính xác hơn.

---
