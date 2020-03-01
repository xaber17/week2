var tanggal = 30;
var bulan = 5;
var tahun = 2020;

switch (bulan || tanggal || tahun) {
    case 1 || 1-31 || 1900-2200:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2 || 1-31 || 1900-2200:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3 || 1-31 || 1900-2200:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4 || 1-31 || 1900-2200:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5 || 1-31 || 1900-2200:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6 || 1-31 || 1900-2200:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7 || 1-31 || 1900-2200:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8 || 1-31 || 1900-2200:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9 || 1-31 || 1900-2200:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10 || 1-31 || 1900-2200:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11 || 1-31 || 1900-2200:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12 || 1-31 || 1900-2200:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log('Tanggal berapa tuh?');
        break;
} 