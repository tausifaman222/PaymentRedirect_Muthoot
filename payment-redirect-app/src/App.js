import React, { useState } from 'react';
import './App.css';

function App() {
  const [paymentLink, setPaymentLink] = useState('');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const redirectToPayment = () => {
    if (paymentLink.trim() !== '') {
      // Check if the link includes "http" or "https"
      if (!/^https?:\/\//i.test(paymentLink)) {
        // If "http" or "https" is not present, add "https://" to the URL
        window.location.href = `https://${paymentLink}`;
      } else {
        // If "http" or "https" is already present, use the entered link as is
        window.location.href = paymentLink;
      }
    } else {
      alert('Please enter a valid payment link.');
    }
  };

  const handleInputFocus = () => {
    setShowWelcomeMessage(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src="paymenthub-logo.png" alt="PaymentHub Logo" className="logo" />
        <h1>Payment Gateway</h1>
      </div>
      {showWelcomeMessage && (
        <p className="welcome-message">Welcome! Please enter your payment link below to proceed with the payment.</p>
      )}
      <div className="input-container">
        <input
          type="text"
          value={paymentLink}
          onChange={(e) => setPaymentLink(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Paste your payment link here"
          className="input-field"
        />
        <button onClick={redirectToPayment} className="proceed-button" onMouseEnter={handleScrollToTop}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default App;
