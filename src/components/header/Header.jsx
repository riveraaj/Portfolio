import { useEffect } from 'react';
import { attachEventListeners, removeEventListeners } from '../../utils/navDesktopHelper';
import { attachScrollEventListener, removeScrollEventListener } from '../../utils/navMobileTabletHelper';
import { NavDesktop } from './NavDesktop';
import { NavMobileTablet } from './NavMobileTablet';
import { linkDesktopList } from '../../../public/assets/js/constants';
import { linkMobileTabletList } from '../../../public/assets/js/constants';
import '../../../public/assets/css/nav.css'

export function Header() {
    useEffect(() => {
        attachEventListeners();
        return () => {
            removeEventListeners();
        };
    }, []);

    useEffect(() => {
        attachScrollEventListener();
        return () => {
            removeScrollEventListener();
        };
    }, []);

    return (
        <header>
            <NavMobileTablet linkList={linkMobileTabletList} />
            <NavDesktop linkList={linkDesktopList} />
        </header>
    );
}
