import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Website/HomePage';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Products from './Pages/Website/Products';
import Cart from './Components/Cart';
import BLogin from './Pages/Auth/BLogin';
import EmptyCart from './Components/emptyCart';




function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
            <Route path='/Blogin' element={<BLogin />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          <Route path='/Products' element={<Products></Products>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/emptycart' element={<EmptyCart></EmptyCart>}></Route>
        
        </Routes>
      </>
    </div>
  );
}

export default App;

