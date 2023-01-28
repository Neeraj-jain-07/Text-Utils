import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange =(event) => {
        // console.log("handle onchange clicked");
        setText(event.target.value)
    }

    const handleUpClick =() => {
        // console.log("handle upClick clicked");
        setText(text.toUpperCase()) 
        // setText(text.toLocaleLowerCase()) 
        

        // this is for capatilise word 
        // setText(text[0].toUpperCase() + text.slice(1)) 
    }
    

    const [ text , setText] = useState('Enter text here ');
    return (
        <>
            <div className="container my-4">
                <h2>{props.heading}</h2>
                <div className="mb-3 mt-4">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>convert into uppercase</button>
            </div>

        </>
    )
}
