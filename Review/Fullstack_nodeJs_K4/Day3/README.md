# Dương đánh giá bài học viên

## [Lê Đình Hùng](https://le-hung-020903.github.io/f8-fullstack-k4/)

    Sớm nhất *

- [x] [Bài 1](https://le-hung-020903.github.io/f8-fullstack-k4/)

  Bài làm tốt \*

  Phần width của `textarea` chưa đúng, quá ngắn so với `input`.

  Hiện nay, hầu hết các website nổi tiếng đều có cho mình trang contact riêng chứ không phải là một `section`. Vì vậy, phần title chính có thể là `h1` và các title dưới sẽ là `h2`.

- [x] [Bài 2](https://le-hung-020903.github.io/f8-fullstack-k4/)

  Bài làm rất tốt \*

  Ở trường hợp này, `section.feedback` là một section nhỏ trong một trang web lớn. Vì vậy, tiêu đề của section chưa hẳn là `h1` mà có thể là `h2`

- [x] [Bài 3](https://le-hung-020903.github.io/f8-fullstack-k4/)

  Bài làm rất tốt \*

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

- [x] [Bài 4](https://le-hung-020903.github.io/f8-fullstack-k4/)

  Bài làm rất tốt \*

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` thay vì `p` để hiển thị và đặt các className hợp lý hơn, dễ tái sử dụng hơn.

  ```html
  <h2 class="map__title">ADS SECURITIES L.L.C</h2>
  <p class="map__desc">8th floor, Ol tower</p>
  <p class="map__desc">Lorem ipsum dolor sit amet.</p>
  <p class="map__desc">Lorem ipsum dolor sit amet.</p>
  <p class="map__tel">Tel: +7823592392830</p>
  <p class="map__fax">Fax: +23987298357983</p>
  <p class="map__email">
    Email: <a target="_blank" href="#!">lehung@gmail.com</a>
  </p>
  ```

  Đề xuất sửa thành:

  ```html
  <h2 class="map__title">ADS SECURITIES L.L.C</h2>
  <ul class="map__list">
    <li class="map__item">8th floor, Ol tower</li>
    <li class="map__item">Lorem ipsum dolor sit amet.</li>
    <li class="map__item">Lorem ipsum dolor sit amet.</li>
  </ul>
  <ul class="map__list">
    <li class="map__item">Tel: +7823592392830</li>
    <li class="map__item">Fax: +23987298357983</li>
    <li class="map__item">
      Email: <a target="_blank" href="#!"> lehung@gmail.com </a>
    </li>
  </ul>
  ```

- [x] [Bài 5](https://le-hung-020903.github.io/f8-fullstack-k4/)

  Bài làm rất tốt \*

  Phần title màu xanh được in đậm hơn các chữ xung quanh, đề xuất sử dụng thẻ `<b>` hoặc `<strong>` để in đậm.

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút nhỏ về cách đặt tên class và sử dụng thẻ HTML hợp lý hơn.

---

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_3)

- [x] [Bài 1](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_3)

  Bài làm tốt \*

  Phần giao diện rất chỉn chu.

  Phần `contact Info` không liên quan gì đến `form`, nên tách ra ngoài `form`.

  Phần list trong `.contact-info__detail` là chung một tầng nghĩa, không nên tách ra thành nhiều `ul`

  Thay vì sử dụng 2 thẻ `div` rồi xử lý `inline` thì nên sử dụng các thẻ semantic để hiển thị text như `p` hoặc `span`

- [x] [Bài 2](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_3)

  Bài làm tốt \*

  Đây là một `section` thể hiện một bảng đánh giá của khách hàng. Cần phân biệt rõ `section` và `article`. `Section` là một phần của trang web, còn `article` là một phần của `section`.

  Thẻ `p` để thể hiện một đoạn văn bản có ý nghĩa. Không phải là để hiển thị một chữ riêng biệt không có ý nghĩa gì. Có thể sử dụng `span` trong trường hợp này.

- [x] [Bài 3](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_3)

  Bài làm rất tốt \*

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

  Nên thêm một chút padding-left cho các `input` để các chữ không bị dính vào `input`

- [x] [Bài 4](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_3)

  Bài làm tốt

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` thay vì `p` để hiển thị và đặt các className hợp lý hơn, dễ tái sử dụng hơn.

  ```html
  <div>
    <p>8th floor CI Tower</p>
    <p>Omiche Road PO Box 93894</p>
    <p>Abu Chabi, United Arab Emirates</p>
  </div>
  <div>
    <p>Tel: +971 2675 2300</p>
    <p>Fax: +971 2675 2300</p>
    <p>Email: <a target="_blank" href="#">info@gmail.com</a></p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul>
    <li>8th floor CI Tower</li>
    <li>Omiche Road PO Box 93894</li>
    <li>Abu Chabi, United Arab Emirates</li>
  </ul>
  <ul>
    <li>Tel: +971 2675 2300</li>
    <li>Fax: +971 2675 2300</li>
    <li>Email: <a target="_blank" href="#">info@gmail.com</a></li>
  </ul>
  ```

  Sai chính tả: `Abu Chabi` -> `Abu Dhabi`

  Phần `<div class="contact-map__iframe">` chưa có thẻ đóng.

  Phần section chưa có tiêu đề của nó.

- [x] [Bài 5](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_3)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần phải chú ý nhiều hơn đến cách sử dụng thẻ trong HTML.

---

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day03)

- [x] [Bài 1](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day03)

  Bài làm rất tốt \*

  Đặt tên className chưa hợp lý: thẻ `header` thì className nên là `header`, title trong `header` mới có className là `title`.

  Phần `style` không nên đặt các số lẻ quá, ví dụ như `input` `width 99%`

  Các attribute trong `textarea` nếu không sử dụng thì không nên khai báo.

  Các phần thông tin hiển thị dưới dạng list, nên sử dụng thẻ `ul>li` thay vì `table>tr>td`

  ```html
  <table>
    <tr>
      <td><img src="../imageANDicon/map.png" alt="map" class="icon" /></td>
      <td>
        <p>321 Awesome Street <br />New York, NY 17022</p>
      </td>
    </tr>
    <tr>
      <td>
        <img src="../imageANDicon/letter.png" alt="letter" class="icon" />
      </td>
      <td><p>info@companyname.com</p></td>
    </tr>
    <tr>
      <td><img src="../imageANDicon/phone.png" alt="phone" class="icon" /></td>
      <td><p>+1 800 123 1234</p></td>
    </tr>
  </table>
  ```

  Đề xuất sửa thành:

  ```html
  <ul>
    <li>
      <img src="../imageANDicon/map.png" alt="map" class="icon" />
      <p>321 Awesome Street <br />New York, NY 17022</p>
    </li>
    <li>
      <img src="../imageANDicon/letter.png" alt="letter" class="icon" />
      <p>
        <a target="_blank" href="mailto:info@companyname.com">
          info@companyname.com
        </a>
      </p>
    </li>
    <li>
      <img src="../imageANDicon/phone.png" alt="phone" class="icon" />
      <p>+1 800 123 1234</p>
    </li>
  </ul>
  ```

---

- [x] [Bài 2](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day03)

  Bài làm không tốt

  Code format rất xấu.

  Chưa có self-test để tự kiểm tra code.

  Thẻ `tr` xong phải đến thẻ `td` || `th` không có thẻ `article` xen vào giữa

  ```html
  <table>
    <tr>
      <article></article>
    </tr>
  </table>
  ```

  Đề xuất sửa thành:

  ```html
  <table>
    <tr>
      <td>
        <article></article>
      </td>
    </tr>
  </table>
  ```

  Thẻ [`address`](https://www.w3schools.com/tags/tag_address.asp) xác định thông tin liên hệ của tác giả/chủ sở hữu tài liệu hoặc bài viết. Không phải là để bao bọc một quote.

  ```html
  <address>
    <q
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
      repellat!</q
    >
  </address>
  ```

  Đề xuất sửa thành:

  ```html
  <blockquote>
    <q
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
      repellat!</q
    >
  </blockquote>
  ```

  Phần tên của tác giả không nên sử dụng thẻ `div` mà nên sử dụng một thẻ `heading` để phù hợp với một `article`

  ```html
  <div><b>John Doe</b></div>
  ```

  Đề xuất sửa thành:

  ```html
  <h3>John Doe</h3>
  ```

---

- [x] [Bài 3](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day03)

  Code chưa cso format

  Phần input radio đang làm sai, các name của các `input` radio phải giống nhau để có thể chọn được một trong các `input` radio đó.

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

  Sai chinh tả: `fllowing` -> `following`

  Phần `Single Sign-on...` thừa 1 dấu `>`

---

- [x] [Bài 4](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day03)

  Bài làm tốt

  Đặt các `className` không hơp lý. Thẻ `div` bọc `button` trong `header` thì không thể đặt className là `title` được

  Các thông tin hiển thị dưới dạng list thì nên sử dụng thẻ `ul>li` thay vì `p`

  Một phần riêng biệt của trang web nên đưa vào section và có một heading của riêng nó.

  ```html
  <div class="content">
    <p><b>ADS SECURITIES L.L.C.</b></p>
    <p>
      Lorem ipsum, adipisicing elit. <br />
      Corrupti, provident minima, <br />
      enim ipsa soluta cumque <br />
      Modi, maiores beatae! <br />
      Doloribus, sequi esse!
    </p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <h2>ADS SECURITIES L.L.C.</h2>
  <ul>
    <li>Lorem ipsum, adipisicing elit.</li>
    <li>Corrupti, provident minima,</li>
    <li>enim ipsa soluta cumque</li>
    <li>Modi, maiores beatae!</li>
    <li>Doloribus, sequi esse!</li>
  </ul>
  ```

---

- [x] [Bài 5](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day03)

  Bài làm rất tốt \*

  Phần title, chữ màu xanh được in đậm hơn các chữ xung quanh, đề xuất sử dụng thẻ `<b>` hoặc `<strong>` để in đậm.

---

- Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý rất nhiều thêm vào quy tắc và cách sử dụng các thẻ, className trong HTML.

---

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4)

- [x] [Bài 1](https://github.com/Huy-Bui4869/f8_fullstack_k4)

  Bài làm rất tốt \*

---

- [x] [Bài 2](https://github.com/Huy-Bui4869/f8_fullstack_k4)

  Bài làm rất tốt \*

  Ở trường hợp này, `section.feedback` là một section nhỏ trong một trang web lớn. Vì vậy, tiêu đề của section chưa hẳn là `h1` mà có thể là `h2`

---

- [x] [Bài 3](https://github.com/Huy-Bui4869/f8_fullstack_k4)

  Bài làm rất tốt \*

  Các thuộc tính không sử dụng không nên khai báo, không nên để là `""`

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

---

- [x] [Bài 4](https://github.com/Huy-Bui4869/f8_fullstack_k4)

  Bài làm tốt \*

  Các thông tin hiển thị dưới dạng list thì nên sử dụng thẻ `ul>li` thay vì `p`

  ```html
  <div class="row">
    <p>8th floor. CI Tower</p>
    <p>Comiche Road, PO Box 93894</p>
    <p>Abu Dhabi, United Arab Emirates</p>
  </div>
  <!-- Second row -->
  <div class="row">
    <p>Tel: +971 2657 2300</p>
    <p>Fax: +971 2657 2323</p>
    <p>Email: <a class="email" href="#">cst@ads-securities.com</a></p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul>
    <li>8th floor. CI Tower</li>
    <li>Comiche Road, PO Box 93894</li>
    <li>Abu Dhabi, United Arab Emirates</li>
  </ul>
  <!-- Second row -->
  <ul>
    <li>Tel: +971 2657 2300</li>
    <li>Fax: +971 2657 2323</li>
    <li>Email: <a class="email" href="#"> cst@ads-securities.com </a></li>
  </ul>
  ```

---

- [x] [Bài 5](https://github.com/Huy-Bui4869/f8_fullstack_k4)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút tiểu tiết nhỏ là hoàn thiện.

---

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_3)

- [x] [Bài 1](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_3)

  Bài làm tốt

  Phần thẻ table thừa 1 dấu phẩy `,`.

  Các thuộc tính `[ width, cellspacing, border,... ]` có thẻ xử lý bên CSS để đơn giản hóa code.

  Các thẻ `img` bắt buộc phải có thuộc tính `alt` để tránh các trình duyệt không hiển thị hình ảnh và để khai báo cho các bot của các công cụ tìm kiếm.

  Việc trình bày code, sử dụng table quá rối mắt, không dễ nhìn.

---

- [x] [Bài 2](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_3)

  Bài làm tốt

  Các thuộc tính `[ width, cellspacing, border,... ]` có thẻ xử lý bên CSS để đơn giản hóa code.

  Thẻ `img` bắt buộc phải có thuộc tính `alt` để tránh các trình duyệt không hiển thị hình ảnh và để khai báo cho các bot của các công cụ tìm kiếm.

  Việc trình bày code, sử dụng table quá rối mắt, không dễ nhìn.

---

- [x] [Bài 3](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_3)

  Bài làm rất tốt \*

  Các thuộc tính `[ width, cellspacing, border,... ]` có thẻ xử lý bên CSS để đơn giản hóa code.

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

---

- [x] [Bài 4](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_3)

  Bài làm tốt \*

  Các thuộc tính `[ width, cellspacing, border,... ]` có thẻ xử lý bên CSS để đơn giản hóa code.

  Mỗi thẻ chỉ có một thuộc tính class

  ```html
  <table
    class="topspace"
    width="50%"
    class="setborder"
    cellspacing="0"
    cellpadding="0"
  ></table>
  ```

---

- [x] [Bài 5](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_3)

  Bài làm rất tốt \*

  Trong thẻ `<article>` là một nội dung độc lập, không phụ thuộc vào bất kỳ phần nào của trang web. Nên có một heading của riêng nó.

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút tiểu tiết nhỏ là hoàn thiện.

---

## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_03)

- [x] [Bài 1](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_03)

  Bài làm rất tốt

  Các thuộc tính không sử dụng thì nên xóa đi.

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` thay vì `div` để hiển thị và đặt các className hợp lý hơn, dễ tái sử dụng hơn.

  ```html
  <div class="contact-info-locate">
    <img src="images/locate.png" alt="locate-icon" />
    <p>
      321 Awesome Street <br />
      New York, NY 17022
    </p>
  </div>
  <div class="contact-info-mail">
    <img src="images/mail.png" alt="mail-icon" />
    <p>info@companyname.com</p>
  </div>
  <div class="contact-info-phone">
    <img src="images/phone.png" alt="phone-icon" />
    <p>+1 800 123 1234</p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul>
    <li>
      <img src="images/locate.png" alt="locate-icon" />
      <p>
        321 Awesome Street <br />
        New York, NY 17022
      </p>
    </li>
    <li>
      <img src="images/mail.png" alt="mail-icon" />
      <p>
        <a target="_blank" href="mailto:info@companyname.com">
          info@companyname.com
        </a>
      </p>
    </li>
    <li>
      <img src="images/phone.png" alt="phone-icon" />
      <p>+1 800 123 1234</p>
    </li>
  </ul>
  ```

  Hiện nay, hầu hết các website nổi tiếng đều có cho mình trang contact riêng chứ không phải là một `section`. Vì vậy, phần title chính có thể là `h1` và các title dưới sẽ là `h2`.

---

- [x] [Bài 2](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_03)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_03)

  Bài làm rất tốt \*

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

---

- [x] [Bài 4](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_03)

  Bài làm rất tốt \*

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` thay vì `p` để hiển thị và đặt các className hợp lý hơn, dễ tái sử dụng hơn.

  ```html
  <div class="content-info-address">
    <p>8th floor ,CI Tower</p>
    <p>Comiche Road, PO Box 93894</p>
    <p>Abu Dhabi, United Arab Emirates</p>
  </div>
  <div class="content-info-contact">
    <p>+971 2657 2300</p>
    <p>+971 2657 2323</p>
    <p>Email: <a target="_blank" href="#">cst@ads.securities.com</a></p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul>
    <li>8th floor ,CI Tower</li>
    <li>Comiche Road, PO Box 93894</li>
    <li>Abu Dhabi, United Arab Emirates</li>
  </ul>
  <ul>
    <li>+971 2657 2300</li>
    <li>+971 2657 2323</li>
    <li>Email: <a target="_blank" href="#"> cst@ads.securities.com</a></li>
  </ul>
  ```

---

- [x] [Bài 5](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_03)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút tiểu tiết nhỏ là hoàn thiện.

---

## [Nguyễn Hưng Tuân ✅](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-3)

- [x] [Bài 1](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-3)

  Bài làm rất tốt

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` để hiển thị

  ```html
  <div class="contact-info">
    <h2>Contact Info</h2>
    <a target="_blank" href="#!" target="_blank" rel="noopener noreferrer"
      ><i class="fa-solid fa-location-dot"></i> 321 Awesome Street</a
    >
    <a target="_blank" href="#!" target="_blank" rel="noopener noreferrer"
      ><i class="fa-regular fa-envelope"></i> info@companyname.com</a
    >
    <a target="_blank" href="#!" target="_blank" rel="noopener noreferrer">
      <i class="fa-solid fa-phone"></i>
      +1 800 123 1234
    </a>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="contact-info">
    <h2 class="contact-info-title">Contact Info</h2>
    <ul class="contact-info-list">
      <li>
        <a target="_blank" href="#!" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-location-dot"></i>
          321 Awesome Street
        </a>
      </li>
      <li>
        <a target="_blank" href="#!" target="_blank" rel="noopener noreferrer">
          <i class="fa-regular fa-envelope"></i>
          info@companyname.com
        </a>
      </li>
      <li>
        <a target="_blank" href="#!" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-phone"></i>
          +1 800 123 1234
        </a>
      </li>
    </ul>
  </div>
  ```

---

- [x] [Bài 2](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-3)

  Bài làm rất tốt \*

---

- [x] [Bài 3](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-3)

  Bài làm rất tốt \*

  Thuộc tính `for` trong label cần phải trỏ đến `id` của `input` || `textarea` || `select`... Mà nó muốn liên kết với.

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

---

- [x] [Bài 4](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-3)

  Bài làm tốt \*

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` thay vì `p` để hiển thị và đặt các className hợp lý hơn, dễ tái sử dụng hơn.

  ```html
  <div class="map-desc">
    <p>8th floor CI.Tower</p>
    <p>Comiche Road, PO Box 93894</p>
    <p>Ab Dhabi, United Arab Emirates</p>
  </div>
  <div class="map-contact">
    <p class="map-contact-tel">
      Tel:<a target="_blank" href="#!"> +971 2657 2300</a>
    </p>
    <p class="map-contact-fax">
      Fax:<a target="_blank" href="#!"> +971 2657 2323</a>
    </p>
    <p class="map-contact-email">
      Email:<a target="_blank" href="#!">abcd2000@gmail.com</a>
    </p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <ul class="map-desc">
    <li>8th floor CI.Tower</li>
    <li>Comiche Road, PO Box 93894</li>
    <li>Ab Dhabi, United Arab Emirates</li>
  </ul>
  <ul class="map-contact">
    <li class="map-contact-tel">
      Tel:<a target="_blank" href="#!"> +971 2657 2300</a>
    </li>
    <li class="map-contact-fax">
      Fax:<a target="_blank" href="#!"> +971 2657 2323</a>
    </li>
    <li class="map-contact-email">
      Email:<a target="_blank" href="#!"> abcd2000@gmail.com </a>
    </li>
  </ul>
  ```

  Sai layout mẫu khi map quá to hơn bản mẫu.

---

- [x] [Bài 5](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-3)

  Bài làm tốt \*

  Phần tử `<a>` không được xuất hiện dưới dạng phần tử con của một nút.

  ```html
  <button><a target="_blank" href="#!">View Plans</a></button>
  ```

  Đoạn code này cần tối ưu cách sử dụng thẻ:

  ```html
  <h1>
    <span class="best">Best</span>
    <span class="highlight"> Shared Hosting </span>
    <span class="company">Company</span>
  </h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h1 class="title">
    Best
    <span class="highlight"> Shared Hosting </span>
    Company
  </h1>
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý một chút tiểu tiết nhỏ là hoàn thiện.

---

## [Trung Kiên](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_3/html)

- [x] [Bài 1](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_3/html)

  Bài làm tốt \*

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` để hiển thị

  ```html
  <div class="contact-Info">
    <h3>Contact Info</h3>
    <p><i class="fa fa-map-marker" aria-hidden="true"></i>cầu giấy-hà nội</p>
    <p><i class="fa fa-envelope-o" aria-hidden="true"></i>info@email.com</p>
    <p><i class="fa fa-phone" aria-hidden="true"></i>+841900100</p>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="contact-Info">
    <h3>Contact Info</h3>
    <ul>
      <li>
        <i class="fa fa-map-marker" aria-hidden="true"></i>cầu giấy-hà nội
      </li>
      <li>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <a target="_blank" href="mailto:info@email.com"> info@email.com </a>
      </li>
      <li><i class="fa fa-phone" aria-hidden="true"></i>+841900100</li>
    </ul>
  </div>
  ```

  Nếu có thể chỉn chu hơn trong giao diện thì tốt hơn.

---

- [x] [Bài 2](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_3/html)

  Bài làm sai layout mẫu

  Thẻ `h2` không được xuất hiện dưới dạng con của thẻ `th`

  Thẻ `img` có 1 thuộc tính bắt buộc là `alt` để tránh các trình duyệt không hiển thị hình ảnh và để khai báo cho các bot của các công cụ tìm kiếm.

---

- [x] [Bài 3](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_3/html)

  Bài làm rất tốt \*

  Trong 1 trang web, `id` là duy nhất, không được trùng nhau.

  Thuộc tính `for` trong label cần phải trỏ đến `id` của `input` || `textarea` || `select`... Mà nó muốn liên kết với.

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

---

- [x] [Bài 4](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_3/html)

  Bài làm không tốt

  Sai layout mẫu.

  Cần sử dụng thêm CSS để làm bài này.

---

- [x] [Bài 5](https://github.com/KIENTT99/F8-Fullstack-k4/tree/main/ngay_3/html)

  Bài làm không tốt

  Thiếu 1 phần tử phía trên title

  Phần tiêu đề màu đen ở bản mẫu có nét mảnh hơn màu xanh

---

- Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý nhiều hơn vào giao diện mẫu và các quy tắc W3C để hoàn thiện bài tốt hơn.

---

## [Tuan Kiet Hoang](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-03)

- [x] [Bài 1](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-03)

  Bài làm tốt \*

  Font-size mọi thứ quá nhỏ, gây ảnh hưởng xấu tới trải nghiệm người dùng.

  Các phần `heading` cần sử dụng thẻ `heading` để thể hiện.

  ```html
  <p class="contact"><b>CONTACT US</b></p>
  <p class="contact-info"><b>Contact Info</b></p>
  <p class="input-heading">
    <b>Having Any Query! Or Book an appointment</b>
  </p>
  ```

  Phần thông tin được hiển thị dưới dạng list. Nên sử dụng thẻ `ul>li` để hiển thị

  ```html
  <div class="form-info">
    <p class="contact-info"><b>Contact Info</b></p>
    <div>
      <i class="fa-solid fa-location-dot"></i>
      <p>
        321 Awesome Street <br />
        New York, NY 17022
      </p>
    </div>
    <div>
      <i class="fa-sharp fa-regular fa-envelope"></i>
      <p>info@companyname.com</p>
    </div>
    <div>
      <i class="fa-solid fa-phone"></i>
      <p>+1 800 123 1234</p>
    </div>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <div class="form-info">
    <p class="contact-info"><b>Contact Info</b></p>
    <ul>
      <li>
        <i class="fa-solid fa-location-dot"></i>
        <p>
          321 Awesome Street <br />
          New York, NY 17022
        </p>
      </li>
      <li>
        <i class="fa-sharp fa-regular fa-envelope"></i>
        <p>
          <a target="_blank" href="mailto:info@companyname.com">
            info@companyname.com
          </a>
        </p>
      </li>
      <li>
        <i class="fa-solid fa-phone"></i>
        <p>+1 800 123 1234</p>
      </li>
    </ul>
  </div>
  ```

  Không nen đưa tất cả vào thẻ form, chỉ những phần tử cần thiết, liên quan đến form, tương tác với người dùng mới nên đặt trong thẻ form.

---

- [x] [Bài 2](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-03)

  Bài làm quá ẩu

  ```html
  <link rel="stylesheet" href="reset.css".css">
  ```

  Phần tên khách hàng không phải cùng một đoạn văn bản, không nên sử dụng `br` để ngắt hàng và dùng `b` để định dạng.

---

- [x] [Bài 3](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-03)

  Bài làm rất tốt \*

  Trong thẻ `ul` chỉ được chứa thẻ `li` làm con.

  Có thể tham khảo phần câu hỏi của bạn [Chi K1](https://fullstack.edu.vn/fullstack-nodejs/discussions/cach-tao-border-color-cho-the-input-type-radio-hoac-type-checkbox.html) để hiểu rõ hơn về cách tạo border color cho `input` type `radio` hoặc type `checkbox`.

---

- [x] [Bài 4](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-03)

  Thẻ `br` không được sử dụng để ngắt dòng giữa các tag.

  ```html
  <p>Abu Dhabi, Đà Lạt</p>
  <br />
  <p>Tel: +84 987 654 321</p>
  ```

  Các font chữ quá nhỏ, sẽ gây ảnh hưởng xấu tới trải nghiệm người dùng.

---

- [x] [Bài 5](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-03)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần chú ý thêm vào tiểu tiết để làm bài tốt hơn.

---
