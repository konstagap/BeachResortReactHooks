import React, { useState, useEffect } from "react";
import Items from "./data";

const RoomContext = React.createContext();

function RoomProvider({ children }) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    minSize: 0,
    breakfast: false,
    pets: false
  });

  useEffect(() => {
    const rooms = formatData(Items);
    const featuredRooms = rooms.filter(room => room.featured);
    const maxPrice = Math.max(...rooms.map(item => item.price));
    const maxSize = Math.max(...rooms.map(item => item.size));

    setTimeout(() => {
      setState(state => {
        return {
          ...state,
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize
        };
      });
    }, 3000);
  }, []);

  const getRoom = slug => {
    const room = state.rooms.find(room => room.slug === slug);
    return room;
  };

  const formatData = items => {
    let tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(images => images.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const handleChange = event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  };

  return (
    <RoomContext.Provider value={{ ...state, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
}

export { RoomProvider, RoomContext };
