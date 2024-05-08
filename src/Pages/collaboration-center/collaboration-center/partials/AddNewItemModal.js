import React from 'react';
import Modal from '../../../../Components/UI/Modal';
import ThemeButton from '../../../../Components/UI/Button';
import { Table } from 'react-bootstrap';
import TextInput from '../../../../Components/UI/TextInput';
import ReactSelect from '../../../../Components/UI/ReactSelect';
import TextArea from '../../../../Components/UI/TextArea';

const modalStyle = {
  content: {
    width: '38%',
    border: 'none',
  },
};

const AddNewItemModal = ({ isOpen, onClose, onSave }) => {
  return (
    <Modal
      title="Issues - New Item"
      isOpen={isOpen}
      onClose={onClose}
      additionalStyle={modalStyle}
      footerContent={
        <div className="d-flex align-items-center justify-content-end gap-2">
          <ThemeButton size="sm" className="global--btn-css border-0 text-capitalize" onClick={onSave}>
            save
          </ThemeButton>
          <ThemeButton size="sm" className="global--btn-css border-0 text-capitalize" onClick={onClose}>
            cancel
          </ThemeButton>
        </div>
      }
    >
      <Table className="mb-0 tasks--table">
        <tbody>
          <tr>
            <td>
              Title <span>*</span>
            </td>
            <td>
              <TextInput type="text" />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <TextArea className="mb-0 w-100" />
              <a href="#!" className="d-block text-decoration-none mt-1">
                Click for help about adding basic HTML formatting.
              </a>
            </td>
          </tr>
          <tr>
            <td>Category</td>
            <td>
              <ReactSelect options={[{}]} className="w-50" />
            </td>
          </tr>
          <tr>
            <td>Priority</td>
            <td>
              <ReactSelect options={[{}]} className="w-50" />
            </td>
          </tr>
          <tr>
            <td>Comments</td>
            <td>
              <TextArea className="mb-0 w-100" />
              <a href="#!" className="d-block text-decoration-none mt-1">
                Click for help about adding basic HTML formatting.
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Super Household <span>*</span>
            </td>
            <td>
              <TextInput type="text" />
            </td>
          </tr>
          <tr>
            <td>Tax Entities</td>
            <td>
              <TextArea className="mb-0 w-100" />
            </td>
          </tr>
          <tr>
            <td>Accounts</td>
            <td>
              <TextArea className="mb-0 w-100" />
            </td>
          </tr>
          <tr>
            <td>Securities</td>
            <td>
              <TextArea className="mb-0 w-100" />
            </td>
          </tr>
          <tr>
            <td>
              Assigned Group <span>*</span>
            </td>
            <td>
              <ReactSelect options={[{}]} className="w-50" />
            </td>
          </tr>
          <tr>
            <td>Issue Status</td>
            <td>
              <ReactSelect options={[{}]} className="w-50" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
};

export default AddNewItemModal;
