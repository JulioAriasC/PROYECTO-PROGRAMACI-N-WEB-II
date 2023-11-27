import React, { useState, useEffect} from 'react';
const Formulario = () => {
  const [suscripcion, setSuscripcion] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    setResultado(`¡Te damos la Bienvenida ${suscripcion}, presiona enviar para saber mas de nosotros!`);
  }, [suscripcion]);

  const handleInputChange = (e) => {
    if(e.target.value.length <=50){
      setSuscripcion(e.target.value);
    }
    
  };

  const handleEnviarClick = (e) => {
    e.preventDefault(); 
    console.log('NombreSuscriptor: ', suscripcion);
  };

  return (
      <div className='formulario_subs'>
        <h2>Formulario de suscripción</h2>
          <form onSubmit={handleEnviarClick}>
            <label>
                Ingresa tu Nombre: 
                <input type='text' value={suscripcion} onChange={handleInputChange} /><br/>
                Tu Email: 
                <input type="email" /><br/>
                Asunto: 
                <input type="text" /> <br/>
                Mensaje: <br></br>
                <textarea name="" id="" cols="10" rows="5"></textarea>

            </label>
          <br/>
          <div>{resultado}</div><br/>
          <button type="submit">Enviar</button>
          </form>
      </div>
    );
  };

export default Formulario;
