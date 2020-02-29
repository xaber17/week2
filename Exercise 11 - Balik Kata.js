/* Problem
Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", 
function akan me-return "eoD nhoJ". */
function balikKata(kata) {
        z = kata;
        y = '';
        for (let x = kata.length; x > 0; x--) {
            y = y + z[x-1];
        }
        return y;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS