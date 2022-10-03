import express from 'express';
import mjml from 'mjml';
import { MjLayout } from './components/Layout/Layout';
import { renderComponents } from './mjml';

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
    res.send(renderComponents({title: "test"}).html)
})

app.listen(3000)