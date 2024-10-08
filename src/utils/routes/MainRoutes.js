import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../screens/Home';
import About from '../../screens/About';
import Contact from '../../screens/Contact';
import Eveon from '../../screens/Eveon';
import BookingOrder from '../../screens/Booking';
import ProntoDetail from '../../components/models/ProntoDetail';
import JoyDetail from '../../components/models/JoyDetail';
import Shop from '../../screens/Shop';
import DetailPage from '../../screens/Detailpage';
import OrderPage from '../../screens/OrderPage';
import Success from '../../screens/Success';
import Login from '../../screens/Login';
import Admin from '../../screens/Admin';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/eveon-leopard" element={<Eveon />} />
      <Route path="/eveon-pronto" element={<ProntoDetail />} />
      <Route path="/eveon-joy" element={<JoyDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<BookingOrder />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/product/:id" element={<DetailPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default MainRoutes