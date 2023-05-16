import React from 'react'

const Alert = ({alertMsg,alertColor,number,valid}) => {
  return (
    <aside className={`alert ${alertColor}`}>
        <h3>{valid?number:""} {alertMsg}</h3>
    </aside>
  )
}

export default Alert