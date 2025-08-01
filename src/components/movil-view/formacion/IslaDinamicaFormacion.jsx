
import { useState, useRef } from "react"
import { getDatosFormacion } from '../../../data/getData.js';
import './IslaDinamicaFormacion.css';

export function IslaDinamicaFormacion({ currentLanguage }) {
  //toma el Index como constante -- null
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const datosFormacion = getDatosFormacion(currentLanguage);

  return (
    <div>
      <section>
        {datosFormacion.map((seccion, index) => (
          <div className="acordion" key={index}>
            <button className="btn-acordion" onClick={() => toggle(index)}>
              {seccion.titulo}
            </button>
            <div
              className={`contenido-acordion ${activeIndex === index ? "active" : ""
                }`}
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  activeIndex === index
                    ? Math.min(contentRefs.current[index]?.scrollHeight || 0, window.innerHeight * 0.6) + "px"
                    : "0px",
                overflowY: activeIndex === index ? "auto" : "hidden",
                transition: "max-height 0.3s ease-in-out"
              }}
            >
              {seccion.items.map((item, i) => (
                <div className="seccion" key={i}>
                  {"nombre" in item && "herramienta" in item
                    ?
                    <div className="item">
                      <img src={item.img} alt={item.nombre} className="item-img" />
                      <div className="intem-info">
                        <h3>{item.herramienta}</h3>
                        <p>{item.nombre}</p>
                      </div>
                    </div>
                    :
                    <div className="educacion">
                      <img src={item.img} alt={item.institucion} className="educacion-img" />
                      <div className="educacion-info">
                        <h3>{item.titulo} en {item.carrera} ({item.periodo})</h3>
                        <p>{item.descripcion}</p>
                        <h4>{item.institucion}</h4>
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}