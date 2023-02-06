import React, { useState, useEffect } from "react";
import { faUser, faLocationDot, faStar, faLeaf, faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import OopsImg from "../pages/media/images/pngegg.png";
import data from "../component/data";

function Search() {
    const { data: session } = useSession();

    const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
    const [places, setPlaces] = useState(data);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [rating, setRating] = useState(0);
    const [type, setType] = useState("");
    if (places == undefined) {
        setPlaces(data);
    }

    // const options = {
    //     params: {
    //         latitude: latitude,
    //         longitude: longitude,
    //     },
    //     headers: {
    //         "X-RapidAPI-Key": "58a6a646e7msh85a242a8db4265fp158cddjsnae6087866e44",
    //         "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    //     },
    // };

    // const getPlacesData = async () => {
    //     try {
    //         const {
    //             data: { data },
    //         } = await axios.get(URL, options);
    //         return data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             setLatitude(position.coords.latitude);
    //             setLongitude(position.coords.longitude);
    //         },
    //         () => {
    //             console.error("Error getting location");
    //         }
    //     );
    // }, []);

    // useEffect(() => {
    //     if (latitude && longitude) {
    //         getPlacesData().then((data) => {
    //             setPlaces(data);
    //         });
    //     }
    // }, [latitude, longitude]);

    const handleRating = (count) => {
        setRating(count);
    };

    const handleType = (selectedType) => {
        setType(selectedType);
    };

    return (
        <div className="bg-brand bg-img min-h-screen flex flex-col items-center p-4 md:px-16">
            {session ? (
                <>
                    <div className="flex items-center w-full justify-between">
                        <Link href="/search" as="/search">
                            <h1 className="text-2xl md:text-4xl font-colvet">eatables.</h1>
                        </Link>
                        <Link
                            href="/userprofile"
                            as="/userprofile"
                            className="text-2xl font-poppy flex items-center space-x-2"
                        >
                            <h1 className="hidden md:block font-medium text-lg">{session.user.name}</h1>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                    <div className="grid gap-3 grid-cols-1 w-full mt-16 md:mt-40 space-y-0 place-items-center">
                        <div className="flex items-center justify-around relative w-full md:w-2/4">
                            <div className="flex items-center justify-center flex-col w-full">
                                <h1 className="font-poppy text-2xl md:text-3xl pb-3 font-bold text-center">
                                    find your favorite!
                                </h1>
                                <input
                                    className="border-none outline-none w-full md:mx-w-2/4 text-lg md:text-2xl py-3 md:px-44 mb-3 md:py-4 text-center placeholder:font-poppy placeholder:opacity-80 bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                    placeholder="Fudopia, Mars"
                                    type="text"
                                />
                                <div className="flex flex-wrap items-center justify-center md:space-x-3 md:space-y-0 space-y-3 flex-col md:flex-row">
                                    <div className="py-3 px-6 md:py-3 md:px-9 bg-off-brand flex items-center justify-center space-x-4 rounded-md">
                                        {[1, 2, 3, 4, 5].map((count) => (
                                            <button
                                                key={count}
                                                className={`text-sm md:text-xl text-white hover:text-red-600 ${
                                                    rating >= count ? "text-red-600" : ""
                                                }`}
                                                onClick={() => handleRating(count)}
                                            >
                                                <FontAwesomeIcon icon={faStar} />
                                            </button>
                                        ))}
                                    </div>
                                    {/* <div className="px-6 py-2 md:py-3 md:px-9 bg-off-brand flex items-center justify-center space-x-4 rounded-md">
                                        <button
                                            className="text-lg md:text-xl font-semibold hover:text-slate-700"
                                            onClick={() => handleType("Vegetarian Friendly")}
                                        >
                                            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
                                            Veg
                                        </button>
                                        <button
                                            className="text-lg md:text-xl font-semibold hover:text-slate-700"
                                            onClick={() => handleType("Non")}
                                        >
                                            <FontAwesomeIcon icon={faDrumstickBite} className="mr-2" />
                                            Non
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <h1 className="text-left font-poppy">
                            nearby hotels <FontAwesomeIcon icon={faLocationDot} />
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full md:w-3/4">
                            {places != undefined ? (
                                places.map((items, key) => {
                                    return items.name == undefined ? (
                                        ""
                                    ) : items.rating >= rating ? (
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
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-screen flex-col">
                    <Image width={1080} height={1080} alt="Login Required Image" className="w-64 pb-4" src={OopsImg}></Image>
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
