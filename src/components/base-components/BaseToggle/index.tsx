import React, { useState } from 'react';
import { StyInput, StyLabelContainer } from './styles';
import { BaseToggleProps, CheckboxSvgProps } from './types';

const BaseToggle: React.FC<BaseToggleProps> = ({
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
	const [checked, setChecked] = useState<CheckboxSvgProps["boxClass"]>('box-unchecked')

	function handleCheck(event: React.ChangeEvent<HTMLInputElement>): void {
		event.target.checked ? setChecked("box-checked") : setChecked("box-unchecked")
	}

	return (
		<StyLabelContainer>
			<StyInput type={"checkbox"}  {...props} onChange={handleCheck} />
		</StyLabelContainer>
	)
}

export default BaseToggle
