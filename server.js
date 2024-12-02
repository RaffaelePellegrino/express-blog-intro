const express = require('express')
const app = express()
const port = 3000



const post = [
    {
        title : "Ciambellone",
        contenuto: "Un ciambellone",
        image: "/img/ciambellone.jpeg",
        tag: ["cibo","dolci","tutorial"]
    },
    {
        title : "Ciambellone",
        contenuto: "Un ciambellone",
        image: "/img/Craker.jpeg",
        tag: ["cibo","dolci","tutorial"]
    },
    {
        title : "Craker & Barbabietola",
        contenuto: "Un craker e barbabietola",
        image: "/img/craker_barbabietola.jpeg",
        tag: ["cibo","salato","tutorial"]
    },
    {
        title : "Pane fritto dolce",
        contenuto: "Pane fritto dolce",
        image: "/img/pane_fritto_dolce.jpeg",
        tag: ["cibo","dolci","tutorial","fritto"]
    },
    {
        title : "Pasta",
        contenuto: "Pasta con barbabietola",
        image: "/img/pasta_barbabietola.jpeg",
        tag: ["cibo","pasta","tutorial"]
    }
];

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
    res.json({
        posts: post,
        count: post.length
    });
});

app.listen(port, () => {
    console.log(`Server del blog in ascolto su http://localhost:${port}`);
});