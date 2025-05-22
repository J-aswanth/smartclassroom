import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import bg from '../assests/opi.jpeg';
import '../styles/loginsignup.css';

const Attendance = () => {

  const webcamRef = useRef(null);
  const [message, setMessage] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setMessage('Image capture failed. Try again.');
      return;
    }

    setCameraActive(true);

    setTimeout(() => {
      setAttendanceMarked(true);
      setMessage('Hello Student, your attendance is marked.');
    }, 800);
  };

  return (
    <div className="main">

      <img src={bg} alt="bg" className="bg-img" />

      <div className="landing">
        
        <h1>Welcome to the Smart Classroom System</h1>
        {!attendanceMarked && <p>Please come close to the camera for marking attendance</p>}

        {!attendanceMarked && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={320}
            height={240}
            className={`webcam ${cameraActive ? 'webcam-active' : ''}`}
          />
        )}

        {!attendanceMarked && (
          <div className="button-group">
            <button onClick={capture} className="action-button">
              Mark Attendance
            </button>
          </div>
        )}

        <p className="message">{message}</p>

      </div>
    </div>
  );
};

export default Attendance;
