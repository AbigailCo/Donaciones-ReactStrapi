import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { API_URL } from "./../config";

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [images, setImages] = useState([]); // Cambiar a un array

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Obtener todos los archivos seleccionados
    setImages(files); // Actualizar el estado con los archivos seleccionados
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('data[title]', title);
    formData.append('data[description]', description);
    formData.append('data[goal]', parseFloat(goal));
    formData.append('data[start_date]', startDate);
    formData.append('data[end_date]', endDate);
    formData.append('data[youtube_link]', youtubeLink);
  
    // Agregar todas las imágenes al FormData
    images.forEach((image) => {
      formData.append('images', image); // Cambiar 'files.image' a 'images'
    });

    try {
      console.log('Datos de la campaña:', formData);

      const response = await fetch(`${API_URL}/api/campaigns`, {
        method: 'POST',
        body: formData, // No incluir headers 'Content-Type' aquí
      });

      if (response.ok) {
        alert('Campaña creada exitosamente');
      } else {
        const errorResponse = await response.json();
        console.error('Error:', errorResponse);
        alert('Error al crear la campaña: ' + errorResponse.error.message);
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
        <Form.Group controlId="formImage">
          <Form.Label>Subir Imágenes</Form.Label>
          <Form.Control
            type="file"
            accept="image/*" // Solo aceptar archivos de imagen
            onChange={handleImageChange}
            multiple // Agregar el atributo "multiple"
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
