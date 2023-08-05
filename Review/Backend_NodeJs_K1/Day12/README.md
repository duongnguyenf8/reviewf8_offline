## [Nguyễn Đức Dũng](https://github.com/dungng1321/f8-BackEnd-NodeJS-k1/tree/feature/day-12/day12)

**Sớm nhất**

- [x] Bài 1:

  Bài làm rất tốt. \*

  Tuy nhiên chưa xử lý trường hợp nếu chuỗi nhập vào có giá trị là 0 thì cần in ra là `0 millisecond` sẽ chặt chẽ hơn.

  Đề xuất thêm điều kiện:

  ```js
  if (ms === 0) {
    return "0 millisecond";
  }
  ```

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Tuy nhiên cần thông báo lỗi cụ thể và rõ ràng nhất sẽ tốt hơn. Góp ý:

  ```js
  if (isNaN(first.getTime()) || isNaN(second.getTime())) {
    throw new Error("Invalid date. Please provide valid date strings.");
  }
  ```

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số chi tiết nhỏ để hoàn thiện hơn.

---

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi12)

- [x] Bài 1:

  Bài làm tốt.

  Tuy nhiên phần kiểm tra điều kiện đầu vào còn thiếu, chưa kiểm tra nếu đầu vào không phải là số.

  Việc check điều kiện `time > 0` sẽ bị thiếu trường hợp `time = 0` thì nên đưa ra Output sẽ là `0 millisecond.`

  Hiện tại Output khi nhập đầu vào là 1001 đang là `1 second 1 millisecond`. Output như vậy không đúng với yêu cầu đề bài khi đề bài yêu cầu giữa các đơn vị cần có dấu phẩy ngăn cách để dễ đọc hơn. Đề xuất thêm dấu phẩy ở cuối các phép cộng chuỗi ngoại trừ đơn vị `millisecond` thì thêm dấu `.`

  Bài làm đang check từng điều kiện ở trong từng `if`. Điều này vẫn ra kết quả đúng nhưng sẽ cần check khá nhiều và làm cho code dài, nên tối ưu lại cách làm, có thể tham khảo đoạn code dưới đây:

  ```js
  const convertMsToString = (milliseconds) => {
    if (
      typeof milliseconds !== "number" ||
      milliseconds < 0 ||
      !Number.isInteger(milliseconds)
    ) {
      return "Invalid input, please provide a positive integer.";
    }

    const timeUnits = [
      { unit: "day", value: 86400000 },
      { unit: "hour", value: 3600000 },
      { unit: "minute", value: 60000 },
      { unit: "second", value: 1000 },
      { unit: "millisecond", value: 1 },
    ];

    const timeParts = [];

    timeUnits.forEach(({ unit, value }) => {
      const time = Math.floor(milliseconds / value);
      milliseconds %= value;

      if (time !== 0) {
        timeParts.push(`${time} ${unit}${time !== 1 ? "s" : ""}`);
      }
    });

    if (timeParts.length === 0) {
      return "0 millisecond";
    }

    return timeParts.join(", ");
  };

  console.log(convertMsToString(34325055574));
  ```

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Kết quả đúng với ví dụ của đề bài nhưng chưa kiểm tra điều kiện đầu vào.

  Tham khảo đoạn code dưới đây để hoàn thiện hơn:

  ```js
  function isValidateFormatDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  function getDaysBetweenDates(firstDate, secondDate) {
    if (!isValidateFormatDate(firstDate) || !isValidateFormatDate(secondDate))
      throw new Error("Date format must be YYYY-MM-DD");

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    if (isNaN(first.getTime()) || isNaN(second.getTime()))
      throw new Error("Invalid date");

    const oneDay = 24 * 60 * 60 * 1000; // ms
    const diff = Math.abs(first - second);
    return `Distance between ${firstDate} and ${secondDate} is ${Math.ceil(
      diff / oneDay
    )} days`;
  }

  console.log(getDaysBetweenDates("2020-12-01", "2020-01-22"));
  ```

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm khá tốt, lưu ý kiểm tra đầy đủ các điều kiện của dữ liệu đầu vào có thể xảy ra và cần tối ưu code một cách ngắn gọn hơn.

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1/tree/main/Baitapbuoi12)

- [x] Bài 1:

  Bài làm chưa tốt.

  Cần tuân thủ chặt chẽ Output mà đề bài yêu cầu. Điều này rất quan trọng. Hiện tại Output của cách đang làm là `397d,6h,44m,15s,574mls` so với Output mà đề bài đưa mẫu là `397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds`. Output càng rõ ràng càng dễ hiểu và thuận tiện cho việc sửa đổi và cải thiện sau này.

  Bài làm chưa check kỹ các trường hợp ngoại lệ của đầu vào. Hiện tại bài làm sẽ có kết quả như sau trong trường hợp:

  ```js
  console.log(readTime(-8)); //Output: -8mls.
  ```

  Việc quan trọng ở bài toán này là xử lý số ít và số nhiều nhưng hiện tại chưa xử lý được vì đã fix cứng đơn vị của các thành phần là `d`, `h`, `m`, `s`, `mls`.

  Tham khảo đoạn code dưới đây để sửa đổi và cải thiện bài làm hơn:

  ```js
  const convertMsToString = (milliseconds) => {
    if (
      typeof milliseconds !== "number" ||
      milliseconds < 0 ||
      !Number.isInteger(milliseconds)
    ) {
      return "Invalid input, please provide a positive integer.";
    }

    const timeUnits = [
      { unit: "day", value: 86400000 },
      { unit: "hour", value: 3600000 },
      { unit: "minute", value: 60000 },
      { unit: "second", value: 1000 },
      { unit: "millisecond", value: 1 },
    ];

    const timeParts = [];

    timeUnits.forEach(({ unit, value }) => {
      const time = Math.floor(milliseconds / value);
      milliseconds %= value;

      if (time !== 0) {
        timeParts.push(`${time} ${unit}${time !== 1 ? "s" : ""}`);
      }
    });

    if (timeParts.length === 0) {
      return "0 millisecond";
    }

    return timeParts.join(", ");
  };

  console.log(convertMsToString(34325055574));
  ```

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Kết quả đúng với ví dụ của đề bài nhưng chưa kiểm tra điều kiện đầu vào.

  Tham khảo đoạn code dưới đây để hoàn thiện hơn:

  ```js
  function isValidateFormatDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  function getDaysBetweenDates(firstDate, secondDate) {
    if (!isValidateFormatDate(firstDate) || !isValidateFormatDate(secondDate))
      throw new Error("Date format must be YYYY-MM-DD");

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    if (isNaN(first.getTime()) || isNaN(second.getTime()))
      throw new Error("Invalid date");

    const oneDay = 24 * 60 * 60 * 1000; // ms
    const diff = Math.abs(first - second);
    return `Distance between ${firstDate} and ${secondDate} is ${Math.ceil(
      diff / oneDay
    )} days`;
  }

  console.log(getDaysBetweenDates("2020-12-01", "2020-01-22"));
  ```

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm chưa tốt, cần tuân thủ chuẩn Output mà đề bài đưa ra và kiểm tra đầy đủ các trường hợp đầu vào có thể xảy ra để hoàn thiện hơn.

---

## [Phạm Hoàng](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW12/js)

- [x] Bài 1:

  Bài làm chưa tốt.

  Bài làm chưa kiểm tra điều kiện đầu vào của `milliseconds`, sau đây là một số kết quả của cách làm hiện tại:

  ```js
  console.log(convertMilliseconds(-8)); //Output: -1 days, 23 hours, 59 minutes, 59 seconds, 992 milliseconds.
  console.log(convertMilliseconds(0)); //Output: 0 days, 0 hours, 0 minutes, 0 seconds, 0 milliseconds.
  console.log(convertMilliseconds(1001)); //Output: 0 days, 0 hours, 0 minutes, 1 seconds, 1 milliseconds
  console.log(convertMilliseconds("a")); //Output: NaN days, NaN hours, NaN minutes, NaN seconds, NaN milliseconds
  ```

  Đối chiếu các Output trên với Output đề bài đưa ra có một số nhận xét sau đây:

  - Chưa xử lý số ít, số nhiều. Hiện tại dù giá trị là 1 nhưng đơn vị vẫn thể hiện dạng số nhiều.

  - Chưa xử lý đầu vào là số âm, số 0, đầu vào không phải là số.

  - Nếu giá trị của thành phần nào là 0 thì vẫn đang hiển thị ra nhưng đề bài không cần hiển thị giá trị nào là 0.

  Tham khảo đoạn code dưới đây để sửa đổi và hoàn thiện hơn:

  ```js
  const convertMsToString = (milliseconds) => {
    if (
      typeof milliseconds !== "number" ||
      milliseconds < 0 ||
      !Number.isInteger(milliseconds)
    ) {
      return "Invalid input, please provide a positive integer.";
    }

    const timeUnits = [
      { unit: "day", value: 86400000 },
      { unit: "hour", value: 3600000 },
      { unit: "minute", value: 60000 },
      { unit: "second", value: 1000 },
      { unit: "millisecond", value: 1 },
    ];

    const timeParts = [];

    timeUnits.forEach(({ unit, value }) => {
      const time = Math.floor(milliseconds / value);
      milliseconds %= value;

      if (time !== 0) {
        timeParts.push(`${time} ${unit}${time !== 1 ? "s" : ""}`);
      }
    });

    if (timeParts.length === 0) {
      return "0 millisecond";
    }

    return timeParts.join(", ");
  };

  console.log(convertMsToString(34325055574));
  ```

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Kết quả đúng với ví dụ của đề bài nhưng chưa kiểm tra điều kiện đầu vào.

  Tham khảo đoạn code dưới đây để hoàn thiện hơn:

  ```js
  function isValidateFormatDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  function getDaysBetweenDates(firstDate, secondDate) {
    if (!isValidateFormatDate(firstDate) || !isValidateFormatDate(secondDate))
      throw new Error("Date format must be YYYY-MM-DD");

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    if (isNaN(first.getTime()) || isNaN(second.getTime()))
      throw new Error("Invalid date");

    const oneDay = 24 * 60 * 60 * 1000; // ms
    const diff = Math.abs(first - second);
    return `Distance between ${firstDate} and ${secondDate} is ${Math.ceil(
      diff / oneDay
    )} days`;
  }

  console.log(getDaysBetweenDates("2020-12-01", "2020-01-22"));
  ```

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm khá tốt, lưu ý kiểm tra đầy đủ các điều kiện của dữ liệu đầu vào có thể xảy ra để hoàn thiện hơn.

---

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB12)

- [x] Bài 1:

  Bài làm chưa tốt.

  Cần tuân thủ chặt chẽ Output mà đề bài yêu cầu. Điều này rất quan trọng. Hiện tại Output của cách đang làm là `397d,6h,44m,15s,574mls` so với Output mà đề bài đưa mẫu là `397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds`. Output càng rõ ràng càng dễ hiểu và thuận tiện cho việc sửa đổi và cải thiện sau này.

  Bài làm chưa check kỹ các trường hợp ngoại lệ của đầu vào. Hiện tại bài làm sẽ có kết quả như sau trong trường hợp:

  ```js
  console.log(readTime(-8)); //Output: -8mls.
  ```

  Việc quan trọng ở bài toán này là xử lý số ít và số nhiều nhưng hiện tại chưa xử lý được vì đã fix cứng đơn vị của các thành phần là `d`, `h`, `m`, `s`, `mls`.

  Tham khảo đoạn code dưới đây để sửa đổi và cải thiện bài làm hơn:

  ```js
  const convertMsToString = (milliseconds) => {
    if (
      typeof milliseconds !== "number" ||
      milliseconds < 0 ||
      !Number.isInteger(milliseconds)
    ) {
      return "Invalid input, please provide a positive integer.";
    }

    const timeUnits = [
      { unit: "day", value: 86400000 },
      { unit: "hour", value: 3600000 },
      { unit: "minute", value: 60000 },
      { unit: "second", value: 1000 },
      { unit: "millisecond", value: 1 },
    ];

    const timeParts = [];

    timeUnits.forEach(({ unit, value }) => {
      const time = Math.floor(milliseconds / value);
      milliseconds %= value;

      if (time !== 0) {
        timeParts.push(`${time} ${unit}${time !== 1 ? "s" : ""}`);
      }
    });

    if (timeParts.length === 0) {
      return "0 millisecond";
    }

    return timeParts.join(", ");
  };

  console.log(convertMsToString(34325055574));
  ```

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Kết quả đúng với ví dụ của đề bài nhưng chưa kiểm tra điều kiện đầu vào.

  Tham khảo đoạn code dưới đây để hoàn thiện hơn:

  ```js
  function isValidateFormatDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  function getDaysBetweenDates(firstDate, secondDate) {
    if (!isValidateFormatDate(firstDate) || !isValidateFormatDate(secondDate))
      throw new Error("Date format must be YYYY-MM-DD");

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    if (isNaN(first.getTime()) || isNaN(second.getTime()))
      throw new Error("Invalid date");

    const oneDay = 24 * 60 * 60 * 1000; // ms
    const diff = Math.abs(first - second);
    return `Distance between ${firstDate} and ${secondDate} is ${Math.ceil(
      diff / oneDay
    )} days`;
  }

  console.log(getDaysBetweenDates("2020-12-01", "2020-01-22"));
  ```

---

- [x] Bài 3:

  **Chưa làm**.

---

- [x] Đánh giá: Bài làm chưa tốt, cần tuân thủ chuẩn Output mà đề bài đưa ra và kiểm tra đầy đủ các trường hợp đầu vào có thể xảy ra và cần hoàn thành đầy đủ bài tập về nhà. Nếu như gặp khó khăn cần đặt câu hỏi kịp thời để được giải đáp.

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-12/src)

- [x] Bài 1:

  Bài làm tốt. \*

  Tuy nhiên bài làm chưa xét hết các trường hợp của đầu vào. Ví dụ kết quả hiện tại của một số trường hợp đang như sau là không đúng:

  ```js
  console.log(convertMilliseconds(0)); //Output: null.
  console.log(convertMilliseconds(-8)); //Output: null.
  ```

  Vì vậy cần xét tất cả các trường hợp có thể xảy ra của Input và thông báo lỗi một cách cụ thể nhất chứ không phải lúc nào cũng là `null`.

  Bài làm đúng về Output nhưng xét quá nhiều `if...else`, nên tối ưu lại code một cách hiệu quả hơn.

  Có thể tham khảo đoạn code dưới đây để sửa đổi và hoàn thiện hơn:

  ```js
  const convertMsToString = (milliseconds) => {
    if (
      typeof milliseconds !== "number" ||
      milliseconds < 0 ||
      !Number.isInteger(milliseconds)
    ) {
      return "Invalid input, please provide a positive integer.";
    }

    const timeUnits = [
      { unit: "day", value: 86400000 },
      { unit: "hour", value: 3600000 },
      { unit: "minute", value: 60000 },
      { unit: "second", value: 1000 },
      { unit: "millisecond", value: 1 },
    ];

    const timeParts = [];

    timeUnits.forEach(({ unit, value }) => {
      const time = Math.floor(milliseconds / value);
      milliseconds %= value;

      if (time !== 0) {
        timeParts.push(`${time} ${unit}${time !== 1 ? "s" : ""}`);
      }
    });

    if (timeParts.length === 0) {
      return "0 millisecond";
    }

    return timeParts.join(", ");
  };

  console.log(convertMsToString(34325055574));
  ```

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Kết quả đúng với ví dụ của đề bài nhưng chưa kiểm tra điều kiện đầu vào.

  Tham khảo đoạn code dưới đây để hoàn thiện hơn:

  ```js
  function isValidateFormatDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  function getDaysBetweenDates(firstDate, secondDate) {
    if (!isValidateFormatDate(firstDate) || !isValidateFormatDate(secondDate))
      throw new Error("Date format must be YYYY-MM-DD");

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    if (isNaN(first.getTime()) || isNaN(second.getTime()))
      throw new Error("Invalid date");

    const oneDay = 24 * 60 * 60 * 1000; // ms
    const diff = Math.abs(first - second);
    return `Distance between ${firstDate} and ${secondDate} is ${Math.ceil(
      diff / oneDay
    )} days`;
  }

  console.log(getDaysBetweenDates("2020-12-01", "2020-01-22"));
  ```

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm tốt tuy nhiên cần kiểm tra đầy đủ các trường hợp có thể xảy ra ở đầu vào và cần tối ưu code ngắn gọn để hoàn thiện hơn.

---

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1.git)

- [x] Bài 1:

  Bài làm chưa tốt.

  Cần tuân thủ chặt chẽ Output mà đề bài yêu cầu. Điều này rất quan trọng. Hiện tại Output của cách đang làm là `397d,6h,44m,15s,574mls` so với Output mà đề bài đưa mẫu là `397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds`. Output càng rõ ràng càng dễ hiểu và thuận tiện cho việc sửa đổi và cải thiện sau này.

  Bài làm chưa check kỹ các trường hợp ngoại lệ của đầu vào. Hiện tại bài làm sẽ có kết quả như sau trong trường hợp:

  ```js
  console.log(convertTime(-8)); //Output: -8mls.
  ```

  Việc quan trọng ở bài toán này là xử lý số ít và số nhiều nhưng hiện tại chưa xử lý được vì đã fix cứng đơn vị của các thành phần là `d`, `h`, `m`, `s`, `mls`.

  Tham khảo đoạn code dưới đây để sửa đổi và cải thiện bài làm hơn:

  ```js
  const convertMsToString = (milliseconds) => {
    if (
      typeof milliseconds !== "number" ||
      milliseconds < 0 ||
      !Number.isInteger(milliseconds)
    ) {
      return "Invalid input, please provide a positive integer.";
    }

    const timeUnits = [
      { unit: "day", value: 86400000 },
      { unit: "hour", value: 3600000 },
      { unit: "minute", value: 60000 },
      { unit: "second", value: 1000 },
      { unit: "millisecond", value: 1 },
    ];

    const timeParts = [];

    timeUnits.forEach(({ unit, value }) => {
      const time = Math.floor(milliseconds / value);
      milliseconds %= value;

      if (time !== 0) {
        timeParts.push(`${time} ${unit}${time !== 1 ? "s" : ""}`);
      }
    });

    if (timeParts.length === 0) {
      return "0 millisecond";
    }

    return timeParts.join(", ");
  };

  console.log(convertMsToString(34325055574));
  ```

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Kết quả đúng với ví dụ của đề bài nhưng chưa kiểm tra điều kiện đầu vào.

  Tham khảo đoạn code dưới đây để hoàn thiện hơn:

  ```js
  function isValidateFormatDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  function getDaysBetweenDates(firstDate, secondDate) {
    if (!isValidateFormatDate(firstDate) || !isValidateFormatDate(secondDate))
      throw new Error("Date format must be YYYY-MM-DD");

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    if (isNaN(first.getTime()) || isNaN(second.getTime()))
      throw new Error("Invalid date");

    const oneDay = 24 * 60 * 60 * 1000; // ms
    const diff = Math.abs(first - second);
    return `Distance between ${firstDate} and ${secondDate} is ${Math.ceil(
      diff / oneDay
    )} days`;
  }

  console.log(getDaysBetweenDates("2020-12-01", "2020-01-22"));
  ```

---

- [x] Bài 3:

  **Chưa làm**.

---

- [x] Đánh giá: Bài làm chưa tốt, cần tuân thủ chuẩn Output mà đề bài đưa ra và kiểm tra đầy đủ các trường hợp đầu vào có thể xảy ra và cần hoàn thành đầy đủ bài tập về nhà. Nếu như gặp khó khăn cần đặt câu hỏi kịp thời để được giải đáp.

---

## [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab12)

- [x] Bài 1:

  Bài làm tốt.

  Tuy nhiên để đoạn dễ đọc hơn, nên thêm một biến để lưu trữ số mili giây còn lại sau mỗi lần chia, thay vì sử dụng tham số milliseconds ban đầu.

  Và nên thêm những điều kiện kiểm tra lỗi cho các tham số đầu vào như:

  - Nếu milliseconds nhỏ hơn 0 hoặc không phải là số nguyên thì trả về một thông báo lỗi.

  - Nếu result rỗng (tức là milliseconds ban đầu bằng 0) thì trả về chuỗi "0 milliseconds".

---

- [x] Bài 2:

  Bài làm tốt.

  Nhưng để hoàn thiện hơn, nên thêm những điều kiện sau để kiểm tra lỗi cho các tham số đầu vào:

  - Kiểm tra lỗi cho các tham số đầu vào startDate và endDate để đảm bảo chúng là các chuỗi ngày hợp lệ.

  - Kiểm tra để đảm bảo rằng startDate luôn nhỏ hơn hoặc bằng endDate. Hay sử dụng giá trị tuyệt đối để tính toán, để đảm bảo rằng kết quả trả về luôn là một số dương khi người dùng muốn tính khoảng cách thời gian giữa hai ngày mà không quan tâm đến thứ tự của chúng.

---

- [x] Bài 3:

  Bài làm rất tốt \*

---

- [x] Đánh giá: Bài làm tốt. Và để hoàn thiện hơn nữa nên để ý tới các tham số đầu vào, thêm các điều kiện để kiểm soát lỗi tốt hơn.

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_nodejs/homeword/day12)

- [x] Bài 1:

  Bài làm tốt.

  Nhưng để có thể đoạn dễ đọc hơn, nên thêm một biến để lưu trữ số mili giây còn lại sau mỗi lần chia, thay vì sử dụng tham số milliseconds ban đầu.

  Và nên thêm những điều kiện kiểm tra lỗi cho các tham số đầu vào như:

  - Nếu milliseconds nhỏ hơn 0 hoặc không phải là số nguyên thì trả về một thông báo lỗi.

  - Nếu result rỗng (tức là milliseconds ban đầu bằng 0) thì trả về chuỗi "0 milliseconds".

---

- [x] Bài 2:

  Bài làm tốt.

  Để hoàn thiện hơn, nên thêm những điều kiện sau để kiểm tra lỗi cho các tham số đầu vào:

  - Kiểm tra lỗi cho các tham số đầu vào startDate và endDate để đảm bảo chúng là các chuỗi ngày hợp lệ.

  - Kiểm tra để đảm bảo rằng startDate luôn nhỏ hơn hoặc bằng endDate. Hay sử dụng giá trị tuyệt đối để tính toán, để đảm bảo rằng kết quả trả về luôn là một số dương khi người dùng muốn tính khoảng cách thời gian giữa hai ngày mà không quan tâm đến thứ tự của chúng.

  Ngoài ra, nên sử dụng phương thức Math.floor thay vì Math.ceil để làm tròn kết quả xuống, vì khoảng cách giữa hai ngày được tính bằng số ngày đầy đủ giữa chúng.

---

- [x] Bài 3:

  Bài làm rất tốt \*

---

- [x] Đánh giá: Bài làm tốt. Và để hoàn thiện hơn nữa nên để ý tới các tham số đầu vào, thêm các điều kiện để kiểm soát lỗi tốt hơn.

---

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi12)

- [x] Bài 1:

  Bài làm chưa tốt.

  Để tối ưu code hơn trong bài này ( đỡ phải viết lại nhiều những đoạn lặp lại ) nên áp dụng cách các phương thức `reduce` hoặc `map` để xử lí bài toán.

  Và để đoạn code dễ đọc hơn, nên thêm một biến để lưu trữ số mili giây còn lại sau mỗi lần chia, thay vì sử dụng tham số ms ban đầu.

  Nên thêm những điều kiện kiểm tra lỗi cho các tham số đầu vào như:

  - Nếu ms nhỏ hơn 0 hoặc không phải là số nguyên thì trả về một thông báo lỗi.

  - Nếu result rỗng (tức là ms ban đầu bằng 0) thì trả về chuỗi "0 millisecond".

---

- [x] Bài 2:

  Bài làm tốt.

  Nhưng để hoàn thiện hơn, nên thêm những điều kiện sau để kiểm tra lỗi cho các tham số đầu vào:

  - Kiểm tra lỗi cho các tham số đầu vào startDate và endDate để đảm bảo chúng là các chuỗi ngày hợp lệ.

  - Kiểm tra để đảm bảo rằng startDate luôn nhỏ hơn hoặc bằng endDate. Hay sử dụng giá trị tuyệt đối để tính toán, để đảm bảo rằng kết quả trả về luôn là một số dương khi người dùng muốn tính khoảng cách thời gian giữa hai ngày mà không quan tâm đến thứ tự của chúng.

  Ngoài ra, nên sử dụng phương thức Math.floor để làm tròn kết quả xuống, vì khoảng cách giữa hai ngày được tính bằng số ngày đầy đủ giữa chúng.

---

- [x] Bài 3:

  Bài làm rất tốt \*

---

- [x] Đánh giá: Bài làm tốt. Và để hoàn thiện hơn nữa nên để ý tới các tham số đầu vào, thêm các điều kiện để kiểm soát lỗi tốt hơn.

---

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVN/BTVNB12)

- [x] Bài 1:

  Bài làm chưa tốt.

  Để tối ưu code hơn trong bài này ( đỡ phải viết lại nhiều những đoạn lặp lại ) nên áp dụng cách các phương thức `reduce` hoặc `map` để xử lí bài toán.

  Và để đoạn code dễ đọc hơn, có thể thêm một biến để lưu trữ số mili giây còn lại sau mỗi lần chia, thay vì sử dụng tham số `ms` ban đầu.

  Nên thêm những điều kiện kiểm tra lỗi cho các tham số đầu vào như:

  - Nếu `ms` nhỏ hơn 0 hoặc không phải là số nguyên thì trả về một thông báo lỗi.

  - Nếu `result` rỗng (tức là `ms` ban đầu bằng 0) thì trả về chuỗi "0 millisecond".

---

- [x] Bài 2:

  Bài làm tốt.

  Nhưng để hoàn thiện hơn, nên thêm những điều kiện sau để kiểm tra lỗi cho các tham số đầu vào:

  - Kiểm tra lỗi cho các tham số đầu vào startDate và endDate để đảm bảo chúng là các chuỗi ngày hợp lệ.

  - Kiểm tra để đảm bảo rằng startDate luôn nhỏ hơn hoặc bằng endDate. Hay sử dụng giá trị tuyệt đối để tính toán, để đảm bảo rằng kết quả trả về luôn là một số dương khi người dùng muốn tính khoảng cách thời gian giữa hai ngày mà không quan tâm đến thứ tự của chúng.

---

- [x] Bài 3:

  Bài làm rất tốt \*

---

- [x] Đánh giá: Bài làm tốt. Và để hoàn thiện hơn nữa nên để ý tới các tham số đầu vào, thêm các điều kiện để kiểm soát lỗi tốt hơn.

---

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi12)

- [x] Bài 1:

  Bài làm tốt.

  Và để đoạn code dễ đọc hơn, có thể thêm một biến để lưu trữ số mili giây còn lại sau mỗi lần chia, thay vì sử dụng tham số `duration` ban đầu

  Nên thêm những điều kiện kiểm tra lỗi cho các tham số đầu vào như:

  - Nếu `duration` nhỏ hơn 0 hoặc không phải là số nguyên thì trả về một thông báo lỗi.

  - Nếu `result` rỗng (tức là `duration` ban đầu bằng 0) thì trả về chuỗi "0 millisecond".

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Có một số vấn đề cần được sửa đổi như sau:

  - Đầu tiên, hai tham số truyền vào nên được định dạng là YYYY-MM-DD để đảm bảo tính tương thích và chính xác khi làm việc với ngày tháng trong JavaScript.

  - Thứ hai, trong hàm calculateDiffDates, hai biến startDate và endDate được truyền vào nhưng lại không được sử dụng. Thay vào đó, hàm sử dụng hai biến startDate và endDate được khai báo bên ngoài hàm. Điều này sẽ gây ra nhầm lẫn và sai sót khi sử dụng hàm. Nên sửa đổi hàm calculateDiffDates để sử dụng hai biến startDate và endDate được truyền vào thay vì hai biến được khai báo bên ngoài hàm.

  - Thứ ba, phép so sánh time1 === NaN && time2 === NaN không đúng, vì NaN không bằng với chính nó. Để kiểm tra xem một giá trị có phải là NaN hay không, ta nên sử dụng hàm `isNaN`.

  - Thứ tư, biến milisecDiff được tính bằng cách lấy trị tuyệt đối của hiệu số giây giữa hai ngày, nhưng kết quả trả về lại không được làm tròn, nên sử dụng thêm hàm Math.floor

  - Thứ năm, startDate.getTime() và endDate.getTime() không hoạt động vì startDate và endDate là chuỗi, không phải đối tượng `Date`. Cần sửa lại thêm toán tử `new`để khởi tạo một đối tượng Date mới có thể dùng được phương thức getTime().

---

- [x] Bài 3:

  Bài làm rất tốt \*

---

- [x] Đánh giá: Bài làm chưa tốt. Nên cẩn thận hơn khi làm việc với các tham số đầu vào, thêm các điều kiện để kiểm soát lỗi tốt hơn. Cần nắm chắc về cách sử dụng các phương thức và thuộc tính của đối tượng Date để tránh sai sót

---
