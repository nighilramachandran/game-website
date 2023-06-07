import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import gameServices, { FecthGameProps, Games } from "../services/game-services";
import { AxiosError } from "axios";

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // apiClients.get("/games").then((res) => console.log(res));

    const fetchGames = async () => {
      try {
        await gameServices.getAllGames().then((res) => setGames(res.data.results));
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchGames();
    return () => {};
  }, []);

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
