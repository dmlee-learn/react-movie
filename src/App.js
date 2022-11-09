import {useState, useEffect} from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(
    () => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((data) => {
          setCoins(data);
          setLoding(false);
        })
        .catch((error) => {
          setLoding(true);
          alert(error);
          console.error('실패:', error);
        });;

    }
    , []);

  function setViewlist(name) {
    switch(name) {
      case "Bitcoin" :
      case "Ethereum" :
      case "Dogecoin" :
      case "XRP" :
      case "Litecoin" :
        return true;
      default:
        return false;
    }
  } 

  return (
    <div>
      <h1>
        Coin List
      </h1>
      <div>
        {loding ? <strong>Loding...</strong> : null}
        <ul>
        {coins.map((coin) => setViewlist(coin.name) ? <li key={coin.id}><div width="70%"><div style={{width: "30%", float:"left"}}>{coin.name}({coin.symbol})</div> <div style={{width: "30%", float:"left", textAlign: 'right'}}> ${coin.quotes.USD.price.toFixed(3)} USD</div></div></li> : null)}
        </ul>
      </div>

    </div>
  );
}

export default App;
