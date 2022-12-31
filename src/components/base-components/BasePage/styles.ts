//import { baseFontSizeDefault } from '@typography/types'
import { baseFontSizeDefault } from '@base/BaseTypography'
import styled, { css } from 'styled-components'
import { BasePageProps } from './types'

export const StyContainer = styled.div<BasePageProps>`
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
`
