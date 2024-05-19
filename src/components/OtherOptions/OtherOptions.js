import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style.css';
const OtherOptions = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/otheroptions-page'); // Navigate to the other options page
  };

  return (
    <section className="otheroptions-section">
      <h2 className="section-title">Other Options 🌟</h2>
      <div className="content">
        <p>Here are some other options!</p>
        <MyButton onClick={handleClick} />
      </div>
    </section>
  );
}

const MyButton = ({ onClick }) => {
  return (
    <button className="button-81" onClick={onClick}>
      Let's Read Some Other Interesting Stories
    </button>
  );
}

export default OtherOptions;
