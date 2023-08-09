
import './App.css';

import {useState, useEffect} from 'react';

 

function App() {
   const [products, setProducts] = useState ([]);
   useEffect(() => {
    fetch('http://localhost:30001/products') // Certifique-se de que a URL está correta
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    

  return (
    <div className="App">
        <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
