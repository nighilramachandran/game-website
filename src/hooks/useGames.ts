import { useEffect, useState } from "react";
import gameServices, { Games } from "../services/game-services";
import { AxiosError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        await gameServices.getAllGames().result.then((res) => setGames(res.data.results));
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchGames();
    return () => {
      gameServices.getAllGames().abort;
    };
  }, []);

  return { games, error };
};

export default useGames;
