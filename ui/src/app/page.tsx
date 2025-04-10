import Image from "next/image";
import React from "react";

// Define the type for a player
type Player = {
  name: string;
  image: string;
  dataPlayer: string;
};

// Reusable PlayerCard component
const PlayerCard: React.FC<Player> = ({ name, image, dataPlayer }) => {
  return (
    <div
      className="flex flex-col items-center gap-y-3 p-4 bg-gray-100 rounded-lg shadow-lg"
      data-player={dataPlayer}
      aria-label={`Player card for ${name}`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover shadow-md"
      />
      {/* Name */}
      <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
    </div>
  );
};

export default function Home() {
  const players: Player[] = [
    { name: "Chris Hemsworth", image: "/images/photo_2.jpg", dataPlayer: "Chris_Hemsworth" },
    { name: "Demi Lovato", image: "/images/photo_3.jpg", dataPlayer: "Demi_Lovato" },
    { name: "Ina Garten", image: "/images/photo_5.jpg", dataPlayer: "Ina_Garten" },
    { name: "Isabel Allende", image: "/images/photo_1.jpg", dataPlayer: "Isabel_Allende" },
    { name: "Lamine Yamal", image: "/images/photo_4.jpg", dataPlayer: "Lamine_Yamal" },
  ];

  return (
    <div className="flex flex-col items-center bg-[url('/images/nature-cover.jpg')] bg-cover bg-center bg-no-repeat p-5 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <PlayerCard
            key={player.dataPlayer}
            name={player.name}
            image={player.image}
            dataPlayer={player.dataPlayer}
          />
        ))}
      </div>
    </div>
  );
}