var nama = '';
var peran = 'asd';

if (nama !== '' && peran === 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
    console.log(`Sebagai ${peran}, kamu dapat menyerang dengan senjatamu!`);
} else if (nama !== '' && peran === 'Tabib') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
    console.log(`Sebagai ${peran}, kamu akan membantu temanmu yang terluka.`);
} else if (nama !== '' && peran === 'Penyihir') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
    console.log(`Sebagai ${peran}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else if (nama !== '' || peran === 'Penyihir' || peran === 'Tabib' || peran === 'Ksatria') {
    console.log(`Pilih 1 peran (Ksatria, Tabib atau Penyihir), ${nama}.`);
} else {
    console.log(`Nama harus diisi`);
}