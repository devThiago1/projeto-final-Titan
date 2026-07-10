import { useState } from "react";
import searchIcon from "../assets/search.png";

export function SearchForm({ onSearch, onClear }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") onClear();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <img
          src={searchIcon}
          alt=""
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Pesquise seu Pokémon aqui..."
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none transition-all"
        />
      </div>
    </form>
  );
}
