import React from 'react';
import Modal from '../../../../../Components/UI/Modal';
import ThemeButton from '../../../../../Components/UI/Button';
import { Table } from 'react-bootstrap';

const modalStyle = {
  content: {
    width: '35%',
  },
};

const AddDocumentModal = ({ isOpen, onClose, onSave }) => {
  return (
    <Modal
      title="New page"
      isOpen={isOpen}
      onClose={onClose}
      additionalStyle={modalStyle}
      footerContent={
        <div className="d-flex align-items-center justify-content-end gap-2">
          <ThemeButton size="sm" className="global--btn-css border-0 text-capitalize" onClick={onSave}>
            ok
          </ThemeButton>
          <ThemeButton size="sm" className="global--btn-css border-0 text-capitalize" onClick={onClose}>
            cancel
          </ThemeButton>
        </div>
      }
    >
      <Table bordered className="modal--table mb-0">
        <tbody>
          <tr>
            <td>
              <span className="d-block mb-1 text-capitalize">New page name:</span>
              <div className="px-2">
                <input type="text" className="mb-2" />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
};

export default AddDocumentModal;
