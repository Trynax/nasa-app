import Main from "./components/Main.jsx"
import SideBar from "./components/SideBar.jsx"
import Footer from "./components/Footer.jsx"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState(null)
  const[loading, setLoading]= useState(false)
  const [showModal, setShowModal]= useState(false)

  
   function handleToggleModal(){
    setShowModal(!showModal)
   }

   useEffect(()=>{
    async function fectchApiData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY 
      const url = `https://api.nasa.gov/planetary/apod?api_key=CvJMsPtyFxS4MX2kXZAo2wFn4qc5zOuRsCzqPMyp`
      try{
        const response = await fetch(url)
        const apiData = await response.json()
        setData(apiData)
        console.log(apiData)
      }
      catch(err){
        console.log(err)
      }
    }


    fectchApiData()
   }, [])
  return (
    <>
    {data? <Main data={data}/> : (
      <div className="LoadingState">
          <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal &&  <SideBar data={data} handleToggleModal={handleToggleModal} />} 
    {
      data && <Footer data={data} handleToggleModal={handleToggleModal}  showModal={showModal}/>

    }
     </>
  )
}

export default App 
  