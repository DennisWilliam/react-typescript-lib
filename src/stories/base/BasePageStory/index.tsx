import BaseBox from "@base/BaseBox"
import BaseButton from "@base/BaseButton"
import BasePage from "@base/BasePage"
import { ThemeContext } from "@themes/contexts"
import { ThemeContextProps } from "@themes/contexts/types"
import { useContext } from "react"


const BasePageStory = () => {
	const { toggleTheme, theme } = useContext<ThemeContextProps>(ThemeContext);
	console.log(theme)
	return (
		<>
			<BasePage id="base-page" alignChildrenX="flex-start" >
				<BasePage id="base-page-exemple" width="90%" height="90%" border={true} borderColor="disable">
					<BaseBox id="base-box-example" border={true} alignChildrenX={"center"} borderColor="disable" borderRadius="10px 10px 10px 10px" disabled={true}>
					</BaseBox>

					<BaseButton id="base-button-example" disabled={false} onClick={() => toggleTheme("Dark")} >Botão</BaseButton>
				</BasePage>
			</BasePage>
		</>
	)
}

export default BasePageStory
