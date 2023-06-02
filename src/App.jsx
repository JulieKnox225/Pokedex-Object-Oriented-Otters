import './App.css'
import { AddEntryPage } from './components/AddEntryPage'
import { Navbar } from './components/Navbar'
import { SearchPage } from './components/SearchPage'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <SearchPage />
      </div>
      <AddEntryPage />
    </>
  )
}

export default App
