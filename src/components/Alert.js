import React from 'react'

export default function Alert(props) {
    const capitalizeFirstLetter = (word) => {
        let lowerStr = word.toLowerCase();
        let ch = lowerStr[0];
        return ch.toUpperCase() + lowerStr.slice(1);
    }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type}`} role="alert">
           <strong>{capitalizeFirstLetter(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    </div>
  )
}
