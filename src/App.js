import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import i18next from 'i18next';

function App() {
  useEffect(() => {
    i18next.changeLanguage(i18next.language);
    document.title = `i18n-next - ${i18next.t('header:site_title')}`;
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
