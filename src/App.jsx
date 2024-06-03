import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
