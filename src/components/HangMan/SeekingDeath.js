import React from 'react'

const SeekingDeath = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : 'hide'}`}>
      <p>Don't Try Mock Me, You Fool</p>
    </div>
  )
}

export default SeekingDeath
