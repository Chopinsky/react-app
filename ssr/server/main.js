import express from 'express';
import renderer from './middleware/renderer';

const app = express();
const router = express.Router();
const PORT = "3000";
const path = require('path');

//router.use('*', renderer);

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' }
));

router.get('/', (_req, res) => {
  res.status(200).sendFile('index.html');
});
app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Failed to launch the server: ${err}`);
    return;
  }

  console.log(`Server is listening port ${PORT}...`);
});