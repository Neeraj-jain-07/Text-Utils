import React from 'react'

export default function Alert(props) {
    const toUppersCase=(Str)=>{
        return Str.charAt(0).toUpperCase() + Str.slice(1)
    }
    return (
       props.Alert && <div className="container my-5">
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{toUppersCase(props.Alert.type)}</strong> {props.Alert.msg}
        </div>
       </div>

    )
}
