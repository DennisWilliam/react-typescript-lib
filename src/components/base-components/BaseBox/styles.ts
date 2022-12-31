//import { baseFontSizeDefault } from '@typography/types'
import { baseFontSizeDefault } from '@base/BaseTypography'
import styled, { css } from 'styled-components'
import { BaseBoxProps } from './types'

export const StyContainer = styled.div<BaseBoxProps>`
	width: ${({ width }) => (width ? width : 'fit-content')};
	height: ${({ height }) => (height ? height : 'fit-content')};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : baseFontSizeDefault};

	${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

	${({ padding }) =>
		padding &&
		css`
			margin: ${padding};
		`}

	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
		${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`}
		${({ borderWidth }) =>
		borderWidth &&
		css`
			border-width: ${borderWidth};
		`}
`
