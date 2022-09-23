function Navbar(props){
  return(
     
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <div className="form-check form-switch">
</div>
        
      </ul>
      <div className="form-check form-switch ">
<input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault"/>
<label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlfor="flexSwitchCheckDefault">{props.mode==='dark'?"Enable Light Mode":"Enable Dark Mode"}</label>
</div>
      
    </div>
  </div>
</nav>
  )
}
export default Navbar;
