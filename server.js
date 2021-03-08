
const app = require('./config/express')();
const port = app.get('port');

app.route('/')
    .get((req,res) => {res.send("OOOOOOOK")});

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});