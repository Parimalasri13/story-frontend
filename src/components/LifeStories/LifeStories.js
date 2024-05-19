import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style.css';
import { Link } from 'react-router-dom';

const LifeStories = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/life-stories-page'); // Navigate to the life stories page
  };

  return (
    <section className="lifestories-section">
      <h2 className="section-title">Life Stories 🌱</h2>
      <div className="content">
        <p>Here are some life stories!</p>
        <Link to="/life-stories-page"></Link>
        <MyButton onClick={handleClick} />
      </div>
    </section>
  );
}

const MyButton = ({ onClick }) => {
  return (
    <button className="button-81" onClick={onClick}>
      Let's Read Life Stories
    </button>
  );
}

export default LifeStories;
