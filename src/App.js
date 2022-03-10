import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="search" element={ <SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
