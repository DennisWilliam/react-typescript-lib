import { throwComponentValidationError } from '@base-functions/utils'
import React from 'react'
import { StyContainer } from './styles'
import { BaseButtonProps } from './types'

const BaseButton: React.FC<BaseButtonProps> = ({
	id,
	color = "primary_background_text",
	width = "fit-content",
	height = "40px",
	backgroundColor = 'primary',
	margin = "10px",
	padding = "10px",
	children,
	border = false,
	borderColor = "disable_text",
	borderRadius,
	alignChildrenX,
	alignChildrenY,
	disabled = false,
	onClick,
}) => {

	if (border && !borderColor) {
		throwComponentValidationError("Invalid props", "To use border is obrigatory inform border and borderColor props!")
	}

	return (
		<StyContainer
			id={id}
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
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</StyContainer>
	)
}

export default BaseButton
