import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Files
import './App.scss'

// Components
import MainComponent from './components/MainComponent'
import LoadingPage from './Pages/LoadingPage/LoadingPage'

function App() {
	// Loader
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 4100)
	}, [])

	return (
		<div className='App'>
			{isLoading && (
				<LoadingPage title='the minimum is my religion' />
			)}

			<Routes>
				<Route path='/' element={<MainComponent />} />
			</Routes>
		</div>
	)
}

export default App
