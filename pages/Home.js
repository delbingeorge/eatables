import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import heyFruits from "../pages/media/images/heyFruits.png";

export default function Home() {
    return (
        <div className="bg-img min-h-screen w-full flex flex-row items-center justify-evenly font-poppy">
            <div>
                <h1 className="text-[3rem] md:text-[3.8rem] font-semibold leading-[1.1]">
                    Find your <br></br>
                    next favorite with <br></br>
                    <span className="font-bold">eatables!</span>
                </h1>
                <div className="w-48 mt-7 flex items-center bg-transparent cursor-pointer font-semibold md:py-3 md:px-6 py-2 px-5 rounded-[0.4rem] border-dense border-[2px] space-x-2 hover:space-x-5 durat">
                    <Link href="/signup" as="/signup">
                        Explore Now
                    </Link>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <Image className="w-[25rem]" width={1080} src={heyFruits} />
        </div>
    );
}
