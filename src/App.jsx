import Footer from './component/Footer'
import { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import TechList from './component/TechList'
import YourStack from './component/YourStack'

function App() {
  const [stack, setStack] = useState([])
  const [techData, setTechData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(new URL('./data/tech.json', import.meta.url))
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load technology data')
        }

        return response.json()
      })
      .then((data) => {
        setTechData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TechList
                techData={techData}
                stack={stack}
                setStack={setStack}
              />
            </div>

            <YourStack
              stack={stack}
              setStack={setStack}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App