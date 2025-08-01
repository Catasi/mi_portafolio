import { useState } from "react";
import './MoreInfo.css';

export default function MoreInfo({ proyecto }) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);
    return (
        <div>
            <button
                className="mt-4 px-4 py-2 bg-[#db750e] text-white rounded hover:bg-[#c7680b] animate-bounce transition"
                onClick={() => setMostrarDetalles(!mostrarDetalles)}
            >
                {mostrarDetalles ? 'Cerrar' : 'Más información'}
            </button>
            <div className={`detalles-container ${mostrarDetalles ? 'mostrar' : ''}`}>
                <div className="pt-4">
                    <h4>Herramientas</h4>
                    <div className="flex flex-wrap gap-6 content-start">
                        {proyecto.herramientas.map((herramienta, i) => (
                            <div className="herramienta" key={i}>
                                <img src={herramienta.img} alt={herramienta.herramienta} />
                                <p>{herramienta.herramienta}</p>
                            </div>
                        ))}
                    </div>
                    <h4>Resultado</h4>
                    <p>{proyecto.resultado}</p>
                </div>
            </div>
        </div>
    );
}
