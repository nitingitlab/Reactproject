import React,{useState} from 'react';
function TextForm(props){
    const[text,setText]=useState("");
   
    
    function handleUpClick(){
setText(text.toUpperCase())
props.showAlert("Converted to Uppercase",'Success')
    }
    function handleOnChange(e){
        setText(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1));
    }
    
    function handleLoClick(){
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase",'Success');
     
    }
    function clearClick(){
        setText("")
        props.showAlert("Text is clear",'Success')
    }
  function copy(){
  
   navigator.clipboard.writeText(text);
   props.showAlert("Text copied","Success")
  }
    
    return(<>
 
 <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
<div className="my-3" >
    <h1>{props.heading} </h1>
  <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}value={text} onChange={handleOnChange} ></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lower case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clearClick}>clear</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copy}>copy</button>
 


</div>

<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length===0?'Enter your text to preview':text}</p>
</div>
</>)
}
export default TextForm;