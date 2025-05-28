const router = require('express').Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('lista de usuarios');
});

router.get('/edit', (req, res) => {
  res.send('formulario de edicion');
});

router.post('/update', (req, res) => {
  res.send('gestion del formulario');
});

module.exports = router;
