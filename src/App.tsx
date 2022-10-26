import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Species from './components/Species';
import People from './components/People';
import Home from './components/Home';


function App() {
  const [people, setPeople] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchSpecies() {
      let res = await fetch('https://swapi.dev/api/species/?format=json')
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchSpecies();
  }, [])

  console.log('People -> ', people);
  console.log('Species -> ', species);

  return (
    <div>
      <Router>
        <div className="App-header">
          <p className='App-title' style={{ paddingTop: '1em' }}>
            Star Wars APi practice
          </p>
          <NavBar />
        </div>

        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<People data={people} />} />
            <Route path='/species' element={<Species data={species} />} />
          </Routes>

        )}
        <div style={{
          display: 'block',
          padding: '20px',
          height: '60px',
          width: '100%'
        }}>
        </div>
        <div className="footer-content">
          by EdwardBro
        </div>
      </Router>
    </div >
  );
}

export default App;
