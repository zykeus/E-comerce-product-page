const MainView = ({ children }) => {
    return (
        <main className='
            relative min-h-screen 
            md:grid md:grid-cols-12 
            md:col-start-1 md:col-span-full md:px-4 md:gap-x-14
            md-lg:grid-cols-8 md-lg:col-start-2 md-lg:col-span-9 md-lg:px-0
            lg:ml-16 lg:col-start-3 lg:col-span-8  xl:gap-x-32'>
            {children}
        </main>
    )
};

export default MainView;