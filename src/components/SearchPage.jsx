import React from 'react';


export const SearchPage = () => {
  
  const [search, setSearch] = React.useState("")

  const handleChange = (e) => {
    setSearch(e.target.value) 
  }
  
  console.log(search)


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form>
        <div style={{ display: 'flex', margin: '10px' }}>
          <input
            type="text"
            placeholder="Who's that Pokemon?"
            onChange={handleChange}
            name="search"
            value={search}
            style={{ flex: 1, height: '30px' }}
          />
          <button type="submit" style={{ height: '30px' }}>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
