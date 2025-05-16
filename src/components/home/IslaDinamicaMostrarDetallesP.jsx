
import { useState } from 'react';
import { IslaDinamicaDetallesP } from './IslaDinamicaDetallesP.jsx';
import './IslaDinamicaMostrarDetallesP.css';

export function TarjetaProyecto({ proyecto }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <div className={`proyecto ${mostrarDetalles ? 'expandido' : ''}`}>
        <div class="proyecto-contenido">
          <img src={proyecto.img} alt={proyecto.nombre} className="proyecto-img" />
          <div className="proyecto-info">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.objetivo}</p>
          </div>
        </div>
        <button className="btn-ver-proyecto" onClick={() => setMostrarDetalles(!mostrarDetalles)}>
            {mostrarDetalles ? 'Cerrar' : 'Ver Más...'}
        </button>
        {mostrarDetalles && (
          <div className="detalles-desplegable">
            <IslaDinamicaDetallesP proyecto={proyecto} />
          </div>
        )}
  </div>
  );
}
