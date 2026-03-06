import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useRouteError,
} from '@remix-run/react';
import { ThemeProvider, themeStyles } from '~/components/theme-provider';
import GothamBook from '~/assets/fonts/gotham-book.woff2';
import GothamMedium from '~/assets/fonts/gotham-medium.woff2';
import { useEffect } from 'react';
import { Error } from '~/layouts/error';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Navbar } from '~/layouts/navbar';
import { Progress } from '~/components/progress';
import config from '~/config.json';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';

export const links = () => [
  {
    rel: 'preload',
    href: GothamMedium,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  {
    rel: 'preload',
    href: GothamBook,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  { rel: 'manifest', href: `${import.meta.env.BASE_URL}manifest.json` },
  { rel: 'icon', href: `${import.meta.env.BASE_URL}favicon.ico` },
  { rel: 'icon', href: `${import.meta.env.BASE_URL}favicon.svg`, type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: `${import.meta.env.BASE_URL}shortcut.png`, type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: `${import.meta.env.BASE_URL}icon-256.png`, sizes: '256x256' },
  { rel: 'author', href: `${import.meta.env.BASE_URL}humans.txt`, type: 'text/plain' },
];

/**
 * Inline script to restore the URL from the GitHub Pages 404.html redirect hack.
 * When a user navigates directly to a deep URL (e.g. /contact), GitHub Pages
 * serves 404.html which redirects to /?p=/contact. This script restores the URL.
 */
const spaRedirectScript = `
  (function() {
    var p = new URLSearchParams(window.location.search).get('p');
    if (p) {
      history.replaceState(null, '', p);
    }
  })();
`;

export default function App() {
  const { state } = useNavigation();

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <script dangerouslySetInnerHTML={{ __html: spaRedirectScript }} />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        <ThemeProvider theme="dark">
          <Progress />
          <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
            Skip to main content
          </VisuallyHidden>
          <Navbar />
          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={state === 'loading'}
          >
            <Outlet />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * HydrateFallback — Required by Remix SPA Mode.
 * Rendered at build time to generate the static index.html.
 * Shown briefly while React hydrates on the client.
 */
export function HydrateFallback() {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <script dangerouslySetInnerHTML={{ __html: spaRedirectScript }} />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        {/* Intentionally blank — shows briefly while JS loads */}
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        <Error error={error} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
