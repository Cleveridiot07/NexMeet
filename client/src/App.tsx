import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import SignupPage from './pages/Signup/index';
import VideoCall from './components/Test/Test';
import SigninPage from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/test" element={<VideoCall roomUrl='' />} />
      </Routes>
    </Router>
  );
}

export default App;
