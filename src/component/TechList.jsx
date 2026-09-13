
import { toast } from 'react-toastify'

function TechList({ techData, stack, setStack }) {
  const handleAddToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id)

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }

    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Pick technologies to build your ideal developer stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techData.map((tech) => {
          const isAdded = stack.some((item) => item.id === tech.id)

          return (
            <div
              key={tech.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-5">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />

                <span className="text-xs font-medium bg-pink-50 text-pink-500 px-3 py-1 rounded-full">
                  {tech.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {tech.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-6">
                {tech.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {tech.category}
                </span>

                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {tech.difficulty}
                </span>

                <span className="text-xs text-gray-600">
                  ⭐ {tech.rating}
                </span>
              </div>

              <button
                onClick={() => handleAddToStack(tech)}
                disabled={isAdded}
                className={`w-full mt-6 py-3 rounded-xl font-medium transition ${
                  isAdded
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechList