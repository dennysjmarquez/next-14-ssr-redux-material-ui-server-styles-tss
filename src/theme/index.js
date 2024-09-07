import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2', // Color principal
		},
		secondary: {
			main: '#dc004e', // Color secundario
		},
		error: {
			main: '#f44336', // Color de error
		},
		warning: {
			main: '#ff9800', // Color de advertencia
		},
		info: {
			main: '#2196f3', // Color de información
		},
		success: {
			main: '#4caf50', // Color de éxito
		},
		background: {
			default: '#ffffff', // Color de fondo por defecto
			paper: '#f5f5f5', // Color del fondo de los componentes Paper
		},
		text: {
			primary: '#000000', // Color de texto principal
			secondary: '#ffffff', // Color de texto secundario
			disabled: '#9e9e9e', // Color de texto deshabilitado
			hint: '#8a8a8a', // Color de sugerencias
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif', // Fuente principal
		h1: {
			fontSize: '2rem', // Tamaño de fuente para h1
		},
		h2: {
			fontSize: '1.75rem', // Tamaño de fuente para h2
		},
		h3: {
			fontSize: '1.5rem', // Tamaño de fuente para h3
		},
		h4: {
			fontSize: '1.25rem', // Tamaño de fuente para h4
		},
		h5: {
			fontSize: '1rem', // Tamaño de fuente para h5
		},
		h6: {
			fontSize: '0.875rem', // Tamaño de fuente para h6
		},
		body1: {
			fontSize: '1rem', // Tamaño de fuente para body1
		},
		body2: {
			fontSize: '0.875rem', // Tamaño de fuente para body2
		},
		button: {
			textTransform: 'none', // Transformación de texto para botones (none, uppercase, lowercase, capitalize)
		},
	},
	spacing: 8, // Espaciado base (puedes usar números o funciones para personalizar)
	shape: {
		borderRadius: 4, // Radio de borde por defecto
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: 'initial',
					color: 'initial',
				},
			},
		},
	},
});

export default theme;
