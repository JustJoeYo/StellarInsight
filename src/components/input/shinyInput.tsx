import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerIDContext } from "../../contexts/PlayerIDContext";

type ShinyInputProps = {
  placeholder: string;
};

const ShinyInput: React.FC<ShinyInputProps> = ({ placeholder }) => {
  const { setPlayerID } = useContext(PlayerIDContext);
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const inputElement = event.currentTarget as HTMLInputElement;
      const newPlayerID = inputElement.value;
      setPlayerID(newPlayerID);
      navigate(`./stats/${newPlayerID}`);
    }
  };

  return (
    <motion.div
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileFocus={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 mt-2 mb-2 rounded-md relative radial-gradient min-w-max w-1/3 h-1/6"
    >
      <input
        onKeyDown={handleKeyDown}
        type="game-id"
        id="game-id"
        placeholder={placeholder}
        className="text-neutral-100 z-40 bg-transparent outline-0 tracking-wide font-light h-full w-full block relative linear-mask"
      ></input>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.div>
  );
};

export default ShinyInput;
