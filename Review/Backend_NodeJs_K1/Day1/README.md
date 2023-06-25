# Dương test bài học viên Backend NodeJS Day1

- [x] [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise.git)

Bài 1: Tốt \*

Bài 2: Tốt \*

Bài 3: Tốt \*

Bài 4: Nếu 1 số là `0` và 1 số là số `dương` vẫn ra `true` mặc dù `0` không phải là số dương

Bài 5: Làm sai.

```js
var a = 4,
  b = 6,
  c = 4;

if (b > a && b > c) {
  b = a + b;
  a = b - a;
  b = b - a;
} else if (c > a && c > b) {
  c = a + c;
  a = c - a;
  c = c - a;
}

if (c > b) {
  c = b + c;
  b = c - b;
  c = c - b;
}
log(a, b, c);
// 6 4 4
```

```js
let a = 4,
  b = 6,
  c = 5;
if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}
if (a > c) {
  let temp = a;
  a = c;
  c = temp;
}
if (b > c) {
  let temp = b;
  b = c;
  c = temp;
}
log(a, b, c);
// 4 5 6
```
