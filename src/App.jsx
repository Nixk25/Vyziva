import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Main from './components/main/Main'
import { ShopContextProvider } from './context/shop-context'

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App