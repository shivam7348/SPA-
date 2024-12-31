


import { Outlet } from 'react-router-dom';
import Home from './Home';

function Products() {
  return (
    <div>
     
      <Outlet /> 
      <Home/>
    </div>
  );
}

export default Products
