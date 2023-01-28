import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("handle onchange clicked");
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        // this is for capatilise word 
        // setText(text[0].toUpperCase() + text.slice(1)) 
    }
    const handleLoClick = () => {
        setText(text.toLocaleLowerCase())
    }

    const handleClearClick = () => {
        setText('')
    }

    

    const handleReverseClick = () => {
      var a1 = text.split('');
      a1 = a1.reverse()
      var newStrin = a1.join("");
      setText(newStrin);
    }

    const handleAlternativeCaseClick = () => {
    var a1 = text.split('');
    for(let i=0;i<a1.length; i++){
        if(i%2 !== 0){ // for even
            a1[i] = a1[i].toUpperCase()
        }else{
            a1[i] =a1[i].toLowerCase();
        }
    }
    var newStr=a1.join('')
    setText(newStr)
    }

    const handleInverseCaseClick = () => {
        var a1 = text.split('');
       console.log(a1);
        for(let i=0;i<a1.length;i++){
            // console.log(a1[i])
            if(a1[i] === a1[i].toLowerCase()){
                a1[i]=a1[i].toUpperCase();
            }else{
                a1[i]=a1[i].toLowerCase();
            }
        }
        console.log(a1);
        var newStr =a1.join('')
        // console.log(newStr)
       setText(newStr)
    }

    const handleCapatiliseClick = () => {
      var a1 = text.split(' ');
      a1 = a1.filter(function(value ,index ,array){
          return value !== "";
      })
      var a2=[];
      a1.forEach(item => {
        console.log(item);
        item = item[0].toUpperCase()+(item.slice(1)).toLowerCase()
        a2.push(item)
      });
       var newStr = a2.join(' ')
      setText(newStr);
    }


    const arrLength = () => {
        var arr = text.split(" ");
        var narr =arr.filter(function(value , index ,array){
              return value !== ''
        })
        return narr
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-4">
                <h2>{props.heading}</h2>
                <div className="mb-3 mt-4">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert into uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleLoClick}>convert into lowercase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse text</button>
                <button className="btn btn-success mx-2" onClick={handleCapatiliseClick}>Capatilise text</button>
                <button className="btn btn-success mx-2" onClick={handleInverseCaseClick}>Inverse text</button>
                <button className="btn btn-success mx-2" onClick={handleAlternativeCaseClick}>Alternative case</button>
            </div>
            <div className="container">
                <p>{arrLength().length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} Minuite Average reading time</p>
                <h2>Preview</h2>
                <p>{text}</p>
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
