import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-2xl
        p-5
        shadow-sm
        lg:sticky
        lg:top-24
      "
    >
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between gap-3">

        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span
          className="
            bg-pink-50
            text-pink-600
            text-xs
            font-semibold
            px-3
            py-1.5
            rounded-full
            whitespace-nowrap
          "
        >
          {selectedTechnologies.length} Selected
        </span>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-12">

          {/* Empty Icon */}
          <div
            className="
              w-14
              h-14
              mx-auto
              rounded-full
              bg-gray-100
              flex
              items-center
              justify-center
              text-2xl
              text-gray-400
            "
          >
            +
          </div>

          <p className="text-gray-600 font-medium mt-4">
            No technologies added yet
          </p>

          <p className="text-sm text-gray-400 mt-2 leading-5">
            Add technologies from the list to build your stack.
          </p>

        </div>
      ) : (
        <>
          {/* ================= SELECTED TECHNOLOGIES ================= */}
          <div className="mt-5 space-y-3">

            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  hover:border-pink-200
                  transition
                "
              >
                {/* Technology Information */}
                <div className="flex items-center gap-3 min-w-0">

                  {/* Icon */}
                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg
                      bg-gray-50
                      flex
                      items-center
                      justify-center
                      p-1.5
                      shrink-0
                    "
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Name + Category */}
                  <div className="min-w-0">

                    <h3 className="font-semibold text-sm text-gray-900 truncate">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-0.5">
                      {technology.category}
                    </p>

                  </div>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  title={`Remove ${technology.name}`}
                  className="
                    w-8
                    h-8
                    shrink-0
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-red-500
                    hover:bg-red-50
                    transition
                  "
                >
                  ✕
                </button>
              </div>
            ))}

          </div>

          {/* ================= REMOVE ALL ================= */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="
              w-full
              mt-5
              py-2.5
              rounded-xl
              border
              border-red-200
              text-red-500
              font-semibold
              text-sm
              hover:bg-red-50
              hover:border-red-300
              transition
            "
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default YourStack;