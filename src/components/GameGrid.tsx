import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import gameServices, { FecthGameProps, Games } from "../services/game-services";
import { AxiosError } from "axios";
import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error == "" ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      ) : (
        <Text>{error}</Text>
      )}
    </div>
  );
};

export default GameGrid;
