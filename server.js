const  express  =  membutuhkan ( "ekspres" ) ;
const  http  =  membutuhkan ( "http" ) ;
    const    ekspres   ;
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( "Di middleware" ) ;  berikutnya ( ) ;
} ) ;
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( "Di middleware lain" ) ;
    // Selanjutnya();
} ) ;
const  server  =  http . createServer ( aplikasi ) ;
server . mendengarkan ( 5000 ) ;

// Render HTML secara dinamis
const  express  =  membutuhkan ( "ekspres" ) ;
const  http  =  membutuhkan ( "http" ) ;
   const  ekspres   ;
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( "Di middleware" ) ;  berikutnya ( ) ;
} ) ;
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( "Di middleware lain" ) ;  res . send ( "<h1>Halo dari ekspres</h1>" ) ;
    // Selanjutnya();
} ) ;
const  server  =  http . createServer ( aplikasi ) ;
server . mendengarkan ( 5000 ) ;

//Server ke aplikasi
const  express  =  membutuhkan ( "ekspres" ) ;    const    ekspres   ;  
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( "Di middleware" ) ;  berikutnya ( ) ;
} ) ;
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( "Di middleware lain" ) ;  res . send ( "<h1>Halo dari ekspres</h1>" ) ;
    // Selanjutnya();
} ) ;
aplikasi . mendengarkan ( 5000 ) ;