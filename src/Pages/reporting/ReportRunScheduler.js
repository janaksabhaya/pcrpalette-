import React, { useContext, useMemo, useState } from 'react';
import PageHeader from '../../Components/Common/PageHeader';
import ThemeButton from '../../Components/UI/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FolderIcon from '@mui/icons-material/Folder';
import ThemeTreeView from '../../Components/UI/ThemeTreeView';
import ReportRunSchedulerTable from './partials/ReportRunSchedulerTable';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../Components/ContainerBody/ContainerBody';

const ReportRunScheduler = () => {
  const { user, services, crmData } = useContext(AuthContext);
  const [selectedItem, setSelectedItem] = useState('');

  const treeViewData = useMemo(() => {
    let items = [
      {
        metadata: { value: 'Shared Composites' },
        name: 'Shared Composites',
        children: [
          {
            metadata: { value: 'test' },
            name: 'test',
          },
        ],
      },
    ];

    const addDynamicContent = (items) => {
      return items.map((item) => {
        let children = null;
        if (item.children) {
          children = addDynamicContent(item.children);
        }
        return {
          ...item,
          ...(children && {
            children: children,
          }),
          metadata: {
            ...item.metadata,
            render: ({ element, isBranch, isExpanded }) => (
              <>
                {isBranch ? isExpanded ? <RemoveCircleOutlineIcon sx={{ fontSize: '18px' }} /> : <AddCircleOutlineIcon sx={{ fontSize: '18px' }} /> : ''}
                {isBranch && <FolderIcon sx={{ fontSize: '18px' }} />}
                <span
                  className={`d-block text-capitalize ${selectedItem == element.metadata.value ? 'fw-bold' : ''}`}
                  onClick={() => {
                    if (false == isBranch) {
                      setSelectedItem(element.metadata.value);
                    }
                  }}
                >
                  {element.name}
                </span>
              </>
            ),
          },
        };
      });
    };

    return addDynamicContent(items);
  }, [selectedItem]);
  return (
    <>
      <PageHeader title="Report Run Scheduler" />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <Col xxl={6}>
              <Card>
                <Card.Header as="h4" className="text-start text-capitalize filter--title">
                  Report Scheduler
                </Card.Header>
                <Card.Body as="div">
                  <ThemeTreeView items={treeViewData} onClickItem={(item) => {}} />
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={6}>
              <Card>
                <Card.Header as="h4" className="text-start text-capitalize d-flex align-items-center justify-content-between filter--title">
                  Report Status
                  <ThemeButton size="sm" className="global--add-btn text-capitalize border-0">
                    refresh
                  </ThemeButton>
                </Card.Header>
                <Card.Body as="div">
                  <div>
                    <ReportRunSchedulerTable user={user} services={services} crmData={crmData} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReportRunScheduler;
