const express = require("express") ;
const path = require('path') ;

const app = express() ;

app.use(express.static(__dirname + '/dist/lecteur-flux-rss')) ;

app.get("/", function(res, req){
    res.sendFile(path.join(__dirname + '/dist/lecteur-flux-rss/index.html')) ;
}) ;

app.listen(process.env.PORT) ;

