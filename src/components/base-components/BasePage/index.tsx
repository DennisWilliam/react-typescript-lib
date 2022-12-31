import React from 'react'
import { StyContainer } from './styles'
import { BasePageProps } from './types'

const BasePage: React.FC<BasePageProps> = ({
	id,
	width,
	height,
	backgroundColor = 'transparent',
	margin,
	padding,
	children,
	borderRadius,
	borderWidth,
}) => {
	return (
		<StyContainer
			id={id}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			borderRadius={borderRadius}
			borderWidth={borderWidth}
			margin={margin}
			padding={padding}
		>
			{children}
		</StyContainer>
	)
}

export default BasePage
