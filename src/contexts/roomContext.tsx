import { createContext, useContext, useRef, useState } from "react";
import API from "../services/api";
import { Room } from "../utils/interfaces";

interface RoomContextData {
  rooms: Room[];
  infoRoom?: Room;
  fetchRommsSummary: () => Promise<void>;
  fetchInfoRoom: (id: number) => Promise<void>;
}

export const RoomContext = createContext<RoomContextData | undefined>(
  {} as RoomContextData
);

export const RoomProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [infoRoom, setInfoRoom] = useState<Room>();

  const interval = useRef<number | null>(null);

  const fetchRommsSummary = async () => {
    const response = await API.get("/salas/resumo");

    setRooms(response.data);
    return response.data;
  };

  const fetchRommsSummaryInterval = async () => {
    await fetchRommsSummary();

    if (interval.current !== null) clearInterval(interval.current);
    interval.current = setInterval(fetchRommsSummary, 1000 * 5);
  }

  const fetchInfoRoom = async (id: number) => {
    const response = await API.get(`/salas/${id}/resumo`);

    setInfoRoom(response.data);
    return response.data;
  };

  const fetchInfoRoomInterval = async (id: number) => {
    await fetchInfoRoom(id);

    if (interval.current !== null) clearInterval(interval.current);
    interval.current = setInterval(() => fetchInfoRoom(id), 1000 * 5);
  }

  return (
    <RoomContext.Provider
      value={{ rooms, fetchRommsSummary: fetchRommsSummaryInterval, fetchInfoRoom: fetchInfoRoomInterval, infoRoom }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export function useRooms() {
  const context = useContext(RoomContext);
  if (!context) throw new Error("useRoom must be used within a RoomProvider");

  return context;
}
