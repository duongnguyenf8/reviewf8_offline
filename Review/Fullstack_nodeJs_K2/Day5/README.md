# Quân test bài học viên Fullstack NodeJS Day 5

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/tree/master/day5)

    Sớm nhất

---

- [x] Bài 1: Bài làm tốt

  Chưa giống với bản mẫu cần làm chỉn chu hơn.

  Khoảng cách giữa title và text không giống với bản mẫu.

  Phần icon của textarea cần xử lý thêm.

  Icon của thẻ select chưa giống với bản mẫu, hiện đang để là mặc định.

  Khi focus vào các thẻ input chưa đổi icon thành x như đề bài yêu cầu.

  Khi check vào checkbox cần căn chỉnh sao cho dấu tích cân đối hơn.

---

- [x] Bài 2: Bài làm tốt \*

  Nên sử dụng thuộc tính `cursor` để thay đổi thành `pointer` giúp cho trải nghiệm người dùng tốt hơn khi di chuyển vào các tiêu đề.

  Phần thể hiện đoạn text thì nên sử dụng thẻ `<p>` thay cho `<div>`.

  ```html
  <div class="paragraph ..._text">...</div>
  ```

  Sai chính tả `content saecond_content` nên sửa thành `content second_content`.

  Khoảng cách giữa `.paragraph` và `.item_content` chưa đúng với bản mẫu.

  Đặt tên className chưa hơp lý, tiêu đề của một đoạn văn thì nên đặt className là `title_content` thay vì `item_content`.

---

- [x] Bài 3: Bài làm tốt \*

  Nên reset css để loại bỏ các css mặc định của trình duyệt

  ```css
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  ```

  Phần tử có class `layout_content` khi giãn màn hình rất xấu.

  Nên căn giữa `.layout_content` theo section. sau đó set max-width cho `.layout_content`.

  Bổ sung hiệu ứng shadow cho từng khối để giống với bản mẫu.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm tốt, tuy nhiên cần tuân thủ theo bản mẫu về khoảng cách và độ lớn của các phần tử. Một số chỗ chưa chỉnh chu, cần khắc phục.

---

## [Bùi Quang Trường](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day5)

---

- [x] Bài 1: Bài làm rất tốt \*

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm rất tốt \*

  Nên cho thêm thuộc tính `transition` để khi hover vào mỗi item sẽ mượt mà hơn không bị giật layout.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm nhìn chung rất tốt, chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Tiến Đạt](https://github.com/phamtiendat18/Fullstack-K2/tree/main/Day_05)

---

- [x] Bài 1: Bài làm chưa tốt

  Phần input của your name khi focus vào chưa hiển thị field như yêu cầu đề bài, các field hiện lên vẫn chưa đúng. Và khi focus chưa set `background-color` của icon thành màu đen.

  Nên thêm thuộc tính `require` vào các thẻ input để yêu cầu người dùng cần nhập thông tin.

  Cần thêm `outline: none` để loại bỏ outline mặc định của input.

  Các thuộc tính lặp lại ở css nên sử dụng cách viết kết hợp selector để tránh lặp đi lặp lại một số thuộc tính giống nhau.

  Icon \* và icon x vẫn chưa hiện đúng khi focus vào input theo yêu cầu đề bài.

  Thẻ `textarea` chưa xử lý `placeholder`.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm rất tốt \*.

  Chú ý về set width của từng khối là 30% ở đây tỉ lệ với màn hình do đó nếu màn hình to thì width sẽ thay đổi làm cho bố cục bị kéo dãn không tốt cho UI.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm tốt tuy nhiên bài 1 chưa được tốt lắm cần hoàn thiện hơn.

---

## [Nguyễn Đại Thế](https://github.com/daithehh04/fullstack/tree/main/day5)

---

- [x] Bài 1: Bài làm tốt \*.

- Chưa đổi font chữ placeholder của thẻ textarea.

- Phần Subject cần để type là select chứ không phải text.

* Nên có thêm thuộc tính require ở các ô input để validate cho người dùng thì tốt hơn.

---

- [x] Bài 2: Bài làm rất tốt \*.

- Nên cho icon + và - vào trong thẻ label để khi nhấn vào icon cũng có thể mở nội dung.

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm nhìn chung rất tốt, chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nguyễn Thị Hồng Hà](https://github.com/ha752002/f8-fullstack-k2/tree/main/Exercise/Ex_24-6)

---

- [x] Bài 1: Bài làm chưa tốt.

- Phần tiêu đề không đúng font "Lobster", Phần text ngoài thẻ span cũng chưa đúng font như yêu cầu đề bài.

- Xử lý phần placeholder của các thẻ input và thẻ textarea chưa được tốt về `font-size`, `color`, khoảng cách với các lề. Cần cải thiện thêm.

- Phần icon biểu tượng của input subject chiều cao đang cao hơn chiều cao của input làm UI không đẹp, không chỉnh chu.

- Phần popup cần cách một khoảng so với input như bản mẫu sẽ đẹp hơn.

- Chưa làm chức năng khi focus vào input đổi icon \* thành icon x ở các ô input.

- Nên thay đổi icon mặc định của thẻ select cho giống với bản mẫu.

* Nên có thêm thuộc tính require ở các ô input để validate cho người dùng thì tốt hơn.

* Nên reset css để loại bỏ các css mặc định của trình duyệt

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
```

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm tốt tuy nhiên phần xử lý input ở bài 1 chưa chỉnh chu, cần dành thời gian hoàn thiện hơn.

---

## [Nguyễn Minh Việt](https://github.com/nguyenminhviettt/F8_Fullstack_K2/tree/main/day_05)

---

- [x] Bài 1: Bài làm chưa tốt.

- Phần input `yourname` hiện đang để đường viền và màu của icon biểu tượng như lúc `hover` vào, điều này không đúng so với bản mẫu, chỉ khi `hover` mới có hiệu ứng như vậy. Cần chỉnh sửa.

- Phần `textarea` cần xử lý tốt hơn chỗ icon \* và icon x.

- Icon \* và icon x vẫn chưa hiện đúng và các field cũng chưa đúng chức năng khi `focus` vào `input` theo yêu cầu đề bài.

- Các field khi `focus` vào hiện lên nếu để `opacity` thì nó vẫn sẽ chiếm không gian điều đó nó sẽ che đi phần `input` ở trên làm cho người dùng không nhấn vào được gây cảm giác khó chịu. Đề xuất sử dụng thuộc tính `display` thay cho `opacity`.

* Việc dùng thẻ `input` có type là checkbox thì không cần phải icon check mà mặc định `checkbox` khi check vào đã có hiệu ứng check rồi. Việc thêm icon check vào mà không ẩn đi làm cho người dùng hiểu là đã được check mặc dù không muốn. Cần xử lý tốt hơn.

- Nên có thêm thuộc tính `require` ở các ô input để `validate` cho người dùng thì tốt hơn.

---

- [x] Bài 2: Bài làm tốt.

  Khi nhấn vào tiêu đề để hiện content chưa đổi icon + thành - như yêu cầu của đề bài.

  Nên cho icon + và icon - vào thẻ label để khi click vào icon vẫn có thể mở content như mong muốn.

  Một số thuộc tính css lặp lại nhiều lần nên kết hợp cách viết gộp selector để tránh tình trạng lặp nhiều đoạn css giống nhau.

  Phần content là thể hiện một đoạn text. Nên sử dụng thẻ `<p>` thay cho `<div>`.

  ```html
  <div class="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto natus
    neque autem hic eveniet pariatur ea. Excepturi, officiis animi? Voluptate
    recusandae magni cupiditate, tenetur at nisi aspernatur consectetur illum.
  </div>
  ```

  Nên sửa thành

  ```html
  <p class="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto natus
    neque autem hic eveniet pariatur ea. Excepturi, officiis animi? Voluptate
    recusandae magni cupiditate, tenetur at nisi aspernatur consectetur illum.
  </p>
  ```

---

- [x] Bài 3: Bài làm tốt \*

  Chú ý về set width của từng khối là 30% ở đây tỉ lệ với màn hình do đó nếu màn hình to thì width sẽ thay đổi làm cho bố cục bị kéo dãn không tốt cho UI.

  Chú ý khoảng cách giữa `box-content` và tiêu đề ở trên cần giãn ra như bản mẫu.

  Nên reset css để loại bỏ các css mặc định của trình duyệt

  ```css
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  ```

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm chưa được chỉnh chu, cần dành thời gian nhiều hơn để cải thiện và lưu ý một số lỗi ở trên để hoàn thiện hơn.

---

## [Nguyễn Thị Tuyết](https://github.com/xanhrii/k2-f8-fullstack-course/tree/master/rii_day05_css)

---

- [x] Bài 1: Bài làm rất tốt \*.

---

- [x] Bài 2: Bài làm rất tốt \*.

  Có thể thêm phần đóng tab bằng cách click vào chính nó.

---

- [x] Bài 3: Bài làm rất tốt \*.

---

Đánh giá chung về bài tập về nhà: Bài làm rất tốt

---

## [Phạm Dương](https://github.com/phamduongw/f8-fullstack-k2/tree/main/exercises/day-5)

---

- [x] Bài 1: Bài làm tốt \*.

  Chưa xử lý font chữ của thẻ textarea

  Nên có thêm thuộc tính require ở các ô input để validate cho người dùng thì tốt hơn.

---

- [x] Bài 2: Bài làm rất tốt \*.

  Nên reset css để loại bỏ các css mặc định của trình duyệt

  ```css
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  ```

  Phần animation hơi chậm, khiến cho user cảm thấy mệt, trải nghiệm người dùng sẽ kém đi. Nên để <400ms là tốt nhất.

  Tham khảo tại: [https://lawsofux.com](https://lawsofux.com/doherty-threshold/)

---

- [x] Bài 3: Chưa làm bài 3. (vừa commit lại lúc 14h50) Bài làm tốt :)

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm tốt, nhưng nộp repo rồi mới commit bài 3 :)

---

## [Nguyễn Duy Hiếu](https://github.com/HieuBoss/F8-fullstack-k2/tree/main/html/lesson5)

---

- [x] Bài 1: Bài làm chưa tốt.

  Kích thước của các thẻ input đang nhỏ hơn về chiều cao so với bản mẫu.

  Các placeholder, value của các thẻ input và thẻ textarea đang dính sát vào viền gây khó chịu cho người dùng.

  Xử lý các kích thước font chữ trong thẻ input, thẻ textarea, text ở ngoài phần checkbox không chỉnh chu, chỗ to chỗ nhỏ.

  Khi hover vào thẻ input icon \* không đổi màu chưa đúng với bản mẫu.

  Có chức năng khi focus vào thẻ input hiện field nhưng kích thước và vị trí đặt đang không hợp lý.

---

- [x] Bài 2: Bài làm chưa tốt.

  Chiều rộng của các tiêu đề nên để `width:100%`.

  Việc các tiêu đề đang dính sát vào viền gây khó chịu cho người dùng, cần cải thiện.

  Bài làm quá thiếu chỉn chu, code lại

---

- [x] Bài 3: Bài làm tốt \*

  Các khối có vẻ hơi nhỏ. Nên tăng size lên để dễ nhìn hơn.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm đa phần cần chỉnh chu và dành nhiều thời gian hơn để cải thiện.

---

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/Day_05/home)

- Nên reset css để loại bỏ các css mặc định của trình duyệt

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
```

---

- [x] Bài 1: Bài làm chưa tốt.

  Font chữ tiêu đề đang không đúng với bản mẫu(Hơi bé và hơi mỏng).

  Chưa có icon \* ở trong các thẻ input, chức năng hover và chức năng focus vào hiển thị như bản mẫu

  Sai màu: Icon trong bản mẫu màu trắng, trong bài đang để màu đen

  Icon của thẻ select đang để mặc định cần thay đổi để giống với yêu cầu đề bài.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm tốt \*.

  Cần chú ý về độ rộng của các khối đang hẹp so với bản mẫu.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm khá tốt cần xem lại một số lỗi để cải thiện hơn.

---
## [Đoàn Duy Chinh](https://duychinh.github.io/f8-fullstack-KS2/Day-5)

- Nên reset css để loại bỏ các css mặc định của trình duyệt

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
```

---

- [x] Bài 1: Bài làm tốt.

  Không nên để value mặc định cho các thẻ input vì khi người dùng nhập sẽ phải xóa đi, nên sử dụng placeholder thay cho value.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm tốt \*.

  Cần chú ý về size của các icon đang bé so với bản mẫu.

---

- [x] Đánh giá chung về bài tập về nhà: Bài làm khá tốt

---
