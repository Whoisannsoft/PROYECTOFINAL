const express = require('express');
const fetch = require('node-fetch').default;

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});


app.get('/api/plants', async (req, res) => {
  try {
    const response = await fetch('https://pvz-2-api.vercel.app/api/plants');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/plants/:name', async (req, res) => {
  const plantName = req.params.name;
  try {
    const response = await fetch(`https://pvz-2-api.vercel.app/api/plants/${plantName}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
