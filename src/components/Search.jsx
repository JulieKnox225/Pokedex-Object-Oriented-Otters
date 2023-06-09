import { useState } from 'react';
import { IDCards } from './IDCards';
import FakeData from '../FakeData'


export const Search = () => {
  
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    //Prevents empty search, ex: "    " or ""
    if (search.trim() === '') {
      return; 
    } 

  const filteredResults = FakeData.filter((info) => {
    const searchValue = search.toLowerCase();
    const fullName = `${info.firstName} ${info.lastName}`.toLowerCase()
    
    return (
      fullName.includes(searchValue) ||
      info.email.toLowerCase().includes(searchValue) ||
      info.degree.toLowerCase().includes(searchValue)
    );
  });

  setSearchResults(filteredResults);  
};

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div 
          style={{ 
            display: 'flex', 
            margin: '15px', 
            alignItems: 'center', 
            maxWidth: '500px', 
          }}>
          <input
            type="text"
            placeholder="Who's that Alumnus?"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className='SP-searchBar'
            style={{ flex: 1, height: '48px', border: 'none',  width: '300px' }}
          />
          <button className='SP-button' type="submit">
            Search
          </button>
          
        </div>
      </form>
    </div>
        <hr style={{
            color: "white",
            backgroundColor: "white",
            height: 0.1,
        }}
          />
      {searchResults.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <p>These are the results for {search}:</p>
          <div className='search-results'>
          {searchResults.map((info) => (
            <IDCards
            key={info.id}
                {...info}
            />
          ))}
          </div>
        </div>
      )}
    </>
  )
}