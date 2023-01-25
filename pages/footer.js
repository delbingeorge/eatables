import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="bg-dense py-8 px-8 md:py-12 lg:py-10 lg:px-16">
            <div className="  lg:flex lg:items-center lg:justify-between py-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    <span className="block text-white">loves to share what you eat?</span>
                    <span className="block text-brand">be a creator now!</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 ">
                    <Link
                        href="/signup"
                        as="/signup"
                        className="py-2 px-8 bg-brand rounded-lg text-md font-poppy font-medium text-dense"
                    >
                        Get started
                    </Link>
                </div>
            </div>
            <div className="text-white flex md:items-center justify-between flex-col md:flex-row">
                <div>
                    <Link href="/" as="/" className="text-4xl md:text-5xl font-colvet text-brand">
                        eatables.
                    </Link>
                    <p className="font-medium font-poppy text-xl py-4">
                        Because every meal<br></br>
                        should be an adventure.
                    </p>
                    <div className="space-x-6 text-xl">
                        <a className="hover:text-brand duration-300" href="https://twitter.com/youreatables">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="hover:text-brand duration-300" href="https://www.instagram.com/youreatables">
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
                        <a className="text-sm" href="https://www.delb.in">
                            About
                        </a>
                        <a className="text-sm" href="https://www.delb.in">
                            Our Story
                        </a>
                        <a className="text-sm" href="https://www.delb.in">
                            Meet the team
                        </a>
                    </nav>
                </div>
                <div className="font-poppy">
                    <h1 className="text-white font-medium font-xl pt-4 pb-2">Helpful Links</h1>
                    <nav className="flex flex-col space-y-2">
                        <a className="text-sm" href="https://www.delb.in">
                            Contact
                        </a>
                        <a className="text-sm" href="https://www.delb.in">
                            FAQ
                        </a>
                        <a className="text-sm" href="https://www.delb.in">
                            Eatables Care
                        </a>
                    </nav>
                </div>
                <div className="font-poppy">
                    <h1 className="text-white font-medium font-xl pt-4 pb-2">Legals</h1>
                    <nav className="flex flex-col space-y-2">
                        <a className="text-sm" href="https://www.delb.in">
                            Privacy Policy
                        </a>
                        <a className="text-sm" href="https://www.delb.in">
                            Terms & Conditions
                        </a>
                        <a className="text-sm" href="https://www.delb.in">
                            Report an issue!
                        </a>
                    </nav>
                </div>
            </div>
            <p className="mt-8 text-xs text-white text-center font-poppy font-medium">© 2023 Eatables Inc.</p>
        </footer>
    );
}

export default Footer;
