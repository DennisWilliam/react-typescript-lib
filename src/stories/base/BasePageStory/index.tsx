import BasePage from "@base/BasePage"
import Header from "@modular/Header"
import { ThemeContext } from "@themes/contexts"
import { ThemeContextProps } from "@themes/contexts/types"
import { useContext } from "react"


const BasePageStory = () => {
	const { toggleTheme, theme } = useContext<ThemeContextProps>(ThemeContext);
	return (
		<>
			<BasePage id="base-page" alignChildrenX="flex-end" backgroundColor="disable_text" >
				<BasePage id="base-page-exemple" width="85%" height="95%" border={true} borderColor="disable" backgroundColor="background" alignChildrenY="flex-start">
					<Header id="header-example" >
						<div>Children</div>
					</Header>
				</BasePage>
			</BasePage>
		</>
	)
}

export default BasePageStory
