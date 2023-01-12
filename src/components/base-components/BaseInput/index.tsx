import React from 'react';
import { StyInput } from './styles';
import { BaseInputProps } from './types';

const BaseInput: React.FC<BaseInputProps> = ({
	id,
	color = "primary_text",
	fontSize,
	fontWeight,
	text,
	width,
	height,
	disabled = false,
	type = "text",
	...props
}) => {

	return (
		<StyInput type={type}  {...props} />
	)
}

export default BaseInput
