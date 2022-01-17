---
title: 'Operator Ternary Typescript'
date: '2021-06-24'
header: '/static/images/avatar.png'
tags: ['#ts']
draft: false
author: 'Fiqry choerudin'
summary: 'haloooo, mungkin ini adalah tulisan pertama saya di medium , sebenarnya saya tidak terlalu mahir menulis jadi mungkin tulisan tulisan yang ada di medium saya adalah sebagai rangkuman progres belajar saya saja , mungkin segitu aja intermezzonya jadi langsung saja ke topik utamanaya 👌.'
---

haloooo, mungkin ini adalah tulisan pertama saya di medium , sebenarnya saya tidak terlalu mahir menulis jadi mungkin tulisan tulisan yang ada di medium saya adalah sebagai rangkuman progres belajar saya saja , mungkin segitu aja intermezzonya jadi langsung saja ke topik utamanaya 👌
apa itu operator ternary? singkatnya adalah operator yang melibatkan tiga buah operand.

```ts
expresi_satu ? expresi_dua : expresi_tiga
```

apabila expresi 1 bernilai benar atau true maka program akan mengeksekusi expresi ke 2 dan apabila expresi 1 bernilai salah atau false maka program akan mengeksekusi expresi ke 3 sebagai contoh di code berikut :

```ts
let num1: number = 1
let num2: number = 2

const a = num1 < num2 ? 'red' : 'blue'
/**
 * karena expresi pertama terpenuhi yaitu num1(1) < num2(2) akan bernilai true
 * maka program akan mengeksekusi expresi kedua yaitu menampilkan red
 * */
console.log(a)

const b = num1 > num2 ? 'red' : 'blue'
/**
 * karena expresi pertama tidak terpenuhi yaitu num1(1) > num2(2) akan bernilai false
 * maka program akan mengeksekusi expresi ketiga yaitu menampilkan blue
 * */
console.log(b)
```

kalian bisa juga membuat kondisi seperti kode di bawah :

```ts
let num1: number = 1
let num2: number = 2

const a = num1 < num2 ? 'red' : num1 > num2 ? 'blue' : 'green'
/**
 * karena expresi pertama terpenuhi yaitu num1(1) < num2(2) akan bernilai true dan
 * program tidak akan mengeksekusi expresi selanjutnya karena expresi pertama terpenuhi
 * dan akan mencetak red di console. sedangkan jika expresi pertama tidak terpenuhi maka
 * program akan mengeksekusi expresi selanjutnya.
 * */
console.log(a)
```

nah mungkin cukup sekian untuk tulisan pertama saya sampai jumpa di tulisan saya selanjutnya 👌👌
