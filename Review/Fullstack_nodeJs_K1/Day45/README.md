# Dương review bài tập về nhà buổi 45 - Lớp K1

## [Luu Anh Quan](https://github.dev/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day45)

- [x] Bài 1: Bài làm rất tốt

## [Duong Hiep](https://github.dev/duonghiep416/duonghiep_f8_fullstack/tree/main/Day45-Game-Number)

- [x] Bài 1

  Nên tắt auto complete đi để nút tăng, giảm không bị dính vào các list suggest.

  Nên sử dụng tính toán để đưa ra số MAX_TURN động để việc thay đổi config sẽ dễ dàng hơn

  ```js
  const config = {
    MIN_NUMBER: 1,
    MAX_NUMBER: 99,
    MAX_TURN: 7,
  };
  export default config;
  ```

  Trong case `history/add` nên lấy correctAnswerer từ state thay vì phải truyền lại từ trong payload.

  ```js
  case 'history/add':
  const dataHistory = [
    {
      id: state.history.length + 1,
      answers: action.payload.dataAnswers,
      correctAnswer: action.payload.randomNumber
    },
    ...state.history
  ]
  saveDataInBrowser('history', dataHistory)
  return {
    ...state,
    history: dataHistory
  }
  ```

  Chưa rõ việc tách thành hàm ở phần này:

  ```js
  function saveDataInBrowser(type, data) {
    localStorage.setItem(type, JSON.stringify(data));
  }
  export default saveDataInBrowser;
  ```

  Hầu hết các file hiện tại trong helper chỉ để dùng cho form, nên tách ra thành util của form

  Ở file ProgressBar không cần thiết phải sử dụng ref, chỉ cần sử dụng style width là được.

- [x] Đánh giá chung bài tập về nhà: Các chức năng code rất tốt, tuy nhiên các phần code format thì nên xem lại.

## [Nguyen Thi Hong Ha](https://github.dev/ha752002/f8-fullstack-k1/tree/main/Ex_ReactJs/day45)

- [x] Bài 1

  Bài làm chưa tốt

  Thiếu case:

  - Khi chưa focus vào input, không thể submit, xoá...
  - Chưa làm case scroll table
  - Khi xong màn chơi, chưa thể Enter để vào màn chơi mới.

  Khi nhập số, sử dụng mũi tên để thay đổi giá trị, đang set lên dispatch làm cho re-render toàn trang, mặc dù không sử dụng số làm gì cả, chỉ lúc submit mới cần.

  Khi vào trang bị render 2 lần

  Khi submit... đều render 2 lần

  Khi keydown bắt vào sự kiện submit nhưng sau đó nếu keyup lại nhận thêm một submit nữa.

  Sử dụng debounce khi submit làm cho cảm giác thay đổi UI đang bị chậm, bị lag.

  Chưa rõ lý do cho useCallback và \_debounce ở trong handleSubmit

  Có thể tối ưu lại đoạn code này không cần dùng toán tử 3 ngôi:

  ```js
  {
    !props.isOutOfTurn ? (
      <input
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          props.onkeyDownInput(e.key);
        }}
        className={clsx(Styles.custom_input)}
        value={props.value}
        type='text'
        autoComplete='off'
        name='number'
        placeholder='Thử một số'
        id='number'
        ref={inputRef}
      />
    ) : (
      <></>
    );
  }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, các case xử lý chưa tốt, còn thiếu nhiều, quá lợi dụng state, globalState và ref.

## [Nguyen Xuan Tuan Anh](https://github.dev/xuananh2212/js-fullstack/tree/main/day45)

- [x] Bài 1

  Bài làm không tốt

  Chưa xử lý xoá các ký tự đặc biệt, chữ trong input

  Các mũi tên chỉ hoạt động khi focus vào input, như thế là không đúng.

  Chưa có scroll bảng.

  Các đoạn text, chính tả, viết hoa, thường chưa chỉn chu.

  **Code format**

  Các đoạn code rất khó hiểu, thủ công và chưa chỉn chu.

  Chưa rõ chức năng của đoạn code này:

  ```js
  const handleKeyDown = (e) => {
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  };
  ```

  Phần code này nên lấy số từ config thay vì để cứng số 99

  ```js
  const numberRandom = useRef(Math.floor(Math.random() * 99) + 1);

  // Đây nữa

  const {
    state: { remaining },
  } = useSelector();
  return (
    <>
      <h2 className='title'>Chào mừng bạn đến với trò chơi đoán số</h2>
      <span className='remaining'>
        số lần còn lại:{' '}
        <span className='number'> {`${remaining}/${MAX_TIME}`}</span>
      </span>
      <p className='desc'>Bạn Cần tìm kiếm một số từ 1 đến 99</p>
    </>
  );
  ```

## [Nguyen Duy Hieu](https://github.dev/HieuBoss/F8-fullstack-k2/tree/main/react_bt/lesson6)

- [x] Bài 1

  Bài làm không tốt

  Chưa xử lý một case nào.

## [Duong Quoc Anh](https://github.dev/QuocAnh-bit/F8_fullstack_006/tree/main/react)

- [x] Bài 1

  Bài làm không tốt

  Trừ giao diện sáng, tối.

  Chưa xử lý một case nào.

## [Phạm Tuấn](https://github.dev/QuocAnh-bit/F8_fullstack_006/tree/main/react)

- [x] Bài 1

  Bài làm rất tốt.

  **Code format**

  Ở phần này nên sử dụng dữ liệu động thay vì fix cứng 99

  ```js
  <Heading as='h2' {...commonHeadingStyles} color='primary.600'>
    Bạn cần tìm kiếm một số từ 1 đến 99
  </Heading>
  ```

## [Phan Trung Hiếu](https://github.dev/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/React/btvn_buoi_45)

- [x] Bài 1

  Bài làm không tốt

  Chưa hoàn thiện một case nào.
