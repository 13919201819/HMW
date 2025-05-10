// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white font-['Poppins']">
//         {/* Navbar at the top */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="px-6 mt-20">{children}</main>

//         {/* Footer at the bottom */}
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Podcast Hub",
    description: "Discover the best entrepreneurship podcasts from Y Combinator entrepreneurs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="text-white bg-black">
                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="max-w-screen-xl px-6 mx-auto mt-20">{children}</main>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}
// Compare this snippet from src/app/components/Footer.tsx:
