import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Search from '../components/Search';

export const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Search />
      <Footer />
    </div>
  )
}

export default HomePage
