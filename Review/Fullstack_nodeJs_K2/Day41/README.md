# Dương review bài tập về nhà buổi 41 - Lớp K2

## [Nguyên](https://github.com/NguyenJs6868/f8k2FullkBtvn/blob/main/Day_41_TodoAppReact/todo-app-react-js)

- [x] Bài 1

  **Bài làm không tốt**

  Chưa có link demo bài làm

  Chưa hoàn thiện, khi clone về lỗi luôn đường dẫn của Button

  Chưa có tương tác Api

  Chưa hoàn thiện chức năng thêm, sửa, xoá

  Trong code vẫn còn lỗi logic(Báo đỏ tuy nhiên chưa sửa)

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt, chưa hoàn thiện.

## [Vũ Đức Tài](https://github.com/NguyenJs6868/f8k2FullkBtvn/blob/main/Day_41_TodoAppReact/todo-app-react-js)

- [x] Bài 1

  **Bài làm tốt**

  Chưa validate Email trước khi gửi lên server, khi không nhập gì, hay nhập sai định dạng, bỏ nhập... đều gửi dữ liệu lên server.

  Chưa validate input khi nhập, nếu không nhập gì vẫn được gửi lên server, có thông báo lỗi và code trả về tuy nhiên không hiển thị message lên cho user.

  Chỉ lưu mỗi email user, không lưu apiKey khiến cho mỗi lần vào là lấy email get lại apiKey mới, điều đó là không đúng, sẽ không bảo mật.

  Không bỏ loading đi khi gặp lỗi khiến cho user không thể thao tác được bất cứ gì.

  Sau mỗi lần thêm todo, không thêm bên phía client mà call lại một lần nữa khiến cho response về rất chậm.

  Chưa làm chức năng isCompleted cho todo.

  Khi có bất kỳ lỗi nào(không riêng lỗi 401) đều xoá email của người dùng và yêu cầu nhập lại. Điều đó là không tốt cho trải nghiệm.

  **Code format**

  Folder server để ngoài root sẽ gây khó hiểu và nhầm lẫn với một src dự án backend để chạy kèm với src chính. Thay vì thế nên đưa vào src để hiểu là tương tác với server, nên đổi tên khác như helper để dễ hiểu hơn

  Không thấy props isLoading được truyền vào App, code như vậy là không chặt chẽ và sẽ có tể gây ra lỗi.

  Trong git dang sử dụng localStorage, tuy nhiên khi lên bản product đang sử dụng cookie.

  Component FormTodo không cần phải sử dụng thẻ đủ(hơi xấu)

  ```xml
  <FormTodo data={data} handleLoading={this.handleLoading}></FormTodo>
  ```

  Đoạn code này chưa có trường hợp else để xử lý các lỗi ngoại lệ hoặc các lỗi như không post thành công, vì thế nên chưa xoá được loading

  ```js
  handleSubmit = async (e) => {
    e.preventDefault();
    this.state.handleLoading(true);
    const { response, data } = await client.post('/todos', {
      todo: e.target[0].value,
    });
    const message = data.message;
    if (response.ok) {
      // Nếu post thành công
      e.target[0].value = null;
      const { response, data } = await client.get('/todos');
      this.setState(
        {
          data: data.data.listTodo,
        },
        this.state.handleLoading(false)
      );
      alert(message);
    }
  };
  ```

  Chưa rõ logic gọi set lại loading ở ngay trong this.setState:

  ```js
  this.setState(
    {
      data: this.state.data.filter(({ _id }) => _id !== todoDiv.id),
    },
    this.state.handleLoading(false)
  );
  ```

  Chưa rõ đoạn tạo ra rất nhiều state như này để làm gì:

  ```js
  this.state = {
    id: this.props._id,
    todo: this.props.todo,
    isCompleted: this.props.isCompleted,
    isEditForm: false,
    createdAt: this.props.createdAt,
    originalContent: this.props.todo,
    handleDelete: this.props.handleDelete,
    handleLoading: this.props.handleLoading,
  };
  ```

  Nên sửa các đoạn logic querySelector, e.target.nodeName về hướng của react.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, các case chưa xử lý tốt, các đoạn code vẫn dang hơi tạm bợ, thủ công và chưa đi đúng tư duy React.
