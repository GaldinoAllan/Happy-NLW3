import express, { json } from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

// Rota que a aplicação estará hospedada
app.listen(3333, () => {
  console.log("🚀 Server running on port 3333!");
});
