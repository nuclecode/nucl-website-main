import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		section: {},
		// Disable some variants
		h4: undefined,
		h5: undefined,
		h6: undefined
	},
	components: {
		MuiButtonBase: {
            defaultProps: {
                // disableRipple: true
            }
        },
		MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
                // disableRipple: true,
                disableFocusRipple: true,
                // disableTouchRipple: true,
                disableElevation: true
            },
            variants: [
                {
                    props: { variant: 'generic' },
                    style: {}
                }
            ]
        },
		MuiIconButton: {
            defaultProps: {
                // disableRipple: true,
                disableFocusRipple: true
                // disableTouchRipple: true
            }
        },
		MuiToggleButton: {
            defaultProps: {
                disableFocusRipple: true
            }
        },
		MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    section: 'section',
                    body1: 'div',
                    body2: 'div',
                    button: 'div',
                    caption: 'div',
                    overline: 'div'
                }
            }
        }
	}
});

export default theme;