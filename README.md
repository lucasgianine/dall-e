Utilizando o modelo DALL-E2 com a API <a href="https://platform.openai.com/docs/api-reference/images">OpenAI</a>.

### 1. Instale as dependências
```
npm install
```

### 2. Coloque sua chave de API que você encontra em <a href="https://platform.openai.com/account/api-keys">OpenAI</a>, em uma variável de ambiente.
```typescript
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
```

### 3. Altere os prompts (ou imagens) no parâmetro de entrada
```typescript
prompt: 'dog and cat together'
```


### 4. Por fim, execute o arquivo
```
node index.ts
```
