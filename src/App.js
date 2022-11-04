import {useState, useEffect} from "react";

function App() {
  const [counter, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  console.log("run");
  const onClick = () => setCount((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(
    () => {console.log('useEffect')}
    , []
  );
  useEffect(
    
      () => {
        if("" !== keyword && keyword.length > 2) {
          console.log('keyword :',  keyword)
        }
      }
    , [keyword]
  );
  return (
    <div className="App">
      <input onChange={onChange} type="text" />
      <h1>{counter}</h1>
      <button onClick={onClick}>onClick</button>
    </div>
  );
}

export default App;
