import React, { useState } from 'react'

export default function Textform(props) {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    const changeUpCase = () => {
        let tname=name.toUpperCase();
        setName(tname);
        props.showAlert("Text Changed to Upper Case","success");
    }
    
    const changeLCase = () => {
        let tname=name.toLowerCase();
        setName(tname);
        props.showAlert("Text Changed to Lower Case","success");
    }
    const clearCase = () => {
        // let tname=name.toLowerCase();
        setName('');
        props.showAlert("Text Cleared","success");
    }
    // function typingSpeed(name){
    //     let startTime = new Date().getTime();      
    //     let endTime = new Date().getTime();
        
    //     let elapsedTimeInSeconds = (endTime - startTime) / 1000;
        
    //     let wordsPerMinute = (name.split(" ").length / elapsedTimeInSeconds) * 60;
        
    //     return wordsPerMinute;
    // }
    const copyText = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
    }
    const remSpace = () => {
        var text=name.split(/[ ]+/);
        setName(text.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }
    
    return (
        <div style={{color: props.mode==='light'?'black':'white'}}>            
            <div className="mb-3" >
                <h1>{props.enter}</h1>
                <textarea className="form-control my-3" id="myBox" rows="3" value={name} placeholder='Enter Your Text Here' onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'#282a2d':'white', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button disabled={name.length === 0} type="button" class="btn btn-primary my-3 mx-3" onClick={changeUpCase}>Upper Case</button>
            <button disabled={name.length === 0} type="button" class="btn btn-primary my-3 mx-3" onClick={changeLCase}>Lower Case</button>
            <button disabled={name.length === 0} type="button" class="btn btn-primary my-3 mx-3" onClick={clearCase}>Clear Text</button>
            <button disabled={name.length === 0} type="button" class="btn btn-primary my-3 mx-3" onClick={copyText}>Copy Text</button>
            <button disabled={name.length === 0} type="button" class="btn btn-primary my-3 mx-3" onClick={remSpace}>Remove Extra Spaces</button>
            {/* <div className="container my-4">
                <h2>Typing Speed</h2>
                <p>Your Speed - {typingSpeed(name)} WPM</p>
            </div> */}
            <div className="container my-4">
                <h2>Text Count</h2>
                <p>Words - {(name.split(" ")).filter((e)=>{return e.length!==0}).length} && Characters - {name.length}</p>
                <h2>Preview</h2>
                <p>{name.length>0?name:"Enter Text Above to Preview"}</p>
            </div>
        </div>
    )
}
