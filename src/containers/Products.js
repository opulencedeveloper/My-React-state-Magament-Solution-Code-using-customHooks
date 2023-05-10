import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
//importing our custom hook
import { useStore } from '../hooks-store/store';
import './Products.css';
 
const Products = props => {
  //how you should use it
 //const [state, dispatch] = useStore();

 //since I'm only intrested in the state, I assed it with [0]
 const state = useStore()[0];
  return (
    <ul className="products-list">
      {/* there is a products key inside state in initStore in the products-store file, so i asses it with -> state.products */}
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
