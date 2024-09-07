import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { wrapper } from 'store';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';

export default function App(props) {
	const { Component, pageProps } = props;
	const { store } = wrapper.useWrappedStore(props);

	return (
		<AppCacheProvider {...props}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</AppCacheProvider>
	);
}
