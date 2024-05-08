import React from 'react';
import PageHeader from '../../Components/Common/PageHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactSelect from '../../Components/UI/ReactSelect';
import ThemeButton from '../../Components/UI/Button';
import FontAwesome from 'react-fontawesome';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const PerformanceBackfill = () => {
  return (
    <>
      <PageHeader title="Performance Backfill" />
      <Container fluid>
        <Card>
          <Card.Header as="h4" className="text-start text-capitalize filter--title">
            BackFill Editor
          </Card.Header>
          <Card.Body as="div">
            <Row>
              <Col xxl={4}>
                <div className="d-flex align-items-center gap-2">
                  <span className="d-block">Source :</span>
                  <ReactSelect options={[{}]} className="w-50" />
                  <ThemeButton size="sm" className="glodal--mini-btn border-0 p-0 d-flex align-items-center justify-content-center">
                    <LibraryAddIcon />
                  </ThemeButton>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default PerformanceBackfill;
