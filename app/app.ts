import express, { Application, Request, Response } from 'express';
const routesMssge = require('./routes/message');
const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use('/',routesMssge);

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});