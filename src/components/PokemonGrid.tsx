import type { Pokemon } from "../types/pokemon";
import PokemonCard from "./PokemonCard"

interface Props {
  pokemon: Pokemon[];
}

export default function PokemonGrid({ pokemon }: Props) {
  return (
    <div>
        {pokemon.map((p)=>(
          <PokemonCard key={p.id} pokemon={p}/>
        ))}

    </div>
  );
}