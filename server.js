
const path = require('path');
const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const port =3000;
var opn= require('opn');
const dataAccess = require('./Routes/Login');
var bodyParser = require('body-parser');

// app.engine('hbs',hbs({extname:'hbs',defaultLayout:'home',layoutsDir:__dirname + '/public'}))
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/css",express.static("./css"))
app.use("/image",express.static("./data/image"))
// app.use("/Images",express.static("./Images"))

 
// accept json 
app.use(bodyParser.json());

var Producto = dataAccess.LoadJson('/data/client.json');
console.log(Producto.length)
app.set('view engine', 'hbs');
const viewPath = path.join(__dirname, './views');
app.set('views', viewPath)

//read
app.get("/home.hbs", (req, res) => {
  res.render('home',{Producto});
});

//write
app.post("/ADDproduct",function(req,res){
  Producto = dataAccess.LoadJson('Data/client.json');
  var new_product={id:req.body.addname, source:req.body.addsource, p:req.body.addp} ;
  Producto.push(new_product);
  dataAccess.SaveJson("data/client.json",Producto);
  
  res.render('home.hbs',{Producto});
}); 

//update

app.post("/updateproduct",function(req,res){
  Producto = dataAccess.LoadJson('Data/client.json'); 
  var new_product={id:req.body.newname, source:req.body.newsource , p:req.body.newp} ;
  Producto.forEach(function(item){
    if(item.id == req.body.nameup){
      item.id = new_product.id;
      item.source = new_product.source;
      item.p =new_product.p;
    }
  });

    dataAccess.SaveJson("data/client.json",Producto);  
 
  
  res.render('home.hbs',{Producto});
}); 
// delete

app.post("/delproduct",function(req,res){
  var Producto = dataAccess.LoadJson('Data/client.json'); 
 var temparrray = [];
 var j=0;
for(i=0 ; i<Producto.length ; i++){
  if(Producto[i].id != req.body.namedel ){
    temparrray.push(Producto[i]);
    j++;
  }
};
console.log(temparrray)

    dataAccess.SaveJson("data/client.json",temparrray);  
    Producto = dataAccess.LoadJson('Data/client.json');
 

  res.render('home.hbs',{Producto});
});



app.listen(port, () => {console.log(`listening on port ${port}!`);
opn("http://localhost:3000/home.hbs");
});



