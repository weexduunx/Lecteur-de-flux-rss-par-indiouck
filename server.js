const express = require("express") ;
const path = require('path') ;

const app = express() ;


app.use(express.static(__dirname + '/dist/lecteur-de-flux-rss-par-indiouck')) ;

app.get("/", function(res, req){
    res.sendFile(path.join(__dirname + '/dist/lecteur-de-flux-rss-par-indiouck/index.html')) ;
}) ;

app.listen(process.env.PORT) ;
