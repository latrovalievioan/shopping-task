import React from 'react';
import './App.css';
import {getProducts} from "./api"
import {Product} from "./types"
import {ProductsContainer} from './components/ProductsContainer'


 

function App() {

  const [products, setProducts] = React.useState<Product[]>([])
  
  React.useEffect(() => {
    getProducts()
    .then((parsed:Product[]) => {
      setProducts(parsed)
    })
  }, [])

  return (
    <div className="App">
      <ProductsContainer products={products}/>
    </div>
  );
}

export default App;
