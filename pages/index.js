import Link from "next/link";
import React from "react";
import Footer from "./footer";

function Login() {
    return (
        <>
            <div className="bg-img min-h-screen grid">
                <div className="flex flex-col items-center justify-center">
                    {/* <h1 className="text-5xl md:text-6xl font-colvet text-dense">eatables.</h1> */}
                    {/* <form className="flex flex-col items-center justify-center space-y-4 my-8">
                        <input
                            className="border-none outline-none text-xl md:text-2xl sm:px-2 py-4 md:px-24 md:py-4 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense placeholder:opacity-70 font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="username"
                            type="text"
                        />
                        <input
                            className="border-none outline-none text-xl md:text-2xl sm:px-2 py-4 md:px-24 md:py-4 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense placeholder:opacity-70 font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="password"
                            type="password"
                        />
                        <Link
                            href="/search"
                            as="/search"
                            className="py-[0.50rem] md:py-[0.70rem] bg-btn-black text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500"
                            type="button"
                        >
                            explore
                        </Link>
                    </form> */}
                    <form className="flex flex-col items-center justify-center py-16 md:py-36 md:space-y-4 space-y-2">
                        <div className="flex flex-col items-center pb-2 md:pb-4">
                            <Link href="/" as="/" className="text-5xl md:text-6xl font-colvet">
                                eatables.
                            </Link>
                            <p className="font-poppy text-sm md:text-md">Find your next favorite.</p>
                        </div>
                        <div className="grid  md:grid-rows-2 grid-cols-1 gap-3 mx-4">
                            <input
                                className="border-none outline-none text-xl md:text-2xl px-3 py-3 md:px-24 md:py-4 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="username"
                                type="text"
                            />
                            <input
                                className="border-none outline-none text-xl md:text-2xl px-6 py-3 md:px-24 md:py-4 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="password"
                                type="password"
                            />
                        </div>

                        <Link
                            href="/search"
                            as="/search"
                            className="py-[0.50rem] md:py-[0.70rem] bg-btn-black text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500"
                            type="button"
                        >
                            explore
                        </Link>
                    </form>
                    <div className="md:space-x-4 flex flex-col md:flex-row items-center justify-center">
                        {/* <a className="font-poppy md:text-lg underline hover:text-gray-700" href="#">
                            trouble logging in?
                        </a> */}
                        <Link href="/signup" as="/signup" className="font-poppy md:text-lg underline hover:text-gray-700">
                            create account
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
