/* 1. Melakukan Looping Menggunakan While
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping 
yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga 
judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'. */

var a = 0;

console.log('LOOPING PERTAMA');
while (a < 20) {
    a += 2;
    console.log(`${a} - I love coding`);
}

console.log('LOOPING KEDUA');
while (a > 0) {
    console.log(`${a} - I will become fullstack developer`);
    a -= 2;
}

console.log('\n')


/* 2. Melakukan Looping Menggunakan For
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang 
menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 
'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
Hints
Operator ++disebut dengan operator Increment Operator --disebut dengan operator Decrement */

console.log('LOOPING PERTAMA');
for (let b = 1; b < 21; b++) {
    console.log(`${b} - I love coding`);
}

console.log('LOOPING KEDUA');
for (let b = 20; b > 0; b--) {
    console.log(`${b} - I will become fullstack developer`);
}

console.log('\n')


/* 3. Angka Ganjil dan Genap
Hint: kamu akan menggunakan kondisional juga di kasus ini.

Problem
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:

Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:

Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3"dan seterusnya. */

 for (let c = 1; c <= 100; c++) {
     if (c % 2 == 1) {
         console.log('Ganjil');
     } else {
         console.log('Genap');
     }
 }

 for (let d = 1; d <= 100; d+=2) {
    if (d % 3 == 0) {
        console.log(`${d} kelipatan 3`);
    } else {
        console.log('');
    }
}

for (let e = 1; e <= 100; e+=5) {
    if (e % 6 == 0) {
        console.log(`${e} kelipatan 6`);
    } else {
        console.log('');
    }
}

for (let f = 1; f <= 100; f+=9) {
    if (f % 10 == 0) {
        console.log(`${f} kelipatan 10`);
    } else {
        console.log('');
    }
}