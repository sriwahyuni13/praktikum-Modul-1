const  fs  =  membutuhkan ( "fs" ) ;
const  reqHandle  =  ( req ,  res )  =>  {
    const  url  =  req . url ;
        const     req   ;  jika  ( url  ===  "/" )  
        {
        res . tulis ( "<html>" ) ;  res . write ( "<head><title>Server</title></head>" ) ;  res . menulis (
            '<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body>'
        ) ;
        res . tulis ( "</html>" ) ;     res . akhir ( ) ;
    }
    if  ( url  ===  "/message"  &  amp  &  amp  ===  "POST" )  {
        const  tubuh  =  [ ] ;
        req . pada ( "data" ,  ( potongan )  =>  {
            konsol . log ( bongkahan ) ;  tubuh . dorong ( bongkahan ) ;
        } ) ;
        req . pada ( "akhir" ,  ( )  =>  {
            const  parseBody  =  Penyangga . concat ( tubuh ) . toString ( ) ;  const  pesan  =  parseBody . membagi ( "=" ) [ 1 ] ;  fs . writeFileSync ( "pengujian.txt" ,  pesan ) ;
        } ) ;
        res . kode  =  302 ;  res . setHeader ( "Lokasi" ,  "/" ) ;    res . akhir ( ) ;
    }
    res . setHeader ( "Tipe-Konten" ,  "teks/html" ) ;  res . tulis ( "<html>" ) ;
    res . write ( "<head><title>Halaman Server kedua</title></head>" ) ;  res . write ( "<body><h2>Selamat datang di Internet</h2></body>" ) ;  res . tulis ( "</html>" ) ;
    res . akhir ( ) ;
} ;
ekspor . menangani  =  reqHandle ;