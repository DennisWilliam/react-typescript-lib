/**
 * This function handle with text color when is disabled
 *  @param {boolean} isDisabled - Value to inform if the text is disabled or not.
 */
export function checkDisableText(isDisabled: boolean): string {
	if (typeof isDisabled === 'boolean') {
	}
	return isDisabled ? 'gray' : 'black'
}
