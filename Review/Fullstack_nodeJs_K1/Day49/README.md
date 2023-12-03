# Dương review bài tập về nhà buổi 49 - Lớp K1

## [Duong Hiep](https://duonghiep-f8-fullstack.vercel.app/detail/1)

- [x] Bài 1

  Bài làm tốt

  Chưa hiển thị hình ảnh ở homepage.

  Các page chưa có sự đầu tư về giao diện.

  Mỗi lần sang trang đang bị reload lại

  - Nếu dùng Link của NextUI nên thêm một attr là `as` để có thể sử dụng Link của Next với UI của NextUI:

    ```jsx
    import {Link} from '@nextui-org/react'
    import Link as NextLink from 'next/link'
    <Link
      as={NextLink}
      color='success'
      href={pathDetail}
      underline='hover'
      >
      <h2>{title}</h2>
    </Link>
    ```

  Nếu vào một detail không có thật, id sai thì đang bị lỗi. Thay vì xử lý thì đang không handle lỗi.

  Nên cho thêm slug vào trước link để thể hiện một friendly url.

  ```ts
  function removeAccent(str: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace('đ', 'd')
      .replace('Đ', 'D');
  }
  export default function slug(str: string, id?: string | number) {
    str = removeAccents(str);
    str = str
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    if (id) {
      str += `~${id}`;
    }
    return str;
  }
  export function getSlugId(str: string) {
    const splitSlug = str.split('~');
    return splitSlug[splitSlug.length - 1];
  }
  ```

  Khi vào một đường dẫn không có, chưa hiển thị trang 404

  Nên thêm cả Image của Next vào as của Image trong NextUI để có thể tận dụng cache của Next tốt hơn.

  - Ví dụ:

    ```tsx
    import { Image } from '@nextui-org/react';
    import NextImage from 'next/image';
    export default function Image({ title }: { [key: string]: string }) {
      return (
        <Image as={NextImage} alt={title} src={src} width={400} height={400} />
      );
    }
    ```

  Khi tìm kiếm nếu không trả về kết quả nên trả về tất cả hoặc thông báo là không có.

## [Nguyen Thi Hong Ha](https://f8-fullstack-k1.vercel.app/)

- [x] Bài 1

  Bài làm tốt

  Các page chưa có sự đầu tư về giao diện.

  Nếu vào một detail không có thật, id sai thì đang bị lỗi. Thay vì xử lý thì đang không handle lỗi.

  Nên cho thêm slug vào trước link để thể hiện một friendly url.

  ```ts
  function removeAccent(str: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace('đ', 'd')
      .replace('Đ', 'D');
  }
  export default function slug(str: string, id?: string | number) {
    str = removeAccents(str);
    str = str
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    if (id) {
      str += `~${id}`;
    }
    return str;
  }
  export function getSlugId(str: string) {
    const splitSlug = str.split('~');
    return splitSlug[splitSlug.length - 1];
  }
  ```

  Khi vào một product không có, chưa hiển thị trang 404

## [Phan Trung Hieu](https://travel-xi-tan.vercel.app/)

- [x] Bài 1

  Các animate quá chậm, quá nhiều khiến nó rất rối mắt.

  Ngoài trang Home ra thì chưa làm gì cả.

## [Nguyen Xuan Tuan Anh](https://js-fullstack-phi.vercel.app/library)

- [x] Bài 1

  Chưa đầu tư vào giao diện

  Chưa có trang detail.

  Trang thanh toán gần như chưa làm, Không phải là một bài làm hoàn chỉnh.

  Chưa có trang 404.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa đủ chỉn chu.
