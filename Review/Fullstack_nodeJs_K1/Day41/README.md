# Dương review bài tập về nhà buổi 41

## [Đỗ Hà Chi](https://dist-oz4kxj5r6-serenaha12.vercel.app/home)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa xử lý rewrite URL

  Chưa xử lý Loading

  Khi đã đăng nhập, không lưu lại trạng thái khiến cho reload thì phải đăng nhập lại từ đầu

  Chưa sử dụng thẻ form khiến cho phải bấm vào button mới có thể add task

  Ở trang Login chưa sử dụng thẻ form nhưng bắt sự kiện enter, như vậy quá thủ công và không cần thiết, khiến code rối hơn nhiều

  **Chưa xử lý case EDIT**

  Khi xoá, call lại API nhưng render giao diện là chưa có todo.

  **Code format**

  File `apiConfig.jsx` không return về một JSX nào, nên sửa thành `apiConfig.js` để đỡ nhầm lẫn với các file components

  Thay vì việc lúc nào vào trang chủ cũng là login:

  ```jsx
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  </Router>
  ```

  Nên xử lý để vào trang chủ là trang Home, nếu chưa đăng nhập thì mới redirect về Login

  Các đoạn code trong `Home.jsx` quá rối, nên tách thành các component con để tránh việc rối code

  Quá lạm dụng state khi sử dụng:

  ```jsx
  const [newTask, setNewTask] = useState('');
  ```

  Phần này là không cần thiết khi có thể push lại vào `setTasks`

  ```jsx
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');
  ```

  Thay vì tạo 3 state không cần thiết, chỉ cần sử dụng 1 state:

  ```jsx
  const [alert, setAlert] = useState('');
  ```

  Sau đó xử lý các phần Severity ở tham số của gọi hàm, phần Open là không cần thiết.

  Đoạn này trong file: `Login.jsx` cũng không cần sử dụng các state, mặc dù có sẵn ở component khác, tuy nhiên lại tách ra:

  ```jsx
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  ```

  Đoạn code này trong `Login.jsx`:

  ```jsx
  setTimeout(() => {
    setOpenAlert(true);
    // setLoading(true);
    navigate('/home');
  }, 2000);
  ```

  Đang thực hiện một cách không hợp lý việc hiển thị thông báo sau đó navigate, thay vào đó nên sử dụng state chung ở cha.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa đủ case, bài làm chưa tốt với các phần xử lý action ngừoi dùng, các đoạn code xử lý chưa tốt và lạm dụng nhiều state.

## [Dương Hiệp](https://duonghiep-f8-fullstack-day41.vercel.app)

- [x] Bài 1

  Bài làm tốt

  Loading chưa bao phủ toàn bộ màn hình, khiến cho việc bấm các button vẫn có thể hoạt động

  Đang bị call 2 request get todos

  Sau mỗi lượt hành động với todos, đều call lại một lần get todos khiến cho ứng dụng rất chậm

  Thay vì các todo được thêm lên đầu thì đang thêm xuống cuối khiến cho UX chưa tốt, chưa thuận tiện cho User

  **Code format**

  Các đoạn state trong 1 component TodoItem là quá nhiều:

  ```jsx
    showEditButton: true,
    isCompleted: this.props.isCompleted,
    prevIsCompleted: this.props.isCompleted
    contentInput: this.props.value,
    prevContentInput: this.props.value,
  ```

  Nên sử dụng object để giảm state tránh gây rối code

  Phần code ở return của component TodoItem nên tách ra thành các component nhỏ hơn để đỡ bị rối

  Nên tránh sử dụng props children như ở Button, vì props children được sử dụng theo một mục đích khác.

  Phần `config.js` đang sử dụng một số key không tồn tại và chưa bao giờ sử dụng:

  ```js
  export const config = {
    SERVER_API: 'https://api-todo-ebon.vercel.app/api/v1',
    SERVER_AUTH_API: 'https://api-auth-two.vercel.app/auth',
    PAGE_LIMIT: 3,
  };
  ```

  Trong `script.js` sử dụng dom thật để hành động, tuy nhiên, với loading để lại sẽ bị nặng DOM, cũng không thể chắc chắn là có loading ở trong bài.

  Ở trong `App.js`, mặc định là hiển thị Loading là không hay lắm.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên các đoạn code cần được chỉn chu hơn.

## [Nguyen Thi Hong Ha](https://f8-fullstack-k1-day41.vercel.app)

- [x] Bài 1

  Bài làm chưa tốt

  Chưa xử lý Loading

  Khi đã đăng nhập, cố tình trở lại trang login nhưng chưa bị redirect lại về trang home

  Khi đang ở trang login, cố tình nhập sai email nhưng không có validate, gọi thẳng tới get todos

  Khi trở lại trang login, cố tình nhập sai email nhưng không xoá dữ liệu cũ đi khiến khi vào trang home vẫn call dữ liệu của user cũ.

  Sau mỗi lượt update, reload lại thì value đều ra: todoValue

  Xử lý escape và entities chưa tốt: `&lt;h1&gt;hello&lt;&#x2F;h1&gt;`

  **Code format**

  Ở các page, các file: `Home.js`, `Login.js` khiến chức năng bên trong của nó khó hiểu, dễ gây hiểu nhầm thay vào đó nên sử dụng cái tên khác, không viết hoa chữ cái đầu.

  Thay vì việc lúc nào vào trang chủ cũng là login:

  ```jsx
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  </Router>
  ```

  Nên xử lý để vào trang chủ là trang Home, nếu chưa đăng nhập thì mới redirect về Login

  Phần state visible khiến cho Loading lúc nào cũng được gọi thay vì việc xử lý nếu `visible === true` thì mới gọi

  Do dòng này trong file: `components/todoitem`:

  ```jsx
  let todoContent = { todo: 'todoValue' };
  ```

  Khiến cho lúc nào cũng post lên là `todoValue`

  Các state ở `todoitem` quá nhiều khiến nó bị rối

  ```jsx
  const [isEditing, setIsEditing] = useState(false);
  const [todoValue, setTodoValue] = useState(todo.todo);
  let [visible, setIsVisible] = useState(false);
  let [currentTodoValue, setCurrentTodoValue] = useState(todo.todo);
  ```

  Khi sử dụng file `index.jsx` thì folder của component nên viết hoa đúng định dạng của Component để đỡ bị nhầm lẫn

  Nên sử dụng đồng nhất, ở Component Loading thì lại không sử dụng file index.

  State không nên được thay thế bằng cách gán lại giá trị, không nên sử dụng let:

  ```jsx
  let [todoContent, setTodoContent] = useState('');
  let [ListTodo, setListTodo] = useState([]);
  let [visible, setIsVisible] = useState(false);
  ```

  Phần todoContent khiến cho việc re-render lại rất nhiều lần, thay vì đó chỉ khi submit, lấy giá trị trong submit để post, nếu thành công thì đưa vào setListTodo

  Trong tất cả các trang đều sử dụng visible, nên tách ra, sử dụng một state chung và một component chung để giảm thiểu re-render, các component thừa không sử dụng

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, chưa lưu lại được phiên đăng nhập, bài làm sử dụng quá nhiều state không cần thiết cũng như code phân tách, tối ưu chưa tốt.

## [Nguyen Xuan Tuan Anh](https://github.dev/xuananh2212/js-fullstack/tree/main/day41)

- [x] Bài 1

  Bài làm tốt

  **Code format**

  Các function ở App có quá nhiều, việc sử dụng gây khó khăn khi phải truyền qua props nhưng ngoài state loading thì không thêm một hành động nào, nên tách ra thành các helper riêng, khi cần thì import và chỉ cần truyền hàm setLoading

  Nên validate Email trước khi gửi lên server, thay vì sử dụng replace @, nên sử dụng urlEncode để replace được các trường hợp khác.

  ```js
  var emailPath = email.replace(/@/g, '%40');
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần xử lý phân tách code rõ ràng hơn, xử lý validate phía client trước để đảm bảo tốc độ cũng như an toàn cho server.

## [Luu Anh Quan](https://f8-offline-day41.vercel.app)

- [x] Bài 1

  Bài làm rất tốt

  Khi nhập email, chưa có loading.

  **Code format**

  Ở trong `pages/index`, đoạn code trong useEffect quas dài khiến cho nó đang bị rối giữa các nhánh ifelse, nên tách ra thành một ít hàm riêng để có thể tái sử dụng, và giúp code ngắn gọn hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần xử lý phân tách code rõ ràng hơn.
