import React, { useEffect, useState } from 'react';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          fetch(urlPeople),
          fetch(urlPlanets)
        ]);

        const people = await peopleResponse.json();
        const planets = await planetsResponse.json();

        setCharacters(peopleData);
        setPlanets(planetsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {characters.map(character => (
        <Character
        key={character.id}
        character={character}
        planet={planets.find(p => p.id === character.homeworldId)}
        />
      ))}
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
