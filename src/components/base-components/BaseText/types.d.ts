import { BaseTypesProps } from '@base/BaseTypes/types'
import { BaseFontWeight } from '@base/BaseTypography/types'

export type BaseTextProps = {
	text: string | number
} & Omit<BaseTypesProps, 'children' | 'label'>

export type BaseTextStyles = { disableColor: string } & Pick<
	BaseTypesProps,
	'color' | 'fontWeight' | 'width' | 'height' | 'fontSize' | 'disableColor'
>
