import React from 'react'
import Order from '../order/Order'
import Reserve from '../reserve/Reserve'


export default function About() {
  return (
    
    <div className="AboutCont border-b-[1px] border-grey100 pb-[20px] ">
    <div 
    className='flex flex-col gap-[30px] mt-[60px]'
    >
        <h1 
        className="title tracking-[0.01em] text-[28px] text-grey-header font-bold leading-[36px] pr-[30px]">
        I conduct supplier audits across multiple management systems
        </h1>
        <p 
        className="body text-grey-body text-[13px] leading-[21px] 
        tracking-[0.01em] font-medium pr-[140px] border-b-[1px] border-grey100 pb-[30px]"
        >Second and third-party services for Quality, Environmental, Occupational Health & Safety, Food Safety, Social Responsibility and Facility Management Systems.</p>
    </div>

    <div className="info mt-[30px] mb-[80px] flex gap-[21px] ">
        <div className="industry flex flex-col flex-1 gap-[10px]">
            <h1
            className='text-grey-body font-medium text-[13px] tracking-[0.01em]'
            >Industry</h1>
            <p 
            className="body text-[12px] font-medium text-grey-body"
            >Construction, Environment, Food & beverage, Manufacturing & storage</p>
        </div>
        
        <div className="purpose flex flex-col flex-1 gap-[10px]">
            <h1
            className='text-grey-body font-medium text-[13px] tracking-[0.01em]'
            >Purpose</h1>
            <p 
            className="body text-[12px] font-medium text-grey-body"
            >Supplier Quality, Supplier Risk Management</p>
        </div>

        <div className="coverage flex flex-col flex-1 gap-[10px]">
            <h1
            className='text-grey-body font-medium text-[13px] tracking-[0.01em]'
            >Coverage</h1>
            <p 
            className="body text-[12px] font-medium text-grey-body"
            >Japan, Singapore, South Korea, China</p>
        </div>

    </div>
 <div className=' border-b-[1px] border-grey100 pb-[20px]'>
    <div className="About w-[470px]">
        <h1 
        className="title text-[21px] font-semibold text-grey-header mb-[20px]">
        About the seller
        </h1>
        <div className="flex justify-between ">
        <div className="left flex flex-col gap-[20px]">
       <div className="country">
        <p className='text-[13px] text-grey-body font-semibold '>From</p>
        <small className='text-grey-header text-[12px] '>Portugal</small>
       </div>

       <div className="reponseTime">
        <p className='text-[13px] text-grey-body font-semibold '>Avg. response time</p>
        <small className='text-grey-header text-[12px] '>4 days</small>
       </div>      
       </div>
       
        <div className="right flex flex-col gap-[20px]">       
        <div className="mem">
        <p className='text-[13px] text-grey-body font-semibold '>Member since</p>
        <small className='text-grey-header text-[12px] '>Feb 2021</small>
        </div>

       <div className="language">
        <p className='text-[13px] text-grey-body font-semibold '>Languages</p>
        <small className='text-grey-header text-[12px] '>English, Portuguese</small>
        </div>
       </div>
       </div>
    </div>
    </div>       
    <div className="desc pt-[20px] whitespace-pre-line text-[13px] text-grey-body mb-[100px] leading-[21px] trakcing-[0.01em]">
    <p 
    className='text-justify '>A professional with more than 12 years of professional experience in petrochemical, manufacturing, construction, consultancy & customer services industry and trainings, strong grip on documentation, implementation, continual improvement & auditing of ISO 45001, ISO 14001, ISO 9001, ISO 22000 and Six Sigma Methodology in the organizations.
    <br/><br/>
    I am working as a consultant to help Organizations to build their Quality, Environmental, Occupational Health & Safety and Food Safety Management Systems since 10 Years with organizations in food, manufacturing, power plant & construction sector.
    </p>
    </div>
<Order/>

</div>
    
  )
}
