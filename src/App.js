import React from "react";
import axios from "axios";
import "./App.css";

function App() {
    //const [backendData, setBackendData] = useState([{}]);

    function handleClick(e) {
        e.preventDefaul();
        axios
            .get("/users")
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }

    return (
        <div className="App">
            <button onClick={handleClick}>Get Data</button>
            {/*(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )*/}
        </div>
    );
}

export default App;
