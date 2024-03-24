import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.set('port', process.env.PORT || 4003);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename)
console.log(path.join(__dirname, '/public'))
app.use(express.static(path.join(__dirname, '/public')))




app.get('/nuevo', (req, res) =>{
    console.log('porcesando una solicitud get');
    res.send('respueta del backend');
})