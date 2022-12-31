import { BaseSpacingTypesProps, BaseTypesProps } from '@base/BaseTypes/types'

export type BaseBoxProps = {
	borderRadius: string
	borderWidth: string
	backgroundColor:
		| string
		| '--primary-text'
		| '--secondary-text'
		| '--tertiary-text'
		| '--quaternaryText'
		| '--info'
		| '--warning'
		| '--error'
} & Pick<
	BaseTypesProps,
	| 'id'
	| 'key'
	| 'children'
	| 'height'
	| 'width'
	| 'disableColor'
	| 'disable'
	| 'color'
> &
	BaseSpacingTypesProps

export type BaseBoxStyles = { disableColor: string } & Pick<
	BaseBoxProps,
	| 'borderRadius'
	| 'backgroundColor'
	| 'borderWidth'
	| 'color'
	| 'width'
	| 'height'
	| 'margin'
	| 'padding'
>
