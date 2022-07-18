import React from 'react'
import Navbar from '../components/molecules/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import useStore from '../utils/store'


function cart() {
    const { cartItems } = useStore(state => state.cart)
    return (
        <div>
            <Navbar />
            <main >
                <div className="flex">
                    <div className="flex flex-col flex-auto p-3 ">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-bold">Your Shoping cart</h1>
                            <span className="text-sm ">Price</span>
                        </div>
                        {cartItems?.map(i => {
                            console.log(i)
                            return <div key={Math.random()} className="flex mt-2 w-full justify-between items-start">
                                <div className="flex w-2/3">
                                    <div className="flex h-[200px] w-[400px]">
                                        <img src={i.image} className="object-cover w-full h-full " />
                                    </div>
                                    <div className="flex flex-col ml-5">
                                        <Link href={`/${i.id}`}>
                                            <a className=" text-blue-600 overflow-hidden text-clip hover:underline  text-md font-bold">Azzsy Case for iPad 9th Generation / iPad 8th Generation / iPad 7th Generation (10.2 Inch, 2021/2020/2019 Model), Slim Heavy Duty Shockproof Rugged Protective Case for iPad 10.2 inch,Black</a>
                                        </Link>
                                        <p className=" text-black/60   text-xs">Azzsy Case for iPad 9th Generation / iPad 8th Generation / iPad 7th Generation (10.2 Inch, 2021/2020/2019 Model), Slim Heavy Duty Shockproof Rugged Protective Case for iPad 10.2 inch,Black</p>
                                        <div className="flex">
                                            <select id="countries" className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1">
                                                <option selected>Qty : 1</option>
                                                <option value="US">2</option>
                                                <option value="CA">3</option>
                                                <option value="FR">4</option>
                                                <option value="DE">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <h1 className="text-xl text-red-600 font-bold">$20.00</h1>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="flex flex-col w-[500px] p-3 ml-5 ">
                        <div className="flex flex-col  rounded-lg p-3">
                            <h1 className="flex items-center text-black ">Sub total ({cartItems.length} items):
                                <span className="text-lg ml-2 text-white font-bold text-red-600">$92.96</span>
                            </h1>
                            <button className="text-sm p-3 py-2 mt-3  bg-gradient-to-t from-yellow-300 via-yellow-400 rounded border border-orange-900">Purchase to chekout</button>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default cart
