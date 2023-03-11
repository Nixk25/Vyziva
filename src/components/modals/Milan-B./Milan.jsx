import React from 'react'
import "./Milan.css"
import MilanBefore from "../../../assets/Milan-B.-Before.jpeg"
import MilanAfter from "../../../assets/Milan-B.-After.jpeg"


const Milan = (props) => {
  return (
    <div onClick={props.milanClose} className={`modal ${props.out ? "show" : ""}`} >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2 className='modal-title'>Milan B.</h2>
            </div>
            <div className="modal-body">
                <img src={MilanBefore} alt="" />
                <img src={MilanAfter} alt="" />
            </div>
            <div className="modal-footer">
                <button onClick={props.milanClose} className="button">Zavřít</button>
            </div>
        </div> 
   </div>
  )
}

export default Milan