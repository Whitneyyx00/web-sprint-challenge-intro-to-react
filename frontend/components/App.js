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
          const homeworld = planets.find(planet => planet.id ===character.homeWorldId);
          return {
            ...character,
            homeworld: homeworld ? homeworld.name : null
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
    <div>
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
