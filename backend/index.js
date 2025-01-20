const Db=require('./config/db')
const express=require('express');
const app=express();
const routers=require('./routers/signin_up.js')
const movies= require('./routers/movie.js')
const cors=require('cors')
app.use(cors())
app.use(express.json());


Db.connected();
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.use('/users',routers)
app.use('/movies',movies )
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));