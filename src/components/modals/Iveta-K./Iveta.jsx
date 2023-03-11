import React from 'react'
import "./Iveta.css"
import IvetaBefore from "../../../assets/Iveta-K.-Before.jpeg"
import IvetaAfter from "../../../assets/Iveta-K.-After.jpeg"



const Iveta = (props) => {
  return (
    <div onClick={props.ivetaClose} className={`modal ${props.view ? "show" : ""}`} >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2 className='modal-title'>Iveta K.</h2>
            </div>
            <div className="modal-body">
                <img src={IvetaBefore} alt="" />
                <img src={IvetaAfter} alt="" />
            </div>
            <div className="modal-footer">
                <button onClick={props.ivetaClose} className="button">Zavřít</button>
            </div>
        </div> 
   </div>
  )
}

export default Iveta