import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '../components/layout/layout';
import { Provider } from 'react-redux';
import store from '../store';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Provider store={store}>
         <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
               light: lightTheme.className,
               dark: darkTheme.className,
            }}
         >
            <NextUIProvider>
               {/* Set isAdmin to false for customer default */}
               <Layout isAdmin={false}>
                  <Component {...pageProps} />
               </Layout>
            </NextUIProvider>
         </NextThemesProvider>
      </Provider>
   );
}

export default MyApp;
