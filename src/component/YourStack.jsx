import { toast } from 'react-toastify'

function YourStack({ stack, setStack }) {
  const handleRemove = (id, name) => {
    setStack(stack.filter((item) => item.id !== id))
    toast.info(`${name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm lg:sticky lg:top-24 h-fit">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="text-sm text-red-500 hover:text-red-600 font-medium"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400">
            No technologies selected yet.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {tech.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {tech.category}
                </p>
              </div>

              <button
                onClick={() => handleRemove(tech.id, tech.name)}
                className="text-gray-400 hover:text-red-500 text-lg"
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}

export default YourStack