import './App.css'
import { AddEntryPage } from './components/AddEntryPage'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <AddEntryPage />
      </div>
    </>
  )
}

export default App
