import "./App.css";

function App() {
  return (
    <>
      <h1>Hey!</h1>
      <div className="style-me">
        <h3>AizStein</h3>
        <div className="div_inp">
          <input type="email" placeholder="Email" id="email" />
        </div>
        <div className="div_inp">
          <input type="password" placeholder="password" id="password" />
        </div>
        <button>Sign in</button>
      </div>
    </>
  );
}

export default App;
