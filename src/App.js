import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue(counter + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  
  useEffect(() => {
    console.log("i run all the time");
  }, []);
  
  useEffect(() => {
    console.log(" Counter ..." + counter);
  }, [counter]);

  useEffect(() => {
    console.log(" Keyword ..." + keyword);
  }, [keyword]);

useEffect(() => {
    console.log(" complex ...");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here ..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>  
  );
}

export default App;