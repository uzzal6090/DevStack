import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div
      className="
        group
        bg-white
        border border-gray-200
        rounded-2xl
        p-5
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
        h-full
      "
    >
      {/* ================= TOP ================= */}

      <div className="flex items-start justify-between gap-4">

        {/* Technology Icon */}

        <div
          className="
            w-14
            h-14
            rounded-xl
            bg-gray-50
            border border-gray-100
            flex
            items-center
            justify-center
            p-2
            shrink-0
          "
        >
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Badge */}

        <span
          className="
            text-xs
            font-semibold
            text-pink-600
            bg-pink-50
            border border-pink-100
            px-3
            py-1.5
            rounded-full
            whitespace-nowrap
          "
        >
          {technology.badge}
        </span>
      </div>

      {/* ================= TECHNOLOGY NAME ================= */}

      <h2
        className="
          text-xl
          font-bold
          text-gray-900
          mt-5
          group-hover:text-pink-600
          transition-colors
        "
      >
        {technology.name}
      </h2>

      {/* ================= DESCRIPTION ================= */}

      <p
        className="
          text-sm
          text-gray-500
          mt-2
          leading-6
          min-h-[72px]
        "
      >
        {technology.description}
      </p>

      {/* ================= CATEGORY + DIFFICULTY ================= */}

      <div className="flex items-center justify-between gap-3 mt-5">

        <span
          className="
            text-xs
            font-semibold
            text-gray-700
            bg-gray-100
            px-3
            py-1.5
            rounded-full
            whitespace-nowrap
          "
        >
          {technology.category}
        </span>

        <span className="text-xs text-gray-500 text-right">
          {technology.difficulty}
        </span>

      </div>

      {/* ================= RATING ================= */}

      <div className="flex items-center gap-1.5 mt-4">

        <span className="text-yellow-500 text-base">
          ★
        </span>

        <span className="text-sm font-semibold text-gray-800">
          {technology.rating}
        </span>

        <span className="text-xs text-gray-400">
          / 5
        </span>

      </div>

      {/* ================= ADD BUTTON ================= */}

      <button
        type="button"
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`
          w-full
          mt-5
          py-2.5
          rounded-xl
          text-sm
          font-semibold
          transition-all
          duration-200
          ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]"
          }
        `}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;