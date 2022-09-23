import React, { useState } from "react";
function TextForm(props) {
    let [text, setText] = useState("")
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", 'Success')
    }
    function handleOnChange(e) {
        let target = e.target.value;
        target = target.charAt(0).toUpperCase() + target.slice(1);
        setText(target)
    }
    function handleLowClick(e) {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", 'Success')
    }
    function handleCopy() {
        let text1 = document.getElementById('myBox');
        text1.select();
        navigator.clipboard.writeText(text1.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to clipboard!", 'Success')
    }
    function removeSpace() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", 'Success')
    }
    function clearText() {
        setText(" ");
        props.showAlert("Text cleared!", 'Success')
    }
    return (
        <>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>



            </div>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={removeSpace}>Remove Extra space</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={clearText}>Clear Text</button>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{(text.split(" ").filter((element) => { return element.length !== 0 }).length) * 0.008} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>

    )
}
export default TextForm;