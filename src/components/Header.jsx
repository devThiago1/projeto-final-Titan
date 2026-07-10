import titleImg from "../assets/title.png";
import personImg from "../assets/imgHeader2-person.png";
import { SearchForm } from "./SearchForm";

export function Header({ onSearch, onClear }) {
  return (
    <div className="relative bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm rounded-[2rem] px-5 py-8 md:px-8 md:py-8 min-h-[auto] md:min-h-[260px] flex flex-col justify-between items-center md:items-start">
      <div className="relative z-10 w-full md:max-w-[55%] flex flex-col items-center md:items-start mb-6 md:mb-8 text-center md:text-left">
        <img
          src={titleImg}
          alt="Pokédex"
          className="h-14 sm:h-16 md:h-24 mb-3 md:mb-4 object-contain"
        />
        <p className="bg-gradient-to-r from-yellow-600 via-gray-500 to-blue-600 bg-clip-text text-transparent font-bold text-sm sm:text-base md:text-xl ml-5">
          Descubra e explore seus Pokémons favoritos!
        </p>
      </div>

      <img
        src={personImg}
        alt="Personagens Pokémon"
        className="hidden md:block absolute right-4 lg:right-15 top-2 h-[200px] lg:h-[240px] object-contain pointer-events-none select-none z-10"
      />

      <div className="relative z-20 w-full mt-auto md:pt-10">
        <SearchForm onSearch={onSearch} onClear={onClear} />
      </div>
    </div>
  );
}
