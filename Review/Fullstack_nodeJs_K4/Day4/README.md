## [Nguyễn Hưng Tuân](https://github.com/hungtuan/f8-fullstack-k4/tree/main/Day-4)

[x] [Bài 1]: Bài làm rất tốt \*

Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

---

[x] [Bài 2]: Bài làm rất tốt \*

---

[x] [Bài 3]: Bài làm rất tốt \*

Vì để `width: 100%` nên đối với màn có độ rộng nhỏ sẽ full 2 viền gây khó nhìn và không tốt cho trải nghiệm người dùng.

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

Đánh giá chung bài tập về nhà: Bài làm hầu hết đều rất tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4.git)

[x] [Bài 1]: Bài làm rất tốt \*

2 đoạn text có các style giống nhau, nên gom chung vào một thẻ p và sử dụng thẻ br để ngắt dòng

Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

---

[x] [Bài 2]: Bài làm rất tốt \*

Màu của 2 tiêu đề đang khác so với bản mẫu.

Button đang bị lệch so với input bên cạnh.

---

[x] [Bài 3]: Bài làm rất tốt \*

Khi hover vào các ảnh đang bị giật layout nhẹ nên cần xử lý vấn đề này để cải thiện trải nghiệm người dùng.

---

Đánh giá chung bài tập về nhà: Bài làm hầu hết đều rất tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_4)

[x] [Bài 1]: Bài làm rất tốt \*

---

[x] [Bài 2]: Bài làm rất tốt \*

Tiêu đề nhỏ cân nhắc dùng thẻ `h3`.

---

[x] [Bài 3]: Bài làm rất tốt \*

Nên cho kích thước các phần tử to hơn một chút sẽ dễ nhìn và phù hợp hơn.

---

Đánh giá chung bài tập về nhà: Bài làm hầu hết đều rất tốt, chỉ cần điều chỉnh một số lỗi nhỏ để hoàn thiện hơn.

---

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day04)

[x] [Bài 1]: Bài làm tốt.

Chiều cao phần section đang hơi cao so với bản gốc.

Phần text 2 dòng đang hơi sát nhau cần điều chỉnh khoảng cách.

Phần placeholder của input đang sát vào viền gây khó chịu cho người dùng.

Phần input xử lý border chưa tốt nên khi hover vào hiện border gây lệch với button.

Độ rộng của input và button đang hơi rộng so với bản mẫu.

Chưa border-radius input và button.

Nên sử dụng font chữ không chân.

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

[x] [Bài 2]: Bài làm chưa tốt.

Hai ô input DATE và TIME đang không focus được, cần xử lý lại.

Border của input DATE và TIME đang khác so với các border của các input còn lại.

Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

Chưa rõ mục đích sử dụng `type=radio` ở hai chỗ sau đây:

```html
<input type="radio" name="date-time" class="radio" />
<input type="date" name="date_input" id="date" />
<span class="placeholder">DATE</span>
```

```html
<input type="radio" name="date-time" class="radio" />
<input type="time" name="date_time" id="time" />
<span class="placeholder">TIME</span>
```

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

[x] [Bài 3]: Sai Layout phần sản phẩm.

---

Đánh giá chung bài tập về nhà: Bài làm chưa tốt cần xử lý lại một số chỗ đã nhận xét và bài 3 đang sai hoàn toàn phần layout, cần dành nhiều thời gian và chỉnh chu hơn trong việc làm bài tập.

---

## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_04)

[x] [Bài 1]: Bài làm rất tốt \*

---

[x] [Bài 2]: Bài làm chưa tốt.

Sai font chữ tiêu đề và các placeholder trong thẻ input, thẻ button so với bản mẫu.

Xử lý 2 input nhập DATE và TIME chưa tốt, sai so với bản mẫu, có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

---

[x] [Bài 3]: Bài làm tốt.

Xử lý ảnh sản phẩm chưa tốt, kích thước đang rất to, khi hover vào bị giật layout không tốt cho trải nghiệm người dùng.

Sản phẩm đang quá sát viền màn hình do set `width:100%` gây khó chịu cho người dùng.

Chưa chỉnh chu.

---

Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên vẫn còn một số lỗi khá nghiêm trọng như sai font chữ, layout đang không đúng so với bản mẫu, cần dành nhiều thời gian cho việc làm bài tập để cải thiện hơn.

---

## [Nguyễn Chi Nam](https://github.com/chinam197/baitapbuo4.git)

[x] [Bài 1]: Bài làm tốt.

Nên sử dụng font chữ không chân.

Phần placeholder của input đang sát vào viền gây khó chịu cho người dùng.

Phần chứa tất cả nội dung và button chưa border-radius.

Chưa xử lý phần border của thẻ input và thẻ button.

2 dòng text đang hơi sát nhau.

Không nên sử dụng thẻ h1 vì đây chỉ là một section nhỏ của trang. Đề xuất sử dụng thẻ `h2`.

Ở file HTML khi biểu diễn đoạn text chỉ cần thẻ `<br>` là được không cần phải cách nhiều như vậy.

Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

- Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp.

---

[x] [Bài 2]: Bài làm tốt.

Khoảng cách 2 tiêu đề đang quá xa nhau.

2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

Button chưa `border-radius` như bản mẫu.

Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp.

Tiêu đề `h2` nên đưa ra ngoài table sẽ hợp lý hơn không cần thiết phải đưa vào trong.

Format code đang rất xấu, khó đọc, khó bảo trì.

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

[x] [Bài 3]: Bài làm chưa tốt.

Chưa làm chức năng hover, chưa chuyển tab khi nhấn như yêu cầu đề bài.

Format code đang rất xấu, khó đọc, khó bảo trì.

Nên dùng font chữ không chân.

Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp.

---

Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên chưa thực sự đầu tư thời gian để làm bài tập về nhà, cần chỉnh chu hơn để cải thiện trong thời gian tới.

---

## [Vinh Nguyễn](https://github.com/vinhh03/vinh_f8_fullstack_k4/tree/main/bai_tap/day04)

[x] [Bài 1]: Bài làm rất tốt \*

---

[x] [Bài 2]: Bài làm rất tốt \*

2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

Phần input nhập số người nên để `type=number` tránh người dùng nhập sai kiểu dữ liệu.

---

[x] [Bài 3]: Bài làm chưa tốt

Chưa làm chức năng nhấn vào các tab chuyển nội dung.

Khi hover vào sản phẩm thì bị giật layout nhẹ, điều này không tốt cho trải nghiệm người dùng.

Cần thực hiện đầy đủ các yêu cầu của đề bài.

---

Đánh giá chung bài tập về nhà: Bài làm tương đối tốt tuy nhiên cần cải thiện xử lý layout ở bài 3, nếu khó khăn có thể hỏi các bạn trong lớp hoặc các bạn trợ giảng sẽ giúp đỡ.

---

## [Trần Quý](https://github.com/TranQuy252/f8_fullstack_k4/tree/main/Day_4)

[x] [Bài 1]: Bài làm rất tốt \*

Nên sử dụng font chữ không chân.

Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp.

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

[x] [Bài 2]: Bài làm chưa tốt

Tiêu đề nhỏ cân nhắc dùng thẻ `h3`.

Layout chia không đúng với bản mẫu, các thẻ input đang cách xa nhau, cần điều chỉnh lại.

Thẻ input chưa DATE và TIME đang hiển thị không đúng so với bản mẫu.

Phần input nhập số người nên để `type=number` tránh người dùng nhập sai kiểu dữ liệu.

Phần placeholder của các thẻ input đang dính sát vào viền gây khó chịu cho người dùng.

Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp.

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

[x] [Bài 3]: Bài làm chưa tốt

Chưa làm chức năng nhấn vào các tab chuyển nội dung, hover vào sản phẩm chuyển ảnh khác.

Hover vào sản phẩm hiện các action đang bị giật layout nhẹ.

Các sản phẩm đang cách xa nhau không đúng với bản mẫu.

Không chú trọng vào xây dựng layout theo bản mẫu.

Cần chú ý thêm về phần meta title của trang web vì nó là một phần quan trọng trong trải nghiệm người dùng, SEO. Không nên chỉ để mặc định là Document mà nên thay bằng một title phù hợp.

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

Đánh giá chung bài tập về nhà: Bài tập làm chưa tốt, vẫn còn một số lỗi khá cơ bản và nghiêm trọng, cần dành thời gian hơn làm bài tập về nhà.

---

## [Tuan Kiet Hoang](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-04)

[x] [Bài 1]: Bài làm tốt

Kích thước các phần tử đang quá nhỏ, kiểm tra css thì thấy đặt `font-size` của text trong thẻ p là 7px và các phần tử khác cũng nhỏ. Cần xem lại vì kích thước này quá nhỏ trên một trang web.

Khi hover vào thì nền input chưa đổi hết thành màu ghi.

Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

Không nên sử dụng thẻ h1 cho title vì đây chỉ là 1 section nhỏ trong trang. Đề xuất sử dụng thẻ h2.

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

[x] [Bài 2]: Bài làm tốt

Layout phần form đang không căn giữa so với tiêu đề. Cần chỉnh chu hơn.

Font-size của text trong thẻ button đang rất nhỏ.

2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

Title nhỏ nên sử dụng thẻ h3 và title lớn nên sử dụng thẻ h2.

Nên sử dụng className để style thay vì style thẳng cho tag. Vì nếu sử dụng tag selector sẽ gây ảnh hưởng đến các tag khác có cùng tên.

Cần reset css.

---

[x] [Bài 3]: Bài làm chưa tốt

Đường dẫn đến ảnh bị lỗi nên không hiển thị được ảnh và phần hover cũng không xem được.

Layout cũng lệch so với bản mẫu.

---

Đánh giá chung bài tập về nhà: Bài làm còn một số lỗi sai khá nghiêm trọng dẫn đến layout cũng lệch so với bản mẫu, cần chỉnh chu và dành thời gian làm bài tập hơn.

---

## [Trung Kien](https://github.com/suspiciously36/f8_fullstack_k4/tree/main/day-04)

[x] [Bài 1]: Bài làm tốt \*

Hai đoạn text giống nhau nên dùng một thẻ p rồi dùng thẻ <br> để xuống dòng.

Phần placeholder đang sát vào viền trái gây khó chịu cho người dùng và không đẹp, cần sửa lại.

Nên sử dụng font chữ không chân.

Vì mỗi trình duyệt đều có các style mặc định khác nhau, nên nên reset lại style của trình duyệt bằng cách sử dụng thư viện normalize.css

- Hoặc sử dụng một đoạn css đơn giản hơn, đặt ở đầu file css để reset lại style của trình duyệt:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Chiều cao của input và button đang lệch nhau cần cải thiện.

---

[x] [Bài 2]: Bài làm tốt

Khoảng cách giữa 2 cột trong form đang sát nhau dẫn đến UI không đẹp.\

Tiêu đề nhỏ nên tuân thủ theo bản mẫu cần viết hoa tất cả chữ cái.

Tiêu đề nhỏ cân nhắc dùng thẻ `h3` và tiêu đề lớn cân nhắc dùng thẻ `h2`.

Phần placeholder đang sát vào viền trái gây khó chịu cho người dùng và không đẹp, cần sửa lại.

Chiều cao của input và button đang lệch nhau cần cải thiện.

2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

Phần input nhập số người nên để `type=number` tránh người dùng nhập sai kiểu dữ liệu và sai chính tả từ PEOPLE.

Cần RESET CSS.

---

[x] [Bài 3]: Sai layout, chưa làm được một số chức năng mà đề bài yêu cầu như nhấn chuyển tab, hover vào hiện action, chưa có phần thể hiện sao đánh giá sản phẩm, phần nav không xử lý được,...

---

Đánh giá chung bài tập về nhà: Bài tập về nhà còn nhiều chỗ cần lưu ý, không chỉnh chu khi làm và cần dành nhiều thời gian để hoàn thiện hơn. Nếu khó khăn có thể đặt câu hỏi để được trợ giúp.

---

## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-4)

[x] [Bài 1]: Bài làm rất tốt \*

Nên xử lý border của input và button để hoàn thiện hơn.

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

[x] [Bài 2]: Bài làm rất tốt \*

Nên Reset CSS.

---

[x] [Bài 3]: Bài làm rất tốt \*

Nên Reset CSS.

---

Đánh giá chung bài tập về nhà: Bài tập về nhà rất tốt, chỉ cần lưu ý cần reset CSS ở mỗi file CSS để hoàn thiện hơn.

---

## [Lê Đình Hùng](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/buoi_4)

[x] [Bài 1]: Bài làm tốt \*

Button khi chưa hover đang khác so với bản mẫu.

Nên sử dụng font chữ không chân.

Căn chỉnh lại kích thước của input và button sao cho tương đối với bản mẫu.

---

[x] [Bài 2]: Bài làm rất tốt \*

2 input nhập Date và Time cần xử lý tốt hơn. Có thể tham khảo các câu hỏi trong phần câu hỏi có một số bạn lớp khác có hỏi về điều này.

---

[x] [Bài 3]: Bài làm chưa tốt

Nên sử dụng font chữ không chân.

Nên điều chỉnh khi hover vào toàn khối sản phẩm thì hiện action còn hiện đang chỉ hiện khi hover vào ảnh. Điều này làm cho khi hover vào phần dưới mép ảnh thì bị giật ẩn hiển action không tốt cho trải nghiệm người dùng.

Hover đang bị giật layout một xíu cần cải thiện điều này.

Chưa làm chức năng nhấn vào menu để chuyển tab.

---

Đánh giá chung bài tập về nhà: Bài tập về nhà tương đối tốt, nhưng cần chỉnh chu hơn đặc biệt ở bài 3 và hoàn thiện bài tập hơn.
