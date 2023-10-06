import React from 'react';


interface PokeCardProps {
  pokemonList: {name: string}[];
}


function PokeCard({ pokemonList }: PokeCardProps) {

  const displayPokemon = () => {
    return pokemonList.map((pokemon, index) => {
      const pokemonIndex = index + 1;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

      return (
        <div key={index}>
          <p>{pokemon.name.toUpperCase()}</p>
          <img src={imageUrl} alt={`Pokemon ${pokemon.name}`} />
        </div>
      );
    });
  };

  return (
    <div className="object-none object-left bg-color-green-300 w-24 h-24">
      {displayPokemon()}
    </div>
  );
}

export default PokeCard;
