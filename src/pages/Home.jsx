import { useEffect, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { PokemonGrid } from "../components/pokemonGrid";
import { usePokeList } from "../hooks/usePokeList";
import { usePokeSearch } from "../hooks/usePokeSearch";
import { useFavorites } from "../hooks/useFavorites";

export function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const {
    pokemons,
    loading: listLoading,
    error: listError,
    hasMore,
    fetchMore,
  } = usePokeList();

  const {
    result,
    loading: searchLoading,
    error: searchError,
    search,
    clearSearch,
  } = usePokeSearch();

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetchMore();
  }, []);

  const isSearching = result !== null || searchError !== null;

  const displayList = result ? [result] : pokemons;

  const listToShow = activeTab === "favorites" ? favorites : displayList;

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <Header onSearch={search} onClear={clearSearch} />

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
          }`}
        >
          Todos os Pokémons
        </button>

        <button
          onClick={() => setActiveTab("favorites")}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
            activeTab === "favorites"
              ? "bg-amber-500 text-white shadow-md"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
          }`}
        >
          Meus Favoritos
          {favorites.length > 0 && (
            <span
              className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === "favorites"
                  ? "bg-white/30 text-white"
                  : "bg-slate-300 text-slate-700"
              }`}
            >
              {favorites.length}
            </span>
          )}
        </button>
      </div>

      <div className="mt-8 min-h-[400px]">
        {searchLoading ? (
          <div className="flex h-full w-full items-center justify-center pt-15">
            <Loader />
          </div>
        ) : searchError ? (
          <ErrorMessage type={searchError} />
        ) : listError && activeTab === "all" ? (
          <ErrorMessage type="request-failed" />
        ) : (
          <PokemonGrid
            key={activeTab}
            pokemons={listToShow}
            onLoadMore={fetchMore}
            hasMore={activeTab === "favorites" || isSearching ? false : hasMore}
            loading={listLoading}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        )}
      </div>
    </div>
  );
}
