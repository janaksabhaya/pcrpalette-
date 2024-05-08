import React from 'react';
import FontAwesome from 'react-fontawesome';
import ThemeButton from '../UI/Button';
import TextInput from '../UI/TextInput';

export default function SearchInput(props) {
  const {
    placeholder = "Search this site..."
  } = props
  
  return (
    <div className="d-flex align-items-center justify-content-end search--component ms-auto">
      <TextInput type="text" placeholder={placeholder} />
      <ThemeButton size="sm" variant="transparent">
        <FontAwesome name="xbutton" className="fa-search" />
      </ThemeButton>
    </div>
  );
}
