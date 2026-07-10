export const TYPE_COLORS = {
  grass: "bg-[#78C850]",
  poison: "bg-[#A040A0]",
  fire: "bg-[#F08030]",
  water: "bg-[#6890F0]",
  electric: "bg-[#F8D030]",
  bug: "bg-[#A8B820]",
  normal: "bg-[#A8A878]",
  flying: "bg-[#A890F0]",
  ground: "bg-[#E0C068]",
  rock: "bg-[#B8A038]",
  fairy: "bg-[#EE99AC]",
  fighting: "bg-[#C03028]",
  psychic: "bg-[#F85888]",
  ghost: "bg-[#705898]",
  ice: "bg-[#98D8D8] text-slate-900",
  dragon: "bg-[#7038F8]",
  dark: "bg-[#705848]",
  steel: "bg-[#B8B8D0]",
};

export const CARD_BORDER_COLORS = {
  grass: "border-[#78C850]",
  poison: "border-[#A040A0]",
  fire: "border-[#F08030]",
  water: "border-[#6890F0]",
  electric: "border-[#F8D030]",
  bug: "border-[#A8B820]",
  normal: "border-[#A8A878]",
  flying: "border-[#A890F0]",
  ground: "border-[#E0C068]",
  rock: "border-[#B8A038]",
  fairy: "border-[#EE99AC]",
  fighting: "border-[#C03028]",
  psychic: "border-[#F85888]",
  ghost: "border-[#705898]",
  ice: "border-[#98D8D8]",
  dragon: "border-[#7038F8]",
  dark: "border-[#705848]",
  steel: "border-[#B8B8D0]",
};

export const CARD_BG_COLORS = {
  grass: "bg-[#A1C5A8]",
  poison: "bg-[#D7A4D7]",
  fire: "bg-[#E8A682]",
  water: "bg-[#97BCED]",
  electric: "bg-[#EFDC9D]",
  bug: "bg-[#CEDEA0]",
  normal: "bg-[#B1BBAC]",
  flying: "bg-[#C4EDEE]",
  ground: "bg-[#F6D0A7]",
  rock: "bg-[#BAB9B3]",
  fairy: "bg-[#FAD9D9]",
  fighting: "bg-[#D68271]",
  psychic: "bg-[#EEAAD9]",
  ghost: "bg-[#9B7AD6]",
  ice: "bg-[#ADEAF7]",
  dragon: "bg-[#BB9FF0]",
  dark: "bg-[#A8A8B0]",
  steel: "bg-[#D0D0E0]",
};

export const CARD_GRADIENTS = {
  grass: "bg-gradient-to-b from-[#A1C5A8] to-[#78C850]",
  poison: "bg-gradient-to-b from-[#D7A4D7] to-[#A040A0]",
  fire: "bg-gradient-to-b from-[#E8A682] to-[#F08030]",
  water: "bg-gradient-to-b from-[#97BCED] to-[#6890F0]",
  electric: "bg-gradient-to-b from-[#EFDC9D] to-[#F8D030]",
  bug: "bg-gradient-to-b from-[#CEDEA0] to-[#A8B820]",
  normal: "bg-gradient-to-b from-[#B1BBAC] to-[#A8A878]",
  flying: "bg-gradient-to-b from-[#C4EDEE] to-[#A890F0]",
  ground: "bg-gradient-to-b from-[#F6D0A7] to-[#E0C068]",
  rock: "bg-gradient-to-b from-[#BAB9B3] to-[#B8A038]",
  fairy: "bg-gradient-to-b from-[#FAD9D9] to-[#EE99AC]",
  fighting: "bg-gradient-to-b from-[#D68271] to-[#C03028]",
  psychic: "bg-gradient-to-b from-[#EEAAD9] to-[#F85888]",
  ghost: "bg-gradient-to-b from-[#9B7AD6] to-[#705898]",
  ice: "bg-gradient-to-b from-[#ADEAF7] to-[#98D8D8]",
  dragon: "bg-gradient-to-b from-[#BB9FF0] to-[#7038F8]",
};

export const CARD_BORDER_GRADIENT = {
  grass: { light: "#A1C5A8", dark: "#78C850" },
  poison: { light: "#D7A4D7", dark: "#A040A0" },
  fire: { light: "#E8A682", dark: "#F08030" },
  water: { light: "#97BCED", dark: "#6890F0" },
  electric: { light: "#EFDC9D", dark: "#F8D030" },
  bug: { light: "#CEDEA0", dark: "#A8B820" },
  normal: { light: "#B1BBAC", dark: "#A8A878" },
  flying: { light: "#C4EDEE", dark: "#A890F0" },
  ground: { light: "#F6D0A7", dark: "#E0C068" },
  rock: { light: "#BAB9B3", dark: "#B8A038" },
  fairy: { light: "#FAD9D9", dark: "#EE99AC" },
  fighting: { light: "#D68271", dark: "#C03028" },
  psychic: { light: "#EEAAD9", dark: "#F85888" },
  ghost: { light: "#9B7AD6", dark: "#705898" },
  ice: { light: "#ADEAF7", dark: "#98D8D8" },
  dragon: { light: "#BB9FF0", dark: "#7038F8" },
  dark: { light: "#A8A8B0", dark: "#705848" },
  steel: { light: "#D0D0E0", dark: "#B8B8D0" },
};

export function getCardBorderGradient(type) {
  return CARD_BORDER_GRADIENT[type] ?? CARD_BORDER_GRADIENT.normal;
}

export function getCardGradient(type) {
  return CARD_GRADIENTS[type] ?? "bg-gradient-to-b from-[#B1BBAC] to-[#A8A878]";
}

export function getTypeColor(type) {
  return TYPE_COLORS[type] ?? "bg-[#A8A878]";
}

export function getCardBorderColor(type) {
  return CARD_BORDER_COLORS[type] ?? "border-[#A8A878]";
}

export function getCardBgColor(type) {
  return CARD_BG_COLORS[type] ?? "bg-[#B1BBAC]";
}
