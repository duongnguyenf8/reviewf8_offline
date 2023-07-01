# Dương review bài học viên FE K3.

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-4)

    Sớm nhất *

- [x] [Bài 1](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-4)

  Bài làm tốt \*

  Sai font chữ của bản mẫu. Bản mẫu sử dụng một font chữ không chân.

  Phần màu hơi xấu

  Nên sử dụng một thẻ `semantic` cho footer thay vì `div.footer`

---

- [x] [Bài 2](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-4)

  Bài làm tốt

  Phần tiêu đề nên sử dụng một thẻ `heading` thay vì sử dụng `div`

  ```html
  <div class="title-small"><span>RESERVATION</span></div>
  <span class="title-big">Book your table</span>
  ```

  Input nhập số người nên sử dụng `type="number"` thay vì `type="text"`

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-4)

  Bài làm chưa tốt

  Chưa xử lý được chuyển ảnh khi click vào tab.

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, có thể chỉn chu hơn, cải thiện hơn nữa.

  \* Lưu ý: Sử dụng đúng thẻ semantic trong HTML

## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-4)

- [x] [Bài 1](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-4)

  Bài làm rất tốt \*

---

- [x] [Bài 2](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-4)

  Bài làm tốt

  Các kích cỡ đang có vẻ nhỏ quá, khiến cho người dùng khó nhìn (To hơn khoảng 75% nữa.)

  Phần `.subtitle` vẫn là một title, nên sử dụng một hẻ `heading`

  Vì đây là một form đặt bàn, chưa nói rõ nội dung chính của một trang web là đặt bàn gì, ăn cái gì hay là bàn tiệc,...

  Nên ở đây tiêu đề chính cũng chưa phải là `Book your table`.

  ```html
  <span class="subtitle">RESERVATION</span>
  <h1 class="title">Book your table</h1>
  ```

  Đề xuất sửa thành:

  ```html
  <h3 class="subtitle">RESERVATION</h3>
  <h2 class="title">Book your table</h2>
  ```

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-4)

  Bài làm rất tốt \*

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, có thể chỉn chu hơn nữa ở semantic HTML.

## [Nguyễn Đình Khánh](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/Day4)

- [x] [Bài 1](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/Day4)

  Bài làm tốt \*

  Sai font chữ của bản mẫu. Bản mẫu sử dụng một font chữ không chân.

---

- [x] [Bài 2](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/Day4)

  Bài làm tốt

  Code chưa có format

  Sai tỷ lệ font chữ, phần heading `Book your table` nên có kích cỡ lớn hơn phần `Find A Table`

  Vì đây là một form đặt bàn, chưa nói rõ nội dung chính của một trang web là đặt bàn gì, ăn cái gì hay là bàn tiệc,...

  Nên ở đây tiêu đề chính cũng chưa thể sử dụng thẻ `h1`.

  ```html
  <h1 class="heading">RESERVATION</h1>
  <h2 class="sub-heading">Book your table</h2>
  ```

  Đề xuất sử dụng tử thẻ `h2` trở lên

  Phần bên trong `form` không phải là một `section`, `section` là một phần quan trọng, có kích thước khá lớn, nằm trong một trang web, có ý nghĩa cụ thể và có `heading` nói về `section` đó. Nên sử dụng `section` ở `.small-main` và ở trong form đó chỉ đơn giản là `div`

  Sai placeholder của field nhập **Date**

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/Day4)

  Bài làm tốt

  Khi mới vào trang, có lỗi.

  Các ảnh đang bị méo so với kích thước đúng.

  Chưa có hover chuyển ảnh.

  Sai font chữ của bản mẫu. Bản mẫu là một font chữ có chân

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, cần chú ý chỉn chu hơn trong việc code để bài làm ngày một tốt lên.

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day4)

- [x] [Bài 1](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day4)

  Bài làm rất tốt \*

---

- [x] [Bài 2](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day4)

  Bài làm rất tốt \*

  Nên thêm required vào các field nhập để trình duyệt có thể kiểm tra được các field nhập đó có được nhập hay không.

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Day4)

  Có lỗi ở việc bấm vào navbar, cũng chưa có chuyển ảnh.

  Có lỗi khi hover trúng nút thì bị mất hiệu ứng chuyển ảnh.

  Hình ảnh chưa xử lý, vẫn đang bị lệch ảnh so với các action button.

---

- Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần xem lại bài 3

## [Nguyễn Khắc Tú](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/Day_4)

- [x] [Bài 1](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/Day_4)

  Bài làm tốt

  Sai font chữ, bản mẫu sử dụng một font chữ không chân.

---

- [x] [Bài 2](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/Day_4)

  Bài làm rất tốt \*

  Phần People nên thêm `min="1"` vào để trình duyệt có thể kiểm tra được giá trị nhập vào có lớn hơn 0 hay không.

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/Day_4)

  Chưa xử lý được chuyển ảnh khi click vào tab.

  Chưa xử lý hover chuyển ảnh.

---

- Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần xem lại bài 3, chú ý nhiều hơn vào bài mẫu để bài làm được tốt hơn.

## [Nguyen Tuan Anh](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day4)

- [x] [Bài 1](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day4)

  Bài làm tốt

  Cần chú ý hơn vào thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

  Không nên đưa tiêu đề vào thẻ `<p>`, tiêu đề nên đưa vào thẻ `heading`

  ```html
  <p class="sub-form__title">
    <span>Earn income</span>
    with your CSS skills
  </p>
  ```

  Đề xuất sửa thành:

  ```html
  <h2 class="sub-form__title">
    <span>Earn income</span>
    with your CSS skills
  </h2>
  ```

---

- [x] [Bài 2](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day4)

  Bài làm tốt

  Cần chú ý hơn vào thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

  Sai font chữ tại heading `Book your table`.

  Phần People nên sử dụng `type="number"` thay vì `type="text"`

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/fanbaday/f8-fullstack-offline-K3/tree/main/Day4)

  Chưa xử lý được chuyển ảnh khi click vào tab.

  Chưa xử lý hover chuyển ảnh.

  Chưa xử lý hiện action button khi hover vào ảnh.

  Cần chú ý hơn vào thẻ meta title vì chúng rất quan trọng trong SEO và trải nghiệm người dùng.

---

- Đánh giá chung bài tập về nhà: Bài làm ở mức cơ bản, cần chú ý rất nhiều vào đề bài mẫu để bài làm được tốt hơn.

## [Nguyen Le Quyen (FPL HN)](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day4)

- [x] [Bài 1](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day4)

  Màu nền của background đang khác hoàn toàn so với bản mẫu.

  Màu nền của button khi chưa hover chưa đúng.

  Đoạn văn chưa xuống dòng như bản mẫu.

  Font chữ của button đang rất nhỏ.

  Cần sử dụng font chữ không chân để giống với bản mẫu.

  Việc viết CSS vào luôn file HTML chỉ nên áp dụng khi CSS ít và nên tách CSS ra một file riêng để có thể CSS chỉnh chu hơn như Reset CSS, ...

  Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

---

- [x] [Bài 2](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day4)

  Border của các ô input nên nhạt hơn và cần sửa lại border của button.

  Vì phần `RESERVATION` vẫn là một tiêu đề, nên sử dụng thẻ `h3` thay vì `span`

  Vì đây chỉ là một section form đặt bàn, chưa rõ nghĩa cụ thể. Thế nên chưa thể làm một trang hoàn chỉnh.

  - Tiêu đề chính nên sử dụng từ `h2`-`h6`

  - Đề xuất sửa `<h1>Book your table</h1>` thành `<h2>Book your table</h2>`

  Phần input cho số người thì nên để là số thay vì text để đảm bảo người dùng không nhập sai kiểu dữ liệu.

  Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  Có thể xử lý được phần placeholder của type `date`, type `time` như sau:

  1.  Tạo một placeholder giả.

  2.  Sau đó lợi dụng chức năng focus từ label được link tới input để làm giả việc click vào input.

  ![Ảnh hướng dẫn](https://files.fullstack.edu.vn/f8-prod/public-images/648b4c2e7b3a6.png)

---

- [x] [Bài 3](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day4)

  Layout chưa đúng với đề bài.

  Chưa hiển thị được thông tin sản phẩm trước khi hover. Điều đó làm cho người dùng không biết được thông tin sản phẩm trước khi hover.

  Chưa xử lý được chuyển ảnh khi click vào tab.

  Chưa xử lý hiện action button khi hover vào ảnh.

---

- Đánh giá chung bài tập về nhà: Bài tập chưa tốt, mắc một số lỗi khá cơ bản, cần dành thời gian để chỉnh chu hơn, nếu gặp khó khăn cần đến sớm trước các buổi học hoặc đặt câu hỏi để mọi người có thể giúp đỡ, giải quyết những khó khăn khi làm bài tập về nhà.

---

- Đánh giá chung bài tập về nhà:Bài làm tốt, có sáng tạo. Tuy nhiên khi đi làm thực tế vẫn ưu tiên chính xác tuyệt đối hơn. Cần chu ý thêm vào giao diện mẫu để bài làm tốt hơn.

## [Đỗ Ngọc Tiến](https://dongoctien17.github.io/F8-frontend-k3/Day-4)

- [x] [Bài 1]: Bài làm chưa tốt.

  Màu background đang không đúng so với bản mẫu.

  Chiều rộng đang sát với viền nên khó nhìn thấy border-radius của phần tử `container` nên để cách so với 2 bên thì UI sẽ đẹp hơn.

  Các phần tử ở bản mẫu căn trái nhưng phần text đang thụt vào một tí so với các phần tử còn lại.

  Phần text nên đúng và xuống dòng giống với bản mẫu vì sau đi làm việc tuân thủ theo design là việc cực kì quan trọng.

  Khoảng cách giữa tiêu đề chính của Form và phần text đang hơi xa nhau.

  Phần input nên padding trên dưới thêm để input rộng hơn. Phần button cũng vậy.

  Phần type của input sai chính tả. Đang ghi là `eamil` chứ không phải `email`.

  Tiêu đề nên để thẻ `h2` vì đây chỉ là một section nhỏ trong trang web và đề bài có ghi rõ form này thường nằm trong footer nên bao tất cả trong thẻ footer.

---

- [x] [Bài 2]: Bài làm tốt \*.

  Kích thước tổng thể đang hơi nhỏ nên rất khó nhìn, cần tăng kích thước toàn bộ các phần tử để dễ nhìn và đẹp hơn.

  Màu 2 tiêu đề đang không đúng so với bản mẫu.

  Hai tiêu đề thì tiêu đề lớn nên dùng thẻ `h2` và tiêu đề nhỏ nên dùng thẻ `h3`

  Input và button border đang không đúng.

  Phần input đang sát so với tiêu đề lớn nên giãn ra để dễ nhìn hơn.

  Nên xử lý phần input date và time tốt hơn, nên tham khảo câu hỏi của các bạn lớp khác trong phần câu hỏi để hoàn thiện hơn.

---

- [x] [Bài 3]: Bài làm tốt.

  Phần action khi hover vào đang hơi bị chìm vì màu nền của ảnh.

  Sai hoàn toàn cấu trúc trong file HTML cần xem lại để đặt đúng các thẻ trong HTML.

  Phần nav giữa các mục cần cách ra một khoảng cho giống với bản mẫu.

  Khoảng cách giữa icon star và chữ nên cách nhau ra để dễ nhìn hơn.

---

- Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần chỉnh chu hơn, đặc biệt chú về lỗi sai cấu trúc của file HTML, cần xem lại và rút kinh nghiệm lần sau.

---

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day4)

- [x] [Bài 1]: Bài làm tốt. \*

  2 đoạn text có các style giống nhau, nên gom chung vào một thẻ p và sử dụng thẻ br để ngắt dòng

  - Đề xuất sửa thành:

  ```html
  <p class="form-desc">
    Sign up and we'll send your the best freelance opportunities straight to
    your inbox.<br />
    We're building the largest self-service freelancing marketplace for people
    like you.
  </p>
  ```

  Border của input và button chưa được xử lý triệt để và phần placeholder của input đang sát với viền trái cần cách ra cho dễ nhìn và đẹp hơn.

  Input và Button chưa được border-radius.

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- [x] [Bài 2]: Bài làm rất tốt. \*

  Xử lý font chưa tốt: Font chữ chưa hoạt động và màu chưa đúng so với bản mẫu.

  Button chưa `border-radius` như bản mẫu.

---

- [x] [Bài 3]: Bài làm chưa tốt.

  Chưa thực sự chỉnh chu khi thiết kế Layout, rất ẩu. Cần bám vào ảnh mẫu để thiết kế.

  Khi hover vào ảnh sản phẩm mới xuất hiện các action.

---

- Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần dành thời gian chỉnh chu hơn để dựng layout sao cho giống với bản mẫu đã yêu cầu. Cần chú ý một số lỗi khác để hoàn thiện hơn.

---

## [Sơn Trần](https://github.com/2003son/F8-FE-K3/tree/main/day4)

- [x] [Bài 1]: Bài làm tốt.

  Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp

  Nên dùng thẻ `footer` chứ không cần đặt id là `footer`

  Đây là section trong trang thì title nên đặt `h2`

  Input và button chưa xử lý border.

  Sai chính tả tiêu đề `with` thành `width`.

  Button khi chưa hover không đúng so với bản mẫu.

  Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp

---

- [x] [Bài 2]: Bài làm chưa tốt.

  Kích thước tổng thể đang hơi nhỏ nên rất khó nhìn, cần tăng kích thước toàn bộ các phần tử để dễ nhìn và đẹp hơn.

  Màu của placeholder đang nhạt so với màu ở bản mẫu.

  Button chưa border-radius và cần padding thêm để button nhìn rộng và đẹp hơn.

  Input nhập số người nên để type là number tránh người dùng nhập sai kiểu dữ liệu. Tương tự như 2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

  Tên class nên đặt bằng tiếng anh.

  Tiêu đề nhỏ không nên dùng thẻ span, cân nhắc dùng thẻ `h3`.

  Tiêu đề lớn là một title trong một section nhỏ trong trang web cân nhắc dùng thẻ `h2`.

  Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- [x] [Bài 3]: Bài làm rất tốt. \*

  Các mục chuyển nội dung cần có khoảng cách với nhau như bản gốc.

  Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- Đánh giá chung bài tập về nhà: Bài làm khá tốt, cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Nguyễn Văn Hải](https://hainvsp9x.github.io/f8-feoffline-k3/)

- [x] [Bài 1]: Bài làm tốt.

  Nên thay đổi thành font chữ không chân.

  Phần input và button xử lý chưa tốt. Các chữ đang bị dính vào viền gây cảm giác khó chịu cho người dùng cần cải thiện.

  Đề bài yêu cầu hover vào phần màu xanh là thay đổi màu input và button chứ không phải hover vào từng thành phần đó. Phần hover đang xử lý chưa tốt.

  Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- [x] [Bài 2]: Bài làm không tốt.

  Tiêu đề nhỏ KHÔNG viết hoa tất cả chữ cái như bản mẫu. Không chỉnh chu.

  Font chữ tiêu đề nhỏ không đúng.

  Layout không đúng so với bản mẫu, chưa xử lý tốt việc dàn layout, 2 cột đang quá xa nhau.

  Phần input cho số người thì nên để là số thay vì text để đảm bảo người dùng không nhập sai kiểu dữ liệu.

  Có thể tham khảo câu hỏi của các bạn trong phần đặt câu hỏi để làm phần input cho date, time tốt hơn.

  Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- [x] [Bài 3]: Bài làm sai layout hoàn toàn, chưa hoàn thiện.

---

- Đánh giá chung bài tập về nhà: Bài làm hầu như chưa tốt. Chưa dành nhiều thời gian vào việc làm bài tập. Cần chú ý hơn về việc học.

---

## [Nguyễn Thúy](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3)

- [x] [Bài 1]: Bài làm tốt. \*

  Phần `sub-box`, input, button chưa border-radius.

  Nên sử dụng font chữ không chân.

  Khi hover vào nền của input chưa đổi sang màu ghi vì vẫn còn một phần màu trắng.

  Không cần thẻ `label` trong trường hợp này.

  Không nên sử dụng thẻ `article` mà nên dùng thẻ `section`.

  Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- [x] [Bài 2]: Bài làm rất tốt. \*

  Phần kích thước các phần tử đang hơi to, nên điều chỉnh để nhỏ lại.

  Phần input cho số người thì nên để là số thay vì text để đảm bảo người dùng không nhập sai kiểu dữ liệu.

  Tiêu đề RESERVATION cân nhắc dùng thẻ `h3`.

  Tiêu đề lớn là một title trong một section nhỏ trong trang web cân nhắc dùng thẻ `h2`.

  Chiều cao của button đang thấp hơn so với các input.

---

- [x] [Bài 3]: Bài làm rất tốt. \*

  Phần product không nên dùng `justify-content:space-around` vì khoảng cách giữa các phần tử đang khá xa nhau.

---

- Đánh giá chung bài tập về nhà: Bài làm đều khá tốt, chỉ cần chú ý một số lỗi nhỏ để cải thiện hơn.

---

## [Đặng Anh Kiên](https://github.com/anhkiendang/F8-FE-K3/tree/main/DAY-4)

- [x] [Bài 1]: Bài làm chưa tốt.

  Chưa chỉnh chu khi làm, màu nền chưa có, chưa có xử lý tính năng hover như yêu cầu đề bài.

  Chưa xử lý tốt border của input và button.

  Bên CSS có CSS cho phần tử có class `footer` nhưng sang bên HTML không có phần tử nào có class là `footer`.

---

- [x] [Bài 2]: Bài làm tốt.

  Màu chữ đang lệch so với bản mẫu.

  Phần input cho số người thì nên để là số thay vì text để đảm bảo người dùng không nhập sai kiểu dữ liệu.

  Có thể tham khảo câu hỏi của các bạn trong phần đặt câu hỏi để làm phần input cho date, time tốt hơn.

  Kích thước tổng thể đang hơi nhỏ nên rất khó nhìn, cần tăng kích thước toàn bộ các phần tử để dễ nhìn và đẹp hơn.

  Tiêu đề RESERVATION cân nhắc dùng thẻ `h3`.

  Tiêu đề lớn là một title trong một section nhỏ trong trang web cân nhắc dùng thẻ `h2`.

  Tên class nên đặt bằng tiếng anh.

  Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp

  Button chưa border-radius.

---

- [x] [Bài 3]: Chưa làm.

---

- Đánh giá chung bài tập về nhà: Cần dành nhiều thời gian hơn để hoàn thành bài tập về nhà!

---

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main/Day-4)

- [x] [Bài 1]: Bài làm tốt.

  Màu nền chưa đúng so với bản mẫu. Nên tham khảo một số extension có thể lấy mã màu.

  Chức năng hover chưa đúng yêu cầu đề bài, chưa làm được màu nền của button chuyển sang màu vàng (Giống như chữ Earn income) và chữ của button chuyển sang màu trắng (#fff).

  Nên dùng font chữ không chân.

  Đây là section của phần footer, không nên dùng tiêu đề bằng thẻ `h1` mà nên dùng thẻ `h2`

  Không nên đặt tên như này `class="specialText"`

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  Viền trái đang sát với chữ cần cách ra đỡ gây khó chịu cho người dùng.

---

- [x] [Bài 2]: Bài làm chưa tốt.

  Các lỗi sai cơ bản: Font chữ không đúng, màu chữ không đúng, xử lý layout chưa tốt so với bản mẫu.

  Tiêu đề RESERVATION cân nhắc dùng thẻ `h3`.

  Tiêu đề lớn là một title trong một section nhỏ trong trang web cân nhắc dùng thẻ `h2`.

  Phần input cho số người thì nên để là số thay vì text để đảm bảo người dùng không nhập sai kiểu dữ liệu.

  Có thể tham khảo câu hỏi của các bạn trong phần đặt câu hỏi để làm phần input cho date, time tốt hơn.

  Nên dùng thẻ form bao quanh các thẻ input.

  Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

  - Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

---

- [x] [Bài 3]: Bài làm chưa tốt.

  Chưa triển khai được chức năng: Bấm vào các tab => Chuyển nội dung tương ứng.

  Hover vào sản phẩm chưa có các nút action như yêu cầu.

  Các mục menu chưa có khoảng cách với nhau.

  Biểu diễn menu nên dùng thẻ ul li và nên dùng thẻ nav. Semantic chưa tốt.

  Xử lý layout chưa thực sự tốt.

---

- Đánh giá chung bài tập về nhà: Bài làm hầu như chưa tốt, xử lý layout và một số kỹ năng cơ bản vẫn mắc phải nên cần dành thời gian luyện tập và chỉnh chu hơn để cải thiện.
