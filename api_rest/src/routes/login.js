const { Router } = require('express');
const fetch = require('node-fetch');
const router = Router();

router.post('/login', (req, res) => {

    let status;
    console.log(JSON.stringify(req.body))

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    })
    .then(response => status = response.status)
    .then(data => {
        if(status == 200){
            res.send({"message" : "Autorizado"})
        }
        else{
            res.status(401).send({"message" : "No Autorizado"})
        }
    })
});

module.exports = router;