import {React,useContext} from 'react'
import { SMContext } from './SMContext'
import {GiHamburgerMenu} from 'react-icons/gi'

const ControlCenter = () => {
    let {openSidebar,openModal}=useContext(SMContext)
  return (
    <div className="control-center">
        <button className='sidebar-btn' onClick={openSidebar}><GiHamburgerMenu/></button>
        <button className='modal-btn' onClick={openModal}>Open Modal</button>
    </div>
  )
}

export default ControlCenter