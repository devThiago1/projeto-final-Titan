export function SearchBar({
  value,
  onChange,
  placeholder = "Pesquise seu Pokémon aqui...",
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  );
}
