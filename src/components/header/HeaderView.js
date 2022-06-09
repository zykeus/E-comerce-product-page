import { Children } from 'react';
import { ReactComponent as MenuIcon } from '../../assets/svg/icon-menu.svg';
import { ReactComponent as IconCart } from '../../assets/svg/icon-cart.svg';
import { ReactComponent as IconClose } from '../../assets/svg/icon-close.svg';

import imgAvatar from "../../assets/images/image-avatar.png";

const HeaderView = ({ model, CartController }) => {
    return (
        <header className='flex items-center justify-between w-full px-6 py-4 h-fit md:h-32 md:items-center md:py-0 md:col-start-1 md:col-span-full md:px-4 md-lg:px-0 md-lg:col-start-2 md-lg:col-span-9 md-lg:min-w-fit lg:col-start-3 lg:col-span-8 md:border-b md:border-b-gray-blue z-40'>
            <div className='flex items-center justify-between w-50 md:w-auto'>
                <button className='z-[70]' onClick={model.handleChangeDisplay} id="show-menu">
                    <MenuIcon className='md:hidden' ref={model.openMenuIcon} />
                </button>

                <h1 className='ml-4 text-3xl font-bold font-primary cursor-pointer text-vark-blue md:ml-0 md:mr-4 md-lg:mr-0 md-lg:text-4xl'>
                    <a href='home'>sneakers</a>
                </h1>
            </div>

            <div className={`fixed left-0 top-0 transition-all duration-700 ease-in-out ${model.openMenuModel ? 'bg-black z-[70] visible' : 'bg-transparent invisible'} w-full h-full md:contents`}>
                <nav className={`absolute left-0 top-0 h-full transition-all duration-300 ease-in ${model.openMenuModel ? 'w-2/3 pl-4' : 'w-0 pl-0'} pt-20 ease-in-out ${model.menuDisplay}   bg-white dark:bg-black text-vark-blue md:pl-0 md:visible md:relative md:pt-0 md:h-full md:w-auto  md:flex md:items-center md:text-neutral-900`}>
                    <ul className="md:flex md:justify-between md:items-center md:h-full md:w-full">
                        {Children.toArray(
                            model.menuLinks.map(linkPages => (
                                <li onClick={model.handleNavLinkActive} className='
					            		relative pt-4 font-bold cursor-pointer md:pt-0 
                                        md:flex md:items-center
					            		md:text-dark-gray-blue md:h-full md:font-normal md:ml-6 
					            		md:first:ml-0 md:transition-all hover:text-blue-500 

						            	md:after:content-[""] md:after:absolute
						            	md:after:left-0 md:after:bottom-0 
						            	md:after:rounded-sm 
						            	md:after:w-full md:after:h-2 
						            	md:after:transition-all xl:text-lg'>
                                    {linkPages.charAt(0).
                                        toUpperCase() + linkPages.toLowerCase().slice(1)
                                    }
                                </li>
                            ))
                        )}
                    </ul>
                </nav>
            </div>

            <button onClick={model.handleChangeDisplay} id="hide-menu">
                <IconClose className="absolute left-4 z-[70] hidden top-6 md:hidden" ref={model.closeMenuIcon} />
            </button>

            <div className="relative flex items-center justify-between w-20 lg:w-24">
                <button className='relative z-[50]' onClick={model.handleOpenCart} >
                    <IconCart className="cursor-pointer" />
                    {model.hasSubmit ?
                        <span className={`absolute -top-2 -right-[.4rem] bg-primary text-white rounded-full w-5 h-1 text-[.7rem] flex items-center justify-center py-2 font-bold'>{model.productAmount}`}>
                            {model.productAmount}
                        </span>
                        : null
                    }
                </button>
                <img className="h-8 sm:h-10 cursor-pointer md:h-12 border-2 border-transparent rounded-full hover:border-primary transition-all xl:h-14" src={imgAvatar} alt="avatar" />
            </div>
            {CartController}
        </header>
    )
};

export default HeaderView;