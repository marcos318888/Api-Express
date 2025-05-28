const router = require('express').Router();

router.get('/', (req, res) => {
    const {page = 1, limit = 10 } = req.query
    console.log(page, limit)
    console.log('currentDate', req.currentDate)
    res.send('Recuperamos todos los productos')
});

router.get('/new', (req, res) => {
    res.send('Formulario para crear productos')
    //res.json({ uno:'uno', dos: 'dos'})
    //res.download('./files/imagenes.zip')
})

router.get('/:ProductId', (req, res) => {
    const { productId } = req.params
    res.send('Recupero el producto con ID: ')
});

router.post('/create', (req, res) => {
    const {name, price} = req.body
    console.log(name, price)
    res.send('Gestion de los datos del formulario')
}) 
module.exports = router;