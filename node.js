    acara
const  http  =  membutuhkan ( "http" ) ;
const  server  =  http . createServer ( ( req ,  res )  =>  {
    konsol . log ( permintaan ) ;
    proses . keluar ( ) ;
} ) ;
server . mendengarkan ( 3000 ) ;

proses . exit ( )  // cukup batalkan pendaftaran/akhiri/keluar dari seluruh proses

//Bagian Kode
//Memahami Permintaan
const  http  =  membutuhkan ( "http" ) ;
const  server  =  http . createServer ( ( req ,  res )  =>  {
    konsol . log ( req . url ,  req . metode ,  req . header ) ;
    // proses.keluar();
} ) ;
server . mendengarkan ( 3000 )

//Mengirim tanggapan
const  http  =  membutuhkan ( "http" ) ;
const  server  =  http . createServer ( ( req ,  res )  =>  {
    konsol . log ( req . url ,  req . metode ,  req . header ) ;
    // proses.keluar();
    res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;
    res . write ( "<head><title>Halaman Pertama Saya</title></head>" ) ;  res . write ( "<body><h1>Halo Dari Server Node.js!</h1></body>" ) ;  res . tulis ( "</html>" ) ;
    res . akhir ( ) ;
} ) ;
server . mendengarkan ( 3000 ) ;

// Merutekan permintaan
const  http  =  membutuhkan ( "http" ) ;
const  server  =  http . createServer ( ( req ,  res )  =>  {
    const  url  =  req . url ;
    jika  ( url  ===  "/" )  
    {
        res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;  res . write ( "<head><title>Server</title></head>" ) ;  res . menulis (
            '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
        ) ;
        res . tulis ( "</html>" ) ;     res . akhir ( ) ;
    }     if  ( url  ===  "/secondserver" )  {
        res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;
        res . write ( "<head><title>Halaman Server kedua</title></head>" ) ;  res . write ( "<body><h2>Selamat datang di Internet</h2></body>" ) ;  res . tulis ( "</html>" ) ;
        res . akhir ( ) ;
    }
    res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;
    res . write ( "<head><title>Halaman Server kedua</title></head>" ) ;  res . write ( "<body><h2>Selamat datang di Internet</h2></body>" ) ;  res . tulis ( "</html>" ) ;
    res . akhir ( ) ;
} ) ;
server . mendengarkan ( 3000 ) ;

//Mengalihkan Permintaan
const  http  =  membutuhkan ( "http" ) ;
const  fs  =  membutuhkan ( "fs" ) ;
const  server  =  http . createServer ( ( req ,  res )  =>  {
    const  url  =  req . url ;
        const   req   ;  jika  ( url  ===  "/" ) 
         {
        res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;  res . write ( "<head><title>Server</title></head>" ) ;  res . menulis (
            '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
        ) ;
        res . tulis ( "</html>" ) ;
           res . akhir ( ) ;
    }
    if  ( url  ===  "/message"  &  amp  &  amp  ===  "POST" )  {
        fs . writeFileSync ( "testing.txt" ,  "YOLO WORLD" ) ;  res . kode    =  302 ;  res . setHeader ( "Lokasi" ,  "/" ) ;
           res . akhir ( ) ;
    }
    res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;
    res . write ( "<head><title>Halaman Server kedua</title></head>" ) ;  res . write ( "<body><h2>Selamat datang di Internet</h2></body>" ) ;  res . tulis ( "</html>" ) ;
    res . akhir ( ) ;
} ) ;
server . mendengarkan ( 3000 ) ;

//Mengurai badan permintaan
const  http  =  membutuhkan ( "http" ) ;
const  fs  =  membutuhkan ( "fs" ) ;
const  server  =  http . createServer ( ( req ,  res )  =>  {
    const  url  =  req . url ;
        const    req     ;  jika  ( url  ===  "/" )  
        {
        res . tulis ( "<html>" ) ;  res . write ( "<head><title>Server</title></head>" ) ;  res . menulis (
            '<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body> '
        ) ;
        res . tulis ( "</html>" ) ;     res . akhir ( ) ;
    }
    if  ( url  ===  "/message"  &  amp  &  amp  ===  "POST" )  {
            konstan =  [ ]
        req . pada ( "data" ,  ( potongan )  =>  {
            konsol . log ( bongkahan ) ;  tubuh . dorong ( bongkahan ) ;
        } ) ;
        req . pada ( "akhir" ,  ( )  =>  {
            const  parseBody  =  Penyangga . concat ( tubuh ) . toString ( ) ;  const  pesan  =  parseBody . membagi ( "=" ) [ 1 ] ;  fs . writeFileSync ( "pengujian.txt" ,  pesan ) ;
        } ) ;
        res . kode    =  302 ;
        res . setHeader ( "Lokasi" ,  "/" ) ;    res . akhir ( ) ;
    }
    res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;
    res . write ( "<head><title>Halaman Server kedua</title></head>" ) ;  res . write ( "<body><h2>Selamat datang di Internet</h2></body>" ) ;  res . tulis ( "</html>" ) ;
    res . akhir ( ) ;
} ) ;
server . mendengarkan ( 3000 ) ;