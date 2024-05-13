import React from "react";

export const PlayerIDContext = React.createContext({
  playerID: "joe",
  setPlayerID: (id: string) => {},
});
