import { throwComponentValidationError } from '@base-functions/utils'
import BaseBox from '@base/BaseBox'
import BaseText from '@base/BaseText'
import React from 'react'
import { StyDivLogo } from './styles'
import { BaseBoxProps } from './types'

const Header: React.FC<BaseBoxProps> = ({
	id,
	key,
	color,
	width = "400px",
	height = "150px",
	backgroundColor = 'transparent',
	margin = "10px",
	padding = "10px",
	children,
	border = false,
	borderColor = "disable_text",
	borderRadius,
	alignChildrenX,
	alignChildrenY,
	...props
}) => {

	if (border && !borderColor) {
		throwComponentValidationError("Invalid props", "To use border is obrigatory inform border and borderColor props!")
	}

	return (

		<BaseBox id='header-box' backgroundColor='primary' width={"100%"} alignChildrenX={'flex-start'} alignChildrenY={'center'}>
			<StyDivLogo>
				<span>
					logo
				</span>
				<span>
					<BaseText id='page-title' text={"Painel"} />
				</span>
			</StyDivLogo>
			{children}
		</BaseBox>

	)
}

export default Header
