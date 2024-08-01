const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const AuthRouter=require('./routes/AuthRouter');
const ProductRouter=require('./routes/ProductRouter');
const contactRoutes = require('./routes/contact');

require('dotenv').config();
require("./models/db");

const PORT=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/',AuthRouter);
app.use('/products',ProductRouter);

app.use('/api/contact', contactRoutes);

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
});

