import { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

import { Header } from './components/Header';
import { ChartLine } from './components/ChartLine';

import './styles/global.css'

// https://jsonplaceholder.typicode.com/todos
// https://api.coingecko.com/api/v3/exchange_rates


export default function App() {
  const [data, setData] = useState([]);
  const columns = [
    { title: 'name', field: 'name' },
    { title: 'unit', field: 'unit'},
    { title: 'value', field: 'value' },
    { title: 'type', field: 'type' },
  ]

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then(resp=>resp.json())
    .then(resp => {
      const parsed = Object.entries(resp.rates);
      const data = parsed.map(p => p[1]).map(p => ({ name: p.name, unit: p.unit, value: p.value, type: p.type }));
      setData(data)
    })
  }, [])

  return (
    <>
      <Header />
      <div style={{ maxWidth: '100%', marginBottom: '80px' }}>
        <MaterialTable
          columns={columns}
          data={data}
          title="Employee Data"
        />
      </div>

      <ChartLine />
    </>
  );
}
