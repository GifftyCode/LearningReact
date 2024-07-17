import { Routes, Route } from 'react-router-dom';
import { Cart } from '../components';
import { Cards } from '../components';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Cards />} />
      <Route path='cart' element={<Cart />} />
    </Routes>
  );
};
