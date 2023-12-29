const express = require ('express');
const cluster = require ('cluster');

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
  deley (5000);
  res.send (`Get response with delay ${process.pid}`);
});

if (cluster.isMaster) {
  console.log ('Master has been started...');
  cluster.fork ();
  cluster.fork ();
} else {
  console.log ('Fork has been started ...');
  app.listen (3000);
}
