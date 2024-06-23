import React, { useState , useEffect } from 'react';
import Footer from '../components/Footer';
import Cabecera from '../components/Cabecera';
import Video_Presentacion from '../components/VideoCard';
const Mujer = () => {

    return (
        <div>
            <Cabecera></Cabecera>
            <main className="main_mujer">
                <div className="m_mujer1">
                    
                    <p>
                        "El estilo es una forma de decir quién eres sin tener que hablar." 
                    </p>
                    <p className='parrafo_animado2'> 
                        - Rachel Zoe
                    </p>                
                </div>
                <div className="m_mujer2">
                    <p>Video Presentacion Coleccion Marie Curie</p>
                    <Video_Presentacion/>
                </div>
                <div className="m_mujer3">
                    <img src="/src/images/banner1.jpg" alt="banner1" />
                </div>
                <div className="m_mujer4">
                    <img src="/src/images/m_mujer3.jpg" alt="m_mujer4" />
                </div>
                <div className="m_mujer5">
                    <p>
                        "Explora un universo de elegancia audaz y feminidad sin límites. 
                    </p>
                    <p>
                        En nuestra tienda, la vanguardia se fusiona con la moda, ofreciéndote un espacio donde tu estilo único y empoderado se encuentra con las últimas tendencias. 
                    </p>
                    <p>
                        Descubre la moda que te inspira a brillar sin restricciones."

                    </p>
                </div>
                <div className="m_mujer6">
                    <section className='galery_images'>
                        <img src="/src/images/18_lite.jpg" alt="" />
                        <img src="/src/images/11_lite.jpg" alt="" />
                        <img src="/src/images/9_lite.jpg" alt="" />
                        <img src="/src/images/20_lite.jpg" alt="" />
                        <img src="/src/images/19_lite.jpg" alt="" />
                        <img src="/src/images/15_lite.jpg" alt="" />
                    </section>
                </div>
                <div className="m_mujer7">
                    <img src="/src/images/m_mujer2.jpg" alt="m_mujer2" />

                </div>
                <div className="m_mujer8">
                    <img src="/src/images/m_mujer5.avif" alt="m_mujer8" height='400px' />
                </div>
           
            </main>
            
            <Footer/>
        </div>
        
    )
}
export default Mujer;

  
  