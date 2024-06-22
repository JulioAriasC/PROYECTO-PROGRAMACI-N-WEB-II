import { Link } from 'react-router-dom';
import React, { useState , useEffect } from 'react';
const Cabecera = () => {
    return(
        <div className='cabecera'>
            <div className='header-logo'>
				<Link to="/">
					<img src="/src/multimedia/logonegro_T.png" alt="logo_atelier" />
				</Link>
            </div>
			<div className='user-actions'>
                <ul>
					<li>
						<Link to='/Moda' className='Li'>MODA</Link>
					</li>
					<li>
						<Link to='/Mujer' className='Li'>MUJER</Link>
					</li>
					<li>
						<Link to='/Hombre' className='Li'>HOMBRE</Link>
					</li>
					<li>
						<Link to='/Alta_Costura' className='Li'>ALTA COSTURA</Link>
					</li>
					<li>
						<Link to='/Tienda' className='Li'>TIENDA</Link>
					</li>
				</ul>
				
            </div>
        </div>
    );
}
export default Cabecera;