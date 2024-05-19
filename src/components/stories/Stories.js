import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style.css';

const Stories = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/stories-page'); // Navigate to the stories page
  };

  return (
    <section className="stories-section">
      <h2 className="section-title">Stories 📖</h2>
      <div className="content">
        <p>Here are some interesting stories!</p>
        <MyButton onClick={handleClick} />
      </div>
    </section>
  );
}

const MyButton = ({ onClick }) => {
  return (
    <button className="button-81" onClick={onClick}>
      Let's Read Stories
    </button>
  );
}

export default Stories;
