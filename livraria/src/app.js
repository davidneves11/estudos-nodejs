import express from "express";
import db from "./config/dbConnect.js";
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão.'));
db.once("open", () => {
    console.log('Conexão com o banco realizada com sucesso!');
})

const app = express();

//app.use(express.json());

routes(app);

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