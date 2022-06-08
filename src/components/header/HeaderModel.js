import { useState, useRef, useEffect } from 'react';
import { useGlobalStates } from '../hooks/useGlobalState';

const HeaderModel = () => {
    const [menuDisplay, setMenuDisplay] = useState('invisible');
    const [openMenuModel, setOpenMenuModel] = useState(false);
    const [navLinkActive, setNavLinkActive] = useState({
        currentLink: '',
        oldLink: ''
    })
    const openMenuIcon = useRef();
    const closeMenuIcon = useRef();
    const { cart, setChangeGlobalState, globalState: { productAmount, hasSubmit } } = useGlobalStates();

    const handleChangeDisplay = (event) => {
        event.preventDefault();

        const element = event.target.closest('button');

        if (!element) return;

        if (element.id === 'show-menu') setMenuDisplay(oldValue => oldValue = 'flex flex-col');
        if (element.id === 'hide-menu') setMenuDisplay(oldValue => oldValue = 'invisible')
    };

    const handleNavLinkActive = (event) => {
        console.log('hi')
        setNavLinkActive(oldValue => ({
            currentLink: event.target,
            oldLink: oldValue.oldLink ? oldValue.currentLink : event.target
        }))
        event.target.classList.add('md:after:bg-primary')
    };

    const handleOpenCart = () => {
        cart.current.classList.toggle('hidden')
        if (cart.current.classList.contains('hidden')) {
            setChangeGlobalState(oldValue => ({ ...oldValue, openCart: false }))
        } else setChangeGlobalState(oldValue => ({ ...oldValue, openCart: true }))
    }

    useEffect(() => {

        if (!navLinkActive.oldLink && !navLinkActive.currentLink) return;

        if (navLinkActive.oldLink !== navLinkActive.currentLink) {
            navLinkActive.oldLink.classList.replace('md:after:bg-primary', 'md:after:bg-none');
        } else {
            navLinkActive.oldLink.classList.replace('md:after:bg-none', 'md:after:bg-primary')
        }

    }, [navLinkActive.oldValue, navLinkActive.currentLink])
    useEffect(() => {
        if (menuDisplay !== 'invisible') {
            openMenuIcon.current.classList.add('hidden');
            closeMenuIcon.current.classList.remove('hidden');
            setOpenMenuModel(true);
            setChangeGlobalState(oldValue => ({ ...oldValue, navModal: true }))

        } else {
            openMenuIcon.current.classList.remove('hidden');
            closeMenuIcon.current.classList.add('hidden');
            setOpenMenuModel(false);
            setChangeGlobalState(oldValue => ({ ...oldValue, navModal: false }))
        }
    }, [menuDisplay, openMenuIcon, closeMenuIcon]);

    return {
        menuDisplay,
        openMenuModel,
        openMenuIcon,
        closeMenuIcon,
        handleChangeDisplay,
        handleOpenCart,
        handleNavLinkActive,
        cart,
        hasSubmit,
        productAmount
    };
};

export default HeaderModel;