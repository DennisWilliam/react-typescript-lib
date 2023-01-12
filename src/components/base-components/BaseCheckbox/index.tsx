import React, { useState } from 'react';
import { StyInput, StyLabelContainer } from './styles';
import { BaseCheckboxProps, CheckboxSvgProps } from './types';

export const CheckboxOn: React.FC<CheckboxSvgProps> = ({
	boxClass = "box-unchecked"
}) => {
	return (
		<svg viewBox="0 0 100 100">
			<path className={boxClass} d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z" />
			<path className='box-default' d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z" />
			<polyline className={boxClass} points="25.5,53.5 39.5,67.5 72.5,34.5 " />
		</svg>
	);
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
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
			<CheckboxOn boxClass={checked} />
			<StyInput type={"checkbox"} defaultChecked={false} {...props} onChange={handleCheck} />
		</StyLabelContainer>
	)
}

export default BaseCheckbox
