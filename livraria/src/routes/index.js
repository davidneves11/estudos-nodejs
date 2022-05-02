import express from 'express';
import autores from './autoresRoutes.js';
import livros from './livrosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Home da livraria');
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;