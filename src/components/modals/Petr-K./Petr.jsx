import React from 'react'
import "./Petr.css"
import PetrBefore from "../../../assets/Petr-K.-Before.jpeg"
import PetrAfter from "../../../assets/Petr-K.-After.jpeg"


const Petr = (props) => {

  return (
   <div onClick={props.petrClose} className={`modal ${props.show ? "show" : ""}`} >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2 className='modal-title'>Petr K.</h2>
            </div>
            <div className="modal-body">
                <img src={PetrBefore} alt="" />
                <img src={PetrAfter} alt="" />
            </div>
            <div className="modal-footer">
                <button onClick={props.petrClose} className="button">Zavřít</button>
            </div>
        </div> 
   </div>
  )
}

export default Petr