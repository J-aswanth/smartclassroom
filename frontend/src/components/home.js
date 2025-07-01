import React from 'react';
import { useNavigate } from 'react-router-dom';
import ghibli from '../assests/classroom.jpg';
import bg from '../assests/opi.jpeg';
import '../styles/mainpage.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = (role) => {
    navigate(`/mode?role=${role}`);
  };

  return (
    <div className="mainpage-wrapper">
      <img src={bg} alt="bg" className="bg-img" />

      <div className="box">
        <div className="left-content">
          <h1>Welcome to Smart Classroom</h1>
          <div className="role-buttons">
            <button onClick={() => handleStart('student')}>Student</button>
            <button onClick={() => handleStart('instructor')}>Instructor</button>
          </div>
        </div>

        <div className="right-content">
          <img src={ghibli} alt="classroom" />
        </div>
      </div>
    </div>
  );
};

export default Home;
