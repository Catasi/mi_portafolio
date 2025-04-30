import {useState, useRef} from "react"
import { datosFormacion } from '../data/datosFormacion.js';

export function IslaDinamicaFormacion() {
	//toma el Index como constante -- null
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <section>
        {datosFormacion.map((seccion, index) => (
          <div className="acordion" key={index}>
            <button className="btn-acordion" onClick={() => toggle(index)}>
              {seccion.titulo}
            </button>
            <div
              className={`contenido-acordion ${
                activeIndex === index ? "active" : ""
              }`}
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  activeIndex === index
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
              }}
            >
                {seccion.items.map((item, i) => (
                  <div className="seccion" key={i}>
                    {"nombre" in item && "herramienta" in item
                      ? 
                      <div className="item">
                        <img src={item.img} alt={item.nombre} className="item-img"></img>
                        <div className="intem-info">
                            <h3>{item.herramienta}</h3>
                            <p>{item.nombre}</p>
                        </div>
                       </div>
                      : 
                      <div className="educacion">
                        <img src={item.img} alt={item.institucion} className="educacion-img"></img>
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

      <style jsx>{`

        .acordion {
          margin-bottom: 1rem;
          border: 1px solid #db750e;
          border-radius: 6px;
          overflow: hidden;
        }

        .btn-acordion {
          width: 100%;
          text-align: left;
          padding: 1rem;
          font-size: 1.2rem;
          background-color: #db750e;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .btn-acordion:hover {
          background-color: #f5a14d;
        }

        .contenido-acordion {
          background-color: #313131;
          overflow: hidden;
          transition: max-height 0.5s ease;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .seccion {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 1rem;
            justify-content: center;
        }

        .educacion {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: auto;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }
    
        .educacion-img {
            width: max-content;
            height: 200px;
            object-fit: cover;
            border-radius: 20px;
        }
    
        .educacion-info {
            padding: 30px;
            text-align: justify;
            display: flex;
            flex-direction: column;
            align-content: center;
            gap: 10px;
        }

        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem;
            width: 150px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }

        item:hover {
            transform: translateY(-10px);
        }
    
        .item-img {
            width: max-content;
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 0.5rem;
        }
    
        .item-info {
            padding: 30px;
            text-align: justify;
            display: flex;
            flex-direction: row;
            align-content: center;
            gap: 10px;
        }
    
        h3 {
            color: #db750e;
            margin: 0;
            font-size: 20px;
        }
    
        .educacion-info p {
            padding-bottom: 15px;
            padding-top: 15px;
            margin: 0;
            font-size: 16px;
        } 

        ul {
          padding: 1rem 1.5rem;
          margin: 0;
          color: #fff;
        }

        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}