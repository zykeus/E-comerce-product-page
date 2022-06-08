import { useState, useRef, useEffect } from 'react';

const HeaderModel = () => {
    const [menuDisplay, setMenuDisplay] = useState('invisible');
    const [openMenuModel, setOpenMenuModel] = useState(false);
    const [navLinkActive, setNavLinkActive] = useState({
        currentLink: '',
        oldLink: ''
    })
    const openMenuIcon = useRef();
    const closeMenuIcon = useRef();

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

        } else {
            openMenuIcon.current.classList.remove('hidden');
            closeMenuIcon.current.classList.add('hidden');
            setOpenMenuModel(false);
        }
    }, [menuDisplay, openMenuIcon, closeMenuIcon]);

    return {
        menuDisplay,
        openMenuModel,
        openMenuIcon,
        closeMenuIcon,
        handleChangeDisplay,
        handleNavLinkActive,
    };
};

export default HeaderModel;