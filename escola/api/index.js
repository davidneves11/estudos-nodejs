import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.get('/teste', (req, res) => {
    res.status(200).send({message: 'Boas vindas à API!'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

export default app;