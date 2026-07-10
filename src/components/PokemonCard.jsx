import { Link } from "react-router-dom";
import { TypeBadge } from "./typeBadge";
import { FavoriteBtn } from "./FavoriteBtn";
import { getCardBgColor, getCardBorderGradient } from "../utils/typeColors";

export function PokemonCard({ pokemon, onToggleFavorite, isFavorite }) {
  const primaryType = pokemon.types[0];
  const glowColor = getCardBgColor(primaryType);
  const colors = getCardBorderGradient(primaryType);

  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className="relative rounded-[20px] md:rounded-[24px] p-3 md:p-4 flex flex-col w-full h-[220px] sm:h-[260px] md:h-[300px] hover:shadow-xl transition-all duration-300 group overflow-hidden"
      style={{
        border: "3px solid transparent",
        background: `
          linear-gradient(white, white) padding-box,
          linear-gradient(to bottom, ${colors.light}, ${colors.dark}) border-box
        `,
      }}
    >
      {/* Topo: número | badges | estrela */}
      <div className="flex justify-between items-center w-full relative z-20">
        <span className="text-slate-500 font-bold text-xs md:text-sm">
          #{String(pokemon.id).padStart(3, "0")}
        </span>

        <div className="flex items-center gap-1 md:gap-1.5">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
          <FavoriteBtn
            isFavorite={isFavorite}
            onClick={() => onToggleFavorite(pokemon)}
          />
        </div>
      </div>

      {/* Sprite com glow */}
      <div className="relative flex-1 flex justify-center items-center w-full mt-1 mb-1 md:mt-2 md:mb-2">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-44 md:h-44 rounded-full blur-[25px] md:blur-[35px] opacity-80 md:opacity-100 ${glowColor} z-10 pointer-events-none`}
        />
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain relative z-30 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Nome */}
      <p className="capitalize font-bold text-base sm:text-lg md:text-[22px] text-slate-800 text-center w-full relative z-20 truncate">
        {pokemon.name}
      </p>
    </Link>
  );
}
