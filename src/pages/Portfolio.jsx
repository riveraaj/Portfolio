import { useState, useEffect } from 'react';
import { Splash } from './Splash';
import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { Footer } from '../components/footer/Footer';
import { CSSTransition } from 'react-transition-group';
import '../../public/assets/css/normalize.css';
import '../../public/assets/css/anim.css';
import '../../public/assets/css/portfolio.css';
import 'https://kit.fontawesome.com/16aeb5d585.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <CSSTransition
        in={showSplash}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Splash />
      </CSSTransition>

      <CSSTransition
        in={!showSplash}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </CSSTransition>
    </>
  );
}
