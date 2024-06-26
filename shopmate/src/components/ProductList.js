// import { useCallback, useEffect, useState } from 'react';

import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import gif from '../assets/loading.gif';

export const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState('http://localhost:8000/products');

  const { data: products, loading, error } = useFetch(url);

  // Using a direct fxn on our useEffect to fetch our API
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, [url]);

  // Calling the fetch fxn defined in another page on outside our useEffect
  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts]);

  // using our custom hook to fetch any endpoint

  return (
    <section>
      <div className='filter'>
        <button onClick={() => setUrl('http://localhost:8000/products')}>
          All
        </button>
        <button
          onClick={() => setUrl('http://localhost:8000/products?in_stock=true')}
        >
          In Stock
        </button>
      </div>
      {loading && (
        <p>
          <img src={gif} alt='' />
          Loading Products...
        </p>
      )}
      {error && <p>{error}</p>}
      {products &&
        products.map((product) => (
          <div className='card' key={product.id}>
            <p className='id'>{product.id}</p>
            <p className='name'>{product.name}</p>
            <p className='info'>
              <span>${product.price}</span>
              <span className={product.in_stock ? 'instock' : 'unavailable'}>
                {product.in_stock ? 'In stock' : 'Unavailable'}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
