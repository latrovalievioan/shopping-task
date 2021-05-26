import React from 'react';
import './App.css';

type Product = {
  id: number;
  name: string;
  slug: string;
  material: string;
  color: string;
  description: string;
  price: string;
  currency: string;
  image: string;
 };
 

function App() {

  const [products, setProducts] = React.useState<Product[]>([])
  
  React.useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://ioan-4r7sk1yfwf2q.runkit.sh/products", {
    })
    .then(response =>{console.log(response)
    return response})
    .then(response => response.json())
    .then((parsed:Product[]) => {
      setProducts(parsed)
    })
  })

  return (
    <div className="App">
      <ul>
      {products.map(product => 
        <li key={product.id}>product</li>
      )}
      </ul>
    </div>
  );
}

export default App;
