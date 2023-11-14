# Dương review bài tập về nhà buổi 44 - Lớp K2

## [Nguyễn Đại Thế](https://github.dev/daithehh04/fullstack/tree/main/day44/login-auth)

- [x] Bài 1

  Chưa gửi được email cho user.

  **Code format**

  Không cần thiết phải viết một cách rườm rà như này:

  ```js
  onClick={() => loginWithPopup()}
  ```

  Trong useAuth0 có loading, có thể sử dụng nó để đỡ phải create một state:

  ```js
  const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    const [loading, setLoading] = useState(false);
    const handleLogOut = () => {
      setLoading(true);
      logout({ logoutParams: { returnTo: window.location.origin } });
    };
    return (
      <>
        {isAuthenticated && (
          <button className='btn' onClick={handleLogOut}>
            Sign Out
          </button>
        )}
        {loading && <Loading />}
      </>
    );
  };
  ```

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_44)

- [x] Bài 1

  Chưa bật login với popup.

  Khi gửi email, chưa có loading khiến user có thể spam nhiều lần.

  **Code format**

  Có thể sử dụng loading ở trong useAuth0 để đỡ phải làm rườm rà ở đây:

  ```js
  import Loading from './components/Loading';
  import Login from './components/Login';
  import { useSelector } from './core/hook';

  function App() {
    const { isLoading } = useSelector();
    return <>{isLoading ? <Loading /> : <Login />}</>;
  }

  export default App;
  ```

  Bài này cũng chưa cần thiết phải sử dụng đến context.
