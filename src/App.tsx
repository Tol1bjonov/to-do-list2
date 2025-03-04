
import './App.css'
import Add_name from './components/add_name'
import Greeting from './components/Greeting'

function App() {

  return (
    <>
      <Greeting name='Yusufjon!@#$'/>
      <Greeting name='Jahongir'/>
      <Greeting name='Jonibek'/>
      <Add_name name='Yusufjon'/>
    </>
  )
}

export default App
