const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.port || 5000 ;
const productsCollection = require('./Data/product.json')

app.get("/", (req, res) =>{
    res.send('Server is Running')

})
app.get("/allProducts", (req, res) =>{
    res.send(productsCollection)

})
app.get("/product/:id", (req, res) =>{
    const id = req.params.id;
    const singleProduct = productsCollection?.find(p=>p.id == id);
    if(!singleProduct){
        res.send('Out Of Stock')
    }
    res.send(singleProduct)

})
app.get("/category/:name", (req, res) =>{
    const name = req.params.name;
    console.log(name);
    const singleCategory = productsCollection?.filter(p=>p.category == name);
    if(!singleCategory){
        res.send('Out Of Stock')
    }
    res.send(singleCategory)

})





app.listen(Port , () =>{
    console.log("Server is running", Port)

})

module.exports = app;