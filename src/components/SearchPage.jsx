import { useState } from 'react';
import FakeData from '../FakeData'
import { IDCards } from './BVT.ID';




export const SearchPage = () => {
  
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
    <div className='surrounding-box'>
      <div className='container-search'>
      <form onSubmit={handleSubmit}>
          <div className='sp-search'>
          <input
            type="text"
            placeholder="Who's that Alumnus?"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className='SP-searchBar'
          />
          <button className='SP-button' type="submit">
            Search
          </button>
          </div>
      </form>
      </div>
    </div>     
    <div className='BVT-results'>
      <h2 className="sp-results-header">Results</h2>
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

    </div>
    </>
  )
}