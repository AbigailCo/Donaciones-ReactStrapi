import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../services/api';
import CampaignCard from './CampaignCard';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const campaignArray = campaigns.data || [];

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const data = await getCampaigns();
                console.log('Datos de campañas:', data);
                setCampaigns(data);
            } catch (error) {
                console.error('Error al cargar campañas:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCampaigns();
    }, []);

    return (
        <Container className="my-5">
            <div className="text-center mb-4">
                <h1 className="display-4 text-primary">Ayúdanos a ayudar</h1>
                <p className="lead text-muted">Descubre campañas increíbles y contribuye a hacer del mundo un lugar mejor.</p>
            </div>

            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <>
                    {campaignArray.length === 0 ? (
                        <Alert variant="warning" className="text-center">
                            No hay campañas disponibles en este momento.
                        </Alert>
                    ) : (
                        <Row>
                            {campaignArray.map((campaign) => (
                                <Col key={campaign.id} md={6} lg={4} className="mb-4">
                                    <CampaignCard campaign={campaign} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </>
            )}
        </Container>
    );
};

export default CampaignList;
