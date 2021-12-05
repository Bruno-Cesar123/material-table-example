import { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

import { Header } from './components/Header';

import './styles/global.css'

// https://jsonplaceholder.typicode.com/todos



function App() {
  const [data, setData] = useState([]);
  const columns = [
    { title: 'id', field: 'id' },
    { title: 'username', field: 'username'},
    { title: 'name', field: 'name' },
    { title: 'email', field: 'email' },
    { title: 'phone', field: 'phone'},
  ]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(resp=>setData(resp))
  }, [])

  return (
    <>
      <Header />
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={columns}
          data={data}
          title="Employee Data"
        />
      </div>
    </>
  );
}

export default App;
