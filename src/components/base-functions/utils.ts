import { BaseDirectionTypesProps } from "@base/BaseTypes/types";
import { ThemeApp } from "@themes/theme";

/**
 * This function handle with text color when is disabled
 *  @param {boolean} isDisabled - Value to inform if the text is disabled or not.
 */
export function checkDisableText(isDisabled: boolean): string | null {
  const disabledColor: keyof ThemeApp = "disable_text";
  return isDisabled ? disabledColor : null;
}

/**
 * This function handle with text color when is disabled
 *  @param {boolean} isDisabled - Value to inform if the text is disabled or not.
 */
export function checkDisableComponent(isDisabled: boolean): string | null {
  const disabledColor: keyof ThemeApp = "disable";
  return isDisabled ? disabledColor : null;
}

/**
 * This function handle with text color when is disabled
 *  @param {boolean} isDisabled - Value to inform if the text is disabled or not.
 */
export function convertComponentFlexPositions(
  position: BaseDirectionTypesProps
): string {
  switch (position) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return position.toString();
  }
}

/**
 * This transform css color theme with var pattern
 *  @param {keyof ThemeApp} cssColor - Theme color css
 */
export function convertThemeColorValue(
  cssColor: keyof ThemeApp | undefined
): string {
  const cssColorTransform = cssColor?.replaceAll("_", "-");
  return cssColor ? `var(--${cssColorTransform})` : "transparent";
}

type ValidationErrors = "Invalid props";
/**
 * This transform css color theme with var pattern
 *  @param {keyof ThemeApp} cssColor - Theme color css
 */
export function throwComponentValidationError(
  error: ValidationErrors,
  complement?: string
): string {
  throw new Error(error + " : " + complement);
}
