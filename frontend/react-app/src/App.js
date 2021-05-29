import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import FileUpload from "/components/file-upload/file-upload.component";
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  useEffect(() => {
    axios.get('http://localhost:5000/flask/test').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
      console.log("Error: Flask server not reached.");
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>Leverage powerful AI</p>
        <p>Make recycling easy</p>
        <div>{getMessage.status === 200 ?
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}
        </div>
      </header>

      <div className="bodyText">
        <p>
          Recycling is important. Go do it!
        </p>

        <div>
          <form onSubmit={handleSubmit}>
            <FileUpload
              accept=".jpg,.png,.jpeg"
              label="Profile Image(s)"
              multiple
              updateFilesCb={updateUploadedFiles}
            />
            <button type="submit">Create New User</button>
          </form>
        </div>

        <div className="Authors">
          <p>
            This was created by Justin Callahan, Maxwell Chen, Evan Leung, and Emily Wu.
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;