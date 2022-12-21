import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">{props.title}</a>
        <div className="form-check form-switch px-4" style={{position: 'absolute', right: '55px', top: '17px'}}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={{cursor : 'pointer'}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {/* <i className="fa-solid fa-sun fa-xl"></i> */}
                <span className="icon" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                    <i className={`fa-solid fa-${props.mode === 'light' ? 'sun' : 'moon'} fa-xl`}></i>
                </span>
            </label>
        </div>
        <button className={`navbar-toggler ${props.mode === 'light' ? '' : 'bg-secondary'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" ></span> {/*style={{color: props.mode === 'light' ? 'black' : 'white'}} */}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">{props.aboutText}</a>
            </li>
            </ul>

        </div>
        </div>
    </nav>
  )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired
    // .isRequired means that it is mandatory to give a value to that prop (i.e., pass a prop to that component)
    // if default props are declared, then it will not show any error, even no prop is passed to that component
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
};