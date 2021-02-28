const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express()
app.use(cors());
app.use(bodyParser.json());


    app.get('/',(req , res)=>{
        res.send('runing database go first')
    })
  
app.listen(process.env.PORT || 5000 , () => console.log("server side is running"))






// const express = require('express')
// require('dotenv').config();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5trbi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


// const app = express()
// app.use(cors());
// app.use(bodyParser.json());


// const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });
// client.connect(err => {
//   const products = client.db("emaJohn").collection("products");
//         app.post('/addProduct' , (req, res) => { //data gula load kora hoice.
//             const product = req.body;
//             products.insertOne(product) // ekadik data add korte insertMany use kora hoi
//             .then(result =>{
//                 console.log(result.insertedCount)
//                 res.send(insertedCount)
//             })
//         })
//         //data gula read korar jonno
//         app.get('/products', (req, res) => {
//             products.find({})
//             .toArray((err , document)=>{
//                 res.send(document)
//             })
//         })
//         //singleProduct er jonno use korbo...
//         app.get('/product/:key', (req, res) => {
//             products.find({key: req.params.key})
//             .toArray((err , document)=>{
//                 res.send(document[0])
//             })
//         })
//         //multiple data show
//         app.post('/sameProducts', (req, res) => {
//             const productsKey = req.body;
//             products.find({key : {$in : productsKey}})
//             .toArray((err , document) => {
//                 res.send(document)
//             })
//         }) 
// });

//     app.get('/',(req , res)=>{
//         res.send('runing database go first')
//     })
  
// app.listen(process.env.PORT || 8080)