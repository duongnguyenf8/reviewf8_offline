# Dương review bài học viên FE K3.

## [Đỗ Ngọc Tiến](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-3)

    Sớm nhất *

- [x] [Bài 1](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-3)

  Bài làm tốt \*

  Các thuộc tính id trong input cần có giá trị, không nên để trống. Nếu không có thì nên xóa đi.

  Thẻ `button` ở đây giúp tạo ra một nút để submit form, cần đưa thẻ `button` vào trong form.

  Đây là các heading nhỏ của `CONTACT US` nên nên sử dụng thẻ `heading` thay vì `div`

  ```html
  <div class="protein">Contact Info</div>
  <div class="protein">Having Any Query! Or Book an appointment</div>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>Contact Info</h2>
  <h2>Having Any Query! Or Book an appointment</h2>
  ```

  Trong thực tế, hầu hết các trang web nổi tiếng đều sẽ thiết kế trang `contact` riêng chứ không còn là một `section`. Vì vậy. phần `CONTACT US` nên là `h1`

  ```html
  <h2>CONTACT US</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h1>CONTACT US</h1>
  ```

  Các phần `Input` nên có một chút `padding-left` để khi nhập liệu sẽ không bị dính vào viền trái.

---

- [x] [Bài 2](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-3)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-3)

  Bài làm rất tốt \*

  Phần `button` ở đây giúp tạo ra một nút để submit form, cần đưa thẻ `button` vào trong form.

  Có thể tìm hiểu và làm được màu của input thì tốt hơn

---

- [x] [Bài 4](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-3)

  Bài làm tốt \*

  Phần thông tin hiển hiển thị theo dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <div class="content-1">
    <h2>ADS SECURITIES L.L.C</h2>
    <p>8th floor.Ci Tower</p>
    <p>Comiche Road. PO Bow 93894</p>
    <p>Abu Dhabi United Arab Emiraes</p>
  </div>
  <div class="content-2">
    <p>Tel: +971 2657 2300</p>
    <p>Far: +971 2657 2300</p>
    <p>Email: <a target="_blank" href="#">abc@gmail.com</a></p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>ADS SECURITIES L.L.C</h2>
  <ul class="content-1">
    <li>8th floor.Ci Tower</li>
    <li>Comiche Road. PO Bow 93894</li>
    <li>Abu Dhabi United Arab Emiraes</li>
  </ul>
  <ul class="content-2">
    <li>Tel: +971 2657 2300</li>
    <li>Far: +971 2657 2300</li>
    <li>Email: <a target="_blank" href="#">abc@gmail.com</a></p>
    </ul>
  ```

---

- [x] [Bài 5](https://github.com/DoNgocTien17/F8-frontend-k3/tree/main/Day-3)

  Bài làm rất tốt \*

  Việc để một thẻ `img` vào trong thẻ `p` về mặt kỹ thuật là không sai, tuy nhiên, phần alt cần đucowj đảm bảo để cho biết vì sao hình ảnh được "Nhấn Mạnh" mà lại phải chèn vào trong text. Nhưng trong trường hợp này, thuộc tính `alt` không được cho giá trị, chưa kể tới việc thẻ `<p>` ở đây bọc thẻ `<img>` không có mục đích, có vẻ là chỉ để xuống hàng.

  ```html
  <p class="logo"><img src="./img/img_190-50.png" alt="" /></p>
  ```

  Vì vậy, nên sửa thành:

  ```html
  <img class="logo" src="./img/img_190-50.png" alt="Logo" />
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần một chút phân tích cấu trúc HTMl nữa là hoàn thiện.

  \* Lưu ý: Cần đưa các bài tập vào các thư mục riêng biệt, không đưa tất cả vào một thư mục.

## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-3)

- [x] [Bài 1](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-3)

  Bài làm tốt \*

  Các thông tin được thể hiện ở dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <h2 class="info__title">Contact Info</h2>
  <div class="info__items">
    <div class="item">
      <i class="fa-solid fa-location-dot"></i>
      <span>321 Awesome Street New York, NY 17022</span>
    </div>
    <div class="item">
      <i class="fa-regular fa-envelope"></i>
      <span>info@companyname.com</span>
    </div>
    <div class="item">
      <i class="fa-solid fa-phone"></i>
      <span>+1 800 123 1234</span>
    </div>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <h2 class="info__title">Contact Info</h2>
  <ul class="info__items">
    <li class="item">
      <i class="fa-solid fa-location-dot"></i>
      <span>321 Awesome Street New York, NY 17022</span>
    </li>
    <li class="item">
      <i class="fa-regular fa-envelope"></i>
      <span>
        <a target="_blank" href="mailto:info@companyname.com">
          info@companyname.com
        </a>
      </span>
    </li>
    <li class="item">
      <i class="fa-solid fa-phone"></i>
      <span>+1 800 123 1234</span>
    </li>
  </ul>
  ```

---

- [x] [Bài 2](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-3)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-3)

  Bài làm tốt \*

  Phần label của các `input type="checkbox"`, `radio` chưa có. nếu có thì sẽ tốt hơn

  Có thể tìm hiểu và làm được màu của input thì tốt hơn

---

- [x] [Bài 4](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-3)

  Bài làm tốt \*

  Phần thông tin hiển hiển thị theo dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <div class="contact-address">
    <span>8th floor, CI Tower</span>
    <span>Comiche Road, PO Box 93894</span>
    <span>Aba Dhabi, United Arab Animates</span>
  </div>
  <div class="contact-address">
    <span>Tel: +971 2 657 2300</span>
    <span>Fax: +971 2 657 2323</span>
    <span>Email: <span>cst@ads-securities.com</span></span>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul class="contact-address">
    <li>8th floor, CI Tower</li>
    <li>Comiche Road, PO Box 93894</li>
    <li>Aba Dhabi, United Arab Animates</li>
  </ul>
  <ul class="contact-address">
    <li>Tel: +971 2 657 2300</li>
    <li>Fax: +971 2 657 2323</li>
    <li>
      Email:
      <span>
        <a target="_blank" href="mailto:cst@ads-securities.com">
          cst@ads-securities.com
        </a>
      </span>
    </li>
  </ul>
  ```

---

- [x] [Bài 5](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-3)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần một chút phân tích cấu trúc HTMl nữa là hoàn thiện.

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-3)

- [x] [Bài 1](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-3)

  Bài làm tốt \*

  Phần `textarea` không có thuộc tính `type`, phàn `id` không nên để là "", nếu không có thì xóa đi

  ```html
  <textarea
    type="message"
    name="message"
    id=""
    cols="30"
    rows="10"
    placeholder="Message"
  ></textarea>
  ```

  Hiện nay, hầu hết các trang web lớn đều có trang `contact` riêng, không còn là một `section` nữa. Vì vậy, phần `CONTACT US` nên là `h1` và các title nhỏ hơn nên là `h2`

---

- [x] [Bài 2](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-3)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-3)

  Bài làm tốt \*

  Trong tiếng anh, từ `mật khẩu` được viết là `password` chứ không phải `pass-word`

  Có thể tìm hiểu và làm được màu của input thì tốt hơn

---

- [x] [Bài 4](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-3)

  Bài làm tốt \*

  Phần thông tin hiển hiển thị theo dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <div class="left">
    <div class="address">
      <h2>ADS SECURITIES L.L.C</h2>
      <p>Tòa 3 Nam Từ Liêm</p>
      <p>99 Đ. Mễ Trì, Mễ Trì, Nam Từ Liêm</p>
      <p>Tòa 3 Nam Từ Liêm</p>
    </div>
    <div class="contact">
      <p>Tel: 0391362394</p>
      <p>Fax: 0220832371</p>
      <span
        >Email: <a target="_blank" href="">duchainguyen134@gmai.com</a></span
      >
    </div>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="left">
    <h2>ADS SECURITIES L.L.C</h2>
    <ul class="address">
      <li>Tòa 3 Nam Từ Liêm</li>
      <li>99 Đ. Mễ Trì, Mễ Trì, Nam Từ Liêm</li>
      <li>Tòa 3 Nam Từ Liêm</li>
    </ul>
    <ul class="contact">
      <li>Tel: 0391362394</li>
      <li>Fax: 0220832371</li>
      <li>
        Email:
        <span>
          <a target="_blank" href="mailto:duchainguyen134@gmai.com">
            duchainguyen134@gmai.com
          </a>
        </span>
      </li>
    </ul>
  </div>
  ```

---

- [x] [Bài 5](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-3)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần một chút phân tích cấu trúc HTMl nữa là hoàn thiện.

## [Nguyen Van Hai](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day3)

- [x] [Bài 1](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day3)

  Code format hơi xấu, khó đọc.

  Bài làm tốt.

  Hiện nay, hầu hết các trang web lớn đều có trang `contact` riêng, không còn là một `section` nữa. Vì vậy, phần `CONTACT US` nên là `h1` và các title nhỏ hơn nên là `h2`

---

- [x] [Bài 2](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day3)

  Bài làm tốt \*

  Ở phần meta title đã thông báo đây là trang hiển thị các comment của khách hàng. Vì vậy, tiêu đề chính ở đây sẽ sử dụng `h1` thay vì `h2`

---

- [x] [Bài 3](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day3)

  Sai đề bài.

  Ở phần chọn `role` sử dụng `radio` nhưng trong bài đang dùng `checkbox`.

---

- [x] [Bài 4](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day3)

  Bài làm tốt \*

  Phần thông tin ở đây được hiển thị theo dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <div id="info">
    <h1>ADS SECURITIES L.L.C.</h1>
    <p>Dinh Thon, My Dinh, Nam Tu Liem, Ha Noi</p>
    <br />
    <p>Tel: 0123466797</p>
    <p>Fax: 0136464857</p>
    <p>
      Email:
      <a target="_blank" href="hainvsp9x@gmail.com">hainvsp9x@gmail.com</a>
    </p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <div id="info">
    <h1>ADS SECURITIES L.L.C.</h1>
    <ul>
      <li>Dinh Thon, My Dinh, Nam Tu Liem, Ha Noi</li>
    </ul>
    <ul>
      <li>Tel: 0123466797</li>
      <li>Fax: 0136464857</li>
      <li>
        Email:
        <a target="_blank" href="hainvsp9x@gmail.com"> hainvsp9x@gmail.com </a>
      </li>
    </ul>
  </div>
  ```

---

- [x] [Bài 5](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/day3)

  Trong bản mẫu, phần heading chữ màu xanh có font weight dày hơn chữ màu đen.

  ```html
  <h2>Best <span>Shared Hosting</span> Company</h2>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>
    Best <span><b>Shared Hosting</b></span> Company
  </h2>
  ```

  thẻ `button` typ `submit` nhưng không có `form` nào ở trong bài. Nên sửa thành `type="button"`

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần một chút phân tích cấu trúc HTMl nữa là hoàn thiện.

## [Khôi Lê Hoàng](https://github.com/F8study/BaiTapDay3)

- [x] [Bài 1](https://github.com/F8study/BaiTapDay3)

  Phân tích layout chưa tốt

  Các thẻ heading có chung tầng ý nghĩa nên sử dụng cùng 1 loại thẻ.

  2 id đang trùng nhau:

  ```html
  <div>
    <label for="name"></label>
    <input type="text" name="name" placeholder="your name" id="name" />
  </div>
  <div>
    <label for="name"></label>
    <input type="text" name="name" placeholder="subject" id="name" />
  </div>
  ```

  Thiếu format code

  Cần chú ý nhiều hơn đến thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 2](https://github.com/F8study/BaiTapDay3)

  Sử dụng quá nhiều thẻ `h1` trong cùng một trang

  Chia 1 bảng layout, chỉ nên dùng 1 thẻ table

  Cần chú ý nhiều hơn đến thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 3](https://github.com/F8study/BaiTapDay3)

  Sai layout mẫu

  Cần chú ý nhiều hơn đến thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 4](https://github.com/F8study/BaiTapDay3)

  Layout phân tích tốt, cần chỉn chu hơn.

---

- [x] [Bài 5](https://github.com/F8study/BaiTapDay3)

  Phần chữ màu đen trong heading có font weight nhỏ hơn chữ màu xanh

  Sử dụng quá nhiều thẻ h1 trong cùng một trang

---

- Đánh giá chung bài tập về nhà: Bài làm cần cố gắng rất nhiều.

## [Nguyen Le Quyen (FPL HN)](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day3)

- [x] [Bài 1](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day3)

  Bài làm rất tốt \*

  Phần thông tin hiển hiển thị theo dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <div class="info__items">
    <div class="item">
      <img src="images/address.png" alt="" />
      <span>321 Awesome Street New York, NY 17022</span>
    </div>
    <div class="item">
      <img src="images/box.png" alt="" />
      <span>info@companyname.com</span>
    </div>
    <div class="item">
      <img src="images/phone.png" alt="" />
      <span>+1 800 123 1234</span>
    </div>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul class="info__items">
    <li class="item">
      <img src="images/address.png" alt="" />
      <span>321 Awesome Street New York, NY 17022</span>
    </li>
    <li class="item">
      <img src="images/box.png" alt="" />
      <span>
        <a target="_blank" href="mailto:info@companyname.com">
          info@companyname.com
        </a>
      </span>
    </li>
    <li class="item">
      <img src="images/phone.png" alt="" />
      <span>+1 800 123 1234</span>
    </li>
  </ul>
  ```

---

- [x] [Bài 2](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day3)

  Bào làm tốt \*

  Nên chú ý nhiều hơn vào thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

  Không nên dặt className bằng tiếng Việt, nên dùng tiếng Anh.

  ```html
  <div class="hang1"></div>
  <div class="hang2"></div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="row row1"></div>
  <div class="row row2"></div>
  ```

  Tên class `thumb` thường được dùng cho các hình ảnh nhỏ không phải là để làm một thẻ bao bọc thông tin

  ```html
  <div class="item">
    <div class="thumb">
      <img src="images/monk-555391_1920.jpg" alt="" />
      <blockquote>
        <p>
          "Life is like riding a bicycle. To keep your balance, you must keep
          moving."
        </p>
        <cite>Albert Einstein</cite>
      </blockquote>
    </div>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="item">
    <div class="thumb">
      <img src="images/monk-555391_1920.jpg" alt="" />
    </div>
    <blockquote>
      <p>
        "Life is like riding a bicycle. To keep your balance, you must keep
        moving."
      </p>
      <cite>Albert Einstein</cite>
    </blockquote>
  </div>
  ```

---

- [x] [Bài 3](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day3)

  Sai layout mẫu.

  Nên chú ý nhiều hơn vào thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

---

- [x] [Bài 4](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day3)

  Phần map có chủ đích làm sáng tạo nhưng đã làm các phần trên bị xấu

  Các phần thông tin hiển hiển thị theo dạng list, nên sử dụng thẻ `ul` thay vì `div`

  ```html
  <div class="contact-address">
    <span>8th floor, CI Tower</span>
    <span>Comiche Road, PO Box 93894</span>
    <span>Aba Dhabi, United Arab Animates</span>
  </div>
  <div class="contact-address">
    <span>Tel: +971 2 657 2300</span>
    <span>Fax: +971 2 657 2323</span>
    <span>Email: <span>cst@ads-securities.com</span></span>
  </div>
  ```

---

- [x] [Bài 5](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day3)

  Bài làm tốt \*

  Phần này không phải title, chỉ là một despcription nên không nên sử dụng className là `title2`
  Vì nó thể hiện một đoạn văn bản. Nên sử dụng thẻ `p` thay vì `span`

  ```html
  <span class="title2">
    With this responsive landing page template, you can promote your all
    hosting, domain and email services
  </span>
  ```

  Đề xuất sửa thành:

  ```html
  <p class="description">
    With this responsive landing page template, you can promote your all
    hosting, domain and email services
  </p>
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, có sáng tạo. Tuy nhiên sáng tạo không phải lúc nào cũng được và không phải lúc nào cũng tốt.

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main/Day-3)

---

Bài 1: Bài làm tốt \*

- Nên tách css ra một file css riêng, giúp cho việc đọc code dễ hiểu và dễ xử lý hơn.

- Chiều rộng của các input và textarea đang khác nhau, điều này không tốt cho UI gây khó chịu cho người đọc.

- Góp ý: Nên xử lý placeholder thêm một số thuộc tính css như padding để không dính vào viền của input gây khó chịu người đọc.

---

Bài 2: Bài làm chưa tốt

- img và text chưa nằm ngang nhau, cần xử lý thêm để tối ưu vấn đề này.

---

Bài 3: Bài làm chưa tốt.

- Nhận xét chung về UI: Chưa đúng với bản mẫu, cần tìm hiểu thêm để tối ưu bài làm của mình.

---

Bài 4: Bài làm tốt \*

- Thừa thẻ i ở dòng 22 và thừa thẻ đóng div ở dòng 27.

- Phần đầu nên sử dụng thẻ nav để biểu diễn thanh điều hướng ứng với 4 items.

- Chú ý về màu nền và màu chữ cần độ tương phản dễ đọc không gây khó chịu cho người dùng.

- Góp ý: Cần tuân thủ thiết kế của bản mẫu.

---

Bài 5: Bài làm tốt

- Đặt tên class sai quy ước. Đây là lỗi sai khá nghiêm trọng. Xem lại cách đặt tên class.

---

Nhận xét chung về bài tập về nhà: Bài làm khá tốt, tuy nhiên nên tách riêng file css và html và cần lưu ý về một số lỗi ở trên để hoàn thiện bài tập tốt hơn.

---

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day3)

---

Cần lưu ý về đặt tên folder không nên có dấu space điều này bất tiện về sau này nếu muốn `import`.

---

Bài 1: Bài làm rất tốt \*

- Phần contact có thể là một section của trang nên phần CONTACT US nên để là thẻ `<h2>` và các tiêu đề ở dưới là `<h3>`

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm rất tốt \*

- Cần sửa lại phần viền của các select, input sao cho giống bản mẫu

---

Bài 4: Bài làm rất tốt \*

- Phần hover navbar ở 2 đầu chưa full đến viền của border.

---

Bài 5: Bài làm rất tốt \*

- Nên thay đổi title ở phần head để hiệu quả với SEO.

---

Đánh giá chung bài tập về nhà: Bài làm rất tốt chỉ có một số chỗ nhỏ cần lưu ý.

---

## [Nguyễn Khắc Tú](https://github.com/tunguyen34hd/FrontEnd-F8-Offline/tree/main/Bai_tap/Day_3)

---

Bài 1: Bài làm rất tốt \*

- Chưa thay đổi `font-size` của placeholder của thẻ textarea mà vẫn để mặc định.

- Kiểm tra lại đường link liên kết đến fontawesome vì icon không hiện lên được.

---

Bài 2: Bài làm rất tốt \*

- Khoảng cách giữa h1 và article chưa đúng với bản mẫu.

- Vị trí của avatar đang hơi thấp so với bản mẫu. Phải căn lề trên với đoạn text.

---

Bài 3: Bài làm rất tốt \*

- Hai button cần được căn giữa.

- Cần thay đổi viền của các thẻ select, input sao cho giống với bản mẫu.

---

Bài 4: Bài làm rất tốt \*

---

Bài 5: Bài làm rất tốt \*

- Chú ý về `font-size` của tiêu đề cần lớn hơn.

---

Đánh giá chung bài tập về nhà: Bài làm rất tốt chỉ có một số chỗ nhỏ cần lưu ý.

---

## [Sơn Trần](https://github.com/2003son/F8-FE-K3/tree/main/day3)

---

Bài 1: Bài làm chưa tốt.

- Sai chính tả khá nhiều một số chỗ như `foteer`, `CONTACH`,... và cần tuân thủ viết hoa các chữ cái như bản mẫu (having không viết hoa).

* Không nên đặt tên class là footer vì đây không phải là thành phần footer của trang.

* Thuộc tính name và id nếu không đặt gì nên bỏ đi không nên để trống.

* Phần location chưa xuống dòng như bản mẫu.

* Góp ý: Các thành phần placeholder của input dính viền trái, khó đọc, không tốt, không giúp người dùng có trải nghiệm tốt đề xuất sử dụng thuộc tính `padding-left`

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm tốt \*

- Nên sử dụng thẻ label với thuộc tính `for` kèm với input để khi nhấn vào label có thể focus vào input.

* Cần thay đổi viền của các thẻ select, input sao cho giống với bản mẫu.

---

Bài 4: Bài làm rất tốt \*

- Nên sử dụng thẻ nav để biểu diễn menu.

- Chú ý về độ rộng của navbar sao cho đúng với bản mẫu.

---

Bài 5: Bài làm rất tốt \*

---

Đánh giá chung bài tập về nhà: Bài làm rất tốt chỉ có một số chỗ nhỏ cần lưu ý và hoàn thiện cho các bài tập sau.

---
