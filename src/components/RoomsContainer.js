import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomContext } from "../Context";
import Loading from "./Loading";

export default function RoomsContainer() {
  const { loading, sortedRooms, rooms, ...rest } = useContext(RoomContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rest={rest} rooms={sortedRooms} />
    </>
  );
}
