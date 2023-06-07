import apiClients from "./api-clients";

export interface Games {
  id: number;
  name: string;
}

export interface FecthGameProps {
  count: number;
  results: Games[];
}

class GameServices {
  getAllGames() {
    const controller = new AbortController();
    const result = apiClients.get<FecthGameProps>("/games", { signal: controller.signal });
    return { result, abort: () => controller.abort() };
  }
}

export default new GameServices();
