const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
.then(()=>{
     console.log('mongoose connected')
}).catch((err)=>{
    console.log('mongo connection error',err)
})