import Cookies from 'js-cookie';
import Link from 'next/link';
import { Router, useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query';
import dataDummy from '../../../data/search.json'
import useStore from '../../../utils/store';
function useOutsideAlerter(ref: any, state: any) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                state(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref])
}

const preventDefault = (f: any) => (e: any) => {
    e.preventDefault()
    f(e)
}

async function getHistory() {
    const response = await fetch('https://fakestoreapi.com/products').then(res => res.json())
    if (!response) {
        throw new Error('Fecthing Error')
    }
    return await response;
}

async function getCategory() {
    let response = await fetch('https://fakestoreapi.com/products/categories').then(res=>res.json())
    if (!response) {
        throw new Error('Fecthing Error')
    }
    response = ["all"].concat(response)
    return await response;
}




function Input() {
    const history = Cookies.get('historySearch')
        ? JSON.parse(Cookies.get('historySearch'))
        : []
    const [filteredSuggestions, setFilteredSuggestions] = useState(history);
    const router = useRouter()
    const path = router.query
    const [search, setSearch] = useState(path.k)
    const [category, setCategory] = useState("all")
    const openDropdown = useStore(state => state.setShowDropdown)
    const dropdown = useStore(state => state.dropdown)
    const wrapperRef = useRef(null);
    const wrapperRefInput = useRef(null);
    const setShowSuggestions = useStore(state => state.setShowSuggestions)
    const showSuggestions = useStore(state => state.showSuggestions)
    useOutsideAlerter(wrapperRefInput, setShowSuggestions)
    useOutsideAlerter(wrapperRef, openDropdown)
    const dataItems = useQuery("history", getHistory)
    const dataCategory = useQuery("category", getCategory)

    const filteredData = dataItems.data?.filter((el) => {
        if (search === '') {
            return null;
        }
        else {
            if(category == "all") {
                return el.title.toLowerCase().startsWith(search)
            } else if (category == "" || category == null) {
                return null
            } else {
               if(el.category == category) {
                   return el.title.toLowerCase().startsWith(search)
               }
            }
        }
    })


    const handleSearch = preventDefault(() => {
        filteredSuggestions.push(search)
        Cookies.set('historySearch', JSON.stringify([...history, search]));
        if (search?.length == 0 || search == null) {
            router.push(`/`)
        } else {
            router.push(`s?k=${search}`)
        }
        setShowSuggestions(false)
    })


    function handleOnClick() {
        setShowSuggestions(true)
    }

    function handleDeleteHistory(indexI: number) {
        if (indexI > -1) {
            const newHistory = filteredSuggestions.filter((item: string, index: number) => (index !== indexI))
            setFilteredSuggestions(newHistory);
            Cookies.set('historySearch', JSON.stringify(newHistory));
        }
    }


    function hnadleAutoClick() {
        if (typeof window !== 'undefined') {
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 40) {
                } if (event.keyCode == 38) {
                } else {
                    return null
                }
            })
        } else {
            console.log('You are on the server')
        }

    }
    hnadleAutoClick()
    function handleChangeCategory(i: string) {
        setCategory(i)
        openDropdown(false)
    }

    const SuggestionsListComponent = () => {
        return search?.length > 0 ? <ul className="absolute z-50 flexborder border-gray-600/20  flex flex-col bg-white w-full " >
            {filteredData?.map(i => {
                return <div className="flex justify-between space-x-2">
                    <button type="button" className="w-full p-3  w-full font-light flex text-start" key={i.id} onClick={() => setSearch(i.title.toString().toLowerCase())}>
                        <h1>
                            {search}
                            <span className=" font-bold">{i.title.toString().toLowerCase().replace(search, '')}</span>
                        </h1>
                    </button>
                </div>
            })}

        </ul> : filteredSuggestions.length ? (
            <div >
                <ul className="absolute border border-gray-600/20 z-50 flex flex-col bg-white w-full ">
                    {filteredSuggestions.reverse().map((suggestion: string, index: number) => {
                        return (
                            <div className="flex justify-between space-x-2">
                                <Link href={`/s?k=${suggestion}`} >
                                    <a className="font-bold text-[#8F218E] p-2 w-full" key={suggestion} >
                                        {suggestion}

                                        <span className="text-black/50 font-light"> All departemen</span>
                                    </a>
                                </Link>
                                <button type="button" className="p-2" onClick={() => handleDeleteHistory(index)}>x</button>
                            </div>
                        );
                    })}

                </ul>
            </div>
        ) : (
            <div className="absolute border border-gray-600/20  flex flex-col bg-white w-full ">
            </div>
        );
    };
    return (
        <form  onSubmit={handleSearch}  className="z-50 flex-auto relative" action={`s?k=${search}`}>
            <div className="flex  ">
                <div  className="relative h-full">
                    <button onClick={() => openDropdown(!dropdown)} id="dropdown-button" className="flex-shrink-0 h-full  truncate 32 z-50 inline-flex items-center py-3 px-4 text-xs font-medium text-center text-gray-900 bg-gray-100 border border-gray-300   rounded-l hover:bg-gray-200  focus:outline-none focus:ring-gray-300 capitalize" type="button">{category} <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    {dropdown ? <div ref={wrapperRef} id="dropdown" className="absolute border border-black/50 mt-0.5 bg-white z-50 w-44 bg-white max-h-[200px] overflow-y-auto divide-y divide-gray-100 shadow ">
                        {dataCategory?.data?.map(i => {
                            return <ul className="py-.05 " aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" onClick={() => handleChangeCategory(i)} className="block w-full  text-start text-black capitalize text-xs py-2 px-2 hover:bg-gray-100">{i}</button>
                            </li>

                        </ul>
                        })}
                    </div> : null}
                </div>

                <div ref={wrapperRefInput} className="relative w-full">
                    <input onClick={handleOnClick} autoComplete="off" value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" id="search-dropdown" className="block py-2.5 px-2 focus:outline-none w-full z-50 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-[#FEBD69] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" />
                    {showSuggestions ? SuggestionsListComponent() : null}
                    <button type="submit" onClick={handleSearch} className="absolute top-0 right-0 py-2.5 px-3 text-sm font-medium text-white bg-[#FEBD69] rounded-r  hover:bg-[#bg-[#FEBD69] focus:ring-2 focus:outline-none focus:ring-orange-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Input
