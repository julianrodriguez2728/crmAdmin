
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'
import Users from './components/Users/Users'
import Searchbar from './components/Searchbar/Searchbar'


function App() {

  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Table/>
      <Users/>
    </div>
  )
}

export default App
