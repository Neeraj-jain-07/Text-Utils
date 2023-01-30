import React from 'react'

export default function Alert(props) {
    const toUppersCase=(Str)=>{
        return Str.charAt(0).toUpperCase() + Str.slice(1)
    }
    return (
        <div style={{'height':'60px'}} className="mt-4">
           { props.Alert && <div className="container">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{toUppersCase(props.Alert.type)}</strong> {props.Alert.msg}
                </div>
            </div>}
       </div>

    )
}
