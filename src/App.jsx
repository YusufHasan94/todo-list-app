import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainLayout from "./Components/MainLayout/MainLayout";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Navbar isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
      <MainLayout
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </>
  );
}

export default App;
