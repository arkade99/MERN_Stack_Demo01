import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { MyNotes } from "./screens/MyNotes/MyNotes";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen/RegisterScreen";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
