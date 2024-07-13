import React from 'react'

export default function Footer(props) {

  const {handleToggleModal} = props
  return (
    <footer>
        <div className='bgGraidient'></div>
        <div>
            <h2>The Brutal Martin Landscape</h2>
            <h1>APOD PROJECT</h1>
        </div>
        <button onClick={()=>{
          handleToggleModal()
        }}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
