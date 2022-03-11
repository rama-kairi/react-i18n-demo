import Card from './Card';
import { useTranslation } from 'react-i18next';

const cardData = ['about', 'contact', 'product'];

const Main = () => {
  const { t } = useTranslation(['main', 'header']);

  return (
    <main className="container mx-auto px-8 h-[600px] flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-indigo-800 mb-3">
        {t('main:heading')}
      </h1>
      <p className="text-slate-500">{t('main:para')}</p>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {cardData.map((card) => (
          <Card key={card} title={t(`header:${card}`)} />
        ))}
      </div>
      <h2 className="text-lg mt-6 uppercase tracking-widest text-slate-700">
        {t('main:build', {
          build_date: new Date('03-09-2022').toUTCString(),
        })}
      </h2>
    </main>
  );
};

export default Main;
