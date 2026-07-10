import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from "./pokemonCard";
import { EmptyState } from "./EmptyState";
import { Loader } from "./Loader";

export function PokemonGrid({
  pokemons,
  onLoadMore,
  hasMore,
  onToggleFavorite,
  isFavorite,
}) {
  if (pokemons.length === 0) {
    return <EmptyState message="Nenhum Pokémon encontrado." />;
  }

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={onLoadMore}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center py-6">
          <Loader />
        </div>
      }
      endMessage={
        <p className="text-center text-slate-400 text-sm py-6">
          Todos os Pokémons foram carregados!
        </p>
      }
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite(pokemon.id)}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}
