const express = require('express');
const fs = require('fs');


const router = express.Router();

router.get('/login', (req, res, next) => {
    console.log('inside req');
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input type="text" id="username" name="username"><button type="submit">Login</button></form>');
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/', (req, res, next) => {
    fs.readFile("username.txt", (err, data) => {
        if(err) {
            console.log(err);
            data = 'No chat exists';
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST"><input type="text" name="message"><input type="hidden" id="username" name="username"><button type="submit">Send</button>`);
    })  
})

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`, {flag: 'a'}, (err) =>
        err? console.log(err) : res.redirect("/")
    );
});

module.exports = router;