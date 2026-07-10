import { getTypeColor } from "../utils/typeColors";

export function TypeBadge({ type }) {
  return (
    <span
      className={`${getTypeColor(type)} text-white text-xs font-semibold px-2 py-0.5 rounded-full capitalize`}
    >
      {type}
    </span>
  );
}
