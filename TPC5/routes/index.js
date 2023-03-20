var express = require('express');
var router = express.Router();
Tasks = require('../controllers/tasks')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.list()
  .then(tasks => {
    res.render('index', { t: tasks, d: data });
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção da lista de tasks"})
  })
  
});

module.exports = router;
