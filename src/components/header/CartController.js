import CartView from './CartView';
import CartModel from './CartModel';

const CartController = ({ cart }) => {
    const { globalState, productName, handleDeleteProduct, handleCheckout } = CartModel()
    return (
        <CartView model={globalState} productName={productName} handleDeleteProduct={handleDeleteProduct} handleCheckout={handleCheckout} cart={cart} />
    )
};

export default CartController;