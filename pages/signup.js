import { faCheckCircle, faUser, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Footer from "./footer";

function CreateAccount() {
    const router = useRouter();

    const [show, setShow] = useState(false);
    const [signup, setSignUp] = useState({
        "full-name": "",
        username: "",
        "mail-address": "",
        password: "",
        "confirm-password": "",
    });

    setTimeout(() => {
        setShow(false);
    }, 6000);

    function handleChange(event) {
        const { name, value } = event.target;
        setSignUp((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const userSignUp = () => {
        if (
            signup["full-name"] === "" ||
            signup.username === "" ||
            signup["mail-address"] === "" ||
            signup.password === "" ||
            signup["confirm-password"] === ""
        ) {
            setShow(true);
        } else {
            router.push("/");
        }
    };

    {
        show == true ? (
            <div className="py-2 px-6 rounded-sm text-white bg-red-500 absolute z-50 shadow-xl flex items-center justify-center space-x-2 top-0 md:bottom-0 m-3">
                <h1 className="text-lg font-poppy">Incorrect details</h1>
                <button
                    className="text-2xl"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
        ) : (
            ""
        );
    }

    return (
        <>
            {show == true ? (
                <div className="py-2 px-6 rounded-sm text-white bg-red-500 absolute z-50 shadow-xl flex items-center justify-center space-x-4 bottom-0 m-3">
                    <h1 className="text-sm md:text-lg font-poppy">Incorrect signup details</h1>
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
            <div className="bg-brand bg-img min-h-screen flex flex-col items-center py-4 px-4 md:px-16">
                <div className="flex items-center w-full justify-between md:pt-4">
                    <div className="">
                        <div className="flex items-center">
                            <FontAwesomeIcon className="text-sm md:text-lg" icon={faUser} />
                            <h2 className="pl-1 md:pl-2 font-poppy font-medium text-sm md:text-lg">create account</h2>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col items-center justify-center py-6  md:py-28 md:space-y-4 space-y-2">
                    <div className="flex flex-col items-center pb-2 md:pb-4">
                        <Link href="/" as="/" className="outline-none text-5xl md:text-6xl font-colvet">
                            eatables.
                        </Link>
                        <p className="font-poppy text-sm md:text-md">Find your next favorite.</p>
                    </div>
                    <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-3">
                        <input
                            className="border-none outline-none text-xl md:text-2xl px-3 py-3  placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s] md:col-span-2"
                            placeholder="fullname"
                            type="text"
                            name="full-name"
                            autoComplete="off"
                            onChange={handleChange}
                            value={signup["full-name"]}
                        />
                        <input
                            className={
                                false
                                    ? "border-none outline-none text-xl md:text-2xl px-3 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-red-500 font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s] placeholder:text-dense text-white"
                                    : "border-none outline-none text-xl md:text-2xl px-3 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            }
                            placeholder="username"
                            maxLength={15}
                            minLength={4}
                            type="text"
                            name="username"
                            autoComplete="off"
                            onChange={handleChange}
                            value={signup.username}
                        />
                        <input
                            className="border-none outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="email"
                            type="email"
                            name="mail-address"
                            autoComplete="off"
                            onChange={handleChange}
                            value={signup["mail-address"]}
                        />
                        <input
                            className="border-none outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={signup.password}
                        />
                        <input
                            className="border-none  outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="confirm"
                            type="password"
                            name="confirm-password"
                            onChange={handleChange}
                            value={signup["confirm-password"]}
                        />
                    </div>
                    {signup.password != "" && signup["confirm-password"] == "" ? (
                        <p className="text-sm text-center md:text-lg font-poppy">
                            By signing up, you agree to all of our{" "}
                            <a href="#" className="underline">
                                terms and conditions
                            </a>
                            .
                        </p>
                    ) : signup.password != "" && signup["confirm-password"] != "" ? (
                        signup.password === signup["confirm-password"] ? (
                            <div>
                                <p className="text-sm text-center md:text-lg font-poppy">
                                    <FontAwesomeIcon className="pr-2" icon={faCheckCircle} />
                                    Password Matched!
                                </p>
                                <p className="text-sm text-center md:text-lg font-poppy">
                                    By signing up, you agree to all of our
                                    <a href="#" className="underline">
                                        terms and conditions
                                    </a>
                                    .
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-center md:text-lg font-poppy">
                                Oops! Password does not match. Please re-enter your password.
                            </p>
                        )
                    ) : (
                        <p className="text-sm text-center md:text-lg font-poppy">
                            By signing up, you agree to all of our{" "}
                            <Link href="toc" as="toc" className="underline">
                                terms and conditions
                            </Link>
                            .
                        </p>
                    )}
                    <button
                        // href="/"
                        // as="/"
                        className="py-[0.50rem] md:py-[0.70rem] bg-dense  text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500"
                        type="button"
                        onClick={userSignUp}
                    >
                        sign up
                    </button>
                    <p className="text-sm text-center md:text-lg font-poppy">
                        have an account?
                        <Link href="/" as="/" className="underline pl-1">
                            Log In
                        </Link>
                        .
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default CreateAccount;
