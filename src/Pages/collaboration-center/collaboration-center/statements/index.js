import React, { useContext, useState } from 'react';
import PageHeader from '../../../../Components/Common/PageHeader';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactSelect from '../../../../Components/UI/ReactSelect';
import { AuthContext } from '../../../../Components/ContainerBody/ContainerBody';
import { pageRoutes } from '../../../../configs';
import AddDocumentModal from './partials/AddDocumentModal';
import ThemeButton from '../../../../Components/UI/Button';
import FontAwesome from 'react-fontawesome';
import LibrariesSidebar from '../partials/LibrariesSidebar';
import StatementsTable from './partials/StatementsTable';


const Statements = () => {
    const { user, services, crmData } = useContext(AuthContext);
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <PageHeader title="Statements" />
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

                        <ThemeButton size="sm" className="d-flex align-items-center text-capitalize global--add-btn border-0" onClick={() => setIsOpenModal(true)}>
                            <FontAwesome className="fa fa-plus me-2 d-block" />
                            add document
                        </ThemeButton>
                    </div>

                    <div>
                        <StatementsTable user={user} services={services} crmData={crmData} />
                    </div>
                </Col>
            </Row>
            <AddDocumentModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} onSave={() => { setIsOpenModal(false) }} />
        </>
    );
};

export default Statements;
