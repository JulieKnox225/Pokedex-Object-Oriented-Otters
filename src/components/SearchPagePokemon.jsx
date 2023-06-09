import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap"




export const SearchPagePokemon = () => {

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState('')
    // const [filterType, setFilterType] = useState("Type")
    // const [filterCaptured, setFilterCaptured] = useState('Captured')

    // const handleFilterTypeChange = (e) => {
    //     setFilterType(e.target.value)
    // }

    // const handleFilterCaptureChange = (e) => {
    //     setFilterCaptured(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(search.trim() === '') {
            return;
        }
        setSearchResults('')
    }

    return (
    <>
        <div className="container-search-poke">
        <Form onSubmit={handleSubmit}>
            <Col className="search-column">
                <Form.Control
                className='pokeSearch' 
                type="text" 
                placeholder="Who's that Pokemon?"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                style={{backgroundColor: '#2a2e30'}}
                />
            </Col>
            <Row className='select-row'>
                {/* Could be checkboxes instead for multiple selections */}
            <Form.Select  aria-label="Default">
                <option>Type</option>
                <option>Normal</option>
                <option>Fire</option>
                <option>Water</option>
                <option>Grass</option>
                <option>Flying</option>
                <option>Fighting</option>
                <option>Poison</option>
                <option>Electric</option>
                <option>Ground</option>
                <option>Rock</option>
                <option>Psychic</option>
                <option>Ice</option>
                <option>Bug</option>
                <option>Ghost</option>
                <option>Steel</option>
                <option>Dragon</option>
                <option>Dark</option>
                <option>Fairy</option>
            </Form.Select>
            <Form.Select aria-label="Default">
                <option>Captured</option>
                <option>Yes</option>
                <option>No</option>

            </Form.Select>
            </Row>
            <Col className="search-column">
                <Button variant="dark" type="submit">
                    Search
                </Button>
            </Col>
        </Form>
        </div>
        <div className="container-results-poke">
            <h2 className="">Results</h2>
            
        </div>
   </>
  )
}
