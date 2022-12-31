/**
 * This function handle with text color when is disabled
 *  @param {boolean} isDisabled - Value to inform if the text is disabled or not.
 */
export function checkDisableText(
	isDisabled: boolean,
	defaultColor: string
): string {
	return isDisabled ? '--disable-text' : defaultColor
}

/**
 * This function handle with text color when is disabled
 *  @param {boolean} isDisabled - Value to inform if the text is disabled or not.
 */
export function checkDisableComponent(
	isDisabled: boolean,
	defaultColor: string
): string {
	return isDisabled ? '--disable' : defaultColor
}
