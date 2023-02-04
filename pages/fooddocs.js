import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
function FoodDocs() {
    const { data: session } = useSession();

    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("female");
    const [activityLevel, setActivityLevel] = useState("sedentary");
    const [result, setResult] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let BMR;

        if (gender === "female") {
            BMR = 655 + 9.6 * weight + 1.8 * age;
        } else {
            BMR = 66 + 13.7 * weight + 5 * age;
        }

        let factor;
        if (activityLevel === "sedentary") {
            factor = 1.2;
        } else if (activityLevel === "light") {
            factor = 1.375;
        } else if (activityLevel === "moderate") {
            factor = 1.55;
        } else if (activityLevel === "active") {
            factor = 1.725;
        } else {
            factor = 1.9;
        }

        setResult(Math.round(BMR * factor));
    };

    return (
        <>
            {session ? (
                <div className="bg-brand bg-img w-full flex flex-col items-center py-4 px-4 md:py-0 md:px-16 min-h-screen">
                    <Link href="/userprofile" className="flex flex-row items-center w-full pt-1 md:pt-8">
                        <Image
                            alt="user profile"
                            width={1080}
                            height={1080}
                            className="rounded-full border-black border-2 md:border-[3px] shadow-2xl w-12 h-12 md:w-16 md:h-16 object-cover"
                            src={session.user.image}
                        />
                        <div className="flex flex-col pl-2 md:pl-3">
                            <h1 className="font-poppy text-md md:text-xl font-semibold text-center">{session.user.name}</h1>
                            <h2 className="font-poppy text-sm md:text-sm font-medium lowercase">@{session.user.name}</h2>
                        </div>
                    </Link>

                    <form onSubmit={handleSubmit} className="mt-20 md:mt-40">
                        <h1 className="text-xl font-poppy text-center pb-4">Check how much kcals you need!</h1>
                        <div className="w-full flex flex-col items-center space-y-3">
                            <input
                                className="border-none outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense placeholder:text-lg font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="enter your age"
                                type="text"
                                autoComplete="off"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />

                            <input
                                className="border-none outline-none text-xl md:text-2xl px-6 py-3 placeholder:opacity-70 text-center placeholder:font-poppy bg-off-brand placeholder:text-dense placeholder:text-lg font-poppy hover:placeholder:-translate-y-20 placeholder:duration-[0.5s]"
                                placeholder="weight in Kgs."
                                type="text"
                                autoComplete="off"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <select
                                id="gender"
                                className="bg-off-brand py-2 px-6 font-poppy outline-none"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <select
                                id="activity-level"
                                className="bg-off-brand py-2 px-6 font-poppy outline-none"
                                value={activityLevel}
                                onChange={(e) => setActivityLevel(e.target.value)}
                            >
                                <option value="sedentary">Sedentary</option>
                                <option value="light">Light</option>
                                <option value="moderate">Moderate</option>
                                <option value="active">Active</option>
                                <option value="very-active">Very Active</option>
                            </select>

                            <button
                                className="py-[0.50rem] md:py-[0.50rem] bg-dense  text-white px-9 md:px-6 text-md font-poppy rounded-md hover:bg-dense duration-500"
                                type="submit"
                            >
                                Calculate
                            </button>
                        </div>
                    </form>
                    {result !== 0 && (
                        <p className="text-xl font-poppy pt-8 text-center">
                            Your daily calorie needs are approximately<span className="text-2xl font-bold "> {result} </span>
                            calories.
                        </p>
                    )}
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen flex-col bg-img">
                    <h1 className="text-lg font-poppy pb-5">Oops! you must be logged in to view this page!</h1>

                    <Link href="/" as="/" className="py-2 px-8 bg-dense rounded-lg text-md font-poppy text-white">
                        Login
                    </Link>
                </div>
            )}
        </>
    );
}

export default FoodDocs;
