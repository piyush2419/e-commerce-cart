import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import SearchBar from "./components/SearchBar";
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Order from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[8vw] lg:px-[10vw] '>
      <ToastContainer/>
     <Navbar/>
     <SearchBar/>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/collection' element={<Collection />} />
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/product/:productId' element={<Product/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/Orders' element={<Order/>}/>
         <Route path='placeorder' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
   </div>

  )
}

export default App
