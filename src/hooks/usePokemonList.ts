import { useEffect, useState } from "react";
import type { Pokemon, PokemonAPIResult } from "../types/pokemon";

export function usePokemonList(limit: number = 151) {
  const [loading, setLoading] = useState(true); // 👈 cada useState separado
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      const data = await response.json();

      const detailedData: Pokemon[] = await Promise.all(
        data.results.map(async (poke: PokemonAPIResult) => {
          const res = await fetch(poke.url);
          const fullData = await res.json();
          return fullData as Pokemon;
        })
      );

      setPokemon(detailedData);
    } catch (error) {
      console.error("error al obtener los pokemon: ", error);
      setError("Error al obtener los Pokémon");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [limit]);

  return { pokemon, loading, error };
}
