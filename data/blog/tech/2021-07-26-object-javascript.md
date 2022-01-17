---
title: 'Object Pada JavaScript'
date: '2021-07-26'
header: '/static/images/avatar.png'
tags: ['#js', '#object', '#Array']
draft: false
author: 'Fiqry choerudin'
summary: 'halo kali ini kita akan bermain dengan object di javascript , sebelum lanjut ke pembahasan mungkin kita harus berkenalan dulu dengan Object , Objek dalam Javascript didefinisikan sebagai mutable properties collection, yang artinya adalah sekumpulan properti yang dapat berubah nilainya.'
---

halo kali ini kita akan bermain dengan object di javascript , sebelum lanjut ke pembahasan mungkin kita harus berkenalan dulu dengan Object , Objek dalam Javascript didefinisikan sebagai mutable properties collection, yang artinya adalah sekumpulan properti yang dapat berubah nilainya. object terdiri dari banyak properti dan masing masing properti digunakan untuk mendeskirpsikan object tersebut.
kita akan membuat object product dan bermain dengan data di dalam object tersebut :

```js
const product = {
  data: [
    {
      name: 'Indomie',
      price: 10000,
      stock: 15,
    },
    {
      name: 'Telor Gulung',
      price: 5000,
      stock: 11,
    },
    {
      name: 'Cireng',
      price: 20000,
      stock: 5,
    },
  ],
}
const findProduct = product.data.find((object) => object.price == 5000)
// akan menampilkan
// { name: 'Telor Gulung', price: 5000, stock: 11 }
console.log(findProduct)

const filterProduct = product.data.filter((object) => object.price >= 10000)
// akan menampilkan :
// [
//   { name: "Indomie", price: 10000, stock: 15 },
//   { name: "Cireng", price: 20000, stock: 5 },
// ];
console.log(filterProduct)

const mapProduct = filterProduct.map((object) => object.name)
// akan menampilkan :
// [ 'Indomie', 'Telor Gulung', 'Cireng' ]
console.log(mapProduct)

const eachProduct = product.data.some((object) => object.price > 20000)
// akan menampilkan :
// false karena kondisi tidak terpenuhi (beberapa product memiliki harga diatas 20000 = false)
console.log(eachProduct)

const everyProduct = product.data.every((object) => object.stock <= 20)
// akan menampilkan :
// true karena kondisi terpenuhi (setiap product memiliki stock dibawah 20 = true)
console.log(everyProduct)

const totalStock = product.data.reduce((total, object) => total + object.stock, 0)
// akan menampilkan
// 31 hasil dari 15 + 11 + 5
console.log(totalStock)

const totalPrice = product.data.reduce((total, object) => total + object.price, 0)
// akan menampilkan
// 35000
console.log(totalPrice)

// menghitung rata rata harga produk
const average = totalPrice / product.data.length
console.log(average)
```

gimana mudah kan? jika ada kesalahan dalam tulisan ini bisa langsung koreksi aja ya hehe karena saya juga masi belajar jadi kita sama sama belajar , okay mungkin segitu dulu tulisan kali ini sampai jumpa di tulisan saya selanjutnya.

Referensi :
http://dev.bertzzie.com/knowledge/javascript/Objek-pada-Javascript.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
