import React from 'react';
import PageHeader from '../../Components/Common/PageHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactSelect from '../../Components/UI/ReactSelect';

const AssetHirarchy = () => {
  return (
    <>
      <PageHeader title="Asset Hierarchy" />
      <div className="mt-3">
        <Container fluid>
          <Card>
            <Card.Header as="h4" className="text-start text-capitalize filter--title">
              Hierarchy Maintenance
            </Card.Header>
            <Card.Body as="div">
              <Row className="align-items-center row-gap-3">
                <Col xxl={3}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="d-block">Select Firm</span>
                    <ReactSelect className="w-75" />
                  </div>
                </Col>
                <Col xxl={3}>
                  <label className="d-flex align-items-center text-start text-capitalize">
                    <input type="checkbox" className="d-block mb-0 me-2" />
                    show inactive items
                  </label>
                </Col>
                <Col xxl={12}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AssetHirarchy;
