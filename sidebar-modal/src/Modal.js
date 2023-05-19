import React, { useContext } from 'react'
import { SMContext } from './SMContext'
import {RxCross1} from 'react-icons/rx'

const Modal = () => {
  let {isModalOpen,closeModal}=useContext(SMContext)
  return (
    <section className={isModalOpen?"modal modal-active":"modal"}>
        <div className="center-box">
          <h2>Modal</h2>
          <button onClick={closeModal} className='modal-cross'><RxCross1/></button>
        </div>
    </section>
  )
}

export default Modal