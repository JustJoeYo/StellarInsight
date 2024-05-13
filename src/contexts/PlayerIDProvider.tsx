import React, { useState, ReactNode } from "react";
import { PlayerIDContext } from "./PlayerIDContext";

export const PlayerIDProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [playerID, setPlayerID] = useState("");

  return (
    <PlayerIDContext.Provider value={{ playerID, setPlayerID }}>
      {children}
    </PlayerIDContext.Provider>
  );
};
