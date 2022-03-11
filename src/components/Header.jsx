import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
  },
];

const Header = () => {
  const { t } = useTranslation(['header']);

  const changeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <header className="bg-indigo-200 h-16 flex items-center">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1
            className="text-2xl text-indigo-800 font-bold
          "
          >
            i18n-next
          </h1>
          <a
            className="ml-12 uppercase tracking-wider text-[13px]"
            href="/"
          >
            {t('header:about')}
          </a>
          <a className="uppercase tracking-wider text-[13px]" href="/">
            {t('header:contact')}
          </a>
          <a className="uppercase tracking-wider text-[13px]" href="/">
            {t('header:product')}
          </a>
          <a className="uppercase tracking-wider text-[13px]" href="/">
            Services
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <a className="uppercase tracking-wider text-[13px]" href="/">
            {t('header:account')}
          </a>
          <select
            name="lang"
            className="bg-indigo-200 ring-2 rounded-full ring-indigo-500 ring-opacity-20 px-3 outline-none border-none h-8"
            onChange={changeLanguage}
            defaultValue={i18next.language}
          >
            {languages.map(({ code, name, flag }) => (
              <option
                key={code}
                value={code}
                name="lang"
                className="text-indigo-700"
              >
                {flag} {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
