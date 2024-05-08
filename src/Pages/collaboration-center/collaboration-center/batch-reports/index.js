import React, { useContext } from 'react';
import PageHeader from '../../../../Components/Common/PageHeader';
import { Col, Row } from 'react-bootstrap';
import ReactSelect from '../../../../Components/UI/ReactSelect';
import { AuthContext } from '../../../../Components/ContainerBody/ContainerBody';
import LibrariesSidebar from '../partials/LibrariesSidebar';
import BatchReportsTable from './partials/BatchReportsTable';

const BatchReports = () => {
    const { user, services, crmData } = useContext(AuthContext);

    return (
        <>
            <PageHeader title="Silverman Batch Reports " />
            {/* <div className="text-start mb-3">
                <h2 className="mb-0 title--wrap text-capitalize">Displays all sites, lists, and libraries in this site.</h2>
            </div> */}
            <Row>
                <Col xxl={1}>
                    <LibrariesSidebar />
                </Col>
                <Col xxl={11}>
                    <div className='d-flex align-items-center justify-content-end mb-2 gap-2 '>
                        <div className='all-documents-select'>
                            <ReactSelect options={[{}]} className='w-100' />
                        </div>

                    </div>

                    <div>
                        <BatchReportsTable user={user} services={services} crmData={crmData} />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default BatchReports;
