import { Link } from 'react-router-dom';
import Header from '../components/Cabecera';
import Footer from '../components/Footer';
const Alta_Costura = () => {
    return (
        <div>
            <Header/>
            <main className='main_ACostura'>
                <div className='m_ACostura1'>
                    <p>
                        "Alta costura: donde cada puntada es una expresión de elegancia atemporal 
                    </p>
                    <p className='parrafo_animado4'>
                        y creatividad exquisita."
                    </p>
                </div>
                <div className='m_ACostura2'>
                    <p>
                    "Descubre la esencia de la elegancia con nuestra colección de alta costura, 
                    donde la calidad excepcional se encuentra con la artesanía meticulosa. 
                    </p>
                    <p>
                        Cada prenda es una obra maestra, diseñada para aquellos que aprecian la distinción y demandan lo mejor. 
                    </p>
                    <p>
                        Sumérgete en el lujo auténtico y la sofisticación incomparable, donde la alta calidad es más que una promesa, es un compromiso con la excelencia en cada detalle."
                    </p>
                </div>
                <div className='m_ACostura3'>
                    <img src="\src\images\m_ACostura10.jpg" alt="m_ACostura3" />
                </div>
                <div className='m_ACostura4'>
                    <img src="\src\images\m_ACostura11.jpg" alt="m_ACostura4" />
                </div>
                <div className='m_ACostura5'>
                    <img src="\src\images\m_ACostura2.jpg" alt="m_ACostura5" />
                    <img src="\src\images\m_ACostura5.jpg" alt="m_ACostura5" />
                    <img src="\src\images\m_ACostura8.jpg" alt="m_ACostura5" />
                </div>
                <div className='m_ACostura6'>
                    <p > 
                        Conoce a la Diseñadora
                    </p>
                    <p>
                        Rocio Ingrid Varela Nieto es una diseñadora con una mente creativa y apasionada en el mundo de la moda. 
                        Con una habilidad innata para fusionar la innovación y la elegancia, Rocio ha demostrado se destacó en la creación de diseños de ropa que no solo capturan la atención, sino que también trascienden las fronteras convencionales. 
                    </p>
                    <p>
                        Su estilo distintivo se refleja en cada prenda, donde cada puntada cuenta una historia de originalidad y sofisticación. A lo largo de su carrera, Rocio ha elevado la moda a un arte, inspirando a otros con su visión única y su dedicación incansable a la excelencia. 
                    </p>
                    <p>
                        Con más de 10 años de experiencia y un portafolio que habla por sí mismo, Rocio sigue siendo una fuerza impulsora en la industria, fusionando el pasado y el presente para crear el futuro de la moda.
                    </p>
                </div>
                <div className='m_ACostura9'>
                    <img src="\src\images\3_lite.jpg" alt="" />
                </div>
                <div className='m_ACostura10'>
                    <img src="\src\images\6_lite.jpg"  alt="" />

                </div>
                <div className='m_ACostura11'>
                    <img src="\src\images\7_lite.jpg" alt="" />
                </div>
            </main>
            <Footer/>
            
        </div>
        
    )
}
export default Alta_Costura;