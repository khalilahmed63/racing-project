import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import { NewFooter } from '../components/NewFooter/NewFooter';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Head from 'next/head';
import './globals.css';
import NavigationHeader from '../components/global/Header/Header';


export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  const footerData = [
    {
      title: 'Group 1',
      links: [
        { label: 'Link 1', link: 'https://example.com/link1' },
        { label: 'Link 2', link: 'https://example.com/link2' },
        { label: 'Link 4', link: 'https://example.com/link4' },
      ],
    },
    {
      title: 'Group 2',
      links: [
        { label: 'Link 3', link: 'https://example.com/link3' },
        { label: 'Link 4', link: 'https://example.com/link4' },
        { label: 'Link 4', link: 'https://example.com/link4' },
      ],
    },
    {
      title: 'Group 3',
      links: [
        { label: 'Link 3', link: 'https://example.com/link3' },
        { label: 'Link 4', link: 'https://example.com/link4' },
        { label: 'Link 4', link: 'https://example.com/link4' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NavigationHeader />
          <Component {...pageProps} />
          <NavigationHeader />
          <Notifications />
          <NewFooter data={footerData} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
