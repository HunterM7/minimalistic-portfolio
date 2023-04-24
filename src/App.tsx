import React from 'react'

// Pages
import { HomePage, LoadingPage } from 'pages'

// Components
import { Header } from 'components'

function App() {
  // Loader
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3600)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingPage title="the minimum is my religion" />
      ) : (
        <div className="container">
          <Header />
          <HomePage />
        </div>
      )}
    </>
  )
}

export default App
