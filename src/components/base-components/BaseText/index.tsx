import { checkDisableText } from '@base-functions/utils'
import React from 'react'
import { StyContainer } from './styles'
import { BaseTextProps } from './types'

const BaseText: React.FC<BaseTextProps> = ({
	id,
	color,
	fontSize,
	fontWeight,
	text,
	width,
	height,
	disable = false,
}) => {
	return (
		<StyContainer
			id={id}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			width={width}
			height={height}
			disableColor={checkDisableText(disable)}
		>
			{text}
		</StyContainer>
	)
}

export default BaseText