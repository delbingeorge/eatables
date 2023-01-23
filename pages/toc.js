import Link from "next/link";
import Footer from "./footer";

export default function tos() {
    return (
        <>
            <div className="bg-img min-h-screen flex flex-col items-center py-8 px-8 md:py-16 md:px-32 outline-none border-none">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-colvet text-dense pb-8 md:pb-16">eatables.</h1>
                    <div className="font-poppy text-justify leading-4">
                        <p className="font-normal text-lg mb-2">
                            <span className="font-semibold pr-2"> User Agreement:</span>By using the app, users agree to
                            comply with all terms and conditions set forth in this agreement.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Age Restrictions:</span> Users must be at least 18 years of
                            age to use the app.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">User Content: </span>Users are solely responsible for the
                            content they post on the app, including reviews, ratings, and photos. The app reserves the right
                            to remove any content that violates the apps terms of service or is deemed inappropriate.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Copyright: </span>Users agree not to post content that
                            infringes on the copyright of others.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Privacy:</span> The app will collect and use personal
                            information in accordance with its privacy policy.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Changes to Terms and Conditions: </span>The app reserves the
                            right to modify these terms and conditions at any time.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Liability:</span> The app is not liable for any damages
                            arising from the use of the app or the content posted by users.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Disputes:</span> Any disputes arising from the use of the app
                            will be resolved through binding arbitration in accordance with the rules of the American
                            Arbitration Association.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Severability:</span> If any provision of these terms and
                            conditions is found to be invalid or unenforceable, the remaining provisions will remain in
                            effect.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Governing Law: </span>These terms and conditions will be
                            governed by and construed in accordance with the laws of the state of [insert state here].
                        </p>
                        <p className="font-normal text-lg mb-4">
                            <span className="font-semibold pr-2">Contact information: The </span>app provides a way for users
                            to contact the company for any question or concern regarding the terms and conditions or any other
                            matter related to the app
                        </p>
                    </div>
                    <Link
                        href="signup"
                        as="signup"
                        className="py-[0.50rem] md:py-[0.70rem] bg-btn-black text-white px-9 md:px-12 text-xl font-poppy rounded-md hover:bg-dense duration-500"
                        type="button"
                    >
                        sign up
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
