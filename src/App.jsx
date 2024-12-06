import weevilcorpLogo from './assets/44509195.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={weevilcorpLogo} className="logo react" alt="Weevilcorp logo" />
        </a>
      </div>
      <h1>Weevilcorp</h1>
      <div className="card">
        <button>
          Log in
        </button>
        <p>
          Dad Said <code>I Needed</code> To Get A Job
        </p>
      </div>
      <p className="read-the-docs">
        Copyright © 2025 Weevilcorp
      </p>
    </>
  )
}

export default App
