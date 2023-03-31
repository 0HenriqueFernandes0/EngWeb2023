var express = require('express');
var router = express.Router();
var Emd = require('../controllers/emd')

/* GET home page. */
router.get('/emd', function(req, res, next) {
  Emd.list()
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(601).json({erro: erro}))
});

router.get('/emd/:id', function(req, res, next) {
  Emd.getEmd(req.params.id)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(602).json({erro: erro}))
});

router.post('/emd', (req,res) => {
  Emd.addEmd(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(603).json({erro: erro}))
})

router.put('/emd/:id', (req,res) => {
  Emd.updateEmd(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(604).json({erro: erro}))
})

router.delete('/emd/:id', (req,res) => {
  Emd.deleteEmd(req.params.id)
    .then(dados => res.json(dados))
    .catch(erro => res.status(605).json({erro: erro}))
})

module.exports = router;
