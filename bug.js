const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is not found in the database
  const user = findUserById(userId);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});

function findUserById(id) {
  // Simulate database lookup
  const users = [{
    id: 1,
    name: 'John Doe'
  }, {
    id: 2,
    name: 'Jane Doe'
  }];

  return users.find(user => user.id === parseInt(id));
}