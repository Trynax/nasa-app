import Main from "./components/Main.jsx"
import SideBar from "./components/SideBar.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from "react"

function App() {
  const [showModal, setShowModal]= useState(false)
   function handleToggleModal(){
    setShowModal(!showModal)
   }
  return (
    <>
     <Main/>
    {showModal &&  <SideBar handleToggleModal={handleToggleModal} />} 
     <Footer handleToggleModal={handleToggleModal}  showModal={showModal}/>
     </>
  )
}

export default App
  