import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";
import Room from "../components/Room";
import Title from "../components/Title";

export default function FeaturedRooms() {
  const { featuredRooms: rooms, loading } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          rooms.map(room => {
            return <Room key={room.id} room={room} />;
          })
        )}
      </div>
    </section>
  );
}
