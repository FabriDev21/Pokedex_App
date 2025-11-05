import type { Pokemon } from "../../types/pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemon: Pokemon[];
}

export default function PokemonGrid({ pokemon }: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-7xl mx-auto gap-5 ">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}
