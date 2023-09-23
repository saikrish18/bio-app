import React, { useEffect, useState } from 'react';
import EthicalCodePopup from './ethicalCodePopup';
import '../App.css'; 

function RatingsScreen() {
  const [ratings, setRatings] = useState({});
  const [showEthicalCodePopup, setShowEthicalCodePopup] = useState(false);

  useEffect(() => {
    // Simulated API call for ratings
    setTimeout(() => {
      setRatings({
        metCount: 25,
        ethicalCodeCount: 15,
      });
    }, 1000);
  }, []);

  const handleEthicalCodeClick = () => {
    setShowEthicalCodePopup(true);
  };

  const handleCloseEthicalCodePopup = () => {
    setShowEthicalCodePopup(false);
  };

  return (
    <div className="ratings-screen">
      <h1>Ratings Screen</h1>
      <div className="rectangular-view">
        <p>Met in real life: {ratings.metCount}</p>
        <p>Has ethical code of conduct: {ratings.ethicalCodeCount}</p>
        <button onClick={handleEthicalCodeClick}>View Ethical Code Details</button>
      </div>

      {showEthicalCodePopup && <EthicalCodePopup onClose={handleCloseEthicalCodePopup} />}
    </div>
  );
}

export default RatingsScreen;
