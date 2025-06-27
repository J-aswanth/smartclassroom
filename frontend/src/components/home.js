import React from 'react';
import ghibli from '../assests/classroom.jpg';
import bg from '../assests/opi.jpeg';
import '../styles/mainpage.css';

const Home = ({ onStart }) => (
  <div className="mainpage-wrapper">
    <img src={bg} alt="bg" className="bg-img" />

    <div className="box">
      <div className="left-content">
        <h1>Welcome to Smart Classroom</h1>
        <div className="role-buttons">
          <button onClick={onStart}>Student</button>
          <button onClick={onStart}>Teacher</button>
        </div>
      </div>

      <div className="right-content">
        <img src={ghibli} alt="classroom" />
      </div>
    </div>
  </div>
);

export default Home;
