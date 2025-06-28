import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import bg from '../assests/opi.jpeg';
import '../styles/loginsignup.css';
import { useNavigate } from 'react-router-dom';
import BackArrow from './backarrow';

const Exam = () => {
  const webcamRef = useRef(null);
  const [message, setMessage] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [imageCaptured, setImageCaptured] = useState(false);
  //const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (!imageSrc) {
      setMessage('Image capture failed. Please try again');
      return;
    }

    setCameraActive(true);
    setImageCaptured(true);
    setMessage(`Hello ${'User'}, you are applicable for exam.`);
  };

  const showNextButton = message.startsWith('Hello') && message.includes('applicable for exam');

  return (
    <div className="main">
      <BackArrow />
      <img src={bg} alt="bg" className="bg-img" />

      <div className="landing">
        <h1>Exam Proctoring </h1>
        <p>Click below to mark yourself for exam.</p>

        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={480}
          height={300}
          className={`webcam ${cameraActive ? 'webcam-active' : ''}`}
        />

        {!imageCaptured && (
          <button onClick={handleCapture} className="action-button" style={{ marginTop: '1rem' }}>
            Mark for Exam
          </button>
        )}

        {message && <p className="message">{message}</p>}

        {showNextButton && (
          <button
            className="submit-button"
            style={{ marginTop: '1rem' }}
            onClick={() => navigate('/somewhere')} // replace with actual route
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Exam;
