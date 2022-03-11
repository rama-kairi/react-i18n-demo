# Getting Started with i18n in React

## Installation

`npm install react-i18next i18next --save`

if you'd like to detect user language and load translation
`npm install i18next-http-backend i18next-browser-languagedetector --save`

## Usage

Create a file named `i18n.js` in your project root next to index.js.

Put the following code in the file. you can do ayy changes you want.

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
    debug: false,
    ns: ['common', 'footer', 'header', 'main'],
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    //   formatSeparator: ',',
    //   format: (value, format, lng) => {
    //     if (format === 'uppercase') return value.toUpperCase();
    //     return value;
    //   },
    // },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
```

## Render you App with Suspense

```js
<Suspense fallback={<div>Loading...</div>}>
  <App />
</Suspense>
```

## You can change the Language and set teh title on page load as follows.

```js
useEffect(() => {
  i18next.changeLanguage(i18next.language);
  document.title = `i18n-next - ${i18next.t('header:site_title')}`;
}, []);
```

## Yo have to put your translations inside the `public/locales` folder.

`public/locales/common/en.json`
`public/locales/common/es.json`

Check more detail in the [i18next documentation](https://www.i18next.com/overview/configuration-options).

## You can use `useTranslation` hook to get the current language.

```js
import { useTranslation } from 'react-i18next';
const { t } = useTranslation(['footer', 'common']);

{
  t('header:about');
}
{
  t('common:subscribe_placeholder');
}
```

## You can get the Active Language as follows.

```js
const { i18n } = useTranslation();
const { language } = i18n;
```

Anther way ->

```js
import i18next from 'i18next';
i18next.language;
```

## You can change the Language as follows.

```js
import i18next from 'i18next';
i18next.changeLanguage('en');
```

## You can also use the `i18next-react-router-plugin` to integrate i18next with react-router.

```js
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
```

```js
<Link to={`/${language}/about`}>{t('header:about')}</Link>
```

## You can use the `i18next-xhr-backend` to load translations from a server.

```js
import i18nextXHRBackend from 'i18next-xhr-backend';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
```

```js
i18next
  .use(i18nextXHRBackend) // load translation using xhr -> see /public/locales
  .use(i18nextBrowserLanguageDetector) // or i18next-browser-languagedetector
  .init({
    fallbackLng: 'en',
    debug: false,
    ns: ['common', 'footer', 'header', 'main'],
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
  });
```
