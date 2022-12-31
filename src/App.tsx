import ThemeContextProvider, { ThemeContext } from '@themes/contexts'
import { ThemeContextProps } from '@themes/contexts/types'
import { useContext } from 'react'

import Global from './styles/global'

function App() {
	const { theme } = useContext<ThemeContextProps>(ThemeContext)

	return (
		<ThemeContextProvider>
			<Global theme={theme} />
			<div>teste</div>
		</ThemeContextProvider>
	)
}

export default App
