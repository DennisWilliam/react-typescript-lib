//import { baseFontSizeDefault } from '@typography/types'
import { baseFontSizeDefault } from '@base/BaseTypography'
import styled, { css } from 'styled-components'
import { BaseTextStyles } from './types'

export const StyContainer = styled.span<BaseTextStyles>`
	color: ${({ color }) => (color ? color : '#000')};
	width: ${({ width }) => (width ? width : 'fit-content')};
	height: ${({ height }) => (height ? height : 'fit-content')};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : baseFontSizeDefault)};
	${({ fontWeight }) =>
		fontWeight &&
		css`
			font-weight: ${fontWeight.toString()};
		`}
`
