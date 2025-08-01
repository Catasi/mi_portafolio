import './IslaDinamicaDetallesP.css';
export function IslaDinamicaDetallesP({proyecto}) {
    if (!proyecto) {
        return <p>Error: No se recibió el proyecto.</p>;
    }
    return (
        <section>
            <div className="detalles-proyecto-info">
                <h4>Herramientas</h4>
                <div className="herramientas">
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
        </section>
    );
}