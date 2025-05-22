import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import bg from '../assests/opi.jpeg'; 
import '../styles/loginsignup.css';

const Registration = () => {
  const webcamRef = useRef(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [captureClicked, setCaptureClicked] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false); 

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setMessage('Image capture failed. Please try again.');
      return;
    }
    setCameraActive(true);
    setCaptureClicked(true);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setMessage('Please enter your name.');
      return;
    }
    setMessage(`Student ${name} successfully registered.`);
    setRegistered(true);
  };

  return (
    <div className="main">

      <img src={bg} alt="bg" className="bg-img" />

      <div className="landing">

        <h1>Welcome to the Registration Page for Smart Classroom</h1>

        {!registered && <p>Please enter your name and come close to the camera</p>}

        <div className="content">

          <div className="left-content">

              {!registered && (
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onClick={() => setShowWebcam(true)}
                  className="name"
                />
              )}

              {!registered && (
                <div className="button-group">
                  {!captureClicked && showWebcam && (
                    <button onClick={capture} className="action-button">
                      Capture Image
                    </button>
                  )}
                  {captureClicked && (
                    <button onClick={handleSubmit} className="submit-button">
                      Submit
                    </button>
                  )}
                </div>
              )}


          </div>

          <div className="right-content">

              {!registered && showWebcam && (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={320}
                  height={240}
                  className={`webcam ${cameraActive ? 'webcam-active' : ''}`}
                />
              )}

          </div>

        </div>

       
        <p className="message">{message}</p>
        
      </div>
    </div>
  );
};

export default Registration;
