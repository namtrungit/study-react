import React, { useCallback, useState } from "react";
import ImgPlayerLiked from "../../usages/ImgPlayerLiked";

const PlayerLiked = () => {
  const [likedList, setLikedList] = useState(list);
  const likedHandler = useCallback((name, e) => {
    const newList = likedList.map((player) => {
      if (player.name === name) {
        player.liked = e.target.checked;
        return player;
      }
      return player;
    });
    setLikedList(newList);
  }, []);
  return (
    <>
      <div>
        {likedList.map((player) => (
          <ImgPlayerLiked
            key={player.name}
            name={player.name}
            liked={player.liked}
            likedHandler={likedHandler}
          />
        ))}
      </div>
    </>
  );
};

const list = [
  { name: "messi", liked: true },
  { name: "iniesta", liked: true },
  { name: "suarez", liked: true },
  { name: "david-villa", liked: true },
  { name: "ronaldo", liked: true },
  { name: "modric", liked: true },
  { name: "kroos", liked: true },
  { name: "ramos", liked: true },
];
export default PlayerLiked;
