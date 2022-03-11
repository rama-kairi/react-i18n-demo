import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);
  return (
    <footer className="bg-indigo-200 h-auto flex items-center flex-col py-6">
      <div className="container mx-auto px-8 w-full flex justify-between items-center mb-8 border-b-[1px] pb-5 border-indigo-300 mt-8">
        <h1
          className="text-2xl text-indigo-800 font-bold text-left
          "
        >
          i18n-next
        </h1>
        <div className="flex items-center h-12">
          <input
            type="email"
            name="nl"
            id="nl"
            placeholder={t('common:subscribe_placeholder')}
            className="w-[360px] rounded-tl-full rounded-bl-full border-none outline-none pl-3 placeholder:text-indigo-200 h-full"
          />
          <button className="px-6 h-12 bg-indigo-600 text-indigo-50 rounded-tr-full rounded-br-full hover:bg-indigo-700 transition-colors ease-in-out duration-500">
            {t('common:subscribe')}
          </button>
        </div>
      </div>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <a className="text-[13px] capitalize" href="/">
            {t('header:about')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:about')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:about')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:about')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:about')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:about')}
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <a className="text-[13px] capitalize" href="/">
            {t('header:contact')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:contact')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:contact')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:contact')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:contact')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:contact')}
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <a className="text-[13px] capitalize" href="/">
            {t('header:product')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:product')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:product')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:product')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:product')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:product')}
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <a className="text-[13px] capitalize" href="/">
            {t('header:account')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:account')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:account')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:account')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:account')}
          </a>
          <a className="text-[13px] capitalize" href="/">
            {t('header:account')}
          </a>
        </div>
      </div>
      <div className="container mx-auto px-8 w-full flex justify-between items-center mb-4 border-t-[.005rem] pt-2 border-indigo-300 mt-8 text-gray-500">
        <small>i18n-next ⓒ {new Date().getFullYear()}</small>
        <small>
          {t('footer:footer_credit')} &nbsp;
          <a
            href="https://github.com/rama-kairi"
            className="text-indigo-800"
          >
            ~rama
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
