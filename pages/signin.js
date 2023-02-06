import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn({ providers }) {
    return (
        <div className="bg-brand bg-img min-h-screen flex items-center justify-center flex-col">
            <div className="flex flex-col items-center pb-2 md:pb-4">
                <h1 className="text-5xl md:text-6xl font-colvet">eatables.</h1>
                <p className="font-poppy text-sm md:text-md">Find your next favorite.</p>
            </div>
            {Object.values(providers).map((provider) => (
                <div className="flex items-center justify-center" key={provider.name}>
                    <button
                        className="text-sm md:text-lg font-poppy px-4 py-3 md:px-8 md:py-3 mt-2 bg-dense text-zinc-100 rounded-xl space-x-1"
                        onClick={() => signIn(provider.id, { callbackUrl: "/userprofile" })}
                    >
                        <FontAwesomeIcon icon={provider.id == "google" ? faGoogle : faTwitter} /> Sign in with
                        <span className="capitalize pl-[2px]">{provider.id}</span>
                    </button>
                </div>
            ))}
            <Link
                href="/"
                className="text-sm md:text-md font-poppy px-4 py-2 md:px-5 md:py-2 mt-8 bg-dense text-zinc-100 rounded-lg space-x-1"
            >
                Go back
            </Link>
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
