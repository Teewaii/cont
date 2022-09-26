import React from 'react'
import logo from '../../img/Logo.svg'

export default function top() {
    return (
        <div className=' container py-[33px] border-solid border-2 border-sky-500 flex justify-between'>
            <div className="block w-[234px] pr[328.5px]">
                <img  src={logo} alt="" />
            </div>

            <div className="flex flex-row">
                <ul className="flex gap-[41px]">
                    <li>Conversations</li>
                    <li>Calender</li>
                </ul>
            </div>
        </div>
    )
}
