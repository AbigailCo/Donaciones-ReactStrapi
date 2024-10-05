import React, { useState } from 'react';
import { searchCampaigns } from "../services/api"; // Importa el método desde api.js

const BuscadorCampañas = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedCampaign, setSelectedCampaign] = useState(null); // Campaña seleccionada para mostrar en el modal
    const [showModal, setShowModal] = useState(false); // Controlar la visibilidad del modal
  
    // Función para manejar el cambio de input
    const handleSearchChange = async (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
  
      if (term.length >= 3) {
        setLoading(true);
        setError('');
        try {
          const result = await searchCampaigns(term);
          
          if (result.length > 0) {
            setCampaigns(result);
          } else {
            setCampaigns([]); // Vaciar si no hay resultados
            setError('No se encontraron campañas.');
          }
        } catch (error) {
          setError('Error al buscar campañas.');
          setCampaigns([]); // Vaciar en caso de error
        } finally {
          setLoading(false);
        }
      } else {
        setCampaigns([]); // Limpiar cuando el término es menor a 3 caracteres
        setError(''); // Limpiar mensajes
      }
    };
      // Manejar clic en campaña para mostrar el modal
  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
    setShowModal(true); // Mostrar modal
  };
  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCampaign(null);
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
  
        {loading && <p>Cargando campañas...</p>}
        {error && <p className="text-danger">{error}</p>}
  
        <ul className="list-group">
          {campaigns.length > 0 ? (
            campaigns.map((campaign) => (
              <li key={campaign.id} className="list-group-item" onClick={() => handleCampaignClick(campaign)}>
                {campaign.title || 'Sin título'}
              </li>
            ))
          ) : (
            searchTerm.length >= 3 && !loading && <li className="list-group-item">No tenemos ninguna campaña que coincida con este titulo</li>
          )}
        </ul>
          {/* Modal */}
      {showModal && selectedCampaign && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Campaña : {selectedCampaign.title}</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Descripcion: {selectedCampaign.description || 'No hay descripción disponible.'}</p>
                <p>Meta: {selectedCampaign.goal || 'No hay descripción disponible.'}</p>
                <p>Inicio: {selectedCampaign.start_date || 'No hay descripción disponible.'}</p>
                <p>Fin: {selectedCampaign.end_date || 'No hay descripción disponible.'}</p>
                {/* Aquí puedes agregar más detalles de la campaña */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default BuscadorCampañas;