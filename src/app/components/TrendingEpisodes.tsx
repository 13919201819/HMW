// const TrendingEpisodes = () => {
//     return (
//         <section className="flex flex-col items-center w-full px-6 pt-20 text-center">
//             {/* Section Heading */}
//             <h2 className="text-3xl font-bold text-white md:text-4xl">
//                 Trending episodes this month
//             </h2>

//             {/* Episode Cards Grid */}
//             <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
//                 {[
//                     { title: "Power of content generation" },
//                     { title: "Relationship engagement" },
//                     { title: "Creating a funnel" },
//                 ].map((episode, index) => (
//                     <div 
//                         key={index} 
//                         className="flex flex-col items-center justify-center p-6 transition border-2 border-orange-500 shadow-lg w-72 h-80 rounded-xl hover:scale-105"
//                     >
//                         {/* Episode Title */}
//                         <h3 className="text-lg font-semibold leading-tight text-white">
//                             {episode.title}
//                         </h3>

//                         {/* Author */}
//                         <p className="mt-4 font-medium text-gray-400">By</p>
//                         <p className="font-semibold text-gray-300">Name Surname</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Watch Button */}
//             <button className="flex items-center gap-2 px-6 py-3 mt-12 font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600">
//                 Watch on 
//                 <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
//             </button>
//         </section>
//     );
// };

// export default TrendingEpisodes;


const TrendingEpisodes = () => {
    return (
        <section className="flex flex-col items-center w-full px-6 pt-20 text-center">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-white md:text-4xl">
                Trending episodes this month
            </h2>

            {/* Episode Cards Grid */}
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
                {[
                    { title: "Power of content generation" },
                    { title: "Relationship engagement" },
                    { title: "Creating a funnel" },
                ].map((episode, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col items-center justify-center p-6 transition bg-black shadow-lg w-80 h-80 rounded-xl hover:scale-105 border-gradient"
                    >
                        {/* Episode Title */}
                        <h3 className="text-lg font-semibold leading-tight text-white">
                            {episode.title}
                        </h3>

                        {/* Author */}
                        <p className="mt-4 font-medium text-gray-400">By</p>
                        <p className="font-semibold text-gray-300">Name Surname</p>
                    </div>
                ))}
            </div>

            {/* Watch Button */}
            <button className="flex items-center gap-2 px-6 py-3 mt-12 font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600">
                Watch on 
                <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
            </button>
        </section>
    );
};

export default TrendingEpisodes;

