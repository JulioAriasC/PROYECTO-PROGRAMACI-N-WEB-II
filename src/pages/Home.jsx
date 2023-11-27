
import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
const Home = () => {
 
    return (
        <div>
            <Cabecera></Cabecera>
            <div className='container_Home'>
                <div className="banner" >
                    <div className="capa" ></div>
                    <div className="info_capa">
                        <p>
                            "La moda es la armadura para sobrevivir a la realidad cotidiana".
                        </p>
                        <p>
                            - Bill Cunningham
                        </p>
                    </div>
                    
                    
                </div>
                
                <div className="palabra_video">
                    <video autoPlay muted preload loop
                        src='src/multimedia/vid1.mp4' 
                    ></video>
                    <h1>MUJER</h1>
                </div>
                <div className='descripcion_palabra_video'>
                    <p>
                        "Descubre tu estilo, siéntete única y conquista cada día
                        con nuestra moda que refleja tu autenticidad. 
                    </p>
                    <p>
                        No solo te ofrecemos ropa, sino una oportunidad para expresar tu poder y elegancia. 
                    </p>
                    <p>
                    ¡Viste con nosotros y haz que cada día sea una pasarela de éxito y estilo!"
                    </p>
                </div>
                <div className="palabra_home">
                    <h2 className='border1'>HOMBRE</h2>
                    <h2 className='wave'>HOMBRE</h2>
                </div>
                
                <div className='descripcion_moda'>
                    <p>
                        "Descubre la sofisticación hecha a medida para hombres 
                        con nuestra exclusiva colección de moda. 
                    </p>
                    <p>
                        Cada prenda es una obra maestra diseñada para resaltar tu estilo único y distinguido.
                        Viste con elegancia, haz de cada día una declaración audaz de tu refinamiento personal. 

                    </p>
                    
                    <p>
                        Explora el arte de vestir con estilo y convierte cada ocasión en una experiencia sofisticada e inolvidable."

                    </p>
                </div>
                <div className='frase_home'>
                    <img src="src\images\banner2.jpg" alt="frase_home" />
                    
                </div>
                <div className='alta_costura_home1'>
                    <p>
                        
                        "En cada vestido de novia, se teje la historia de un nuevo comienzo. Celebra tu día especial con nosotros y haz que sea inolvidable.
                    </p>
                    <p>
                        ¡Eleva tu día especial con estilo y elegancia!"
                    </p>
                </div>
                <div className='alta_costura_home2'>
                    <div className="palabra_video">
                        <video autoPlay muted preload loop
                            src='src\multimedia\video_ACostura.mp4' 
                        ></video>
                        <h1>ALTA COSTURA</h1>
                    </div>
                </div>
                
                <div className='novedades_home'>
                    <p>
                        Disfruta nuestra colección en la TV Abierta
                    </p>
                </div>
                <div className="info_novedades_home">
                    <ReactPlayer
                        url='src\multimedia\video_presentacion.mp4'
                        light
                        controls
                        autoPlay
                        volume='0.3'
                    >
                    </ReactPlayer>                
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;