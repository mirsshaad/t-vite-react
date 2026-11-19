import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>Vite + React Test App</h1>
      <p>Testing static site deployment. <code>npm run build</code> produces <code>dist/</code>.</p>
      <button 
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
        onClick={() => setCount((c) => c + 1)}
      >
        Count is: {count}
      </button>
    </div>
  );
}
