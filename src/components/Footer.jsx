import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Formulario from '../components/Formulario';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer_page">
                    
                    <div className='info_footer'>
                        <Link to='/'>
                            <img src="/multimedia/logonegro_T.png" alt="none" />
                        </Link>
                        <ul>
                            <li>
                                <Link to='https://www.facebook.com/AtelierVC'>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to='mailto: ateliervarela14@gmail.com'>
                                    <MdEmail />
                                </Link>
                            </li>
                            <li>
                                <Link to='https://wa.link/yb8sws'>
                                    <FaWhatsapp />
                                </Link>
                            </li>
                        </ul>
                    </div>
                        
                    <div className='info'>
                        <h4>SERVICIOS</h4>
                        <ul className='lista_info'>
                            <li>
                                <Link to='https://wa.link/yb8sws' className='Li'>Reserva una Cita</Link>
                            </li>
                            <li>
                                <Link to='/Tienda' className='Li'>Mi pedido</Link>
                            </li>
                            <li>
                                <Link to='https://maps.app.goo.gl/mz5jSeTsys4NJPs38' className='Li'>Visitanos</Link>
                            </li>
                            <li>
                                <Link to='/Tienda' className='Li'>Cursos</Link>
                            </li>
                            <li>
                                <Link to='https://wa.link/yb8sws' className='Li'>Envios a Toda Bolivia </Link>
                            </li>
                        </ul>
                        <h4>CONTACTO</h4> 
                        <ul className='lista_info'>
                            <li>
                                
                                <Link to='https://wa.link/yb8sws' className='Li'>+591 74094967</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="formulario">
                       <Formulario></Formulario> 
                    </div>
                    
                    
                    <div className='copy'>
                        <h4>
                            
                                &copy; 2023 Atelier Varela | Todos los derechos Reservados
                        </h4>
                    </div>
                        
                    
            </footer>
        </div>
    );
}
export default Footer;