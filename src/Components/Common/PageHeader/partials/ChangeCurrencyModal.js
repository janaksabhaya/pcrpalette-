import React from 'react';
import Modal from '../../../UI/Modal';
import ReactSelect from '../../../UI/ReactSelect';
import ThemeButton from '../../../UI/Button';

export default function ChangeCurrencyModal(props) {
  const { isOpen, onClose, onSave } = props;
  return (
    <Modal
      isOpen={isOpen}
      title="Select Currency"
      onClose={onClose}
      footerContent={
        <div className="d-flex align-items-center justify-content-center">
          <ThemeButton size="sm" className="me-2 d-block global--btn-css border-0">
            OK
          </ThemeButton>
          <ThemeButton
            size="sm"
            className="d-block global--btn-css border-0"
            onClick={() => {
              onClose();
            }}
          >
            Cancle
          </ThemeButton>
        </div>
      }
    >
      <ReactSelect
        value="Canadian Dollar"
        options={[
          { label: 'Canadian Dollar', value: 'Canadian Dollar' },
          { label: 'Danish krone', value: 'Danish krone' },
          { label: 'Euro', value: 'Euro' },
          { label: 'Hong Kong dollar', value: 'Hong Kong dollar' },
          { label: 'Japanese Yen', value: 'Japanese Yen' },
          { label: 'Pound Sterling', value: 'Pound Sterling' },
          { label: 'Swedish krona/kronor', value: 'Swedish krona/kronor' },
          { label: 'Swiss franc', value: 'Swiss franc' },
          { label: 'United States Dollar', value: 'United States Dollar' },
        ]}
        onChange={() => {}}
      />
    </Modal>
  );
}
