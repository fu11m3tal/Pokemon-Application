import React from 'react';

const Modal = ({ handleClose, show, children, pokemon }) => {
  var showHideClassName = show ? "modal display-block" : "modal display-none";
  var { moves, species, sprites, held_items, _id, base_experience, forms, height, id, is_default, location_area_encounters, name, order, types, weight } = pokemon

  for (let [key, value] of Object.entries(pokemon)) {
    console.log(`${key}: ${value}`);
  }

  if(show) {
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
          <img 
            className="box bounce-4" 
            src={pokemon.sprites.front_default}>            
          </img>
          <p>Name: {pokemon.name}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {types[0].name}</p>
          {types.map((type, index) =>
            <p key={index}>Type {index}: {type.type.name}</p>
          )}
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
