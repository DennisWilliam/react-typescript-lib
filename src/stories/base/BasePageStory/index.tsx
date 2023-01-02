import BaseBox from "@base/BaseBox"
import BaseButton from "@base/BaseButton"
import BasePage from "@base/BasePage"

const BasePageStory = () => {

	return (
		<>
			<BasePage id="base-page" alignChildrenX="flex-start" >
				<BasePage id="base-page-exemple" width="90%" height="90%" border={true} borderColor="disable">
					<BaseBox id="base-box-example" border={true} alignChildrenX={"center"} borderColor="disable" borderRadius="10px 10px 10px 10px" disabled={true}>
					</BaseBox>
					<BaseButton id="base-button-example" disabled={true}>Botão</BaseButton>
				</BasePage>
			</BasePage>
		</>
	)
}

export default BasePageStory
