import { BaseFontWeight } from '@base/BaseTypography/types'

/**
 * BaseRequiredTypesProps is some of most common required types used to props HstUi components.
 *  @param {id} id - The component identification.
 */
export type BaseRequiredTypesProps = {
	id: string
}

/**
 * BaseTypesProps is some of most common types used to props HstUi components.
 * @param {string | number} key - The author of the book.
 * @param {string | number} label - The author of the book.
 * @param {number | string} fontSize - Changes the component font-size.
 * @param {color} color - The author of the book.
 * @param {keyof BaseFontWeight | string} fontWeight - The author of the book.
 * @param {string | number} width - The author of the book.
 * @param {string | number} height - The author of the book.
 * @param {React.ReactNode} children - The author of the book.
 */
export type BaseTypesProps = {
	key?: string | number
	label?: string | number
	fontSize?: number | string
	color?: string
	fontWeight?: keyof BaseFontWeight | string
	width?: string | number
	height?: string | number
	children?: React.ReactNode
} & BaseRequiredTypesProps &
	BaseInteractionsTypesProps

/**
 * BaseInteractionsTypesProps is some of most common interaction types used to props HstUi components.
 *  @param {boolean} isHover - Inform if the component is with hover effect.
 * @param {boolean} hoverColor - Inform if the  component color when it is with hover effect.
 * @param {boolean} isActive - Inform if the component is with active effect.
 * @param {boolean} activeColor - Inform if the  component color when it is with active effect.
 * @param {boolean} hasFocus - Inform if the component is with focus effect.
 * @param {boolean} focusColor - Inform if the  component color when it is with focus effect.
 * @param {boolean} disable - Inform if the component is with disable effect.
 * @param {boolean} disableColor - Inform if the  component color when it is with disable effect.
 */
export type BaseInteractionsTypesProps = {
	isHover: boolean
	hoverColor: string
	isActive: boolean
	activeColor: string
	hasFocus: boolean
	focusColor: string
	disable: boolean
	disableColor: string
}
