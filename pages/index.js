import Link from "next/link";
import React from "react";
import Footer from "./footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { getProviders, signIn } from "next-auth/react";

function Login() {
    const router = useRouter();

    const [show, setShow] = useState(false);

    setTimeout(() => {
        setShow(false);
    }, 6000);

    const [login, setLogIn] = useState({
        username: "",
        password: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setLogIn((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const userLogin = () => {
        if (login.username === "" || login.password === "") {
            setShow(true);
        } else {
            router.push("/userprofile");
        }
    };

    return (
        <>
            {show == true ? (
                <div className="py-2 px-6 rounded-sm text-white bg-red-500 absolute z-50 shadow-xl flex items-center justify-center space-x-2 bottom-14 md:bottom-0 m-3">
                    <h1 className="text-sm md:text-lg font-poppy">Incorrect login details</h1>
                    <button
                        className="text-xl md:text-2xl"
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            ) : (
                ""
            )}

            <div className="bg-brand bg-img min-h-screen grid">
                <div className="flex flex-col items-center justify-center">
                    <form className="flex flex-col items-center justify-center py-16 md:py-36 md:space-y-4 space-y-2">
                        <div className="flex flex-col items-center pb-2 md:pb-4">
                            <Link href="/" as="/" className="text-5xl md:text-6xl font-colvet">
                                eatables.
                            </Link>
                            <p className="font-poppy text-sm md:text-md">Find your next favorite.</p>
                        </div>
                        <div className="grid  md:grid-rows-2 grid-cols-1 gap-3 mx-4">
                            <input
                                className="border-dense outline-none text-xl md:text-2xl px-3 py-3 md:px-24 md:py-4 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="username"
                                type="text"
                                name="username"
                                autoComplete="off"
                                onChange={handleChange}
                                value={login.username}
                            />
                            <input
                                className="border-none outline-none text-xl md:text-2xl px-6 py-3 md:px-24 md:py-4 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="password"
                                type="password"
                                name="password"
                                autoComplete="off"
                                onChange={handleChange}
                                value={login.password}
                            />
                        </div>
                        <button
                            onClick={userLogin}
                            className="py-[0.50rem] md:py-[0.70rem] bg-dense text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500 "
                            type="button"
                        >
                            explore
                        </button>
                        <h1 className="font-poppy text-sm">OR</h1>
                        <div className="flex items-center justify-center space-x-3">
                            <Link
                                href="/api/auth/signin"
                                className=" bg-dense text-white px-4 py-2 text-sm font-poppy rounded-md hover:bg-dense duration-500"
                                type="button"
                            >
                                other sign in options
                            </Link>
                        </div>
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
