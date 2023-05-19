import {useContext,React} from 'react'
import { SMContext } from './SMContext'
import { links, social } from './SMData'
import {RxCross1} from 'react-icons/rx'

const Sidebar = () => {
    let {isSidebarOpen,closeSidebar}=useContext(SMContext)
  return (
    <section className={isSidebarOpen?"sidebar sidebar-active":"sidebar"}>
        <div className="side-header">
            <h2>Tropical Coder</h2>
            <button className="side-cross" onClick={closeSidebar}>
                <RxCross1/>
            </button>
        </div>
        <div className="side-links">
            {links.map((items)=>
            {
                let {id,url,text,icon}=items;
                return <p key={id}><span>{icon}</span><span>{text}</span></p>
            })}
        </div>
        <div className="side-icons">
            {social.map((items)=>
            {
                let {id,url,icon}=items
                return <p key={id}>{icon}</p>
            })}
        </div>
    </section>
  )
}

export default Sidebar