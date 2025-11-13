// backend/app.js
const express = require('express');
const cors = require('cors');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to SmartPOS');
})
// route test
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    message: 'SmartPOS API running',
    time: new Date().toISOString(),
  });
});

// ví dụ route sản phẩm (tạm mock)
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Cà phê sữa đá', price: 20000 },
    { id: 2, name: 'Sting dâu', price: 10000 },
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
