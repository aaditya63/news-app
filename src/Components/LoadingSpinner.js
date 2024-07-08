import React from 'react'
import loading from '../loading.gif'

export default function LoadingSpinner() {
    const loadingstyle = {textAlign:"center"};
    return (
    <div style={loadingstyle}>
        <img src={loading} alt="Loading"/>
    </div>
  )
}
