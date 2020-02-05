import React from "react";
import Room from "./Room";

export default function RoomsList({ rooms, rest }) {
  //Filtering by pets and breakfast
  if (rest.pets) {
    rooms = rooms.filter(room => room.pets === true);
  }
  if (rest.breakfast) {
    rooms = rooms.filter(room => room.breakfast === true);
  }
  //filtering by size
  if (rest.minSize > 0 || rest.maxSize < 1000) {
    rooms = rooms.filter(
      room => room.size >= rest.minSize && room.size <= rest.maxSize
    );
  }
  //Filtering rooms by price
  if (rest.price !== 600) {
    rooms = rooms.filter(room => room.price <= rest.price);
  }
  //Filtering rooms by type
  if (rest.type !== "all") {
    rooms = rooms.filter(room => room.type === rest.type);
  }
  //Filtering rooms by capacity
  if (rest.capacity !== 1) {
    rooms = rooms.filter(room => room.capacity >= rest.capacity);
  }
  //rooms by availability
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no match was found</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
