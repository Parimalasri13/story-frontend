// import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style.css';


const Memes = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/meme-page'); // Navigate to the meme page
  };

  return (
    <section className="memes-section">
      <h2 className="section-title">Memes 😂</h2>
      <div className="content">
        <p>Here are some funny memes!</p>
      
        <MyButton onClick={handleClick} />
        
      </div>
    </section>
  );
};

const MyButton = ({ onClick }) => {
  return (
    <button className="button-81" onClick={onClick}>
      Let's read Memes
    </button>
  );
};

export default Memes;
