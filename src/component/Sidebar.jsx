import React, { useContext, useState } from 'react'
import './Sidebar.css'
import menu_icon from '../assets/menu_icon.png'
import plus_icon from '../assets/plus_icon.png'
import message_icon from '../assets/message_icon.png'
import question_icon from '../assets/question_icon.png'
import history_icon from '../assets/history_icon.png'
import setting_icon from '../assets/setting_icon.png'
import MainContent from './MainContent'
import { Context } from '../context/Context'


const Sidebar = () => {

    const [hide,setHide] = useState(false)
    const [showResult,setShowResult] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)

    const handleShow = () => {
        setShowResult(true)
    }

  return (
    <>
        <div className='main'>
        <div className="sidebar">

            <div className="top-content">

                <div className='top-first'>
                <img className='menu-icon' onClick={()=>setHide(!hide)} src={menu_icon} alt="menu" width={25} />

                    <div className="chat">
                        <img onClick={()=>setShowResult()} src={plus_icon} alt="plus" width={25} height={25} />
                        {hide ? <span>New Chat</span> : null}
                        
                    </div>
                </div>
                <div className="recent-container">
                    <p>Recent</p>
                    {prevPrompts.map((item,index)=>{
                            return (
                                <div className='recent-question'>
                                <img src={message_icon} alt="" width={25}  />
                       
                                {hide ? <span>{item.slice(0,18)}...</span> : null }
                       
                    </div>
                                
                            )
                        })}
                    
                </div>
            </div>

            <div className="bottom-content">
                <div className='question-container'>
                    <img  src={question_icon} alt="" width={20} />
                    {hide ? <span className="help">Help</span> : null}
                </div>

                <div className='activity-container'>
                    <img src={history_icon} alt="" width={20} />
                   {hide ?  <span className="activity">Activity</span> : null}
                </div>

                <div className='setting-container'>
                    <img src={setting_icon} alt="" width={20} />
                    {hide ? <span className="setting">Setting</span> : null}
                </div>
                
            </div>
            
        </div>
        <MainContent />
       

        </div>
      
    </>
  )
}

export default Sidebar
