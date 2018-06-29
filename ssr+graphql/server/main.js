const express = require('express');
const renderer = require('./middleware/renderer');
const path = require('path');

const app = express();
const router = express.Router();
const PORT = "8080";

router.use('^/$', renderer);
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' }
));

app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Failed to launch the server: ${err}`);
    return;
  }

  renderer();
  console.log(`Server is listening port ${PORT}...`);
});