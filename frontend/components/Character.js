import React, { useState } from 'react';

const Character = ({ character }) => { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showPlanet, setShowPlanet] = useState(false);

  const toggleHomeworld = () => {
    setShowPlanet(prev => !prev);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3>
      <p>Born: {character.birth_year}</p>
      {showPlanet && character.homeworld && (
        <p className="character-planet">{character.homeworld.name}</p>
      )}
    </div>
  );
};

export default Character
