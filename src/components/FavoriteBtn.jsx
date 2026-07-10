import { Star } from "lucide-react";

export function FavoriteBtn({ isFavorite, onClick }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="z-40 transition-transform duration-200 hover:scale-125 active:scale-95"
      aria-label={
        isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
    >
      <Star
        size={18}
        className={
          isFavorite
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-slate-400"
        }
      />
    </button>
  );
}
