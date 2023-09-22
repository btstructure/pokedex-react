function PokeCard({ pokemonList }) {
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

  return <div>{displayPokemon()}</div>;
}

export default PokeCard;
