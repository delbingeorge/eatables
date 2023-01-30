import React, { useState, useEffect } from "react";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";

function Search() {
    const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
    const [places, setPlaces] = useState([]);
    const [search, setSearch] = useState("");

    const [location, setLocation] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);

    const options = {
        params: {
            latitude: location.lat || "12.873561",
            longitude: location.lng || "74.845844",
        },
        headers: {
            "X-RapidAPI-Key": "0e97b8c780msh87eb09389299fb4p1b3d66jsn67cc0885f34c",
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

    console.log(places);

    return (
        <div className="bg-brand bg-img min-h-screen flex flex-col items-center  py-4 px-4 md:px-16">
            <div className="flex items-center w-full justify-between">
                <Link href="/search" as="/search">
                    <h1 className="text-4xl md:text-5xl font-colvet">eatables.</h1>
                </Link>
                <div>
                    <Link href="/userprofile" as="/userprofile" className="text-2xl font-poppy flex items-center space-x-2">
                        <h1 className="hidden md:block font-semibold">delbingeorge</h1>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
            <input
                className="border-none outline-none text-xl mt-28 md:mt-[15rem] md:text-2xl px-6 py-3 md:px-44 mb-3 md:py-4 text-center placeholder:font-poppy placeholder:opacity-80 bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                placeholder="Fudopia, Mars"
                value={search}
                type="text"
            />
            <div className="grid gap-3 grid-cols-1 pt-2 md:pt-2 space-y-0">
                <h1 className="text-left font-poppy">
                    nearby hotels <FontAwesomeIcon icon={faLocationDot} />
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {places.map((items, key) => {
                        return items.name == undefined ? (
                            ""
                        ) : items.rating >= 4 ? (
                            <button
                                key={key}
                                type="button"
                                className="py-2 px-4 bg-btn-black capitalize font-poppy text-center text-white rounded-md hover:bg-black duration-300"
                                onClick={() => setSearch(items.name)}
                            >
                                {items.name}
                            </button>
                        ) : (
                            ""
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;
