import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GradientButton from "./Components/GradientButton";
import GradientText from "./Components/GradientText"; // Adjust the path as necessary
import CameraPage from "./Components/CameraPage";
import FormPage from "./Components/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-200 gap-2 font-menlo">
              <GradientText
                text="Dermafyr"
                className="text-8xl mb-2 transition-none"
              />
              <GradientButton buttonName="Get Started" to="/camera" />{" "}
              {/* Updated to use to */}
            </div>
          }
        />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;