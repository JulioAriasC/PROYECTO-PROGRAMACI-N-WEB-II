import { ProductList } from '../components/ProductList';
import { Header } from '../components/Header';
import { useState } from 'react';

import Footer from '../components/Footer';
const Tienda = () =>{
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
    return(
		<div>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<footer>
                   <Footer/>
                    
            </footer>
		</div>
        
    );
    
}
export default Tienda;