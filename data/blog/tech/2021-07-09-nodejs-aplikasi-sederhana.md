---
title: 'Membuat Aplikasi Sederhana Menggunakan NodeJS'
date: '2021-07-09'
header: '/static/images/avatar.png'
tags: ['#js', '#nodejs']
draft: false
author: 'Fiqry choerudin'
summary: 'Tulisan kali ini mungkin hanya untuk report progress belajar saya , saya membuat aplikasi sederhana untuk melakukan perhitungan , aplikasi ini dibuat diatas nodejs , di project ini saya hanya menggunakan readline untuk user bisa menginput dan melihat hasil perhitungannya.'
---

Tulisan kali ini mungkin hanya untuk report progress belajar saya , saya membuat aplikasi sederhana untuk melakukan perhitungan , aplikasi ini dibuat diatas nodejs , di project ini saya hanya menggunakan readline untuk user bisa menginput dan melihat hasil perhitungannya , mungkin segitu saja untuk intronya langsung saja ke codenya :

pertama buat dulu file count.js , lalu init readline dari core module nodejs untuk input di terminal , lalu buat interface readline , karena saya akan membuat program secara asynchronous maka promise dulu questionnya , kenapa harus di promise? karena jika tidak membuat promise untuk question akan terjadi callback hell karena code question akan nested tidah chaining , setelah selesai buatlah function perhitungan lalu export semua fungsi yang ada di dalam count.js agar bisa digunakan di main script.

```js
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const question = (query) => new Promise((resolve) => rl.question(query, resolve))

const tambah = (a, b) => {
  return a + b
}

const perkalian = (a, b) => {
  return a * b
}

const pembagian = (a, b) => {
  return a / b
}

const pengurangan = (a, b) => {
  return a - b
}

module.exports = { tambah, question, rl, perkalian, pembagian, pengurangan }
```

setelah selesai di count.js selanjutnya kita buat main script kita dengan nama app.js , panggil semua fungsi yang telah kita buat di count.js , kalian bisa memanggil fungsi yang dibuat dengan cara init dulu fungsi yang telah di export dari count.js , disini saya memanggil object dengan cara destruktif , lalu buat fungsi main seperti di bawah :

```js
// dectruct obj
const { rl, question, tambah, perkalian, pengurangan, pembagian } = require('./count')

// main app async
const main = async () => {
  try {
    const menu = await question(
      'Menu \n 1. Oprasi tambah \n 2. Oprasi perkalian \n 3. Oprasi pembagian \n 4. Oprasi pengurangan \n\nPilih menu : '
    )
    const angka1 = await question('Masukan angka 1 : ')
    const angka2 = await question('Masukan angka 2 : ')
    if (menu == 1) {
      const hasil = await tambah(angka1, angka2)
      console.log(hasil)
    } else if (menu == 2) {
      const hasil = await perkalian(angka1, angka2)
      console.log(hasil)
    } else if (menu == 3) {
      const hasil = await pembagian(angka1, angka2)
      console.log(hasil)
    } else if (menu == 4) {
      const hasil = await pengurangan(angka1, angka2)
      console.log(hasil)
    }
    rl.close()
  } catch (error) {
    console.log('Error : ', error)
  }
}
main()
```

jalankan aplikasi dengan menggunakan

```
node app.js
```

mungkin sekian tulisan kali ini , kurang lebihnya mohon maaf karena saya baru belajar haha saya sangat mengapresiasi jika di beri masukan dan saran 👌 sampai jumpa di tulisan selanjutnya.
