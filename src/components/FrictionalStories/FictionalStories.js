import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style.css';


const FictionalStories = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/fictional-stories-page'); // Navigate to the fictional stories page
  };

  return (
    <section className="fictionalstories-section">
      <h2 className="section-title">Fictional Stories 🧙‍♂️</h2>
      <div className="content">
        <p>Here are some fictional stories!</p>
        
        <MyButton onClick={handleClick} />
      </div>
    </section>
  );
}

const MyButton = ({ onClick }) => {
  return (
    <button className="button-81" onClick={onClick}>
      Let's Read Fictional Stories
    </button>
  );
}

export default FictionalStories;
