const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Entro a la pagina')
});

module.exports = router;