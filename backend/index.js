const express=require('express');
const app=express();
require('./Models/db');
const bodyparser=require('body-parser');
const cors=require('cors')
 const AuthRouter=require('./Routes/AuthRouter')
 const ProductRouter=require('./Routes/ProductRouter')

app.use(cors())
app.use(bodyparser.json())
app.use('/auth',AuthRouter)
app.use('/product',ProductRouter)

app.listen(3001, "0.0.0.0", () => {
  console.log("✅ Server running at http://192.168.10.6:3001");
});