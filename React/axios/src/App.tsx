import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    
    axios.get(url).then((response) => {
      setCryptos(response.data);
    });
  }, []);

  // empty dependency array []. only executes one time, on the intial page load

  return (
    <div className="App">
      {cryptos
        ? cryptos.map((crypto: any) => (
            <div key={crypto.id}>
              <p>
                {crypto.id}. {crypto.title}
              </p>
              {/* <p>{crypto}</p> */}
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
