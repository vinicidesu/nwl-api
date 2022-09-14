import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        {id:1, name: "teste"},
        {id:2, name: "teste2"}
    ]);
});

app.listen(8080);