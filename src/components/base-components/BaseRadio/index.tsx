import React from 'react';
import { StyInput, StyLabelContainer } from './styles';
import { BaseCheckboxProps } from './types';

const BaseRadio: React.FC<BaseCheckboxProps> = ({
	id,
	color = "primary_text",
	fontSize,
	fontWeight,
	text,
	width,
	height,
	disabled = false,
	...props
}) => {

	return (
		<StyLabelContainer>
			<StyInput type={"radio"}  {...props} />
			<span className='custom-radio' />
		</StyLabelContainer>
	)
}

export default BaseRadio
