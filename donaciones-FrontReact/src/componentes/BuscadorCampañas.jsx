import React, { useState, useEffect } from 'react';
import { API_URL } from "./../config"; // Asegúrate de tener la URL de tu API

const BuscadorCampañas = () => {
  const [campaigns, setCampaigns] = useState([]); // Almacenar todas las campañas
  const [searchTerm, setSearchTerm] = useState(''); // Almacenar el término de búsqueda
  const [filteredCampaigns, setFilteredCampaigns] = useState([]); // Almacenar campañas filtradas

  // Cargar campañas al montar el componente
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`${API_URL}/api/campaigns`); // Ajusta la ruta según tu API
        const data = await response.json();
        setCampaigns(data); // Asume que `data` es un array de campañas
        setFilteredCampaigns(data); // Inicialmente, mostrar todas las campañas
      } catch (error) {
        console.error('Error al cargar campañas:', error);
      }
    };

    fetchCampaigns();
  }, []);

  // Manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase(); // Convertir a minúsculas
    setSearchTerm(term);

    // Filtrar las campañas según el término de búsqueda
    const filtered = campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(term) // Filtrar por título de la campaña
    );
    setFilteredCampaigns(filtered);
  };

  return (
    <div>
      <h2>Buscar Campañas</h2>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />
      <ul className="list-group">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <li key={campaign.id} className="list-group-item">
              {campaign.title}
            </li>
          ))
        ) : (
          <li className="list-group-item">No se encontraron campañas</li>
        )}
      </ul>
    </div>
  );
};

export default BuscadorCampañas;
