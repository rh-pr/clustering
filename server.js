const express = require ('express');

const app = express ();

function deley (duration) {
  const startTime = Date.now ();
  while (Date.now () - startTime < duration) {
    //wait
  }
}

app.get ('/', (req, res) => {
  res.send (`Get response  ${process.pid}`);
});

app.get ('/timer', (req, res) => {
  deley (8000);
  res.send (`Get response with delay ${process.pid}`);
});

console.log ('Master has been started...');
console.log ('Fork has been started ...');
app.listen (3000);
