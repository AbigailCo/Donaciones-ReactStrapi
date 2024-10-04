import React from 'react';

const Contact = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">
                            Ready to start your next project with us? Send us a message and we will get back to you as soon as possible!
                        </p>
                        <h4>Contact Emails:</h4>
                        <hr className="divider" />
                        <p>
                            <a href="mailto:candelaria.corrales@est.fi.uncoma.edu.ar">candelaria.corrales@est.fi.uncoma.edu.ar</a><br />
                            <a href="mailto:melani.quininires@est.fi.uncoma.edu.ar">melani.quininires@est.fi.uncoma.edu.ar</a>

                        </p>
                        <h4>GitHub Repository:</h4>
                        <hr className="divider" />
                        <p>
                            <a href="https://github.com/AbigailCo/Donaciones-ReactStrapi.git" target="_blank" rel="noopener noreferrer">
                                https://github.com/AbigailCo/Donaciones-ReactStrapi.git
                            </a>
                        </p>
                    </div>
                </div>
                {/* Add the contact form here */}
            </div>
        </section>
    );
};

export default Contact;
