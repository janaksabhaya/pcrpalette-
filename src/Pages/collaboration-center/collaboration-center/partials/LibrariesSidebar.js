import React from 'react'
import { pageRoutes } from '../../../../configs'
import { Link } from 'react-router-dom'

const LibrariesSidebar = () => {
    return (
        <ul className="ps-0 mb-0 text-start list-inline sidebar--container">
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
                <Link to={pageRoutes.collabration_statements} className={`d-block mb-2 text-capitalize ${pageRoutes.collabration_statements == window.location.pathname && 'active-link'}`}>
                    Statements
                </Link>
                <Link to={pageRoutes.collabration_batch_reports} className={`d-block mb-2 text-capitalize ${pageRoutes.collabration_batch_reports == window.location.pathname && 'active-link'}`}>
                    Silverman Batch Reports
                </Link>
                <Link to={pageRoutes.collabration_site_pages} className="d-block text-capitalize">
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
        </ul>
    )
}

export default LibrariesSidebar
