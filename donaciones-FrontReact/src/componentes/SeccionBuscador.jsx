import React from 'react';
import BuscadorCampañas from './BuscadorCampañas';
const Buscador = () => {
    return (
        <section className="page-section " id="buscador">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                    <BuscadorCampañas/>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Buscador;
