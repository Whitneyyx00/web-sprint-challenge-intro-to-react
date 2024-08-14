import React, { useState } from 'react';

const Character = ({ id, name, birthYear, homeworld }) => { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3>{name}</h3>
      <p>Birth Year: {birthYear}</p>
      {showHomeworld && <p>Homeworld: {homeworld.name}</p>}
    </div>
  );
}

export default Character
