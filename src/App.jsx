import React, { useState } from "react";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './styles/App.scss'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <Header isModalOpen={isModalOpen} modalType={modalType} />
      <Main
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalType={modalType}
        setModalType={setModalType}
      />
      <Footer />
    </>
  )
}

export default App
