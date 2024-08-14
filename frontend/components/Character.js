import React, { useState } from 'react';

function Character({ character }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(prevShowHomeworld => !prevShowHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3>{character.name}</h3>
      <p>Birth Year: {character.birth_year}</p>
      {showHomeworld && (
        <p className="homeworld">
          Homeworld: {character.homeworld.name}
        </p>
      )}
    </div>
  );
}

export default Character
