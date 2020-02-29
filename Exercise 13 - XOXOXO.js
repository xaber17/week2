/* Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
dan false jika tidak. */

function xo(str) {
    v = 0;
    w = 0;
    z = str;
    y = '';
    for (let x = 0; x < str.length; x++) {
        y = y + z[x];

        if (y === 'x') {
          v = v + 1;
          y = '';
        } else {
          w = w + 1;
          y = '';
        }
    }
    if (v === w) {
      return true;
    } else {
      return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true