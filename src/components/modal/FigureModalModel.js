import { useGlobalStates } from '../hooks/useGlobalState';

const FigureModalModel = () => {
	const { globalState: { hasOpenModal }, setChangeGlobalState } = useGlobalStates();

	const handleCloseModal = (event) => {
		const btnCloseModal = event.target.closest('button');

		if (!btnCloseModal) return;

		setChangeGlobalState(oldValue => ({ ...oldValue, hasOpenModal: false }))

	}
	return { hasOpenModal, handleCloseModal }
};

export default FigureModalModel;