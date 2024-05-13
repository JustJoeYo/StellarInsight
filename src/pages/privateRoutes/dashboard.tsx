import { GameCard } from "../../components/types";
import { GamesArray } from "../../data/data";

function Dashboard() {
  return (
    <div className="bg-white h-full w-screen ">
      <div className="flex flex-row h-full">
        <div className="lg:block hidden bg-[#1b1b1c] w-[456px] h-full p-5">
          <h1 className="text-3xl font-['Light'] flex justify-center">
            Stellar <span className=" text-violet-800">Insight</span>
          </h1>
          <div className="text-4xl font-['Light'] justify-center pt-10 text-gray-400">
            <h2 className="p-2 text-center">BOOST YOUR STATS </h2>{" "}
            <h2 className="bg-violet-800 text-white p-2 text-center">
              TO THE STARS WITH{" "}
            </h2>{" "}
            <h2 className="p-2 text-center">AI COACHING!</h2>
          </div>
          <div className="absolute bottom-0">
            <footer className="w-full text-sm flex">
              <nav
                aria-label="Footer Navigation"
                className="flex gap-5 pb-2 sm:flex-row justify-center items-center text-center align-middle self-center w-full"
              >
                <a href="support" className="font-light text-white">
                  Support
                </a>
                <a href="privacy-policy" className="font-light text-white">
                  Privacy Policy
                </a>
                <a href="tos" className="font-light text-white">
                  Terms & Conditions
                </a>
              </nav>
            </footer>
            <p className="flex-col text-center font-light text-gray-300">
              © 2024 StellarInsight | All Rights Reserved
            </p>
          </div>

          <div className="flex justify-center pt-10">
            <h1 className="text-xl text-center">
              Start by selecting a game and linking your account.
            </h1>
          </div>
        </div>

        <div className="bg-black h-full w-full p-5 flex flex-col">
          <h1 className="text-5xl font-['Light'] flex text-white pb-5 bg-transparent">
            Games
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {GamesArray.map((game) => (
              <GameCard
                key={game.name}
                name={game.name}
                image={game.image}
                functional={game.functional}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
