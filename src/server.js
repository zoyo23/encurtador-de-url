const app = require('./app');

var port = process.env.PORT || 3001

app.listen(port, function () {
    console.log(`Servidor rodando na porta: ${port}`)
});