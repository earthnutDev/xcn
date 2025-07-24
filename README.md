# xcn

[![version](<https://img.shields.io/npm/v/xcn.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/xcn) [![Coverage Status](<https://img.shields.io/coverallsCoverage/github/earthnutDev/xcn?logo=coveralls&label=coveralls&labelColor=rgb(12, 244, 39)&color=rgb(0,0,0)>)](https://coveralls.io/github/earthnutDev/xcn?branch=main) [![codecov](<https://img.shields.io/codecov/c/github/earthnutDev/xcn/main?logo=codecov&label=codecov&labelColor=rgb(7, 245, 245)&color=rgb(0,0,0)>)](https://codecov.io/gh/earthnutDev/xcn) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/earthnutDev/xcn/issues)

xcn = mix + class name

组装 html 元素的 class 属性值.

## 安装

```sh
npm install --save xcn@latest
```

## 使用

```ts
import { xcn } from 'xcn';

> xcn('a' , 'b' ,'c');

'a b c'

> xcn('a', { c: false }, true , false ,null , {d: true}, 'b');

'a b d'


```

## 文档地址

参看 [https://earthnut.dev/npm/xcn/](https://earthnut.dev/npm/xcn/)
