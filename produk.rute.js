const  express  =  membutuhkan ( "ekspres" ) ;
const  router  =  ekspres . Perute ( ) ;
router . dapatkan ( "/add-product" ,  ( req ,  res ,  selanjutnya )  =>  {
    res . kirim (
        `<form action="/product/add-product" method="POST">
<input type="text" name="title">
<button type="submit">Buat Produk</button>
</form>`
    ) ;
} ) ;
router . post ( "/add-product" ,  ( req ,  res ,  selanjutnya )  =>  {
    konsol . log ( req . body ) ;
    res . redirect ( "/" ) ;
} ) ;
modul . ekspor  =  perute ;

//app.js
const  express  =  membutuhkan ( "ekspres" ) ;
const  bodyParser  =  membutuhkan ( "body-parser" ) ;
const  shopRoutes  =  membutuhkan ( "./routes/shop.routes.js" ) ;
const  productRoutes  =  membutuhkan ( "./routes/product.routes.js" ) ;
    const    ekspres   ;
aplikasi . gunakan ( bodyParser . urlencoded ( {  extended : false  } ) ) ;
aplikasi . gunakan ( "/produk" ,  produkRute ) ;  aplikasi . gunakan ( shopRoutes ) ;
aplikasi . mendengarkan ( 5000 ) ;