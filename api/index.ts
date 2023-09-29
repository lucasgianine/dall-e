const OpenAI = require('openai');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Create Image Generations
async function createImageGenerations() {
  const image = await client.images.generate({
    prompt: 'DIGITE_SEU_PROMPT_AQUI',
    n: 1,
    size: '512x512'
  });

  console.log(image.data);
}

// Create Image Variations
async function createImageVariations() {
  const image = await client.images.createVariation({
    image: fs.createReadStream('IMAGEM_EM_PNG'),
  });

  console.log(image.data);
}

// Create Image Edited
async function createImageEdited() {
  const image = await client.images.edit({
    image: fs.createReadStream('IMAGEM_EM_PNG'),
    mask: fs.createReadStream('IMAGEM_ADICIONAL_EM_PNG'),
    prompt: 'DIGITE_SEU_PROMPT_DE_EDICAO_AQUI',
  });

  console.log(image.data);
}

// Coloque aqui a função que deseja executar:
createImageGenerations();
