import OpenAI from "openai";
import fs, { createReadStream } from 'fs'
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// 1. Upload do arquivo para OpenAi
// await openai.files.create({
//     file: createReadStream("data.jsonl"),
//     purpose: "fine-tune"
// })

// 2. Listar arquivos
// const files = await openai.files.list()
// console.log(files)

// 3. a) Fine Tune
// const fineTune = openai.fineTunes
//     .create({
//         training_file: "file-Ss6ylpUBFsxkrLum1JejO5ns",
//         model: "davinci"
//     })
//     .catch((err) => {
//         if(err instanceof OpenAI.APIError) {
//             console.error(err)
//         } else {
//             throw err
//         }
//     })
//     console.log(fineTune)

// 3. b) outra alternativa Fine Tune caso a anterior apresente falha
// const requestData = {
//     training_file: "file-Ss6ylpUBFsxkrLum1JejO5ns",
//     model: "davinci"
// }

// const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
// }
// //console.log("Authorization: ", Authorization)

// fetch("https://api.openai.com/v1/fine_tuning/jobs", {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(requestData)
// })
//     .then((response) => response.json)
//     .then((data) => {
//         console.log("Response: ", data)
//     })
//     .catch((error) => {
//         console.error("Error: ", error)
//     })

// 4. Aguardar e-mail de confirmação de treinamento completo
// const completions = await openai.chat.completions.create({
//     messages: [{role: "user", content: "O Weekend decanta sozinho?"}],
//     model: "nome do modelo"
// })
// console.log(completions.choices)