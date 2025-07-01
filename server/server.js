import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectdb from './configs/db.js';

const app = express();

await connectdb()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
