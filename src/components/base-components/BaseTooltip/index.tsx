import React from 'react';
import { StyDivContainer, StyTooltip } from './styles';
import { BaseTooltipProps } from './types';

const BaseTooltip: React.FC<BaseTooltipProps> = ({
	id,
	color = "primary_text",
	fontSize,
	fontWeight,
	text,
	width,
	height,
	disabled = false,
	children,
	...props
}) => {

	return (
		<StyDivContainer {...props}>
			<StyTooltip>
				<p>asdasdasdsdasdasdasdasdasdasddasdasdasdasdasdasdasdasdasdasdasdasddaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
			</StyTooltip>
			{children}
		</StyDivContainer>
	)
}

export default BaseTooltip
