const { Router } = require('express');
const fetch = require('node-fetch');
const router = Router();


router.get('/products', (req, res) => {
    
    fetch('https://dummyjson.com/products?limit=100', {method: 'GET',})
    .then(res => res.json())
    .then(data => {res.send(data.products)})
});

router.get('/products/search', (req, res) => {

    console.log("Entra");
    let products, filtered;
    let price = parseInt(req.query.price);

    fetch(`https://dummyjson.com/products?limit=100`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        products = data.products;
        filtered = products.filter(item => item.price === price)
        res.send(filtered);
    })
});

router.get('/products/:id', (req, res) => {

    fetch(`https://dummyjson.com/products/${req.params.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {res.send(data)})
});

router.get('/products/title/:title', (req, res) => {

    let products, filtered;
    let title = req.params.title.toLowerCase().split(" ");

    fetch(`https://dummyjson.com/products?limit=100`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        products = data.products;
        filtered = products.filter(item => 
            title.some( element => {
                if(item.title.toLowerCase().includes(element)){
                    return true;
                }
                return false;
            }))
        res.send(filtered);
    })

});

router.post('/products', (req, res) => {

    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    })
    .then(res => res.json())
    .then(data => res.send(data))
});

router.put('/products/:id', (req, res) => {

    fetch(`https://dummyjson.com/products/${req.params.id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    })
    .then(res => res.json())
    .then(data => res.send(data))
});

router.delete('/products/:id', (req, res) => {

    fetch(`https://dummyjson.com/products/${req.params.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => res.send(data))

});

module.exports = router;