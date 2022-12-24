import React from 'react'

// Components
import LoadingPage from './Pages/LoadingPage/LoadingPage'
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'

function App() {
	// Loader
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3600)
	}, [])

	return (
		<>
			{isLoading ? (
				<LoadingPage title='the minimum is my religion' />
			) : (
				<div className='container'>
					<Header />
					<Home />
				</div>
			)}
		</>
	)
}

export default App
