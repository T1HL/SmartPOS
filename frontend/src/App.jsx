import { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // gọi API test
    fetch('/api/health')
      .then((res) => res.json())
      .then(setHealth)
      .catch(console.error);

    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>SmartPOS</h1>

      <h2>API health</h2>
      <pre>{health ? JSON.stringify(health, null, 2) : 'Loading...'}</pre>

      <h2>Danh sách sản phẩm (mock)</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price.toLocaleString()}đ
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
