import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import ModeSelect from './components/mode_select';
import Registration from './components/registration';
import Attendance from './components/attendance';
import Exam from './components/exam';
import BackArrow from './components/backarrow';

const ClassroomApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/back" element={<BackArrow />} />
      </Routes>
    </Router>
  );
};

export default ClassroomApp;
