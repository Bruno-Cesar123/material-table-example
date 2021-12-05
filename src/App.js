import { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

import { Header } from './components/Header';

import './styles/global.css'

// https://jsonplaceholder.typicode.com/todos

const empList = [

  {id: 1, name: 'Bruno', email: 'brunocesar@gmail.com', status: 0, role: 1},
  {id: 2, name: 'Bruno', email: 'brunocesar@gmail.com', status: 1, role: 0},
  {id: 3, name: 'Bruno', email: 'brunocesar@gmail.com', status: 0, role: 3},
  {id: 4, name: 'Bruno', email: 'brunocesar@gmail.com', status: 1, role: 2},
]

const empStatus=[
  {id: 0, title: 'deactive'},
  {id: 1, title: 'active'},
]

function App() {
  const [data, setData] = useState(empList);
  const [status, setStatus] = useState({})
  const columns = [
    { title: 'id', field: 'id' },
    { title: 'name', field: 'name' },
    { title: 'email', field: 'email' },
    { title: 'Status', field: 'status', lookup:status },
    { title: 'role', field: 'role', lookup:{0:'Associte', 1: 'Senior Associate', 2: 'Architect', 3: 'Manager'} },
  ]

  useEffect(() => {
    const status = {}
    empStatus.map(row => status[row.id]=row.title)
    setStatus(status)
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
