import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Input from '../../atoms/Input'
import { useRouter } from 'next/router'
import useStore from '../../../utils/store'

function Navbar() {
    const showSuggestions = useStore(state => state.showSuggestions)

    return (
        <>
            <div className="flex  bg-[#131921] py-2  items-center px-5">
                <Link href="/">
                    <a className="flex">
                        <Image src="/logo.svg" alt="" width={100} height={35} />
                    </a>
                </Link>
                <button className=" flex items-center p-1 px-2 mx-2 border border-transparent hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(255,255,255,1)" /></svg>
                    <div className="flex flex-col ml-1 items-start">
                        <span className="text-white/80 text-xs font-light ">Deliver to</span>
                        <h1 className="text-white text-sm font-bold ">Indonesia</h1>
                    </div>
                </button>
                <Input />
                <button className=" flex items-center p-1 px-2 ml-2 border border-transparent hover:border-white">
                    <Image src="/united-states.png" alt="" width={28} height={28} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>
                </button>
                <button className=" flex items-end p-1 px-2  border border-transparent hover:border-white">
                    <div className="flex flex-col ml-1 items-start">
                        <span className="text-white/80 text-xs font-light ">Hello, Sign in</span>
                        <h1 className="text-white text-sm font-bold ">Account & list</h1>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>
                </button>
                <button className=" flex items-center p-1 px-2  border border-transparent hover:border-white">
                    <div className="flex flex-col ml-1 items-start">
                        <span className="text-white/80 text-xs font-light ">Returns &</span>
                        <h1 className="text-white text-sm font-bold ">Orders</h1>
                    </div>
                </button>
                <Link href="/cart">
                    <a className=" flex space-x-2 items-end p-1 px-2  border border-transparent hover:border-white">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(255,255,255,1)" /></svg>
                            <span className="top-0 left-7 absolute  w-3 h-3 bg-orange-400  rounded-full"></span>
                        </div>
                        <h1 className="text-white text-sm font-bold ">Cart</h1>
                    </a>
                </Link>

            </div>
            <div className="flex p-1 bg-[#232F3E]">
                <div className="flex">
                    <button className="flex text-white p-2 py-1 items-center space-x-2 border border-transparent hover:border-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" /></svg>
                        <span className="text-sm font-semiBold text-sm">All</span>
                    </button>
                    <Link href="#">
                        <a className="text-white p-2 py-1 text-sm font-semiBold border border-transparent hover:border-white ">Today's Deals</a>
                    </Link>
                    <Link href="#">
                        <a className="text-white p-2 py-1 text-sm font-semiBold border border-transparent hover:border-white ">Customer service</a>
                    </Link>
                    <Link href="#">
                        <a className="text-white p-2 py-1 text-sm font-semiBold border border-transparent hover:border-white ">Registry</a>
                    </Link>
                    <Link href="#">
                        <a className="text-white p-2 py-1 text-sm font-semiBold border border-transparent hover:border-white ">Gift Card</a>
                    </Link>
                    <Link href="/cart">
                        <a className="text-white p-2 py-1 text-sm font-semiBold border border-transparent hover:border-white ">Sell</a>
                    </Link>
                </div>
            </div>
            {showSuggestions ? <div className="absolute top-25 left-0 right-0 h-full overflow-hidden block bg-black/50 z-10"></div>
                : null}

        </>
    )
}

export default Navbar
