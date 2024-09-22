const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

const port = 8000;
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})