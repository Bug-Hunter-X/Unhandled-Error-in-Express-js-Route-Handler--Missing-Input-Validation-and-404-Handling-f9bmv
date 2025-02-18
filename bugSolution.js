const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  try {
    const user = findUserById(parseInt(userId));
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
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

  return users.find(user => user.id === id);
}