import { useState } from 'react';
import { IDCards } from './IDCards';
import FakeData from '../FakeData'


export const SearchPage = () => {
  
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState('')

  // const idCards = fakeData.map(info => {
  //   return (
  //     <IDCards
  //       key={info.id}
  //       firstName={info.firstName}
  //       lastName={info.lastName}
  //       email={info.email}
  //       degree={info.degree}
  //       additionalInfo={info.additionalInfo}
  //       experience={info.experience}
  //       achievements={info.achievements}
  //       skills={info.skills}
  //     />
  //   )
  // })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '') {
      return; 
    } //Prevents empty search, ex: "    " or ""

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
            placeholder="Who's that Pokemon?"
            onChange={(e) => setSearch(e.target.value)}
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