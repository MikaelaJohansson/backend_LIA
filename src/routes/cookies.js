
const express = require('express');
const router = express.Router();

router.post('/accept-cookies', (req, res) => {
  const { consent } = req.body;
  console.log(`Användaren har samtyckt: ${consent}`); 
  res.status(200).send({ message: 'Samtycke registrerat' });
});

module.exports = router;
