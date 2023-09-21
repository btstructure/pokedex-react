function PokeCard({ pokemonList }) {
  const displayPokemon = () => {
    return pokemonList.map((pokemon, index) => {
      return (
        <div key={index}>
          <p>{pokemon.name}</p>
        </div>
      );
    });
  };

  return <>{displayPokemon()}</>;
}

export default PokeCard;
