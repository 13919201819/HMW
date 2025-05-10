import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 text-white bg-black">
      {/* Main Content */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto text-center md:grid-cols-4 md:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold">Product Building</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Brand</li>
            <li>Customer Relationship</li>
            <li>Engagement</li>
            <li>Funnel</li>
            <li>User Research</li>
            <li>Target Audience</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Ads</li>
            <li>Marketing</li>
            <li>Ownership</li>
            <li>SMM</li>
            <li>Taxes & Compliances</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold">Finance</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Funding</li>
            <li>Series A</li>
            <li>Series B</li>
            <li>Series C</li>
            <li>Public Offering</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold">
            Coming <span className="text-orange-500">Soon</span>
          </h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>AI Consultant</li>
            <li>AI Agreement Maker</li>
            <li>AI Lawsuit</li>
            <li>AI Sales Forecasting</li>
          </ul>
        </div>
      </div>

      {/* Gradient Border */}
      <div className="mt-10 w-full h-[2px] bg-gradient-to-r from-red-500 via-white to-orange-500"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto mt-6 text-sm text-gray-400 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-orange-500">©</span>
          <span>How Money Works 2025</span>
        </div>
        <p>Designed, Developed, and Maintained by CLUMOSS</p>
        <div className="flex mt-4 space-x-4 md:mt-0">
          <FaLinkedinIn className="text-lg text-orange-500 transition cursor-pointer hover:text-orange-600" />
          <FaInstagram className="text-lg text-orange-500 transition cursor-pointer hover:text-orange-600" />
          <FaFacebookF className="text-lg text-orange-500 transition cursor-pointer hover:text-orange-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
