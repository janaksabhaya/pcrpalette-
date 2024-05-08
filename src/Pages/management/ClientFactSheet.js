import React from 'react';
import PageHeader from '../../Components/Common/PageHeader';
import TextInput from '../../Components/UI/TextInput';
import ThemeButton from '../../Components/UI/Button';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactSelect from '../../Components/UI/ReactSelect';

const ClientFactSheet = () => {
  return (
    <>
      <PageHeader title="Client Fact Sheet" />
      <Container fluid>
        <Card>
          <Card.Header as="h4" className="text-start text-capitalize filter--title">
            Client Fact Sheet
          </Card.Header>
          <Card.Body as="div">
            <Row className='row-gap-3'>
              <Col xxl={3}>
                <div className="d-flex align-items-center gap-2">
                  <span className="d-block">Firm</span>
                  <ReactSelect options={[{}]} />
                  <ThemeButton size="sm" className="d-block global--add-btn text-capitalize border-0">
                    update
                  </ThemeButton>
                </div>
              </Col>
              <Col xxl={12}>
                <Row>
                    <Col xxl={6}></Col>
                    <Col xxl={6}></Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ClientFactSheet;
