import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = 'AIzaSyCmOEfuSho8iQNLWykqxkjvg-I2A1yxFK0';

app.post('/places/textsearch', async (req, res) => {
  const query = req.body.query;
  if (!query) return res.status(400).json({ error: 'Missing query' });
  try {
    // call Google Places API new method here
    // then send response like: res.json({ places: [...] })
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
