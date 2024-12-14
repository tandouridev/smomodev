import React from "react";


const description = "Browse our global catalog featuring millions of bestsellers, new releases, and classics — with new audiobooks and ebooks added every week.";
const title = (
    <>
        A library you’ll want
        <br /> to get lost in.
    </>
);

export const Filter = () => {
    return (
        <section className="bg-center bg-no-repeat text-gray-900 dark:bg-gray-900 dark:text-white" >
            
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl  tracking-tight leading-none  md:text-5xl lg:text-6xl">
                {title}
            </h1>
            <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                {description}
            </p>
            <div className="flex justify-center">
            <div>
                <ul className="flex flex-col sm:flex-row  rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2 ">
                    <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white">Bestselling Audiobooks</li>
                    <li className="px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white">New & Trending Ebooks</li>
                    <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white">Fan-Favorite Audiobooks</li>
                </ul>
            </div>
            
            </div>
            </div>
        </section>
    );
};
