import React from 'react'
import logo from '../../img/Logo.svg'

export default function top() {
    return (
        <div className='flex justify-between bg-blue width-full'>
            <div className="block w-10">
                <img src={logo} alt="" />
            </div>

            <div className="flex">
                <ul>
                    <li>Conversations</li>
                    <li>Calender</li>
                </ul>
            </div>
        </div>
    )
}
