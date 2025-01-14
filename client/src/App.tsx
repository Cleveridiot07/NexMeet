import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import SignupPage from "./pages/Signup/index";
import SigninPage from "./pages/Signin";
import VideoCallPage from "./pages/VideoCall/index";
import { DailyProvider } from "@daily-co/daily-react";
import AvatarSelection from "./pages/Avatar";
// import VideoCall from "./components/Test/VideoCall";




function App() {
  return (
    <DailyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/avatar" element={<AvatarSelection />} />
          <Route path="/videocall" element={<VideoCallPage />} />
          
          {/* <Route path="/custom" element={<CustomVideoCall roomUrl="https://iview.daily.co/gv3NoQo5odAIqiybYidQ" />} /> */}

        </Routes>
      </Router>
    </DailyProvider>
  );
}

export default App;
