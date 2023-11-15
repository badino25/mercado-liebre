const express = require ('express');
const app = express();
const path = require('path');
const port  = 7000

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})


app.use(express.static(__dirname + '/public'));