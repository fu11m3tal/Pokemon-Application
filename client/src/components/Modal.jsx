import React from 'react';

const Modal = ({ handleClose, show, children, pokemon }) => {
  var showHideClassName = show ? "modal display-block" : "modal display-none";
  var { moves, species, sprites, held_items, _id, base_experience, forms, height, id, is_default, location_area_encounters, name, order, types, weight } = pokemon

  if(show) {
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
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
