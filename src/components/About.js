// import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function About(props) {

    const lightBorder ={
        "border":`5px solid black`,
        "padding":"20px 30px",
        "borderRadius":"10px"
    }
    const barkBorder={
        "border":`5px solid pink`,
        "padding":"20px 30px",
        "borderRadius":"10px"
    }
    return (
        <>
            <div className="container my-5"  >
                <h1 className='my-4'>{props.heading}</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample" style={props.mode === 'dark'? barkBorder:lightBorder}>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="flush-headingOne" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
                            style={{backgroundColor: props.mode ==='dark'?'#0b0e29':'white'}}>
                              <strong style={{color:props.mode ==='dark'?'white':'black'}}>User friendly enterface</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={{backgroundColor: props.mode ==='dark'?'#0b0e29':'white'}}>
                            <div className="accordion-body" style={{color:props.mode ==='dark'?'white':'black'}}>Placeholder content for this accordion, which is intended to demonstrate the  class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                            style={{backgroundColor: props.mode ==='dark'?'#0b0e29':'white'}}>
                            <strong style={{color:props.mode ==='dark'?'white':'black'}}>Can do any text manupulation Easily</strong>  
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={{backgroundColor: props.mode ==='dark'?'#0b0e29':'white'}}>
                            <div className="accordion-body" style={{color:props.mode ==='dark'?'white':'black'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"
                            style={{backgroundColor: props.mode ==='dark'?'#0b0e29':'white'}}>
                            <strong style={{color:props.mode ==='dark'?'white':'black'}}>Support All browers</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={{backgroundColor: props.mode ==='dark'?'#0b0e29':'white'}}>
                            <div className="accordion-body" style={{color:props.mode ==='dark'?'white':'black'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

About.prototype = {
    heading: PropTypes.string.isRequired,
}

About.defaultProps = {
    heading: "About Us"
}
