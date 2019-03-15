import React from 'react';
import loader from '../images/loader.gif';

const IsLoading = () => (
  <div className="loading-center text-center">
    <img src={loader} className="text" alt="Loading..." />
  </div>
);

export default IsLoading;