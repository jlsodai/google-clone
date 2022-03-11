import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import { SearchContext } from "./appContext";
import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage";

function App() {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <div className="text-gray-800 text-[15px]">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="search" element={ <SearchPage />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
