import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import gameServices, { FecthGameProps, Games } from "../services/game-services";
import { AxiosError } from "axios";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games } = useGames();
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
