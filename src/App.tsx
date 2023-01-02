import BasePageStory from '@story/base/BasePageStory'
import ThemeContextProvider, { ThemeContext } from '@themes/contexts'
import { ThemeContextProps } from '@themes/contexts/types'
import { useContext } from 'react'
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from 'react-router-dom'

import Global from './styles/global'

const Root = () => {
	return <>
		<div>
			<Link to={"/"}>
				Home
			</Link>
		</div>
		<Outlet />
	</>
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<BasePageStory />} >
			<Route index path='/base-page-story' element={<BasePageStory />} />
		</Route>
	)
)

function App() {
	const { theme } = useContext<ThemeContextProps>(ThemeContext)

	return (
		<ThemeContextProvider>
			<Global theme={theme} />
			<RouterProvider router={router} />
		</ThemeContextProvider>
	)
}

export default App
