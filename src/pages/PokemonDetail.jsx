import { useParams } from "react-router-dom";
import { usePoke } from "../hooks/usePoke";
import { BackBtn } from "../components/backBtn";
import { TypeBadge } from "../components/typeBadge";
import { StatBar } from "../components/statBar";
import { STAT_COLORS, STAT_LABELS } from "../utils/statLabel";
import { getCardBorderGradient } from "../utils/typeColors";

export function PokemonDetail() {
  const { name } = useParams();
  const { pokemon, loading, error } = usePoke(name);

  if (loading)
    return <p className="p-6 text-center text-slate-400">Carregando...</p>;
  if (error)
    return (
      <p className="p-6 text-center text-red-500">Pokémon não encontrado.</p>
    );

  const total = pokemon.stats.reduce((sum, s) => sum + s.value, 0);
  const primaryType = pokemon.types[0];
  const colors =
    getCardBorderGradient(primaryType) || getCardBorderGradient.normal;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-start mb-6">
        <BackBtn />
      </div>
      <div
        className="mt-6 rounded-[32px] flex flex-col overflow-hidden bg-white shadow-xl"
        style={{
          border: "4px solid transparent",
          background: `
            linear-gradient(white, white) padding-box,
            linear-gradient(to bottom, ${colors.light}, ${colors.dark}) border-box
          `,
        }}
      >
        <div
          className="relative px-8 pt-8 pb-4 md:px-12 md:pt-10"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.dark} 0%, ${colors.light} 60%, white 100%)`,
          }}
        >
          <div className="relative z-20 flex justify-between items-start w-full">
            <div>
              <span className="text-lg md:text-xl font-bold text-slate-700/60">
                #{String(pokemon.id).padStart(3, "0")}
              </span>
              <h1 className="text-3xl md:text-[40px] font-extrabold capitalize text-slate-900 mt-1">
                {pokemon.name}
              </h1>
            </div>
            <div className="flex gap-2">
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>

          <div className="relative flex justify-center mt-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full blur-[40px] bg-white/30 z-10 pointer-events-none"></div>
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              className="relative z-30 w-72 h-72 md:w-80 md:h-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-white px-8 py-10 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-4">
                Informações Físicas
              </h3>
              <div className="flex flex-col gap-3">
                <div className="bg-slate-100/80 rounded-xl p-3.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Altura</span>
                  <span className="font-bold text-slate-800">
                    {pokemon.height} m
                  </span>
                </div>
                <div className="bg-slate-100/80 rounded-xl p-3.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Peso</span>
                  <span className="font-bold text-slate-800">
                    {pokemon.weight} kg
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-4">
                Habilidades
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {pokemon.abilities.map((ability) => (
                  <span
                    key={ability}
                    className="border border-slate-300/80 bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm capitalize font-medium"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-slate-800 mb-6">
              Estatísticas de Batalha
            </h3>
            <div className="flex flex-col gap-4">
              {pokemon.stats.map((stat) => (
                <StatBar
                  key={stat.name}
                  label={STAT_LABELS[stat.name] ?? stat.name}
                  value={stat.value}
                  color={STAT_COLORS[stat.name]}
                />
              ))}
            </div>

            <div className="bg-slate-200/60 rounded-xl p-4 flex justify-between items-center mt-8">
              <span className="font-bold text-slate-600">Total</span>
              <span className="font-extrabold text-xl text-slate-900">
                {total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
