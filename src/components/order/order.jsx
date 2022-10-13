import React from 'react'
import clock from '../../img/clock.svg';
import bullet from '../../img/bullet.svg';
import caret from '../../img/caret.svg';
import Reserve from '../reserve/Reserve';

export default function Order() {
    return (
        <div>
            <h1
                className="title text-[21px] font-semibold text-grey-header mb-[20px]">
                Order details
            </h1>
            <div
                className="order-summary  border-grey100 border-[1px] p-[20px] rounded-[5px]
                
                lg:w-[600px]
                ">
                <h1 className='text-[14px] text-grey-header mb-[20px] font-semibold'>ISO Auditor</h1>
                <p className='text-[12px] text-grey-body leading-[21px] tracking-[0.01em] mb-[20px]'>2nd party & 3rd party audits of ISO Management Systems (Quality, Environment, H&S, Food Safety etc.)</p>

                <div className="spec border-b border-grey100 pb-[30px]">
                    <p className='text-grey-header text-[13px] font-semibold flex'><span className='inline-block mr-[10px] mb-[15px] '><img src={clock} alt="" /></span>1 Day Delivery  (2 days for in-person)</p>

                    <ul className='flex flex-col gap-[8px] mr-[12.2px]'>
                        <li className='flex items-center text-[13px] text-grey-body font-medium'><span className='mr-[12.2px] w-[16px] h-[16px] flex items-center justify-center '><img src={bullet} alt="" /></span>I will learn your audit process</li>
                        <li className='flex items-center text-[13px] text-grey-body font-medium'><span className='mr-[12.2px] w-[16px] h-[16px] flex items-center justify-center '><img src={bullet} alt="" /></span>I will carry out the audit in-person</li>
                        <li className='flex items-center text-[13px] text-grey-body font-medium'><span className='mr-[12.2px] w-[16px] h-[16px] flex items-center justify-center '><img src={bullet} alt="" /></span>
                            Audit report</li>
                        <li className='flex items-center text-[13px] text-grey-body font-medium'><span className='mr-[12.2px] w-[16px] h-[16px] flex items-center justify-center '><img src={bullet} alt="" /></span>Non-conformance report</li>

                    </ul>
                </div>
                <form className='pt-[10px]' action="">
                    <div className="audit-options flex flex-col gap-[20px] justify-between items-center border-b border-grey100 
                    pb-[10px] md:flex-row">
                        <h1 className='text-[13px] text-grey-header flex-1 font-semibold mt-[20px]
                        lg:mt-0'>Type of audit (remote/in-person)</h1>

                        <div className="opt-fit flex-1 relative border-[1px] border-grey300 mb-[20px] 
                         rounded-[5px] pl-[10px] py-[12px] w-[100%]
                         lg:mt-0 ">
                            <select className=' appearance-none text-[13px] text-grey-header w-[100%]  outline-none font-medium
                            
                            ' name='audit-options' id='audit'>
                                <option value="Remote, 1 day audit (£1000)">Remote, 1 day audit (£1000)</option>
                                <option value="Remote, 1 day audit (£1000)">Site, 1 day audit (£1700)</option>
                            </select>
                            <span className='absolute top-[20px] right-[17px]'><img src={caret} alt="" /></span>
                        </div>
                    </div>
                </form>
                <Reserve />
            </div>
        </div>
    )
}
