import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import bg from '../assests/opi.jpeg';
import ghibli from '../assests/classroom.jpg';
import '../styles/mainpage.css';
import BackArrow from './backarrow';

const ModeSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role');

  return (
    <div className="mainpage-wrapper">
      <BackArrow />
      <img src={bg} alt="bg" className="bg-img" />

      <div className="box">
        <div className="left-content">
          <h2>Select Mode</h2>
          <div className="mode">
            <button className="mode-button" onClick={() => navigate('/register')}>
              Registration Mode
            </button>
            <button className="mode-button" onClick={() => navigate('/attendance')}>
              Attendance Mode
            </button>
            <button className="mode-button" onClick={() => navigate('/monitor')}>
              Monitoring Mode
            </button>

            {role === 'student' && (
              <>
                <button className="mode-button" onClick={() => navigate('/exam')}>
                  Exam Mode
                </button>
              </>
            )}
          </div>
        </div>

        <div className="right-content">
          <img src={ghibli} alt="ghibli" />
        </div>
      </div>
    </div>
  );
};

export default ModeSelect;
