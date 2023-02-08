import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="bg-dense p-4 lg:py-12">
            {/* <div className="flex md:items-center md:justify-between md:flex-row flex-col">
                <div>
                    <h1 className=" text-3xl font-bold tracking-tight md:text-4xl block text-white">
                        loves to share what you eat?
                    </h1>
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl block text-brand">be a creator now!</h1>
                </div>
                <Link
                    href="/signup"
                    as="/signup"
                    className="py-2 px-8 bg-brand mt-4 rounded-lg text-md font-poppy font-medium text-dense"
                >
                    Get started
                </Link>
            </div> */}
            <div className="text-white flex md:items-center justify-between flex-col md:flex-row">
                <div>
                    <Link href="/" as="/" className="text-4xl md:text-5xl font-colvet text-brand">
                        eatables.
                    </Link>
                    <p className="font-medium font-poppy text-xl py-4">
                        Because every meal<br></br>
                        should be an adventure.
                    </p>
                    <div className=" text-xl">
                        <a className="hover:text-brand duration-300" href="https://twitter.com/youreatables">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="hover:text-brand duration-300 px-4" href="https://www.instagram.com/youreatables">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="hover:text-brand duration-300" href="https://twitter.com/youreatables">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
                <div className="font-poppy">
                    <h1 className="text-white font-medium font-xl pt-4 pb-2">Company</h1>
                    <nav className="flex flex-col space-y-2">
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            About
                        </a>
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            Our Story
                        </a>
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            Meet the team
                        </a>
                    </nav>
                </div>
                <div className="font-poppy">
                    <h1 className="text-white font-medium font-xl pt-4 pb-2">Helpful Links</h1>
                    <nav className="flex flex-col space-y-2">
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            Contact
                        </a>
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            FAQ
                        </a>
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            eatables Care
                        </a>
                    </nav>
                </div>
                <div className="font-poppy">
                    <h1 className="text-white font-medium font-xl pt-4 pb-2">Legals</h1>
                    <nav className="flex flex-col space-y-2">
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            Privacy Policy
                        </a>
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            Terms & Conditions
                        </a>
                        <a className="text-sm hover:text-brand duration-300" href="https://www.delb.in">
                            Report an issue!
                        </a>
                    </nav>
                </div>
            </div>
            <p className="mt-8 text-xs text-white text-center font-poppy font-medium">© 2023 eatables Inc.</p>
        </footer>
    );
}

export default Footer;
