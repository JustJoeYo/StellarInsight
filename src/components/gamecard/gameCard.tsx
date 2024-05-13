import { useNavigate } from "react-router-dom";

type Props = { name: string; image: string; functional?: boolean };

function GameCard({ name, image, functional }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    if (!functional) {
      navigate("/work-in-progress");
    } else {
      navigate(`/game/${formattedName}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="mb-6 px-10 md:px-0 lg:p-0 xl:px-0 md:shadow-[gray] md:shadow-lg"
    >
      <label className="text-xl">
        <img className="h-full w-full" src={image}></img>
        <h1 className="pt-2">{name}</h1>
      </label>
    </div>
  );
}

export default GameCard;
