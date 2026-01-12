import { createContext, useContext, useEffect, useState } from "react";
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

  const fetchRommsSummary = async () => {
    const response = await API.get("/salas/resumo");

    setRooms(response.data);
    return response.data;
  };

  const fetchInfoRoom = async (id: number) => {
    const response = await API.get(`/salas/${id}/resumo`);

    setInfoRoom(response.data);
    return response.data;
  };

  useEffect(() => {
    fetchRommsSummary();
  }, [rooms]);

  return (
    <RoomContext.Provider
      value={{ rooms, fetchRommsSummary, fetchInfoRoom, infoRoom }}
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
