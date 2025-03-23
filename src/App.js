import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Prediction from "./screens/prediction";
import Auth from "./screens/authen";
import Contact from "./screens/contact";
import AuthProvider from "./context/Auth/AuthProvider";
import Home from "./screens/home";

function App() {
  return (
    
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/predict" element={<Prediction />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<Contact />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;


