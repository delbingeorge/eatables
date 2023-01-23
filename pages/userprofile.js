import { faStar, faBookmark, faFire, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import eatFavImg from "../pages/media/images/eat-fav.png";
import userAvatar from "../pages/media/images/userAvatar.png";
import Saved from "./Saved";

function UserProfile() {
    return (
        <div className="bg-img w-full flex flex-col items-center py-4 px-4 md:py-0 md:px-16 outline-none border-none">
            <div className="flex items-center w-full justify-between md:pt-4">
                <Link href="/search" as="/search">
                    <h1 className="text-3xl md:text-5xl font-colvet">eatables.</h1>
                </Link>
                <div>
                    <Link href="/" as="/" data-tooltip-target="tooltip-default" className="text-3xl">
                        <FontAwesomeIcon className="text-lg md:text-2xl" icon={faRightFromBracket} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full pt-8 md:pt-16">
                <Image
                    alt="user profile"
                    width={1080}
                    className="rounded-full border-black border-4 md:border-8 shadow-2xl w-32 h-32 md:w-44 md:h-44 object-cover"
                    src={userAvatar}
                />
                <h1 className="font-poppy text-2xl md:text-3xl font-semibold pt-4 text-center">Delbin George</h1>
                <h2 className="font-poppy text-lg md:text-xl font-medium">@delbingeorge</h2>

                <div className="flex items-center space-x-2 py-2 px-8 md:px-20 bg-btn-black rounded-lg text-xl my-3">
                    <FontAwesomeIcon className="text-brand" icon={faFire} />
                    <h3 className="font-poppy text-white font-medium text-sm md:text-lg">100 contributions</h3>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4 text-xl my-2 md:my-3 text-dense">
                    <FontAwesomeIcon className="text-sm md:text-xl" icon={faBookmark} />
                    <h3 className="font-poppy font-bold tracking-wider text-sm md:text-xl">YOUR SAVED</h3>
                </div>
                <hr className="h-[1px] bg-dense border-none w-3/4"></hr>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-8 w-full md:w-11/12">
                {Saved.map((items, key) => {
                    return (
                        <button
                            key={key}
                            className="rounded-lg bg-gradient-to-r from-white-op to-black-op py-20 px-3 flex items-center justify-center"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0.1 )), url(${items.bgImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <Image width={1080} className="w-28" src={eatFavImg} />
                                <div>
                                    <h1 className="text-xl font-poppy font-medium text-white">{items.itemName}</h1>

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
        </div>
    );
}

export default UserProfile;
