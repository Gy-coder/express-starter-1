import express from 'express'
const app = express();
const port = 9000;

app.get('/', (request:any, response:any) => {
  response.send('i am big');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});