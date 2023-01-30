import React, { useState } from 'react'
// import 'bootstrap/dist/js/bootstrap.js';
// import '/bootstrap/dist/js/bootstrap.min.js';
// window.bootstrap = require('/bootstrap/dist/js/bootstrap.bundle.js');

import * as bootstrap from 'bootstrap'

export default function TextForm(props) {
    //  document.getElementById('green').style.color = 'green'
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
     toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
      toast.show()
      })
      }

    const handleOnChange = (event) => {
        // console.log("handle onchange clicked");
        // preView()
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert('Text changed into Uppercase','success')
        props.showAlert('Convert into uppercase','success')
        // this is for capatilise word 
        // setText(text[0].toUpperCase() + text.slice(1)) 
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert('Text changed into Lowercase','success')
    }

    const handleClearClick = () => {
        setText('')
        props.showAlert('Text has been cleared','success')
    }



    const handleReverseClick = () => {
        var a1 = text.split('');
        a1 = a1.reverse()
        var newStrin = a1.join("");
        setText(newStrin);
        props.showAlert('Text reversed successfully','success')
    }
    // remove extra spaces
    const removeExtraSpaces = () => {
        var newStr = text.replace(/\s+/g, ' ').trim();
        setText(newStr)
        props.showAlert('Removed extra spaces successfully','success')
    }


    const handleCoptTextClick = () => {
        var copyText = document.getElementById('mybox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Text copied successfulyy','success')
    }

    const handleAlternativeCaseClick = () => {
        var a1 = text.split('');
        for (let i = 0; i < a1.length; i++) {
            if (i % 2 !== 0) { // for even
                a1[i] = a1[i].toUpperCase()
            } else {
                a1[i] = a1[i].toLowerCase();
            }
        }
        var newStr = a1.join('')
        setText(newStr)
        props.showAlert('Text Alternative successfully','success')
    }

    const handleInverseCaseClick = () => {
        var a1 = text.split('');
        //    console.log(a1);
        for (let i = 0; i < a1.length; i++) {
            // console.log(a1[i])
            if (a1[i] === a1[i].toLowerCase()) {
                a1[i] = a1[i].toUpperCase();
            } else {
                a1[i] = a1[i].toLowerCase();
            }
        }
        // console.log(a1);
        var newStr = a1.join('')
        // console.log(newStr)
        setText(newStr)
        props.showAlert('Text Inverse successfully','success')
    }

    const handleCapatiliseClick = () => {
        var a1 = text.split(' ');
        a1 = a1.filter(function (value, index, array) {
            return value !== "";
        })
        var a2 = [];
        a1.forEach(item => {
            console.log(item);
            item = item[0].toUpperCase() + (item.slice(1)).toLowerCase()
            a2.push(item)
        });
        var newStr = a2.join(' ')
        setText(newStr);
        props.showAlert('Text Capatilise successfully','success')
    }


    const arrLength = () => {
        var arr = text.split(" ");
        var narr = arr.filter(function (value, index, array) {
            return value !== ''
        })
        return narr
    }
    const [text, setText] = useState('');

    // textAreaStyle 
    const textAreaStyle = {
        fontWeight: "500"
    }

    // preview font blue
    // const [preText, setpreText] = useState('')
    // const preView=()=>{
    //    if(text.length ===0){

    //    }
    //    else{
    //     setpreText(text)
    //    }
    // }

    // js for copy text
    

    return (
        <>
            <div className="container my-4">
                <h2>{props.heading}</h2>
                <div className="mb-3 mt-4">
                    <textarea style={textAreaStyle} className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleUpClick}>convert into uppercase</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleLoClick}>convert into lowercase</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleReverseClick}>Reverse text</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleCapatiliseClick}>Capatilise text</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleInverseCaseClick}>Inverse case</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleAlternativeCaseClick}>Alternative case</button>
                <button disabled={text.length ===0}  id="liveToastBtn" className={`btn btn-${props.btnC} mx-2 my-2`} onClick={handleCoptTextClick}>Copy Text</button>
                <button disabled={text.length ===0} className={`btn btn-${props.btnC} mx-2 my-2`} onClick={removeExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className="container">
                <p>{arrLength().length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").filter(element => {return element.length !==0}).length} Minuite Average reading time</p>
                <h2>Preview</h2>
                <p className='preblue'> {text.length === 0 ? `Nothing to preview` : text}</p>
            </div>

            {/* alert when you do copy */}
            
            <div className="toast-container position-fixed top-0 end-0 p-3">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt=""/>
                            <strong className="me-auto">TextUtils</strong>
                            {/* <small>11 mins ago</small> */}
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body text-green  fs-5">
                     {text.length ===0?"Nothing copy":'Text Copied'}
                    </div>
                </div>
            </div>

        </>
    )
}



//
// // console.log(arr,"before ")
// for (let i in arr) {
//     // console.log(arr)
//     if (arr[i] === "") {
//         arr.splice(i, 1)
//     }
// }
// // console.log("after",arr)
// return arr;
