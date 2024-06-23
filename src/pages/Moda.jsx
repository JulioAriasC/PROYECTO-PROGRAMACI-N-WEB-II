import { Link } from 'react-router-dom';
import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
const Moda = () => {
    return (
        <div>
            <Cabecera></Cabecera>
			<main className="main_moda">
                <div className='main1'>
                    <p>
                    La moda empodera la individualidad, 
                    celebra la creatividad y conecta culturas, 
                    </p>
                    <p className='parrafo_animado'> 
                    tejiendo un mundo inspirador.
                    </p>
                </div>
                <div className='main2'>
                    <p>
                        "Exploramos la vanguardia de la moda con sutileza y originalidad,
                        tomando inspiración de las capitales de estilo. 
                        En nuestra sociedad, discernimos con perspicacia lo que innovar y lo que preservar."
                    </p>
                </div>
                <div className='main3'>
                        <ReactPlayer 
                            url='multimedia/video2.mp4'
                            controls
                            light
                            loop
                            volume='.3'
                            playing
                        ></ReactPlayer>
                </div>
                <div className='main4'>
                    <img src="images\banner3.jpg" alt="main4" />
                </div>
                <div className='main10'>
                        <ReactPlayer 
                            url='multimedia/video_moda1.mp4'
                            controls
                            light
                            loop
                            playing
                            volume='.3'
                        ></ReactPlayer>
                </div>
                <div className='main11'>
                    <p>
                    "Cada atuendo es una expresión única. 
                    </p>
                    <p>
                    Celebra tu estilo con nosotros, inspirado por las capitales de la moda como París, Milán, Londres y Nueva York.
                    </p>
                    <p>
                    Descubre la belleza de tu propio relato de moda."
                    </p>
                </div>
                
            </main>
            <Footer></Footer>
		</div>
            
    )
}
export default Moda;