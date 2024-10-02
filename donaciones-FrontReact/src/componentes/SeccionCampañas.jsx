import React from 'react';
import CampaignList from './CampaignList';
const campañas = () => {
    return (
        <section className="page-section " id="campañas">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                    <CampaignList/>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default campañas;
