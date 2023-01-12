import { throwComponentValidationError } from '@base-functions/utils'
import React from 'react'
import { StyContainer } from './styles'
import { BasePageProps } from './types'

const BasePage: React.FC<BasePageProps> = ({
	id,
	width = '100%',
	height = '100%',
	backgroundColor = 'transparent',
	margin,
	padding,
	children,
	border,
	alignChildrenX = "center",
	alignChildrenY = "center",
	borderColor,
	...props
}) => {
	if (border && !borderColor) {
		throwComponentValidationError("Invalid props", "To use border is obrigatory inform border and borderColor props!")
	}
	return (
		<StyContainer
			id={id}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			border={border}
			margin={margin}
			padding={padding}
			alignChildrenX={alignChildrenX}
			alignChildrenY={alignChildrenY}
			borderColor={borderColor}
			{...props}
		>
			{children}
		</StyContainer>
	)
}

export default BasePage
