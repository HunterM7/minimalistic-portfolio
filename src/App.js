import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import LoadingPage from './Pages/LoadingPage/LoadingPage'

import MainComponent from './components/MainComponent'

function App() {
	const [isLoading, setIsLoading] = React.useState(true)

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
