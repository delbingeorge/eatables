import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
const nearby = ["Kankannady", "Lalbagh", "Kodialbail", "Balalbag", "Jyothi"];

function Search() {
    const [search, setSearch] = useState();

    return (
        <div className="bg-img min-h-screen flex flex-col items-center  py-4 px-4 md:px-16">
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
            <div className="grid gap-3 grid-cols-1 pt-28 md:pt-[15rem] space-y-0">
                <input
                    className="border-none outline-none text-xl md:text-2xl px-6 py-3 md:px-44 mb-3 md:py-4 text-center placeholder:opacity-70  placeholder:font-poppy placeholder:opacity-80 bg-off-brand placeholder:text-dense font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                    placeholder="Fudopia, Mars"
                    value={search}
                    type="text"
                />
                <h1 className="text-left font-poppy">
                    nearby locations <FontAwesomeIcon icon={faLocationDot} />
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {nearby.map((items, key) => {
                        return (
                            <button
                                type="button"
                                className="py-2 px-4 bg-btn-black capitalize font-poppy text-center text-white rounded-md hover:bg-black duration-300 "
                                key={key}
                                onClick={() => {
                                    setSearch(items);
                                }}
                            >
                                {items}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;
