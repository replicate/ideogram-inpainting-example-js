import Replicate from 'replicate'
import fs from 'node:fs/promises'
import open from 'open'

const replicate = new Replicate()

// Define the model to use
// https://replicate.com/ideogram-ai/ideogram-v2
const model = 'ideogram-ai/ideogram-v2'

// Inputs to the model
const prompt = 'a duck wearing a hat'
const image = await fs.readFile('duck.jpg')
const mask = await fs.readFile('mask.png')
const input = { prompt, image, mask }

console.log('Running model...')
console.log({ model, input })

// Run the model with Replicate's cloud API
const output = await replicate.run(model, { input })

// For images under 5MB, `replicate.run` returns the output file
// as a base64 encoded string. This code saves that to a file:
const href = output.url().href
const base64Data = href.split(',')[1]
const outputPath = 'output.png'
await fs.writeFile(outputPath, base64Data, 'base64')

console.log(`File saved as ${outputPath}`)

await open(outputPath)
