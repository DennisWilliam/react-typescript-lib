import { checkDisableText } from '@base-functions/utils'
import React from 'react'
import { StyContainer } from './styles'
import { BaseTextProps } from './types'

const BaseText: React.FC<BaseTextProps> = ({
	id,
	color = "primary_text",
	fontSize = "12px",
	fontWeight = "400",
	text,
	width = "fit-content",
	height = "fit-content",
	disabled = true,
	...props
}) => {
	return (
		<StyContainer
			id={id}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			width={width}
			height={height}
			disableColor={checkDisableText(disabled)}
			text={text}
			{...props}
		>
			{text}
		</StyContainer>
	)
}

export default BaseText
