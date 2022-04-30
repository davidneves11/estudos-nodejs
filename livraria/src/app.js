import express from "express";

const app = express();

const livros = [
    {id: 1, titulo: "Storytelling com Dados: Um guia sobre visualização de dados para profissionais de negócios"},
    {id: 2, titulo: "Data Science para negócios"}
]

app.get('/', (req, res) => {
    res.status(200).send('Home da livraria');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/cadastro', (req, res) => {
    res.status(200).send('Página de cadastro')
})

export default app