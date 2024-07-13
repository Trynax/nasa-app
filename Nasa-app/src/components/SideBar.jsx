import React from 'react'

export default function SideBar(props) {
  const {handleToggleModal} = props
  return (
    <div className='sidebar'>
        <div className='bgOverlay'></div>
        <div onClick={handleToggleModal} className='sidebarContents'>
        <h2>The Brutal Martian Landscape</h2>
        <div>
            <p>Description</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque nam dolorem error? Esse rerum voluptas quisquam asperiores mollitia officia!
            </p>
        </div>
        <button onClick={()=>{
          handleToggleModal()
        }}>
              <i className="fa-solid fa-right-long"></i>
        </button>
        </div>
    </div>
  )
}
