import React from "react";
/* import { Card, Carousel } from "react-bootstrap";
 */
import { Card, Carousel } from "react-bootstrap";
import {API_URL} from "./../config";

const getYouTubeId = (url) => {
  if (!url) return null; // Verifica si url es nulo o indefinido

  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};

const CampaignCard = ({ campaign }) => {
  const youtubeId = getYouTubeId(campaign.link_youtube);

  return (
    <Card /* style={{ cursor: "pointer", width: "18rem", margin: "1rem" }} */>
      {/*  <a
        href={`/campaigns/${campaign.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      > */}
               
      <Carousel>
        {Array.isArray(campaign.image) && campaign.image.length > 0 ? (
          
          campaign.image.map((image, index) => (
            
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`${API_URL}${image.path}`}
                alt={`Imagen de la campaña ${index}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/path/to/default/image.jpg"
              alt="Imagen por defecto"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </Carousel.Item>
        )}
      </Carousel>
      
      <Card.Body>
        <Card.Title>{campaign.title}</Card.Title>
        <Card.Text>{campaign.description}</Card.Text>
        <Card.Text>
          <strong>Meta:</strong> ${campaign.goals}
        </Card.Text>
        <Card.Text>
          <strong>Fechas:</strong> {campaign.start_date} a {campaign.end_date}
        </Card.Text>

        {youtubeId && (
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Campaign Video"
              allowFullScreen
              style={{ width: '100%', height: '300px' }} // Ajusta la altura según sea necesario
            />
          </div>
        )}
      </Card.Body>

    </Card>
  );
};

export default CampaignCard;
