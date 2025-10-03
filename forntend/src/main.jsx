import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/Home/HomePage';
import AboutPage from './landing_page/About/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/product/ProductPage';
import SignUp from './landing_page/signUp/SignUp';
import SignIn from './landing_page/signUp/SignIn';
import SupportPage from './landing_page/support/SupportPage';
import ScrollToTop from "./landing_page/ScrollTop";

import NotFound from './landing_page/NotFound';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop />
  <Navbar/>
  <Routes>
  <Route path="/" element={<HomePage />} />
    
  <Route path="/signup" element={<SignUp />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/products" element={<ProductPage />} />
  <Route path="/pricings" element={<PricingPage />} />
  <Route path="/support" element={<SupportPage />} />
  <Route path="/*" element={<NotFound/>} />

  </Routes>
  <Footer/>
  </BrowserRouter>,
)
