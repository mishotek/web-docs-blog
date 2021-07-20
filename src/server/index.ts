import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

const INDEX = path.resolve(`dist/public`, 'index.html');

app.use(bodyParser.json());
app.use(express.static(`dist/public`));

app.get('/*', function (req, res) {
    res.sendFile(INDEX);
});

app.listen(PORT, () => {
    console.log(`Server running at at http://localhost:${PORT}`);
});
