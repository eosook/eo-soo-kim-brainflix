import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<VideoUpload />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
