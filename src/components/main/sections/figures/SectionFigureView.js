const SectionFigureView = ({ children }) => {
    return (
        <section className='relative flex flex-col h-[20rem] sm:h-[40rem] sm-md:[60rem] md-sm:[60rem] md:h-fit md:col-start-1 md:col-span-6 md-lg:col-start-1 md-lg:col-span-4 md:rounded-lg md:grid
		 md:grid-rows-3 md:place-items-center md:gap-y-4 md-lg:mt-0 lg:gap-y-8'>
            {children}
        </section>
    )
};

export default SectionFigureView;