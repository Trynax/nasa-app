import React from 'react'

export default function Main(props) {

  const {data}= props
  return (
    <div className='imageContainer'>
    <img className='backgroundImage' src={data?.url} alt={data.title || "bg-image"} />

    </div>
  )
}
