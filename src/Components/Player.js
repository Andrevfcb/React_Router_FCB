import React from 'react';

const Player = (props) => {
  const playerImage = props.list.map(player => 
    {if (player.name === props.id) return (
      <div className="details">
        <h1>{player.number === "-" ? `${player.name}` : `${player.number}. ${player.name}`}</h1>
        <img style={{maxWidth: 400, maxHeight: 400}} src={props.list[player.id].image} alt="player" />
        <p>{player.description}</p>
      </div>
  )})
  return (
      <>
      {playerImage}
      </>
  );
}

export default Player;