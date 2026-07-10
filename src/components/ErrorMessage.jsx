const MESSAGES = {
  "not-found": "Pokémon não encontrado. Verifique o nome ou ID digitado.",
  "request-failed":
    "Não foi possível buscar os dados agora. Tente novamente mais tarde.",
};

export function ErrorMessage({ type = "request-failed" }) {
  const message = MESSAGES[type] ?? MESSAGES["request-failed"];

  return (
    <div className="flex items-center justify-center mt-10 px-4">
      <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-2xl shadow-sm max-w-md w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 flex-shrink-0 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>

        <p className="text-sm md:text-base font-medium leading-tight">
          {message}
        </p>
      </div>
    </div>
  );
}
