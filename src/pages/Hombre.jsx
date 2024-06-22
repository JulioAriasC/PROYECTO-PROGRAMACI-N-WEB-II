import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';
const Hombre = () => {
    return (
        <div>
            <Cabecera></Cabecera>
        <main className='main_hombre'>
            <div className="m_hombre1">
                {/* <img src="src\images\m_hombre9.jpg" width='1400px' alt="m_hombre1" /> */}
                <p >
                    "Descubre la esencia de la moda masculina distintiva: 
                    donde el estilo encuentra su máxima expresión en cada detalle,
                </p>
                <p>
                    y la elegancia 
                </p>
                <p className='parrafo_animado3'>
                    se convierte en un sello inconfundible."
                </p>
            </div>
            <div className="m_hombre2">
                <p>
                "En nuestra tienda, la sofisticación se encuentra con el estilo y el confort. 
                </p>
                <p>
                    Descubre una colección vanguardista que redefine la elegancia masculina, donde cada prenda no solo se ajusta a tu cuerpo, sino también a tu estilo de vida. Bienvenido a la fusión perfecta de moda, comodidad y distinción."
                </p>
            </div>
            <div className="m_hombre3">
                <img src="\src\images\m_hombre6.webp"  alt="m_hombre2" />

            </div>
            <div className="m_hombre4">
                <img src="\src\images\m_hombre8.jpg"  alt="m_hombre4" />
            </div>
            <div className="m_hombre5">
                <img src="\src\images\m_hombre7.jpg" alt="m_hombre5" />
                <img src="\src\images\m_hombre10.jpg" alt="m_hombre5" />
                <img src="\src\images\m_hombre12.jpg"alt="m-hombre5" />
            </div>
            <div className="m_hombre6">
                <img src="\src\images\m_hombre2.jpg" alt="m_hombre6" />
            </div>

            <div className="m_hombre8">
                <p>
                    "Elegancia y refinamiento definen el diseño distintivo de nuestros modelos."
                </p>
            </div>
            <div className="m_hombre9">
                <img src="\src\images\m_hombre5.webp" height='700px' alt="m_hombre9" />
            </div>
            <div className="m_hombre10">
                <img src="\src\images\m_hombre4.jpg" alt="m_hombre10" />
            </div>
            <div className="m_hombre11">
                <p>
                    "Diseño personalizado a tus necesidades"
                </p>
            </div>
        </main>
            <Footer></Footer>
        </div>
        
    )
}
export default Hombre;