import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import bg from '../assests/opi.jpeg';
import '../styles/loginsignup.css';
import BackArrow from './backarrow';

const Attendance = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const backendUrl = 'http://127.0.0.1:8000';

  const sendImageToBackend = async (imageBlob) => {
    const formData = new FormData();
    formData.append("file", imageBlob);

    try {
      const response = await fetch(`${backendUrl}/attendance/`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || result.status === "error") {
        if (result.message.includes("already marked")) {
          setMessage(result.message);
          setAttendanceMarked(false);
        } else {
          setMessage(result.message || 'Failed to mark attendance.');
        }
      } else {
        setMessage(result.message);
        setAttendanceMarked(true);
      }
    } catch (error) {
      setMessage('Error marking attendance: ' + error.message);
    }
  };

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setMessage('Image capture failed. Try again.');
      return;
    }

    setCameraActive(true);

    const res = await fetch(imageSrc);
    const imageBlob = await res.blob();

    await sendImageToBackend(imageBlob);
  };

  return (
    <div className="main">
      <BackArrow />
      <img src={bg} alt="bg" className="bg-img" />

      <div className="landing">
        <h1>Welcome to the Smart Classroom System</h1>
        {!attendanceMarked && <p>Please come close to the camera for marking attendance</p>}

        {!attendanceMarked && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={480}
            height={300}
            className={`webcam ${cameraActive ? 'webcam-active' : ''}`}
          />
        )}

        {!attendanceMarked && (
          <div className="button-group" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={capture} className="action-button">Mark Attendance</button>
            <button onClick={() => navigate('/register')} className="action-button">Registration Mode</button>
          </div>
        )}

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Attendance;
