import Hero from "./components/Hero";
import TrendingEpisodes from "./components/TrendingEpisodes";
import Result from "./components/Result";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Hero />
            <TrendingEpisodes />
            <Result />
        </main>
    );
}
  
