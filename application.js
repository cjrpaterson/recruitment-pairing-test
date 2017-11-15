const express = require('express');
const app = express();

app.get('/open/resource', (req, res) => {
  res.send('anyone can see me');
});

app.get('/secret/resource', (req, res) => {
  res.send('should not see me if you are not logged in');
});

const port = process.env.PORT || 9090;

process.on('SIGTERM', function () {
  console.log("Closing");
  app.close();
});

app.listen(port, () => {
  console.log(`Started app on port ${port}.`);
});