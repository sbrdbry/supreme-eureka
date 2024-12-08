import weevilcorpLogo from './assets/44509195.png'
import weevilcorpLogoWide from './assets/logo-wide.png'

import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={weevilcorpLogo} className="logo react" alt="Weevilcorp logo" />
        </a>
      </div>
      <img src={weevilcorpLogoWide} alt="Weevilcorp logo wide" />
      <div className="card" style={{marginTop: "-10px"}}>
        <button>
          Log in
        </button>
        <p>
          Dad Said <code>I Needed</code> To <code>Get A Job</code>
        </p>
      </div>
      <p className="read-the-docs">
        Copyright © 2025 Weevilcorp
      </p>
    </>
  )
}

export default App
