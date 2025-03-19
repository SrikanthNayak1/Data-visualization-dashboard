import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
