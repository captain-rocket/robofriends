import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
const App = () => 
{
const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {setRobots(users)});
  }, [])
    
  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
    

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f-subheadline lh-title dib pa3 shadow-5">
          Robot Friends
        </h1>
        <SearchBox searchChange={(e) => setSearchfield(e.target.value)} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
          </ErrorBoundry>
          <br></br>
          <a className="no-underline" href="https://github.com/captain-rocket">
            Websited Designed by Roger Brown
          </a>
          <br></br>
          <a className="no-underline pb4" href="http://www.freepik.com">
            Background Image Designed by Kotkoa &#8260; Freepik
          </a>
        </Scroll>
      </div>
    );
  
}

export default App;