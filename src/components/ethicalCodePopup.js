import React, { useEffect, useState } from 'react';

function EthicalCodePopup({ onClose }) {
  const [ethicalCodeDetails, setEthicalCodeDetails] = useState({});

  useEffect(() => {
    // Simulated API call for Ethical Code details
    setTimeout(() => {
      setEthicalCodeDetails({
        code: 'XYZ123',
        description: 'This is the ethical code description.',
      });
    }, 1000);
  }, []);

  return (
    <div className="popup">
      <h2>Ethical Code Pop-Up</h2>
      <p>Code: {ethicalCodeDetails.code}</p>
      <p>Description: {ethicalCodeDetails.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default EthicalCodePopup;
