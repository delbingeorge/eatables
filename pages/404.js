import Image from "next/image";
import Footer from "../component/footer";
import foodNotFound from "../pages/media/images/foodNotFound.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function FourOhFour() {
    return (
        <>
            <div className="bg-img min-h-screen flex flex-col items-center justify-center py-4 px-4 md:px-16">
                <Image width={1080} className="w-[35rem]" alt="Page Not Found" src={foodNotFound} />
                <h1 className="text-xl md:text-xl font-poppy text-dense font-medium text-center my-5">
                    <span className="line-through">Page</span> Food Not Found
                </h1>
                <Link href="/" as="/" className="py-3 px-8 bg-dense rounded-lg text-md font-poppy font-semibold text-white">
                    <FontAwesomeIcon icon={faHome} /> Go Home
                </Link>
            </div>
            <Footer />
        </>
    );
}
