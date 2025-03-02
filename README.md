# mix-cn

A tool that mix the class attribute of an HTML element node

## language

[English](https://github.com/earthnutDev/mix-cn/blob/main/README.md) [中文](https://github.com/earthnutDev/mix-cn/blob/main/自述文件.md)

## install

```sh
npm install --save mix-cn@latest
```

## use

```ts
import { mcn } from 'mix-cn';

> mcn('a' , 'b' ,'c');

'a b c'

> mcn('a', { c: false }, true , false ,null , {d: true}, 'b');

'a b d'


```
