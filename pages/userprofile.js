import {
    faStar,
    faBookmark,
    faGear,
    faFire,
    faRightFromBracket,
    faHome,
    faCookieBite,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Login from ".";
import eatFavImg from "../pages/media/images/eat-fav.png";

const Saved = [
    {
        itemId: 1,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        itemName: "Stick Steak",
        stars: "4",
    },
    {
        itemId: 2,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
        itemName: "Slices of Heaven",
        stars: "3",
    },
    {
        itemId: 3,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
        itemName: "Classic Deviled Eggs",
        stars: "3",
    },
    {
        itemId: 4,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        itemName: "Fruity Surprise",
        stars: "2",
    },
    {
        itemId: 5,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        itemName: "Classic Fruity Surprise",
        stars: "2",
    },
    {
        itemId: 6,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        itemName: "Spicy meatballs",
        stars: "2",
    },
    {
        itemId: 7,
        eatFav: true,
        bgImg: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
        itemName: "Juicy Burger",
        stars: "2",
    },
    {
        itemId: 8,
        eatFav: false,
        bgImg: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
        itemName: "Tasty Tacos",
        stars: "3",
    },
    {
        itemId: 9,
        eatFav: false,
        bgImg: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        itemName: "Potato Pork Cuts",
        stars: "4",
    },
];

function UserProfile() {
    const { data: session } = useSession();
    const [hideNav, setHideNav] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }
        });
    }, []);

    return (
        <>
            {session ? (
                <>
                    <div className="bg-brand bg-img w-full flex flex-col items-center py-4 px-4 md:py-0 md:px-16">
                        <div className="flex items-center w-full justify-between md:pt-4">
                            <Link className="group relative inline-block" href="/search" as="/search">
                                <h1 className="text-3xl md:text-5xl font-colvet">eatables.</h1>
                                <div className="absolute top-full left-1/2 z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                                    Home
                                </div>
                            </Link>
                            {/* <div className="group relative inline-block"> */}
                            <div onClick={signOut}>
                                <Link href="/" as="/" data-tooltip-target="tooltip-default" className="text-3xl">
                                    <FontAwesomeIcon className="text-lg md:text-2xl" icon={faRightFromBracket} />
                                </Link>
                                {/* <div className="absolute top-full left-1/2 z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                                        Sign Out
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full pt-8 md:pt-16">
                            <Image
                                alt="user profile"
                                width={1080}
                                height={1080}
                                className="rounded-full border-black border-4 md:border-[6px] shadow-2xl w-32 h-32 md:w-44 md:h-44 object-cover"
                                src={session.user.image}
                            />
                            <h1 className="font-poppy text-2xl md:text-3xl font-semibold pt-4 text-center">
                                {session.user.name}
                            </h1>
                            <div className="flex space-x-2">
                                <h2 className="font-poppy text-lg md:text-xl font-medium lowercase">@{session.user.name}</h2>
                            </div>

                            <div className="flex items-center space-x-2 py-2 px-8 md:px-20 bg-dense rounded-xl text-xl my-3">
                                <FontAwesomeIcon className="text-brand" icon={faFire} />
                                <h3 className="font-poppy text-white font-medium text-sm md:text-lg">100 contributions</h3>
                            </div>
                            <div className="flex items-center space-x-2 md:space-x-16">
                                <div className="flex items-center space-x-2 md:space-x-3 text-xl md:my-0 py-3 text-dense">
                                    <FontAwesomeIcon className="text-sm md:text-xl" icon={faBookmark} />
                                    <h3 className="font-poppy font-bold tracking-wider text-sm md:text-xl">Your Fav</h3>
                                </div>
                                <Link
                                    href="/fooddocs"
                                    className="flex items-center space-x-2 md:space-x-3 text-xl md:my-0 py-3 text-dense"
                                >
                                    <FontAwesomeIcon className="text-sm md:text-xl" icon={faCookieBite} />
                                    <h3 className="font-poppy font-bold tracking-wider text-sm md:text-xl">Food Doc</h3>
                                </Link>
                            </div>
                            <hr className="h-[1px] bg-dense border-none w-3/4"></hr>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-8 w-full md:w-11/12">
                            {Saved.map((items, key) => {
                                return (
                                    <button
                                        key={key}
                                        className="rounded-lg bg-gradient-to-r from-white-op to-black-op py-20 px-3 flex items-center justify-center hover:scale-[1.02] hover:shadow-xl duration-300"
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0.1 )), url(${items.bgImg})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                        <FontAwesomeIcon className="text-2xl text-white pt-2" icon={faHeart} />
                                            <Image width={1080} className="w-28" alt={items.itemName} src={eatFavImg} />
                                            <div>
                                                <h1 className="text-xl font-poppy font-medium text-white">
                                                    {items.itemName}
                                                </h1>

                                                {items.stars == 1 ? (
                                                    <div className="flex items-center justify-center">
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                    </div>
                                                ) : items.stars == 2 ? (
                                                    <div className="flex items-center justify-center">
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                    </div>
                                                ) : items.stars == 3 ? (
                                                    <div className="flex items-center justify-center">
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                    </div>
                                                ) : items.stars == 4 ? (
                                                    <div className="flex items-center justify-center">
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-white" icon={faStar} />
                                                    </div>
                                                ) : items.stars == 5 ? (
                                                    <div className="flex items-center justify-center">
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                        <FontAwesomeIcon className="text-brand" icon={faStar} />
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div
                            className={`fixed bottom-3 md:bottom-4 w-80 bg-dense py-4 px-10 shadow rounded-xl ${
                                hideNav && "hidden"
                            }`}
                        >
                            <div className="container mx-auto flex justify-between items-center">
                                <Link
                                    href="/search"
                                    as="/search"
                                    className="hover:scale-[1.1] even:hover:rotate-[100deg] duration-500 flex items-center justify-center text-white text-xl md:text-xl"
                                >
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                                <button
                                    className="hover:scale-[1.1] even:hover:rotate-[100deg] duration-500 flex items-center justify-center text-white text-xl md:text-xl"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faGear} />
                                </button>
                                <button
                                    className="hover:scale-[1.2] text-white hover:text-brand even:hover:rotate-[100deg] duration-500 flex items-center justify-center text-xl md:text-xl"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faFire} />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Login />
            )}
        </>
    );
}

export default UserProfile;
