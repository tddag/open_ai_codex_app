import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// import { Configuration, OpenAIApi } from 'openai';
import OpenAI from "openai";


dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-fkNK4UaeUaUiehaj6r8qRbyk"
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from CodeX',
    })
})

app.post('/', async (req, res) => {

    try {

        const prompt = req.body.prompt;

        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "gpt-4o-mini",
        })

        console.log("response is: ", response)

        res.status(200).send({
            bot: response.choices[0].message
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error})
    }
    
})

const port = process.env.PORT | 5001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})