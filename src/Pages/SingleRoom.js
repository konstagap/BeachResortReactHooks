import React, { useContext, useState } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default function SingleRoom(props) {
  const { getRoom } = useContext(RoomContext);
  const [state] = useState({
    slug: props.match.params.id
  });
  const room = getRoom(state.slug);
  if (!room) {
    return (
      <div className="error">
        <h3>Room was not found</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  const [heroImg, ...roomImg] = images;
  return (
    <>
      <StyledHero img={heroImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {roomImg.map((item, index) => {
            return <img key={index} src={item} alt={name}></img>;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max capacity:
              {capacity > 1 ? ` ${capacity} people` : ` ${capacity} persone`}
            </h6>
            <h6>{pets ? "pets friendly" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
