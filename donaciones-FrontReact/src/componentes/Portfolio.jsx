import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {/* Portfolio items */}
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    {/* Add more portfolio items here */}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
