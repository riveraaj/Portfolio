import { useEffect } from 'react';
import { changeTextEffectHelper } from '../../utils/changeTextEffectHelper';
import { Home } from './home/Home';
import { About } from './about/About';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

export function Main() {
    useEffect(() => {
        changeTextEffectHelper();
    }, []);

    return (
        <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}