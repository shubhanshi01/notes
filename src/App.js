import React from "react";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FunNote</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="main-card">
<div className="card" style={{"width":"18rem","backgroundColor":"yellow"}}>
  <div className="card-body">
    <h5 className="card-title">KEEPER</h5>
    <h6 className="card-subtitle mb-2 text-muted">Add a note </h6>
    <form className="note">
      <input className="text" type="text" ></input>
    </form>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
</div>
</div>
  );
}

export default App;
