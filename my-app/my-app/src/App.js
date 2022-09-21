import React,{useState} from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from './Alert'
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  function toggleMode(){
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode is enabled','Success')
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light mode is enabled','Success')
    }
  }
  function showAlert(message,type){
setAlert({
  type:type,
  msg:message
},
setTimeout(()=>{
  setAlert(null)
},2000))
  }
  return (
    <>
    
<Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
<div className="container my-3" >
  <Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode}/>

</div>



</>
  );
}

export default App;
