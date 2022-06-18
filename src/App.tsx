import React from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MyCoursePage from './Pages/MyCoursePage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/my-courses/:courseCode" element={<MyCoursePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
