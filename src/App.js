import './App.css';
import React from "react";
import Webcam from "react-webcam";

function App() {
  return (
    <div className="App">
      <h2>Here's a demonstration camera view</h2>
      <Webcam />
      <h2>Shortcomings</h2>
      <p>
      This app is only meant to demonstrate that a React app, using the device's camera, can be hosted on Github and the camera accessed succesfully.
      <p>
      <p>
      It's important to remember that to host the 'real' app some other things need to be in place, and these are...
      </p>
      <ul>
          <li>Either the CORS problem with NDP has to be resolved, or somehow, the requests to NDP must be run though a proxy, as they are in dev.</li>
          <li>User needs to be using an IP address which NDP has whitelisted</li>
          <li>The Regula Forensics container needs to be running somewhere which is accessible from the browser running the demo</li>
          <li>The Regula Forensics container needs its license updated.</li>
      </ul>
    </div>
  );
}

export default App;
