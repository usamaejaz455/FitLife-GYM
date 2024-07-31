const mongoose= require('mongoose');

const mongo_url=process.env.MONGO_CONN;

mongoose.connect(mongo_url)
.then(()=>{
    console.log('MongoDB connected successfully');
}).catch((err)=>{
    console.log('Error connecting to MongoDB:',err);
});