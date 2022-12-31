import { baseFontFamily } from '@base/BaseTypography'
import { createGlobalStyle } from 'styled-components'
import GlobalProps from './types'

export default createGlobalStyle<GlobalProps>`
   @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,500,600,700&display=swap');

   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-size:12px;
       font-family: ${() => baseFontFamily};
       -webkit-font-smoothing: antialiased !important;
			 text-rendering: optimizeLegibility;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-text-size-adjust: 100%;
       
       ::-webkit-scrollbar {
            width: 0.75vw;
        }

        ::-webkit-scrollbar-track-piece {
            background-color: var(--background);
        }

        ::-webkit-scrollbar-thumb:vertical {
            background-color: lightgrey;
        }
   }

	 :root {
		//Global
		--primary-hst:${({ theme }) => theme.primary}
		--secondary:${({ theme }) => theme.secondary}
		--background:${({ theme }) => theme.background}
		--primary-text:${({ theme }) => theme.primaryText}
		--secondary-text:${({ theme }) => theme.secondary}
		--tertiary-text:${({ theme }) => theme.tertiaryText}
		--quaternary-text:${({ theme }) => theme.quaternaryText}
		--disable:${({ theme }) => theme.disable}
		--disable-text:${({ theme }) => theme.disableText}

		//Messages
		--success:(${({ theme }) => theme.primary})
		--error:(${({ theme }) => theme.primary})
		--warning:(${({ theme }) => theme.primary})
		--info:(${({ theme }) => theme.primary})
	 }

`
