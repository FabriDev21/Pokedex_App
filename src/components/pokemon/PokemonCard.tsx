import type { Pokemon } from "../../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div className="font-oswald text-center text-xl p6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-gray-700 transition-shadow duration-200 overflow-hidden">
      <img
        className="mx-auto w-full max-w-[200px]"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <p>{pokemon.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
}
