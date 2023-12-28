const express = require ('express');

const app = express ();

function deley (duration) {
  const startTime = Date.now ();
  while (Date.now () - startTime < duration) {
    //wait
  }
}

app.get ('/', (req, res) => {
  res.send ('Get response');
});

app.get ('/timer', (req, res) => {
  deley (5000);
  res.send ('Get response with delay');
});

app.listen (3000);
