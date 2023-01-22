import { faCheckCircle, faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Footer from "./footer";

function CreateAccount() {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [username, setUsername] = useState("");

    return (
        <>
            <div className="bg-img min-h-screen flex flex-col items-center py-4 px-4 md:px-16">
                <div className="flex items-center w-full justify-between md:pt-4">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-colvet">eatables.</h1>

                        <div className="flex items-center">
                            <FontAwesomeIcon className="text-sm md:text-lg" icon={faUser} />
                            <h2 className="pl-1 md:pl-2 font-poppy font-medium text-sm md:text-lg">create account</h2>
                        </div>
                    </div>
                    {/* <div>
                        <button className="text-3xl">
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div> */}
                </div>
                <form className="flex flex-col items-center justify-center pt-24 md:pt-44 md:space-y-4 space-y-2">
                    <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-3">
                        <input
                            className="border-none outline-none text-xl md:text-2xl px-3 py-3 md:px-24 md:py-4 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="username"
                            maxLength={15}
                            minLength={4}
                            type="text"
                            onChange={(uid) => {
                                setUsername(uid.target.value);
                            }}
                        />
                        <input
                            className="border-none outline-none text-xl md:text-2xl px-6 py-3 md:px-24 md:py-4 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="email"
                            type="email"
                        />
                        <input
                            className="border-none outline-none text-xl md:text-2xl px-6 py-3 md:px-24 md:py-4 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="password"
                            type="password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                        <input
                            className="border-none  outline-none text-xl md:text-2xl px-6 py-3 md:px-24 md:py-4 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                            placeholder="confirm"
                            type="password"
                            onChange={(event) => {
                                setPasswordConfirm(event.target.value);
                            }}
                        />
                    </div>
                    {password != "" && passwordConfirm == "" ? (
                        <p className="text-sm text-center md:text-lg font-poppy">
                            By signing up, you agree to all of our{" "}
                            <a href="#" className="underline">
                                terms and conditions
                            </a>
                            .
                        </p>
                    ) : password != "" && passwordConfirm != "" ? (
                        password === passwordConfirm ? (
                            <div>
                                {/* <p className='text-sm text-center md:text-lg font-poppy'>Username must be 4-15 characters.</p> */}
                                <p className="text-sm text-center md:text-lg font-poppy">
                                    {" "}
                                    <FontAwesomeIcon className="pr-2" icon={faCheckCircle} />
                                    Password Matched!
                                </p>
                                <p className="text-sm text-center md:text-lg font-poppy">
                                    By signing up, you agree to all of our{" "}
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
                            <a href="#" className="underline">
                                terms and conditions
                            </a>
                            .
                        </p>
                    )}
                    <Link
                        href="/"
                        as="/"
                        className="py-[0.50rem] md:py-[0.70rem] bg-btn-black text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500"
                        type="button"
                    >
                        sign up
                    </Link>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default CreateAccount;
