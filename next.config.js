/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["pbs.twimg.com", "lh3.googleusercontent.com", "cdn-icons-png.flaticon.com"],
    },
    env: {
<<<<<<< HEAD
        NEXTAUTH_URL: "https://youreatables.vercel.app",
=======
        NEXTAUTH_URL: "https://eatables.vercel.app",
>>>>>>> e17d686ad66d612ce9615b947ddd704348301872
        NEXTAUTH_SECRET: "b951d936b72a79179b2a9b72ddff9822",
    },
};

module.exports = nextConfig;
