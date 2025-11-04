import { createFileRoute } from "@tanstack/react-router";
import { usePokemonList } from "../hooks/usePokemonList";
import PokemonGrid from "../components/PokemonGrid";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
    const {pokemon}=usePokemonList()
  return (
    <div>
      <PokemonGrid pokemon={pokemon}/>
    </div>
  );
}
