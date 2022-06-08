import HeaderView from './HeaderView';
import HeaderModel from './HeaderModel';
import CartController from './CartController';

const HeaderController = ({ menuLinks }) => {
    const {
        menuDisplay, handleChangeDisplay,
        openMenuIcon, openMenuModel,
        closeMenuIcon,
        cart, handleOpenCart,
        productAmount, hasSubmit,
        handleNavLinkActive } = HeaderModel();

    return (
        <HeaderView model={{
            menuLinks,
            menuDisplay,
            openMenuIcon,
            openMenuModel,
            closeMenuIcon,
            handleChangeDisplay,
            handleNavLinkActive,
            handleOpenCart,
            productAmount,
            hasSubmit,
        }} CartController={<CartController cart={cart} />} />
    )
}

export default HeaderController;