import SectionDetailsView from './SectionDetailsView';
import SectionDetailsModel from './SectionDetailsModel';

const SectionDetailsController = () => {
	const  { productAmount: {amount, price, price_discount }, productName, handleProductAmount } = SectionDetailsModel();
	return (
		<SectionDetailsView model={{amount, price, price_discount }} productName={productName} handleProductAmount={handleProductAmount} />
	)
};

export default SectionDetailsController;