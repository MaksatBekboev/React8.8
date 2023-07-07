import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Список товаров:</h2>
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

const App = () => {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ];

  return <ProductList products={products} />;
};

export default App;