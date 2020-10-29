import React from 'react';
import './FetchButton.css';

function FetchButton({ callback }) {
  return (
    <button type="button" className="fetch-button" onClick={callback}>
      데이터 가져오기!
    </button>
  );
}

export default FetchButton;
