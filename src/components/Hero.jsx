import React from "react";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";
const description =
    "Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment.";
const title = (
    <>
        Read, listen, discover.
        <br /> All in one app.
    </>
);
export const Hero = () => {
    return (
        <section className="text-gray-900 dark:bg-gray-900 dark:text-white">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <FaBookOpen className="mx-auto text-8xl bg-orange-400 py-3 px-4 mb-5 text-white rounded-3xl dark:bg-transparent dark:border-orange-400 border" />
                <h1 className="mb-4 text-4xl  tracking-tight leading-none  md:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                    {description}
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href='#'
                        className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-900 focus:ring-4 border border-transparent dark:hover:border-gray-500 focus:ring-blue-300 dark:focus:ring-blue-900'>
                        Get started
                        <FaArrowRight />
                    </a>
                    <a href='#'
                        className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border border-gray-500 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 dark:text-white dark:hover:text-gray-900'>
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
};