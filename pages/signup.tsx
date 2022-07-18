import React from 'react'
import Button from '../components/atoms/Button'

function signUp() {
    return (
        <div className="flex w-full justify-center p-3">
            <div className="flex flex-col items-center w-[350px] justify-center p-1">
                <img src="/logo-black.png" alt="" className="w-24 " />
                <div className="flex flex-col mt-5  px-5 py-5 border border-black/20 rounded-lg">
                    <h1 className="text-3xl  mb-3">Create account</h1>
                    <div className="mb-3 w-full">
                        <label htmlFor="name" className="text-xs font-bold mb-1">Your name</label>
                        <input id="name" type="text" className="w-full focus:outline-none border border-black/40 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 rounded p-1.5 text-sm" />
                    </div>
                    <div className="mb-3 w-full">
                        <label htmlFor="email" className="text-xs font-bold mb-1">Email or mobile phone number</label>
                        <input id="email" type="text" className="w-full focus:outline-none border border-black/40 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 rounded p-1.5 text-sm" />
                    </div>
                    <div className="mb-3 w-full">
                        <label htmlFor="password" className="text-xs font-bold mb-1">Password</label>
                        <input id="password" type="password" className="w-full focus:outline-none border border-black/40 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 rounded p-1.5 text-sm" />
                    </div>
                    <div className="mb-3 w-full">
                        <label htmlFor="repassword" className="text-xs font-bold mb-1">Re-enter password</label>
                        <input id="repassword" type="password" className="w-full focus:outline-none border border-black/40 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 rounded p-1.5 text-sm" />
                    </div>
                    <Button title="continue" />
                    <span className="text-[10px] mt-5">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
                </div>
                <div className="flex flex-col mt-5  w-full items-center ">
                    <span className="text-xs   text-black/50">New to Amazon?</span>
                    <Button title="Signup" />
                </div>

            </div>
        </div>
    )
}

export default signUp
