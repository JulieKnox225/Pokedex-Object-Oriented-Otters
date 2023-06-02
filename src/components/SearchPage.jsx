import { useState } from 'react';
import { IDCards } from './IDCards';

export const SearchPage = () => {
  
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value) 
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '') {
      return; 
    } //Prevents empty search, ex: "    " or ""
    console.log('Search submitted:', search);
    setSearchResults(['Result 1', 'Result 2', 'Result 3']); 
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
            placeholder="Who's that Pokemon?"
            onChange={handleChange}
            value={search}
            style={{ flex: 1, height: '30px', border: 'none',  width: '300px' }}
          />
          <button type="submit" style={{ height: '32px' }}>
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
          <ul>
            {searchResults.map((result, index) => {
              <li key={index}>{result}</li>
            })}
          </ul>
        </div>
      )}
      
      <IDCards />

    </>
  )
}
