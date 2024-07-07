import React from 'react'
import loading from '../loading.gif'

export default function LoadingSpinner() {
    const loadingstyle = {height:"75vh",display:"flex",justifyContent:"center",alignItems:"center"};
    return (
    <div style={loadingstyle}>
        <img src={loading} alt="Loading"/>
    </div>
  )
}
