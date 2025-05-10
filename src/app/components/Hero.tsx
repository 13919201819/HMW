// const Hero = () => {
//     return (
//       <section className="w-full flex flex-col items-center text-center pt-[12.5rem] px-6">
//         {/* Main Heading */}
//         <h1 className="max-w-3xl text-4xl font-bold leading-snug text-white md:text-5xl">
//           Best <span className="text-white">Entrepreneurship Podcasts</span> of{" "}
//           <span className="font-bold text-orange-500">Y Combinator’s </span>Entrepreneurs
//         </h1>
  
//         {/* Buttons */}
//         <div className="flex gap-6 mt-6">
//           <button className="px-6 py-3 font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600">
//             Book slot
//           </button>
//           <button className="px-6 py-3 font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600">
//             Listen
//           </button>
//         </div>
//       </section>
//     );
//   };
  
//   export default Hero;
  

const Hero = () => {
  return (
      <section className="w-full flex flex-col items-center text-center pt-[12.5rem] px-6">
          {/* Main Heading with Proper Padding & Line Breaks */}
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.3] text-white md:text-5xl">
              Best <span className="px-1" > entrepreneurship  podcasts</span> <br />
              of <span className="px-1 text-orange-500"> Y  Combinator’s </span> 
              <span className="px-1"> entrepreneurs</span>
          </h1>

          {/* Spacing between Heading & Buttons */}
          <div className="flex gap-8 mt-12">
              {/* Buttons with Equal Size & Proper Padding */}
              <button className="w-48 px-6 py-4 font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600">
                  Book slot
              </button>
              <button className="w-48 px-6 py-4 font-semibold text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600">
                  Listen
              </button>
          </div>
      </section>
  );
};

export default Hero;


