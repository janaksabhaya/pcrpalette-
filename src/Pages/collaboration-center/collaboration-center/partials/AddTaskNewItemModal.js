import React, { useState } from 'react';
import Modal from '../../../../Components/UI/Modal';
import ThemeButton from '../../../../Components/UI/Button';
import { Table } from 'react-bootstrap';
import TextInput from '../../../../Components/UI/TextInput';
import ReactSelect from '../../../../Components/UI/ReactSelect';
import ThemeDatePicker from '../../../../Components/UI/ThemeDatePicker';
import FontAwesome from 'react-fontawesome';
import TextArea from '../../../../Components/UI/TextArea';
import AssignedToUserTaskModal from './AssignedToUserTaskModal';

const modalStyle = {
  content: {
    width: '38%',
    border: 'none',
  },
};

const AddTaskNewItemModal = ({ isOpen, onClose, onSave }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Modal
        title="Tasks - New Item"
        isOpen={isOpen}
        onClose={onClose}
        additionalStyle={modalStyle}
        footerContent={
          <div className="d-flex align-items-center justify-content-end gap-2">
            <ThemeButton size="sm" className="global--btn-css border-0 text-capitalize" onClick={onSave}>
              Save
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
              <td>Priority</td>
              <td>
                <ReactSelect options={[{}]} className="w-50" />
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <ReactSelect options={[{}]} className="w-50" />
              </td>
            </tr>
            <tr>
              <td>Assigned To</td>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <TextInput type="text" />
                  <ThemeButton size="sm" variant="transparent" className="modal--icon-btn p-0 d-flex align-items-center justify-content-center">
                    <FontAwesome className="fa fa-check d-block" />
                  </ThemeButton>
                  <ThemeButton
                    size="sm"
                    variant="transparent"
                    className="modal--icon-btn p-0 d-flex align-items-center justify-content-center"
                    onClick={() => {
                      setIsOpenModal(true);
                    }}
                  >
                    <FontAwesome className="fa fa-book d-block" />
                  </ThemeButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <TextArea className="mb-0 w-100" />
                <a href="#!" className="d-block text-decoration-none mt-2">
                  Click for help about adding basic HTML formatting.
                </a>
              </td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>
                <ThemeDatePicker className="w-50" />
              </td>
            </tr>
            <tr>
              <td>Due Date</td>
              <td>
                <ThemeDatePicker className="w-50" />
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
          </tbody>
        </Table>
      </Modal>

      <AssignedToUserTaskModal
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      />
    </>
  );
};

export default AddTaskNewItemModal;
