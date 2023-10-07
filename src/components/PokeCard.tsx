import React from "react";

interface PokeCardProps {
  pokemonList: { name: string }[];
}

function PokeCard({ pokemonList }: PokeCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {pokemonList.map((pokemon, index) => {
        const pokemonIndex = index + 1;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

        return (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="font-bold text-xl mb-2">
              {pokemon.name.toUpperCase()}
            </div>
            <img
              src={imageUrl}
              alt={`Pokemon ${pokemon.name}`}
              className="w-full"
            />
            <div className="px-6 py-4"></div>
          </div>
        );
      })}
    </div>
  );
}

export default PokeCard;
