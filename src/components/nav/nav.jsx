import React from 'react'
import share from '../../img/share.svg'
export default function Nav({ toggle, toggleMenu }) {
    return (
        <div className='relative border-t-[1px] border-b-[1px] border-grey100  '>

            <div className="bucket container flex items-center justify-between  ">
                <div className="navLink  ">
                    <ul className={toggle ? 'hidden py-[19.5px] lg:flex gap-[40px] ' : ' py-[19.5px] flex flex-col gap-[20px] bg-[white] pb-[45px] absolute z-20 top-[-115px] left-0 right-0 pt-[150px]'}>
                        <li className='text-[14px] font-medium active:font-bold text-grey-header 
                    sm:mx-[2.5rem] mx:md:-[4rem] px-[30px] lg:mx-0 lg:px-0 border-b-2 pb-[20px] border-grey100 lg:border-b-0 lg:pb-0'><a className=' lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">Overview</a></li>
                        <li className='text-[14px] font-medium active:font-bold text-grey-header first-letter 
                    sm:mx-[2.5rem] mx:md:-[4rem] px-[30px] lg:mx-0 lg:px-0  border-b-2 pb-[20px] border-grey100 lg:border-b-0 lg:pb-0     
                    '><a className='lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">Description</a></li>
                        <li className='text-[14px] font-medium active:font-bold text-grey-header 
                    sm:mx-[2.5rem] mx:md:-[4rem] px-[30px] lg:mx-0 lg:px-0 border-b-2 pb-[20px] border-grey100 lg:border-b-0 lg:pb-0'><a className='lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">About the seller</a></li>
                        <li className='text-[14px] font-medium active:font-bold text-grey-header 
                    sm:mx-[2.5rem] mx:md:-[4rem] px-[30px] lg:mx-0 lg:px-0 border-b-2 pb-[20px] border-grey100 lg:border-b-0 lg:pb-0'><a className='lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">Order details</a></li>

                        <div className="share container  lg:hidden flex gap-4">
                            <span className='cursor-pointer bg-blue flex items-center px-[30px] py-[10px] rounded-[4px] w-[70px]'>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 6C12.654 6 14 4.654 14 3C14 1.346 12.654 0 11 0C9.346 0 8 1.346 8 3C8 3.223 8.029 3.439 8.075 3.649L4.855 5.661C4.343 5.254 3.704 5 3 5C1.346 5 0 6.346 0 8C0 9.654 1.346 11 3 11C3.704 11 4.343 10.746 4.855 10.339L8.075 12.351C8.029 12.561 8 12.777 8 13C8 14.654 9.346 16 11 16C12.654 16 14 14.654 14 13C14 11.346 12.654 10 11 10C10.296 10 9.657 10.254 9.145 10.661L5.925 8.649C5.971 8.439 6 8.223 6 8C6 7.777 5.971 7.561 5.925 7.351L9.145 5.339C9.657 5.746 10.296 6 11 6Z" fill="white" />
                                </svg>
                            </span>
                            <a href="#">
                                <span className='chat bg-dark-blue px-[20px] py-[8px] rounded-[4px] flex flex-row-reverse items-center justify-center gap-2 text-lg text-[white]'>Talk to the seller
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3_764)">
                                            <path d="M0.497314 20.0471V19.736C0.64882 19.5428 0.790445 19.343 0.948538 19.1564C1.35036 18.6914 1.75876 18.2297 2.17046 17.7647C2.12765 17.709 2.09471 17.6599 2.05848 17.6173C1.39291 16.8511 0.919918 15.9386 0.678462 14.9551C0.60271 14.6538 0.556599 14.3493 0.497314 14.048V12.9576C0.512423 12.9159 0.524531 12.8732 0.533544 12.8298C0.598062 12.4345 0.684931 12.0431 0.793739 11.6575C1.38299 9.94095 2.62251 8.5206 4.24873 7.69855C6.29212 6.57439 8.68703 6.25863 10.9545 6.81441C12.8772 7.19465 14.5915 8.26604 15.7697 9.82376C16.4115 10.621 16.8304 11.5724 16.9842 12.5819C17.138 13.5915 17.0213 14.6235 16.6458 15.574C16.2168 16.7109 15.4847 17.7105 14.5281 18.4654C13.0295 19.765 11.1085 20.4815 9.11996 20.4826C6.48508 20.4826 3.86996 20.4826 1.24496 20.4826C1.0895 20.502 0.93194 20.4698 0.796751 20.3911C0.661562 20.3123 0.556303 20.1914 0.497314 20.0471ZM6.37639 13.3898C6.3777 13.1585 6.30993 12.9319 6.18167 12.7389C6.05341 12.5459 5.87042 12.395 5.65588 12.3054C5.44134 12.2158 5.20489 12.1916 4.97646 12.2357C4.74803 12.2798 4.5379 12.3903 4.37267 12.5532C4.20744 12.7161 4.09454 12.924 4.04827 13.1508C4.00199 13.3775 4.02442 13.6128 4.11271 13.8268C4.201 14.0409 4.35119 14.2241 4.54426 14.3532C4.73732 14.4824 4.96459 14.5516 5.19728 14.5523C5.507 14.5481 5.803 14.4246 6.02294 14.2078C6.24288 13.9909 6.36959 13.6977 6.37639 13.3898ZM8.76425 12.2175C8.53156 12.2175 8.3041 12.2861 8.11066 12.4147C7.91723 12.5433 7.76653 12.7261 7.67763 12.9399C7.58873 13.1537 7.56564 13.3889 7.61128 13.6158C7.65691 13.8427 7.76923 14.051 7.934 14.2143C8.09877 14.3777 8.30859 14.4888 8.53689 14.5335C8.76519 14.5782 9.00171 14.5546 9.21651 14.4656C9.4313 14.3766 9.61471 14.2263 9.74351 14.0336C9.87231 13.8409 9.94072 13.6146 9.94007 13.3833C9.93496 13.0751 9.80934 12.781 9.58984 12.5634C9.37033 12.3458 9.07421 12.2217 8.76425 12.2175ZM12.3378 14.5523C12.5705 14.5516 12.7978 14.4824 12.9908 14.3532C13.1839 14.2241 13.3341 14.0409 13.4224 13.8268C13.5107 13.6128 13.5331 13.3775 13.4868 13.1508C13.4405 12.924 13.3277 12.7161 13.1624 12.5532C12.9972 12.3903 12.7871 12.2798 12.5586 12.2357C12.3302 12.1916 12.0938 12.2158 11.8792 12.3054C11.6647 12.395 11.4817 12.5459 11.3534 12.7389C11.2252 12.9319 11.1574 13.1585 11.1587 13.3898C11.1647 13.6979 11.2911 13.9917 11.5112 14.2087C11.7314 14.4257 12.0278 14.5489 12.3378 14.5523Z" fill="white" />
                                            <path d="M13.5894 0.527222C13.9352 0.579615 14.2844 0.615636 14.6269 0.687677C16.6459 1.097 18.3487 2.03354 19.5377 3.74615C20.2664 4.76304 20.6301 5.99399 20.5704 7.24117C20.5106 8.48836 20.0309 9.67936 19.2083 10.6228C19.0864 10.7669 19.0831 10.8488 19.2083 10.9896C19.6134 11.4382 19.9988 11.9065 20.3973 12.3616C20.4882 12.4472 20.5493 12.5594 20.5718 12.6818C20.5943 12.8043 20.577 12.9307 20.5225 13.0427C20.4705 13.1514 20.3859 13.2413 20.2802 13.3C20.1746 13.3587 20.0532 13.3832 19.9329 13.3702C19.4224 13.3702 18.9152 13.3702 18.4047 13.3702H18.2597C18.1741 12.8364 18.128 12.3125 18.0028 11.8049C17.5607 10.0647 16.5246 8.53114 15.0715 7.4661C13.6223 6.36023 11.8948 5.67252 10.0784 5.47842C8.51982 5.28684 6.93789 5.43774 5.44435 5.92049L5.28296 5.95323C5.37518 5.62577 5.44105 5.35071 5.54645 5.07564C6.13612 3.55864 7.26776 2.31111 8.72477 1.57182C9.76534 0.998443 10.9179 0.654462 12.104 0.563242C12.1567 0.563242 12.2061 0.537045 12.2555 0.527222H13.5894Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3_764">
                                                <rect width="21" height="21" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </ul>

                </div >

                <div className="share hidden border-l-[1px] border-r-[1px] h-[60px] lg:flex items-center justify-center 
                cursor-pointer border-grey100 px-[22px]  hover:bg-grey100 hover:ease-in duration-150 
                
                ">
                    <img className='w-[14px] h-[16px]' src={share} alt="" />
                </div>
            </div >
        </div >
    )
}
