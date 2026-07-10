import { Link } from "react-router-dom";

export function BackBtn() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-700 font-semibold text-sm transition-all duration-200 hover:opacity-80 active:scale-95"
      style={{
        background: "linear-gradient(to right, #fef9c3, #dbeafe)",
      }}
    >
      ← Voltar para Galeria
    </Link>
  );
}
