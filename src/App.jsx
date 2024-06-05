import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const api = "d60d277a-1428-43ef-9f19-7c0c17b58240";

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />}/>
        <Route path="upload" element={<VideoUpload />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
