import { checkDisableComponent } from '@base-functions/utils'
import React from 'react'
import { StyContainer } from './styles'
import { BaseBoxProps } from './types'

const BaseBox: React.FC<BaseBoxProps> = ({
	id,
	color,
	width,
	height,
	disable = false,
	backgroundColor = 'transparent',
	margin,
	padding,
	disableColor = '--disable',
	children,
}) => {
	return (
		<StyContainer
			id={id}
			color={color}
			width={width}
			height={height}
			disableColor={checkDisableComponent(disable, disableColor)}
			backgroundColor={backgroundColor}
			borderRadius=''
			borderWidth=''
			margin={margin}
			padding={padding}
			disable={disable}
		>
			{children}
		</StyContainer>
	)
}

export default BaseBox
