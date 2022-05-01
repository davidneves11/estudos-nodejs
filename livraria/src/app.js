import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'Erro de conexão.'));
db.once("open", () => {
    console.log('Conexão com o banco realizada com sucesso!');
})

const app = express();

app.use(express.json());

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

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    const {id} = req.params;
    const index = buscaLivro(id);
    livros.splice(index,1);
    res.send(`O livro ${id} foi apagado com sucesso!`);
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app