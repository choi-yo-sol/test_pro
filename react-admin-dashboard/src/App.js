import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewRagister from './news/newragister/NewRagister'
import MoniToring from './pages/monitoring/MoniToring'
import Orders from './news/order/Orders'
import Client from './information/client/Client'
import Material from './information/material/Material'
import Item from './information/item/Item'
import Process from './information/process/Process'
import Machine from './information/machine/Machine'
import Info from './information/info/Info'
import Login from './components/login/Login'
import Join from './components/join/Join'





function App() {
  return (
    <Router>

      {window.location.href === "http://localhost:3000/" ? '' : <Topbar />}
      <div className="container">
        {window.location.href === "http://localhost:3000/" ? '' : <Sidebar />}


        <Routes>
          <Route path='/info/Client' element={<Client />} />
          <Route path='/info/Material' element={<Material />} />
          <Route path='/info/Item' element={<Item />} />
          <Route path='/info/Process' element={<Process />} />
          <Route path='/info/Machine' element={<Machine />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/monitoring" element={<MoniToring />} />
          <Route path="/NewR" element={<NewRagister />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/info" element={<Info />} />
          <Route path="/join" element={<Join />} />
        </Routes>


      </div>
    </Router >
  )
}


export default App;
//<div className='others'>other pages</div> */




