/* 1. Menyusun Barisan Bintang
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console 
barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
*/

var rows1 = 5;

for ( rows1; rows1 > 0; rows1--) {
    console.log('*');
}


/* 2. Menyusun Barisan Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console 
barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. 
Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/

var rows2 = 5;
var a = rows2;
var b = 0;
var c = "";

for ( rows2; rows2 > 0; rows2--) {
    for (b = 0; a > b; b++) {
        c += "*";
    }
    console.log(c);
    c = '';
}


/* 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console 
barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai 
dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, 
baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop 
untuk menyelesaikan kasus ini.
*/ 

var rows3 = 5;
var a = rows3;
var c = "";

for ( rows3; rows3 > 0; rows3--) {
    for (a = rows3; a > 0; a--) {
        c += "*";
    }
    console.log(c);
    c = '';
}
