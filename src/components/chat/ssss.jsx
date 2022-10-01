<div className="flex flex-col justify-end h-[20rem] min-w-[600px] bg-hero-bg bg-no-repeat bg-contain border-[1px] relative border-grey100 rounded-[5px]">
    {/* <img class='min-w-[600px]' src={hero} alt="card-hero-image" /> */}

    <div className="profile flex border-2">
        <img className='rounded-full border-[5px] border-[white] w-[130px] h-[130px] ml-[20px] ' src={headShot} alt="" />

        <div className="userdata flex items-end justify-between gap-[10px] ml-[30px] mb-[25px] ">

            <div className="flex justify-between border-2 border-blue">

                <div className=' flex flex-col items-start gap-[20px] bg-grey100 '>
                    <div className="info flex flex-col gap-[4px] ">
                        <h1 className="text-[21px] text-grey-header font-[800] name">Carlos Cruz</h1>
                        <span className='text-[12px] text-grey300'>Health & Safety and Food Safety auditor </span>
                    </div>
                    <p className='text-[12px] text-grey300 flex items-center justify-center  '><span className='inline-block mr-[10px]'>
                        <img src={location} alt="location" /></span>Lisbon, Portugal</p>
                </div>
                <div className='bg-blue ' >
                    <p className="flex bg-grey100 items-center cursor-pointer px-[20px] py-[15px] rounded-[3px] font-bold text-grey-header text-[12px] gap-[10px] mr-[20px] h-[40px]  hover:bg-[white] hover:ease-in duration-150 shortlist"
                    >  <img className='' src={shortlist} alt="" />Shortlist</p>
                </div>

            </div>
        </div>
    </div>
</div >