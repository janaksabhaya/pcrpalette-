import React, { useContext } from 'react';
import PageHeader from '../../../Components/Common/PageHeader';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../../configs';
import ReactSelect from '../../../Components/UI/ReactSelect';
import DocumentLibrariesTable from './partials/DocumentLibrariesTable';
import { AuthContext } from '../../../Components/ContainerBody/ContainerBody';
import LibrariesSidebar from './partials/LibrariesSidebar';

const Libraries = () => {
  const { user, services, crmData } = useContext(AuthContext);
  return (
    <>
      <PageHeader title="All Site Content" />
      <div className="text-start mb-3">
        <h2 className="mb-0 title--wrap text-capitalize">Displays all sites, lists, and libraries in this site.</h2>
      </div>
      <Row>
        <Col xxl={1}>
          {/* <ul className="ps-0 mb-0 text-start list-inline sidebar--container">
            <li className="mb-3">
              <Link to={pageRoutes.library} className="d-block mb-2 text-capitalize">
                Libraries
              </Link>
              <Link to={pageRoutes.collabration_custodian_forms} className={`d-block mb-2 text-capitalize ${pageRoutes.collabration_custodian_forms == window.location.pathname && 'active-link'}`}>
                Custodian Forms
              </Link>
              <Link to={pageRoutes.collabration_documents} className={`d-block mb-2 text-capitalize ${pageRoutes.collabration_documents == window.location.pathname && 'active-link'}`}>
                Documents
              </Link>
              <Link to={pageRoutes.collabration_invoices} className={`d-block mb-2 text-capitalize ${pageRoutes.collabration_invoices == window.location.pathname && 'active-link'}`}>
                Invoices
              </Link>
              <Link to={pageRoutes.collabration_loas} className={`d-block mb-2 text-capitalize ${pageRoutes.collabration_loas == window.location.pathname && 'active-link'}`}>
                LoAs
              </Link>
              <Link to="#!" className="d-block mb-2 text-capitalize">
                Statements
              </Link>
              <Link to="#!" className="d-block mb-2 text-capitalize">
                Silverman Batch Reports
              </Link>
              <Link to="#!" className="d-block text-capitalize">
                Site Pages
              </Link>
            </li>
            <li>
              <Link to="#!" className="d-block mb-2 text-capitalize">
                Lists
              </Link>
              <Link to="#!" className="d-block mb-2 text-capitalize">
                Calendar
              </Link>
              <Link to="#!" className="d-block mb-2 text-capitalize">
                Contacts
              </Link>
              <Link to="#!" className="d-block mb-2 text-capitalize">
                Issues
              </Link>
              <Link to="#!" className="d-block text-capitalize">
                Tasks
              </Link>
            </li>
            <li className="mt-2 pt-2 border-top">
              <Link to="#!" className="d-block mb-2 text-capitalize">
                recycle bin
              </Link>
              <Link to="#!" className="d-block text-capitalize">
                All Site Content
              </Link>
            </li>
          </ul> */}
          <LibrariesSidebar />
        </Col>
        <Col xxl={11}>
          <div className="tab--box d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center gap-2'>
              <Link to="#!" className="d-block text-capitalize text-decoration-none">
                Create
              </Link>
              <Link to="#!" className="d-block text-capitalize text-decoration-none">
                Site workflows
              </Link>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className="d-block">view:</span>
              <ReactSelect options={[{}]} />
            </div>
          </div>
          <div>
            <DocumentLibrariesTable />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Libraries;
