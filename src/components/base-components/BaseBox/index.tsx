import { throwComponentValidationError } from '@base-functions/utils'
import React from 'react'
import { StyContainer } from './styles'
import { BaseBoxProps } from './types'

const BaseBox: React.FC<BaseBoxProps> = ({
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
		<StyContainer
			id={id}
			key={key}
			color={color}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			margin={margin}
			padding={padding}
			border={border}
			borderColor={borderColor}
			borderRadius={borderRadius}
			alignChildrenX={alignChildrenX}
			alignChildrenY={alignChildrenY}
			{...props}
		>
			{children}
		</StyContainer>
	)
}

export default BaseBox
