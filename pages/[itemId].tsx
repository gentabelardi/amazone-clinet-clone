import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../components/molecules/Navbar';
import useStore from '../utils/store';

export default function itemId(props: any) {
    const [currentContent, setCurrentContent] = useState(props.items.image)
    const [price, setPrice] = useState(6.00)
    const addToCart = useStore(state => state.addToCart)

    function handleAddToCart() {
        if (props.items == null) {
            return null
        }
        addToCart(props.items)
    }
    return (
        <div>
            <Navbar />
            <main>
                <div className="flex px-5 py-2.5">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex hover:underline items-center text-xs font-medium text-black/50 hover:text-gray-900 ">
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <a href="#" className="inline-flex hover:underline items-center text-xs font-medium text-black/50 hover:text-gray-900 ">
                                        Computer & electronic
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <a href="#" className="inline-flex hover:underline items-center text-xs font-medium text-black/50 hover:text-gray-900 ">
                                        Case
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className=" flex border-b border-black/20">
                    <div className="sticky top-0  flex p-5 py-2 pr-0 flex-col w-1/2">
                        <div className="relative">
                            <button className="absolute top-2 right-2 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z" /></svg>
                            </button>

                            <img src={currentContent} alt="" className="object-cover h-[400px]" />
                        </div>
                        <div className="grid grid-cols-4 mt-3 gap-4">
                            {[1, 2, 3, 4, 2].map(i => {
                                return <div onMouseOver={() => setCurrentContent(`./dummy/dummy-${i}.jpg`)} className="h-24 border-2 rounded border-black/30 hover:border-blue-500 hover:border-2 ">
                                    <img src={`./dummy/dummy-${i}.jpg`} alt="" className="w-full  rounded h-full object-cover " />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="flex w-full ">
                        <div className="flex flex-col  p-5  flex-auto ">
                            <h1 className="text-black text-2xl ">{props.items.title}</h1>
                            <div className="flex">
                                <Link href="/">
                                    <a className="text-blue-600 text-sm hover:underline">Brad: Hello</a>
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center jusity-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <Link href="/">
                                    <a className="text-blue-600 text-sm hover:underline">{props.items.rating.rate} ratings</a>
                                </Link>
                                <span className="mx-2">|</span>
                                <Link href="/">
                                    <a className="text-blue-600 text-sm hover:underline">60 answer question</a>
                                </Link>
                            </div>
                            <div className="flex items-start mt-8 space-x-0.5">
                                <span className="text-sm">$</span>
                                <h1 className="text-3xl ">16</h1>
                                <span className="text-sm">99</span>
                            </div>
                            <div className="flex flex-col mt-3">
                                <h1 className="text-sm text-black/50">Color:
                                    <span className="text-black ml-1 font-bold">Black</span>
                                </h1>
                                <div className="grid grid-cols-12 mt-2 gap-2">
                                    {[1, 2, 3, 4, 2, 1, 2, 3, 4, 2].map(i => {
                                        return <div onMouseOver={() => setCurrentContent(`./dummy/dummy-${i}.jpg`)} className="h-12 border rounded border-black/50 ">
                                            <img src={`./dummy/dummy-${i}.jpg`} alt="" className="w-full  rounded h-full object-cover " />
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col mt-5">
                                <div className="grid py-0.5 grid-cols-4 w-full ">
                                    <div className="flex ">
                                        <h1 className="text-sm font-bold ">
                                            Compatible Devices</h1>
                                    </div>
                                    <div className="flex col-span-3">
                                        <h1 className="text-sm ">IPad 7th Generation, IPad 10.2 inch 2019</h1>
                                    </div>
                                </div>
                                <div className="grid py-0.5 grid-cols-4 w-full ">
                                    <div className="flex ">
                                        <h1 className="text-sm font-bold ">
                                            Compatible Phone Models</h1>
                                    </div>
                                    <div className="flex col-span-3">
                                        <h1 className="text-sm ">IPad 7th Generation 10.2 inch 2019, IPad 8th Generation 10.2 inch 2020, IPad 9th Generation 10.2 inch 2021</h1>
                                    </div>
                                </div>
                                <div className="grid py-0.5 grid-cols-4 w-full ">
                                    <div className="flex ">
                                        <h1 className="text-sm font-bold ">
                                            Shell Type	</h1>
                                    </div>
                                    <div className="flex col-span-3">
                                        <h1 className="text-sm ">Hand</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mt-5">
                                <h1 className="text-md text-black font-bold">About this item
                                </h1>
                                <ul className="list-disc pl-5 mt-1">
                                    <li className="text-sm ">
                                        {props.items.description}
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col p-3 w-[90%]">
                            <div className="flex flex-col rounded-lg border p-3 border-black/20">
                                <div className="flex items-start  space-x-0.5">
                                    <span className="text-sm">$</span>
                                    <h1 className="text-3xl ">16</h1>
                                    <span className="text-sm">99</span>
                                </div>
                                <span className="text-xs text-black/60">
                                    $30.57 Shipping & Import Fees Deposit to Indonesis
                                </span>
                                <div className="flex">
                                    <select id="countries" className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1">
                                        <option selected>1</option>
                                        <option value="US">2</option>
                                        <option value="CA">3</option>
                                        <option value="FR">4</option>
                                        <option value="DE">5</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-2 mt-2">
                                    <button onClick={handleAddToCart} className="text-sm p-3 py-2 bg-yellow-300 rounded-full">Add to cart</button>

                                    <button className="text-sm p-3 py-2 bg-orange-400 rounded-full">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" p-5 border-b border-black/20">
                    <h1 className="text-lg font-bold text-orange-500 mb-2">4 stars and above</h1>
                    <Swiper slidesPerView={7}
                        spaceBetween={10} navigation={true} modules={[Navigation]} >
                        {[1, 2, 3, 4, 2, 3, 4, 1, 2, 3, 4, 2, 3, 4].map(i => {
                            return <SwiperSlide >
                                <div className="flex flex-col ">
                                    <img src={`./dummy/dummy-${i}.jpg`} alt="" className="h-[200px] w-full object-cover" />
                                    <div className="flex flex-col my-2">
                                        <Link href="#">
                                            <a className=" text-blue-600 overflow-hidden text-clip h-24 hover:underline  text-sm font-semiBold">Azzsy Case for iPad 9th Generation / iPad 8th Generation / iPad 7th Generation (10.2 Inch, 2021/2020/2019 Model), Slim Heavy Duty Shockproof Rugged Protective Case for iPad 10.2 inch,Black</a>
                                        </Link>
                                        <div className="flex mt-2 items-center">
                                            <div className="flex items-center jusity-center">
                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            </div>
                                            <Link href="#">
                                                <a className=" text-blue-600  hover:underline  text-xs font-semiBold">996</a>
                                            </Link>
                                        </div>
                                        <div className="flex items-center mt-2 space-x-0.5">
                                            <span className="text-sm">$</span>
                                            <h1 className="text-xl ">16.29</h1>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}

                    </Swiper>

                </div>
            </main>
        </div >
    )
}


export async function getServerSideProps(context: any) {
    const { itemId } = context.query;
    console.log(itemId)
    const res = await fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(res => res.json())
    return {
        props: {
            items: res
        }, // will be passed to the page component as props
    }
}