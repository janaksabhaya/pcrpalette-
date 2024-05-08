import React from 'react';
import PageHeader from '../../Components/Common/PageHeader';
import ThemeRadioGroup from '../../Components/UI/ThemeRadioGroup';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactSelect from '../../Components/UI/ReactSelect';
import ThemeButton from '../../Components/UI/Button';

const GrowthSummary = () => {
  return (
    <>
      <PageHeader title="Growth Summary" />
      <Container fluid>
        <Card>
          <Card.Header as="h4" className="text-start text-capitalize filter--title">
            Growth Summary
          </Card.Header>
          <Card.Body as="div">
            <Row className='align-items-center'>
              <Col xxl={3}>
                <div className="d-flex align-items-center gap-2">
                  <span className="d-block title--boxs text-start">Run Date</span>
                  <ReactSelect options={[{}]} className="w-100" />
                </div>
              </Col>
              <Col xxl={2}>
                <ThemeRadioGroup
                  name="report_type"
                  value={'daily'}
                  onChange={(e) => {}}
                  options={[
                    {
                      label: 'Monthly',
                      value: 'monthly',
                      color: 'default',
                    },
                    {
                      label: 'Yearly',
                      value: 'yearly',
                      color: 'default',
                    },
                    {
                      label: 'YTD',
                      value: 'ytd',
                      color: 'default',
                    },
                  ]}
                />
              </Col>
              <Col xxl={1}>
                <ThemeButton size="sm" className="global--add-btn border-0">
                  submit
                </ThemeButton>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default GrowthSummary;
