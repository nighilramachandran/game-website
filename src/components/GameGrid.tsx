import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import gameServices, { FecthGameProps } from "../services/game-services";

const GameGrid = () => {
  const [games, setGames] = useState<FecthGameProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // apiClients.get("/games").then((res) => console.log(res));

    const fetchGames = async () => {
      try {
        await gameServices.getAllGames().then((res) => setGames(res.data));
      } catch (err) {}
    };

    fetchGames();
    return () => {};
  }, []);

  console.log("games", games);

  return <div>GameGrid</div>;
};

export default GameGrid;
