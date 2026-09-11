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
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition bg-white">

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-14 h-14 object-contain"
        />

        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h2 className="text-xl font-bold mt-5">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 leading-6">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="flex items-center justify-between mt-5">

        {/* Category */}
        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-sm text-gray-500">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        <span className="text-yellow-500">
          ★
        </span>

        <span className="font-semibold">
          {technology.rating}
        </span>

        <span className="text-gray-500 text-sm">
          / 5
        </span>
      </div>

      {/* Add to Stack */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full mt-5 py-2.5 rounded-lg font-semibold transition ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;