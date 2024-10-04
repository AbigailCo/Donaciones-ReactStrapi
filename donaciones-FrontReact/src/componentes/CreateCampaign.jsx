import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Asegúrate de que el 'goal' sea un número
    const campaignData = {
      data: {
        title,
        description,
        goal: parseFloat(goal),
        start_date: startDate,
        end_date: endDate,
        youtube_link: youtubeLink,
      },
    };
  
    try {
      console.log('Datos de la campaña:', campaignData);
  
      const response = await fetch('http://localhost:1337/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(campaignData),
      });
  
      if (response.ok) {
        alert('Campaña creada exitosamente');
      } else {
        const errorResponse = await response.json(); // Captura la respuesta de error
        console.error('Error:', errorResponse);
        alert('Error al crear la campaña: ' + errorResponse.error.message); // Muestra el mensaje de error
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Error de conexión con el servidor');
    }
  };
  return (
    
    <Container className="my-5">
      <h2>Crear Nueva Campaña</h2>
      <hr className="divider" />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGoal">
          <Form.Label>Meta</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formStartDate">
          <Form.Label>Fecha de inicio</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEndDate">
          <Form.Label>Fecha de fin</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formYoutubeLink">
          <Form.Label>Enlace de YouTube</Form.Label>
          <Form.Control
            type="text"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear Campaña
        </Button>
      </Form>
    </Container>
    
  );
};

export default CreateCampaign;
