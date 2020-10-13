import express from 'express';

import './database/connection';

import routes from './routes'

const app = express();

app.use(express.json());

app.use(routes);

// Rota que a aplicação estará hospedada
app.listen(3333, () => {
  console.log("🚀 Server running on port 3333!");
});
