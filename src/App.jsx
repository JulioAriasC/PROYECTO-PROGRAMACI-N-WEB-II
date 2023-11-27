import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Moda from './pages/Moda';
import Mujer from './pages/Mujer';
import Hombre from './pages/Hombre';
import Alta_Costura from './pages/Alta_Costura';
import Tienda from './pages/Tienda';
import Default from './pages/Default';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
			<Route path='/' element={<Home/>}></Route>
			<Route path='Moda' element={<Moda/>}></Route>
			<Route path='Mujer' element={<Mujer/>}></Route>
			<Route path='Hombre' element={<Hombre/>}></Route>
			<Route path='Alta_Costura' element={<Alta_Costura/>}></Route>
			<Route path='Tienda' element={<Tienda/>}></Route>
		</Route>
        <Route path="*" element={<Default />} />
      </Routes>
	  {/* <Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/> */}
			{/* <ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/> */}
    </div>
  );
}

export default App;
