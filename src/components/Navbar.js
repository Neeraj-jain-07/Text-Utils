import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    const round = {
        "width": "25px",
        "height": "25px"
    }
    const modeSuccess = () => {
        props.setmode('success')
        props.changeColor('success', '#254938')
    }
    const modeDanger = () => {
        props.setmode('danger')
        props.changeColor('danger', '#73252d')
    }
    const modeWarning = () => {
        props.setmode('warning')
        props.changeColor('warning', '#a58e48')
    }
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} `} >
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}  fw-bolder fs-4`} to="/">{props.title}</Link>
                {/* <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}  fw-bolder fs-4`} href="/Text-Utils">{props.title}</a> */}
                <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button >
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}  fw-bold fs-5`} aria-current="page" to="/">Home</Link>
                            {/* <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}  fw-bold fs-5`} aria-current="page" href="/Text-Utils">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}  fw-bold fs-5`} to="/about">{props.about}</Link>
                            {/* <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}  fw-bold fs-5`} href="/Text-Utils/about">{props.about}</a> */}
                        </li>
                    </ul>
                    <div className='d-flex flex-row  gap-2 mx-5'>
                        <button type="button" style={round} className="btn btn-success rounded-circle border border-white" onClick={modeSuccess}></button>
                        <button type="button" style={round} className="btn btn-danger rounded-circle border border-white" onClick={modeDanger}></button>
                        <button type="button" style={round} className="btn btn-warning rounded-circle border border-white" onClick={modeWarning}></button>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode === 'dark' ? 'light' : 'dark'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here",
    about: "About"
}