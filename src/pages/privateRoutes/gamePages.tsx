import { useLocation } from "react-router-dom";
import { GamesArray } from "../../data/data"; // replace with the actual path to GamesArray
import { Particles, ShinyInput } from "../../components/types";

function GamePages() {
  const location = useLocation();
  const gameNameFromUrl = location.pathname.split("/").pop();

  const game = GamesArray.find(
    (game: { name: string }) =>
      game.name.toLowerCase().replace(/\s+/g, "-") === gameNameFromUrl
  );

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Particles className={"z-0 absolute top-0 left-0 w-screen max-h-full"} />
      <div className="bg-black h-full">
        <div className="flex flex-col justify-center items-center h-1/2 font-['Light']">
          <h1 className="text-5xl">{game && game.name} Stats</h1>
          <h2 className="text-lg">
            View Your Detailed {game && game.name} Stats
          </h2>
          <ShinyInput placeholder={"Enter Your " + game?.name + " ID"} />
        </div>
      </div>
    </div>
  );
}

export default GamePages;
