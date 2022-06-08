import HeaderView from './HeaderView';
import HeaderModel from './HeaderModel';

const HeaderController = ({ menuLinks }) => {
    const { menuDisplay, openMenuIcon, openMenuModel, closeMenuIcon, handleChangeDisplay, handleNavLinkActive, } = HeaderModel();

    return (
        <HeaderView model={{
            menuLinks,
            menuDisplay,
            openMenuIcon,
            openMenuModel,
            closeMenuIcon,
            handleChangeDisplay,
            handleNavLinkActive,
        }} />
    )
}

export default HeaderController;