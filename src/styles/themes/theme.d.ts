type ThemeInteractions = {
	hoverAndSelection: string
	hoverAndSelectionPrimary: string
	hoverAndSelectionSecondary: string
	disable: string
	disableText: string
}

export type ThemeApp = {
	header: string
	primary: string
	secondary: string
	background: string
	primaryText: string
	secondaryText: string
	tertiaryText: string
	quaternaryText: string
	inputColor: string
} & ThemeInteractions
