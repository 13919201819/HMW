const ResultsSection = () => {
  return (
      <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 bg-black">
          {/* Heading - Centered */}
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
              Impressive results attained
          </h2>

          {/* Main Content (Left & Right Sections) */}
          <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-12 md:flex-row">
              {/* Left Card */}
              <div className="flex items-center justify-center w-[280px] h-[300px] border rounded-xl border-orange-500 p-6">
                  <p className="text-xl font-semibold text-center text-white">
                      Level up <br /> your <br /> numbers
                  </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-start space-y-4 text-white">
                  {/* Checkbox List */}
                  <div className="space-y-3">
                      <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-5 h-5 border-2 border-orange-500 rounded-full">
                              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                          </span>
                          <p className="text-lg font-semibold">
                              Up to 50% rise in the sales ✅
                          </p>
                      </div>
                      <div className="flex items-center gap-2 opacity-50">
                          <span className="w-5 h-5 border-2 border-gray-500 rounded-full"></span>
                          <p className="text-lg">20% increment in ROI</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-50">
                          <span className="w-5 h-5 border-2 border-gray-500 rounded-full"></span>
                          <p className="text-lg">30% increase customer engagement</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-50">
                          <span className="w-5 h-5 border-2 border-gray-500 rounded-full"></span>
                          <p className="text-lg">Up to 50% rise in the sales</p>
                      </div>
                  </div>

                  {/* Button */}  
                  <button className="px-6 py-3 mt-6 font-semibold text-black bg-orange-500 rounded-lg">
                      Book a call
                  </button>
              </div>
          </div>
      </section>
  );
};

export default ResultsSection;
