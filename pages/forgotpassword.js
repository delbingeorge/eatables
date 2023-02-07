import Link from "next/link";
import React from "react";
import Footer from "../component/footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ForgotPassword() {
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
                        <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-3">
                            <input
                                className="border-none outline-none text-xl md:text-2xl px-3 py-3  placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="username"
                                type="text"
                                name="full-name"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                            <input
                                className={
                                    false
                                        ? "border-none outline-none text-xl md:text-2xl px-3 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-red-500 font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s] placeholder:text-dense text-white"
                                        : "border-none outline-none text-xl md:text-2xl px-3 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                }
                                placeholder="email"
                                maxLength={15}
                                minLength={4}
                                type="text"
                                name="username"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                            <input
                                className="border-none outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="password"
                                type="password"
                                name="password"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                            <input
                                className="border-none  outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="confirm"
                                type="password"
                                name="confirm-password"
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            onClick={userLogin}
                            className="py-[0.50rem] md:py-[0.70rem] bg-dense text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500 "
                            type="button"
                        >
                            confirm
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ForgotPassword;
