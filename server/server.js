import dotenv from'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { getProviders } from './getProviders/getProviders';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/providers/:market',  (req, res) => {
  getProviders(req.params.market)
    .then(providers =>  res.json({ providers }))
    .catch(error => console.log(error));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
