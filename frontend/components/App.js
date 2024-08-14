import React, { useEffect, useState } from 'react';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          fetch(urlPeople),
          fetch(urlPlanets)
        ]);

        const people = await peopleResponse.json();
        const planets = await planetsResponse.json();

        const combinedData = people.map(character => {
          const homeworld = planets.find(planet => planet.url === character.homeworld);
          return {
            ...character,
            homeworld
          };
        });

        setCharacters(combinedData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="character-card">
      {characters.length > 0 ? (
        characters.map(character => (
          <Character key={character.url} character={character} />
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
