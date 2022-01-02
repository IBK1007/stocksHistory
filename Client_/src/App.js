import './App.css';
import { getTickerData, getAllTickers } from './api/index'
import Dropdown from './components/Dropdown'
import DataTable from './components/DataTable';
import { useEffect, useState } from 'react';
const App = () => {

  const [ticker, setTicker] = useState('')
  const [tickersList, setTickerList] = useState([])
  const [tickerData, setTickerData] = useState({})

  useEffect(() => {
    if (ticker !== '')
      getTickerData(ticker).then(data => setTickerData(data.slice(data.length - 100, data.length - 1)))
  }, [ticker])

  useEffect(() => {
    getAllTickers().then(data => setTickerList(data))
  }, [])

  return (
    <div className="App">
      <Dropdown ticker={ticker} setTicker={setTicker} allTickers={tickersList} />
      {tickerData.length > 0 ?
        <DataTable tickerData={tickerData} />
        : null
      }
    </div>
  );
}

export default App;
