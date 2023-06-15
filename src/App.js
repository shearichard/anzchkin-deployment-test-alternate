import './App.css';
import React from "react";
import Webcam from "react-webcam";

function App() {

  return (
    <div className="App">
      <h2>Here's a demonstration camera view</h2>
      <Webcam />
      <h2>Shortcomings</h2>
      <span className="txt">
          <p>
          This app is only meant to demonstrate that a React app, using the device's camera, can be hosted on Github and the camera accessed succesfully.
          </p>
          <p>
          It's important to remember that to host the 'real' app some other things need to be in place, and these are...
          </p>
          <div className="sclist">
            <ul>
                <li>Either the CORS problem with MEQ has to be resolved, or somehow, the requests to MEQ must be run though a proxy, as they are in dev.</li>
                <li>User needs to be using an IP address which MEQ has whitelisted</li>
                <li>The RF container needs to be running somewhere which is accessible from the browser running the demo</li>
                <li>The RF container needs its license updated.</li>
            </ul>
          </div> 
      </span> 
    </div>
  );
}

export default App;
