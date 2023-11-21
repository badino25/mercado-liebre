const express = require ('express');
const app = express();
const path = require('path');
const port  = 7000

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.post("/login", (req,res) => {
    console.log(req.body)
    res.redirect("/login")
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.post("/register", (req,res) => {
    console.log(req.body)
    res.redirect("/login")
});

app.use(express.static(__dirname + '/public'));