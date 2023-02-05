import React, { useState, useEffect } from "react";
import { faUser, faLocationDot, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import OopsImg from "../pages/media/images/pngegg.png";

function Search() {
    const { data: session } = useSession();

    const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
    const [places, setPlaces] = useState([]);

    const options = {
        params: {
            latitude: "12.873561",
            longitude: "74.845844",
        },
        headers: {
            "X-RapidAPI-Key": "58bbc898ccmsh113e658b8f2033ap17f88ajsnf1eedfe3f8e7",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
    };

    const getPlacesData = async () => {
        try {
            const {
                data: { data },
            } = await axios.get(URL, options);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPlacesData().then((data) => {
            setPlaces(data);
        });
    }, []);

    return (
        <div className="bg-brand bg-img min-h-screen flex flex-col items-center  p-4 md:px-16">
            {session ? (
                <>
                    <div className="flex items-center w-full justify-between">
                        <Link href="/search" as="/search">
                            <h1 className="text-2xl md:text-4xl font-colvet">eatables.</h1>
                        </Link>
                        {/* <div className="group relative inline-block"> */}
                        <Link
                            href="/userprofile"
                            as="/userprofile"
                            className="text-2xl font-poppy flex items-center space-x-2"
                        >
                            <h1 className="hidden md:block font-medium text-lg">{session.user.name}</h1>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        {/* <div className="hidden md:absolute top-full left-1/2 z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                                Your Profile
                            </div> */}
                        {/* </div> */}
                    </div>
                    <div className="grid gap-3 grid-cols-1 w-full pt-32 md:pt-[15rem] space-y-0 place-items-center">
                        <div className="flex relative w-full md:w-2/4">
                            <input
                                className="border-none outline-none w-full md:mx-w-2/4 text-lg md:text-2xl py-3 md:px-44 mb-3 md:py-4 text-center placeholder:font-poppy placeholder:opacity-80 bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="Fudopia, Mars"
                                type="text"
                            />

                            {/* <button onClick={showFilterModal} className="px-6 py-3 mb-3 bg-off-brand">
                                <FontAwesomeIcon className="text-2xl text-center" icon={faFilter} />
                            </button>

                            <button className="px-6 py-3 mb-3 bg-off-brand hover:bg-black hover:text-white duration-300">
                                <FontAwesomeIcon className="text-2xl text-center" icon={faSearch} />
                            </button> */}
                        </div>
                        <h1 className="text-left font-poppy">
                            nearby hotels <FontAwesomeIcon icon={faLocationDot} />
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                            {places != undefined ? (
                                places.map((items, key) => {
                                    return items.name == undefined ? (
                                        ""
                                    ) : items.rating >= 4.1 ? (
                                        <button
                                            key={key}
                                            type="button"
                                            className="py-2 px-4 bg-btn-black capitalize font-poppy text-center text-white rounded-md hover:bg-black duration-300"
                                        >
                                            {items.name}
                                        </button>
                                    ) : (
                                        ""
                                    );
                                })
                            ) : (
                                <div className="flex flex-col items-center justify-center">
                                    <p>something went wrong!</p>
                                    <p>Check apps location access.</p>
                                </div>
                            )}
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                            {places.map((items, key) => {
                                return items.name == undefined ? (
                                    ""
                                ) : items.rating >= 4.1 ? (
                                    <button
                                        key={key}
                                        type="button"
                                        className="py-2 px-4 bg-btn-black capitalize font-poppy text-center text-white rounded-md hover:bg-black duration-300"
                                    >
                                        {items.name}
                                    </button>
                                ) : (
                                    ""
                                );
                            })}
                        </div> */}
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-screen flex-col">
                    <Image width={1080} height={1080} className="w-64 pb-4" src={OopsImg}></Image>
                    <h1 className="text-lg font-poppy pb-5 text-center">Oops! you must be logged in to view this page!</h1>
                    <Link href="/" as="/" className="py-2 px-8 bg-dense rounded-lg text-md font-poppy text-white">
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Search;
