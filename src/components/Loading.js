import React from 'react';

import './Loading.css';

function Loading({ center = false }) {
  return (
    <div className={`${center && 'loader-box'}`}>
      <div className="loader" />
    </div>
  );
}

export default Loading;
